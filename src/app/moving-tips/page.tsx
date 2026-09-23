import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { Icon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { Button, Card, CTABand, JsonLd, PageHero, Section } from "@/components/ui";

const DESCRIPTION =
  "Practical moving guides from a Tampa moving company: what movers cost, an 8-week checklist, packing fragile items and spotting a moving scam.";

export const metadata: Metadata = {
  title: "Moving Tips & Guides",
  description: DESCRIPTION,
  alternates: { canonical: "/moving-tips" },
  openGraph: { title: `Moving Tips & Guides | ${site.shortName}`, description: DESCRIPTION },
};

const TRAIL = [
  { name: "Home", href: "/" },
  { name: "Moving Tips", href: "/moving-tips" },
];

export default function MovingTipsPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/moving-tips",
            name: "Moving Tips & Guides",
            description: DESCRIPTION,
          }),
          breadcrumbSchema(TRAIL),
          {
            "@type": "ItemList",
            name: "Moving guides",
            itemListElement: posts.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              url: `${site.url}/moving-tips/${p.slug}`,
            })),
          },
        )}
      />

      <PageHero
        eyebrow="Moving resources"
        title="Moving tips and guides"
        lede="Written by people who move households for a living — including the parts that are not in our commercial interest to tell you, like when hiring packers is a waste of your money."
        trail={TRAIL}
      />

      <Section>
        {/* Featured */}
        <Reveal>
          <article className="overflow-hidden rounded-2xl border border-navy-200 bg-navy-950 shadow-lift">
            <div className="grid gap-8 p-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:p-12">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-amber-brand-600 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.1em] text-white">
                    Most read
                  </span>
                  <span className="text-[13px] font-medium text-navy-300">
                    {featured.category} · {featured.readingTime}
                  </span>
                </div>
                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-navy-300">{featured.excerpt}</p>
                <div className="mt-8">
                  <Button href={`/moving-tips/${featured.slug}`} size="lg">
                    Read the guide
                    <Icon.arrow className="size-4.5" />
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-amber-brand-400">
                  The short answer
                </p>
                <p className="mt-3 text-[16px] leading-relaxed text-navy-200">
                  {featured.keyTakeaway}
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 60}>
              <Card href={`/moving-tips/${p.slug}`} className="flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-navy-100 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.1em] text-navy-700">
                    {p.category}
                  </span>
                  <span className="text-[12px] font-medium text-navy-500">{p.readingTime}</span>
                </div>
                <h2 className="mt-4 text-[19px] font-bold leading-snug tracking-tight text-navy-950">
                  {p.title}
                </h2>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-navy-600">{p.excerpt}</p>
                <span className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-amber-brand-700 sm:min-h-0">
                  Read guide
                  <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Done reading? Get a real number."
        lede="Free walkthrough, a written flat rate before moving day, and no charges added at the end."
      />
    </>
  );
}
