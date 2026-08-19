import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { getArticle, getArticles, getAllSlugs } from "@/lib/ghost";
import { sanitizeArticleHtml } from "@/lib/markdown";
import { ArticleCard } from "@/components/articles/article-card";
import { Container } from "@/components/ui/container";

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/wawasan/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Artikel tidak ditemukan" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      tags: article.tags,
    },
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export default async function ArticlePage({
  params,
}: PageProps<"/wawasan/[slug]">) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const related = (await getArticles(6))
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: article.author },
    keywords: article.tags.join(", "),
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <header className="border-b border-line bg-surface">
        <Container size="narrow" className="py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-text">Beranda</Link>
            <CaretRight size={11} aria-hidden />
            <Link href="/wawasan" className="hover:text-text">Wawasan</Link>
            <CaretRight size={11} aria-hidden />
            <span className="line-clamp-1 text-text">{article.title}</span>
          </nav>

          <div className="mt-8 flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="label text-accent">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-h1 max-w-[22ch] text-text">{article.title}</h1>
            <p className="max-w-[60ch] text-lg leading-relaxed text-muted">{article.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>{article.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              <span aria-hidden>·</span>
              <span>{article.readingTime} menit baca</span>
            </div>
          </div>
        </Container>
      </header>

      <div className="bg-paper">
        <Container size="narrow" className="py-14 md:py-20">
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{
              __html: sanitizeArticleHtml(article.body),
            }}
          />

          <div className="mt-16 border-t border-line pt-8">
            <Link
              href="/wawasan"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-deep"
            >
              <CaretLeft size={15} weight="bold" aria-hidden />
              Kembali ke semua wawasan
            </Link>
          </div>
        </Container>
      </div>

      {related.length > 0 ? (
        <section className="border-t border-line bg-surface">
          <Container className="py-16 md:py-20">
            <h2 className="text-h2 mb-8 text-text">Bacaan lanjutan</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </article>
  );
}