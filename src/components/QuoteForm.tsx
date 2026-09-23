"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Icon } from "./Icons";

const HOME_SIZES = [
  "Studio / small 1-bedroom",
  "1-bedroom",
  "2-bedroom",
  "3-bedroom",
  "4-bedroom",
  "5+ bedroom",
  "Office / commercial",
  "A few items only",
];

const EXTRAS = [
  "Packing services",
  "Unpacking at destination",
  "Storage between dates",
  "Piano, safe or pool table",
  "Appliance disconnect / reconnect",
  "Certificate of insurance for my building",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [extras, setExtras] = useState<string[]>([]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, extras }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
      setExtras([]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-navy-200 bg-white p-8 text-center shadow-card sm:p-12">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-amber-brand-100 text-amber-brand-900">
          <Icon.check className="size-7" strokeWidth={2.4} />
        </span>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-navy-950">Request received</h2>
        <p className="mx-auto mt-3 max-w-md text-[16px] leading-relaxed text-navy-600">
          Thanks — we have your details. Someone will call you back within one business hour during
          opening times to arrange a walkthrough and get you a written flat-rate quote.
        </p>
        <p className="mt-6 text-[15px] text-navy-600">
          Need it sooner? Call us directly at{" "}
          <a href={site.phoneHref} className="font-semibold text-amber-brand-700 hover:underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-[14px] font-semibold text-navy-500 underline underline-offset-4 hover:text-navy-800"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-navy-200 bg-white p-6 shadow-card sm:p-8"
      noValidate={false}
    >
      {/* Honeypot: bots fill hidden fields, humans never see this. */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Fieldset legend="Your details" step={1}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" required autoComplete="name" placeholder="Jane Doe" />
          <Field
            label="Phone number"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(813) 555-0142"
            hint="The fastest way for us to quote you"
          />
        </div>
        <Field label="Email address" name="email" type="email" required autoComplete="email" placeholder="jane@example.com" />
      </Fieldset>

      <Fieldset legend="Where you're moving" step={2}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Moving from" name="origin" required placeholder="City or ZIP — e.g. Tampa 33606" />
          <Field label="Moving to" name="destination" required placeholder="City or ZIP — e.g. Brandon 33511" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Preferred moving date" name="date" type="date" hint="Approximate is fine" />
          <Select label="Home or office size" name="size" required options={HOME_SIZES} placeholder="Select a size" />
        </div>
      </Fieldset>

      <Fieldset legend="What you need" step={3}>
        <Select
          label="Primary service"
          name="service"
          required
          options={services.map((s) => s.name)}
          placeholder="Select a service"
        />

        <fieldset>
          <legend className="text-[14px] font-semibold text-navy-900">
            Anything else? <span className="font-normal text-navy-500">(optional)</span>
          </legend>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {EXTRAS.map((extra) => {
              const checked = extras.includes(extra);
              return (
                <label
                  key={extra}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-[14px] transition ${
                    checked
                      ? "border-amber-brand-400 bg-amber-brand-50 text-navy-900"
                      : "border-navy-200 text-navy-700 hover:border-navy-300 hover:bg-navy-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="size-4 rounded border-navy-300 text-amber-brand-700 focus:ring-amber-brand-500"
                    checked={checked}
                    onChange={() =>
                      setExtras((prev) =>
                        prev.includes(extra) ? prev.filter((x) => x !== extra) : [...prev, extra],
                      )
                    }
                  />
                  {extra}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor="details" className="block text-[14px] font-semibold text-navy-900">
            Anything we should know? <span className="font-normal text-navy-500">(optional)</span>
          </label>
          <p className="mt-1 text-[13px] text-navy-500">
            Stairs, elevators, long walks from the door, tricky parking, oversized items — these are
            the details that make a quote accurate.
          </p>
          <textarea
            id="details"
            name="details"
            rows={4}
            placeholder="Third floor walk-up at the old place, ground floor at the new one. One upright piano."
            className="mt-2.5 w-full rounded-xl border border-navy-200 px-4 py-3 text-[16px] text-navy-900 placeholder:text-navy-500 sm:text-[15px] focus:border-amber-brand-400 focus:outline-none focus:ring-2 focus:ring-amber-brand-500/20"
          />
        </div>
      </Fieldset>

      {status === "error" && (
        <div role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-800">
          <p className="font-semibold">We couldn&apos;t send that.</p>
          <p className="mt-1">
            {error} Please call us at{" "}
            <a href={site.phoneHref} className="font-semibold underline">
              {site.phoneDisplay}
            </a>{" "}
            and we&apos;ll take your details over the phone.
          </p>
        </div>
      )}

      <div className="mt-8 border-t border-navy-100 pt-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-brand-600 px-6 py-4 text-[16px] font-semibold text-white shadow-sm transition hover:bg-amber-brand-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? (
            <>
              <Spinner /> Sending…
            </>
          ) : (
            <>
              Get my free quote
              <Icon.arrow className="size-4.5" />
            </>
          )}
        </button>
        <p className="mt-4 text-[13px] leading-relaxed text-navy-500">
          We&apos;ll call you back within one business hour during opening times. Your details are
          used only to prepare your quote — we never sell or share them. See our{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-navy-800">
            privacy policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}

function Fieldset({
  legend,
  step,
  children,
}: {
  legend: string;
  step: number;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="mb-8 space-y-5 last:mb-0">
      <legend className="mb-5 flex items-center gap-3">
        <span className="flex size-7 items-center justify-center rounded-full bg-navy-900 text-[13px] font-bold text-white">
          {step}
        </span>
        <span className="text-[17px] font-bold tracking-tight text-navy-950">{legend}</span>
      </legend>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  hint,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  hint?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[14px] font-semibold text-navy-900">
        {label}
        {required && <span className="ml-1 text-amber-brand-700">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-navy-200 px-4 py-3 text-[16px] text-navy-900 placeholder:text-navy-500 sm:text-[15px] focus:border-amber-brand-400 focus:outline-none focus:ring-2 focus:ring-amber-brand-500/20"
      />
      {hint && <p className="mt-1.5 text-[13px] text-navy-500">{hint}</p>}
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[14px] font-semibold text-navy-900">
        {label}
        {required && <span className="ml-1 text-amber-brand-700">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full appearance-none rounded-xl border border-navy-200 bg-white bg-[length:16px] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-[16px] text-navy-900 sm:text-[15px] focus:border-amber-brand-400 focus:outline-none focus:ring-2 focus:ring-amber-brand-500/20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23577' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="" disabled>
          {placeholder ?? "Select…"}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function Spinner() {
  return (
    <svg className="size-4 animate-spin" viewBox="0 0 24 24" aria-hidden>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8v3a5 5 0 0 0-5 5H4z"
      />
    </svg>
  );
}
