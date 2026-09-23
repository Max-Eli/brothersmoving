import type { Metadata } from "next";
import { site } from "@/lib/site";
import { reviews } from "@/lib/reviews";
import { graph, webPageSchema, breadcrumbSchema, reviewsSchema } from "@/lib/schema";
import { Icon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { Button, CTABand, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";

const DESCRIPTION = `Read ${reviews.length} customer reviews of ${site.shortName} — feedback from moves across Tampa, St. Petersburg, Clearwater, Brandon and Tampa Bay.`;

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: DESCRIPTION,
  alternates: { canonical: "/reviews" },
  openGraph: { title: `Customer Reviews | ${site.shortName}`, description: DESCRIPTION },
};

const TRAIL = [
  { name: "Home", href: "/" },
  { name: "Reviews", href: "/reviews" },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/reviews",
            name: `Customer Reviews — ${site.name}`,
            description: DESCRIPTION,
            primaryAnswer: `${site.name} holds an average rating of ${site.stats.averageRating} out of 5 across ${site.stats.reviewCount} customer reviews from moves throughout the Tampa Bay area.`,
          }),
          breadcrumbSchema(TRAIL),
          reviewsSchema(),
        )}
      />

      <PageHero
        eyebrow="Customer reviews"
        title="What Tampa Bay customers say about us"
        lede={`${site.stats.averageRating} out of 5 across ${site.stats.reviewCount} reviews, from ${site.stats.movesCompleted} moves completed since ${site.founded}.`}
        trail={TRAIL}
      >
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="flex gap-0.5 text-amber-brand-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon.star key={i} className="size-5" />
              ))}
            </span>
            <span className="text-[17px] font-bold text-white">{site.stats.averageRating} / 5</span>
          </div>
          <span className="text-[15px] text-navy-300">{site.stats.reviewCount} reviews</span>
        </div>
      </PageHero>

      <Section>
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name + r.date} delay={(i % 3) * 60} className="mb-5 break-inside-avoid">
              <figure className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-0.5 text-amber-brand-500">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Icon.star key={k} className="size-4" />
                    ))}
                    {Array.from({ length: 5 - r.rating }).map((_, k) => (
                      <Icon.star key={`e${k}`} className="size-4 text-navy-200" />
                    ))}
                  </div>
                  <time dateTime={r.date} className="text-[12px] font-medium text-navy-500">
                    {new Date(r.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </time>
                </div>

                <blockquote className="mt-4">
                  <p className="text-[16px] font-bold leading-snug tracking-tight text-navy-950">
                    {r.title}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-600">{r.body}</p>
                </blockquote>

                <figcaption className="mt-5 border-t border-navy-100 pt-4">
                  <p className="text-[14px] font-semibold text-navy-900">{r.name}</p>
                  <p className="mt-0.5 text-[13px] text-navy-500">
                    {r.location} · {r.service}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Leave a review"
              title="Moved with us recently?"
              lede="Reviews are how most of our customers find us, and how we find out where we are falling short. If something went wrong, we would rather hear it directly first — call us and we will make it right."
            />
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={site.phoneHref} size="lg">
                <Icon.phone className="size-4.5" />
                {site.phoneDisplay}
              </Button>
              <Button href={site.emailHref} variant="ghost" size="lg">
                <Icon.mail className="size-4.5" />
                {site.email}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand />
    </>
  );
}
