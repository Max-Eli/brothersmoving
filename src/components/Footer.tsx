import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { posts } from "@/lib/posts";
import { Icon } from "./Icons";
import { LogoMark } from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-300">
      {/* Pre-footer conversion band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready for a straight answer on price?
            </h2>
            <p className="mt-2 max-w-xl text-[15px] text-navy-300">
              Free walkthrough, written flat-rate quote, and no charges added on moving day.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-brand-600 px-5 py-3.5 text-[15px] font-semibold text-white transition hover:bg-amber-brand-700"
            >
              <Icon.phone className="size-4" />
              {site.phoneDisplay}
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              Request a quote
              <Icon.arrow className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Identity + NAP */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-10 shrink-0 rounded-xl ring-1 ring-white/15" />
              <span className="leading-none">
                <span className="block text-[17px] font-bold tracking-tight text-white">
                  Brothers <span className="text-amber-brand-400">EZ</span> Moving
                </span>
                <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-400">
                  of Tampa
                </span>
              </span>
            </div>

            <p className="mt-5 max-w-sm text-[14px] leading-relaxed">
              A licensed and insured moving company serving Tampa, St. Petersburg, Clearwater and the
              wider Tampa Bay area. Local moves, long-distance moves, packing and storage — quoted up
              front, with no fees added on moving day.
            </p>

            <address className="mt-6 space-y-3 text-[14px] not-italic">
              <a href={site.phoneHref} className="flex items-center gap-2.5 text-white transition hover:text-amber-brand-400">
                <Icon.phone className="size-4 shrink-0 text-amber-brand-400" />
                <span className="font-semibold">{site.phoneDisplay}</span>
              </a>
              <a href={site.emailHref} className="flex items-center gap-2.5 transition hover:text-white">
                <Icon.mail className="size-4 shrink-0 text-amber-brand-400" />
                {site.email}
              </a>
              <span className="flex items-start gap-2.5">
                <Icon.pin className="mt-0.5 size-4 shrink-0 text-amber-brand-400" />
                <span>
                  {site.hq.street}
                  <br />
                  {site.hq.city}, {site.hq.region} {site.hq.postalCode}
                  <span className="mt-1 block text-[13px] text-navy-400">
                    Corporate office · Tampa Bay service area
                  </span>
                </span>
              </span>
            </address>

            <dl className="mt-6 space-y-1.5 border-t border-white/10 pt-5 text-[13px]">
              {site.hoursDisplay.map((h) => (
                <div key={h.label} className="flex justify-between gap-4">
                  <dt className="text-navy-400">{h.label}</dt>
                  <dd className="font-medium text-navy-200">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <FooterCol title="Services">
              {services.slice(0, 8).map((s) => (
                <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                  {s.name}
                </FooterLink>
              ))}
              <FooterLink href="/services" emphasis>
                All services
              </FooterLink>
            </FooterCol>

            <FooterCol title="Areas We Serve">
              {areas.slice(0, 10).map((a) => (
                <FooterLink key={a.slug} href={`/areas-we-serve/${a.slug}`}>
                  Movers in {a.name}
                </FooterLink>
              ))}
              <FooterLink href="/areas-we-serve" emphasis>
                Full service area
              </FooterLink>
            </FooterCol>

            <div className="space-y-10">
              <FooterCol title="Company">
                <FooterLink href="/about">About us</FooterLink>
                <FooterLink href="/reviews">Customer reviews</FooterLink>
                <FooterLink href="/faq">FAQ</FooterLink>
                <FooterLink href="/quote">Get a free quote</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </FooterCol>

              <FooterCol title="Moving Resources">
                {posts.slice(0, 4).map((p) => (
                  <FooterLink key={p.slug} href={`/moving-tips/${p.slug}`}>
                    {p.category === "Pricing" ? "Tampa moving costs" : shortTitle(p.title)}
                  </FooterLink>
                ))}
                <FooterLink href="/moving-tips" emphasis>
                  All guides
                </FooterLink>
              </FooterCol>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          <TrustItem icon="shield" title="Licensed &amp; insured">
            Cargo and general liability coverage on every job. COIs issued same day.
          </TrustItem>
          <TrustItem icon="dollar" title="Flat-rate pricing">
            A written price agreed before moving day, based on a free walkthrough.
          </TrustItem>
          <TrustItem icon="star" title={`${site.stats.averageRating} average rating`}>
            {site.stats.movesCompleted} moves completed across Tampa Bay since {site.founded}.
          </TrustItem>
        </div>
      </div>

      <div className="border-t border-white/10">
        {/* pb-24 clears the fixed mobile call bar, which would otherwise
            cover these links at the bottom of the page. */}
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 pb-24 pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between lg:pb-6">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="inline-block py-1 transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="inline-block py-1 transition hover:text-white">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="inline-block py-1 transition hover:text-white">
              Accessibility
            </Link>
            {/* Not an app route — next/link would try a client-side
                navigation that cannot resolve. Plain anchor forces a real
                document request. */}
            <a href="/sitemap.xml" className="inline-block py-1 transition hover:text-white">
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  emphasis,
}: {
  href: string;
  children: React.ReactNode;
  emphasis?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`inline-block py-1 text-[14px] transition hover:text-white ${
          emphasis ? "font-semibold text-amber-brand-400 hover:text-amber-brand-300" : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

function TrustItem({
  icon,
  title,
  children,
}: {
  icon: "shield" | "dollar" | "star";
  title: string;
  children: React.ReactNode;
}) {
  const C = Icon[icon];
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-amber-brand-400">
        <C className="size-[18px]" />
      </span>
      <div>
        <p className="text-[14px] font-semibold text-white" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="mt-1 text-[13px] leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

/** Footer columns are narrow — trim long article titles at the first subclause. */
function shortTitle(title: string): string {
  const cut = title.split(/[:?]/)[0];
  return cut.length > 34 ? cut.slice(0, 32).trimEnd() + "…" : cut;
}
