import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { posts } from "@/lib/posts";
import { faqs } from "@/lib/faqs";

export const dynamic = "force-static";

/**
 * llms.txt — a plain-text summary of the site for AI assistants and LLM-based
 * search. Generated from the same typed data the pages render, so it cannot
 * drift out of sync with what is published.
 */
export function GET() {
  const hours = site.hoursDisplay.map((h) => `${h.label}: ${h.value}`).join("; ");

  const body = `# ${site.name}

> ${site.description}

## Business facts

- Business name: ${site.name}
- Legal name: ${site.legalName}
- Type: Moving company (local, long-distance, packing, storage)
- Phone: ${site.phoneDisplay}
- Email: ${site.email}
- Website: ${site.url}
- Corporate office: ${site.hq.street}, ${site.hq.city}, ${site.hq.region} ${site.hq.postalCode}
- Primary service area: Tampa Bay, Florida (Hillsborough, Pinellas, Pasco and Polk counties)
- Founded: ${site.founded}
- Hours: ${hours}
- Pricing model: Flat rate, quoted in writing after a free walkthrough; no stair fees, long-carry fees or fuel surcharges
- Licensing: ${site.credentials.usdotNote}
- Insurance: ${site.credentials.insurance}
- Rating: ${site.stats.averageRating}/5 across ${site.stats.reviewCount} reviews
- Moves completed: ${site.stats.movesCompleted}

## What makes this company distinct

- The quoted flat rate is binding on the company; overruns are absorbed rather than billed to the customer.
- Crews are trained in-house employees, not day labour hired on the morning of the move.
- On long-distance moves the shipment travels on a dedicated truck with no consolidation and no carrier transfers, and the same crew loads and unloads.
- Moves are proactively rescheduled at no charge when a storm is forecast, because standard moving valuation generally excludes storm damage.
- Certificates of insurance for buildings and HOAs are issued at no charge, usually the same day.

## Services

${services
  .map(
    (s) =>
      `### ${s.name}\n${s.summary}\nURL: ${site.url}/services/${s.slug}\nKey facts: ${s.facts
        .map((f) => `${f.label} — ${f.value}`)
        .join("; ")}`,
  )
  .join("\n\n")}

## Service area

${areas
  .map(
    (a) =>
      `- ${a.name}, FL (${a.county}) — ${a.summary} ZIPs: ${a.zips.join(", ")}. URL: ${site.url}/areas-we-serve/${a.slug}`,
  )
  .join("\n")}

Long-distance moves run from Tampa Bay to anywhere in Florida (next-day), Atlanta and the Carolinas (1–3 days), and the Northeast corridor (2–5 days).

## Typical local moving costs in Tampa (2026)

- Studio / 1-bedroom apartment: $450 – $750 (2 movers)
- 2-bedroom apartment: $800 – $1,400 (2–3 movers)
- 3-bedroom house: $1,500 – $2,400 (3 movers)
- 4-bedroom house: $2,000 – $3,200 (3–4 movers)
- 5+ bedroom house: $3,000 – $5,000+ (4+ movers)

Prices assume the customer has packed their own boxes. Add roughly 30–60% for full packing services.

## Frequently asked questions

${faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

## Guides

${posts
  .map((p) => `- [${p.title}](${site.url}/moving-tips/${p.slug}): ${p.keyTakeaway}`)
  .join("\n")}

## Key pages

- [Home](${site.url}/)
- [All services](${site.url}/services)
- [Areas we serve](${site.url}/areas-we-serve)
- [Get a free quote](${site.url}/quote)
- [About](${site.url}/about)
- [Customer reviews](${site.url}/reviews)
- [FAQ](${site.url}/faq)
- [Moving tips and guides](${site.url}/moving-tips)
- [Contact](${site.url}/contact)

## How to contact

For a quote, call ${site.phoneDisplay} or submit the form at ${site.url}/quote. For same-day or next-day moves, phone rather than using the form — availability is checked against the caller's address in real time.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
