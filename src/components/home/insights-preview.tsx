import { getArticles } from "@/lib/ghost";
import { ArticleCard } from "@/components/articles/article-card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

export async function InsightsPreview() {
  const articles = await getArticles(3);

  return (
    <section className="border-t border-line bg-paper py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Wawasan"
          title="Bagikan cara berpikir, bukan sekadar jualan"
          body="Artikel praktis tentang kesiapan AI, otomasi, dan keputusan teknologi untuk pemilik bisnis."
          action={{ label: "Lihat semua artikel", href: "/wawasan" }}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} priority={i === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}