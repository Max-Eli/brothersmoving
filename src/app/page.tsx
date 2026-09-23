import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { services, featuredServiceSlugs, serviceMap } from "@/lib/services";
import { areas, primaryAreas } from "@/lib/areas";
import { homeFaqs } from "@/lib/faqs";
import { reviews } from "@/lib/reviews";
import { posts } from "@/lib/posts";
import { graph, webPageSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { Icon, ServiceIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Button,
  Card,
  CTABand,
  CheckList,
  JsonLd,
  Section,
  SectionHeading,
} from "@/components/ui";

export const metadata: Metadata = {
  title: `Movers in Tampa, FL | ${site.shortName}`,
  description: site.metaDescription,
  alternates: { canonical: "/" },
};

const DIFFERENTIATORS = [
  {
    icon: "dollar" as const,
    title: "Flat-rate pricing, quoted up front",
    body: "You get one number before moving day and that is what you pay. If the job runs long, that is our estimating error to absorb — not a surcharge added to your invoice while the truck sits loaded in your driveway.",
  },
  {
    icon: "shield" as const,
    title: "Licensed, insured, and happy to prove it",
    body: "Full cargo and general liability coverage on every job, and a certificate of insurance issued for your building or HOA the same day you ask. Most Tampa high-rises require one and will turn a crew away without it.",
  },
  {
    icon: "users" as const,
    title: "Employees, not day labour",
    body: "Trained, background-checked crews who do this every day. We do not staff jobs from a labour pool the morning of your move, which is a large part of why furniture arrives the way it left.",
  },
  {
    icon: "truck" as const,
    title: "One crew, start to finish",
    body: "On local and long-distance moves alike, the people who wrap and load your furniture are the people who carry it into the new place. Nothing is handed off to a carrier you never spoke to.",
  },
  {
    icon: "calendar" as const,
    title: "Hurricane-season flexibility",
    body: "We watch the forecast on every booked job from June through November and reschedule proactively at no charge. Standard moving valuation generally excludes storm damage, so this matters more than it sounds.",
  },
  {
    icon: "check" as const,
    title: "Reassembled and placed, not dumped",
    body: "Beds rebuilt, tables reassembled, boxes in the right rooms and every scrap of packing debris removed before we leave. The job is finished when the house is usable, not when the truck is empty.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Tell us what you're moving",
    body: "Call or send the form. We ask about both addresses, home size, stairs, parking and anything oversized — the details that decide whether a quote holds.",
  },
  {
    step: "02",
    title: "Free walkthrough",
    body: "In person or over video, usually within a day or two. This is the step that separates a real quote from a number designed to be revised later.",
  },
  {
    step: "03",
    title: "Written flat-rate quote",
    body: "One price, itemised, typically the same day. It states exactly what is included so there is nothing to argue about on moving day.",
  },
  {
    step: "04",
    title: "Moving day",
    body: "The crew arrives inside your window, protects floors and doorways, and works a plan. You get the lead mover's direct number before they arrive.",
  },
  {
    step: "05",
    title: "Placed, rebuilt, walked through",
    body: "Furniture reassembled and placed, boxes in their rooms, debris removed, and a final walkthrough together before the crew leaves.",
  },
];

export default function HomePage() {
  const featured = featuredServiceSlugs.map((s) => serviceMap.get(s)!);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/",
            name: `${site.name} | Movers in Tampa, FL`,
            description: site.description,
            primaryAnswer:
              "Brothers EZ Moving of Tampa is a licensed and insured moving company serving the Tampa Bay area with local moves, long-distance moves, packing, storage and labor-only help, priced as a flat rate quoted before moving day.",
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }]),
          faqSchema(homeFaqs),
        )}
      />

      <Hero />
      <StatsBar />

      {/* Services */}
      <Section tone="tint">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Moving services for every kind of move in Tampa Bay"
            lede="Ten services covering everything from a studio apartment across town to a full household relocation up the East Coast — plus the specialist work most crews should not attempt."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Card href={`/services/${s.slug}`} className="h-full">
                <span className="flex size-12 items-center justify-center rounded-xl bg-navy-900 text-amber-brand-400 transition group-hover:bg-amber-brand-600 group-hover:text-white">
                  <ServiceIcon name={s.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-[19px] font-bold tracking-tight text-navy-950">{s.name}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-navy-600">{s.summary}</p>
                <span className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-amber-brand-700 sm:min-h-0">
                  Learn more
                  <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-navy-200 bg-white p-5">
            <p className="text-[15px] font-semibold text-navy-900">Also available:</p>
            <div className="flex flex-wrap gap-2">
              {services
                .filter((s) => !featuredServiceSlugs.includes(s.slug))
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-navy-200 px-3.5 py-1.5 text-[14px] font-medium text-navy-700 transition hover:border-navy-400 hover:bg-navy-50 hover:text-navy-900 sm:min-h-0"
                  >
                    {s.name}
                  </Link>
                ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Differentiators */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Why Brothers EZ Moving"
              title="Most complaints about movers come down to the same two things"
              lede="A price that changed, and furniture that did not arrive the way it left. Everything below exists to make sure neither happens on your move."
            />
            <div className="mt-8 rounded-2xl border border-navy-200 bg-navy-50 p-6">
              <div className="flex items-center gap-1 text-amber-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon.star key={i} className="size-4" />
                ))}
              </div>
              <p className="mt-3 text-[16px] leading-relaxed text-navy-800">
                &ldquo;I had three estimates and theirs was not the cheapest, but it was the only one
                where someone actually walked the house instead of guessing over the phone. The
                invoice matched the quote exactly.&rdquo;
              </p>
              <p className="mt-3 text-[14px] font-semibold text-navy-600">
                Danielle R. — South Tampa
              </p>
            </div>
            <div className="mt-6">
              <Button href="/about" variant="ghost">
                More about how we work
                <Icon.arrow className="size-4" />
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => {
              const C = Icon[d.icon];
              return (
                <Reveal key={d.title} delay={i * 50}>
                  <div className="h-full rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-amber-brand-50 text-amber-brand-700">
                      <C className="size-5" />
                    </span>
                    <h3 className="mt-4 text-[16px] font-bold tracking-tight text-navy-950">{d.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-navy-600">{d.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section tone="dark">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Five steps, no surprises at any of them"
            lede="The process is deliberately boring. Boring is what you want from the company carrying everything you own."
            tone="dark"
          />
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((p, i) => (
            <li key={p.step} className="bg-navy-950 p-6">
              <Reveal delay={i * 70}>
                <span className="text-[13px] font-bold tracking-[0.12em] text-amber-brand-400">
                  {p.step}
                </span>
                <h3 className="mt-3 text-[17px] font-bold tracking-tight text-white">{p.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-navy-400">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="/quote" size="lg">
              Start with a free quote
              <Icon.arrow className="size-4.5" />
            </Button>
            <p className="text-[15px] text-navy-400">
              Or call{" "}
              <a href={site.phoneHref} className="font-semibold text-white hover:text-amber-brand-400">
                {site.phoneDisplay}
              </a>{" "}
              — we answer seven days a week.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Pricing transparency */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Straight answers on price"
              title="What a move actually costs in Tampa"
              lede="Real 2026 ranges for a local move inside Tampa Bay, with boxes packed by you. Your written quote is based on a walkthrough, not on this table — but nobody should have to call three companies just to find out the order of magnitude."
            />
            <div className="mt-8">
              <Button href="/moving-tips/how-much-do-movers-cost-in-tampa" variant="ghost">
                Read the full pricing breakdown
                <Icon.arrow className="size-4" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="min-w-0 overflow-x-auto rounded-2xl border border-navy-200 shadow-card">
              <table className="w-full text-left">
                <caption className="sr-only">
                  Typical local moving costs in Tampa by home size, 2026
                </caption>
                <thead className="bg-navy-900 text-white">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 text-[13px] font-bold uppercase tracking-[0.1em]">
                      Home size
                    </th>
                    <th scope="col" className="px-5 py-3.5 text-[13px] font-bold uppercase tracking-[0.1em]">
                      Crew
                    </th>
                    <th scope="col" className="px-5 py-3.5 text-right text-[13px] font-bold uppercase tracking-[0.1em]">
                      Typical cost
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100 bg-white">
                  {[
                    ["Studio / 1-bedroom apartment", "2 movers", "$450 – $750"],
                    ["2-bedroom apartment", "2–3 movers", "$800 – $1,400"],
                    ["3-bedroom house", "3 movers", "$1,500 – $2,400"],
                    ["4-bedroom house", "3–4 movers", "$2,000 – $3,200"],
                    ["5+ bedroom house", "4+ movers", "$3,000 – $5,000+"],
                  ].map(([size, crew, cost]) => (
                    <tr key={size}>
                      <th scope="row" className="px-5 py-4 text-[15px] font-medium text-navy-900">
                        {size}
                      </th>
                      <td className="px-5 py-4 text-[15px] text-navy-600">{crew}</td>
                      <td className="px-5 py-4 text-right text-[15px] font-bold text-navy-950">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="border-t border-navy-200 bg-navy-50 px-5 py-4">
                <p className="text-[13px] leading-relaxed text-navy-600">
                  <strong className="font-semibold text-navy-900">How we quote:</strong> stairs,
                  carry distance, access and packing are all assessed during your free walkthrough
                  and priced into the written flat rate you approve before moving day.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Areas */}
      <Section tone="tint">
        <Reveal>
          <SectionHeading
            eyebrow="Where we work"
            title="Serving all of Tampa Bay"
            lede="Hillsborough, Pinellas, Pasco and Polk counties, with no travel surcharge anywhere inside our standard service area."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {primaryAreas.map((a, i) => (
            <Reveal key={a.slug} delay={i * 60}>
              <Card href={`/areas-we-serve/${a.slug}`} className="h-full">
                <div className="flex items-center gap-2">
                  <Icon.pin className="size-4 text-amber-brand-500" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-navy-500">
                    {a.county}
                  </span>
                </div>
                <h3 className="mt-3 text-[19px] font-bold tracking-tight text-navy-950">
                  Movers in {a.name}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-600">{a.summary}</p>
                <span className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-amber-brand-700 sm:min-h-0">
                  {a.name} moving services
                  <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-2xl border border-navy-200 bg-white p-6">
            <p className="text-[15px] font-semibold text-navy-900">We also serve:</p>
            <div className="mt-3 flex flex-wrap gap-2">
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
            <Link
              href="/areas-we-serve"
              className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-amber-brand-700 hover:text-amber-brand-900 sm:min-h-0"
            >
              View the full service area
              <Icon.arrow className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Reviews */}
      <Section>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Customer reviews"
              title="What Tampa Bay customers say"
              lede={`${site.stats.averageRating} out of 5 across ${site.stats.reviewCount} reviews, from ${site.stats.movesCompleted} moves since ${site.founded}.`}
            />
            <Button href="/reviews" variant="ghost">
              All reviews
              <Icon.arrow className="size-4" />
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <Reveal key={r.name} delay={i * 70}>
              <figure className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <Icon.quote className="size-7 text-amber-brand-200" />
                <blockquote className="mt-4 flex-1">
                  <p className="text-[15px] font-bold tracking-tight text-navy-950">{r.title}</p>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-navy-600">{r.body}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-navy-100 pt-4">
                  <div>
                    <p className="text-[14px] font-semibold text-navy-900">{r.name}</p>
                    <p className="text-[13px] text-navy-500">
                      {r.location} · {r.service}
                    </p>
                  </div>
                  <div className="flex gap-0.5 text-amber-brand-500">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Icon.star key={k} className="size-3.5" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Common questions"
              title="Answers before you call"
              lede="The questions we get most often, answered straight. There are another twenty on the full FAQ page."
            />
            <div className="mt-8 space-y-4">
              <Button href="/faq" variant="ghost">
                Read all FAQs
                <Icon.arrow className="size-4" />
              </Button>
              <div className="rounded-2xl border border-navy-200 bg-white p-5">
                <p className="text-[15px] font-semibold text-navy-900">Question not here?</p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-navy-600">
                  Call {site.phoneDisplay} and ask. We would rather answer ten questions now than have
                  you find out something you did not expect on moving day.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <FAQAccordion faqs={homeFaqs} />
          </Reveal>
        </div>
      </Section>

      {/* Resources */}
      <Section>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Moving resources"
              title="Guides worth reading before you book anyone"
              lede="Written by people who move households for a living — including the parts that are not in our commercial interest to tell you."
            />
            <Button href="/moving-tips" variant="ghost">
              All guides
              <Icon.arrow className="size-4" />
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Card href={`/moving-tips/${p.slug}`} className="h-full">
                <span className="inline-flex rounded-full bg-navy-100 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.1em] text-navy-700">
                  {p.category}
                </span>
                <h3 className="mt-4 text-[18px] font-bold leading-snug tracking-tight text-navy-950">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-navy-600">{p.excerpt}</p>
                <p className="mt-5 text-[13px] font-medium text-navy-500">{p.readingTime}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}

function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-navy-950">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="absolute -right-40 -top-40 size-[44rem] rounded-full bg-navy-700/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-56 -left-32 size-[38rem] rounded-full bg-amber-brand-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-navy-200 backdrop-blur">
            <span className="flex gap-0.5 text-amber-brand-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon.star key={i} className="size-3.5" />
              ))}
            </span>
            {site.stats.averageRating}/5 · {site.stats.reviewCount} reviews · Licensed &amp; insured
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Tampa movers who quote a price
            <span className="text-amber-brand-400"> and then charge it</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-300">
            Brothers EZ Moving is a licensed and insured moving company serving Tampa, St. Petersburg,
            Clearwater and the whole Tampa Bay area. Local moves, long-distance moves, packing and
            storage — with a written flat rate agreed before moving day and no fees added at the end.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={site.phoneHref} size="lg">
              <Icon.phone className="size-4.5" />
              Call {site.phoneDisplay}
            </Button>
            <Button href="/quote" variant="onDark" size="lg">
              Get a free quote
              <Icon.arrow className="size-4.5" />
            </Button>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <CheckList
              tone="dark"
              items={[
                "Free in-home or video walkthrough before any price is quoted",
                "Furniture disassembled, reassembled and placed where you want it",
                "Open seven days a week, with same-day availability most weeks",
              ]}
            />
          </div>
        </div>

        {/* Quote card */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white p-7 shadow-lift">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-amber-brand-700">
              Free · No obligation
            </p>
            <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-navy-950">
              Find out what your move costs
            </h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-navy-600">
              Tell us the two addresses and roughly what you have. Most written quotes go out the same
              day.
            </p>

            <dl className="mt-6 space-y-3 border-y border-navy-100 py-5">
              {[
                ["Response time", "Within 1 business hour"],
                ["Quote type", "Written flat rate"],
                ["Walkthrough", "In person or by video"],
                ["Deposit", "Small, credited to your bill"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4">
                  <dt className="text-[14px] text-navy-600">{k}</dt>
                  <dd className="text-[14px] font-semibold text-navy-950">{v}</dd>
                </div>
              ))}
            </dl>

            <Button href="/quote" size="lg" className="mt-6 w-full">
              Start my free quote
              <Icon.arrow className="size-4.5" />
            </Button>

            <a
              href={site.phoneHref}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-navy-200 px-6 py-3.5 text-[16px] font-semibold text-navy-900 transition hover:bg-navy-50"
            >
              <Icon.phone className="size-4.5 text-amber-brand-700" />
              {site.phoneDisplay}
            </a>

            <p className="mt-4 text-center text-[13px] text-navy-500">
              Moving today or tomorrow?{" "}
              <Link href="/services/last-minute-moving" className="font-semibold text-amber-brand-700 hover:underline">
                We hold capacity for that.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  const stats = [
    { value: site.stats.yearsInBusiness, label: "Years moving Tampa Bay" },
    { value: site.stats.movesCompleted, label: "Moves completed" },
    { value: site.stats.averageRating, label: "Average customer rating" },
    { value: site.stats.onTimeRate, label: "Arrive within the window" },
  ];
  return (
    <div className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden bg-navy-100 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-4 py-8 text-center">
              <p className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">{s.value}</p>
              <p className="mt-1.5 text-[13px] font-medium text-navy-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
