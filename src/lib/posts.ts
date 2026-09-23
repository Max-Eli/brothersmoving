export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Short, factual answer to the page's core question — surfaced above the fold. */
  keyTakeaway: string;
  excerpt: string;
  category: string;
  published: string;
  updated: string;
  readingTime: string;
  body: Block[];
  faqs?: { q: string; a: string }[];
  related: string[];
};

export const posts: Post[] = [
  {
    slug: "how-much-do-movers-cost-in-tampa",
    title: "How Much Do Movers Cost in Tampa? A 2026 Price Breakdown",
    metaTitle: "How Much Do Movers Cost in Tampa? (2026 Prices)",
    metaDescription:
      "Real 2026 Tampa moving costs by home size, what drives the price up, and the fees dishonest movers add on moving day. Written by a Tampa moving company.",
    keyTakeaway:
      "A local Tampa move in 2026 typically costs $450–$700 for a one-bedroom, $800–$1,400 for a two-bedroom and $1,500–$2,800 for a three-bedroom house. Stairs, carry distance and packing are the three variables that move the number most.",
    excerpt:
      "What a local move actually costs in Tampa Bay this year, which variables genuinely change the price, and the surcharges that should make you walk away from a quote.",
    category: "Pricing",
    published: "2026-01-14",
    updated: "2026-09-02",
    readingTime: "8 min read",
    body: [
      { type: "p", text: "Moving quotes are hard to compare because companies price differently, describe the same work in different terms, and — in some cases — deliberately leave out the charges that get added once the truck is loaded. This is what the numbers actually look like in Tampa Bay, and what to check before you sign anything." },
      { type: "h2", text: "Typical local moving costs in Tampa" },
      { type: "p", text: "These ranges cover a local move inside the Tampa Bay area: origin and destination within roughly an hour of each other, completed in a single day, with the customer having packed their own boxes." },
      {
        type: "table",
        head: ["Home size", "Typical crew", "Hours", "Typical cost"],
        rows: [
          ["Studio / small 1-bed", "2 movers", "3–4", "$450 – $650"],
          ["1-bedroom apartment", "2 movers", "3–5", "$500 – $750"],
          ["2-bedroom apartment", "2–3 movers", "4–6", "$800 – $1,400"],
          ["3-bedroom house", "3 movers", "6–9", "$1,500 – $2,400"],
          ["4-bedroom house", "3–4 movers", "8–10", "$2,000 – $3,200"],
          ["5+ bedroom house", "4+ movers", "Full day+", "$3,000 – $5,000+"],
        ],
      },
      { type: "p", text: "Add roughly 30 to 60 per cent if you want full packing services, and expect suburban homes in Brandon, Riverview, Valrico and Lutz to land at the upper end of their bracket — they generally hold more volume than a Tampa city home with the same bedroom count, largely because of the garage." },
      { type: "h2", text: "The four things that actually change your price" },
      { type: "h3", text: "1. Volume, not bedroom count" },
      { type: "p", text: "Bedroom count is shorthand, not a measurement. Two three-bedroom houses can differ by 50 per cent in actual volume once you account for the garage, a full attic, a home gym or a workshop. This is exactly why a walkthrough produces a number that holds and a phone guess does not." },
      { type: "h3", text: "2. Access at both ends" },
      { type: "p", text: "Access is the most underestimated cost driver in moving. A third-floor walk-up adds hours compared with a ground-floor unit. A high-rise with one shared elevator and a reserved four-hour window changes the entire plan. A Hyde Park street where the truck has to park 200 feet away turns every single item into a longer carry." },
      { type: "h3", text: "3. Packing" },
      { type: "p", text: "Packing is usually the largest optional line on a quote, and the one where you have real control. Full-home packing for a three-bedroom runs six to eight hours with two or three packers. Fragile-only packing — kitchen, china, art, electronics — costs a fraction of that and covers the categories responsible for most damage claims. For most people that is the right trade." },
      { type: "h3", text: "4. Specialty items" },
      { type: "p", text: "Pianos, gun safes, slate pool tables, marble tops and oversized glass each need specific equipment and crew, and each is quoted individually. Mention them on the first call. A specialty item discovered on moving day is how a job runs late and a quote gets revised." },
      {
        type: "callout",
        title: "Flat rate versus hourly",
        text: "An hourly quote transfers all timing risk to you: if the crew is slow, you pay for it. A flat rate transfers that risk to the mover, but is only as good as the walkthrough behind it. Be wary of a flat rate quoted without anyone looking at your home — that is a number designed to be revised later.",
      },
      { type: "h2", text: "Charges that should make you walk away" },
      { type: "p", text: "Some fees are legitimate and disclosed up front. These are the ones that typically appear only after the truck is loaded, at the point where you have the least leverage:" },
      {
        type: "ul",
        items: [
          "Stair fees that were not mentioned in the estimate, when the mover knew about the stairs",
          "Long-carry fees invented on the day, when parking was visible at the walkthrough",
          "Heavy-item fees for ordinary furniture — a sofa or a refrigerator is not a specialty item",
          "Fuel surcharges added at the end of a local move",
          "Materials billed at several times retail after being described as included",
          "A demand for a large cash payment before anything is unloaded",
        ],
      },
      { type: "p", text: "That last one deserves particular attention. Holding a load hostage for a renegotiated price is the defining move of a moving scam, and it is common enough that the FMCSA runs a public campaign about it." },
      { type: "h2", text: "How to compare three quotes properly" },
      {
        type: "ol",
        items: [
          "Get all three in writing, itemised. A verbal number is not a quote.",
          "Confirm whether each is binding, non-binding or an hourly estimate — these are legally different things.",
          "Check what valuation coverage is included, and what full-value protection would cost.",
          "Confirm packing materials are included rather than billed per box on the day.",
          "Ask directly: what would make this price change? A straight answer here tells you most of what you need to know.",
          "Verify licensing and insurance, and ask for a certificate of insurance if your building requires one.",
        ],
      },
      { type: "p", text: "A quote that comes in dramatically under the others is not usually a bargain. It is either a different scope than you described, or a number that will be revised once your belongings are on a truck." },
    ],
    faqs: [
      { q: "Is it cheaper to move on a weekday?", a: "Slightly, at some companies, because weekends and the first and last days of the month are in highest demand. The bigger saving is avoiding the peak season entirely — May through August is the busiest stretch in Tampa Bay, and booking mid-month in autumn or winter gives you the most negotiating room." },
      { q: "How much should I tip movers in Tampa?", a: "Tipping is customary but optional. Most customers who tip give $20 to $40 per mover for a local move, more for a long or difficult day. Tip per mover rather than as a lump sum to the crew lead." },
      { q: "Do movers charge for travel time?", a: "Many hourly movers bill a 'travel fee' or double-drive time between locations. Ask about it specifically when comparing hourly quotes — it can add an hour or more of billable time that is easy to miss when comparing headline rates. Flat-rate quotes should have travel already priced in." },
    ],
    related: ["moving-checklist-timeline", "how-to-spot-a-moving-scam"],
  },
  {
    slug: "moving-checklist-timeline",
    title: "The 8-Week Moving Checklist That Actually Works",
    metaTitle: "8-Week Moving Checklist (Printable Timeline)",
    metaDescription:
      "A week-by-week moving checklist from eight weeks out to moving day, built around the deadlines people actually miss. From a Tampa moving company.",
    keyTakeaway:
      "Start eight weeks out. Book your mover at weeks 6–8, declutter at weeks 5–6, begin packing non-essentials at week 4, and handle utilities and address changes at weeks 2–3 — the two items people most often leave too late.",
    excerpt:
      "A week-by-week timeline built around the deadlines that actually cause problems — not a generic list of everything you could possibly do.",
    category: "Planning",
    published: "2026-02-08",
    updated: "2026-08-19",
    readingTime: "9 min read",
    body: [
      { type: "p", text: "Most moving checklists fail the same way: they list a hundred tasks without telling you which ones have real deadlines attached. This one is ordered by consequence. The items near the top are the ones that go badly wrong if left late." },
      { type: "h2", text: "8 weeks out" },
      {
        type: "ul",
        items: [
          "Set your moving date, even provisionally. Everything else hangs off it.",
          "Get three written estimates and book your mover. Peak dates in Tampa — the last weekend of any month, and anything from May to August — are gone six weeks ahead.",
          "Start a single folder or note for every moving document: estimates, contracts, receipts, inventories.",
          "If you are renting, re-read your lease for the exact notice period and move-out condition requirements.",
        ],
      },
      {
        type: "callout",
        title: "Why booking first matters",
        text: "Every other task on this list can be compressed if you run late. Availability cannot. Once the good dates are gone they are gone, and you end up choosing between a bad date and a company nobody else booked.",
      },
      { type: "h2", text: "6 weeks out" },
      {
        type: "ul",
        items: [
          "Confirm the booking in writing, with crew size and arrival window.",
          "If your building or HOA needs a certificate of insurance, request it now — most want it 48 to 72 hours ahead, but finding out the requirement early is the point.",
          "Reserve the freight elevator at both buildings if applicable.",
          "Request school records transfers if children are changing schools.",
          "Book any specialty services — piano, safe, pool table — as separate confirmed items.",
        ],
      },
      { type: "h2", text: "5 weeks out: declutter" },
      { type: "p", text: "This is the highest-return week on the list. Every item you get rid of now is one you do not pay to wrap, carry, transport and unpack. Work room by room and be decisive about the garage, which is almost always the single largest source of volume nobody accounts for." },
      {
        type: "ul",
        items: [
          "Sort into keep, donate, sell and dispose. Do not create a 'decide later' pile.",
          "Book donation pickups now — charities schedule one to two weeks out.",
          "Sell anything worth selling while there is still time for it to actually sell.",
          "Dispose of hazardous materials properly: paint, chemicals, propane and fuel cannot go on a moving truck.",
        ],
      },
      { type: "h2", text: "4 weeks out: start packing" },
      {
        type: "ul",
        items: [
          "Pack what you demonstrably do not use: off-season clothing, books, decor, spare linens, garage storage.",
          "Label every box on the side, not the top — you will be reading them stacked.",
          "Write the destination room and general contents on each box. 'Kitchen' alone is not enough at the far end.",
          "Keep a numbered list of boxes for anything valuable.",
          "Photograph the back of your TV and computer before disconnecting anything.",
        ],
      },
      { type: "h2", text: "3 weeks out: the administrative week" },
      {
        type: "ul",
        items: [
          "File a change of address with USPS — schedule it to take effect on your move date.",
          "Schedule utility transfers: electric, water, internet, gas. Internet is the one to book first; installation windows are often two weeks out.",
          "Update your address with your bank, insurers, employer and any subscription that ships physical goods.",
          "Transfer or arrange new renter's or homeowner's insurance, effective the day you take possession.",
          "Arrange care for pets and young children on moving day. This matters more than people expect.",
        ],
      },
      {
        type: "callout",
        title: "The internet deadline",
        text: "Of everything on this list, internet installation is the most common thing people leave too late. In fast-growing Tampa Bay suburbs a new-service appointment can be two to three weeks out. Book it the day you know your address.",
      },
      { type: "h2", text: "2 weeks out" },
      {
        type: "ul",
        items: [
          "Confirm the move with your mover: date, arrival window, crew size, contact number.",
          "Confirm elevator reservations and COI submissions actually went through.",
          "Service or arrange transport for any vehicle being shipped.",
          "Use up frozen and perishable food deliberately rather than discovering it on the last day.",
          "Refill prescriptions so you are not chasing a pharmacy transfer during move week.",
        ],
      },
      { type: "h2", text: "1 week out" },
      {
        type: "ul",
        items: [
          "Pack everything except what you need for the final week.",
          "Assemble an essentials box you personally transport: medications, chargers, documents, toiletries, a change of clothes per person, basic tools, toilet paper, coffee and whatever your kids or pets need.",
          "Defrost the freezer at least 24 hours before the move.",
          "Disassemble anything you intend to handle yourself.",
          "Confirm parking for the truck at both addresses, including any permit your street requires.",
        ],
      },
      { type: "h2", text: "Moving day" },
      {
        type: "ol",
        items: [
          "Be there when the crew arrives and walk the property with the lead.",
          "Point out anything that is not going on the truck, and anything fragile or high-value.",
          "Keep your essentials box with you, in your own vehicle, not on the truck.",
          "Do a final sweep: every closet, every cabinet, the attic, the garage, the washer and dryer, the dishwasher.",
          "Read the inventory and condition report before signing anything.",
          "At the destination, direct placement as items come off. Correcting it later costs you an afternoon.",
          "Walk both properties before the crew leaves and note any damage on the paperwork immediately.",
        ],
      },
    ],
    faqs: [
      { q: "How early should I start packing?", a: "Four weeks before moving day for a typical home, starting with genuinely unused items. Most people underestimate packing by roughly half — a three-bedroom house is 60 to 80 boxes, which is far more evenings than it sounds like." },
      { q: "What should I not pack in advance?", a: "Medications, important documents, chargers, a week of clothing, toiletries, basic tools and anything your children or pets need daily. These go in an essentials box that travels in your own car, not on the truck." },
      { q: "When should I transfer utilities?", a: "Schedule transfers three weeks out, effective the day you take possession of the new place, with the old service ending a day or two after you leave. Book internet installation first — it has the longest lead time by a wide margin." },
    ],
    related: ["how-much-do-movers-cost-in-tampa", "how-to-pack-fragile-items"],
  },
  {
    slug: "how-to-pack-fragile-items",
    title: "How to Pack Dishes, Glassware and Fragile Items So Nothing Breaks",
    metaTitle: "How to Pack Dishes & Fragile Items (Mover's Guide)",
    metaDescription:
      "Professional movers explain how to pack plates, glassware, mirrors, TVs and artwork — including the three mistakes behind most breakage.",
    keyTakeaway:
      "Stand plates on edge rather than stacking them flat, wrap each item individually, and fill every void so nothing can shift. Almost all breakage traces to three mistakes: boxes too large, boxes not full, and plates packed flat.",
    excerpt:
      "The technique professional packers use, and the three mistakes responsible for nearly all the breakage we see on customer-packed moves.",
    category: "Packing",
    published: "2026-03-21",
    updated: "2026-07-30",
    readingTime: "7 min read",
    body: [
      { type: "p", text: "When something breaks on a move, it is rarely because the box was dropped. It is because the contents were free to move inside it. A well-packed box can survive being handled badly; a poorly packed one can break while sitting still on a truck that is simply driving down I-275." },
      { type: "h2", text: "The three mistakes behind almost all breakage" },
      {
        type: "ol",
        items: [
          "Boxes that are too large. A big box invites heavy contents, and heavy boxes get handled worse and can fail at the seams. Dishes belong in small or dish-pack cartons, always.",
          "Boxes that are not full. Empty space means movement, and movement over a 40-minute drive is what breaks things. Fill every void with paper until the contents cannot shift when you gently shake the box.",
          "Plates packed flat. Stacked plates concentrate load on the ones underneath. On edge, each plate carries its own weight and flexes rather than cracking.",
        ],
      },
      { type: "h2", text: "What you actually need" },
      {
        type: "ul",
        items: [
          "Small boxes and dish-pack cartons — double-walled, made for this",
          "Unprinted packing paper, not newspaper, which transfers ink onto china",
          "Bubble wrap for stemware and anything irregular",
          "Foam pouches for glasses, if you want the fastest method",
          "Mirror cartons — telescoping boxes for framed art and mirrors",
          "Good packing tape and a marker",
        ],
      },
      { type: "h2", text: "Plates and bowls" },
      {
        type: "ol",
        items: [
          "Line the bottom of the carton with three to four inches of crumpled paper.",
          "Wrap each plate individually, then wrap groups of three or four together into a bundle.",
          "Stand the bundles on edge, like records in a crate, not stacked flat.",
          "Fill the gaps between bundles with crumpled paper.",
          "Bowls can nest in groups of three with paper between each, then be wrapped as a bundle and stood on edge.",
          "Top with two inches of crumpled paper, close, and check for movement before taping.",
        ],
      },
      { type: "h2", text: "Glasses and stemware" },
      { type: "p", text: "Stems are the weak point. Wrap the stem separately before wrapping the whole glass, or use a cell divider, which is what dish-pack cartons are designed around. Glasses go rim-down, never on their side, and never stacked inside one another — nested glasses crack each other during the load." },
      {
        type: "callout",
        title: "Heaviest at the bottom",
        text: "Inside every box and across the whole truck, weight goes low. Plates at the bottom of the carton, glasses on top. Heavy cartons on the deck, light ones in the upper tier. This single habit prevents more damage than any material you can buy.",
      },
      { type: "h2", text: "Mirrors, artwork and glass tops" },
      {
        type: "ul",
        items: [
          "Tape a large X across the face of any large pane. It does not prevent breakage, but it holds the glass together if it does break, which is a meaningful safety difference.",
          "Wrap in paper, then bubble wrap, then use a telescoping mirror carton sized to the piece.",
          "Corner protectors on frames — corners take the impact in almost every case.",
          "Transport and store on edge, never flat. Flat glass under any weight at all is how a tabletop cracks.",
          "Oversized or valuable pieces should be custom crated rather than boxed.",
        ],
      },
      { type: "h2", text: "Televisions and electronics" },
      { type: "p", text: "The original box is ideal if you kept it. If not: photograph the cable connections before unplugging anything, wrap the screen in a soft blanket or foam sheet — never bubble wrap directly against an OLED or plasma panel — box it in a flat TV carton, and transport upright on edge. A television laid flat can crack under the pressure of its own panel." },
      { type: "h2", text: "Lamps, and the things people forget" },
      {
        type: "ul",
        items: [
          "Lamps: shade, harp and bulb all come off separately. Shades nest inside one another with paper between and go in their own box with nothing else.",
          "Knife blocks: wrap the blades before packing, for the benefit of whoever opens the box.",
          "Liquids: bag them separately and pack upright. One leaked bottle of olive oil ruins an entire carton.",
          "Candles: in a Florida summer truck they will melt. Move them in your own car.",
          "Label fragile boxes on all four sides, plus the destination room. Top-only labels are invisible in a stack.",
        ],
      },
      { type: "h2", text: "What to test before you tape" },
      { type: "p", text: "Close the box and give it a gentle shake near your ear. If you hear or feel anything move, open it and add paper. That two-second check is the difference between a box that arrives intact and one that does not, and it costs nothing." },
    ],
    faqs: [
      { q: "Can I use newspaper to wrap dishes?", a: "It works mechanically, but the ink transfers onto china and glass and is genuinely tedious to wash off an entire kitchen's worth of dishes. Unprinted packing paper costs a few dollars more and saves an afternoon at the sink." },
      { q: "How heavy should a box be?", a: "Under 50 pounds for anything a person carries, and under 30 for boxes of books. The most common failure is a large carton filled with heavy items — the bottom gives out at exactly the wrong moment, usually on a staircase." },
      { q: "Should I pack fragile items myself or hire packers?", a: "Fragile-only packing is the highest-value packing you can buy. It costs a fraction of a full-home pack and covers the categories — kitchen, china, art, electronics — responsible for the overwhelming majority of damage claims. Clothes, books and linens are fine to do yourself." },
    ],
    related: ["moving-checklist-timeline", "how-much-do-movers-cost-in-tampa"],
  },
  {
    slug: "moving-during-hurricane-season-florida",
    title: "Moving During Hurricane Season in Florida: What to Know",
    metaTitle: "Moving During Hurricane Season in Florida (Guide)",
    metaDescription:
      "How Florida's June–November hurricane season affects moving: scheduling, insurance gaps, flood zones and what to do when a storm is forecast on your date.",
    keyTakeaway:
      "Florida's hurricane season runs 1 June to 30 November, peaking mid-August to mid-October. Confirm your mover reschedules for weather at no charge, understand that most policies exclude in-transit storm damage, and never load a truck into a forecast storm track.",
    excerpt:
      "Half the year in Tampa Bay falls inside hurricane season. Here is how it actually affects a move, and the insurance gap most people do not know exists.",
    category: "Florida Moving",
    published: "2026-05-06",
    updated: "2026-09-10",
    readingTime: "8 min read",
    body: [
      { type: "p", text: "Hurricane season runs from 1 June to 30 November — half the calendar year, and the half that contains the busiest moving months. Peak activity is mid-August through mid-October. If you are moving in Tampa Bay, there is a reasonable chance your date falls inside it, so the sensible approach is to plan for it rather than hope." },
      { type: "h2", text: "The insurance gap nobody mentions" },
      { type: "p", text: "This is the single most important thing in this article. Standard moving valuation — both released-value and full-value protection — generally excludes damage caused by acts of God, which includes hurricanes, tropical storms and flooding. Your homeowner's policy typically will not cover belongings in transit on a commercial vehicle either." },
      {
        type: "callout",
        title: "What that means practically",
        text: "If a storm damages your shipment while it is on a truck or in transit, you may have no coverage from either your mover or your home policy. This is precisely why a mover who proactively reschedules ahead of a storm is worth more than one who pushes through — there is often no financial backstop if it goes wrong.",
      },
      { type: "h2", text: "Scheduling around the season" },
      {
        type: "ul",
        items: [
          "June and July carry real but lower risk. Early season is the most comfortable part of the window.",
          "Mid-August to mid-October is peak. If you have flexibility, move outside it.",
          "November tails off quickly, and late November is usually straightforward.",
          "Book earlier than usual for peak-season dates. When a storm forces mass rescheduling, every mover's calendar compresses at once and the available dates vanish within hours.",
          "Build slack into your timeline. A move with no buffer between move-out and a closing has nowhere to go when a storm moves it by three days.",
        ],
      },
      { type: "h2", text: "Questions to ask your mover before booking" },
      {
        type: "ol",
        items: [
          "Do you charge a rescheduling fee for weather? The answer should be no.",
          "How far ahead of a forecast do you make the call? Anything inside 24 hours is too late to be useful to you.",
          "Do you have storage available if my date has to move and my closing does not?",
          "Will you load in heavy rain? Some will. The honest answer is that wrapped furniture in a downpour is a genuine risk to both the furniture and the crew.",
          "What happens if the destination is unreachable on the delivery date?",
        ],
      },
      { type: "h2", text: "Flood zones matter more than storm tracks" },
      { type: "p", text: "Tampa Bay's real vulnerability is surge and flooding, not only wind. Several parts of the region — South Tampa, Shore Acres and the low-lying St. Petersburg neighborhoods, Apollo Beach, the barrier islands and much of the coastal Pinellas strip — flood on storms that never make landfall nearby. If either address is in an evacuation zone, that changes the risk calculation regardless of where the centre of the storm is forecast to go." },
      { type: "p", text: "Look up both addresses on the Hillsborough or Pinellas County evacuation zone maps before you finalise a date. It takes two minutes and it tells you which of your two addresses is the constraint." },
      { type: "h2", text: "If a storm is forecast on your date" },
      {
        type: "ol",
        items: [
          "Call your mover early — do not wait for them to call you, and do not wait for certainty.",
          "Reschedule rather than rush. Loading ahead of a storm to 'beat it' is how shipments end up sitting in a truck through a landfall.",
          "If you must be out of the old property, move into storage rather than transit. Climate-controlled storage in a solid building is far safer than a truck.",
          "Keep documents, medications and valuables with you, not in the shipment.",
          "Photograph everything before it is loaded. If there is any claim later, that record is what it rests on.",
          "Do not take delivery into a property without power. Unloading into a dark, hot house with no working lifts or air conditioning is worse than a two-day delay.",
        ],
      },
      { type: "h2", text: "After a storm" },
      { type: "p", text: "Expect a compressed and chaotic week. Every move cancelled during the storm gets rebooked at once, roads and bridges may be closed, and crews may be dealing with their own homes. Be patient, confirm your new date in writing, and check both properties for damage before anything is unloaded." },
    ],
    faqs: [
      { q: "Should I move during hurricane season in Florida?", a: "Plenty of people do, and most of those moves are completely uneventful. The important precautions are booking a mover who reschedules for weather at no charge, leaving slack in your timeline, and understanding that standard moving valuation generally excludes storm damage." },
      { q: "Will movers work in the rain?", a: "Light rain, generally yes, with extra floor protection and plastic wrapping. Heavy rain, lightning or tropical-storm conditions should stop work — wrapped furniture and wet stairs are a genuine risk to both your belongings and the crew." },
      { q: "What if a hurricane delays my closing?", a: "This is common after a storm, because inspections, insurance binders and lender requirements all back up at once. Ask your mover about storage before you book a peak-season date, so you have a plan rather than an emergency." },
    ],
    related: ["moving-checklist-timeline", "moving-to-tampa-guide"],
  },
  {
    slug: "how-to-spot-a-moving-scam",
    title: "How to Spot a Moving Scam Before You Hand Over a Deposit",
    metaTitle: "How to Spot a Moving Scam (8 Warning Signs)",
    metaDescription:
      "Eight warning signs of a moving scam, how the hostage-load scheme works, and how to verify a mover's license before you pay a deposit.",
    keyTakeaway:
      "The clearest warning signs are a quote given without any walkthrough, a large cash deposit demanded up front, no verifiable USDOT or state license, and a company that will not put anything in writing.",
    excerpt:
      "The hostage-load scheme, the fake-license trick, and the eight signals that should end the conversation before any money changes hands.",
    category: "Consumer Advice",
    published: "2026-04-17",
    updated: "2026-08-05",
    readingTime: "7 min read",
    body: [
      { type: "p", text: "Moving fraud persists because the fundamentals favour the fraudster: your belongings are physically in someone else's possession, you are under time pressure, and you usually have no alternative available on short notice. The good news is that nearly every scam shows the same handful of tells before anything is loaded." },
      { type: "h2", text: "How the hostage-load scheme works" },
      { type: "p", text: "The dominant scam follows one script. A company quotes far below every competitor, sight unseen. They load your belongings. Then the price changes — the load was heavier than estimated, there were stairs, there were additional materials — and the new number is often double or triple the quote. Your belongings are on their truck, and they will not unload until you pay." },
      { type: "p", text: "It works because it is engineered around the moment you have the least leverage. The defence is entirely at the front end: never let it get to the loading stage." },
      { type: "h2", text: "Eight warning signs" },
      {
        type: "ol",
        items: [
          "A quote without a walkthrough. No in-home or video survey means the number is a guess, and guesses get revised later. This is the single strongest signal.",
          "A price far below every other quote. Three estimates within 20 per cent of each other and one at half the price does not mean you found a bargain.",
          "A large deposit demanded up front, especially in cash, wire, Zelle or cryptocurrency. A modest card deposit to hold a date is normal; hundreds or thousands before any work is not.",
          "No written estimate, or a blank or partially completed document you are asked to sign.",
          "No verifiable license. Interstate movers must have a USDOT number, and you can look it up.",
          "A generic company name with no physical address, or an address that turns out to be a mailbox or a residential house.",
          "Unmarked rental trucks arriving on moving day rather than company vehicles.",
          "Vague or evasive answers about insurance and valuation coverage.",
        ],
      },
      {
        type: "callout",
        title: "The signature you should never give",
        text: "Never sign a blank or incomplete document, and never sign an inventory or bill of lading you have not read. A signature on an incomplete form is how a low quote legally becomes a high bill.",
      },
      { type: "h2", text: "How to verify a mover" },
      {
        type: "ul",
        items: [
          "Interstate movers: look up the USDOT number in the FMCSA's public database at fmcsa.dot.gov. You can see licensing status, insurance on file and complaint history.",
          "Florida intrastate movers: verify registration with the Florida Department of Agriculture and Consumer Services, which regulates movers operating inside the state.",
          "Read reviews across at least two platforms, and read the negative ones specifically. A pattern of price-change complaints is the thing to look for.",
          "Confirm the physical address exists. A quick map search is enough to catch a mailbox storefront.",
          "Ask for a certificate of insurance. A legitimate mover produces one quickly because buildings request them constantly.",
        ],
      },
      { type: "h2", text: "Binding, non-binding and 'not to exceed'" },
      { type: "p", text: "These are legally distinct and worth understanding before you compare quotes:" },
      {
        type: "table",
        head: ["Type", "What it means"],
        rows: [
          ["Binding estimate", "A fixed price for the scope described. It changes only if you change the scope."],
          ["Non-binding estimate", "An educated guess. The final price can legitimately be higher based on actual weight or hours."],
          ["Binding not-to-exceed", "You pay the actual cost or the estimate, whichever is lower. The most customer-favourable structure."],
        ],
      },
      { type: "p", text: "Ask which one you are being given, and get the answer in writing. A company that will not commit to a category is telling you something." },
      { type: "h2", text: "If it is already happening" },
      {
        type: "ol",
        items: [
          "Do not pay the inflated amount on the spot if you can avoid it. Paying often ends your practical leverage and complicates recovery.",
          "Call local police. Holding goods for a renegotiated price may constitute theft or extortion depending on the circumstances.",
          "File a complaint with the FMCSA for an interstate move, or with Florida's Department of Agriculture and Consumer Services for a move inside the state.",
          "Contact your card issuer. A card payment can be disputed in a way a wire or cash payment cannot.",
          "Document everything: the original estimate, all communications, photographs, and the names on the truck.",
        ],
      },
      { type: "p", text: "That last point is the practical argument for paying a deposit by card rather than by cash or transfer, even when a discount is offered for the alternative. The discount is small; the recourse is not." },
    ],
    faqs: [
      { q: "Is it normal for movers to ask for a deposit?", a: "A modest deposit to hold a date is standard practice. A demand for a large sum up front — particularly by cash, wire, Zelle or cryptocurrency — is a serious warning sign. Pay deposits by card so you retain the ability to dispute the charge." },
      { q: "How do I check if a moving company is licensed?", a: "For interstate moves, search the company's USDOT number in the FMCSA database at fmcsa.dot.gov, which shows licensing status, insurance and complaint history. For moves inside Florida, verify registration with the Florida Department of Agriculture and Consumer Services." },
      { q: "What should I do if movers demand more money than quoted?", a: "Do not pay on the spot if you can avoid it, call local police, document everything including the original written estimate, and file a complaint with the FMCSA or the state. If you paid by card, contact your issuer immediately — that route is usually the fastest recovery." },
    ],
    related: ["how-much-do-movers-cost-in-tampa", "moving-checklist-timeline"],
  },
  {
    slug: "moving-to-tampa-guide",
    title: "Moving to Tampa: A Neighborhood and Practical Guide",
    metaTitle: "Moving to Tampa: Neighborhood Guide (2026)",
    metaDescription:
      "A practical guide to moving to Tampa: neighborhoods compared, what housing costs, flood zones, commuting, and what surprises new arrivals.",
    keyTakeaway:
      "Tampa's neighborhoods vary enormously in price, character and flood exposure. Check the evacuation-zone map before signing anything, budget for high homeowner's insurance, and choose a neighborhood by commute rather than map distance.",
    excerpt:
      "Where to live, what things cost, and the practical realities — flood zones, insurance, summer, commuting — that nobody mentions until you have already signed.",
    category: "Florida Moving",
    published: "2026-06-11",
    updated: "2026-09-14",
    readingTime: "10 min read",
    body: [
      { type: "p", text: "Tampa has been one of the fastest-growing metros in the country for several years, and most people arriving here are coming from somewhere considerably colder or considerably more expensive. This is the practical version of what to know — neighborhoods, costs and the things that genuinely surprise people in the first year." },
      { type: "h2", text: "Neighborhoods, compared" },
      { type: "h3", text: "South Tampa (Hyde Park, Palma Ceia, SoHo, Bayshore)" },
      { type: "p", text: "The most expensive and the most walkable. Historic homes, oak canopies, Bayshore Boulevard, and the densest concentration of restaurants and bars in the city. Trade-offs: prices, older housing stock with older systems, and significant flood exposure in the lower-lying sections. Popular with professionals and families who want to be central." },
      { type: "h3", text: "Seminole Heights and Tampa Heights" },
      { type: "p", text: "Historic bungalows just north of downtown, an established food scene, and relative value compared with South Tampa. Character-heavy and genuinely walkable in parts. The housing stock is old, so budget for the systems that come with 1920s construction." },
      { type: "h3", text: "Downtown, Channelside and Harbour Island" },
      { type: "p", text: "High-rise living, the Riverwalk, Water Street's ongoing development and Amalie Arena. Suits people who want to walk to work and out again in the evening. Everything is a condo, which means HOA fees, elevator reservations for moving, and building rules that will shape your move-in day." },
      { type: "h3", text: "New Tampa and Wesley Chapel" },
      { type: "p", text: "Master-planned suburbs along Bruce B. Downs and I-75 — newer, larger homes, strong schools, and gated communities. The commute downtown is real, particularly on Bruce B. Downs. The dominant choice for families relocating for work." },
      { type: "h3", text: "Westchase, Carrollwood and Town 'n' Country" },
      { type: "p", text: "Established west and north Tampa suburbs with good access to the Veterans Expressway and the airport. Westchase is planned and HOA-governed; Carrollwood is older with mature trees and more varied housing; Town 'n' Country is denser and more affordable." },
      { type: "h3", text: "St. Petersburg" },
      { type: "p", text: "Across the bay, with a distinct identity — downtown arts, the waterfront, Central Avenue, and easy access to the Gulf beaches. Increasingly chosen by people who work in Tampa and commute across the Howard Frankland or Gandy, which is a genuine 30 to 45 minutes each way depending on timing." },
      { type: "h2", text: "What it costs" },
      {
        type: "table",
        head: ["", "Typical range"],
        rows: [
          ["1-bed rent, Tampa", "$1,500 – $2,200/mo"],
          ["2-bed rent, Tampa", "$1,900 – $2,900/mo"],
          ["Median home price, Tampa metro", "$390,000 – $430,000"],
          ["South Tampa single-family", "$650,000 – $1.5M+"],
          ["Suburban 4-bed (Riverview, Wesley Chapel)", "$450,000 – $625,000"],
          ["Homeowner's insurance", "$3,000 – $8,000+/yr"],
        ],
      },
      {
        type: "callout",
        title: "Budget for insurance properly",
        text: "Florida homeowner's insurance is the line item that most shocks new arrivals, and it is frequently several times what people paid in their previous state. Flood insurance is separate from your homeowner's policy and, in much of Tampa Bay, not optional. Get real quotes on specific addresses before you commit to a purchase price.",
      },
      { type: "h2", text: "Flood zones: check before you sign" },
      { type: "p", text: "This is the single most important piece of practical advice for anyone moving to Tampa Bay. Large parts of the region sit in designated evacuation and flood zones, and the difference between Zone A and Zone X can mean thousands of dollars a year in insurance and a genuinely different experience of hurricane season." },
      { type: "p", text: "Both Hillsborough and Pinellas counties publish evacuation zone maps that you can search by address. Do it before signing a lease or a contract, not after. It takes two minutes and it is the cheapest due diligence available to you." },
      { type: "h2", text: "The commute is not about distance" },
      { type: "p", text: "Tampa's road network funnels through a small number of chokepoints, and map distance is a poor predictor of drive time. The Howard Frankland and Gandy bridges, the I-275/I-4 downtown interchange, the Westshore corridor and Bruce B. Downs all behave very differently at 8am than at 11am." },
      { type: "p", text: "Before committing to a neighborhood, drive the commute at the actual time you would be doing it. A trip that looks like 20 minutes on a map can be 50 in practice, and that is a difference you will feel twice a day for years." },
      { type: "h2", text: "What surprises people in the first year" },
      {
        type: "ul",
        items: [
          "Summer is a genuine adjustment. June through September is intensely hot and humid, with afternoon thunderstorms almost daily. Daily life shifts to early mornings and evenings.",
          "There is no state income tax, which is a real and immediate difference in take-home pay.",
          "A car is effectively mandatory. Public transit is limited and the metro is spread out.",
          "Hurricane season is a routine part of the calendar, not an emergency. Locals prepare and move on.",
          "The beaches are further than the map suggests once you account for bridge traffic, particularly on weekends in season.",
          "Growth is visible everywhere — construction, new communities and steadily increasing traffic on the same roads.",
        ],
      },
      { type: "h2", text: "A realistic first-90-days list" },
      {
        type: "ol",
        items: [
          "Florida driver's licence within 30 days of establishing residency.",
          "Vehicle registration and a Florida title within 30 days.",
          "File for homestead exemption if you bought — it meaningfully reduces property tax and there is a filing deadline.",
          "Get a SunPass transponder. Tampa Bay's toll roads are difficult to avoid entirely.",
          "Register to vote and update your address everywhere it matters.",
          "Build a hurricane kit before June: water, non-perishables, batteries, medications, and copies of documents.",
          "Find your evacuation zone and know your route before you need it.",
        ],
      },
    ],
    faqs: [
      { q: "What is the best neighborhood in Tampa for families?", a: "New Tampa, Wesley Chapel, Westchase and Carrollwood are the usual choices for families — newer homes, strong schools and quiet streets. South Tampa has good schools too but at substantially higher prices and with older housing stock." },
      { q: "Is Tampa expensive to live in?", a: "It is moderate by national standards and cheap relative to Miami, New York or California, with no state income tax. The two costs that surprise people are homeowner's insurance, which can run several thousand dollars a year, and home prices, which have risen sharply over the past five years." },
      { q: "Do I need flood insurance in Tampa?", a: "In much of Tampa Bay, yes — and it is a separate policy from your homeowner's insurance. Check the specific address on the county evacuation zone map before you sign anything. The difference between zones is worth thousands of dollars a year and a very different hurricane season." },
    ],
    related: ["moving-during-hurricane-season-florida", "moving-checklist-timeline"],
  },
];

export const postMap = new Map(posts.map((p) => [p.slug, p]));
export function getPost(slug: string): Post | undefined {
  return postMap.get(slug);
}
