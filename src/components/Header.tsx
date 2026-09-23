"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { services, featuredServiceSlugs, serviceMap } from "@/lib/services";
import { areas, primaryAreas } from "@/lib/areas";
import { Icon, ServiceIcon } from "./Icons";
import { Logo as BrandLogo } from "./Logo";

type NavItem = { label: string; href: string; panel?: "services" | "areas" };

const NAV: NavItem[] = [
  { label: "Services", href: "/services", panel: "services" },
  { label: "Areas We Serve", href: "/areas-we-serve", panel: "areas" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Moving Tips", href: "/moving-tips" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<"services" | "areas" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close every menu on navigation — otherwise a dropdown survives the route change.
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll behind the mobile drawer.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const openPanel = (panel: "services" | "areas") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(panel);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      {/* Utility bar — trust signals and the phone number above everything else. */}
      <div className="hidden bg-navy-950 text-navy-200 lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-6 px-6 text-[13px]">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <Icon.shield className="size-3.5 text-amber-brand-400" />
              Licensed &amp; insured
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon.pin className="size-3.5 text-amber-brand-400" />
              Serving all of Tampa Bay
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon.star className="size-3.5 text-amber-brand-400" />
              {site.stats.averageRating}/5 from {site.stats.reviewCount} reviews
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-navy-300">Mon–Fri 7am–7pm · Sat–Sun by appointment</span>
            <a href={site.emailHref} className="transition hover:text-white">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-200 ${
          scrolled
            ? "border-navy-100 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-transparent bg-white"
        }`}
      >
        <div ref={navRef} className="mx-auto flex h-18 max-w-7xl items-center gap-2 px-3 py-3.5 sm:gap-4 sm:px-6">
          <Logo />

          <nav aria-label="Primary" className="ml-auto hidden items-center gap-0.5 xl:flex">
            {NAV.map((item) => {
              const active = isActive(item.href);
              if (!item.panel) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`whitespace-nowrap rounded-lg px-3 py-2 text-[15px] font-medium transition ${
                      active ? "text-navy-900" : "text-navy-700 hover:bg-navy-50 hover:text-navy-900"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => openPanel(item.panel!)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={item.href}
                    onFocus={() => openPanel(item.panel!)}
                    aria-expanded={open === item.panel}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-[15px] font-medium transition ${
                      active ? "text-navy-900" : "text-navy-700 hover:bg-navy-50 hover:text-navy-900"
                    }`}
                  >
                    {item.label}
                    <Icon.chevron
                      className={`size-3.5 transition-transform duration-200 ${
                        open === item.panel ? "rotate-90" : ""
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 xl:ml-4">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-xl px-3 py-2 text-[15px] font-semibold text-navy-900 transition hover:bg-navy-50 sm:inline-flex"
            >
              <Icon.phone className="size-4 text-amber-brand-700" />
              {site.phoneDisplay}
            </a>
            <Link
              href="/quote"
              className="hidden rounded-xl bg-amber-brand-600 px-4 py-2.5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-amber-brand-700 hover:shadow-md sm:inline-block"
            >
              Get a Free Quote
            </Link>
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phoneDisplay}`}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-brand-600 text-white sm:hidden"
            >
              <Icon.phone className="size-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-navy-200 text-navy-800 transition hover:bg-navy-50 xl:hidden"
            >
              {mobileOpen ? <Icon.close className="size-5" /> : <Icon.menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mega menus */}
        {open === "services" && (
          <MegaPanel onEnter={() => openPanel("services")} onLeave={scheduleClose}>
            <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
              <div>
                <PanelHeading>Moving services</PanelHeading>
                <div className="grid gap-1 sm:grid-cols-2">
                  {featuredServiceSlugs.map((slug) => {
                    const s = serviceMap.get(slug)!;
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-navy-50"
                      >
                        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-amber-brand-400 transition group-hover:bg-amber-brand-600 group-hover:text-white">
                          <ServiceIcon name={s.icon} className="size-[18px]" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[15px] font-semibold text-navy-900">{s.name}</span>
                          <span className="mt-0.5 block text-[13px] leading-snug text-navy-600">
                            {s.tagline}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="lg:border-l lg:border-navy-100 lg:pl-8">
                <PanelHeading>Also available</PanelHeading>
                <ul className="space-y-1">
                  {services
                    .filter((s) => !featuredServiceSlugs.includes(s.slug))
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="block rounded-lg px-3 py-2 text-[14px] font-medium text-navy-700 transition hover:bg-navy-50 hover:text-navy-900"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-3 inline-flex items-center gap-1.5 px-3 text-[14px] font-semibold text-amber-brand-700 hover:text-amber-brand-900"
                >
                  All services <Icon.arrow className="size-4" />
                </Link>
              </div>
            </div>
          </MegaPanel>
        )}

        {open === "areas" && (
          <MegaPanel onEnter={() => openPanel("areas")} onLeave={scheduleClose}>
            <PanelHeading>Tampa Bay service area</PanelHeading>
            <div className="grid gap-x-6 gap-y-1 sm:grid-cols-3 lg:grid-cols-4">
              {areas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas-we-serve/${a.slug}`}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-[14px] font-medium text-navy-700 transition hover:bg-navy-50 hover:text-navy-900"
                >
                  <Icon.pin className="size-3.5 shrink-0 text-amber-brand-500" />
                  {a.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 border-t border-navy-100 pt-4">
              <Link
                href="/areas-we-serve"
                className="inline-flex items-center gap-1.5 px-3 text-[14px] font-semibold text-amber-brand-700 hover:text-amber-brand-900"
              >
                View the full service area <Icon.arrow className="size-4" />
              </Link>
            </div>
          </MegaPanel>
        )}
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-white xl:hidden">
          <nav aria-label="Mobile" className="px-4 pb-28 pt-4">
            <MobileGroup title="Services" href="/services" items={services.map((s) => ({ label: s.name, href: `/services/${s.slug}` }))} />
            <MobileGroup
              title="Areas We Serve"
              href="/areas-we-serve"
              items={areas.map((a) => ({ label: a.name, href: `/areas-we-serve/${a.slug}` }))}
            />
            {NAV.filter((n) => !n.panel).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="block border-b border-navy-100 py-4 text-[17px] font-semibold text-navy-900"
              >
                {n.label}
              </Link>
            ))}
            <Link href="/contact" className="block border-b border-navy-100 py-4 text-[17px] font-semibold text-navy-900">
              Contact
            </Link>

            <div className="mt-6 space-y-3">
              <Link
                href="/quote"
                className="block rounded-xl bg-amber-brand-600 px-5 py-3.5 text-center text-[16px] font-semibold text-white"
              >
                Get a Free Quote
              </Link>
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl border border-navy-200 px-5 py-3.5 text-[16px] font-semibold text-navy-900"
              >
                <Icon.phone className="size-4.5" />
                {site.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      className="flex min-h-11 min-w-0 items-center"
      aria-label={`${site.name} — home`}
    >
      <BrandLogo />
    </Link>
  );
}

function MegaPanel({
  children,
  onEnter,
  onLeave,
}: {
  children: React.ReactNode;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="absolute inset-x-0 top-full hidden border-b border-navy-100 bg-white shadow-lift xl:block"
    >
      <div className="mx-auto max-w-7xl px-6 py-7">{children}</div>
    </div>
  );
}

function PanelHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-500">{children}</p>
  );
}

function MobileGroup({
  title,
  href,
  items,
}: {
  title: string;
  href: string;
  items: { label: string; href: string }[];
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-navy-100">
      <div className="flex items-center justify-between">
        <Link href={href} className="py-4 text-[17px] font-semibold text-navy-900">
          {title}
        </Link>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${title}`}
          className="flex size-10 items-center justify-center rounded-lg text-navy-500 transition hover:bg-navy-50"
        >
          <Icon.chevron className={`size-4 transition-transform ${expanded ? "rotate-90" : ""}`} />
        </button>
      </div>
      {expanded && (
        <ul className="pb-3">
          {items.map((i) => (
            <li key={i.href}>
              <Link href={i.href} className="block py-2.5 pl-3 text-[15px] text-navy-600">
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
