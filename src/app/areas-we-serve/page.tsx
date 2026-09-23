import type { Metadata } from "next";
import Link from "next/link";
import { areas, areasByCounty, primaryAreas } from "@/lib/areas";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { Icon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { Button, Card, CTABand, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";

const DESCRIPTION =
  "We serve 20 Tampa Bay communities across Hillsborough, Pinellas, Pasco and Polk counties — Tampa, St. Petersburg, Clearwater, Brandon and more.";

export const metadata: Metadata = {
  title: "Areas We Serve in Tampa Bay",
  description: DESCRIPTION,
  alternates: { canonical: "/areas-we-serve" },
  openGraph: { title: `Areas We Serve | ${site.shortName}`, description: DESCRIPTION },
};

const TRAIL = [
  { name: "Home", href: "/" },
  { name: "Areas We Serve", href: "/areas-we-serve" },
];

const COUNTY_ORDER = ["Hillsborough County", "Pinellas County", "Pasco County", "Polk County"];

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/areas-we-serve",
            name: "Areas We Serve — Tampa Bay Moving Service Area",
            description: DESCRIPTION,
            primaryAnswer:
              "Brothers EZ Moving of Tampa serves 20 communities across Hillsborough, Pinellas, Pasco and Polk counties, including Tampa, St. Petersburg, Clearwater, Brandon, Riverview and Wesley Chapel, with no travel surcharge inside the standard service area.",
          }),
          breadcrumbSchema(TRAIL),
          {
            "@type": "ItemList",
            name: "Tampa Bay service area",
            itemListElement: areas.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `Movers in ${a.name}, FL`,
              url: `${site.url}/areas-we-serve/${a.slug}`,
            })),
          },
        )}
      />

      <PageHero
        eyebrow="Service area"
        title="Moving services across the Tampa Bay area"
        lede="Twenty communities across four counties — Hillsborough, Pinellas, Pasco and Polk — with no travel surcharge anywhere inside our standard service area. We also handle long-distance moves out of Tampa Bay to anywhere in Florida and up the East Coast."
        trail={TRAIL}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" size="lg">
            Check availability for your address
            <Icon.arrow className="size-4.5" />
          </Button>
          <Button href={site.phoneHref} variant="onDark" size="lg">
            <Icon.phone className="size-4.5" />
            {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      {/* Primary markets */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Primary markets"
            title="Where most of our work is"
            lede="Six communities account for the bulk of our schedule. Each page covers the access issues, building requirements and local details that actually affect a move there."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {primaryAreas.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 60}>
              <Card href={`/areas-we-serve/${a.slug}`} className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-navy-500">
                    <Icon.pin className="size-3.5 text-amber-brand-500" />
                    {a.county}
                  </span>
                  <span className="text-[12px] font-medium text-navy-500">{a.population}</span>
                </div>
                <h2 className="mt-3 text-[20px] font-bold tracking-tight text-navy-950">
                  Movers in {a.name}
                </h2>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-navy-600">{a.summary}</p>
                <div className="mt-5 border-t border-navy-100 pt-4">
                  <p className="text-[13px] text-navy-500">
                    <span className="font-semibold text-navy-700">Neighborhoods:</span>{" "}
                    {a.neighborhoods.slice(0, 4).join(", ")}
                    {a.neighborhoods.length > 4 && ` +${a.neighborhoods.length - 4} more`}
                  </p>
                </div>
                <span className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-amber-brand-700 sm:min-h-0">
                  {a.name} moving services
                  <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* By county */}
      <Section tone="tint">
        <Reveal>
          <SectionHeading
            eyebrow="Full coverage"
            title="Every community we serve, by county"
            lede="If your address is not listed, call us anyway — we regularly take jobs just outside this list."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {COUNTY_ORDER.filter((c) => areasByCounty[c]?.length).map((county, i) => (
            <Reveal key={county} delay={i * 60}>
              <div className="h-full rounded-2xl border border-navy-200 bg-white p-6 shadow-card">
                <h3 className="flex items-center gap-2 text-[17px] font-bold tracking-tight text-navy-950">
                  <Icon.pin className="size-4.5 text-amber-brand-500" />
                  {county}
                </h3>
                <ul className="mt-4 grid gap-1 sm:grid-cols-2">
                  {areasByCounty[county].map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/areas-we-serve/${a.slug}`}
                        className="block rounded-lg px-3 py-2 text-[15px] font-medium text-navy-700 transition hover:bg-navy-50 hover:text-navy-900"
                      >
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Long distance */}
      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Beyond Tampa Bay"
              title="Long-distance moves out of Tampa"
              lede="Your shipment travels on a dedicated truck with a guaranteed delivery window and the same crew loading and unloading — no consolidation with other households, no handing off between carriers."
              tone="dark"
            />
            <div className="mt-8">
              <Button href="/services/long-distance-moving" variant="onDark">
                Long-distance moving details
                <Icon.arrow className="size-4" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <dl className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/15">
              {[
                ["Tampa → Miami / Fort Lauderdale", "Next-day"],
                ["Tampa → Orlando / Jacksonville", "Next-day"],
                ["Tampa → Atlanta / the Carolinas", "1–3 days"],
                ["Tampa → Northeast corridor", "2–5 days"],
                ["Anywhere in Florida", "Next-day"],
              ].map(([route, time]) => (
                <div key={route} className="flex flex-wrap items-baseline justify-between gap-4 px-6 py-4">
                  <dt className="text-[15px] text-navy-300">{route}</dt>
                  <dd className="text-[15px] font-semibold text-white">{time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* Services cross-link */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="What we offer"
            title="Every service, in every area"
            lede="All ten services are available throughout the Tampa Bay service area."
          />
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="inline-flex min-h-11 items-center rounded-full border border-navy-200 px-4 py-2 text-[14px] font-medium text-navy-700 transition hover:border-navy-400 hover:bg-navy-50 hover:text-navy-900 sm:min-h-0"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </Section>

      <CTABand
        title="Not sure if we cover your address?"
        lede="Call and ask. We regularly take jobs just outside the listed service area, and we will tell you straight away either way."
      />
    </>
  );
}
