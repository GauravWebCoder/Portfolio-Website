import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { NAV_ITEMS } from "@/data/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_ITEMS.map((item) => ({
    url: `${site.url}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
