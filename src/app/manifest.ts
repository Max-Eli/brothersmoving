import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0c1c30",
    categories: ["business", "utilities"],
    icons: [
      // Referenced from /public so the paths stay stable — Next fingerprints
      // the app-router icon files, which a manifest cannot predict.
      { src: "/logo-mark.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/logo-mark.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
  };
}
