# Brothers EZ Moving of Tampa

Marketing website for a Tampa Bay moving company. Next.js 15 (App Router), React 19, Tailwind CSS v4, TypeScript. 57 pages, statically prerendered.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

---

## Before you go live

These are the things that must be changed or verified. Everything else works as shipped.

| # | What | Where | Why it matters |
|---|------|-------|----------------|
| 1 | **Keep the Make scenario switched on** | Make.com | Quote requests POST to the Make webhook. If the scenario is off the form shows an error. Adding `RESEND_API_KEY` gives it an email fallback. |
| 2 | **Replace the placeholder reviews** | `src/lib/reviews.ts` | They are written as realistic examples, not real customers. Publishing invented reviews as genuine is both a legal and a trust problem. |
| 3 | **Correct the review stats** | `src/lib/site.ts` → `stats` | `averageRating` and `reviewCount` feed an `AggregateRating` in structured data. Google penalises ratings that don't match a verifiable source. |
| 4 | **Verify the company facts** | `src/lib/site.ts` | `founded`, `movesCompleted`, `onTimeRate`, `yearsInBusiness` are placeholders. |
| 5 | **Add the USDOT / state license number** | `src/lib/site.ts` → `credentials` | Currently a generic statement. A real number is a strong trust signal and lets customers verify you. |
| 6 | **Add social profile URLs** | `src/lib/site.ts` → `social` | Empty array. Populating it adds `sameAs` to the schema, which helps entity recognition. |
| 7 | **Confirm the pricing table** | `src/lib/posts.ts`, `src/app/page.tsx` | Ranges are realistic for the 2026 Tampa market but should match what you actually charge. |
| 8 | **Add an Open Graph image** | `src/app/opengraph-image.png` | No social preview image yet — links currently share as plain text. 1200×630. |

### Where quote requests go

The form posts to `/api/quote`, which delivers to a **Make.com webhook**.

The URL is read from `QUOTE_WEBHOOK_URL` and is deliberately **not** in the source. A Make webhook URL is a capability credential — anyone holding it can post into your scenario — and this repository is public. Copy it from the webhook module in Make, then set it in:

- `.env.local` for local development (gitignored)
- your host's environment settings for production

Leave it unset and webhook delivery is skipped; the route logs the lead with a `[quote]` prefix instead.

The payload is flat and stable — every key is always present, so Make's field mapping never breaks on a missing value:

```json
{
  "name": "Jane Doe",
  "phone": "8135550142",
  "email": "jane@example.com",
  "origin": "Tampa 33606",
  "destination": "Brandon 33511",
  "moveDate": "2026-10-15",
  "homeSize": "3-bedroom",
  "service": "Residential Moving",
  "extras": ["Packing services", "Storage between dates"],
  "extrasText": "Packing services, Storage between dates",
  "details": "Third floor walk-up at the old place. One upright piano.",
  "summary": "Quote request — Jane Doe (Tampa 33606 → Brandon 33511)",
  "submittedAt": "2026-09-23T01:50:55.949Z",
  "source": "brothersezmove.com",
  "sourcePage": "https://brothersezmove.com/quote"
}
```

`extrasText` duplicates `extras` as a comma-joined string, because Make's email and Google Sheets modules handle a string far more gracefully than a collection.

Optional fields (`moveDate`, `homeSize`, `details`, `extras`) arrive as `""` or `[]` when the visitor leaves them blank — never `null` and never absent.

> **The Make scenario must be switched on.** If it is off, the webhook returns `410 There is no scenario listening for this webhook`, the route returns a 502, and the visitor is shown an error telling them to call instead. The lead is still written to the server log, but nobody is notified.

### Add an email backup

Because a paused Make scenario means a visible error on the form, configure Resend as a fallback:

```bash
cp .env.example .env.local   # then set RESEND_API_KEY
```

With both configured, `/api/quote` succeeds if **either** channel accepts the lead, and the response says which did:

```json
{ "ok": true, "delivered": true, "webhook": true, "email": false }
```

If every channel fails, the full lead is written to the server log prefixed `[quote]` so it can be recovered.

Both calls use a 10-second timeout so a hanging provider can't hold the visitor's request open. Validation, the honeypot and rate limiting all run *before* any delivery attempt, so bot traffic never reaches your scenario.

To swap providers, the only code that changes is the delivery block in `src/app/api/quote/route.ts`.

---

## How the content is structured

All content lives in typed data modules. Pages are templates that render them, so adding a service or a city is a data edit, not a new page.

