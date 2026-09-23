import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { Icon, ServiceIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { Button, Card, CTABand, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";

const DESCRIPTION =
  "Every moving service we offer across Tampa Bay: residential, commercial, long-distance, packing, storage, labor-only, specialty items and more.";

export const metadata: Metadata = {
  title: "Moving Services in Tampa Bay",
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: { title: `Moving Services in Tampa Bay | ${site.shortName}`, description: DESCRIPTION },
};

const TRAIL = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/services",
            name: "Moving Services in Tampa Bay",
            description: DESCRIPTION,
            primaryAnswer:
              "Brothers EZ Moving of Tampa offers ten moving services across Tampa Bay: residential moving, commercial and office moving, long-distance moving, packing and unpacking, storage, labor-only help, specialty item moving, apartment and condo moving, senior and downsizing moves, and same-day or last-minute moving.",
          }),
          breadcrumbSchema(TRAIL),
          {
            "@type": "ItemList",
            name: "Moving services",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.name,
              url: `${site.url}/services/${s.slug}`,
            })),
          },
        )}
      />

      <PageHero
        eyebrow="Services"
        title="Moving services across Tampa Bay"
        lede="Ten services covering the full range of what a household or a business actually needs — from a studio move across Tampa to an interstate relocation, and the specialist work most crews should not attempt."
        trail={TRAIL}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" size="lg">
            Get a free quote
            <Icon.arrow className="size-4.5" />
          </Button>
          <Button href={site.phoneHref} variant="onDark" size="lg">
            <Icon.phone className="size-4.5" />
            {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 60}>
              <Card href={`/services/${s.slug}`} className="flex h-full flex-col">
                <span className="flex size-12 items-center justify-center rounded-xl bg-navy-900 text-amber-brand-400 transition group-hover:bg-amber-brand-600 group-hover:text-white">
                  <ServiceIcon name={s.icon} className="size-6" />
                </span>
                <h2 className="mt-5 text-[19px] font-bold tracking-tight text-navy-950">{s.name}</h2>
                <p className="mt-1.5 text-[14px] font-medium text-amber-brand-700">{s.tagline}</p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-600">{s.summary}</p>
                <ul className="mt-5 space-y-1.5 border-t border-navy-100 pt-4">
                  {s.includes.slice(0, 3).map((inc) => (
                    <li key={inc.title} className="flex items-start gap-2 text-[14px] text-navy-600">
                      <Icon.check className="mt-1 size-3.5 shrink-0 text-amber-brand-700" strokeWidth={2.4} />
                      {inc.title}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-amber-brand-700 sm:min-h-0">
                  {s.name} details
                  <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <Reveal>
          <SectionHeading
            eyebrow="Not sure which you need?"
            title="Two questions usually settle it"
            lede="Most people arrive certain they need a full-service move, and a fair number of them do not. Here is the honest way to work it out."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-navy-200 bg-white p-7 shadow-card">
              <h3 className="text-[19px] font-bold tracking-tight text-navy-950">
                Have you already rented a truck?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-600">
                If yes, you almost certainly want{" "}
                <Link href="/services/labor-only-moving" className="font-semibold text-amber-brand-700 hover:underline">
                  labor-only help
                </Link>{" "}
                rather than a full-service move — an hourly crew to load and unload, at a two-hour
                minimum. If no, a full-service{" "}
                <Link href="/services/residential-moving" className="font-semibold text-amber-brand-700 hover:underline">
                  residential move
                </Link>{" "}
                covers the truck, the crew, the equipment and the protection in one price.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-navy-200 bg-white p-7 shadow-card">
              <h3 className="text-[19px] font-bold tracking-tight text-navy-950">
                Do your dates line up on both ends?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-600">
                If there is a gap between moving out and moving in — a delayed closing, a build-out, a
                lease that ends early —{" "}
                <Link href="/services/storage-solutions" className="font-semibold text-amber-brand-700 hover:underline">
                  storage
                </Link>{" "}
                should be part of the quote from the start rather than an emergency arranged mid-move.
                Tell us the risk when you book and it is priced in up front.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-8 rounded-2xl border border-navy-200 bg-white p-7 text-center">
            <p className="text-[16px] leading-relaxed text-navy-700">
              Still unsure? Call{" "}
              <a href={site.phoneHref} className="font-semibold text-amber-brand-700 hover:underline">
                {site.phoneDisplay}
              </a>{" "}
              and describe your situation. We will tell you which service fits — including when the
              cheaper option is the right one.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Service area"
            title="Every service, everywhere in Tampa Bay"
            lede="All ten services are available across Hillsborough, Pinellas, Pasco and Polk counties, with no travel surcharge inside our standard area."
          />
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-2">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={`/areas-we-serve/${a.slug}`}
              className="inline-flex items-center gap-1.5 inline-flex min-h-11 items-center rounded-full border border-navy-200 px-4 py-2 text-[14px] font-medium text-navy-700 transition hover:border-navy-400 hover:bg-navy-50 hover:text-navy-900 sm:min-h-0"
            >
              <Icon.pin className="size-3.5 text-amber-brand-500" />
              {a.name}
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
