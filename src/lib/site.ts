/**
 * Single source of truth for business identity (NAP), contact details and URLs.
 * Local SEO depends on these strings being byte-identical everywhere they appear,
 * so every page, footer and JSON-LD block reads from here rather than hardcoding.
 */

export const site = {
  name: "Brothers EZ Moving of Tampa",
  shortName: "Brothers EZ Moving",
  legalName: "Brothers EZ Moving of Tampa LLC",
  url: "https://brothersezmove.com",
  domain: "brothersezmove.com",

  tagline: "Tampa Bay's Straightforward, Flat-Rate Moving Company",
  /** Long form — used for JSON-LD and on-page copy, where length is fine. */
  description:
    "Brothers EZ Moving of Tampa is a licensed and insured moving company serving Tampa, St. Petersburg, Clearwater and the surrounding Tampa Bay area. Local moves, long-distance moves, packing, storage and labor-only help — quoted up front, with no hidden fees.",

  /** Short form — meta descriptions only. Kept under 160 chars so search
   *  results are not truncated mid-sentence. */
  metaDescription:
    "Licensed, insured movers serving Tampa, St. Petersburg, Clearwater and all of Tampa Bay. Local and long-distance moves, packing and storage. Flat-rate pricing.",

  phone: "3056978717",
  phoneDisplay: "(305) 697-8717",
  phoneHref: "tel:+13056978717",
  email: "info@brothersezmove.com",
  emailHref: "mailto:info@brothersezmove.com",

  /**
   * Corporate/registered office. The company brands and operates as a Tampa Bay
   * mover, so the site markets a service area (see `serviceArea`) rather than
   * claiming a Tampa storefront that does not exist.
   */
  hq: {
    street: "1090 NE 160th Street",
    city: "North Miami Beach",
    region: "FL",
    regionName: "Florida",
    postalCode: "33162",
    country: "US",
    countryName: "United States",
  },

  /** Marketing home base — used for copy, targeting and geo coordinates. */
  base: {
    city: "Tampa",
    region: "FL",
    regionName: "Florida",
    latitude: 27.9506,
    longitude: -82.4572,
    /** Radius in metres covering Tampa Bay end to end. */
    serviceRadius: 80000,
  },

  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
    { days: ["Saturday"], opens: "08:00", closes: "18:00" },
    { days: ["Sunday"], opens: "09:00", closes: "17:00" },
  ],
  hoursDisplay: [
    { label: "Monday – Friday", value: "7:00 AM – 7:00 PM" },
    { label: "Saturday", value: "8:00 AM – 6:00 PM" },
    { label: "Sunday", value: "9:00 AM – 5:00 PM" },
  ],

  founded: "2016",
  priceRange: "$$",

  /** Trust signals surfaced in the header, footer and schema. */
  credentials: {
    usdotNote: "Licensed and insured for local and interstate household moves",
    insurance: "Full cargo and general liability coverage on every job",
    fmcsaUrl: "https://www.fmcsa.dot.gov/protect-your-move",
  },

  /** Placeholder until real profile URLs exist — see README before launch. */
  social: [] as { name: string; url: string }[],

  stats: {
    yearsInBusiness: "9+",
    movesCompleted: "6,000+",
    averageRating: "4.9",
    reviewCount: "312",
    onTimeRate: "98%",
  },
} as const;

export type Site = typeof site;

/** Absolute URL helper for canonicals, Open Graph and JSON-LD `@id` values. */
export function abs(path = "/"): string {
  return new URL(path, site.url).toString();
}
