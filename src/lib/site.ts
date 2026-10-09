/**
 * Single source of truth for business identity (NAP), contact details and URLs.
 * Local SEO depends on these strings being byte-identical everywhere they appear,
 * so every page, footer and JSON-LD block reads from here rather than hardcoding.
 */

export const site = {
  name: "EZ Movers and Storage",
  /** Used for <title> suffixes and tight spaces, where the full name is long. */
  shortName: "EZ Movers",
  // Must match the registered entity exactly — confirm against the filing
  // before launch, since this appears in the legal pages and the schema.
  legalName: "EZ Movers and Storage LLC",
  url: "https://brothersezmove.com",
  domain: "brothersezmove.com",

  tagline: "South Florida's Straightforward, Flat-Rate Moving Company",
  /** Long form — used for JSON-LD and on-page copy, where length is fine. */
  description:
    "EZ Movers and Storage is a licensed and insured moving company serving Miami, Miami Beach, Aventura, Fort Lauderdale and the surrounding Miami-Dade and Broward areas. Local moves, long-distance moves, packing, storage and labor-only help — quoted up front, with no hidden fees.",

  /** Short form — meta descriptions only. Kept under 160 chars so search
   *  results are not truncated mid-sentence. */
  metaDescription:
    "Licensed, insured movers serving Miami, Miami Beach, Aventura and all of South Florida. Local and long-distance moves, packing and storage. Flat-rate pricing.",

  phone: "3056978717",
  phoneDisplay: "(305) 697-8717",
  phoneHref: "tel:+13056978717",
  email: "info@brothersezmove.com",
  emailHref: "mailto:info@brothersezmove.com",

  /** Primary business address. The company operates out of North Miami Beach
   *  and serves the surrounding Miami-Dade and Broward markets. */
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
    city: "Miami",
    region: "FL",
    regionName: "Florida",
    latitude: 25.9287,
    longitude: -80.1623,
    /** Radius in metres covering Miami-Dade and Broward end to end. */
    serviceRadius: 65000,
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
