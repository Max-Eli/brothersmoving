export type Service = {
  slug: string;
  name: string;
  /** Short label for nav menus. */
  navLabel: string;
  /** Used in <title>; keep under ~60 chars once the brand suffix is added. */
  metaTitle: string;
  metaDescription: string;
  /** One-sentence answer to "what is this service" — used for AI-search summaries. */
  summary: string;
  tagline: string;
  icon: IconName;
  /** Opening body copy on the detail page. Each paragraph renders separately. */
  intro: string[];
  includes: { title: string; body: string }[];
  process: { title: string; body: string }[];
  /** Fact rows rendered as a definition table — dense, quotable, easy to parse. */
  facts: { label: string; value: string }[];
  bestFor: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export type IconName =
  | "home"
  | "building"
  | "route"
  | "box"
  | "warehouse"
  | "muscle"
  | "piano"
  | "elevator"
  | "heart"
  | "clock";

export const services: Service[] = [
  {
    slug: "residential-moving",
    name: "Residential Moving",
    navLabel: "Residential Moving",
    metaTitle: "Residential Movers in Tampa, FL",
    metaDescription:
      "Full-service residential movers in Tampa Bay. Houses, townhomes and condos moved by trained crews. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "Full-service house moving across Tampa Bay, covering furniture disassembly, protective wrapping, loading, transport and placement in your new home.",
    tagline: "Your whole house, handled start to finish",
    icon: "home",
    intro: [
      "A house move is the version of this job with the most moving parts: furniture that has to come apart, a garage nobody has fully inventoried, and a closing date that will not slide. Our residential crews handle roughly two-thirds of the moves we run each year across Hillsborough and Pinellas counties, and the process below is what we have settled on after several thousand of them.",
      "Every residential job starts with a walkthrough — in person or over video — so we quote against what is actually in the house rather than a square-footage guess. That estimate is the number you pay. If we underestimate the work, that is our problem to absorb, not a line item added to your invoice on moving day.",
    ],
    includes: [
      {
        title: "Furniture disassembly and reassembly",
        body: "Bed frames, sectionals, dining tables, cribs, desks and wall units come apart before loading and go back together in the right room at the destination. Hardware is bagged, labelled and taped to the piece it belongs to.",
      },
      {
        title: "Protective wrapping on every piece",
        body: "Moving blankets and shrink wrap on all upholstered and wood furniture, corner protection on glass and mirrors, and mattress bags on every mattress — included, not an add-on.",
      },
      {
        title: "Floor and doorway protection",
        body: "Runners on hardwood and tile, door-jamb padding on tight entryways, and railing protection on stairwells. This matters more in older Seminole Heights and Hyde Park homes than anywhere else in the Bay.",
      },
      {
        title: "Appliance handling",
        body: "Washers, dryers and refrigerators disconnected, secured on appliance dollies and reconnected where local code allows. Gas lines are the one thing we leave to a licensed technician.",
      },
      {
        title: "Room-by-room placement",
        body: "Boxes and furniture go where you want them, not stacked in the garage. We label by destination room during the load so unloading is directed rather than improvised.",
      },
      {
        title: "Debris removal",
        body: "Used blankets, shrink wrap and packing debris leave with our truck. You get the house back clean.",
      },
    ],
    process: [
      {
        title: "Walkthrough and written estimate",
        body: "We inventory what is moving — including the attic and garage — and send a written flat-rate quote, usually the same day.",
      },
      {
        title: "Scheduling and confirmation",
        body: "We lock your date and send a confirmation with crew size, arrival window and the direct number of the lead on your job.",
      },
      {
        title: "Moving day prep",
        body: "The crew walks both properties with you, protects floors and entryways, and confirms anything that is not going on the truck before a single item moves.",
      },
      {
        title: "Load, transport, unload",
        body: "Heavy and fragile items are loaded first and tied off in tiers. We drive it ourselves — your shipment is never handed to a third party on a local move.",
      },
      {
        title: "Placement and final walkthrough",
        body: "Furniture is reassembled and placed, boxes land in their rooms, and we walk the house with you before the crew leaves.",
      },
    ],
    facts: [
      { label: "Typical crew size", value: "2–4 movers depending on home size" },
      { label: "1-bedroom apartment", value: "3–5 hours" },
      { label: "3-bedroom house", value: "6–9 hours" },
      { label: "4+ bedroom house", value: "Full day, sometimes two crews" },
      { label: "Pricing model", value: "Flat rate, quoted before moving day" },
      { label: "Included coverage", value: "Standard released-value protection; full-value options available" },
    ],
    bestFor: [
      "Single-family homes, townhomes and villas",
      "Families moving within Tampa Bay",
      "Anyone who wants furniture reassembled and placed, not dumped",
      "Moves with a hard closing or lease-end date",
    ],
    faqs: [
      {
        q: "How far in advance should I book a residential move in Tampa?",
        a: "Two to three weeks is comfortable for most dates. Book four to six weeks out for the last weekend of the month, any time in May through August, and the days around the first of the month — those are the slots that fill first across every Tampa Bay mover.",
      },
      {
        q: "Do I need to empty my dresser drawers?",
        a: "Clothing can stay in dresser drawers. Empty anything with glass, liquids, jewellery, documents or significant weight — books and tools in particular turn a dresser into a piece that can fail while being carried.",
      },
      {
        q: "What will you not move?",
        a: "Federal regulations prohibit hazardous materials on a moving truck: propane tanks, gasoline, paint thinner, ammunition, pool chemicals, aerosols and fire extinguishers. We also ask you to personally carry cash, jewellery, prescriptions and irreplaceable documents.",
      },
    ],
    related: ["packing-services", "apartment-condo-moving", "storage-solutions"],
  },

  {
    slug: "commercial-moving",
    name: "Commercial & Office Moving",
    navLabel: "Commercial & Office",
    metaTitle: "Commercial & Office Movers in Tampa",
    metaDescription:
      "Office and commercial movers in Tampa Bay. After-hours and weekend relocations with minimal downtime. Get a scoped quote: (305) 697-8717.",
    summary:
      "Office, retail and warehouse relocations across Tampa Bay, scheduled after hours or over a weekend so your business loses as little operating time as possible.",
    tagline: "Move the business, not the business hours",
    icon: "building",
    intro: [
      "Commercial moving is measured in downtime, not hours on a truck. The question that matters is whether your team can work Monday morning — so we plan backwards from that, build the schedule around your closed hours, and sequence the load so the things people need first come off the truck first.",
      "We handle everything from six-person offices in Westshore to full warehouse relocations in Ybor and Brandon. Larger jobs get a written move plan with a floor-by-floor sequence, a labelling scheme keyed to your new layout, and a single point of contact who stays on the job from load to final placement.",
    ],
    includes: [
      {
        title: "After-hours and weekend scheduling",
        body: "Evening, overnight and Saturday–Sunday moves at no premium rate. Most offices we move close Friday and open Monday in the new space.",
      },
      {
        title: "Workstation and cubicle systems",
        body: "Modular systems broken down, labelled by station and rebuilt to your new floor plan. Panels and hardware stay keyed together so reassembly is not a puzzle.",
      },
      {
        title: "IT equipment handling",
        body: "Monitors, workstations, servers and network gear wrapped in anti-static material and crated where needed. We coordinate directly with your IT vendor on disconnect and reconnect timing.",
      },
      {
        title: "File and records transfer",
        body: "Chain-of-custody labelling for file rooms and records storage, with sealed cartons for anything confidential. Important for medical, legal and financial tenants.",
      },
      {
        title: "Building compliance",
        body: "We handle COI submissions, freight elevator reservations and loading-dock scheduling with both property managers before the date is confirmed.",
      },
      {
        title: "Phased and swing moves",
        body: "Departments moved in waves so part of the company stays operational, or a temporary swing space staged and re-moved when a build-out finishes.",
      },
    ],
    process: [
      {
        title: "Site survey at both locations",
        body: "We walk the origin and destination, note dock access, elevator dimensions and after-hours building rules, and identify anything that needs a crate or a rigger.",
      },
      {
        title: "Written move plan",
        body: "A sequenced plan with crew size, truck count, labelling scheme, a timeline mapped to your closed hours, and the cutoff times your staff need to hit.",
      },
      {
        title: "Building and vendor coordination",
        body: "Certificates of insurance, elevator and dock reservations, and IT vendor scheduling are handled before move week — not the night of.",
      },
      {
        title: "Execution",
        body: "Crews work the plan under one supervisor. You get status checkpoints rather than having to stand on site all night.",
      },
      {
        title: "Day-one support",
        body: "A crew stays available the first business morning for the inevitable 'this desk needs to move three feet' round of adjustments.",
      },
    ],
    facts: [
      { label: "Typical scheduling", value: "After hours, overnight or weekend" },
      { label: "Small office (under 10 staff)", value: "One evening" },
      { label: "Mid-size office (10–50 staff)", value: "One weekend" },
      { label: "Warehouse / industrial", value: "Phased over multiple days" },
      { label: "COI turnaround", value: "Same day in most cases" },
      { label: "Pricing model", value: "Scoped flat rate after site survey" },
    ],
    bestFor: [
      "Offices, medical and dental practices, and law firms",
      "Retail buildouts and storefront relocations",
      "Warehouse, light industrial and distribution space",
      "Tenants under a hard lease-expiration date",
    ],
    faqs: [
      {
        q: "Can you move our office over a weekend so we do not lose a business day?",
        a: "Yes — this is how most of our office moves run. A typical 10-to-50-person office loads Friday evening, transports and unloads Saturday, and is placed and reassembled Sunday, with staff working normally Monday morning.",
      },
      {
        q: "Do you carry a certificate of insurance for building management?",
        a: "Yes. Send us the COI requirements from both property managers when you book and we will have certificates issued and submitted, usually the same day. Most Westshore and downtown Tampa towers require this before they will release a freight elevator.",
      },
      {
        q: "Can you move server racks and network equipment?",
        a: "We move and reinstall physical equipment — racks, switches, workstations and monitors — with anti-static handling. We do not perform the logical disconnect and reconnect; we schedule around your IT provider so their window and ours line up.",
      },
    ],
    related: ["labor-only-moving", "storage-solutions", "specialty-item-moving"],
  },

  {
    slug: "long-distance-moving",
    name: "Long-Distance Moving",
    navLabel: "Long-Distance Moving",
    metaTitle: "Long-Distance Movers from Tampa, FL",
    metaDescription:
      "Long-distance moving from Tampa across Florida and up the East Coast. Dedicated truck, guaranteed delivery window. Call (305) 697-8717.",
    summary:
      "Interstate and cross-Florida moves out of Tampa Bay on a dedicated truck, with a guaranteed delivery window and the same crew loading and unloading.",
    tagline: "One truck, one crew, a date you can plan around",
    icon: "route",
    intro: [
      "The complaint people have about long-distance moving is almost never the price — it is the not knowing. Shipments get consolidated with three other households, handed between carriers, and delivered inside a two-week 'spread' that makes it impossible to book time off or schedule a closing.",
      "We run long-distance moves differently: your shipment goes on a dedicated truck, the crew that loads it is the crew that unloads it, and you get a delivery window measured in days, not weeks. Our heaviest corridors are Tampa to South Florida, Tampa to Orlando and Jacksonville, and Tampa up the I-95 corridor toward the Carolinas, Virginia and the Northeast.",
    ],
    includes: [
      {
        title: "Dedicated transport",
        body: "Your household travels alone on the truck. Nothing is warehoused mid-route, transferred between carriers or held waiting for a load to fill.",
      },
      {
        title: "Guaranteed delivery window",
        body: "A firm window agreed before you book, not an industry-standard spread. Anything in Florida is typically next-day.",
      },
      {
        title: "Same crew both ends",
        body: "The movers who wrapped and loaded your furniture are the ones who carry it into the new house. Accountability does not get handed off at a state line.",
      },
      {
        title: "Full inventory with condition report",
        body: "Every item is numbered and its condition recorded at load and checked at delivery, so any claim is settled against a record rather than a memory.",
      },
      {
        title: "Packing built for distance",
        body: "Long-haul loads are wrapped and tiered to a higher standard than a cross-town move — hundreds of highway miles put different forces on a load than a twenty-minute drive.",
      },
      {
        title: "Storage in transit",
        body: "If your closing dates do not line up, we hold your shipment in secure storage and deliver when the new place is ready.",
      },
    ],
    process: [
      {
        title: "Detailed inventory and quote",
        body: "A video or in-home survey produces an itemised inventory. Long-distance pricing depends on weight and distance, so this step decides the accuracy of everything that follows.",
      },
      {
        title: "Dates locked in writing",
        body: "Load date and delivery window are committed in your contract before a deposit is taken.",
      },
      {
        title: "Load day",
        body: "Full wrap, numbered inventory and a signed condition report. Expect a longer load day than a local move — the packing standard is higher.",
      },
      {
        title: "Transit with check-ins",
        body: "You get the driver's direct number and a check-in each day the truck is on the road.",
      },
      {
        title: "Delivery and inventory check",
        body: "Items are checked off against the inventory as they come off the truck, then reassembled and placed room by room.",
      },
    ],
    facts: [
      { label: "Tampa → Miami / Fort Lauderdale", value: "Next-day delivery" },
      { label: "Tampa → Orlando / Jacksonville", value: "Next-day delivery" },
      { label: "Tampa → Atlanta / Carolinas", value: "1–3 days" },
      { label: "Tampa → Northeast corridor", value: "2–5 days" },
      { label: "Transport type", value: "Dedicated truck, no consolidation" },
      { label: "Pricing model", value: "Flat rate based on inventory and distance" },
    ],
    bestFor: [
      "Job relocations with a firm start date",
      "Families moving between Florida metros",
      "Anyone who has been burned by a wide delivery spread",
      "Moves where dates on both ends are already fixed",
    ],
    faqs: [
      {
        q: "How long does a long-distance move from Tampa actually take?",
        a: "Anywhere in Florida is next-day. Atlanta and the Carolinas run one to three days. The Northeast corridor is two to five. Because we do not consolidate shipments, these are real transit times rather than the multi-week delivery spread most national van lines quote.",
      },
      {
        q: "Will my belongings be transferred to another truck?",
        a: "No. Your shipment is loaded once, travels on a dedicated truck and is unloaded by the same crew. The overwhelming majority of long-distance damage and loss happens during transfers between carriers, which is exactly the step we remove.",
      },
      {
        q: "What if my new home is not ready on the delivery date?",
        a: "We hold your shipment in secure storage and deliver when you are ready. Arrange it when you book and it is priced into your flat rate; arrange it mid-transit and it becomes a change order, so tell us early if your dates look shaky.",
      },
    ],
    related: ["packing-services", "storage-solutions", "residential-moving"],
  },

  {
    slug: "packing-services",
    name: "Packing & Unpacking",
    navLabel: "Packing & Unpacking",
    metaTitle: "Professional Packing Services in Tampa",
    metaDescription:
      "Professional packers in Tampa Bay. Full-home packing, partial and fragile-only packing, custom crating and unpacking. Materials included. Call (305) 697-8717.",
    summary:
      "Professional packing in Tampa Bay — full-home, partial or fragile-only — using materials sized to each item, plus unpacking and debris removal at the destination.",
    tagline: "The part everyone underestimates",
    icon: "box",
    intro: [
      "Packing is the single biggest predictor of how a move goes. Nearly all breakage we see on jobs where the customer packed themselves traces back to the same three things: boxes that were too big, boxes that were not full, and dishes stacked flat instead of on edge.",
      "You can hand us the whole house, just the kitchen and the china cabinet, or anything in between. Materials are included in the quote — we do not meter boxes and tape at retail prices on moving day, which is a common way a quoted number quietly grows.",
    ],
    includes: [
      {
        title: "Full-home packing",
        body: "Every room packed, labelled by room and contents, and inventoried. Typically done the day before the move so load day starts clean.",
      },
      {
        title: "Partial packing",
        body: "You handle clothes and books; we take the kitchen, china cabinet, art and electronics — the categories that account for most damage claims.",
      },
      {
        title: "Fragile-only packing",
        body: "Dishware, stemware, mirrors, artwork, lamps and collectibles packed by someone who does it daily. The highest-value use of a packing budget.",
      },
      {
        title: "Custom crating",
        body: "Wooden crates built on site for oversized art, glass tabletops, marble, stone countertops and antiques that no stock carton fits.",
      },
      {
        title: "Wardrobe boxes",
        body: "Hanging clothes transfer straight from closet to box to closet on the rail, still on their hangers. Provided on the day and removed afterward.",
      },
      {
        title: "Unpacking and debris removal",
        body: "Boxes unpacked, contents placed on surfaces or in cabinets, and every carton and scrap of paper hauled away the same day.",
      },
    ],
    process: [
      {
        title: "Decide the scope",
        body: "During your walkthrough we identify what genuinely needs professional packing and what you can comfortably do yourself. We will tell you where your money is not worth spending.",
      },
      {
        title: "Materials delivered",
        body: "Boxes, paper, bubble wrap and tape arrive with the crew. Nothing for you to source, measure or return.",
      },
      {
        title: "Pack day",
        body: "Usually the day before loading. Rooms are packed one at a time and each carton is labelled with room, contents and a fragile flag.",
      },
      {
        title: "Crating for specialty items",
        body: "Custom crates are measured and built on site for anything that does not fit a standard carton.",
      },
      {
        title: "Unpack at destination",
        body: "If you booked unpacking, cartons are opened, contents placed and all packing debris removed before we leave.",
      },
    ],
    facts: [
      { label: "1-bedroom, full pack", value: "3–4 hours, 2 packers" },
      { label: "3-bedroom, full pack", value: "6–8 hours, 2–3 packers" },
      { label: "Kitchen only", value: "2–4 hours" },
      { label: "Materials", value: "Included in the quoted price" },
      { label: "Typical timing", value: "Day before the move" },
      { label: "Custom crating", value: "Built on site, quoted per item" },
    ],
    bestFor: [
      "Anyone short on time before a hard move-out date",
      "Homes with china, crystal, art or collectibles",
      "Long-distance moves, where packing standards matter more",
      "Families juggling work and kids during move week",
    ],
    faqs: [
      {
        q: "Is professional packing worth the cost?",
        a: "For fragile items, consistently yes — fragile-only packing is usually a few hundred dollars and covers the categories that produce almost all damage claims. For clothes, books, linens and garage items, your own labour is fine. Most customers land on partial packing for exactly this reason.",
      },
      {
        q: "How many boxes will I need for a three-bedroom house?",
        a: "Plan on 60 to 80 boxes for a typical three-bedroom home: roughly 25 small, 25 medium, 15 large and 5 to 8 wardrobe boxes, plus a couple of dish-pack cartons for the kitchen. If we pack for you, materials are included and counting is our problem.",
      },
      {
        q: "Do you take the empty boxes away afterwards?",
        a: "Yes, when you book unpacking. We break down every carton and remove all paper, bubble wrap and tape the same day, so you are not left with a garage full of cardboard and a trip to the recycling centre.",
      },
    ],
    related: ["residential-moving", "long-distance-moving", "specialty-item-moving"],
  },

  {
    slug: "storage-solutions",
    name: "Storage Solutions",
    navLabel: "Storage",
    metaTitle: "Moving & Storage in Tampa, FL",
    metaDescription:
      "Climate-controlled short and long-term storage in Tampa Bay, with pickup and redelivery by the same crew. Ideal for closing-date gaps. Call (305) 697-8717.",
    summary:
      "Clean, climate-controlled storage in the Tampa area for gaps between closing dates, with the same crew handling pickup, storage and redelivery.",
    tagline: "For when the dates do not line up",
    icon: "warehouse",
    intro: [
      "Closing dates rarely cooperate. You sell on the 15th and close on the 30th, the build-out runs two weeks long, or the lease ends before the new place is ready. Storage bridges that gap without you renting a unit, renting a truck and handling your furniture twice.",
      "In Florida, climate control is not a luxury item. Tampa summers put storage units well past 100°F with brutal humidity — enough to warp solid wood, delaminate veneer, cloud electronics and grow mould on upholstery. Everything we store is in a climate-controlled, monitored facility.",
    ],
    includes: [
      {
        title: "Climate-controlled space",
        body: "Temperature and humidity held at stable levels year round. Non-negotiable in Florida for wood furniture, electronics, artwork and anything upholstered.",
      },
      {
        title: "Handled once",
        body: "We load, transport, store and redeliver. Your furniture is not carried in and out of a rental unit by you on either end.",
      },
      {
        title: "Inventoried storage",
        body: "Everything is numbered and logged on the way in, so you know exactly what is in storage and can request specific items.",
      },
      {
        title: "Palletised and wrapped",
        body: "Belongings stay wrapped and stored on pallets off the floor, not stacked loose in a shared room.",
      },
      {
        title: "Secured facility",
        body: "Alarmed, monitored and access-controlled. Only authorised staff reach the storage floor.",
      },
      {
        title: "Flexible terms",
        body: "Billed monthly with no long minimum. Stay a week between closings or a year during a build.",
      },
    ],
    process: [
      {
        title: "Load out as normal",
        body: "The crew packs and loads exactly as they would for a direct move, with inventory numbers assigned during the load.",
      },
      {
        title: "Into storage",
        body: "Items go into the facility wrapped, palletised and logged. You get a copy of the inventory.",
      },
      {
        title: "While in storage",
        body: "Monthly billing, and 48 hours' notice is enough to retrieve specific items if you need something before the full redelivery.",
      },
      {
        title: "Redelivery",
        body: "Call with your date. The crew loads out of storage and delivers, reassembles and places everything in your new home.",
      },
    ],
    facts: [
      { label: "Climate control", value: "Standard on all storage" },
      { label: "Minimum term", value: "One month" },
      { label: "Billing", value: "Monthly, cancel when you redeliver" },
      { label: "Item retrieval notice", value: "48 hours" },
      { label: "Inventory", value: "Numbered, with a copy provided" },
      { label: "Common use", value: "Closing-date gaps and renovations" },
    ],
    bestFor: [
      "Sale and purchase dates that do not line up",
      "Renovations and build-outs running long",
      "Downsizing before deciding what to keep",
      "Snowbirds storing between seasons",
    ],
    faqs: [
      {
        q: "Do I really need climate-controlled storage in Tampa?",
        a: "For furniture, yes. A non-climate-controlled unit in a Tampa summer regularly exceeds 100°F with high humidity. That is enough to warp solid wood, separate veneer, damage electronics and grow mould on upholstery. Climate control is standard on everything we store for exactly this reason.",
      },
      {
        q: "Can I get something out of storage before the full delivery?",
        a: "Yes. Give us 48 hours' notice and we will pull specific items from your inventory. This is common for seasonal clothing, documents and tools people realise they need mid-gap.",
      },
      {
        q: "How is storage priced?",
        a: "By the volume your shipment actually occupies, billed monthly, quoted after your walkthrough. There is no long-term commitment — most customers store for two to six weeks between closings and pay for only that period.",
      },
    ],
    related: ["residential-moving", "long-distance-moving", "commercial-moving"],
  },

  {
    slug: "labor-only-moving",
    name: "Labor-Only Moving Help",
    navLabel: "Labor-Only Help",
    metaTitle: "Labor-Only Movers in Tampa, FL",
    metaDescription:
      "Hourly labor-only movers in Tampa Bay. Load or unload your rental truck or container. Two-hour minimum. Call (305) 697-8717.",
    summary:
      "Hourly moving muscle in Tampa Bay for loading and unloading rental trucks and containers, or rearranging heavy furniture — you supply the truck, we supply the crew.",
    tagline: "You bring the truck, we bring the crew",
    icon: "muscle",
    intro: [
      "If you have already rented the truck or booked a portable container, you do not need a full-service move — you need experienced people for the loading and unloading. That is the whole job here, billed hourly with a two-hour minimum.",
      "The loading half is where this service earns its money. How a truck is packed determines whether anything breaks over the drive, and it is the part DIY movers most consistently get wrong. A properly tiered and tied-off load also fits noticeably more into the same truck, which occasionally saves a second trip on its own.",
    ],
    includes: [
      {
        title: "Loading rental trucks",
        body: "U-Haul, Penske, Budget or Enterprise — loaded in tiers, weight distributed correctly and tied off so nothing shifts in transit.",
      },
      {
        title: "Unloading at destination",
        body: "Truck or container unloaded and carried to the right room, not left in a pile in the driveway.",
      },
      {
        title: "Container loading",
        body: "PODS, U-Pack, 1-800-PACK-RAT and similar containers packed tight and braced. Containers get handled by forklift, so bracing matters more than in a truck.",
      },
      {
        title: "In-home moves",
        body: "Moving heavy furniture between rooms or floors — for new flooring, a renovation or simply a different layout.",
      },
      {
        title: "Furniture disassembly",
        body: "Bed frames, tables and sectionals broken down and rebuilt. Add it to any labor-only booking.",
      },
      {
        title: "Loading for storage",
        body: "Packing a storage unit so it stays accessible — aisles left, and the things you will want first placed where you can reach them.",
      },
    ],
    process: [
      {
        title: "Tell us the scope",
        body: "Truck or container size, home size, stairs or elevator, and whether you need loading, unloading or both.",
      },
      {
        title: "We recommend crew and time",
        body: "We will give you an honest estimate of hours. Two movers handle most one- and two-bedroom loads; three or four make sense for a house or a tight time window.",
      },
      {
        title: "Have it staged",
        body: "Boxes packed, sealed and stacked near the door before we arrive. This is the single biggest factor in your final bill.",
      },
      {
        title: "We work the clock",
        body: "Billed in 30-minute increments after the two-hour minimum. No charge for travel time inside our standard service area.",
      },
    ],
    facts: [
      { label: "Minimum booking", value: "2 hours" },
      { label: "Billing after minimum", value: "30-minute increments" },
      { label: "Typical crew", value: "2–4 movers" },
      { label: "1-bedroom load or unload", value: "2–3 hours" },
      { label: "3-bedroom load or unload", value: "4–6 hours" },
      { label: "Equipment", value: "Dollies, straps and blankets provided" },
    ],
    bestFor: [
      "DIY movers who have already rented a truck",
      "PODS and portable container customers",
      "Rearranging heavy furniture or clearing rooms for flooring",
      "Budget-conscious moves that still need the heavy lifting done right",
    ],
    faqs: [
      {
        q: "How much labor-only help do I need for a two-bedroom?",
        a: "Two movers for three to four hours covers a typical two-bedroom load or unload, assuming boxes are packed and staged. Add an hour for a second-floor walk-up, and another for furniture that needs disassembly.",
      },
      {
        q: "Do you bring dollies and blankets?",
        a: "Yes — dollies, straps and moving blankets come with the crew at no extra charge. You supply the truck or container; we supply everything needed to load it properly.",
      },
      {
        q: "Can you load a PODS container?",
        a: "Yes, and container loading benefits more from experience than truck loading does. Containers get lifted and moved by forklift, so the load has to be braced against forces a truck never applies. A poorly packed container shifts even when it never leaves your driveway.",
      },
    ],
    related: ["residential-moving", "storage-solutions", "apartment-condo-moving"],
  },

  {
    slug: "specialty-item-moving",
    name: "Specialty & Heavy Item Moving",
    navLabel: "Specialty Items",
    metaTitle: "Piano, Safe & Specialty Movers in Tampa",
    metaDescription:
      "Specialty movers in Tampa Bay for pianos, gun safes, pool tables, artwork, antiques and oversized glass. Right equipment, right crew. Call (305) 697-8717.",
    summary:
      "Movers for the items a standard crew should not attempt — pianos, safes, pool tables, fine art and antiques — using purpose-built equipment and trained technique.",
    tagline: "The pieces that need specialists, not just strength",
    icon: "piano",
    intro: [
      "Some items are not a question of strength. A 600-pound upright piano, a gun safe, a slate pool table or a nineteenth-century armoire each fail in a specific, expensive way when moved by people who have not moved one before — and they take doorframes, stair treads and backs with them when they do.",
      "These jobs get the right equipment and a crew that has done that specific item many times: piano boards and skid boards, stair-climbing dollies, four-wheel dollies rated well past the load, and custom crating where a stock carton will not do.",
    ],
    includes: [
      {
        title: "Piano moving",
        body: "Uprights, spinets, consoles, baby grands and grands. Grands are dismantled — legs and lyre removed — and travel on their side on a padded piano board. We do not roll a piano on its own castors.",
      },
      {
        title: "Gun safes and safes",
        body: "Safes from 300 to 2,000+ pounds on rated equipment with proper stair technique. Weight and stair count decide the crew size and gear before we quote.",
      },
      {
        title: "Pool and billiard tables",
        body: "Disassembled properly: felt removed, slate sections separated, individually wrapped and transported flat. Slate is heavy, brittle and effectively irreplaceable in a matched set.",
      },
      {
        title: "Fine art and antiques",
        body: "Custom crating, corner protection and, for valuable canvases, mirror-cartons or purpose-built crates. Antiques get corner blocking and a documented condition report.",
      },
      {
        title: "Oversized glass and stone",
        body: "Glass tabletops, mirrors, marble and stone countertops crated and transported on edge in an A-frame, never flat.",
      },
      {
        title: "Exercise equipment",
        body: "Treadmills, home gyms, Peloton units and racks broken down, moved and reassembled.",
      },
    ],
    process: [
      {
        title: "Assessment before quoting",
        body: "We need the item type, weight, dimensions, stair count and doorway measurements. Specialty items are quoted individually — there is no flat piano price that is honest across every house.",
      },
      {
        title: "Equipment and crew assigned",
        body: "The right boards, dollies and crew size are decided before the date, not improvised in your living room.",
      },
      {
        title: "Path preparation",
        body: "Doorframes padded, floors protected, stairs measured. On tight jobs we measure the path before touching the item.",
      },
      {
        title: "The move itself",
        body: "Slow, controlled and communicated. This is the stage where speed causes damage, so we do not rush it.",
      },
      {
        title: "Placement and reassembly",
        body: "Reassembled and placed where you want it. Pianos need tuning after any move — plan on it two to four weeks after, once the instrument has settled.",
      },
    ],
    facts: [
      { label: "Upright piano", value: "3–4 movers, piano board, 1–2 hours" },
      { label: "Baby grand / grand", value: "4 movers, dismantled and boarded" },
      { label: "Gun safe", value: "Crew and gear set by weight and stair count" },
      { label: "Slate pool table", value: "Disassembly required, no exceptions" },
      { label: "Stone and glass", value: "Crated, transported on edge" },
      { label: "Pricing", value: "Quoted per item after assessment" },
    ],
    bestFor: [
      "Pianos of any size",
      "Gun safes and commercial safes",
      "Slate pool tables",
      "Fine art, antiques and collections",
      "Marble, stone and oversized glass",
    ],
    faqs: [
      {
        q: "How much does it cost to move a piano in Tampa?",
        a: "Price depends on the instrument and the path, not just the piano. An upright moved ground-floor to ground-floor is at the low end; a grand coming down a flight of stairs and into a second-floor condo is at the high end. Tell us the type, the stair count at both ends and the doorway widths, and we will quote it accurately.",
      },
      {
        q: "Can you move a piano up or down stairs?",
        a: "Yes, with the right crew size and equipment. Stairs are the variable that most affects the quote, so tell us the exact count at both ends when you call. Tight turns and narrow landings matter as much as the number of steps.",
      },
      {
        q: "Do you have to take apart a pool table?",
        a: "Yes — a slate pool table must be disassembled. The slate comes in two or three sections weighing 150 to 250 pounds each, and moving the table intact cracks slate and warps the frame. Anyone who offers to move one whole is telling you they have not done it before.",
      },
    ],
    related: ["residential-moving", "packing-services", "commercial-moving"],
  },

  {
    slug: "apartment-condo-moving",
    name: "Apartment & Condo Moving",
    navLabel: "Apartment & Condo",
    metaTitle: "Apartment & Condo Movers in Tampa",
    metaDescription:
      "Apartment and high-rise condo movers in Tampa. Elevator reservations, COIs, tight stairwells and strict move-in windows handled. Call (305) 697-8717.",
    summary:
      "Apartment, condo and high-rise moves in Tampa Bay, including building paperwork, elevator reservations and the narrow move-in windows HOAs enforce.",
    tagline: "Built for buildings with rules",
    icon: "elevator",
    intro: [
      "Apartment and condo moves are rarely difficult because of the furniture. They are difficult because of the building: a four-hour elevator reservation, a COI the management office needs 72 hours in advance, a loading zone two hundred feet from the door, and an HOA that does not allow moves on Sundays.",
      "We move into and out of towers across downtown Tampa, Channelside, Harbour Island, Westshore and the St. Pete waterfront constantly. We know what those buildings require, and we handle the paperwork side rather than leaving you to discover a requirement on move-in morning.",
    ],
    includes: [
      {
        title: "Building paperwork",
        body: "Certificates of insurance issued to your building's exact requirements and submitted to management ahead of the deadline.",
      },
      {
        title: "Elevator reservations",
        body: "We coordinate the freight elevator booking at both buildings and plan the load to finish inside the reserved window.",
      },
      {
        title: "Long-carry handling",
        body: "Buildings where the closest legal parking is a long walk from the door. Priced honestly up front, not added later as a surprise long-carry fee.",
      },
      {
        title: "Stairwell moves",
        body: "Walk-ups and buildings with no freight elevator. Railing and corner protection, and enough crew that nobody is carrying a sofa alone up four flights.",
      },
      {
        title: "Tight-access furniture",
        body: "Sectionals and mattresses through doorways and stairwells they barely fit. Disassembly where it is the only way through.",
      },
      {
        title: "Strict-window scheduling",
        body: "Moves planned to fit a two-, four- or six-hour building window. We arrive staged and ready to work the clock.",
      },
    ],
    process: [
      {
        title: "Building requirements first",
        body: "Before quoting we ask about elevator access, COI requirements, permitted move hours and where the truck can legally park.",
      },
      {
        title: "Paperwork submitted",
        body: "COIs are issued and sent to both management offices well ahead of any deadline.",
      },
      {
        title: "Elevators and loading zones booked",
        body: "Reservations confirmed at both ends, with the schedule built around the tighter of the two windows.",
      },
      {
        title: "Staged, efficient load",
        body: "In a timed window, sequencing is everything. Items are staged near the elevator so the lift runs continuously.",
      },
      {
        title: "Placement inside the unit",
        body: "Furniture reassembled and placed, boxes to their rooms, and all debris carried out with us.",
      },
    ],
    facts: [
      { label: "Studio / 1-bedroom", value: "2 movers, 3–4 hours" },
      { label: "2-bedroom condo", value: "3 movers, 4–6 hours" },
      { label: "COI turnaround", value: "Same day in most cases" },
      { label: "Elevator reservations", value: "Coordinated by us" },
      { label: "Walk-up surcharge", value: "None — quoted into the flat rate" },
      { label: "Long carry", value: "Assessed and quoted up front" },
    ],
    bestFor: [
      "Downtown Tampa, Channelside and Harbour Island high-rises",
      "Westshore and South Tampa apartment communities",
      "St. Petersburg and Clearwater waterfront condos",
      "Walk-ups, student housing and first apartments",
    ],
    faqs: [
      {
        q: "Do you provide a certificate of insurance for my building?",
        a: "Yes, at no charge. Send us your building's COI requirements when you book — most Tampa high-rises and HOAs want them 48 to 72 hours ahead, and a missing COI is the single most common reason a move gets turned away at the door.",
      },
      {
        q: "What if my building only allows a four-hour move window?",
        a: "We plan for it. We assign enough crew to finish inside the window, stage items near the elevator so it runs continuously, and arrive early enough to have floor protection down before the window opens.",
      },
      {
        q: "Do you charge extra for stairs or a long walk to the truck?",
        a: "No surprise fees. Stairs and long carries are assessed during your walkthrough and priced into the flat rate, so the number you are quoted is the number you pay. Unexpected stair and long-carry charges are one of the most common complaints in this industry and we do not run that way.",
      },
    ],
    related: ["residential-moving", "labor-only-moving", "packing-services"],
  },

  {
    slug: "senior-moving",
    name: "Senior & Downsizing Moves",
    navLabel: "Senior & Downsizing",
    metaTitle: "Senior Moving Services in Tampa, FL",
    metaDescription:
      "Patient, respectful senior moving and downsizing in Tampa Bay. Retirement community and assisted-living transitions, sorting help and unpacking. (305) 697-8717.",
    summary:
      "Senior relocations and downsizing in Tampa Bay, handled at an unhurried pace with help sorting, donating and setting up the new home so it is livable the first night.",
    tagline: "Unhurried, respectful, fully set up",
    icon: "heart",
    intro: [
      "A senior move is usually a downsizing move, and downsizing is emotional work before it is logistical work. Forty years in one house does not reduce to a two-bedroom villa without a lot of decisions, and those decisions should not be made with a crew standing in the doorway waiting.",
      "We schedule these moves with more time than the furniture strictly requires. Crews are briefed to work at the client's pace, to ask before moving anything, and to finish the day with beds made, the kitchen functional and the television working — so the first night in the new place feels like arriving somewhere, not camping in a maze of boxes.",
    ],
    includes: [
      {
        title: "Unhurried scheduling",
        body: "Extra time built into the day. Nobody is rushed, and the crew does not treat pauses as lost money.",
      },
      {
        title: "Sorting and downsizing help",
        body: "Hands-on help deciding what goes, what is donated and what stays with family. We work room by room at whatever pace suits.",
      },
      {
        title: "Donation and disposal",
        body: "Donated items delivered to local Tampa Bay charities with receipts provided, and unwanted items removed responsibly.",
      },
      {
        title: "Community coordination",
        body: "Independent living, assisted living and retirement communities have their own move rules and windows. We handle that coordination directly with the community.",
      },
      {
        title: "Full setup at destination",
        body: "Beds assembled and made, kitchen unpacked, television connected, furniture placed. The new home is livable before we leave.",
      },
      {
        title: "Family communication",
        body: "When adult children are coordinating from out of state, we keep them updated directly — a lot of our senior moves are booked from another time zone.",
      },
    ],
    process: [
      {
        title: "An unhurried first conversation",
        body: "We talk through the timeline, the new floor plan and what matters most. No pressure to decide anything on the first call.",
      },
      {
        title: "Plan what fits",
        body: "Working from the new floor plan, we identify what fits and what does not — which makes the keep-or-let-go decisions concrete instead of abstract.",
      },
      {
        title: "Sorting sessions",
        body: "Room by room, at your pace, across as many days as it takes. Donations are staged as we go.",
      },
      {
        title: "Moving day",
        body: "A patient crew, extra time and no clock pressure.",
      },
      {
        title: "Setup and settling in",
        body: "Bed made, kitchen working, chair in front of a connected television. We do not consider the job finished before that.",
      },
    ],
    facts: [
      { label: "Pace", value: "Extra time built into every booking" },
      { label: "Sorting help", value: "Included, across multiple days if needed" },
      { label: "Donation receipts", value: "Provided for tax purposes" },
      { label: "Setup", value: "Beds made, kitchen functional, TV connected" },
      { label: "Family updates", value: "Direct contact with out-of-state family" },
      { label: "Communities served", value: "Independent, assisted living and 55+" },
    ],
    bestFor: [
      "Downsizing from a long-time family home",
      "Moves into Tampa Bay retirement and 55+ communities",
      "Assisted living and independent living transitions",
      "Adult children coordinating a parent's move from out of state",
    ],
    faqs: [
      {
        q: "Can you help decide what to keep when downsizing?",
        a: "Yes. We work from the new floor plan to establish what will actually fit, then go room by room at your pace. Starting from the space rather than from sentiment makes the decisions much easier, and there is no pressure to finish in one session.",
      },
      {
        q: "Do you work with Tampa retirement and assisted living communities?",
        a: "Regularly. Most have specific move-in windows, entrance requirements and insurance paperwork. We coordinate directly with the community's office so the family does not have to project-manage it.",
      },
      {
        q: "I live out of state — can you handle my parent's move?",
        a: "Yes, and a meaningful share of our senior moves are arranged this way. We keep you updated directly by phone throughout, send photos where it helps, and make sure the home is fully set up before the crew leaves.",
      },
    ],
    related: ["packing-services", "storage-solutions", "residential-moving"],
  },

  {
    slug: "last-minute-moving",
    name: "Same-Day & Last-Minute Moving",
    navLabel: "Last-Minute Moves",
    metaTitle: "Same-Day & Last-Minute Movers in Tampa",
    metaDescription:
      "Same-day and next-day movers in Tampa Bay for cancelled movers, urgent lease-ends and emergency relocations. Call (305) 697-8717 to check today's availability.",
    summary:
      "Emergency, same-day and next-day moving in Tampa Bay for cancelled bookings, sudden lease-ends and urgent relocations — subject to crew availability that day.",
    tagline: "When the plan fell through this morning",
    icon: "clock",
    intro: [
      "Movers cancel. Closings move up. Landlords give notice that leaves a week, not a month. A real share of our calls are from people whose original mover stopped answering the phone the day before the move — and that call usually comes in at the worst possible moment.",
      "We hold capacity back specifically for these jobs. Availability genuinely depends on the day, so the honest answer is to call and ask rather than to promise. If we can take it, we will tell you immediately; if we cannot, we will say so straight away so you are not waiting on us while the clock runs.",
    ],
    includes: [
      {
        title: "Same-day availability",
        body: "Reserve capacity held for urgent jobs. Calling early in the day meaningfully improves the odds.",
      },
      {
        title: "Next-day booking",
        body: "Far easier to accommodate than same-day, and available most weeks of the year.",
      },
      {
        title: "Cancelled-mover rescue",
        body: "The most common reason people call us on short notice. We can usually work from the inventory the other company already took.",
      },
      {
        title: "Emergency packing",
        body: "A packing crew added alongside the move when there is no time to pack in advance. Same-day packing plus loading is possible on a single day.",
      },
      {
        title: "Same-day storage",
        body: "If you have to be out today with nowhere to go, we can move your belongings straight into storage and redeliver later.",
      },
      {
        title: "Transparent urgent pricing",
        body: "Quoted before we dispatch. Short notice does not become a licence to price-gouge someone with no alternatives.",
      },
    ],
    process: [
      {
        title: "Call, do not fill in a form",
        body: "For anything urgent, phone (305) 697-8717 directly. A form sitting in an inbox is the wrong tool when the deadline is today.",
      },
      {
        title: "Immediate availability check",
        body: "We check crews and trucks against your address while you are on the phone and give you a yes or no on the spot.",
      },
      {
        title: "Fast phone estimate",
        body: "Home size, access, stairs and inventory over the phone produces a firm quote in a few minutes.",
      },
      {
        title: "Dispatch",
        body: "Once you confirm, a crew is assigned and on the way. We give you a realistic arrival time, not an optimistic one.",
      },
    ],
    facts: [
      { label: "Same-day", value: "Subject to availability — call to check" },
      { label: "Next-day", value: "Available most days" },
      { label: "Best time to call", value: "Early morning" },
      { label: "Quote turnaround", value: "Minutes, by phone" },
      { label: "Emergency packing", value: "Can run alongside the move" },
      { label: "Urgent pricing", value: "Quoted before dispatch" },
    ],
    bestFor: [
      "A mover who cancelled or never showed",
      "Lease-end or eviction deadlines",
      "Closings that moved up unexpectedly",
      "Job relocations with almost no notice",
    ],
    faqs: [
      {
        q: "Can you move me today?",
        a: "Sometimes — it depends entirely on crew and truck availability that morning, so call (305) 697-8717 and we will check against your address immediately. Next-day is far easier to accommodate than same-day, and either way you will get a straight yes or no rather than being left waiting.",
      },
      {
        q: "Is last-minute moving more expensive?",
        a: "Urgent jobs can carry a modest premium when they require pulling a crew onto an unplanned shift, and we quote that number before dispatching anything. We do not inflate prices because someone is out of options — that reputation would cost us far more than the extra margin.",
      },
      {
        q: "My mover cancelled the day before. What do you need from me?",
        a: "Both addresses, home size, stair or elevator access at each end, and anything oversized like a piano or safe. If the previous company gave you an inventory, read it to us — that is enough to quote accurately in a few minutes.",
      },
    ],
    related: ["residential-moving", "packing-services", "storage-solutions"],
  },
];

export const serviceMap = new Map(services.map((s) => [s.slug, s]));

export function getService(slug: string): Service | undefined {
  return serviceMap.get(slug);
}

/** Services shown in the primary nav dropdown, in order. */
export const featuredServiceSlugs = [
  "residential-moving",
  "commercial-moving",
  "long-distance-moving",
  "packing-services",
  "storage-solutions",
  "labor-only-moving",
];
