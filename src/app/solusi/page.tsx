import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { solutions } from "@/data/solutions";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PageHeader } from "@/components/ui/page-header";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/home/cta-band";
import { PRIMARY_CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solusi — Otomasi AI Berdasarkan Masalah Bisnis",
  description:
    "Delapan pola solusi AI yang disusun dari masalah bisnis nyata: dari respons pelanggan, kualifikasi prospek, hingga pemrosesan dokumen.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solusi"
        title="Masalah bisnis yang mana yang sedang menguras tim Anda?"
        body="Pilih berdasarkan masalah, bukan berdasarkan teknologi. Setiap solusi di bawah adalah pola yang sering kami temukan dan terapkan di berbagai industri."
        breadcrumb={[{ label: "Solusi" }]}
      />

      <div className="bg-paper">
        <Container className="py-16 md:py-24">
          <div className="flex flex-col divide-y divide-line border-t border-line">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug}>
                  <article
                    id={s.slug}
                    className="grid scroll-mt-28 gap-6 py-10 md:grid-cols-[1fr_1fr] md:gap-12 md:py-12"
                  >
                    <div className="flex flex-col gap-4">
                      <span className="flex items-center gap-3">
                        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent-soft">
                          <Icon size={20} weight="regular" className="text-accent-deep" aria-hidden />
                        </span>
                        <span className="label text-muted">{String(i + 1).padStart(2, "0")} / 08</span>
                      </span>
                      <h2 className="text-h2 text-text">{s.problem}</h2>
                      <p className="max-w-[52ch] text-base leading-relaxed text-muted">{s.outcome}</p>
                    </div>

                    <div className="flex flex-col gap-5">
                      <div className="flex flex-wrap gap-2">
                        {s.industries.map((ind) => (
                          <span
                            key={ind}
                            className="rounded-md border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted"
                          >
                            {ind}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`/kontak?topic=${encodeURIComponent(s.slug)}`}
                        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:text-accent-deep hover:underline"
                      >
                        Diskusikan solusi ini untuk bisnis Anda
                        <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center">
            <ButtonLink href="/kontak" withArrow>
              {PRIMARY_CTA}
            </ButtonLink>
          </div>
        </Container>
      </div>

      <CtaBand />
    </>
  );
}