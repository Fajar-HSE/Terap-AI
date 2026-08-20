import type { Article } from "@/lib/articles";
import { loadMarkdownArticles } from "@/lib/markdown";

/**
 * Sumber artikel. Prioritas:
 *   1. Ghost Content API (headless) — aktif bila `GHOST_CONTENT_URL`
 *      dan `GHOST_CONTENT_KEY` terisi di environment.
 *   2. Artikel lokal — file Markdown di `src/content/wawasan/*.md`.
 *
 * API publik (getArticles / getArticle / getAllSlugs) sama untuk kedua
 * sumber, sehingga halaman tidak perlu tahu dari mana konten berasal.
 */

const GHOST_URL = process.env.GHOST_CONTENT_URL?.replace(/\/+$/, "");
const GHOST_KEY = process.env.GHOST_CONTENT_KEY;

type GhostPost = {
  id: string;
  slug: string;
  title: string;
  html?: string;
  plaintext?: string;
  excerpt?: string;
  custom_excerpt?: string;
  feature_image?: string | null;
  published_at?: string;
  reading_time?: number;
  tags?: { name: string }[];
  primary_author?: { name: string };
  meta_title?: string | null;
  meta_description?: string | null;
  og_image?: string | null;
  canonical_url?: string | null;
};

type GhostResponse = { posts?: GhostPost[]; meta?: unknown };

function hasGhost(): boolean {
  return Boolean(GHOST_URL && GHOST_KEY);
}

async function ghostFetch(query: string): Promise<GhostResponse> {
  if (!GHOST_URL || !GHOST_KEY) throw new Error("Ghost API belum dikonfigurasi");
  const res = await fetch(
    `${GHOST_URL}/ghost/api/content/posts/?key=${encodeURIComponent(GHOST_KEY)}&${query}`,
    { next: { revalidate: 600 } },
  );
  if (!res.ok) {
    throw new Error(`Ghost API error: ${res.status}`);
  }
  return (await res.json()) as GhostResponse;
}

function mapPost(p: GhostPost): Article {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.custom_excerpt || p.excerpt || p.plaintext?.slice(0, 160) || "",
    body: p.html ?? "",
    featureImage: p.feature_image ?? null,
    publishedAt: p.published_at ?? new Date().toISOString(),
    readingTime: p.reading_time ?? 3,
    tags: (p.tags ?? []).map((t) => t.name),
    author: p.primary_author?.name ?? "Fajar",
  };
}

export async function getArticles(limit = 8): Promise<Article[]> {
  if (!hasGhost()) return loadMarkdownArticles();
  const data = await ghostFetch(
    `limit=${limit}&include=tags,authors&fields=id,slug,title,html,plaintext,excerpt,custom_excerpt,feature_image,published_at,reading_time,meta_title,meta_description,og_image,canonical_url`,
  );
  return (data.posts ?? []).map(mapPost);
}

export async function getArticle(slug: string): Promise<Article | null> {
  if (!hasGhost()) {
    return loadMarkdownArticles().find((a) => a.slug === slug) ?? null;
  }
  const data = await ghostFetch(
    `filter=slug:${encodeURIComponent(slug)}&include=tags,authors&fields=id,slug,title,html,plaintext,excerpt,custom_excerpt,feature_image,published_at,reading_time,meta_title,meta_description,og_image,canonical_url`,
  );
  const post = data.posts?.[0];
  return post ? mapPost(post) : null;
}

export async function getAllSlugs(): Promise<string[]> {
  if (!hasGhost()) return loadMarkdownArticles().map((a) => a.slug);
  const data = await ghostFetch("limit=all&fields=slug");
  return (data.posts ?? []).map((p) => p.slug);
}