| File | Contains |
|------|----------|
| `src/lib/site.ts` | Business identity, NAP, hours, stats. **Single source of truth** — every page and every schema block reads from here. |
| `src/lib/services.ts` | 10 services, each with copy, inclusions, process, fact table and FAQs |
| `src/lib/areas.ts` | 20 Tampa Bay cities with local operational detail, ZIPs and FAQs |
| `src/lib/posts.ts` | 6 long-form guides, as structured content blocks |
| `src/lib/faqs.ts` | 23 site-wide FAQs, grouped by category |
| `src/lib/reviews.ts` | Customer testimonials |
| `src/lib/schema.ts` | JSON-LD builders |

### Adding a service

Append an object to the `services` array in `src/lib/services.ts`. You get, automatically:

- `/services/<slug>` with full content, fact table and FAQs
- A card on `/services` and in the header mega menu
- `Service` + `FAQPage` + `BreadcrumbList` JSON-LD
- A sitemap entry, a footer link, and an entry in `llms.txt`

Adding a city works the same way via `src/lib/areas.ts`.

> Write genuinely distinct content for each city. Near-duplicate pages with only the place name swapped are exactly what Google's spam policy targets, and they can drag down the whole domain. Each existing city page carries real operational detail — access constraints, building rules, local timing — which is both more useful and safer.

### Changing the phone number, address or email

Edit `src/lib/site.ts` only. It propagates to every page, the footer, all `tel:` links, the structured data and `llms.txt`.

---

## SEO and AI search

**Per page:** unique title (≤60 chars) and meta description (≤160), canonical URL, Open Graph and Twitter tags, exactly one `<h1>`, and semantic heading structure.

**Structured data** — a single connected `@graph` per page, linked by stable `@id`, so crawlers resolve one business entity across the site rather than 57 unrelated ones:

- `MovingCompany` + `LocalBusiness` with `areaServed`, `serviceArea` (GeoCircle), opening hours and `AggregateRating`
- `Service` on each service page, `Service` scoped to a `City` on each area page
- `FAQPage` wherever FAQs appear, `Article` on guides, `Review` on `/reviews`
- `BreadcrumbList` and `WebPage` everywhere, `WebSite` with `SearchAction`

**For AI assistants:**

- `/llms.txt` — a generated plain-text summary of the business, services, service area, pricing and every FAQ. Built from the same data the pages use, so it cannot drift.
- `robots.ts` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot and others by name.
- Every service, area and guide page opens with a short, direct, quotable answer (`summary` / `keyTakeaway`), which is the format extractive AI search actually lifts.
- Fact tables give dense, parseable attribute/value pairs rather than burying numbers in prose.

**Generated automatically:** `/sitemap.xml` (48 URLs), `/robots.txt`, `/manifest.webmanifest`.

### After deploying

1. Submit `https://brothersezmove.com/sitemap.xml` in Google Search Console.
2. Validate a few pages in the [Rich Results Test](https://search.google.com/test/rich-results).
3. Create and verify a Google Business Profile — for a local service business this drives more calls than the site alone, and the NAP must match `src/lib/site.ts` exactly.
4. Add `verification` tokens to the `metadata` export in `src/app/layout.tsx` when Search Console gives you one.

---

## Accessibility

Built to WCAG 2.1 AA and verified, not assumed:

- Every text/background pair in every rendered page measured at ≥4.5:1 (≥3:1 for large text). The orange scale in `globals.css` was tuned specifically to achieve this — `amber-brand-400` is the bright accent and is only used on dark backgrounds; `600` and darker carry buttons, icons and text on light.
- Full keyboard operability, visible focus rings, skip link as the first tab stop
- Labelled form fields, `aria-expanded` / `aria-controls` on disclosures, unique IDs via `useId`
- `prefers-reduced-motion` disables all animation
- No horizontal scroll at 320px, 390px or 768px

`/accessibility` publishes this as a statement.

---

## Notes on the business details

**The address is a corporate office, not a Tampa storefront.** `1090 NE 160th Street` is in North Miami Beach, and the phone number is a 305 (Miami-Dade) area code, while the company markets itself as a Tampa Bay mover. The site handles this by describing a **service area** covering Tampa Bay rather than claiming a Tampa street address it does not have. The footer and contact page label the address as a corporate office.

This is deliberate. Claiming a local address you don't occupy is the single fastest way to get a Google Business Profile suspended. If you open or already have a real Tampa address, put it in `site.hq` and the whole site updates.

**No photography yet.** The design uses gradients, texture and inline SVG throughout, so there are no broken images — but real photos of your crews and trucks would meaningfully increase conversion on the home, about and service pages. When you add them, use `next/image`.

---

## Deploying

Set up for Vercel (`vercel.json` includes common legacy-URL redirects). Any Node host works.

```bash
npx vercel --prod
```

Set `RESEND_API_KEY`, `QUOTE_INBOX` and `QUOTE_FROM` as environment variables in the hosting dashboard.

Note that `/api/quote` runs on the server, so a fully static export (`output: "export"`) would disable the form. Everything else is prerendered.
