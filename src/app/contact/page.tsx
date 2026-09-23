import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { Icon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { Button, CTABand, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";

const DESCRIPTION = `Contact ${site.name} — call ${site.phoneDisplay} or email ${site.email}. Open seven days a week across the Tampa Bay area.`;

export const metadata: Metadata = {
  title: "Contact Us",
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { title: `Contact | ${site.shortName}`, description: DESCRIPTION },
};

const TRAIL = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/contact",
            name: `Contact ${site.name}`,
            description: DESCRIPTION,
            primaryAnswer: `${site.name} can be reached by phone at ${site.phoneDisplay} or by email at ${site.email}. The company operates seven days a week across the Tampa Bay area from a corporate office at ${site.hq.street}, ${site.hq.city}, ${site.hq.region} ${site.hq.postalCode}.`,
          }),
          breadcrumbSchema(TRAIL),
        )}
      />

      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lede="Call for the fastest answer, especially for anything urgent. Email and the quote form both reach us directly and are answered within one business hour during opening times."
        trail={TRAIL}
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal>
            <a
              href={site.phoneHref}
              className="group flex h-full flex-col rounded-2xl border border-navy-200 bg-navy-950 p-7 text-white transition hover:border-amber-brand-500"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-amber-brand-600 text-white">
                <Icon.phone className="size-5.5" />
              </span>
              <h2 className="mt-5 text-[18px] font-bold tracking-tight">Call us</h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-navy-300">
                The fastest way to get an answer, and the only sensible option for a same-day or
                next-day move.
              </p>
              <span className="mt-5 text-[20px] font-bold text-amber-brand-400">
                {site.phoneDisplay}
              </span>
            </a>
          </Reveal>

          <Reveal delay={70}>
            <a
              href={site.emailHref}
              className="group flex h-full flex-col rounded-2xl border border-navy-200 bg-white p-7 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-navy-900 text-amber-brand-400">
                <Icon.mail className="size-5.5" />
              </span>
              <h2 className="mt-5 text-[18px] font-bold tracking-tight text-navy-950">Email us</h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-navy-600">
                Good for detailed questions, building requirements, COI requests and commercial
                enquiries with attachments.
              </p>
              <span className="mt-5 break-all text-[16px] font-semibold text-amber-brand-700">
                {site.email}
              </span>
            </a>
          </Reveal>

          <Reveal delay={140}>
            <Link
              href="/quote"
              className="group flex h-full flex-col rounded-2xl border border-navy-200 bg-white p-7 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-navy-900 text-amber-brand-400">
                <Icon.doc className="size-5.5" />
              </span>
              <h2 className="mt-5 text-[18px] font-bold tracking-tight text-navy-950">
                Request a quote
              </h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-navy-600">
                The structured form captures everything we need to quote accurately the first time.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[16px] font-semibold text-amber-brand-700">
                Start a free quote
                <Icon.arrow className="size-4.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Details" title="Business information" />
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-navy-500">
                  Corporate office
                </h3>
                <address className="mt-2 text-[16px] not-italic leading-relaxed text-navy-800">
                  {site.legalName}
                  <br />
                  {site.hq.street}
                  <br />
                  {site.hq.city}, {site.hq.region} {site.hq.postalCode}
                </address>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-500">
                  This is our registered office, not a walk-in storefront. Crews dispatch to jobs
                  across the Tampa Bay service area — please call before visiting.
                </p>
              </div>

              <div>
                <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-navy-500">
                  Service area
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-navy-800">
                  The entire Tampa Bay region — Hillsborough, Pinellas, Pasco and Polk counties —
                  plus long-distance moves out of Tampa Bay to anywhere in Florida and up the East
                  Coast.
                </p>
                <Link
                  href="/areas-we-serve"
                  className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-amber-brand-700 hover:text-amber-brand-900 sm:min-h-0"
                >
                  See all {areas.length} areas
                  <Icon.arrow className="size-4" />
                </Link>
              </div>

              <div>
                <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-navy-500">
                  Licensing
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-navy-800">
                  {site.credentials.usdotNote}. {site.credentials.insurance}. Certificates of
                  insurance for buildings and HOAs are issued on request, usually the same day.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-navy-200 bg-white p-7 shadow-card">
              <h3 className="flex items-center gap-2 text-[17px] font-bold tracking-tight text-navy-950">
                <Icon.clock className="size-5 text-amber-brand-700" />
                Opening hours
              </h3>
              <dl className="mt-5 divide-y divide-navy-100">
                {site.hoursDisplay.map((h) => (
                  <div key={h.label} className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="text-[15px] text-navy-600">{h.label}</dt>
                    <dd className="text-[15px] font-semibold text-navy-950">{h.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 rounded-xl bg-navy-50 p-4 text-[14px] leading-relaxed text-navy-600">
                Moves themselves run outside these hours regularly — after-hours and overnight
                commercial relocations are routine, and we schedule around whatever your building
                allows.
              </p>
              <div className="mt-6 space-y-3">
                <Button href={site.phoneHref} className="w-full" size="lg">
                  <Icon.phone className="size-4.5" />
                  {site.phoneDisplay}
                </Button>
                <Button href="/quote" variant="ghost" className="w-full" size="lg">
                  Request a quote online
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
