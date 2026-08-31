import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.databypaixao.com";
  return ["", "/about", "/analytics", "/engineering", "/ai", "/security", "/careers", "/privacy", "/terms"].map(
    (path) => ({ url: `${base}${path}`, lastModified: new Date("2026-08-31") }),
  );
}
