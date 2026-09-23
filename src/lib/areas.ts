export type Area = {
  slug: string;
  /** City name as it appears in addresses. */
  name: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  /** One-sentence definitive answer for AI-search extraction. */
  summary: string;
  zips: string[];
  neighborhoods: string[];
  /** Drive time from our Tampa dispatch point. */
  driveTime: string;
  population: string;
  intro: string[];
  /** Genuinely local operational detail — the part generic city pages lack. */
  localNotes: { title: string; body: string }[];
  popularServices: string[];
  faqs: { q: string; a: string }[];
  /** Tier drives ordering and whether it appears in the footer column. */
  tier: 1 | 2;
};

export const areas: Area[] = [
  {
    slug: "tampa",
    name: "Tampa",
    county: "Hillsborough County",
    tier: 1,
    metaTitle: "Movers in Tampa, FL",
    metaDescription:
      "Licensed and insured movers serving every Tampa neighborhood, from South Tampa and Hyde Park to New Tampa and Westchase. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving is a full-service moving company serving all of Tampa, including South Tampa, Hyde Park, Seminole Heights, Ybor City, Westshore, Channelside and New Tampa.",
    zips: ["33602", "33603", "33604", "33605", "33606", "33607", "33609", "33610", "33611", "33612", "33613", "33614", "33616", "33617", "33618", "33619", "33629", "33647"],
    neighborhoods: ["South Tampa", "Hyde Park", "Davis Islands", "Seminole Heights", "Ybor City", "Channelside", "Harbour Island", "Westshore", "Carrollwood", "New Tampa", "Tampa Heights", "SoHo", "Palma Ceia", "Ballast Point", "Sulphur Springs"],
    driveTime: "Home base — same-day service available",
    population: "~400,000",
    intro: [
      "Tampa is our home market and the majority of our work. What that means practically is that we already know the things that slow a move down here: which Hyde Park streets a 26-foot truck cannot turn around on, which downtown towers want a certificate of insurance 72 hours ahead, and how long the Westshore corridor takes to cross at 5pm versus 10am.",
      "The city is also unusually varied for its size. A 1920s bungalow in Seminole Heights with a narrow staircase and original heart-pine floors is a completely different job from a new-construction house in New Tampa, and both are different again from a twenty-second-floor condo in Channelside. We size the crew and equipment to the property rather than the bedroom count.",
    ],
    localNotes: [
      {
        title: "South Tampa and Hyde Park access",
        body: "Brick streets, mature oaks with low canopies and narrow driveways mean a full-size truck often cannot get close to the door. We scout parking in advance and shuttle with a smaller vehicle where that is the realistic option.",
      },
      {
        title: "Downtown and Channelside high-rises",
        body: "Nearly every tower requires a COI and a reserved freight elevator window. We handle both with building management before your date is confirmed.",
      },
      {
        title: "Seminole Heights and Tampa Heights historic homes",
        body: "Original hardwood, tight staircases and narrow doorframes. Floor runners and jamb protection go down before anything moves, and large furniture is usually disassembled rather than forced.",
      },
      {
        title: "Hurricane-season scheduling",
        body: "From June through November we watch the forecast on booked jobs and will move your date proactively rather than load a truck into a storm. Flood-zone addresses in South Tampa and along the Bayshore get extra attention.",
      },
    ],
    popularServices: ["residential-moving", "apartment-condo-moving", "packing-services", "commercial-moving"],
    faqs: [
      {
        q: "How much does it cost to hire movers in Tampa?",
        a: "Most local Tampa moves fall between $450 and $700 for a one-bedroom apartment, $800 and $1,400 for a two-bedroom, and $1,500 and $2,800 for a three-bedroom house. The variables that move the number most are stairs, distance from the truck to the door, and how much packing you need. We quote a flat rate after a walkthrough so the figure does not change on moving day.",
      },
      {
        q: "Do you serve all Tampa neighborhoods?",
        a: "Yes — every Tampa ZIP code from 33602 through 33647, covering South Tampa, Hyde Park, Davis Islands, Seminole Heights, Ybor City, Channelside, Harbour Island, Westshore, Carrollwood, Westchase and New Tampa.",
      },
    ],
  },
  {
    slug: "st-petersburg",
    name: "St. Petersburg",
    county: "Pinellas County",
    tier: 1,
    metaTitle: "Movers in St. Petersburg, FL",
    metaDescription:
      "St. Petersburg movers for downtown condos, Old Northeast historic homes and beach properties. Licensed, insured, flat-rate. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves all of St. Petersburg, including downtown high-rises, the Old Northeast, Kenwood, Snell Isle and the Gulf beaches.",
    zips: ["33701", "33702", "33703", "33704", "33705", "33706", "33707", "33709", "33710", "33711", "33712", "33713", "33714", "33716"],
    neighborhoods: ["Downtown St. Pete", "Old Northeast", "Historic Kenwood", "Snell Isle", "Shore Acres", "Jungle Terrace", "Crescent Lake", "Grand Central", "St. Pete Beach", "Tierra Verde"],
    driveTime: "30–45 minutes from Tampa",
    population: "~265,000",
    intro: [
      "St. Petersburg has changed faster than almost anywhere in the Bay over the past decade, and the moving work reflects it. Downtown is now a wall of new high-rises with strict elevator policies, while a few blocks north the Old Northeast is still 1920s bungalows with staircases built for smaller furniture than anyone buys today.",
      "We cross the bay for St. Pete jobs daily. The Howard Frankland and Gandy both factor into scheduling, so we plan start times around the direction of rush-hour traffic rather than letting a crew sit in it on your clock.",
    ],
    localNotes: [
      {
        title: "Downtown condo requirements",
        body: "Towers along Beach Drive and Central Avenue typically require COIs, reserved loading docks and moves inside set hours. We handle the paperwork and book the elevator window.",
      },
      {
        title: "Old Northeast and Kenwood historic homes",
        body: "Brick streets, narrow driveways and staircases with tight turns. Large sectionals and box springs frequently need disassembly or a balcony route.",
      },
      {
        title: "Beach and barrier-island properties",
        body: "St. Pete Beach, Treasure Island and Tierra Verde have bridge weight considerations, limited parking and strict seasonal traffic. Early morning starts are strongly preferable.",
      },
      {
        title: "Flood-zone and Shore Acres awareness",
        body: "Several St. Pete neighborhoods flood in heavy rain and surge. We monitor conditions on booked dates and reschedule rather than risk a loaded truck.",
      },
    ],
    popularServices: ["apartment-condo-moving", "residential-moving", "packing-services", "storage-solutions"],
    faqs: [
      {
        q: "Do you move between Tampa and St. Petersburg?",
        a: "Constantly — it is one of our most common routes. A Tampa-to-St. Pete move is treated as a standard local move with no long-distance premium, typically completed in a single day.",
      },
      {
        q: "Can you move into a downtown St. Pete high-rise?",
        a: "Yes. We supply the certificate of insurance your building requires, reserve the freight elevator and loading dock, and plan the load to finish inside your reserved window.",
      },
    ],
  },
  {
    slug: "clearwater",
    name: "Clearwater",
    county: "Pinellas County",
    tier: 1,
    metaTitle: "Movers in Clearwater, FL",
    metaDescription:
      "Clearwater and Clearwater Beach movers. Condos, waterfront homes, 55+ communities and seasonal moves. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Clearwater, Clearwater Beach, Safety Harbor and Dunedin with local, long-distance and storage services.",
    zips: ["33755", "33756", "33759", "33760", "33761", "33762", "33763", "33764", "33765", "33767"],
    neighborhoods: ["Clearwater Beach", "Countryside", "Island Estates", "Sand Key", "Morningside", "Harbor Oaks", "Downtown Clearwater", "Feather Sound"],
    driveTime: "40–55 minutes from Tampa",
    population: "~117,000",
    intro: [
      "Clearwater work splits neatly into two categories: year-round residents in Countryside and the mainland neighborhoods, and the seasonal and condo market out on the beach and Sand Key. They need different things from a mover, and the second group in particular needs storage far more often.",
      "Beach and island properties are where local knowledge pays for itself. Clearwater Beach parking is genuinely difficult, Island Estates and Sand Key have HOA move rules and limited loading access, and in season the bridge traffic makes a late start expensive. We schedule beach jobs early for exactly that reason.",
    ],
    localNotes: [
      {
        title: "Clearwater Beach and Sand Key access",
        body: "Very limited truck parking and heavy seasonal traffic across the Memorial Causeway. We start beach jobs early in the morning and coordinate loading-zone access with building management ahead of time.",
      },
      {
        title: "55+ and retirement communities",
        body: "Countryside and the surrounding communities have a high concentration of 55+ associations with defined move-in windows and guest-gate procedures. We handle registration with the community office in advance.",
      },
      {
        title: "Snowbird seasonal moves",
        body: "A significant share of Clearwater work is seasonal: out in spring, back in autumn, with storage in between. Booking both legs at once locks in your dates during the busiest periods.",
      },
      {
        title: "Island condo elevators",
        body: "Island Estates and Sand Key buildings generally have one elevator serving everything. Reservations are essential and windows are strictly enforced.",
      },
    ],
    popularServices: ["residential-moving", "storage-solutions", "senior-moving", "apartment-condo-moving"],
    faqs: [
      {
        q: "Do you move to and from Clearwater Beach?",
        a: "Yes. Beach moves need early starts because of parking limitations and causeway traffic, particularly from January through April. We coordinate loading access with your building before the date and plan the crew size to finish inside the reserved window.",
      },
      {
        q: "Can you store belongings between seasonal moves?",
        a: "Yes, and it is a common request in Clearwater. Climate-controlled storage with the same crew handling the move out, the storage period and the redelivery when you return.",
      },
    ],
  },
  {
    slug: "brandon",
    name: "Brandon",
    county: "Hillsborough County",
    tier: 1,
    metaTitle: "Movers in Brandon, FL",
    metaDescription:
      "Brandon movers for family homes, apartments and offices. Local and long-distance moving with flat-rate pricing. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Brandon, Valrico, Seffner and Riverview with residential, commercial and long-distance moving.",
    zips: ["33508", "33509", "33510", "33511"],
    neighborhoods: ["Bloomingdale", "Providence Lakes", "Brandon Valrico Hills", "Lakewood Ridge", "Heather Lakes", "Sterling Ranch"],
    driveTime: "25–35 minutes from Tampa",
    population: "~115,000",
    intro: [
      "Brandon is family-home territory — larger square footage, more garage, and a steady flow of people moving in from South Florida and out of state. Practically that means bigger loads than an equivalent-bedroom move inside Tampa, and full-day jobs are the norm rather than the exception.",
      "The other constant here is the commute. Brandon's arteries — Brandon Boulevard, Bloomingdale and the I-75 ramps — back up hard at both ends of the day. We start Brandon jobs early so the crew is working during the window when the truck can actually move.",
    ],
    localNotes: [
      {
        title: "Larger homes, longer days",
        body: "Brandon homes average significantly more square footage than comparable Tampa properties, and the garage is almost always the largest single room to move. Plan a full day for a three-bedroom rather than a half day.",
      },
      {
        title: "Gated and deed-restricted communities",
        body: "Bloomingdale, Providence Lakes and similar neighborhoods have gate registration and, in some cases, restricted move hours. We register the crew and truck with the gate ahead of your date.",
      },
      {
        title: "SR-60 and I-75 traffic windows",
        body: "Brandon Boulevard and the I-75 interchange are slow from roughly 7 to 9am and 4 to 6:30pm. Early starts keep those windows out of your billable hours.",
      },
      {
        title: "Relocations from South Florida",
        body: "A large share of Brandon arrivals are coming from Miami-Dade, Broward and Palm Beach. That is a route we run constantly and can deliver next-day.",
      },
    ],
    popularServices: ["residential-moving", "long-distance-moving", "packing-services", "labor-only-moving"],
    faqs: [
      {
        q: "How long does a Brandon house move take?",
        a: "A three-bedroom Brandon home typically runs six to nine hours with a three-person crew. Brandon homes tend to be larger than equivalent-bedroom properties inside Tampa city limits, and the garage usually adds more volume than people expect.",
      },
      {
        q: "Do you move from Brandon to Miami or Fort Lauderdale?",
        a: "Yes, and it is one of our busiest long-distance routes in both directions. Your shipment travels on a dedicated truck with next-day delivery and the same crew loading and unloading.",
      },
    ],
  },
  {
    slug: "wesley-chapel",
    name: "Wesley Chapel",
    county: "Pasco County",
    tier: 1,
    metaTitle: "Movers in Wesley Chapel, FL",
    metaDescription:
      "Wesley Chapel movers for new-construction homes, master-planned communities and family relocations. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Wesley Chapel and the surrounding Pasco County master-planned communities with residential and long-distance moving.",
    zips: ["33543", "33544", "33545"],
    neighborhoods: ["Seven Oaks", "Meadow Pointe", "Union Park", "Epperson", "Watergrass", "Estancia", "New River"],
    driveTime: "30–40 minutes from Tampa",
    population: "~65,000",
    intro: [
      "Wesley Chapel is one of the fastest-growing corners of the Bay area, and most of our work here is move-ins to new construction — Epperson, Union Park, Watergrass and the rest of the master-planned communities along the SR-56 corridor.",
      "New-construction moves come with their own failure mode: the closing date slips. We build that into the plan by holding storage capacity for Wesley Chapel jobs, so a delayed certificate of occupancy does not leave you with a truck, a lease that ended yesterday and nowhere to put anything.",
    ],
    localNotes: [
      {
        title: "New-construction closing delays",
        body: "Builder delays are routine here. We hold storage capacity and can pivot a scheduled delivery into storage and back out again without you needing to rebook from scratch.",
      },
      {
        title: "Master-planned community rules",
        body: "Epperson, Union Park and Watergrass have gate registration, and some have designated move-in hours and require advance notice to the HOA. We register in advance.",
      },
      {
        title: "Long driveways and uneven ground",
        body: "New-construction lots frequently still have unfinished landscaping, soft fill and long driveways. We bring boards and extra dollies to keep a loaded truck off soft ground.",
      },
      {
        title: "I-75 and SR-56 corridor",
        body: "The SR-56 and I-75 interchange is a genuine bottleneck at rush hour. We schedule Wesley Chapel arrivals outside those windows.",
      },
    ],
    popularServices: ["residential-moving", "storage-solutions", "long-distance-moving", "packing-services"],
    faqs: [
      {
        q: "What if my new construction home is not ready on closing day?",
        a: "This happens often in Wesley Chapel and we plan for it. Your belongings go into climate-controlled storage and we redeliver when the certificate of occupancy comes through. Flag the risk when you book and it is priced into your flat rate up front.",
      },
      {
        q: "Do you move into Epperson, Union Park and Watergrass?",
        a: "Yes, all of them. We handle gate registration and any HOA move-in notice ahead of the date, so the crew is not held at the gate on your clock.",
      },
    ],
  },
  {
    slug: "riverview",
    name: "Riverview",
    county: "Hillsborough County",
    tier: 1,
    metaTitle: "Movers in Riverview, FL",
    metaDescription:
      "Riverview movers serving family homes and new communities across south Hillsborough County. Flat-rate, licensed and insured. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Riverview and south Hillsborough County, including Panther Trace, Summerfield and the US-301 corridor communities.",
    zips: ["33569", "33578", "33579"],
    neighborhoods: ["Panther Trace", "Summerfield", "Boyette", "Rivercrest", "South Fork", "Ventana", "Triple Creek"],
    driveTime: "30–40 minutes from Tampa",
    population: "~100,000",
    intro: [
      "Riverview has roughly doubled in population in a decade, and the moving work follows the pattern: families arriving from out of state into large new-build homes along the US-301 and Big Bend corridors.",
      "The practical planning issue in Riverview is distance. The community spread between the Alafia River and Big Bend Road is wide, and getting between an origin in Panther Trace and a destination in Triple Creek is not a short hop. Route planning matters more here than in denser parts of the county.",
    ],
    localNotes: [
      {
        title: "Large new-build homes",
        body: "Four and five-bedroom homes with three-car garages are common. These are full-day jobs, often with a four-person crew, and the garage frequently takes longer than the bedrooms.",
      },
      {
        title: "US-301 and Big Bend congestion",
        body: "Both corridors are heavily congested during commute hours. Early starts materially reduce the amount of time a crew spends driving rather than moving.",
      },
      {
        title: "Community gates and HOA notice",
        body: "Most newer Riverview communities are gated with visitor registration, and several require advance HOA notification for move-ins.",
      },
      {
        title: "Long interior carries",
        body: "Wide lots and long driveways mean more distance between the truck and the door than a comparable Tampa address. We bring extra dollies rather than absorbing it in hand-carries.",
      },
    ],
    popularServices: ["residential-moving", "long-distance-moving", "packing-services", "storage-solutions"],
    faqs: [
      {
        q: "How much do movers cost in Riverview?",
        a: "Riverview homes run larger than the Tampa average, so a four-bedroom move typically lands between $2,000 and $3,200 with a four-person crew. The garage and outdoor equipment are usually what push the number above a same-bedroom-count move inside the city.",
      },
      {
        q: "Do you handle moves from out of state into Riverview?",
        a: "Yes — a large share of Riverview arrivals come from the Northeast, the Midwest and South Florida. We run those routes on a dedicated truck with a guaranteed delivery window.",
      },
    ],
  },
  {
    slug: "lutz",
    name: "Lutz",
    county: "Hillsborough County",
    tier: 2,
    metaTitle: "Movers in Lutz, FL",
    metaDescription:
      "Lutz movers for large homes, acreage properties and 55+ communities in north Hillsborough. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Lutz and north Hillsborough County, including acreage properties and the Van Dyke and Dale Mabry corridors.",
    zips: ["33548", "33549", "33558", "33559"],
    neighborhoods: ["Cheval", "Lake Fern", "Sunset Lakes", "Willow Bend", "Calusa Trace", "Heritage Harbor"],
    driveTime: "25–35 minutes from Tampa",
    population: "~25,000",
    intro: [
      "Lutz runs larger and more spread out than most of Hillsborough County — established homes on real acreage, horse properties, and the gated communities along Van Dyke Road. Loads are correspondingly bigger, and outdoor equipment is a genuine category rather than an afterthought.",
      "Acreage properties change the job. Long unpaved driveways, detached workshops, riding mowers and sheds full of equipment all add volume that a bedroom count does not capture. We walk the outbuildings during the estimate, not just the house.",
    ],
    localNotes: [
      {
        title: "Acreage and outbuildings",
        body: "Detached garages, workshops and barns usually hold more than the house does. We inventory them during the walkthrough so the quote reflects the real job.",
      },
      {
        title: "Unpaved and long driveways",
        body: "Sand and shell driveways will bog a loaded truck. We assess access ahead of time and bring boards or shuttle with a smaller vehicle where needed.",
      },
      {
        title: "Gated communities on Van Dyke",
        body: "Cheval, Heritage Harbor and the Van Dyke corridor communities require gate registration for the crew and truck.",
      },
      {
        title: "Equipment and specialty items",
        body: "Riding mowers, workshop tools, safes and pool tables are common in Lutz homes. Flag them when you call so the right equipment is assigned.",
      },
    ],
    popularServices: ["residential-moving", "specialty-item-moving", "packing-services", "storage-solutions"],
    faqs: [
      {
        q: "Can you move riding mowers, workshop equipment and safes?",
        a: "Yes. Lutz properties commonly include all three. Fuel must be drained from mowers and generators before loading — federal rules prohibit fuel on a moving truck — and safes are assessed by weight and stair count before we quote.",
      },
      {
        q: "Do you move from properties with long dirt driveways?",
        a: "Yes, with planning. Tell us the surface and length when you call. Where a loaded 26-foot truck cannot safely reach the house, we shuttle with a smaller vehicle rather than risk getting stuck.",
      },
    ],
  },
  {
    slug: "temple-terrace",
    name: "Temple Terrace",
    county: "Hillsborough County",
    tier: 2,
    metaTitle: "Movers in Temple Terrace, FL",
    metaDescription:
      "Temple Terrace movers for family homes, USF-area rentals and student moves. Flat-rate pricing. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Temple Terrace and the USF area with residential moving, apartment moves and labor-only help.",
    zips: ["33617", "33637"],
    neighborhoods: ["Temple Terrace Golf & Country Club", "Raintree Village", "Terrace Park", "Woodmont", "USF area"],
    driveTime: "20–30 minutes from Tampa",
    population: "~26,000",
    intro: [
      "Temple Terrace is two markets sharing a ZIP code: established family homes around the golf course, and the dense student rental market surrounding USF. The second one runs on an academic calendar, and August is the single busiest moving week of the year here.",
      "Student and apartment moves tend to be small, fast and price-sensitive, which makes labor-only help the right product more often than a full-service move. We will tell you when that is the cheaper option for you.",
    ],
    localNotes: [
      {
        title: "August USF turnover",
        body: "The two weeks before the autumn semester are the most congested moving period in this area by a wide margin. Book at least a month ahead for mid-to-late August.",
      },
      {
        title: "Student apartment complexes",
        body: "USF-area complexes often have designated move-in days, assigned parking and limited elevator access. We coordinate with the leasing office beforehand.",
      },
      {
        title: "Established homes near the golf course",
        body: "Mature 1950s and 60s properties with narrow doorways and original flooring. Floor protection and furniture disassembly are standard here.",
      },
      {
        title: "Labor-only is often the better value",
        body: "For a student apartment with a rented truck, two movers for two to three hours usually beats a full-service booking. We will say so if that is your situation.",
      },
    ],
    popularServices: ["apartment-condo-moving", "labor-only-moving", "residential-moving", "storage-solutions"],
    faqs: [
      {
        q: "Do you do student moves near USF?",
        a: "Yes, and labor-only help is usually the most cost-effective choice for a student apartment — two movers for a two-to-three-hour minimum to load or unload a rented truck. Book well ahead for August; that fortnight fills across every mover in the area.",
      },
      {
        q: "Can you store belongings over the summer?",
        a: "Yes. Month-to-month climate-controlled storage with no long-term commitment, which is the common pattern for students leaving for the summer and returning in August.",
      },
    ],
  },
  {
    slug: "plant-city",
    name: "Plant City",
    county: "Hillsborough County",
    tier: 2,
    metaTitle: "Movers in Plant City, FL",
    metaDescription:
      "Plant City movers for homes, farms and businesses in east Hillsborough County. Licensed and insured, flat-rate. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Plant City and east Hillsborough County with residential, agricultural-property and commercial moving.",
    zips: ["33563", "33565", "33566", "33567"],
    neighborhoods: ["Historic Downtown Plant City", "Walden Lake", "Sparkman", "Turkey Creek", "Knights"],
    driveTime: "35–45 minutes from Tampa",
    population: "~40,000",
    intro: [
      "Plant City sits at the eastern edge of our standard service area and the work here has a different character — older homes in the historic downtown, established neighborhoods like Walden Lake, and agricultural properties with equipment and outbuildings that a suburban estimate would badly underrate.",
      "One genuinely local scheduling note: the Florida Strawberry Festival, held each year across late February and early March, changes traffic patterns around the city substantially for about two weeks. We plan around it.",
    ],
    localNotes: [
      {
        title: "Agricultural properties",
        body: "Barns, equipment sheds and workshops frequently exceed the house in volume. We inventory outbuildings during the estimate.",
      },
      {
        title: "Historic downtown homes",
        body: "Early-twentieth-century properties with narrow stairways, original floors and doorframes narrower than modern furniture assumes.",
      },
      {
        title: "Strawberry Festival timing",
        body: "Late February into early March brings heavy traffic and road closures around the festival grounds. We schedule around it rather than sitting in it.",
      },
      {
        title: "Distance from Tampa",
        body: "Plant City is a genuine drive from our dispatch point. We schedule an early arrival so travel time does not eat into the working day.",
      },
    ],
    popularServices: ["residential-moving", "labor-only-moving", "specialty-item-moving", "storage-solutions"],
    faqs: [
      {
        q: "Do you serve Plant City and east Hillsborough County?",
        a: "Yes, Plant City is inside our standard service area with no travel surcharge. We schedule early arrivals so the drive from Tampa happens before the working day starts.",
      },
      {
        q: "Can you move farm and workshop equipment?",
        a: "Yes, with two conditions: fuel and oil must be drained from anything with an engine before loading, and very heavy equipment needs to be flagged in advance so we assign the right dollies and crew size.",
      },
    ],
  },
  {
    slug: "carrollwood",
    name: "Carrollwood",
    county: "Hillsborough County",
    tier: 2,
    metaTitle: "Movers in Carrollwood, Tampa",
    metaDescription:
      "Carrollwood movers for established family homes and condos in north Tampa. Flat-rate quotes, licensed and insured. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Carrollwood, Original Carrollwood and Carrollwood Village in north Tampa.",
    zips: ["33618", "33624", "33625"],
    neighborhoods: ["Original Carrollwood", "Carrollwood Village", "Northdale", "Lake Magdalene", "Country Run"],
    driveTime: "15–25 minutes from Tampa",
    population: "~35,000",
    intro: [
      "Carrollwood is established north Tampa — mature neighborhoods built from the 1960s through the 1980s, large oaks, and a mix of long-time residents downsizing and younger families moving in. Downsizing moves are a meaningfully larger share of our work here than in newer parts of the county.",
      "The trees are the operational detail worth knowing. Original Carrollwood in particular has low, heavy oak canopies over narrow streets, and a 26-foot box truck does not clear every one of them. We scout truck access in advance rather than discovering it on the morning.",
    ],
    localNotes: [
      {
        title: "Low oak canopies",
        body: "Several Original Carrollwood streets will not clear a full-height box truck. We check the route in advance and bring a smaller vehicle where required.",
      },
      {
        title: "Downsizing is common",
        body: "Long-time residents moving to smaller homes or retirement communities. Our senior and downsizing service, including sorting and donation handling, is heavily used here.",
      },
      {
        title: "Carrollwood Village HOA",
        body: "Village sections have HOA rules and gate procedures in places. We register the crew ahead of the date.",
      },
      {
        title: "Mature homes, older layouts",
        body: "Sunken living rooms, narrow hallways and doorframes built for smaller furniture. Disassembly is routine rather than exceptional.",
      },
    ],
    popularServices: ["residential-moving", "senior-moving", "packing-services", "storage-solutions"],
    faqs: [
      {
        q: "Do you help with downsizing in Carrollwood?",
        a: "Yes, and it is one of our most requested services here. We help sort room by room, deliver donations to local charities with receipts, and set up the new home so it is fully livable the first night.",
      },
      {
        q: "Can your truck get into Original Carrollwood?",
        a: "In most cases, though some streets have oak canopies too low for a full-height box truck. We check your specific address during the walkthrough and shuttle with a smaller vehicle where the route requires it.",
      },
    ],
  },
  {
    slug: "westchase",
    name: "Westchase",
    county: "Hillsborough County",
    tier: 2,
    metaTitle: "Movers in Westchase, Tampa",
    metaDescription:
      "Westchase movers for family homes, townhomes and villas in west Tampa. Flat-rate pricing, licensed and insured. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Westchase, Town 'n' Country and the west Tampa communities along the Veterans Expressway.",
    zips: ["33626", "33635"],
    neighborhoods: ["The Bridges", "Radcliffe", "Harbor Links", "Keswick Forest", "Glenfield", "Countryway"],
    driveTime: "25–35 minutes from Tampa",
    population: "~22,000",
    intro: [
      "Westchase is a planned community with an active HOA and a consistent housing stock — two-storey family homes, townhomes and villas, with narrow-lot townhome clusters that are the defining access challenge here.",
      "Townhome and villa sections have shared driveways and limited street parking, so truck placement needs to be worked out before the crew arrives rather than negotiated with a neighbour at 8am.",
    ],
    localNotes: [
      {
        title: "Townhome access",
        body: "Shared driveways and narrow streets limit where a truck can legally and practically sit. We identify placement during the walkthrough.",
      },
      {
        title: "Active HOA rules",
        body: "Westchase HOA sections have rules on truck parking, move hours and street obstruction. We work inside them.",
      },
      {
        title: "Two-storey homes are the norm",
        body: "Most Westchase homes are two storeys with the bedrooms upstairs. Crew size is set with that in mind.",
      },
      {
        title: "Veterans Expressway access",
        body: "Good highway access, which makes Westchase straightforward to reach outside peak hours — and slow inside them.",
      },
    ],
    popularServices: ["residential-moving", "packing-services", "apartment-condo-moving", "long-distance-moving"],
    faqs: [
      {
        q: "Do you move Westchase townhomes?",
        a: "Yes. The main planning item is truck placement, since townhome sections have shared driveways and limited street parking. We sort that out during the walkthrough so the crew is not improvising on the morning.",
      },
      {
        q: "Are stairs an extra charge?",
        a: "No. Almost every Westchase home is two storeys, so stairs are assessed during the walkthrough and built into your flat rate. There is no separate stair fee added on moving day.",
      },
    ],
  },
  {
    slug: "new-tampa",
    name: "New Tampa",
    county: "Hillsborough County",
    tier: 2,
    metaTitle: "Movers in New Tampa, FL",
    metaDescription:
      "New Tampa movers serving Tampa Palms, Hunter's Green, Cross Creek and Live Oak. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves New Tampa, including Tampa Palms, Hunter's Green, Cross Creek, Live Oak and the Bruce B. Downs corridor.",
    zips: ["33647", "33612", "33613"],
    neighborhoods: ["Tampa Palms", "Hunter's Green", "Cross Creek", "Live Oak Preserve", "Arbor Greene", "West Meadows", "K-Bar Ranch"],
    driveTime: "25–35 minutes from Tampa",
    population: "~65,000",
    intro: [
      "New Tampa is gated-community territory along the Bruce B. Downs corridor — Tampa Palms, Hunter's Green, Arbor Greene and the rest. Almost every job here starts at a guard gate, and most communities require advance registration for a moving truck.",
      "Homes are large, most are two storeys, and the demographic skews toward corporate relocations. Long-distance moving and storage requests are correspondingly higher here than in most of the county.",
    ],
    localNotes: [
      {
        title: "Guard-gate registration",
        body: "Nearly every New Tampa community requires the crew and truck to be registered before arrival. We handle it so nobody is stuck at the gate on your clock.",
      },
      {
        title: "Large two-storey homes",
        body: "Three to five bedrooms with upstairs bedrooms is the standard layout. Full-day jobs with three to four movers.",
      },
      {
        title: "Corporate relocations",
        body: "A high share of New Tampa moves are job-driven and interstate. We provide the documentation relocation packages typically require.",
      },
      {
        title: "Bruce B. Downs congestion",
        body: "The corridor is heavily congested at commute hours and around USF. Early starts keep that off your bill.",
      },
    ],
    popularServices: ["residential-moving", "long-distance-moving", "packing-services", "storage-solutions"],
    faqs: [
      {
        q: "Do you move into gated New Tampa communities?",
        a: "Yes — Tampa Palms, Hunter's Green, Arbor Greene, Live Oak and the rest. We register the crew and truck with the guard gate in advance so there is no delay on arrival.",
      },
      {
        q: "Can you handle a corporate relocation?",
        a: "Yes. We provide written estimates, itemised inventories and invoicing in the formats relocation packages typically require for reimbursement.",
      },
    ],
  },
  {
    slug: "land-o-lakes",
    name: "Land O' Lakes",
    county: "Pasco County",
    tier: 2,
    metaTitle: "Movers in Land O' Lakes, FL",
    metaDescription:
      "Land O' Lakes movers for family homes, acreage and 55+ communities in Pasco County. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Land O' Lakes and central Pasco County with residential moving, storage and long-distance relocations.",
    zips: ["34637", "34638", "34639"],
    neighborhoods: ["Connerton", "Ballantrae", "Lake Padgett", "Wilderness Lake", "Plantation Palms", "Del Webb Bexley"],
    driveTime: "30–40 minutes from Tampa",
    population: "~40,000",
    intro: [
      "Land O' Lakes mixes established lakefront and acreage properties with newer master-planned communities like Connerton and Del Webb Bexley. The 55+ communities in particular generate steady downsizing work.",
      "Access is the recurring theme. Lakefront homes often have long, narrow driveways with limited turnaround room, and acreage properties add outbuildings that a bedroom-count estimate misses entirely.",
    ],
    localNotes: [
      {
        title: "Lakefront driveway access",
        body: "Long, narrow driveways with no room to turn a 26-foot truck around. We assess access before the date and shuttle where necessary.",
      },
      {
        title: "55+ communities",
        body: "Del Webb Bexley and similar communities have defined move windows and gate procedures. Downsizing support is the most common request.",
      },
      {
        title: "Acreage outbuildings",
        body: "Workshops, sheds and detached garages add real volume. We inventory them during the walkthrough.",
      },
      {
        title: "SR-54 and US-41 corridors",
        body: "Both are congested at peak hours across Pasco. Early starts keep the crew working rather than driving.",
      },
    ],
    popularServices: ["residential-moving", "senior-moving", "storage-solutions", "packing-services"],
    faqs: [
      {
        q: "Do you serve Pasco County 55+ communities?",
        a: "Yes, including Del Webb Bexley and the surrounding communities. We coordinate move-in windows with the community office and provide downsizing help, donation delivery with receipts, and full setup at the new home.",
      },
      {
        q: "Can you reach lakefront properties with limited driveway access?",
        a: "Yes. Tell us the driveway length and turnaround situation when you call. Where a full-size truck cannot get in and out safely, we shuttle with a smaller vehicle.",
      },
    ],
  },
  {
    slug: "valrico",
    name: "Valrico",
    county: "Hillsborough County",
    tier: 2,
    metaTitle: "Movers in Valrico, FL",
    metaDescription:
      "Valrico movers for family homes and acreage in east Hillsborough. Licensed, insured, flat-rate pricing. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Valrico and east Hillsborough County with residential moving, packing and storage.",
    zips: ["33594", "33596"],
    neighborhoods: ["Bloomingdale", "Diamond Hill", "Buckhorn", "River Hills", "Copper Ridge"],
    driveTime: "30–40 minutes from Tampa",
    population: "~38,000",
    intro: [
      "Valrico runs to larger lots and bigger houses than most of Hillsborough County, with a mix of golf-course communities like River Hills and Diamond Hill and genuine acreage properties further east.",
      "Loads here are heavy on garage, workshop and outdoor equipment. A Valrico four-bedroom moves more volume than a Tampa four-bedroom, and quoting it like a city move produces a number that will not hold.",
    ],
    localNotes: [
      {
        title: "Large lots, long carries",
        body: "Wide lots and long driveways put real distance between the truck and the door. We bring extra dollies rather than hand-carrying it.",
      },
      {
        title: "Golf-course community gates",
        body: "River Hills and Diamond Hill require gate registration for the crew and truck ahead of the date.",
      },
      {
        title: "Garage and equipment volume",
        body: "Workshop tools, lawn equipment and outdoor furniture are consistently the largest underestimate on a Valrico quote. We inventory them properly.",
      },
      {
        title: "Well and septic considerations",
        body: "Acreage properties often have well heads and septic fields that a loaded truck must not drive over. We identify them on the walkthrough.",
      },
    ],
    popularServices: ["residential-moving", "packing-services", "specialty-item-moving", "storage-solutions"],
    faqs: [
      {
        q: "How much does a Valrico house move cost?",
        a: "Valrico homes typically move more volume than the same bedroom count inside Tampa, so a four-bedroom generally runs $2,000 to $3,200. The garage and outdoor equipment are almost always what push it above a comparable city quote.",
      },
      {
        q: "Do you move pool tables and gun safes?",
        a: "Yes — both are common in Valrico homes and both are specialty items. Slate pool tables must be disassembled, and safes are quoted by weight and stair count. Flag them when you call so the right crew and equipment are assigned.",
      },
    ],
  },
  {
    slug: "apollo-beach",
    name: "Apollo Beach",
    county: "Hillsborough County",
    tier: 2,
    metaTitle: "Movers in Apollo Beach, FL",
    metaDescription:
      "Apollo Beach movers for waterfront homes, canal properties and new communities in south Hillsborough. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Apollo Beach, Ruskin and the south Hillsborough waterfront communities.",
    zips: ["33572"],
    neighborhoods: ["MiraBay", "Symphony Isles", "Andalucia", "Waterset", "Covington Park"],
    driveTime: "35–45 minutes from Tampa",
    population: "~25,000",
    intro: [
      "Apollo Beach is waterfront and canal-front housing along Tampa Bay's southeastern shore, with MiraBay and Symphony Isles anchoring the market and Waterset adding substantial new construction inland.",
      "Waterfront properties come with their own operational details: narrow canal-front lots, boat lifts and dock equipment, seawall access constraints, and a genuinely higher storm exposure than inland addresses.",
    ],
    localNotes: [
      {
        title: "Canal-front lot access",
        body: "Narrow lots with limited truck placement and, in places, no room to turn around. Access is assessed during the walkthrough.",
      },
      {
        title: "Dock and boating equipment",
        body: "Dock boxes, boat gear and watersport equipment are common and should be inventoried rather than assumed into a generic garage line.",
      },
      {
        title: "Storm and surge exposure",
        body: "Apollo Beach is in a surge-prone zone. We monitor conditions on booked dates during hurricane season and reschedule proactively.",
      },
      {
        title: "Waterset new construction",
        body: "Builder closing delays are routine. Storage capacity is held so a slipped certificate of occupancy does not strand you.",
      },
    ],
    popularServices: ["residential-moving", "storage-solutions", "packing-services", "long-distance-moving"],
    faqs: [
      {
        q: "Do you move waterfront homes in Apollo Beach?",
        a: "Yes, including MiraBay and Symphony Isles. Canal-front lots often limit where a truck can sit, so we assess access during the walkthrough and plan placement in advance rather than on the morning.",
      },
      {
        q: "What happens if a storm is forecast on my move date?",
        a: "We monitor the forecast on every booked job during hurricane season and will contact you to reschedule ahead of a storm rather than load a truck into it. Apollo Beach's surge exposure means we err early on this.",
      },
    ],
  },
  {
    slug: "largo",
    name: "Largo",
    county: "Pinellas County",
    tier: 2,
    metaTitle: "Movers in Largo, FL",
    metaDescription:
      "Largo movers serving homes, condos and 55+ communities across central Pinellas County. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Largo and central Pinellas County, including its many 55+ and mobile home communities.",
    zips: ["33770", "33771", "33773", "33774", "33778"],
    neighborhoods: ["Belleair", "Indian Rocks Beach", "Harbor Bluffs", "East Bay", "Ridgecrest"],
    driveTime: "40–55 minutes from Tampa",
    population: "~85,000",
    intro: [
      "Largo sits in the middle of Pinellas County and has one of the highest concentrations of 55+ and manufactured-home communities in the Bay area. Downsizing and senior moving is the bulk of what we do here.",
      "These communities have specific and strictly enforced rules — move-in windows, gate registration, restrictions on truck size and where it can park — and knowing them ahead of time is the difference between a smooth morning and a crew waiting at a gate.",
    ],
    localNotes: [
      {
        title: "55+ community rules",
        body: "Defined move windows, gate registration and truck-size restrictions are common and enforced. We confirm requirements with the community office before the date.",
      },
      {
        title: "Manufactured home communities",
        body: "Narrow interior roads and tight turns often mean a 26-foot truck cannot reach the unit. We plan a shuttle where needed.",
      },
      {
        title: "Downsizing support",
        body: "Most Largo moves are into smaller spaces. Sorting help and donation delivery with receipts are standard parts of the job here.",
      },
      {
        title: "Beach-adjacent traffic",
        body: "Indian Rocks Beach and the barrier islands are congested in season. Early starts are strongly preferable from January through April.",
      },
    ],
    popularServices: ["senior-moving", "residential-moving", "storage-solutions", "packing-services"],
    faqs: [
      {
        q: "Do you move within 55+ communities in Largo?",
        a: "Yes, frequently. We confirm the community's move window, register the crew at the gate and check truck-size restrictions before the date. Several Largo communities do not permit a full-size truck on interior roads, in which case we shuttle.",
      },
      {
        q: "Can you help sort and donate while downsizing?",
        a: "Yes. We work room by room at your pace, deliver donations to local Pinellas charities and provide receipts for tax purposes.",
      },
    ],
  },
  {
    slug: "palm-harbor",
    name: "Palm Harbor",
    county: "Pinellas County",
    tier: 2,
    metaTitle: "Movers in Palm Harbor, FL",
    metaDescription:
      "Palm Harbor movers for family homes, golf communities and waterfront properties in north Pinellas. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Palm Harbor, Dunedin and north Pinellas County with residential moving, packing and storage.",
    zips: ["34683", "34684", "34685"],
    neighborhoods: ["Ozona", "Crystal Beach", "Lansbrook", "Highland Lakes", "Innisbrook", "Downtown Palm Harbor"],
    driveTime: "45–60 minutes from Tampa",
    population: "~60,000",
    intro: [
      "Palm Harbor is north Pinellas — golf communities like Innisbrook and Lansbrook, the Highland Lakes 55+ community, and small waterfront pockets in Ozona and Crystal Beach with genuinely old, narrow streets.",
      "It is the far end of our standard service area, so we schedule early arrivals. The drive from Tampa is real, and it should happen before the working day starts rather than inside it.",
    ],
    localNotes: [
      {
        title: "Golf community gates",
        body: "Innisbrook and Lansbrook require advance registration for the crew and truck, and some sections restrict move hours.",
      },
      {
        title: "Highland Lakes 55+",
        body: "Defined move windows and gate procedures, with downsizing support the most common need.",
      },
      {
        title: "Ozona and Crystal Beach streets",
        body: "Old, narrow waterfront streets with limited truck access and minimal turnaround room. Access is confirmed before the date.",
      },
      {
        title: "Early starts",
        body: "Palm Harbor is 45 to 60 minutes from our dispatch point. We arrive early so the drive does not consume working hours.",
      },
    ],
    popularServices: ["residential-moving", "senior-moving", "packing-services", "long-distance-moving"],
    faqs: [
      {
        q: "Is there a travel charge for Palm Harbor?",
        a: "No. Palm Harbor is inside our standard service area with no travel surcharge. We schedule an early arrival so the drive from Tampa happens before your working day begins.",
      },
      {
        q: "Do you move into Innisbrook and Lansbrook?",
        a: "Yes. Both require advance registration for the crew and truck, and some sections have restricted move hours. We handle that coordination before your date.",
      },
    ],
  },
  {
    slug: "seffner",
    name: "Seffner",
    county: "Hillsborough County",
    tier: 2,
    metaTitle: "Movers in Seffner, FL",
    metaDescription:
      "Seffner movers for homes and acreage properties in east Hillsborough County. Flat-rate quotes, licensed and insured. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Seffner, Mango and the I-4 corridor communities of east Hillsborough County.",
    zips: ["33584"],
    neighborhoods: ["Mango", "Kingsway", "Parsons Pointe", "Lakewood Estates"],
    driveTime: "25–35 minutes from Tampa",
    population: "~8,000",
    intro: [
      "Seffner sits along the I-4 corridor between Tampa and Plant City, mixing established homes, acreage properties and newer subdivisions. Good highway access makes it straightforward to reach outside peak hours.",
      "Acreage properties here follow the east-county pattern: workshops, sheds and equipment that a bedroom-count estimate misses. We inventory outbuildings during the walkthrough.",
    ],
    localNotes: [
      {
        title: "I-4 corridor access",
        body: "Quick to reach from Tampa outside rush hour; slow inside it. Early starts keep the drive short.",
      },
      {
        title: "Acreage and outbuildings",
        body: "Detached workshops and sheds add meaningful volume. They are inventoried, not estimated.",
      },
      {
        title: "Unpaved driveways",
        body: "Sand and shell driveways will bog a loaded truck. Access is assessed before the date.",
      },
      {
        title: "Mixed housing stock",
        body: "Older homes with narrow doorframes alongside newer subdivisions. Crew and equipment are sized to the actual property.",
      },
    ],
    popularServices: ["residential-moving", "labor-only-moving", "packing-services", "storage-solutions"],
    faqs: [
      {
        q: "Do you serve Seffner and Mango?",
        a: "Yes, both are inside our standard service area with no travel surcharge. We schedule early starts to stay ahead of I-4 congestion.",
      },
      {
        q: "Can you move workshop equipment and tools?",
        a: "Yes. Fuel must be drained from anything with an engine before loading, and very heavy equipment should be flagged in advance so we assign the right dollies and crew.",
      },
    ],
  },
  {
    slug: "town-n-country",
    name: "Town 'n' Country",
    county: "Hillsborough County",
    tier: 2,
    metaTitle: "Movers in Town 'n' Country, Tampa",
    metaDescription:
      "Town 'n' Country movers for homes, apartments and condos in west Tampa. Flat-rate pricing, licensed and insured. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Town 'n' Country and west Tampa, including the Hillsborough Avenue and Memorial Highway corridors.",
    zips: ["33615", "33634", "33614"],
    neighborhoods: ["Countryway", "Twelve Oaks", "Bay Crest", "Pine Crest", "Woodbridge"],
    driveTime: "20–30 minutes from Tampa",
    population: "~85,000",
    intro: [
      "Town 'n' Country is dense west Tampa — a large mix of single-family homes, apartment complexes and condos, close to the airport and the Westshore business district.",
      "Because the housing mix skews toward apartments and condos, this is one of the areas where labor-only help and small apartment moves make up a bigger share of the work than full-service house moves.",
    ],
    localNotes: [
      {
        title: "Dense apartment complexes",
        body: "Assigned parking, limited loading zones and, in the larger complexes, elevator scheduling. We coordinate with the leasing office beforehand.",
      },
      {
        title: "Airport-adjacent traffic",
        body: "Memorial Highway and Hillsborough Avenue congest heavily around airport peaks. We plan start times around them.",
      },
      {
        title: "Mixed housing stock",
        body: "1960s and 70s single-family homes alongside newer apartment construction. Access and doorway widths vary a lot street to street.",
      },
      {
        title: "Small moves are common",
        body: "Apartment and studio moves where labor-only help or a two-mover crew is the right-sized product rather than a full-service booking.",
      },
    ],
    popularServices: ["apartment-condo-moving", "labor-only-moving", "residential-moving", "packing-services"],
    faqs: [
      {
        q: "Do you do small apartment moves?",
        a: "Yes. A studio or one-bedroom typically takes two movers three to four hours. If you have already rented a truck, labor-only help at a two-hour minimum is usually the cheaper option, and we will tell you when that is the case.",
      },
      {
        q: "Can you coordinate with my apartment complex?",
        a: "Yes. Send us the complex's requirements when you book and we will handle the certificate of insurance, elevator reservation and loading-zone access with the leasing office.",
      },
    ],
  },
  {
    slug: "lakeland",
    name: "Lakeland",
    county: "Polk County",
    tier: 2,
    metaTitle: "Movers in Lakeland, FL",
    metaDescription:
      "Lakeland movers serving Polk County homes and businesses, plus Lakeland–Tampa relocations. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "Brothers EZ Moving serves Lakeland and Polk County, with frequent Lakeland-to-Tampa and Lakeland-to-Orlando relocations.",
    zips: ["33801", "33803", "33805", "33809", "33810", "33811", "33812", "33813"],
    neighborhoods: ["Historic Dixieland", "Lake Morton", "Grasslands", "Oakbridge", "Highland City", "South Lakeland"],
    driveTime: "45–60 minutes from Tampa",
    population: "~115,000",
    intro: [
      "Lakeland sits between Tampa and Orlando on I-4, and a large share of our work here is relocations in one direction or the other — commuters moving closer to a job in either metro.",
      "The city has a substantial historic housing stock around Lake Morton and Dixieland, with the access issues that come with early-twentieth-century construction, alongside newer development in south Lakeland.",
    ],
    localNotes: [
      {
        title: "Historic district homes",
        body: "Lake Morton and Dixieland have 1920s and 30s homes with narrow stairs, original floors and doorframes narrower than modern furniture. Protection and disassembly are standard.",
      },
      {
        title: "I-4 corridor relocations",
        body: "Lakeland-to-Tampa and Lakeland-to-Orlando are frequent routes. Both are same-day local moves rather than long-distance jobs.",
      },
      {
        title: "Early starts for the drive",
        body: "Lakeland is 45 to 60 minutes out and I-4 is unpredictable. We arrive early so the drive does not consume the working day.",
      },
      {
        title: "South Lakeland growth",
        body: "Newer subdivisions with gate registration and HOA move-in requirements. We register ahead of the date.",
      },
    ],
    popularServices: ["residential-moving", "long-distance-moving", "packing-services", "commercial-moving"],
    faqs: [
      {
        q: "Do you move between Lakeland and Tampa?",
        a: "Yes, it is one of our regular routes and it is handled as a standard local move completed in a single day, not as a long-distance job with a delivery spread.",
      },
      {
        q: "Is Lakeland within your service area?",
        a: "Yes. Lakeland and the surrounding Polk County communities are covered. Because of the drive, we schedule early arrivals so travel happens before your working day begins.",
      },
    ],
  },
];

export const areaMap = new Map(areas.map((a) => [a.slug, a]));

export function getArea(slug: string): Area | undefined {
  return areaMap.get(slug);
}

export const primaryAreas = areas.filter((a) => a.tier === 1);

/** Counties grouped for the service-area hub page. */
export const areasByCounty = areas.reduce<Record<string, typeof areas>>((acc, area) => {
  (acc[area.county] ||= []).push(area);
  return acc;
}, {});
