export type Faq = { q: string; a: string; category: FaqCategory };
export type FaqCategory = "Pricing & Quotes" | "Booking & Scheduling" | "On Moving Day" | "Protection & Claims" | "Packing & Preparation" | "Service Area";

export const faqCategories: FaqCategory[] = [
  "Pricing & Quotes",
  "Booking & Scheduling",
  "On Moving Day",
  "Protection & Claims",
  "Packing & Preparation",
  "Service Area",
];

export const faqs: Faq[] = [
  {
    category: "Pricing & Quotes",
    q: "How much do movers cost in Tampa?",
    a: "Most local Tampa moves fall between $450 and $700 for a one-bedroom apartment, $800 and $1,400 for a two-bedroom, and $1,500 and $2,800 for a three-bedroom house. The largest variables are stairs, the distance from the truck to your door, and how much packing you need. We quote a flat rate after a walkthrough so the number does not change on moving day.",
  },
  {
    category: "Pricing & Quotes",
    q: "Is your quote a flat rate or an hourly estimate?",
    a: "Flat rate. You are quoted a single price before moving day and that is what you pay. If a job takes us longer than we planned, that is our estimating error to absorb, not a line item added to your invoice. Hourly pricing is only used for labor-only bookings, where you control the scope.",
  },
  {
    category: "Pricing & Quotes",
    q: "Do you charge extra for stairs, long carries or heavy items?",
    a: "No surprise fees. Stairs, long carries and heavy items are assessed during your walkthrough and priced into the flat rate up front. Surprise stair and long-carry charges added on moving day are one of the most common complaints in this industry, and we do not operate that way.",
  },
  {
    category: "Pricing & Quotes",
    q: "Do you require a deposit?",
    a: "A modest deposit holds your date and is credited against your final bill. The balance is due on completion, after you have walked the property and confirmed everything arrived. We never ask for a large cash payment before the work is done — that is a well-known hallmark of moving scams.",
  },
  {
    category: "Pricing & Quotes",
    q: "What payment methods do you accept?",
    a: "Major credit and debit cards, bank transfer and cash. Card payments carry no surcharge. You get an itemised receipt on completion, which matters if you are claiming a relocation reimbursement or a deductible move.",
  },
  {
    category: "Booking & Scheduling",
    q: "How far in advance should I book my move?",
    a: "Two to three weeks is comfortable for most dates. Book four to six weeks ahead for the last weekend of the month, the first few days of any month, and anything between May and August — those slots fill first across every Tampa Bay mover. For same-day or next-day needs, call us directly and we will check availability immediately.",
  },
  {
    category: "Booking & Scheduling",
    q: "Can you move on weekends or holidays?",
    a: "Yes, seven days a week including most holidays, at no weekend premium. Saturdays are the most requested day of the week, so book those further ahead than a weekday.",
  },
  {
    category: "Booking & Scheduling",
    q: "What happens if a hurricane is forecast on my moving date?",
    a: "We monitor the forecast on every booked job during hurricane season and will contact you proactively to reschedule ahead of a storm. There is no rescheduling fee for weather. We will not load a truck into a storm track, and we err early on coastal and flood-zone addresses.",
  },
  {
    category: "Booking & Scheduling",
    q: "Can I change my moving date after booking?",
    a: "Yes. Give us as much notice as you can and we will move your date at no charge, subject to availability. Closing dates slip constantly and we plan for it — just tell us as soon as you know.",
  },
  {
    category: "On Moving Day",
    q: "What time will the crew arrive?",
    a: "You get an arrival window, typically two hours wide, plus the lead mover's direct number. Most crews start between 7 and 9am, because an early start is the single biggest factor in finishing comfortably within the day.",
  },
  {
    category: "On Moving Day",
    q: "Do I need to be there during the move?",
    a: "You or someone you authorise should be present at both the start and the finish — to walk the property with the crew before loading, and to confirm placement and complete the final walkthrough. You do not need to stay for the middle of the day.",
  },
  {
    category: "On Moving Day",
    q: "Should I tip the movers?",
    a: "It is customary but entirely optional. Customers who tip typically give $20 to $40 per mover for a local move and more for a long day or a difficult job. Our crews are paid properly regardless and will never solicit a tip.",
  },
  {
    category: "On Moving Day",
    q: "Will you disassemble and reassemble my furniture?",
    a: "Yes, included. Bed frames, dining tables, sectionals, desks and wall units come apart before loading and go back together in the correct room at the destination. Hardware is bagged, labelled and taped to the piece it belongs to so nothing is hunted for at the far end.",
  },
  {
    category: "Protection & Claims",
    q: "Are you licensed and insured?",
    a: "Yes — licensed and insured for both local and interstate household moves, with cargo coverage and general liability on every job. We can provide a certificate of insurance for your building or HOA on request, usually the same day.",
  },
  {
    category: "Protection & Claims",
    q: "What happens if something gets damaged?",
    a: "Tell the crew lead before they leave and note it on the paperwork, or contact us within the claim window on your contract. Every job carries standard released-value protection, and full-value protection is available for an additional premium. Because we record a condition report at load, claims are settled against a record rather than a disagreement about memory.",
  },
  {
    category: "Protection & Claims",
    q: "What is the difference between released-value and full-value protection?",
    a: "Released-value protection is included at no charge and covers 60 cents per pound per item — a 40-pound television is covered for $24 regardless of what it cost. Full-value protection costs extra and covers repair, replacement or cash settlement at actual value. For households with electronics, art or antiques, full-value is worth the premium.",
  },
  {
    category: "Packing & Preparation",
    q: "What will you not move?",
    a: "Federal regulations prohibit hazardous materials on a moving truck: propane tanks, gasoline and fuel of any kind, paint thinner, ammunition, pool chemicals, aerosols and fire extinguishers. Drain fuel from mowers and generators before moving day. We also ask you to personally carry cash, jewellery, prescriptions, passports and irreplaceable documents.",
  },
  {
    category: "Packing & Preparation",
    q: "How many boxes do I need?",
    a: "Roughly 30 to 40 boxes for a one-bedroom, 45 to 60 for a two-bedroom, and 60 to 80 for a three-bedroom home, plus wardrobe boxes for hanging clothes. If we pack for you, materials are included and the counting is our problem.",
  },
  {
    category: "Packing & Preparation",
    q: "Can I leave clothes in my dresser drawers?",
    a: "Clothing can stay. Empty anything with glass, liquids, jewellery, documents or significant weight — books and tools in particular turn a dresser into a piece that can fail while it is being carried.",
  },
  {
    category: "Packing & Preparation",
    q: "How should I pack dishes so they do not break?",
    a: "Stand plates on edge like records rather than stacking them flat, wrap each one individually in paper, and fill every void so nothing can shift. Use small dish-pack cartons, never large boxes. Most breakage we see traces back to the same three mistakes: boxes too large, boxes not full, and plates stacked flat.",
  },
  {
    category: "Service Area",
    q: "What areas do you serve?",
    a: "The entire Tampa Bay region — Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Wesley Chapel, Lutz, Temple Terrace, Plant City, Largo, Palm Harbor, Land O' Lakes, Apollo Beach, Valrico and Lakeland, covering Hillsborough, Pinellas, Pasco and Polk counties. We also handle long-distance moves out of Tampa Bay to anywhere in Florida and up the East Coast.",
  },
  {
    category: "Service Area",
    q: "Do you charge a travel fee for outlying areas?",
    a: "No travel surcharge anywhere inside our standard service area, which covers Hillsborough, Pinellas, Pasco and Polk counties. For the further edges — Palm Harbor, Lakeland, Plant City — we simply schedule an early arrival so the drive happens before your working day starts.",
  },
  {
    category: "Service Area",
    q: "Do you do long-distance moves out of Florida?",
    a: "Yes. Our heaviest corridors run from Tampa up the East Coast toward Georgia, the Carolinas, Virginia and the Northeast. Your shipment travels on a dedicated truck with a guaranteed delivery window and the same crew loading and unloading — no consolidation, no carrier transfers.",
  },
];

/** The handful shown on the home page, chosen for search intent. */
export const homeFaqSlugs = [0, 2, 5, 13, 16, 20];
export const homeFaqs = homeFaqSlugs.map((i) => faqs[i]);
