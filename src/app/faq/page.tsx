import type { Metadata } from "next";
import Link from "next/link";
import { faqs, faqCategories } from "@/lib/faqs";
import { site } from "@/lib/site";
import { graph, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { Icon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import { Button, CTABand, JsonLd, PageHero, Section } from "@/components/ui";

const DESCRIPTION =
  "Answers on what movers cost, flat-rate pricing, what we won't move, insurance and claims, packing, scheduling and our Tampa Bay service area.";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: { title: `FAQ | ${site.shortName}`, description: DESCRIPTION },
};

const TRAIL = [
  { name: "Home", href: "/" },
  { name: "FAQ", href: "/faq" },
];

function anchor(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/faq",
            name: "Frequently Asked Questions",
            description: DESCRIPTION,
          }),
          breadcrumbSchema(TRAIL),
          faqSchema(faqs),
        )}
      />

      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        lede={`${faqs.length} straight answers about pricing, scheduling, moving day, insurance and everything else people ask before they book. If yours is not here, call ${site.phoneDisplay} and ask.`}
        trail={TRAIL}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          {/* Category jump list */}
          <nav aria-label="FAQ categories" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-navy-500">
              Jump to
            </p>
            <ul className="mt-4 space-y-1">
              {faqCategories.map((c) => (
                <li key={c}>
                  <a
                    href={`#${anchor(c)}`}
                    className="block rounded-lg px-3 py-2 text-[14px] font-medium text-navy-600 transition hover:bg-navy-50 hover:text-navy-900"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-navy-200 bg-navy-50 p-5">
              <p className="text-[14px] font-bold text-navy-950">Not answered here?</p>
              <p className="mt-2 text-[13px] leading-relaxed text-navy-600">
                Call and ask. We would rather answer ten questions now than surprise you later.
              </p>
              <a
                href={site.phoneHref}
                className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-amber-brand-700 hover:text-amber-brand-900 sm:min-h-0"
              >
                <Icon.phone className="size-4" />
                {site.phoneDisplay}
              </a>
            </div>
          </nav>

          <div className="space-y-14">
            {faqCategories.map((category) => {
              const items = faqs.filter((f) => f.category === category);
              if (!items.length) return null;
              return (
                <section key={category} id={anchor(category)} className="scroll-mt-28">
                  <Reveal>
                    <h2 className="text-2xl font-bold tracking-tight text-navy-950 sm:text-[1.75rem]">
                      {category}
                    </h2>
                    <div className="mt-6">
                      <FAQAccordion faqs={items} defaultOpen={null} />
                    </div>
                  </Reveal>
                </section>
              );
            })}
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl">
              Still comparing movers?
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-600">
              Our guides cover what a Tampa move actually costs, how to spot a moving scam, and the
              questions worth asking any company before you hand over a deposit — including the ones
              that are not in our commercial interest to tell you.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/moving-tips" size="lg">
                Read the guides
                <Icon.arrow className="size-4.5" />
              </Button>
              <Button href="/quote" variant="ghost" size="lg">
                Get a free quote
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand />
    </>
  );
}
