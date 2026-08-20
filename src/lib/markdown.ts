import matter from "gray-matter";
import { marked } from "marked";
import type { Article } from "@/lib/articles";
import { RAW_ARTICLES } from "@/lib/generated-content";

/**
 * Sumber artikel lokal: file Markdown dengan frontmatter YAML di
 * `src/content/wawasan/*.md`. Konten di-inline ke bundle via
 * `scripts/inline-content.mjs` (hasil: `src/lib/generated-content.ts`)
 * supaya dapat dibaca di runtime Cloudflare Worker tanpa akses filesystem.
 *
 * Slug diambil dari nama file (tanpa ekstensi). Frontmatter yang boleh
 * diisi: title, excerpt, publishedAt, readingTime, tags, author, cover.
 */

function readFrontmatter(raw: string) {
  const { data } = matter(raw);
  return data as Record<string, unknown>;
}

function toArticle(slug: string, raw: string): Article {
  const meta = readFrontmatter(raw);
  const { content } = matter(raw);
  const body = marked.parse(content) as string;

  return {
    slug,
    title: String(meta.title ?? "Tanpa judul"),
    excerpt: meta.excerpt ? String(meta.excerpt) : "",
    body,
    featureImage: meta.cover ? String(meta.cover) : null,
    publishedAt: String(meta.publishedAt ?? new Date().toISOString()),
    readingTime: Number(meta.readingTime ?? 3),
    tags: Array.isArray(meta.tags) ? meta.tags.map(String) : [],
    author: meta.author ? String(meta.author) : "Fajar",
  };
}

/** Muat semua artikel lokal, terurut dari yang terbaru. */
export function loadMarkdownArticles(): Article[] {
  return Object.entries(RAW_ARTICLES)
    .map(([slug, raw]) => toArticle(slug, raw))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Sanitasi HTML artikel. Konten berasal dari repo lokal, tetapi tetap
 * dilakukan pembersihan pertahanan (defense in depth) sebelum di-render.
 */
export function sanitizeArticleHtml(html: string): string {
  return html
    .replace(/<\s*(script|iframe|object|embed|form|style)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<\s*(script|iframe|object|embed|form|style)[^>]*\/?\s*>/gi, "")
    .replace(/\son[a-z]+\s*=\s*("([^"]*)"|'([^']*)'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*["']?\s*javascript:[^"'>\s]*/gi, '$1="#"');
}
