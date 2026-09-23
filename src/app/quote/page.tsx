import type { Metadata } from "next";
import { site } from "@/lib/site";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { Icon } from "@/components/Icons";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { CheckList, JsonLd, PageHero, Section } from "@/components/ui";

const DESCRIPTION = `Request a free, no-obligation flat-rate moving quote. Free walkthrough, a written price before moving day, and a reply within one business hour.`;

export const metadata: Metadata = {
  title: "Get a Free Moving Quote",
  description: DESCRIPTION,
  alternates: { canonical: "/quote" },
  openGraph: { title: `Get a Free Moving Quote | ${site.shortName}`, description: DESCRIPTION },
};

const TRAIL = [
  { name: "Home", href: "/" },
  { name: "Get a Quote", href: "/quote" },
];

export default function QuotePage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/quote",
            name: "Get a Free Moving Quote",
            description: DESCRIPTION,
            primaryAnswer: `To get a moving quote from ${site.name}, call ${site.phoneDisplay} or submit the online form. Quotes are flat-rate, based on a free in-home or video walkthrough, and most are returned the same day.`,
          }),
          breadcrumbSchema(TRAIL),
        )}
      />

      <PageHero
        eyebrow="Free · No obligation"
        title="Get your free moving quote"
        lede="Tell us the two addresses and roughly what you are moving. We will call you back within one business hour to arrange a walkthrough and get you a written flat rate — usually the same day."
        trail={TRAIL}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <QuoteForm />
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="rounded-2xl border border-navy-200 bg-navy-950 p-7 text-white">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-amber-brand-400">
                  Need it faster?
                </p>
                <h2 className="mt-2.5 text-2xl font-bold tracking-tight">Call us directly</h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-navy-300">
                  For a same-day or next-day move, phone rather than filling in a form. We will check
                  availability against your address while you are on the line.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-brand-600 px-5 py-3.5 text-[16px] font-semibold text-white transition hover:bg-amber-brand-700"
                >
                  <Icon.phone className="size-4.5" />
                  {site.phoneDisplay}
                </a>
                <dl className="mt-6 space-y-2 border-t border-white/10 pt-5 text-[14px]">
                  {site.hoursDisplay.map((h) => (
                    <div key={h.label} className="flex justify-between gap-4">
                      <dt className="text-navy-400">{h.label}</dt>
                      <dd className="font-medium text-navy-200">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-6 rounded-2xl border border-navy-200 bg-white p-7 shadow-card">
                <h2 className="text-[17px] font-bold tracking-tight text-navy-950">
                  What happens next
                </h2>
                <ol className="mt-5 space-y-4">
                  {[
                    ["We call you back", "Within one business hour during opening times."],
                    ["Free walkthrough", "In person or over video, usually within a day or two."],
                    ["Written flat rate", "Itemised, stating exactly what is included. Same day in most cases."],
                    ["You decide", "No pressure and no obligation. Compare it against anything else you have."],
                  ].map(([title, body], i) => (
                    <li key={title} className="flex gap-4">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[13px] font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-[15px] font-semibold text-navy-950">{title}</p>
                        <p className="mt-0.5 text-[14px] leading-relaxed text-navy-600">{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-6 rounded-2xl border border-navy-200 bg-navy-50 p-7">
                <h2 className="text-[17px] font-bold tracking-tight text-navy-950">
                  Every quote includes
                </h2>
                <div className="mt-5">
                  <CheckList
                    items={[
                      "A flat rate that does not change on moving day",
                      "Moving blankets, shrink wrap and mattress bags",
                      "Floor runners and door-jamb protection",
                      "Furniture disassembly and reassembly",
                      "Room-by-room placement at the destination",
                      "Packing debris removed when we leave",
                    ]}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
