import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllSlugs } from "@/lib/ghost";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    "",
    "/tentang",
    "/layanan",
    "/solusi",
    "/kisah-sukses",
    "/wawasan",
    "/kontak",
  ];
  const pages = staticPaths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.8,
  })) as MetadataRoute.Sitemap;

  const slugs = await getAllSlugs();
  const articles = slugs.map((slug) => ({
    url: `${site.url}/wawasan/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}