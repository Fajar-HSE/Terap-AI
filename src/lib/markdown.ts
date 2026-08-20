import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Article } from "@/lib/articles";

/**
 * Sumber artikel lokal: file Markdown dengan frontmatter YAML di
 * `src/content/wawasan/*.md`. Artikel dirender menjadi HTML saat build,
 * lalu dirender pada halaman via `.prose-article`.
 *
 * Slug diambil dari nama file (tanpa ekstensi). Frontmatter yang boleh
 * diisi: title, excerpt, publishedAt, readingTime, tags, author, cover.
 */

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "wawasan");

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
  const files = readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(/\.md$/, ""), file: path.join(CONTENT_DIR, f) }));

  return files
    .map(({ slug, file }) => toArticle(slug, readFileSync(file, "utf8")))
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
