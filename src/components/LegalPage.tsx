import { site } from "@/lib/site";
import { PageHero, Section } from "./ui";

export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[] };

/** Shared layout for the three legal pages so they stay visually consistent. */
export default function LegalPage({
  title,
  lede,
  updated,
  trail,
  sections,
}: {
  title: string;
  lede: string;
  updated: string;
  trail: { name: string; href: string }[];
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lede={lede} trail={trail}>
        <p className="mt-6 text-[14px] text-navy-400">Last updated: {updated}</p>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl">
                {s.heading}
              </h2>
              {s.paragraphs?.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-[16px] leading-[1.75] text-navy-700">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-4 space-y-2.5">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3 text-[16px] leading-[1.7] text-navy-700">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-amber-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="rounded-2xl border border-navy-200 bg-navy-50 p-6">
            <h2 className="text-[17px] font-bold tracking-tight text-navy-950">Questions?</h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-navy-700">
              Contact us at{" "}
              <a href={site.emailHref} className="font-semibold text-amber-brand-700 hover:underline">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={site.phoneHref} className="font-semibold text-amber-brand-700 hover:underline">
                {site.phoneDisplay}
              </a>
              .
            </p>
            <address className="mt-4 text-[14px] not-italic leading-relaxed text-navy-600">
              {site.legalName}
              <br />
              {site.hq.street}, {site.hq.city}, {site.hq.region} {site.hq.postalCode}
            </address>
          </section>
        </div>
      </Section>
    </>
  );
}
