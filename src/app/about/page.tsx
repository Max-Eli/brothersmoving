import type { Metadata } from "next";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { Icon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import {
  Button,
  CTABand,
  CheckList,
  FactTable,
  JsonLd,
  PageHero,
  Prose,
  Section,
  SectionHeading,
} from "@/components/ui";

const DESCRIPTION = `About ${site.shortName} — a licensed, insured Tampa Bay moving company operating since ${site.founded}, built on flat-rate pricing and trained crews.`;

export const metadata: Metadata = {
  title: "About Us",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { title: `About | ${site.shortName}`, description: DESCRIPTION },
};

const TRAIL = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const VALUES = [
  {
    icon: "dollar" as const,
    title: "The quote is the price",
    body: "We absorb our own estimating errors. A job that runs two hours long is a cost we eat, not a surcharge we add while your belongings sit on our truck. This is the single clearest way to tell a mover apart, and it is where we chose to differ.",
  },
  {
    icon: "users" as const,
    title: "In-house crews only",
    body: "Trained, background-checked employees who do this every day — not day labour hired the morning of your move. Most damage claims across this industry trace back to inexperience, so this is the highest-leverage thing a moving company can control.",
  },
  {
    icon: "doc" as const,
    title: "Everything in writing",
    body: "Written estimates, itemised inventories, condition reports at load, and a receipt on completion. If a claim ever arises, it is settled against a record rather than two people disagreeing about what a sofa looked like three weeks ago.",
  },
  {
    icon: "shield" as const,
    title: "Say the inconvenient thing",
    body: "We will tell you when labor-only is cheaper than what you asked for, when packing your own books is fine, and when a storm means we should move your date. Losing a small job to keep the trust is the better trade for a business that runs on referrals.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/about",
            name: `About ${site.name}`,
            description: DESCRIPTION,
            primaryAnswer: `${site.name} is a licensed and insured moving company founded in ${site.founded}, serving the Tampa Bay area with flat-rate local, long-distance, packing and storage services using trained in-house crews.`,
          }),
          breadcrumbSchema(TRAIL),
        )}
      />

      <PageHero
        eyebrow="About us"
        title="A moving company built around one promise"
        lede="That the number we quote is the number you pay. Everything else about how we operate follows from committing to that in a business where a great many companies do not."
        trail={TRAIL}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading eyebrow="Our story" title="Why we started" />
              <div className="mt-8">
                <Prose>
                  <p>
                    Brothers EZ Moving started in {site.founded} with two brothers, one truck and a
                    straightforward observation: almost every complaint people had about movers came
                    down to the same two things. The price changed, or the furniture did not arrive
                    the way it left.
                  </p>
                  <p>
                    Both are solvable. The price changes because companies quote without looking at
                    what they are moving, then reconcile the difference at the point where you have
                    the least leverage — with your belongings already on a truck. The furniture gets
                    damaged because the people carrying it were hired that morning and have never
                    moved a marble-topped dresser down a flight of stairs.
                  </p>
                  <p>
                    So we built the company around the opposite of both. Every job gets a real
                    walkthrough before a number is quoted, and that number is binding on us. Every
                    crew is made up of trained employees who have done this hundreds of times. It is
                    not a complicated model. It is simply more expensive to run, and we decided that
                    was the right trade.
                  </p>
                  <p>
                    Today we run a full schedule across Hillsborough, Pinellas, Pasco and Polk
                    counties, with {site.stats.movesCompleted} moves completed. Most of our work
                    still comes from referrals, which is the outcome the model was designed to
                    produce.
                  </p>
                </Prose>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-12">
                <SectionHeading eyebrow="Tampa Bay, specifically" title="Why local knowledge matters" />
                <div className="mt-8">
                  <Prose>
                    <p>
                      Moving in Tampa Bay is not generic. Hyde Park has brick streets with oak
                      canopies a box truck cannot clear. Downtown towers want a certificate of
                      insurance 72 hours ahead and will turn a crew away without one. Wesley Chapel
                      closings slip because the builder is late, and if storage was not part of the
                      plan you have a truck and nowhere to put it.
                    </p>
                    <p>
                      And for half the year, hurricane season is a live variable. Standard moving
                      valuation generally excludes storm damage, which means a company willing to push
                      through weather is exposing you to a risk you may not be insured against. We
                      watch the forecast on every booked job from June to November and reschedule at
                      no charge.
                    </p>
                    <p>
                      None of that is knowable from a spreadsheet. It comes from working the same
                      twenty communities every week, which is why our area pages describe access and
                      building requirements rather than repeating the same paragraph with the city
                      name swapped out.
                    </p>
                  </Prose>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="lg:sticky lg:top-28">
              <FactTable
                title="Company facts"
                facts={[
                  { label: "Founded", value: site.founded },
                  { label: "Moves completed", value: site.stats.movesCompleted },
                  { label: "Average rating", value: `${site.stats.averageRating} / 5` },
                  { label: "Arrive within window", value: site.stats.onTimeRate },
                  { label: "Communities served", value: `${areas.length} across 4 counties` },
                  { label: "Crew", value: "Trained in-house employees" },
                  { label: "Pricing", value: "Flat rate, quoted in advance" },
                  { label: "Open", value: "7 days a week" },
                ]}
              />
              <div className="mt-5 rounded-2xl border border-navy-200 bg-navy-50 p-6">
                <h3 className="text-[15px] font-bold tracking-tight text-navy-950">
                  Licensing &amp; insurance
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-navy-600">
                  {site.credentials.usdotNote}. {site.credentials.insurance}. Certificates of
                  insurance are issued for buildings and HOAs on request, usually the same day.
                </p>
                <a
                  href={site.credentials.fmcsaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-amber-brand-700 hover:text-amber-brand-900 sm:min-h-0"
                >
                  How to verify any mover
                  <Icon.arrow className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint">
        <Reveal>
          <SectionHeading
            eyebrow="How we operate"
            title="Four commitments we actually hold to"
            lede="Every moving company claims to be honest and careful. These are the specific, checkable versions of that claim."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {VALUES.map((v, i) => {
            const C = Icon[v.icon];
            return (
              <Reveal key={v.title} delay={(i % 2) * 70}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-7 shadow-card">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-navy-900 text-amber-brand-400">
                    <C className="size-5.5" />
                  </span>
                  <h3 className="mt-5 text-[18px] font-bold tracking-tight text-navy-950">{v.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-navy-600">{v.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="What you can expect"
              title="From the first call to the final walkthrough"
              tone="dark"
            />
          </Reveal>
          <Reveal delay={80}>
            <CheckList
              tone="dark"
              items={[
                "A real walkthrough — in person or by video — before any price is quoted",
                "A written flat rate that states exactly what is included",
                "Crew size, arrival window and the lead mover's direct number, in advance",
                "Floor runners, door-jamb padding and full wrapping on every piece of furniture",
                "Furniture disassembled, reassembled and placed in the room you want it",
                "Packing debris removed, and a final walkthrough together before we leave",
                "An itemised receipt, and a condition record if a claim is ever needed",
                "Proactive rescheduling at no charge when a storm threatens your date",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Talk to us"
              title="Ask us anything before you book"
              lede="We would far rather answer ten questions now than have you discover something unexpected on moving day. Call and describe your situation — including if you are still comparing quotes."
            />
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={site.phoneHref} size="lg">
                <Icon.phone className="size-4.5" />
                {site.phoneDisplay}
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Other ways to reach us
                <Icon.arrow className="size-4.5" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand />
    </>
  );
}
