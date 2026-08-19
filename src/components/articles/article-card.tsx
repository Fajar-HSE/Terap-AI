import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Article } from "@/lib/articles";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

export function ArticleCard({
  article,
  priority = false,
}: {
  article: Article;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/wawasan/${article.slug}`}
      className="group flex h-full flex-col gap-4 rounded-lg border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-panel"
    >
      <div className="flex flex-wrap items-center gap-2">
        {article.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="label text-accent">
            {tag}
          </span>
        ))}
        <span className="ml-auto text-xs text-muted">{formatDate(article.publishedAt)}</span>
      </div>
      <h3
        className={`font-semibold tracking-tight text-text ${
          priority ? "text-h3" : "font-display text-lg leading-snug"
        }`}
      >
        {article.title}
      </h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-muted">{article.excerpt}</p>
      <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
        <span className="text-xs text-muted">
          {article.readingTime} menit baca · {article.author}
        </span>
        <ArrowRight
          size={15}
          className="text-accent transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </div>
    </Link>
  );
}