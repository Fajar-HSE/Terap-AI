import type { Metadata } from "next";
import { getArticles } from "@/lib/ghost";
import { ArticleCard } from "@/components/articles/article-card";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Wawasan — Artikel Praktis seputar AI untuk Bisnis",
  description:
    "Artikel tentang kesiapan AI, otomasi, tata kelola, dan pengambilan keputusan teknologi untuk pemilik bisnis dan tim eksekutif.",
};

export default async function InsightsPage() {
  const articles = await getArticles(12);
  const hasGhost = Boolean(
    process.env.GHOST_CONTENT_URL && process.env.GHOST_CONTENT_KEY,
  );

  return (
    <>
      <PageHeader
        eyebrow="Wawasan"
        title="Bagikan cara berpikir, bukan sekadar jualan"
        body="Artikel kami ditulis dari praktik di lapangan: apa yang berhasil, di mana AI sering gagal, dan bagaimana membedakan tren dari yang benar-benar berdampak."
        breadcrumb={[{ label: "Wawasan" }]}
      />

      <section className="border-b border-line bg-paper">
        <Container className="py-16 md:py-24">
          {!hasGhost ? (
            <p className="mb-10 max-w-[64ch] rounded-lg border border-warning/30 bg-warning/5 px-5 py-4 text-sm leading-relaxed text-warning">
              Artikel ini dikelola sebagai file Markdown di{" "}
              <code className="font-mono">src/content/wawasan</code>. Untuk
              menyunting dari dashboard, sambungkan Ghost Content API melalui
              environment{" "}
              <code className="font-mono">GHOST_CONTENT_URL</code> dan{" "}
              <code className="font-mono">GHOST_CONTENT_KEY</code>.
            </p>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <ArticleCard key={article.slug} article={article} priority={i < 3} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}