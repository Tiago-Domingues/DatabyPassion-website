import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  return ["", "/studio", "/about", "/analytics", "/engineering", "/ai", "/products", "/security", "/careers", "/privacy", "/terms"].map(
    (path) => ({ url: `${base}${path}`, lastModified: new Date("2026-09-01") }),
  );
}
