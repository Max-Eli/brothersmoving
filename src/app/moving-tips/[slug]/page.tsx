import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, type Block } from "@/lib/posts";
import { site } from "@/lib/site";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
  articleSchema,
  faqSchema,
} from "@/lib/schema";
import { Icon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import { Button, Card, CTABand, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";

type Params = { params: Promise<{ slug: string }> };

/**
 * The slug set is fixed and fully known at build time, so anything outside it
 * is a 404 rather than something to render on demand. Without this, Vercel
 * invokes a function for every bogus URL a crawler or scanner tries.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    // Article headlines already stand alone; the brand suffix would push
    // every one of them past the ~60-char SERP truncation point.
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: `/moving-tips/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.metaTitle} | ${site.shortName}`,
      description: post.metaDescription,
      url: `/moving-tips/${post.slug}`,
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: [site.name],
    },
  };
}

function fmt(date: string) {
  // The source dates are plain calendar dates ("2026-01-14"), which Date parses
  // as UTC midnight. Formatting without timeZone:"UTC" shifts them a day back
  // for anyone west of UTC, so pin the zone to keep the printed date correct.
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Renders one content block. Headings carry ids so the page is linkable. */
function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          id={block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
          className="scroll-mt-28 pt-6 text-2xl font-bold tracking-tight text-navy-950 sm:text-[1.75rem]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="pt-3 text-[19px] font-bold tracking-tight text-navy-950">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-[17px] leading-[1.75] text-navy-700">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[17px] leading-[1.7] text-navy-700">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-amber-brand-600" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="space-y-3">
          {block.items.map((item, n) => (
            <li key={item} className="flex gap-4 text-[17px] leading-[1.7] text-navy-700">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[12px] font-bold text-white">
                {n + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside key={i} className="rounded-2xl border-l-4 border-amber-brand-500 bg-amber-brand-50 p-6">
          <p className="text-[16px] font-bold tracking-tight text-navy-950">{block.title}</p>
          <p className="mt-2 text-[16px] leading-relaxed text-navy-700">{block.text}</p>
        </aside>
      );
    case "table":
      return (
        <div key={i} className="overflow-x-auto rounded-2xl border border-navy-200">
          <table className="w-full min-w-[32rem] text-left">
            <thead className="bg-navy-900 text-white">
              <tr>
                {block.head.map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="px-5 py-3.5 text-[13px] font-bold uppercase tracking-[0.1em]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100 bg-white">
              {block.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={`px-5 py-3.5 text-[15px] ${
                        c === 0 ? "font-medium text-navy-900" : "text-navy-600"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const trail = [
    { name: "Home", href: "/" },
    { name: "Moving Tips", href: "/moving-tips" },
    { name: post.title, href: `/moving-tips/${post.slug}` },
  ];

  const related = post.related.map((r) => getPost(r)).filter(Boolean);
  const headings = post.body.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: `/moving-tips/${post.slug}`,
            name: post.metaTitle,
            description: post.metaDescription,
            primaryAnswer: post.keyTakeaway,
          }),
          breadcrumbSchema(trail),
          articleSchema(post),
          ...(post.faqs ? [faqSchema(post.faqs)] : []),
        )}
      />

      <PageHero eyebrow={post.category} title={post.title} trail={trail}>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-navy-400">
          <span>{post.readingTime}</span>
          <span aria-hidden>·</span>
          <span>
            Published <time dateTime={post.published}>{fmt(post.published)}</time>
          </span>
          {post.updated !== post.published && (
            <>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={post.updated}>{fmt(post.updated)}</time>
              </span>
            </>
          )}
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
          <article className="min-w-0">
            {/* Direct-answer block — first thing a reader or an AI crawler meets. */}
            <div className="rounded-2xl border border-navy-200 bg-navy-50 p-6 sm:p-7">
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-amber-brand-700">
                The short answer
              </p>
              <p className="mt-3 text-[17px] font-medium leading-relaxed text-navy-900">
                {post.keyTakeaway}
              </p>
            </div>

            <div className="mt-10 space-y-6">{post.body.map(renderBlock)}</div>

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-14 border-t border-navy-100 pt-12">
                <h2 className="text-2xl font-bold tracking-tight text-navy-950 sm:text-[1.75rem]">
                  Frequently asked
                </h2>
                <div className="mt-6">
                  <FAQAccordion faqs={post.faqs} defaultOpen={null} />
                </div>
              </div>
            )}

            <div className="mt-12 rounded-2xl border border-navy-200 bg-navy-950 p-7 text-white sm:p-8">
              <h2 className="text-xl font-bold tracking-tight">
                Moving in Tampa Bay? Get a real number.
              </h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-navy-300">
                Free walkthrough, a written flat rate before moving day, and nothing added at the end.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/quote">
                  Get a free quote
                  <Icon.arrow className="size-4" />
                </Button>
                <Button href={site.phoneHref} variant="onDark">
                  <Icon.phone className="size-4" />
                  {site.phoneDisplay}
                </Button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            {headings.length > 2 && (
              <nav aria-label="On this page">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-navy-500">
                  On this page
                </p>
                <ul className="mt-4 space-y-1 border-l border-navy-200">
                  {headings.map((h) => {
                    const id = h.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[14px] leading-snug text-navy-600 transition hover:border-amber-brand-500 hover:text-navy-900"
                        >
                          {h.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            )}

            <div className="mt-8 rounded-2xl border border-navy-200 bg-white p-5 shadow-card">
              <p className="text-[14px] font-bold text-navy-950">Questions about your move?</p>
              <p className="mt-2 text-[13px] leading-relaxed text-navy-600">
                Call and describe your situation. We will tell you straight — including when the
                cheaper option is the right one.
              </p>
              <a
                href={site.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-3 text-[15px] font-semibold text-white transition hover:bg-navy-800"
              >
                <Icon.phone className="size-4" />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="tint">
          <Reveal>
            <SectionHeading eyebrow="Keep reading" title="Related guides" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {related.map((r) => (
              <Card key={r!.slug} href={`/moving-tips/${r!.slug}`} className="h-full">
                <span className="inline-block rounded-full bg-navy-100 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.1em] text-navy-700">
                  {r!.category}
                </span>
                <h3 className="mt-4 text-[18px] font-bold leading-snug tracking-tight text-navy-950">
                  {r!.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-navy-600">{r!.excerpt}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/moving-tips"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-amber-brand-700 hover:text-amber-brand-900"
            >
              All moving guides
              <Icon.arrow className="size-4" />
            </Link>
          </div>
        </Section>
      )}

      <CTABand />
    </>
  );
}
