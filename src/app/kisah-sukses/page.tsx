import type { Metadata } from "next";
import { cases } from "@/data/cases";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PageHeader } from "@/components/ui/page-header";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/home/cta-band";
import { PRIMARY_CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studi Kasus — Bukti Cara Kerja",
  description:
    "Studi kasus penerapan AI dari masalah nyata hingga hasil terukur. Data berikut bersifat contoh dan akan diganti dengan klien sesungguhnya.",
};

const phases = [
  { key: "challenge", dir: "tidak" },
  { key: "approach", dir: "" },
  { key: "result", dir: "" },
] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studi kasus"
        title="Bukti cara kerja, bukan sekadar janji"
        body="Setiap proyek didokumentasikan dalam empat bagian: tantangan, pendekatan, implementasi, dan hasil. Data berikut adalah contoh untuk menunjukkan format dan akan diganti dengan studi kasus klien sesungguhnya."
        breadcrumb={[{ label: "Studi Kasus" }]}
      />

      <div className="bg-paper">
        <Container className="py-16 md:py-24">
          <div className="flex flex-col gap-16">
            {cases.map((c, ci) => (
              <Reveal key={c.slug}>
                <article id={c.slug} className="scroll-mt-28 border-t border-line pt-10 md:pt-14">
                  <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      <p className="label text-accent">
                        {String(ci + 1).padStart(2, "0")} · {c.industry}
                      </p>
                      <h2 className="text-h2 max-w-[24ch] text-text">{c.challenge}</h2>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right text-sm text-muted">
                      <span className="label">TAMBAHAN — DATA CONTOH</span>
                      <span>Durasi: {c.duration}</span>
                      <span>Skala: {c.size}</span>
                    </div>
                  </div>

                  <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
                    {phases.map((p) => (
                      <div key={p.key} className="flex flex-col gap-3 bg-surface p-6 md:p-7">
                        <span className="label text-accent">{p.key}</span>
                        <p className="text-sm leading-relaxed text-muted">
                          {c[p.key]}
                        </p>
                      </div>
                    ))}
                  </div>

                  {c.metricValue ? (
                    <div className="mt-6 flex max-w-sm flex-col gap-1 rounded-lg bg-accent px-6 py-5 text-paper">
                      <span className="label text-paper/75">{c.metricLabel}</span>
                      <span className="font-display text-3xl font-semibold tracking-tight">
                        {c.metricValue}
                      </span>
                      <span className="text-xs text-paper/70">Angka contoh — bukan hasil riil</span>
                    </div>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
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