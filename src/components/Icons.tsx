import type { SVGProps } from "react";
import type { IconName } from "@/lib/services";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const Icon = {
  home: (p: P) => (
    <svg {...base} {...p}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" /></svg>
  ),
  building: (p: P) => (
    <svg {...base} {...p}><path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" /><path d="M14 10h5a1 1 0 0 1 1 1v10" /><path d="M2 21h20" /><path d="M7.5 8h3M7.5 12h3M7.5 16h3M17 14h0M17 17.5h0" /></svg>
  ),
  route: (p: P) => (
    <svg {...base} {...p}><circle cx="5.5" cy="5.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /><path d="M8 5.5h6a4 4 0 0 1 0 8h-4a4 4 0 0 0 0 8h6" /></svg>
  ),
  box: (p: P) => (
    <svg {...base} {...p}><path d="M3 8.5 12 4l9 4.5v7L12 20l-9-4.5z" /><path d="m3 8.5 9 4.5 9-4.5" /><path d="M12 13v7" /><path d="m7.5 6.25 9 4.5" /></svg>
  ),
  warehouse: (p: P) => (
    <svg {...base} {...p}><path d="M2 21V9l10-5 10 5v12" /><path d="M6 21v-7h12v7" /><path d="M6 17.5h12" /><path d="M12 14v7" /></svg>
  ),
  muscle: (p: P) => (
    <svg {...base} {...p}><path d="M5 14c0-3 2-5 5-5h2.5a3.5 3.5 0 0 1 0 7H10" /><path d="M5 14v3a3 3 0 0 0 3 3h6.5a5.5 5.5 0 0 0 0-11H13" /><path d="M9 9V5.5A2.5 2.5 0 0 1 11.5 3h0A2.5 2.5 0 0 1 14 5.5V6" /></svg>
  ),
  piano: (p: P) => (
    <svg {...base} {...p}><rect x="2.5" y="6" width="19" height="12" rx="1.5" /><path d="M2.5 13.5h19" /><path d="M7 13.5V18M11 13.5V18M15 13.5V18M19 13.5V18" /><path d="M6 6v4M9.5 6v4M14.5 6v4M18 6v4" /></svg>
  ),
  elevator: (p: P) => (
    <svg {...base} {...p}><rect x="4" y="2.5" width="16" height="19" rx="1.5" /><path d="M12 2.5v19" /><path d="m7.5 9 1.5-2 1.5 2" /><path d="m13.5 15 1.5 2 1.5-2" /></svg>
  ),
  heart: (p: P) => (
    <svg {...base} {...p}><path d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9Z" /></svg>
  ),
  clock: (p: P) => (
    <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
  ),
  phone: (p: P) => (
    <svg {...base} {...p}><path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 7.2 2 2 0 0 1 6 5z" /></svg>
  ),
  mail: (p: P) => (
    <svg {...base} {...p}><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  ),
  pin: (p: P) => (
    <svg {...base} {...p}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
  ),
  check: (p: P) => (
    <svg {...base} {...p}><path d="m4.5 12.5 5 5 10-11" /></svg>
  ),
  shield: (p: P) => (
    <svg {...base} {...p}><path d="M12 2.8 4.5 6v6c0 4.6 3.1 8.2 7.5 9.4 4.4-1.2 7.5-4.8 7.5-9.4V6z" /><path d="m8.8 12 2.2 2.2 4.2-4.4" /></svg>
  ),
  star: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3L7.3 14 2.6 9.4l6.5-.9z" /></svg>
  ),
  arrow: (p: P) => (
    <svg {...base} {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
  ),
  chevron: (p: P) => (
    <svg {...base} {...p}><path d="m9 5 7 7-7 7" /></svg>
  ),
  truck: (p: P) => (
    <svg {...base} {...p}><path d="M2.5 16.5V6.5a1 1 0 0 1 1-1h10v11" /><path d="M13.5 9h3.7a1 1 0 0 1 .8.4l2.6 3.4a1 1 0 0 1 .2.6v3.1" /><circle cx="7" cy="17.5" r="2" /><circle cx="17" cy="17.5" r="2" /><path d="M9 17.5h6M2.5 17.5H5" /></svg>
  ),
  calendar: (p: P) => (
    <svg {...base} {...p}><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
  ),
  menu: (p: P) => (
    <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  ),
  close: (p: P) => (
    <svg {...base} {...p}><path d="m6 6 12 12M18 6 6 18" /></svg>
  ),
  quote: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M9.5 6C6.5 7.4 5 9.8 5 13.3V18h5.6v-5.6H8.2c0-2 .7-3.4 2.3-4.2zm9 0c-3 1.4-4.5 3.8-4.5 7.3V18h5.6v-5.6h-2.4c0-2 .7-3.4 2.3-4.2z" /></svg>
  ),
  dollar: (p: P) => (
    <svg {...base} {...p}><path d="M12 3v18" /><path d="M16.5 7.2c-.8-1.3-2.4-2.2-4.5-2.2-2.5 0-4.5 1.3-4.5 3.4 0 4.6 9 2.4 9 7.2 0 2.2-2 3.4-4.5 3.4-2.3 0-4-1-4.7-2.4" /></svg>
  ),
  doc: (p: P) => (
    <svg {...base} {...p}><path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5z" /><path d="M14 3v4.5h4.5" /><path d="M8.5 13h7M8.5 16.5h5" /></svg>
  ),
  users: (p: P) => (
    <svg {...base} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16.5 5.2a3.2 3.2 0 0 1 0 5.9" /><path d="M18 14.2A6 6 0 0 1 21.5 20" /></svg>
  ),
};

/** Resolve a service's `icon` field to a component. */
export function ServiceIcon({ name, ...rest }: { name: IconName } & P) {
  const C = Icon[name];
  return <C {...rest} />;
}
