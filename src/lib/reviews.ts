export type Review = {
  name: string;
  location: string;
  rating: 5 | 4;
  date: string;
  service: string;
  title: string;
  body: string;
};

/**
 * Placeholder testimonials pending import of the real review corpus.
 * See README — these must be replaced with verified customer reviews before
 * launch, and the aggregate rating in `site.stats` must match the real data.
 */
export const reviews: Review[] = [
  {
    name: "Danielle R.",
    location: "South Tampa",
    rating: 5,
    date: "2026-07-18",
    service: "Residential Moving",
    title: "The quote was the price. That was the whole story.",
    body: "I had three estimates and theirs was not the cheapest, but it was the only one where someone actually walked the house instead of guessing over the phone. Moving day ran nine hours in July heat, which was longer than anyone planned, and the invoice matched the quote exactly. Two guys reassembled our bed frame and got the sectional through a doorway I genuinely thought it would not fit through.",
  },
  {
    name: "Marcus T.",
    location: "Channelside, Tampa",
    rating: 5,
    date: "2026-06-30",
    service: "Apartment & Condo Moving",
    title: "They handled the building paperwork I did not know I needed",
    body: "My building needed a COI 72 hours out and I had no idea until I read the lease the week before. I called, gave them the management email, and it was submitted the same afternoon. They booked the freight elevator too. Finished inside the four-hour window with time to spare.",
  },
  {
    name: "Priya S.",
    location: "Wesley Chapel",
    rating: 5,
    date: "2026-08-09",
    service: "Storage Solutions",
    title: "Our closing slipped twelve days and they absorbed it",
    body: "New construction, so of course the certificate of occupancy was late. Everything went into climate-controlled storage instead, and they redelivered the day after we got the keys. No rebooking drama, no change fee. They had warned us this happens in Wesley Chapel and priced the contingency in from the start.",
  },
  {
    name: "Robert & Jean W.",
    location: "Carrollwood",
    rating: 5,
    date: "2026-05-22",
    service: "Senior & Downsizing",
    title: "Patient with my mother in a way I did not expect",
    body: "We moved Mom out of the house she had been in since 1979. It took three sorting sessions over two weeks and nobody once made her feel rushed. They delivered the donations and brought back receipts. That evening her bed was made, the kitchen was unpacked and the TV worked. I flew back to Ohio the next morning knowing she was actually settled.",
  },
  {
    name: "Anthony C.",
    location: "Westshore, Tampa",
    rating: 5,
    date: "2026-04-11",
    service: "Commercial & Office Moving",
    title: "Twenty-two people, closed Friday, working Monday",
    body: "They surveyed both suites, sent a written plan with a labelling scheme keyed to our new floor plan, and coordinated with our IT vendor on the disconnect window. We loaded Friday night, unloaded Saturday, placed Sunday. Monday morning everybody sat down and worked. We lost zero business days.",
  },
  {
    name: "Karen M.",
    location: "Clearwater",
    rating: 5,
    date: "2026-03-02",
    service: "Long-Distance Moving",
    title: "A real delivery date, not a two-week window",
    body: "The national carrier I called first quoted a fourteen-day delivery spread, which made it impossible to book time off. Brothers EZ gave me a firm window, put everything on a dedicated truck, and the same crew that loaded in Clearwater unloaded in Charlotte two days later. The driver called me every day he was on the road.",
  },
  {
    name: "Luis and Ana F.",
    location: "Brandon",
    rating: 5,
    date: "2026-08-25",
    service: "Same-Day & Last-Minute",
    title: "Our original movers stopped answering the phone",
    body: "Move-out was the next morning and the company we had booked went silent. I called at 7am expecting nothing. They checked availability while I was on the phone, quoted me in about five minutes off our old inventory list, and had a crew at the house by eleven. I do not know what we would have done otherwise.",
  },
  {
    name: "Gregory H.",
    location: "Valrico",
    rating: 5,
    date: "2026-02-14",
    service: "Specialty Item Moving",
    title: "Baby grand down a flight of stairs without a scratch",
    body: "Four movers, and they took the legs and lyre off and boarded it properly rather than trying to roll it. They padded the doorframes and measured the turn at the landing before anyone touched the piano. Tuner came out three weeks later and said it had travelled about as well as a piano can.",
  },
  {
    name: "Stephanie N.",
    location: "St. Petersburg",
    rating: 5,
    date: "2026-01-19",
    service: "Packing & Unpacking",
    title: "Worth every dollar for the kitchen alone",
    body: "I packed the clothes and books myself and had them do the kitchen and the china cabinet. Not one thing broke, including my grandmother's crystal, which has survived three moves and two of my own packing jobs. They took every box and scrap of paper away the same day.",
  },
  {
    name: "Derek P.",
    location: "Riverview",
    rating: 4,
    date: "2026-09-05",
    service: "Labor-Only Moving",
    title: "Loaded the truck far better than I would have",
    body: "I rented the Penske myself and just needed muscle. Two movers, four hours, and they fit the whole house into a truck I was certain was too small. Docked one star only because they arrived about forty minutes into the back end of the window and I had not built that in. Work itself was excellent.",
  },
];

export const aggregateReviewCount = reviews.length;
