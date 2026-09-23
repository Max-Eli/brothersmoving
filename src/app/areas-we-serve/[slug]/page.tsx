import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, getArea } from "@/lib/areas";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
  areaServiceSchema,
  faqSchema,
} from "@/lib/schema";
import { Icon, ServiceIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Button,
  Card,
  CTABand,
  FactTable,
  JsonLd,
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "@/components/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/areas-we-serve/${area.slug}` },
    openGraph: {
      title: `${area.metaTitle} | ${site.shortName}`,
      description: area.metaDescription,
      url: `/areas-we-serve/${area.slug}`,
      type: "website",
    },
  };
}

export default async function AreaPage({ params }: Params) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const trail = [
    { name: "Home", href: "/" },
    { name: "Areas We Serve", href: "/areas-we-serve" },
    { name: area.name, href: `/areas-we-serve/${area.slug}` },
  ];

  const popular = area.popularServices.map((s) => getService(s)).filter(Boolean);
  const nearby = areas.filter((a) => a.slug !== area.slug && a.county === area.county).slice(0, 5);
  const others = areas.filter((a) => a.slug !== area.slug && a.county !== area.county).slice(0, 7);

  const facts = [
    { label: "County", value: area.county },
    { label: "Population", value: area.population },
    { label: "Travel from Tampa", value: area.driveTime },
    { label: "ZIP codes served", value: area.zips.length > 6 ? `${area.zips.length} ZIPs` : area.zips.join(", ") },
    { label: "Travel surcharge", value: "None" },
    { label: "Services available", value: "All 10" },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: `/areas-we-serve/${area.slug}`,
            name: area.metaTitle,
            description: area.metaDescription,
            primaryAnswer: area.summary,
          }),
          breadcrumbSchema(trail),
          areaServiceSchema(area),
          faqSchema(area.faqs),
        )}
      />

      <PageHero
        eyebrow={area.county}
        title={`Movers in ${area.name}, FL`}
        lede={area.summary}
        trail={trail}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" size="lg">
            Get a free {area.name} quote
            <Icon.arrow className="size-4.5" />
          </Button>
          <Button href={site.phoneHref} variant="onDark" size="lg">
            <Icon.phone className="size-4.5" />
            {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      {/* Intro + facts */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Reveal>
              <Prose>
                {area.intro.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </Prose>
            </Reveal>

            <Reveal>
              <div className="mt-10">
                <h2 className="text-[17px] font-bold tracking-tight text-navy-950">
                  Neighborhoods we move in {area.name}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="rounded-full border border-navy-200 bg-navy-50 px-3.5 py-1.5 text-[14px] font-medium text-navy-700"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10">
                <h2 className="text-[17px] font-bold tracking-tight text-navy-950">
                  ZIP codes served in {area.name}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-600">
                  {area.zips.join(" · ")}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="lg:sticky lg:top-28">
              <FactTable facts={facts} title={`${area.name} at a glance`} />
              <div className="mt-5 rounded-2xl border border-navy-200 bg-white p-6 shadow-card">
                <p className="text-[15px] font-bold tracking-tight text-navy-950">
                  Moving in or out of {area.name}?
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-600">
                  Free walkthrough and a written flat rate, usually the same day. No travel surcharge
                  for {area.name}.
                </p>
                <Button href="/quote" className="mt-4 w-full">
                  Request a quote
                </Button>
                <a
                  href={site.phoneHref}
                  className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl border border-navy-200 px-5 py-3 text-[15px] font-semibold text-navy-900 transition hover:bg-navy-50"
                >
                  <Icon.phone className="size-4 text-amber-brand-700" />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Local knowledge — the real differentiator on a city page */}
      <Section tone="tint">
        <Reveal>
          <SectionHeading
            eyebrow={`Local knowledge`}
            title={`What we know about moving in ${area.name}`}
            lede="The operational details that actually affect a move here — access, building rules, timing and the things that catch out crews who do not work this area regularly."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {area.localNotes.map((note, i) => (
            <Reveal key={note.title} delay={(i % 2) * 70}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <span className="flex size-9 items-center justify-center rounded-lg bg-amber-brand-100 text-amber-brand-900">
                  <Icon.pin className="size-4.5" />
                </span>
                <h3 className="mt-4 text-[16px] font-bold tracking-tight text-navy-950">{note.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-600">{note.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Popular services here */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Most requested"
            title={`Popular moving services in ${area.name}`}
            lede={`All ten of our services are available in ${area.name}. These are the ones customers here book most often.`}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {popular.map((s, i) => (
            <Reveal key={s!.slug} delay={(i % 2) * 70}>
              <Card href={`/services/${s!.slug}`} className="flex h-full gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-amber-brand-400 transition group-hover:bg-amber-brand-600 group-hover:text-white">
                  <ServiceIcon name={s!.icon} className="size-6" />
                </span>
                <div>
                  <h3 className="text-[17px] font-bold tracking-tight text-navy-950">
                    {s!.name} in {area.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-navy-600">{s!.summary}</p>
                  <span className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-amber-brand-700 sm:min-h-0">
                    Learn more
                    <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-2xl border border-navy-200 bg-navy-50 p-6">
            <p className="text-[15px] font-semibold text-navy-900">All services available in {area.name}:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-navy-200 bg-white px-3.5 py-1.5 text-[14px] font-medium text-navy-700 transition hover:border-navy-400 hover:text-navy-900 sm:min-h-0"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FAQs */}
      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title={`Moving in ${area.name}: common questions`}
              lede={`What customers in ${area.name} ask before they book.`}
            />
            <div className="mt-8">
              <Button href="/faq" variant="ghost">
                All frequently asked questions
                <Icon.arrow className="size-4" />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <FAQAccordion faqs={area.faqs} />
          </Reveal>
        </div>
      </Section>

      {/* Nearby */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Nearby"
            title="Other areas we serve"
            lede="Moving between two of these? It is a standard local move, completed in a single day."
          />
        </Reveal>

        {nearby.length > 0 && (
          <div className="mt-10">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-navy-500">
              Also in {area.county}
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((a) => (
                <Card key={a.slug} href={`/areas-we-serve/${a.slug}`}>
                  <h4 className="flex items-center gap-2 text-[16px] font-bold tracking-tight text-navy-950">
                    <Icon.pin className="size-4 text-amber-brand-500" />
                    Movers in {a.name}
                  </h4>
                  <p className="mt-2 text-[14px] leading-relaxed text-navy-600">
                    {a.neighborhoods.slice(0, 3).join(", ")}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-navy-500">
            Elsewhere in Tampa Bay
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {others.map((a) => (
              <Link
                key={a.slug}
                href={`/areas-we-serve/${a.slug}`}
                className="inline-flex min-h-11 items-center rounded-full border border-navy-200 px-3.5 py-1.5 text-[14px] font-medium text-navy-700 transition hover:border-navy-400 hover:bg-navy-50 hover:text-navy-900 sm:min-h-0"
              >
                {a.name}
              </Link>
            ))}
            <Link
              href="/areas-we-serve"
              className="inline-flex min-h-11 items-center rounded-full bg-navy-900 px-3.5 py-1.5 text-[14px] font-semibold text-white transition hover:bg-navy-800 sm:min-h-0"
            >
              View all areas
            </Link>
          </div>
        </div>
      </Section>

      <CTABand
        title={`Get a flat-rate quote for your ${area.name} move`}
        lede={`Free walkthrough, a written price before moving day, and no travel surcharge for ${area.name}.`}
      />
    </>
  );
}
