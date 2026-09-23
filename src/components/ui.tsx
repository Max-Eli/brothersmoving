import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./Icons";

/** Injects a JSON-LD graph. Content is machine-generated from typed data. */
export function JsonLd({ data }: { data: string }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: data }} />;
}

export function Section({
  children,
  className = "",
  id,
  tone = "white",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "tint" | "dark";
}) {
  const tones = {
    white: "bg-white",
    tint: "bg-navy-50",
    dark: "bg-navy-950 text-white",
  };
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={`text-[13px] font-bold uppercase tracking-[0.16em] sm:text-[12px] ${
        tone === "dark" ? "text-amber-brand-400" : "text-amber-brand-700"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "left",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <As
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] ${
          tone === "dark" ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </As>
      {lede && (
        <p
          className={`mt-5 text-[17px] leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-navy-300" : "text-navy-600"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external,
}: ButtonProps) {
  const variants = {
    primary: "bg-amber-brand-600 text-white hover:bg-amber-brand-700 shadow-sm hover:shadow-md",
    secondary: "bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow-md",
    ghost: "border border-navy-200 text-navy-900 hover:bg-navy-50",
    onDark: "border border-white/25 text-white hover:bg-white/10",
  };
  const sizes = {
    md: "px-5 py-3 text-[15px]",
    lg: "px-6 py-3.5 text-[16px]",
  };
  const cls = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition ${variants[variant]} ${sizes[size]} ${className}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Breadcrumbs({ trail }: { trail: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px]">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-navy-500">
        {trail.map((item, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span className="font-medium text-navy-700" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="transition hover:text-navy-900 hover:underline">
                    {item.name}
                  </Link>
                  <span aria-hidden className="text-navy-300">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Dark page header used on every interior page. */
export function PageHero({
  eyebrow,
  title,
  lede,
  trail,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  trail: { name: string; href: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-navy-950">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="absolute -right-32 -top-40 size-[34rem] rounded-full bg-navy-700/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="[&_a]:text-navy-400 [&_a:hover]:text-white [&_span]:text-navy-400 [&_[aria-current]]:text-navy-200">
          <Breadcrumbs trail={trail} />
        </div>
        <div className="mt-8 max-w-3xl">
          {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {title}
          </h1>
          {lede && <p className="mt-6 text-lg leading-relaxed text-navy-300">{lede}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Compact fact block. Dense, scannable and easy for an AI crawler to lift as a
 * direct answer — which is most of the point.
 */
export function FactTable({ facts, title }: { facts: { label: string; value: string }[]; title?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-200 bg-white">
      {title && (
        <div className="border-b border-navy-200 bg-navy-50 px-5 py-3">
          <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-navy-700">{title}</h3>
        </div>
      )}
      <dl className="divide-y divide-navy-100">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-5 py-3.5">
            <dt className="text-[14px] text-navy-600">{f.label}</dt>
            <dd className="text-[14px] font-semibold text-navy-950">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function CheckList({ items, tone = "light" }: { items: string[]; tone?: "light" | "dark" }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
              tone === "dark" ? "bg-amber-brand-500/20 text-amber-brand-400" : "bg-amber-brand-100 text-amber-brand-900"
            }`}
          >
            <Icon.check className="size-3" strokeWidth={2.5} />
          </span>
          <span className={`text-[15px] leading-relaxed ${tone === "dark" ? "text-navy-300" : "text-navy-700"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Full-width conversion band placed near the foot of every page. */
export function CTABand({
  title = "Get a flat-rate quote for your move",
  lede = "Free walkthrough, a written price before moving day, and no charges added at the end. Most quotes go out the same day.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
      <div
        aria-hidden
        className="absolute -left-24 bottom-[-12rem] size-[30rem] rounded-full bg-amber-brand-500/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-navy-300">{lede}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={site.phoneHref} size="lg">
            <Icon.phone className="size-4.5" />
            Call {site.phoneDisplay}
          </Button>
          <Button href="/quote" variant="onDark" size="lg">
            Request a quote online
            <Icon.arrow className="size-4.5" />
          </Button>
        </div>
        <p className="mt-6 text-[14px] text-navy-300">
          Licensed &amp; insured · Serving all of Tampa Bay · Open 7 days
        </p>
      </div>
    </section>
  );
}

export function Card({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  // An <a> defaults to display:inline, so without a display utility the card
  // fragments into one rounded box per line instead of being a single panel.
  // Only supply `block` when the caller has not already chosen a display.
  const hasDisplay = /(?:^|\s)(?:block|flex|grid|inline-flex|inline-block|inline-grid|contents)(?:\s|$)/.test(
    className,
  );
  const cls = `${hasDisplay ? "" : "block"} group relative rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition ${
    href ? "hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-lift" : ""
  } ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <div className={cls}>{children}</div>;
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-5 text-[17px] leading-[1.75] text-navy-700 [&_strong]:font-semibold [&_strong]:text-navy-900">
      {children}
    </div>
  );
}
