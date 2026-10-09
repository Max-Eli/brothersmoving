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
  /** Drive time from our North Miami Beach base. */
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
    slug: "miami",
    name: "Miami",
    county: "Miami-Dade County",
    tier: 1,
    metaTitle: "Movers in Miami, FL",
    metaDescription:
      "Licensed and insured movers serving every Miami neighborhood, from Brickell and Downtown to Coconut Grove. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage is a full-service moving company serving all of Miami, including Brickell, Downtown, Edgewater, Wynwood, Little Havana, Coconut Grove and Coral Way.",
    zips: ["33125", "33126", "33127", "33128", "33129", "33130", "33131", "33132", "33133", "33134", "33135", "33136", "33137", "33138", "33142", "33145", "33146", "33147", "33150"],
    neighborhoods: ["Brickell", "Downtown", "Edgewater", "Wynwood", "Design District", "Little Havana", "Coconut Grove", "Coral Way", "Allapattah", "Upper Eastside", "Midtown", "Shenandoah", "The Roads", "Overtown", "Little Haiti"],
    driveTime: "20–35 minutes from our North Miami Beach base",
    population: "~455,000",
    intro: [
      "Miami is the densest condo market in the country, and that single fact shapes almost every move here. The hard part is rarely the furniture — it is the building. A reserved freight elevator, a certificate of insurance naming three separate entities, a loading bay shared with four other tenants, and an association that only permits moves between 9am and 4pm on weekdays.",
      "We handle that side of the job as a matter of course. Our crews work Brickell and Downtown towers constantly, and we know which buildings want paperwork a week out and which will turn a truck away at the gate for a missing certificate. The result is that the elevator window you were given is the window we actually finish inside.",
    ],
    localNotes: [
      {
        title: "Certificates of insurance are non-negotiable",
        body: "Miami associations are the strictest in the country on this. Most want the COI naming the association, the management company and the building as additional insured, submitted 48 to 72 hours ahead. We issue them at no charge, usually the same day you ask.",
      },
      {
        title: "Weekday-only move windows",
        body: "A large share of Miami condo buildings prohibit moves on weekends entirely, and many cap the elevator at a four-hour block. We size the crew to finish inside that block rather than asking you to book a second day.",
      },
      {
        title: "Loading bays and valet-only entrances",
        body: "Many Brickell and Downtown towers have no street-level loading at all — access runs through a parking structure with a height limit that rules out a 26-foot truck. We check clearance before the date and bring a smaller vehicle where the ramp requires it.",
      },
      {
        title: "Hurricane season scheduling",
        body: "From June through November we track the forecast on booked jobs and move your date proactively rather than load a truck into a storm. Standard moving valuation generally excludes storm damage, so we err early on this.",
      },
    ],
    popularServices: ["apartment-condo-moving", "residential-moving", "packing-services", "commercial-moving"],
    faqs: [
      {
        q: "How much does it cost to hire movers in Miami?",
        a: "Most local Miami moves fall between $500 and $800 for a one-bedroom apartment, $900 and $1,500 for a two-bedroom, and $1,600 and $3,000 for a three-bedroom home. The variables that move the number most are building access, elevator availability and how far the truck has to park from the door. We quote a flat rate after a walkthrough so the figure does not change on moving day.",
      },
      {
        q: "Do you serve all Miami neighborhoods?",
        a: "Yes — every Miami ZIP code from 33125 through 33150, covering Brickell, Downtown, Edgewater, Wynwood, the Design District, Little Havana, Coconut Grove, Coral Way, Allapattah and the Upper Eastside.",
      },
    ],
  },
  {
    slug: "miami-beach",
    name: "Miami Beach",
    county: "Miami-Dade County",
    tier: 1,
    metaTitle: "Movers in Miami Beach, FL",
    metaDescription:
      "Miami Beach movers for South Beach condos, Art Deco walk-ups and oceanfront towers. Permits, COIs and elevator windows handled. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves all of Miami Beach, including South Beach, Mid-Beach, North Beach, South of Fifth and the Venetian Islands.",
    zips: ["33109", "33139", "33140", "33141", "33154"],
    neighborhoods: ["South Beach", "South of Fifth", "Mid-Beach", "North Beach", "Venetian Islands", "Sunset Islands", "Flamingo Park", "Belle Isle", "Normandy Isles", "Star Island"],
    driveTime: "25–40 minutes from our North Miami Beach base",
    population: "~82,000",
    intro: [
      "Miami Beach is the hardest moving market in South Florida, and anyone who tells you otherwise has not worked it. The island combines the tightest parking in the region, a city that regulates where a truck may stand, 1930s Art Deco buildings with no elevator and staircases built for smaller furniture, and oceanfront towers with the strictest association rules anywhere.",
      "Every one of those is manageable with planning and ruinous without it. We scout truck placement before the date, handle the city and building paperwork, and start early — because by mid-morning the causeways and Collins Avenue have made a four-hour job into a six-hour one.",
    ],
    localNotes: [
      {
        title: "Truck placement and loading zones",
        body: "Miami Beach regulates commercial vehicle standing closely, and in much of South Beach there is simply nowhere legal to put a 26-foot truck near the door. We confirm placement in advance and shuttle with a smaller vehicle where that is the only workable option.",
      },
      {
        title: "Art Deco walk-ups",
        body: "Much of South Beach is pre-war construction with no elevator, narrow stairwells and tight landings. Sectionals, box springs and large case goods frequently have to come apart to make the turn. We budget crew and time for that rather than discovering it on the day.",
      },
      {
        title: "Causeway timing",
        body: "The MacArthur, Venetian and Julia Tuttle all back up badly, and the Venetian has weight and height considerations. We schedule beach jobs to cross early, before the causeways and Collins Avenue seize up.",
      },
      {
        title: "Flood exposure and storm season",
        body: "Low-lying parts of the island flood on heavy rain alone, before any storm surge. During hurricane season we watch booked dates closely and reschedule at no charge rather than load a truck into it.",
      },
    ],
    popularServices: ["apartment-condo-moving", "residential-moving", "storage-solutions", "packing-services"],
    faqs: [
      {
        q: "Do I need a permit to move in Miami Beach?",
        a: "Depending on where the truck has to stand, yes — Miami Beach regulates commercial vehicle placement, and some blocks require a reserved loading zone. Tell us the address when you book and we will confirm what your specific street needs, so nothing is discovered on moving morning.",
      },
      {
        q: "Can you move into a South Beach building with no elevator?",
        a: "Yes, and it is routine here. Walk-ups need more crew and more time than the bedroom count suggests, and large furniture often has to be disassembled to clear the stairwell turns. We assess the staircase during the walkthrough and price it into the flat rate.",
      },
    ],
  },
  {
    slug: "north-miami-beach",
    name: "North Miami Beach",
    county: "Miami-Dade County",
    tier: 1,
    metaTitle: "Movers in North Miami Beach, FL",
    metaDescription:
      "North Miami Beach movers based right here on NE 160th Street. Same-day availability, flat-rate quotes, licensed and insured. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage is based in North Miami Beach on NE 160th Street and serves the whole city, including Eastern Shores, Skylake and Highland Village.",
    zips: ["33160", "33162", "33179", "33180"],
    neighborhoods: ["Eastern Shores", "Skylake", "Highland Village", "Fulford-by-the-Sea", "Greynolds Park", "Uleta", "Sunkist Grove", "Myrtle Grove"],
    driveTime: "Home base — same-day service available",
    population: "~43,000",
    intro: [
      "This is home. Our yard is on NE 160th Street, which means North Miami Beach jobs get the shortest response time we offer and the best odds on a same-day or next-day request. If a mover has let you down and you need a crew this morning, this is the city where we are most likely to say yes.",
      "The housing stock here is genuinely mixed — mid-century single-family homes around Skylake and Highland Village, waterfront properties in Eastern Shores, and a steady supply of condo and rental buildings along the Biscayne and 163rd Street corridors. We size the crew and equipment to the property rather than the bedroom count.",
    ],
    localNotes: [
      {
        title: "Fastest response in our service area",
        body: "Being based here means no travel time to absorb. Same-day availability is genuinely better in North Miami Beach than anywhere else we serve — call early and we will check crews against your address while you are on the phone.",
      },
      {
        title: "Eastern Shores waterfront access",
        body: "Narrow waterfront streets with limited turnaround room and, in places, no space for a full-size truck near the door. We confirm access before the date rather than finding out on the morning.",
      },
      {
        title: "Mid-century homes around Skylake",
        body: "1950s and 60s properties with terrazzo floors, narrow doorways and original jalousie-era openings. Floor protection and furniture disassembly are standard here, not exceptions.",
      },
      {
        title: "163rd Street and Biscayne corridors",
        body: "Both congest hard at commute hours. Early starts keep the crew working rather than sitting in traffic on your clock.",
      },
    ],
    popularServices: ["residential-moving", "last-minute-moving", "apartment-condo-moving", "storage-solutions"],
    faqs: [
      {
        q: "Can you move me today in North Miami Beach?",
        a: "More often here than anywhere else we serve, because this is where we are based and there is no travel time to work around. Call (305) 697-8717 early in the day and we will check crew and truck availability against your address immediately, and give you a straight yes or no.",
      },
      {
        q: "Where exactly are you located?",
        a: "1090 NE 160th Street, North Miami Beach, FL 33162. We dispatch from here across Miami-Dade and Broward. Please call before visiting — crews are out on jobs most of the day.",
      },
    ],
  },
  {
    slug: "aventura",
    name: "Aventura",
    county: "Miami-Dade County",
    tier: 1,
    metaTitle: "Movers in Aventura, FL",
    metaDescription:
      "Aventura movers for high-rise condos, 55+ buildings and seasonal moves. COIs, elevator reservations and strict move windows handled. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Aventura, including the Country Club Drive towers, Williams Island, Turnberry and the Biscayne Boulevard corridor.",
    zips: ["33160", "33180"],
    neighborhoods: ["Williams Island", "Turnberry", "Country Club Drive", "Hidden Bay", "Eldorado", "Mystic Pointe", "Porto Vita", "The Point"],
    driveTime: "5–15 minutes from our North Miami Beach base",
    population: "~40,000",
    intro: [
      "Aventura is almost entirely vertical, and the buildings run the strictest move policies in Miami-Dade. Reserved elevators, named insurance certificates, security clearance for the crew at the gate, protective padding required in the lift, and in many towers no moves at weekends at all. None of it is unreasonable, but all of it has to be arranged before the date.",
      "It is also a heavily seasonal market. A large share of our Aventura work is snowbirds moving out in spring and back in autumn, with storage in between — and booking both legs at once is the only reliable way to hold good dates through the season.",
    ],
    localNotes: [
      {
        title: "The strictest building rules in the county",
        body: "Williams Island, Turnberry, Porto Vita and the Country Club Drive towers each have their own requirements — named COIs, reserved service elevators, crew registration at the gate and defined move hours. We handle all of it with management ahead of your date.",
      },
      {
        title: "Weekday-only move windows",
        body: "Many Aventura associations do not permit moves on Saturdays or Sundays, and most cap the elevator at four hours. Crew size is set to finish inside that block.",
      },
      {
        title: "Seasonal and snowbird moves",
        body: "Out in spring, back in autumn, climate-controlled storage in between, handled by the same crew on both legs. Booking the return at the same time locks in your date during the busiest months.",
      },
      {
        title: "55+ and downsizing work",
        body: "A high concentration of 55+ buildings means downsizing is a large part of what we do here — sorting help, donation delivery with receipts, and full setup so the new place is livable the first night.",
      },
    ],
    popularServices: ["apartment-condo-moving", "storage-solutions", "senior-moving", "packing-services"],
    faqs: [
      {
        q: "Do you handle the certificate of insurance for my Aventura building?",
        a: "Yes, at no charge, and it is essential here. Most Aventura associations require the COI to name the association, the management company and the building as additional insured, submitted 48 to 72 hours ahead. A missing certificate is the single most common reason a crew is turned away at the door.",
      },
      {
        q: "My building only allows moves on weekdays between 9 and 4. Can you work with that?",
        a: "Yes — that restriction is the norm in Aventura and we plan around it. We assign enough crew to finish inside the window, arrive early to have floor and elevator protection in place before it opens, and stage items near the lift so it runs continuously.",
      },
    ],
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    county: "Broward County",
    tier: 1,
    metaTitle: "Movers in Fort Lauderdale, FL",
    metaDescription:
      "Fort Lauderdale movers for waterfront homes, Las Olas condos and downtown high-rises. Licensed, insured, flat-rate. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves all of Fort Lauderdale, including Las Olas, Victoria Park, Rio Vista, Coral Ridge and the beach condo corridor.",
    zips: ["33301", "33304", "33305", "33306", "33308", "33309", "33311", "33312", "33315", "33316"],
    neighborhoods: ["Las Olas", "Victoria Park", "Rio Vista", "Coral Ridge", "Harbor Beach", "Colee Hammock", "Flagler Village", "Sailboat Bend", "Imperial Point", "Lauderdale Beach"],
    driveTime: "30–45 minutes from our North Miami Beach base",
    population: "~185,000",
    intro: [
      "Fort Lauderdale splits cleanly into two kinds of job. There is the waterfront and the canals — Rio Vista, Harbor Beach, the Las Olas Isles — where homes sit on narrow finger streets with limited turnaround and the garage usually holds as much boating gear as the house holds furniture. And there is the vertical market along Las Olas and the beach, with the same condo paperwork Miami demands.",
      "We run this route daily. The drive up I-95 is real but predictable, and we schedule starts so the crew arrives before the corridor fills rather than sitting in it on your clock.",
    ],
    localNotes: [
      {
        title: "Canal-front and finger-street access",
        body: "Rio Vista, Las Olas Isles and the Harbor Beach streets are narrow with little room to turn a full-size truck. We assess placement during the walkthrough and plan it rather than improvising.",
      },
      {
        title: "Dock and marine equipment",
        body: "Dock boxes, boat gear, watersport equipment and workshop tools are common here and routinely missed on a bedroom-count estimate. We inventory them properly.",
      },
      {
        title: "Las Olas and beach condo rules",
        body: "The downtown and beachfront towers require COIs and reserved service elevators much like Miami. We handle submission and booking with management before your date.",
      },
      {
        title: "Drawbridge timing",
        body: "The Intracoastal bridges open on schedule and will hold a loaded truck for several minutes at a time. We route and time around them on jobs that have to cross.",
      },
    ],
    popularServices: ["residential-moving", "apartment-condo-moving", "packing-services", "long-distance-moving"],
    faqs: [
      {
        q: "Do you move between Miami and Fort Lauderdale?",
        a: "Constantly — it is one of our most common routes. A Miami-to-Fort-Lauderdale move is handled as a standard local move completed in a single day, with no long-distance premium and no delivery spread.",
      },
      {
        q: "Can you handle a waterfront home with limited street access?",
        a: "Yes. Tell us the street and we will check turnaround room before the date. Where a 26-foot truck cannot get in and out safely, we shuttle with a smaller vehicle rather than risk blocking a neighbour or getting stuck.",
      },
    ],
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    county: "Broward County",
    tier: 1,
    metaTitle: "Movers in Hollywood, FL",
    metaDescription:
      "Hollywood FL movers for beach condos, historic downtown homes and Emerald Hills. Flat-rate quotes, licensed and insured. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Hollywood, Florida, including Hollywood Beach, Downtown Hollywood, Emerald Hills and Hollywood Lakes.",
    zips: ["33019", "33020", "33021", "33023", "33024", "33025"],
    neighborhoods: ["Hollywood Beach", "Hollywood Lakes", "Downtown Hollywood", "Emerald Hills", "Oakwood Hills", "Beverly Hills", "Hillcrest", "Playa del Mar"],
    driveTime: "20–30 minutes from our North Miami Beach base",
    population: "~155,000",
    intro: [
      "Hollywood is the most varied market in our Broward coverage. The beach side is condo towers and the Broadwalk, where access is tight and seasonal traffic is heavy. Hollywood Lakes and the historic downtown are 1920s and 30s homes with narrow doorframes and original floors. Emerald Hills and the western neighborhoods are large post-war family houses with real garages.",
      "Those three need different crews, different equipment and different amounts of time. Quoting Hollywood off a bedroom count alone is how a job runs late, so we walk the property.",
    ],
    localNotes: [
      {
        title: "Beach-side access and the Broadwalk",
        body: "Hollywood Beach has very limited truck parking and heavy seasonal congestion. Early starts are close to mandatory from January through April.",
      },
      {
        title: "Historic Hollywood Lakes homes",
        body: "1920s and 30s construction with narrow doorways, original hardwood and tight stair turns. Floor runners, jamb padding and disassembly are standard.",
      },
      {
        title: "Larger homes out west",
        body: "Emerald Hills and the western neighborhoods run to bigger houses with full garages. Plan a full day for a three-bedroom rather than a half day.",
      },
      {
        title: "Dixie Highway and I-95 timing",
        body: "Both corridors congest at commute hours. We schedule arrivals outside those windows so the drive does not come out of your working day.",
      },
    ],
    popularServices: ["residential-moving", "apartment-condo-moving", "packing-services", "storage-solutions"],
    faqs: [
      {
        q: "How long does a Hollywood house move take?",
        a: "A three-bedroom home in Emerald Hills or the western neighborhoods typically runs six to nine hours with a three-person crew, because the garage usually adds more volume than people expect. A two-bedroom beach condo is more often four to six, with the elevator window being the limiting factor rather than the furniture.",
      },
      {
        q: "Do you move to and from Hollywood Beach?",
        a: "Yes. Beach moves need early starts because truck parking is limited and the area congests badly in season. We coordinate loading access with your building beforehand and size the crew to finish inside the reserved window.",
      },
    ],
  },
  {
    slug: "brickell",
    name: "Brickell",
    county: "Miami-Dade County",
    tier: 2,
    metaTitle: "Movers in Brickell, Miami",
    metaDescription:
      "Brickell movers for high-rise condos. COIs, freight elevator reservations and loading bay access handled. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Brickell and the Miami financial district, where almost every move runs through a reserved freight elevator and a named insurance certificate.",
    zips: ["33129", "33130", "33131"],
    neighborhoods: ["Brickell Key", "Mary Brickell Village", "Brickell Avenue", "West Brickell", "The Roads", "Brickell Heights"],
    driveTime: "25–40 minutes from our North Miami Beach base",
    population: "~35,000",
    intro: [
      "Brickell is vertical, dense and heavily regulated. Nearly every building here requires a certificate of insurance naming several entities, a reserved service elevator, crew registration with security, and a loading bay booking that may be shared with deliveries from four other tenants that morning.",
      "The furniture is the easy part. What decides whether a Brickell move goes smoothly is whether the paperwork was filed on time and whether the crew is big enough to finish inside the elevator block. We handle the first and size for the second.",
    ],
    localNotes: [
      {
        title: "Loading bay height limits",
        body: "Many Brickell towers route all access through a parking structure with a clearance that will not take a 26-foot truck. We confirm the limit before the date and bring a smaller vehicle where required.",
      },
      {
        title: "Shared service elevators",
        body: "A single freight lift often serves the whole building, so your reserved block is genuinely fixed. We stage items beside the lift so it runs continuously for the whole window.",
      },
      {
        title: "Security clearance for the crew",
        body: "Most buildings require crew names in advance for the gate or desk. We submit them with the COI so nobody is held downstairs on your clock.",
      },
      {
        title: "Brickell Avenue congestion",
        body: "The corridor is slow from mid-morning onward. Early starts are worth real money on a timed elevator window.",
      },
    ],
    popularServices: ["apartment-condo-moving", "residential-moving", "packing-services", "storage-solutions"],
    faqs: [
      {
        q: "How long does a Brickell condo move take?",
        a: "A one-bedroom typically runs three to four hours and a two-bedroom four to six, assuming the elevator window is available when we arrive. In Brickell the building schedule, not the furniture, is almost always the limiting factor.",
      },
      {
        q: "What does my building need from you before moving day?",
        a: "Usually a certificate of insurance naming the association, management company and building, a reserved freight elevator block, and the names of the crew for security. Send us the requirements when you book and we will file all of it, typically the same day.",
      },
    ],
  },
  {
    slug: "coral-gables",
    name: "Coral Gables",
    county: "Miami-Dade County",
    tier: 2,
    metaTitle: "Movers in Coral Gables, FL",
    metaDescription:
      "Coral Gables movers for historic Mediterranean homes, estate properties and Miracle Mile condos. Careful crews, flat-rate pricing. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Coral Gables, including the historic Mediterranean homes, Cocoplum, Gables Estates and the Miracle Mile corridor.",
    zips: ["33114", "33134", "33143", "33146", "33156", "33158"],
    neighborhoods: ["Miracle Mile", "Cocoplum", "Gables Estates", "Old Cutler", "Riviera", "Coral Bay", "Granada", "Hammock Lakes", "Snapper Creek"],
    driveTime: "35–50 minutes from our North Miami Beach base",
    population: "~50,000",
    intro: [
      "Coral Gables is the most design-conscious city in Miami-Dade and it shows in the housing stock — 1920s Mediterranean Revival homes with barrel-tile roofs, coral rock, heavy solid-wood doors and interior details that are expensive to repair. The city's tree ordinance has also left narrow streets under genuinely heavy banyan and oak canopy.",
      "Both of those shape the job. Floor and jamb protection goes down before anything moves, and we check canopy clearance on the route in rather than discovering a branch the hard way with a loaded truck.",
    ],
    localNotes: [
      {
        title: "Low canopy on historic streets",
        body: "Banyan and oak cover much of the older grid, and several streets will not clear a full-height box truck. We check the route in advance and shuttle with a smaller vehicle where needed.",
      },
      {
        title: "Historic homes, costly finishes",
        body: "Coral rock, original tile, solid-wood doors and plaster detail are all expensive to put right. Protection goes down first and large pieces come apart rather than being forced through a doorway.",
      },
      {
        title: "Gated estate communities",
        body: "Cocoplum, Gables Estates and Snapper Creek require advance registration for the crew and truck at the guardhouse.",
      },
      {
        title: "Estate-scale volume",
        body: "The larger Gables properties hold far more than a bedroom count suggests — art, libraries, wine, formal dining. These are full-day jobs, frequently with four movers.",
      },
    ],
    popularServices: ["residential-moving", "packing-services", "specialty-item-moving", "storage-solutions"],
    faqs: [
      {
        q: "Do you handle antiques, art and fine furniture?",
        a: "Yes, and Coral Gables is where we do most of it. Fragile and high-value items are wrapped and, where a stock carton will not do, custom crated on site. Art, mirrors and stone travel on edge in purpose-built crates, never flat.",
      },
      {
        q: "Can your truck reach my street under the tree canopy?",
        a: "Usually, though several older Gables streets will not clear a full-height box truck. We check your specific address during the walkthrough and bring a smaller vehicle where the canopy requires it.",
      },
    ],
  },
  {
    slug: "coconut-grove",
    name: "Coconut Grove",
    county: "Miami-Dade County",
    tier: 2,
    metaTitle: "Movers in Coconut Grove, Miami",
    metaDescription:
      "Coconut Grove movers for historic homes on narrow lanes and waterfront condos. Careful access planning, flat-rate quotes. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Coconut Grove, including the historic village lanes, Center Grove, South Grove and the waterfront condo corridor.",
    zips: ["33133", "33129", "33146"],
    neighborhoods: ["Center Grove", "South Grove", "North Grove", "Village West", "Bay Heights", "Silver Bluff", "Grove Isle"],
    driveTime: "30–45 minutes from our North Miami Beach base",
    population: "~20,000",
    intro: [
      "Coconut Grove is the oldest continuously inhabited neighborhood in Miami, and the street grid shows it. Narrow winding lanes, no sidewalks in places, dense tree cover and driveways built long before anyone owned an SUV, let alone parked a moving truck.",
      "Access planning is most of the work here. We scout placement before the date, because the alternative is a crew discovering at 8am that there is nowhere to put the truck and the neighbour's car is boxing in the only option.",
    ],
    localNotes: [
      {
        title: "Narrow lanes and no turnaround",
        body: "Many Grove streets are single-lane with dense canopy and no room to reverse a 26-foot truck. Placement is confirmed in advance, and a smaller shuttle vehicle is often the right answer.",
      },
      {
        title: "Historic wood-frame homes",
        body: "Original Grove houses have narrow doorways, steep stairs and heart-pine floors that mark easily. Protection and disassembly are routine.",
      },
      {
        title: "Waterfront condo rules",
        body: "Grove Isle and the bayfront buildings run Miami-standard association requirements — named COIs, reserved elevators and defined move hours.",
      },
      {
        title: "Village centre congestion",
        body: "The restaurant and retail core is busy from late morning. Early starts keep the truck moving.",
      },
    ],
    popularServices: ["residential-moving", "apartment-condo-moving", "packing-services", "specialty-item-moving"],
    faqs: [
      {
        q: "Can a moving truck get down my Coconut Grove street?",
        a: "Often not a full-size one. Several Grove lanes are too narrow or too heavily canopied for a 26-foot truck, which is why we check your specific address before the date and plan a shuttle where it is needed rather than improvising on the morning.",
      },
      {
        q: "Do you protect original wood floors?",
        a: "Yes, as standard. Runners go down on every walked surface and door jambs are padded before a single item moves. Grove heart-pine marks easily, and putting it right afterwards costs far more than the protection does.",
      },
    ],
  },
  {
    slug: "doral",
    name: "Doral",
    county: "Miami-Dade County",
    tier: 2,
    metaTitle: "Movers in Doral, FL",
    metaDescription:
      "Doral movers for townhomes, gated communities and offices near the airport. Flat-rate quotes, licensed and insured. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Doral, including the gated townhome communities, Downtown Doral and the business parks around Miami International.",
    zips: ["33122", "33126", "33166", "33172", "33178", "33182"],
    neighborhoods: ["Downtown Doral", "Doral Isles", "Islands at Doral", "Costa del Sol", "Grand Bay", "Vintage Estates", "Trump National"],
    driveTime: "35–50 minutes from our North Miami Beach base",
    population: "~80,000",
    intro: [
      "Doral is newer than most of Miami-Dade and almost entirely planned — gated townhome and condo communities, recent single-family construction, and one of the densest concentrations of office and warehouse space in the county next to the airport.",
      "That mix means we do more commercial work here than anywhere else we serve. Office relocations around the airport business parks are a steady part of the schedule, and they run on the same after-hours and weekend pattern we use everywhere.",
    ],
    localNotes: [
      {
        title: "Gated community registration",
        body: "Almost every Doral residential community is gated with guard registration for the crew and truck. We register in advance so nobody waits at the gate.",
      },
      {
        title: "Townhome access",
        body: "Shared driveways and narrow interior streets limit where a truck can sit. Placement is sorted during the walkthrough.",
      },
      {
        title: "Airport-area commercial work",
        body: "The business parks around Miami International are a large part of our Doral schedule. Those moves run after hours or over a weekend so the business loses no operating time.",
      },
      {
        title: "Palmetto and Dolphin congestion",
        body: "The 826 and 836 both seize at commute hours. We schedule arrivals outside those windows.",
      },
    ],
    popularServices: ["residential-moving", "commercial-moving", "apartment-condo-moving", "packing-services"],
    faqs: [
      {
        q: "Do you move offices in Doral?",
        a: "Yes, regularly — the airport business parks are one of our busiest commercial markets. Most office moves here load Friday evening and are placed and reassembled by Sunday, so staff sit down and work on Monday morning.",
      },
      {
        q: "Do you register with the guard gate in advance?",
        a: "Yes. Nearly every Doral community requires the crew and truck to be registered beforehand, so we handle it with the management office rather than having a crew held at the gate on your clock.",
      },
    ],
  },
  {
    slug: "hialeah",
    name: "Hialeah",
    county: "Miami-Dade County",
    tier: 2,
    metaTitle: "Movers in Hialeah, FL",
    metaDescription:
      "Hialeah movers with Spanish-speaking crews. Homes, apartments and businesses moved at a flat rate. Licensed and insured. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Hialeah and Hialeah Gardens with Spanish-speaking crews, covering homes, apartments, warehouses and small businesses.",
    zips: ["33010", "33012", "33013", "33014", "33015", "33016", "33018"],
    neighborhoods: ["Hialeah Gardens", "West Hialeah", "Palm Springs", "Miami Lakes border", "Country Club", "East Hialeah"],
    driveTime: "25–40 minutes from our North Miami Beach base",
    population: "~220,000",
    intro: [
      "Hialeah is the densest city in our service area and overwhelmingly Spanish-speaking. Our crews work in Spanish as a matter of course, which matters more than it sounds — a move goes badly when the person directing placement and the people carrying the furniture are not actually communicating.",
      "The housing stock is mostly mid-century single-family homes and low-rise apartment buildings on tight lots, with a substantial warehouse and light-industrial belt running through the city. Street parking is genuinely scarce and that is the planning constraint on most jobs here.",
    ],
    localNotes: [
      {
        title: "Spanish-speaking crews",
        body: "Standard on Hialeah jobs, not something that has to be requested. Nuestros equipos trabajan en español — you direct the move in whichever language you prefer.",
      },
      {
        title: "Tight lots and scarce street parking",
        body: "Narrow setbacks and limited kerb space mean truck placement is often the hardest part. We confirm it before the date.",
      },
      {
        title: "Low-rise apartment buildings",
        body: "Mostly walk-ups with narrow stairwells and no elevator. Crew size is set for the staircase rather than the bedroom count.",
      },
      {
        title: "Warehouse and small-business moves",
        body: "The light-industrial belt generates steady commercial work — equipment, inventory and office contents moved after hours.",
      },
    ],
    popularServices: ["residential-moving", "labor-only-moving", "commercial-moving", "apartment-condo-moving"],
    faqs: [
      {
        q: "¿Hablan español? Do your crews speak Spanish?",
        a: "Sí. Our Hialeah crews work in Spanish as standard, so you can direct the move in whichever language you are most comfortable with. It is not an add-on or something you need to request in advance.",
      },
      {
        q: "Is labor-only help available if I already rented a truck?",
        a: "Yes, and it is a common choice in Hialeah. Two movers at a two-hour minimum to load or unload a rental truck is usually the cheaper option, and we will tell you when that fits your situation better than a full-service move.",
      },
    ],
  },
  {
    slug: "kendall",
    name: "Kendall",
    county: "Miami-Dade County",
    tier: 2,
    metaTitle: "Movers in Kendall, FL",
    metaDescription:
      "Kendall movers for family homes, townhomes and gated communities in south Miami-Dade. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Kendall and south Miami-Dade, including Kendall West, The Hammocks, Three Lakes and the Killian corridor.",
    zips: ["33156", "33173", "33175", "33176", "33183", "33186", "33193", "33196"],
    neighborhoods: ["Kendall West", "The Hammocks", "Three Lakes", "Killian", "Snapper Creek", "Sunset", "Country Walk", "Calusa"],
    driveTime: "45–60 minutes from our North Miami Beach base",
    population: "~75,000",
    intro: [
      "Kendall is family-home territory — larger square footage than the coastal markets, real garages, and a steady flow of people moving within south Miami-Dade or arriving from out of state. Loads are bigger than an equivalent-bedroom move in Brickell or Miami Beach, and the garage is almost always the largest single room.",
      "It is also the far end of our service area. We schedule early arrivals so the drive down happens before the working day starts rather than inside it.",
    ],
    localNotes: [
      {
        title: "Larger homes, longer days",
        body: "Kendall houses average considerably more volume than coastal condos. Plan a full day for a three-bedroom, with the garage adding more than most people expect.",
      },
      {
        title: "Gated and HOA communities",
        body: "The Hammocks, Country Walk, Calusa and similar neighborhoods require gate registration and in some cases advance HOA notice for move-ins.",
      },
      {
        title: "Long driveways and wide lots",
        body: "More distance between the truck and the door than a comparable in-town address. We bring extra dollies rather than absorbing it in hand-carries.",
      },
      {
        title: "Early starts for the drive",
        body: "Kendall is 45 to 60 minutes out. We arrive early so travel time does not consume your working day.",
      },
    ],
    popularServices: ["residential-moving", "packing-services", "long-distance-moving", "storage-solutions"],
    faqs: [
      {
        q: "How much do movers cost in Kendall?",
        a: "Kendall homes typically hold more than the same bedroom count on the coast, so a four-bedroom generally runs $2,100 to $3,400 with a four-person crew. The garage and outdoor equipment are usually what push it above a comparable condo quote.",
      },
      {
        q: "Is there a travel charge for Kendall?",
        a: "No. Kendall is inside our standard service area with no travel surcharge. Because it is a genuine drive from our North Miami Beach base, we simply schedule an early arrival so it happens before your day starts.",
      },
    ],
  },
  {
    slug: "key-biscayne",
    name: "Key Biscayne",
    county: "Miami-Dade County",
    tier: 2,
    metaTitle: "Movers in Key Biscayne, FL",
    metaDescription:
      "Key Biscayne movers for oceanfront condos and island homes. Causeway timing, COIs and elevator windows handled. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Key Biscayne, including the oceanfront condo towers, Harbor Drive and the village's single-family streets.",
    zips: ["33149"],
    neighborhoods: ["Harbor Drive", "Ocean Lane", "Mashta Island", "Village Green", "Grand Bay", "Key Colony"],
    driveTime: "40–55 minutes from our North Miami Beach base",
    population: "~14,000",
    intro: [
      "Key Biscayne is an island, and everything about a move here follows from that. The only way on and off is the Rickenbacker Causeway, which is tolled, weather-sensitive and genuinely slow on weekends when the whole county heads for the beach.",
      "Add condo associations that run Aventura-grade rules on insurance and elevator windows, and the planning matters more than the lifting. We start early, cross before the causeway fills, and have the paperwork filed well ahead.",
    ],
    localNotes: [
      {
        title: "Rickenbacker Causeway is the only route",
        body: "Tolled, single access, and badly congested at weekends and on fine afternoons. We cross early and schedule around it rather than sitting in it on your clock.",
      },
      {
        title: "Condo association requirements",
        body: "The oceanfront buildings require named certificates of insurance, reserved service elevators and defined move hours. We handle submission and booking beforehand.",
      },
      {
        title: "Storm and surge exposure",
        body: "A barrier island with real surge risk. During hurricane season we watch booked dates closely and will reschedule ahead of a storm rather than cross a causeway into one.",
      },
      {
        title: "Limited local staging",
        body: "There is nowhere convenient to regroup on the island. Crews arrive fully equipped, because a forgotten dolly is an hour-long round trip.",
      },
    ],
    popularServices: ["apartment-condo-moving", "residential-moving", "packing-services", "storage-solutions"],
    faqs: [
      {
        q: "Does the causeway toll get added to my quote?",
        a: "No. Tolls and travel are priced into the flat rate you approve before moving day, so there is nothing added afterwards.",
      },
      {
        q: "Why do you start Key Biscayne moves so early?",
        a: "Because the Rickenbacker is the only way on and off the island, and it congests badly from late morning — especially at weekends. Crossing early is the difference between a crew working your job and a crew sitting in traffic on your time.",
      },
    ],
  },
  {
    slug: "miami-lakes",
    name: "Miami Lakes",
    county: "Miami-Dade County",
    tier: 2,
    metaTitle: "Movers in Miami Lakes, FL",
    metaDescription:
      "Miami Lakes movers for family homes, townhomes and offices in this planned community. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Miami Lakes, a planned community of family homes, townhomes and business parks in northwest Miami-Dade.",
    zips: ["33014", "33016", "33018"],
    neighborhoods: ["Loch Lomond", "Royal Oaks", "Lake Patricia", "Miami Lakes Town Center", "Bull Run", "Lake Sarah"],
    driveTime: "25–35 minutes from our North Miami Beach base",
    population: "~31,000",
    intro: [
      "Miami Lakes was planned from the ground up, and it behaves accordingly — consistent housing stock, mature landscaping, an active town association and a business district with its own office park. Moves here are generally more predictable than anywhere else in the county.",
      "The main planning items are the HOA rules in several sections and the mature tree cover on the older streets, which is low enough in places to matter for a full-height truck.",
    ],
    localNotes: [
      {
        title: "Town association rules",
        body: "Several Miami Lakes sections have rules on truck parking and permitted move hours. We confirm them before the date and work inside them.",
      },
      {
        title: "Mature canopy on older streets",
        body: "The original neighborhoods have substantial tree cover. We check clearance on the route rather than finding a branch with a loaded truck.",
      },
      {
        title: "Two-storey homes are the norm",
        body: "Most Miami Lakes houses put the bedrooms upstairs. Crew size is set with the staircase in mind.",
      },
      {
        title: "Town Center office moves",
        body: "The business district generates regular commercial work, scheduled after hours so tenants lose no operating time.",
      },
    ],
    popularServices: ["residential-moving", "packing-services", "commercial-moving", "storage-solutions"],
    faqs: [
      {
        q: "Are stairs an extra charge?",
        a: "No. Almost every Miami Lakes home is two storeys, so stairs are assessed during the walkthrough and built into the flat rate you approve. There is no separate stair charge added on moving day.",
      },
      {
        q: "Do you work with the town association rules?",
        a: "Yes. Several sections restrict where a truck may park and when moves may run. We confirm the requirements for your specific address before the date rather than discovering them on the morning.",
      },
    ],
  },
  {
    slug: "north-miami",
    name: "North Miami",
    county: "Miami-Dade County",
    tier: 2,
    metaTitle: "Movers in North Miami, FL",
    metaDescription:
      "North Miami movers minutes from our base. Homes, apartments and student moves near FIU Biscayne Bay. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves North Miami, including Keystone Point, Sans Souci, Biscayne Gardens and the FIU Biscayne Bay area.",
    zips: ["33161", "33167", "33168", "33181"],
    neighborhoods: ["Keystone Point", "Sans Souci Estates", "Biscayne Gardens", "Griffing Park", "Arch Creek", "San Souci", "FIU Biscayne Bay area"],
    driveTime: "10–20 minutes from our North Miami Beach base",
    population: "~60,000",
    intro: [
      "North Miami is effectively our neighbour, which means short response times and good odds on short-notice work. The housing is varied — waterfront homes in Keystone Point and Sans Souci, mid-century single-family streets through the middle of the city, and a dense rental market around FIU's Biscayne Bay campus.",
      "The student rental side runs on the academic calendar, and August is comfortably the busiest fortnight of the year here.",
    ],
    localNotes: [
      {
        title: "Very short response time",
        body: "Ten to twenty minutes from our yard means same-day and next-day requests are more often possible here than almost anywhere else we serve.",
      },
      {
        title: "Keystone Point waterfront access",
        body: "Narrow waterfront streets with limited turnaround. Truck placement is confirmed before the date.",
      },
      {
        title: "FIU Biscayne Bay turnover",
        body: "The fortnight before the autumn semester is the most congested moving period in this area. Book well ahead for mid-to-late August.",
      },
      {
        title: "Labor-only often fits better",
        body: "For a student apartment with a rented truck, two movers for two to three hours usually beats a full-service booking. We will say so when that is your situation.",
      },
    ],
    popularServices: ["residential-moving", "labor-only-moving", "apartment-condo-moving", "storage-solutions"],
    faqs: [
      {
        q: "Do you do student moves near FIU Biscayne Bay?",
        a: "Yes, and labor-only help is usually the most cost-effective option — two movers at a two-hour minimum to load or unload a rented truck. Book well ahead for August; that fortnight fills across every mover in the area.",
      },
      {
        q: "Can you store belongings over the summer?",
        a: "Yes. Month-to-month climate-controlled storage with no long commitment, which is the usual pattern for students leaving for the summer and returning in August.",
      },
    ],
  },
  {
    slug: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    county: "Miami-Dade County",
    tier: 2,
    metaTitle: "Movers in Sunny Isles Beach, FL",
    metaDescription:
      "Sunny Isles Beach movers for oceanfront condo towers. COIs, elevator reservations and Collins Avenue access handled. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Sunny Isles Beach, a corridor of oceanfront condo towers along Collins Avenue with strict association move rules.",
    zips: ["33160"],
    neighborhoods: ["Collins Avenue corridor", "Golden Shores", "Atlantic Isle", "Intracoastal Yacht Club", "Winston Towers", "Oceania"],
    driveTime: "5–15 minutes from our North Miami Beach base",
    population: "~22,000",
    intro: [
      "Sunny Isles Beach is a narrow strip of oceanfront towers between Collins Avenue and the water, and essentially every move here is a condo move. The buildings run strict policies — named certificates of insurance, reserved service elevators, protective padding in the lift and, in many cases, no moves at weekends.",
      "We are ten minutes away, which helps more than it sounds. Short travel means we can be staged and ready before your elevator window opens rather than arriving into it.",
    ],
    localNotes: [
      {
        title: "Essentially all high-rise",
        body: "Nearly every address here is a tower with a reserved service elevator and a management office that wants paperwork in advance. We handle it as standard.",
      },
      {
        title: "Collins Avenue loading",
        body: "The corridor is narrow with limited loading access and heavy seasonal traffic. We confirm the loading arrangement with the building before the date.",
      },
      {
        title: "Strong seasonal pattern",
        body: "Snowbird moves out in spring and back in autumn, with storage in between, are a large share of the work. Booking both legs together holds your dates through the busy months.",
      },
      {
        title: "Ten minutes from our yard",
        body: "Short travel means better same-day odds and crews staged before the elevator window opens.",
      },
    ],
    popularServices: ["apartment-condo-moving", "storage-solutions", "senior-moving", "packing-services"],
    faqs: [
      {
        q: "Will you handle the building paperwork?",
        a: "Yes, and in Sunny Isles it is essential. We issue the certificate of insurance naming the association, management company and building, reserve the service elevator, and register the crew with security — usually the same day you send us the requirements.",
      },
      {
        q: "Can you store my belongings between seasons?",
        a: "Yes, and it is a common request here. Climate-controlled storage with the same crew handling the move out, the storage period and the redelivery when you return.",
      },
    ],
  },
  {
    slug: "pinecrest",
    name: "Pinecrest",
    county: "Miami-Dade County",
    tier: 2,
    metaTitle: "Movers in Pinecrest, FL",
    metaDescription:
      "Pinecrest movers for estate homes on acre lots. Careful handling of art, antiques and fine furniture. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Pinecrest, a village of large estate homes on acre lots in south Miami-Dade, with mature landscaping and long private drives.",
    zips: ["33156", "33143", "33158"],
    neighborhoods: ["Pinecrest Estates", "Suniland", "Ponce-Davis border", "Evergreen", "Royal Palm"],
    driveTime: "45–60 minutes from our North Miami Beach base",
    population: "~19,000",
    intro: [
      "Pinecrest is acre lots, mature landscaping and some of the largest single-family homes in Miami-Dade. The volume in these houses routinely surprises people — formal dining, libraries, art, wine, home gyms and guest houses that an estimate based on bedroom count will badly underrate.",
      "These are full-day jobs, usually with four movers, and often with specialty items that need their own equipment. We walk the whole property, outbuildings included, before quoting.",
    ],
    localNotes: [
      {
        title: "Estate-scale volume",
        body: "Bedroom count is a poor guide here. We inventory the whole property — guest house, garage, outdoor furniture and all — so the quote reflects the real job.",
      },
      {
        title: "Long private drives and mature canopy",
        body: "Deep setbacks mean real distance between the truck and the door, and heavy tree cover limits clearance in places. Both are assessed in advance.",
      },
      {
        title: "Art, antiques and specialty items",
        body: "Custom crating for art and stone, and purpose-built equipment for pianos, safes and pool tables. Flag these when you call so the right crew is assigned.",
      },
      {
        title: "Early starts for the drive",
        body: "Pinecrest is at the far end of our area. We arrive early so the drive is not taken out of your working day.",
      },
    ],
    popularServices: ["residential-moving", "specialty-item-moving", "packing-services", "storage-solutions"],
    faqs: [
      {
        q: "How long does a Pinecrest estate move take?",
        a: "Usually a full day with four movers, and larger properties run to two days. The volume in these homes is considerably higher than the bedroom count suggests once art, libraries, formal dining, outdoor furniture and guest houses are included.",
      },
      {
        q: "Do you move pianos, safes and pool tables?",
        a: "Yes — all three are common in Pinecrest and all three are specialty items with their own equipment and crew requirements. Slate pool tables must be disassembled, and safes are quoted by weight and stair count. Mention them on the first call.",
      },
    ],
  },
  {
    slug: "pembroke-pines",
    name: "Pembroke Pines",
    county: "Broward County",
    tier: 2,
    metaTitle: "Movers in Pembroke Pines, FL",
    metaDescription:
      "Pembroke Pines movers for family homes, gated communities and 55+ neighborhoods. Flat-rate quotes, licensed and insured. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Pembroke Pines, including Chapel Trail, Silver Lakes, Pembroke Falls and the city's many 55+ communities.",
    zips: ["33023", "33024", "33025", "33026", "33027", "33028", "33029"],
    neighborhoods: ["Chapel Trail", "Silver Lakes", "Pembroke Falls", "Towngate", "Century Village", "Grand Palms", "Raintree"],
    driveTime: "35–50 minutes from our North Miami Beach base",
    population: "~170,000",
    intro: [
      "Pembroke Pines is suburban Broward at scale — master-planned communities, gated neighborhoods, large family homes and one of the densest concentrations of 55+ housing in South Florida. Downsizing is a bigger share of what we do here than almost anywhere else.",
      "The 55+ communities in particular run specific and strictly enforced rules: defined move-in windows, gate registration and, in some cases, limits on truck size inside the community. Knowing those before the date is the difference between a smooth morning and a crew waiting at a gatehouse.",
    ],
    localNotes: [
      {
        title: "55+ community rules",
        body: "Defined move windows, gate registration and truck-size restrictions are common and enforced. We confirm requirements with the community office beforehand.",
      },
      {
        title: "Downsizing support",
        body: "Most moves here are into smaller spaces. Sorting help, donation delivery with receipts and full setup at the new home are standard parts of the job.",
      },
      {
        title: "Large master-planned homes",
        body: "Chapel Trail, Pembroke Falls and Silver Lakes run to substantial houses with full garages. Plan a full day for a three or four-bedroom.",
      },
      {
        title: "Pines Boulevard congestion",
        body: "The main corridor is slow at commute hours. Early starts keep the crew working rather than driving.",
      },
    ],
    popularServices: ["residential-moving", "senior-moving", "packing-services", "storage-solutions"],
    faqs: [
      {
        q: "Do you move within 55+ communities in Pembroke Pines?",
        a: "Yes, frequently. We confirm the community's move window, register the crew at the gate and check truck-size restrictions before the date. Several communities do not permit a full-size truck on interior roads, in which case we shuttle.",
      },
      {
        q: "Can you help sort and donate while downsizing?",
        a: "Yes. We work room by room at your pace, deliver donations to local Broward charities and provide receipts for tax purposes.",
      },
    ],
  },
  {
    slug: "miramar",
    name: "Miramar",
    county: "Broward County",
    tier: 2,
    metaTitle: "Movers in Miramar, FL",
    metaDescription:
      "Miramar movers for family homes, townhomes and gated communities in southwest Broward. Flat-rate quotes. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Miramar, including Silver Shores, Riviera Isles, Monarch Lakes and the Miramar Parkway corridor.",
    zips: ["33023", "33025", "33027", "33029"],
    neighborhoods: ["Silver Shores", "Riviera Isles", "Monarch Lakes", "Sunset Lakes", "Vizcaya", "Historic Miramar"],
    driveTime: "30–45 minutes from our North Miami Beach base",
    population: "~135,000",
    intro: [
      "Miramar splits between the older eastern neighborhoods near US-441 and the newer master-planned communities out west. The west side is where most of our work is — larger homes, gated entrances and HOA move-in requirements, with a steady flow of families relocating from Miami-Dade for the space.",
      "Those Miami-Dade-to-Miramar moves are one of our most common routes, and they run as a standard single-day local move.",
    ],
    localNotes: [
      {
        title: "Gated communities out west",
        body: "Riviera Isles, Monarch Lakes and Sunset Lakes all require gate registration for the crew and truck ahead of the date.",
      },
      {
        title: "Large newer homes",
        body: "The western communities run to four and five-bedroom houses with three-car garages. Full-day jobs, often with four movers.",
      },
      {
        title: "Relocations from Miami-Dade",
        body: "A large share of arrivals are moving up from Miami-Dade for the space. That is a route we run constantly and complete in a single day.",
      },
      {
        title: "Older eastern neighborhoods",
        body: "Historic Miramar has smaller mid-century homes with narrower doorways and tighter access than the west side.",
      },
    ],
    popularServices: ["residential-moving", "packing-services", "storage-solutions", "long-distance-moving"],
    faqs: [
      {
        q: "Do you move from Miami to Miramar?",
        a: "Constantly — it is one of our most common routes. It is handled as a standard local move completed in a single day, with no long-distance premium.",
      },
      {
        q: "How much does a Miramar house move cost?",
        a: "The western communities run to larger homes, so a four-bedroom typically lands between $2,100 and $3,400 with a four-person crew. The garage and outdoor equipment are usually what push it above a comparable in-town quote.",
      },
    ],
  },
  {
    slug: "weston",
    name: "Weston",
    county: "Broward County",
    tier: 2,
    metaTitle: "Movers in Weston, FL",
    metaDescription:
      "Weston movers for gated master-planned communities and large family homes. Flat-rate quotes, licensed and insured. Call (305) 697-8717.",
    summary:
      "EZ Movers and Storage serves Weston, a master-planned city of gated communities and large family homes at the western edge of Broward County.",
    zips: ["33326", "33327", "33331", "33332"],
    neighborhoods: ["Weston Hills", "Savanna", "The Ridges", "Windmill Ranch", "Country Isles", "Bonaventure", "Indian Trace"],
    driveTime: "45–60 minutes from our North Miami Beach base",
    population: "~68,000",
    intro: [
      "Weston is one of the most thoroughly planned cities in Florida — nearly everything is inside a gated community with an active HOA, consistent architecture and mature landscaping. Homes are large, almost all two storeys, and the housing stock is uniform enough that quotes here hold well.",
      "It is the far western edge of our service area, so we schedule early arrivals. The drive out on I-75 or Royal Palm is real and should happen before your working day starts.",
    ],
    localNotes: [
      {
        title: "Gated entry at nearly every address",
        body: "Weston Hills, The Ridges, Savanna and Windmill Ranch all require advance registration for the crew and truck, and several restrict move hours.",
      },
      {
        title: "Large two-storey homes",
        body: "Four and five bedrooms with the sleeping floor upstairs is the standard layout. Crew size is set for the staircase.",
      },
      {
        title: "Corporate relocations",
        body: "A high share of Weston moves are job-driven and interstate. We provide the written estimates, itemised inventories and invoicing relocation packages typically require.",
      },
      {
        title: "Early starts for the drive",
        body: "Forty-five to sixty minutes from our base. We arrive early so travel does not consume working hours.",
      },
    ],
    popularServices: ["residential-moving", "long-distance-moving", "packing-services", "storage-solutions"],
    faqs: [
      {
        q: "Do you register with the guard gate in advance?",
        a: "Yes. Nearly every Weston address sits inside a gated community that requires the crew and truck registered beforehand, so we handle it with the management office rather than having a crew held at the gate on your clock.",
      },
      {
        q: "Can you handle a corporate relocation?",
        a: "Yes. We provide written estimates, itemised inventories and invoicing in the formats relocation packages typically require for reimbursement.",
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
