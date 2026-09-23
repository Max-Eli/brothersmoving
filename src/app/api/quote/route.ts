import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/**
 * Quote requests are delivered to a Make.com webhook, which fans them out to
 * email, CRM, Sheets or whatever else the scenario is wired to.
 *
 * Deliberately env-only and never hardcoded: a Make webhook URL is a
 * capability credential — anyone holding it can post into the scenario — and
 * this repository is public. Set QUOTE_WEBHOOK_URL in .env.local for local
 * development and in the hosting provider's environment settings for
 * production. Leave it unset to disable webhook delivery.
 */
const WEBHOOK_URL = process.env.QUOTE_WEBHOOK_URL?.trim() || "";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  origin?: string;
  destination?: string;
  date?: string;
  size?: string;
  service?: string;
  details?: string;
  extras?: string[];
  company_website?: string;
};

/** Very small in-memory rate limit — enough to blunt casual form spam. */
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please call us instead." },
      { status: 429 },
    );
  }

  let body: QuotePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — accept silently so bots don't learn they were caught.
  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }

  const required: (keyof QuotePayload)[] = ["name", "phone", "email", "origin", "destination", "service"];
  const missing = required.filter((k) => !String(body[k] ?? "").trim());
  if (missing.length) {
    return NextResponse.json(
      { error: `Please complete: ${missing.join(", ")}.` },
      { status: 400 },
    );
  }

  const email = String(body.email).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  const extras = (body.extras ?? []).map((e) => String(e)).filter(Boolean);
  const submittedAt = new Date().toISOString();

  // Display-ready variants so downstream templates (the Make email) never have
  // to do date parsing or string munging, and never render an empty cell.
  const rawDate = String(body.date || "").trim();
  const moveDateDisplay = rawDate
    ? new Date(`${rawDate}T00:00:00Z`).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      })
    : "Not specified";
  const submittedAtDisplay = new Date(submittedAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/New_York",
  });
  // Digits only, so the value can drop straight into a tel: href.
  const phoneHref = String(body.phone).replace(/[^0-9+]/g, "");
  const summary = `Quote request — ${body.name} (${body.origin} → ${body.destination})`;

  /**
   * Flat payload for the Make.com scenario. Values are normalised so every
   * field is always present with a predictable type — Make modules are much
   * easier to map when a key never disappears. `extrasText` is supplied
   * alongside the array because Make's email and Sheets modules handle a
   * string far more gracefully than a collection.
   */
  const payload = {
    name: String(body.name).trim(),
    phone: String(body.phone).trim(),
    email,
    origin: String(body.origin).trim(),
    destination: String(body.destination).trim(),
    phoneHref,
    moveDate: rawDate,
    moveDateDisplay,
    homeSize: String(body.size || "").trim() || "Not specified",
    service: String(body.service).trim(),
    extras,
    extrasText: extras.join(", ") || "None",
    details: String(body.details || "").trim() || "None provided",
    summary,
    submittedAt,
    submittedAtDisplay,
    source: site.domain,
    sourcePage: request.headers.get("referer") || `https://${site.domain}/quote`,
  };

  const rows: [string, string][] = [
    ["Name", payload.name],
    ["Phone", payload.phone],
    ["Email", payload.email],
    ["Moving from", payload.origin],
    ["Moving to", payload.destination],
    ["Preferred date", payload.moveDateDisplay],
    ["Size", payload.homeSize],
    ["Service", payload.service],
    ["Add-ons", payload.extrasText],
    ["Details", payload.details],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  /** Never lose a lead to a delivery outage — always leave a trace in the log. */
  const logLead = (reason: string) =>
    console.warn(`[quote] ${reason}. Lead preserved in logs:\n${text}`);

  // --- Primary delivery: Make.com webhook --------------------------------
  let webhookOk = false;
  if (WEBHOOK_URL) {
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        // Don't let a hanging webhook hold the visitor's request open.
        signal: AbortSignal.timeout(10_000),
      });
      if (res.ok) {
        webhookOk = true;
      } else {
        console.error("[quote] Webhook rejected the payload:", res.status, await res.text());
      }
    } catch (err) {
      console.error("[quote] Webhook request failed:", err);
    }
  }

  // --- Optional secondary delivery: email via Resend ----------------------
  const apiKey = process.env.RESEND_API_KEY;
  let emailOk = false;

  if (apiKey) {
    const to = process.env.QUOTE_INBOX || site.email;
    const from = process.env.QUOTE_FROM || `Website <noreply@${site.domain}>`;
    const html = `
      <h2 style="font-family:system-ui,sans-serif">New quote request — ${site.name}</h2>
      <table style="font-family:system-ui,sans-serif;border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 16px 6px 0;color:#555;vertical-align:top"><strong>${escapeHtml(
                k,
              )}</strong></td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="font-family:system-ui,sans-serif;color:#777;font-size:13px">Submitted from ${site.domain}</p>
    `;

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: summary,
          text,
          html,
        }),
        signal: AbortSignal.timeout(10_000),
      });
      if (res.ok) emailOk = true;
      else console.error("[quote] Resend rejected the message:", res.status, await res.text());
    } catch (err) {
      console.error("[quote] Email delivery failed:", err);
    }
  }

  // The lead is delivered if any channel accepted it.
  if (webhookOk || emailOk) {
    return NextResponse.json({ ok: true, delivered: true, webhook: webhookOk, email: emailOk });
  }

  if (!WEBHOOK_URL && !apiKey) {
    logLead(
      "No delivery channel configured — set QUOTE_WEBHOOK_URL (and ideally RESEND_API_KEY). See README",
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  logLead("Every delivery channel failed");
  return NextResponse.json(
    { error: "We couldn't send your request just now." },
    { status: 502 },
  );
}
