import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { JsonLd } from "@/components/ui";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Movers in Tampa, FL`,
    template: `%s | ${site.shortName}`,
  },
  description: site.metaDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.legalName,
  keywords: [
    "movers Tampa",
    "moving company Tampa FL",
    "Tampa movers",
    "local movers Tampa Bay",
    "long distance movers Tampa",
    "residential movers Tampa",
    "commercial movers Tampa",
    "packing services Tampa",
    "moving and storage Tampa",
    "piano movers Tampa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Movers in Tampa, FL`,
    description: site.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Movers in Tampa, FL`,
    description: site.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Moving Services",
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#0c1c30",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={inter.variable}>
      <head>
        {/* Site-wide entity graph — present on every page so crawlers always
            resolve the same business regardless of entry point. */}
        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Tampa, Florida" />
        <meta name="geo.position" content={`${site.base.latitude};${site.base.longitude}`} />
        <meta name="ICBM" content={`${site.base.latitude}, ${site.base.longitude}`} />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
