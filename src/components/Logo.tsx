/**
 * Brand mark: two chevrons in a rounded navy badge.
 *
 * "»" reads as fast-forward, which is the "EZ" the name is built on; the pair
 * also nods to the two brothers who founded the company. The trailing chevron
 * is deliberately smaller and thinner than the leading one — that size
 * progression is what reads as motion rather than a static pair of arrows.
 *
 * Drawn on a 64×64 grid with heavy strokes so it stays legible at 16px in a
 * browser tab, which is the size that actually constrains the design.
 */
export function LogoMark({
  className = "",
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title && <title>{title}</title>}
      <rect width="64" height="64" rx="15" fill="#0c1c30" />
      <path
        d="M19 23.5 27.5 32 19 40.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.5 19 45.5 32 32.5 45"
        fill="none"
        stroke="#ff9937"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Mark on a transparent ground, for placing on an already-dark surface. */
export function LogoGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M19 23.5 27.5 32 19 40.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.5 19 45.5 32 32.5 45"
        fill="none"
        stroke="#ff9937"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Full lockup: mark plus wordmark. `tone` switches it for dark surfaces. */
export function Logo({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const primary = tone === "dark" ? "text-white" : "text-navy-950";
  const secondary = tone === "dark" ? "text-navy-400" : "text-navy-500";
  const accent = tone === "dark" ? "text-amber-brand-400" : "text-amber-brand-700";

  return (
    <span className={`flex min-w-0 items-center gap-2 sm:gap-2.5 ${className}`}>
      <LogoMark className="size-9 shrink-0 rounded-xl shadow-sm sm:size-10" />
      <span className="min-w-0 leading-none">
        <span
          className={`block whitespace-nowrap text-[16px] font-bold tracking-tight sm:text-[18px] ${primary}`}
        >
          <span className={accent}>EZ</span> Movers
        </span>
        <span
          className={`mt-1 block text-[9.5px] font-semibold uppercase tracking-[0.18em] sm:text-[10.5px] ${secondary}`}
        >
          and Storage
        </span>
      </span>
    </span>
  );
}
