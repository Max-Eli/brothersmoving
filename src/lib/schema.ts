import { site, abs } from "./site";
import { areas } from "./areas";
import type { Service } from "./services";
import type { Area } from "./areas";
import type { Post } from "./posts";
import { reviews } from "./reviews";

/**
 * JSON-LD builders. Everything is linked through stable `@id` values so search
 * engines and AI crawlers resolve one business entity across the whole site
 * rather than treating each page as an unrelated organisation.
 */

export const ORG_ID = abs("/#organization");
export const WEBSITE_ID = abs("/#website");

type Json = Record<string, unknown>;

/** The central MovingCompany entity. Referenced by @id from every other node. */
export function organizationSchema(): Json {
  return {
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: site.shortName,
    url: site.url,
    telephone: site.phoneDisplay,
    email: site.email,
    description: site.description,
    foundingDate: site.founded,
    priceRange: site.priceRange,
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.hq.street,
      addressLocality: site.hq.city,
      addressRegion: site.hq.region,
      postalCode: site.hq.postalCode,
      addressCountry: site.hq.country,
    },
    // The business markets a service area rather than a walk-in storefront.
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: a.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: a.name,
        addressRegion: "FL",
        addressCountry: "US",
      },
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.base.latitude,
        longitude: site.base.longitude,
      },
      geoRadius: site.base.serviceRadius,
    },
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.stats.averageRating,
      reviewCount: site.stats.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    knowsAbout: [
      "Residential moving",
      "Commercial and office relocation",
      "Long-distance moving",
      "Packing and unpacking services",
      "Climate-controlled storage",
      "Piano and specialty item moving",
      "Tampa Bay relocation",
    ],
    ...(site.social.length ? { sameAs: site.social.map((s) => s.url) } : {}),
  };
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: abs("/search?q={search_term_string}") },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(trail: { name: string; href: string }[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.href),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(service: Service): Json {
  return {
    "@type": "Service",
    "@id": abs(`/services/${service.slug}#service`),
    name: service.name,
    description: service.summary,
    serviceType: service.name,
    provider: { "@id": ORG_ID },
    areaServed: areas.map((a) => ({ "@type": "City", name: a.name })),
    url: abs(`/services/${service.slug}`),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} — what's included`,
      itemListElement: service.includes.map((inc) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: inc.title, description: inc.body },
      })),
    },
  };
}

/** A city page describes the business as it operates in one place. */
export function areaServiceSchema(area: Area): Json {
  return {
    "@type": "Service",
    "@id": abs(`/areas-we-serve/${area.slug}#service`),
    name: `Moving Services in ${area.name}, FL`,
    description: area.summary,
    serviceType: "Moving company",
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: area.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: area.name,
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    url: abs(`/areas-we-serve/${area.slug}`),
  };
}

export function reviewsSchema(): Json[] {
  return reviews.map((r) => ({
    "@type": "Review",
    itemReviewed: { "@id": ORG_ID },
    author: { "@type": "Person", name: r.name },
    datePublished: r.date,
    name: r.title,
    reviewBody: r.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
      worstRating: "1",
    },
  }));
}

export function articleSchema(post: Post): Json {
  return {
    "@type": "Article",
    "@id": abs(`/moving-tips/${post.slug}#article`),
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.published,
    dateModified: post.updated,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: abs(`/moving-tips/${post.slug}`),
    articleSection: post.category,
    inLanguage: "en-US",
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  /** Plain-language answer the page exists to give — helps AI extraction. */
  primaryAnswer?: string;
}): Json {
  return {
    "@type": "WebPage",
    "@id": abs(`${opts.path}#webpage`),
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-US",
    ...(opts.primaryAnswer ? { abstract: opts.primaryAnswer } : {}),
  };
}

/** Wraps nodes in a single @graph so crawlers parse one connected entity set. */
export function graph(...nodes: (Json | Json[])[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes.flat(),
  });
}
