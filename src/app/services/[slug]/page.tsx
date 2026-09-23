import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import { areas, primaryAreas } from "@/lib/areas";
import { site } from "@/lib/site";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from "@/lib/schema";
import { Icon, ServiceIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Button,
  Card,
  CTABand,
  CheckList,
  FactTable,
  JsonLd,
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "@/components/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.metaTitle} | ${site.shortName}`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const trail = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.name, href: `/services/${service.slug}` },
  ];

  const related = service.related.map((s) => getService(s)).filter(Boolean);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: `/services/${service.slug}`,
            name: service.metaTitle,
            description: service.metaDescription,
            primaryAnswer: service.summary,
          }),
          breadcrumbSchema(trail),
          serviceSchema(service),
          faqSchema(service.faqs),
        )}
      />

      <PageHero eyebrow={service.tagline} title={service.name} lede={service.summary} trail={trail}>
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

      {/* Intro + facts */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Reveal>
              <Prose>
                {service.intro.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </Prose>
            </Reveal>

            <Reveal>
              <div className="mt-10 rounded-2xl border border-navy-200 bg-navy-50 p-6">
                <h2 className="text-[17px] font-bold tracking-tight text-navy-950">
                  Best suited to
                </h2>
                <div className="mt-4">
                  <CheckList items={service.bestFor} />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="lg:sticky lg:top-28">
              <FactTable facts={service.facts} title="At a glance" />
              <div className="mt-5 rounded-2xl border border-navy-200 bg-white p-6 shadow-card">
                <p className="text-[15px] font-bold tracking-tight text-navy-950">
                  Want a number for your job?
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-600">
                  The figures above are typical. Your written flat rate comes from a walkthrough of
                  your actual home, usually the same day.
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

      {/* What's included */}
      <Section tone="tint">
        <Reveal>
          <SectionHeading
            eyebrow="What's included"
            title={`Everything that comes with ${service.name.toLowerCase()}`}
            lede="Included in the quoted price, not offered as upsells once the crew is already at your door."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.includes.map((inc, i) => (
            <Reveal key={inc.title} delay={(i % 3) * 60}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <span className="flex size-9 items-center justify-center rounded-lg bg-amber-brand-100 text-amber-brand-900">
                  <Icon.check className="size-4.5" strokeWidth={2.4} />
                </span>
                <h3 className="mt-4 text-[16px] font-bold tracking-tight text-navy-950">{inc.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-600">{inc.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title={`The ${service.name.toLowerCase()} process`}
            lede="What happens, in order, from the first call to the final walkthrough."
          />
        </Reveal>

        <ol className="mt-12 space-y-4">
          {service.process.map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <li className="flex gap-5 rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-[15px] font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[17px] font-bold tracking-tight text-navy-950">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-navy-600">{p.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* FAQs */}
      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title={`${service.name} FAQs`}
              lede="The questions customers ask most about this service."
            />
            <div className="mt-8">
              <Button href="/faq" variant="ghost">
                All frequently asked questions
                <Icon.arrow className="size-4" />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <FAQAccordion faqs={service.faqs} />
          </Reveal>
        </div>
      </Section>

      {/* Areas + related */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Where we offer it"
            title={`${service.name} across Tampa Bay`}
            lede="Available in every community we serve, with no travel surcharge inside our standard service area."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {primaryAreas.map((a, i) => (
            <Reveal key={a.slug} delay={i * 60}>
              <Card href={`/areas-we-serve/${a.slug}`} className="h-full">
                <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-navy-500">
                  <Icon.pin className="size-3.5 text-amber-brand-500" />
                  {a.county}
                </div>
                <h3 className="mt-3 text-[17px] font-bold tracking-tight text-navy-950">
                  {service.name} in {a.name}
                </h3>
                <span className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-amber-brand-700 sm:min-h-0">
                  View {a.name}
                  <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {areas
            .filter((a) => a.tier === 2)
            .map((a) => (
              <Link
                key={a.slug}
                href={`/areas-we-serve/${a.slug}`}
                className="inline-flex min-h-11 items-center rounded-full border border-navy-200 px-3.5 py-1.5 text-[14px] font-medium text-navy-700 transition hover:border-navy-400 hover:bg-navy-50 hover:text-navy-900 sm:min-h-0"
              >
                {a.name}
              </Link>
            ))}
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-navy-100 pt-12">
            <h2 className="text-2xl font-bold tracking-tight text-navy-950">Related services</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Card key={r!.slug} href={`/services/${r!.slug}`} className="h-full">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-navy-900 text-amber-brand-400 transition group-hover:bg-amber-brand-600 group-hover:text-white">
                    <ServiceIcon name={r!.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 text-[16px] font-bold tracking-tight text-navy-950">{r!.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-navy-600">{r!.tagline}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Section>

      <CTABand
        title={`Get a flat rate for ${service.name.toLowerCase()}`}
        lede="Free walkthrough, a written price before moving day, and nothing added at the end."
      />
    </>
  );
}
