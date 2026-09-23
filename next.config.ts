import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /**
   * This site renders no next/image — all artwork is inline SVG or CSS — so the
   * Image Optimization API is dead weight. Disabling it removes that route and
   * the sharp dependency's attack surface along with it.
   */
  images: { unoptimized: true },

  poweredByHeader: false,
  compress: true,
  /**
   * Legacy and guessable URLs. Kept here rather than in vercel.json so they
   * also run under `next dev` / `next start` and can be verified locally —
   * vercel.json redirects only exist once deployed.
   */
  async redirects() {
    return [
      { source: "/services/residential", destination: "/services/residential-moving", permanent: true },
      { source: "/services/commercial", destination: "/services/commercial-moving", permanent: true },
      { source: "/services/office", destination: "/services/commercial-moving", permanent: true },
      { source: "/services/long-distance", destination: "/services/long-distance-moving", permanent: true },
      { source: "/services/packing", destination: "/services/packing-services", permanent: true },
      { source: "/services/storage", destination: "/services/storage-solutions", permanent: true },
      { source: "/services/labor-only", destination: "/services/labor-only-moving", permanent: true },
      { source: "/services/piano", destination: "/services/specialty-item-moving", permanent: true },
      { source: "/areas", destination: "/areas-we-serve", permanent: true },
      { source: "/areas/:slug", destination: "/areas-we-serve/:slug", permanent: true },
      { source: "/service-areas", destination: "/areas-we-serve", permanent: true },
      { source: "/service-areas/:slug", destination: "/areas-we-serve/:slug", permanent: true },
      { source: "/locations", destination: "/areas-we-serve", permanent: true },
      { source: "/locations/:slug", destination: "/areas-we-serve/:slug", permanent: true },
      { source: "/blog", destination: "/moving-tips", permanent: true },
      { source: "/blog/:slug", destination: "/moving-tips/:slug", permanent: true },
      { source: "/resources", destination: "/moving-tips", permanent: true },
      { source: "/tips", destination: "/moving-tips", permanent: true },
      { source: "/get-a-quote", destination: "/quote", permanent: true },
      { source: "/free-quote", destination: "/quote", permanent: true },
      { source: "/estimate", destination: "/quote", permanent: true },
      { source: "/moving-quote", destination: "/quote", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/testimonials", destination: "/reviews", permanent: true },
      { source: "/faqs", destination: "/faq", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
