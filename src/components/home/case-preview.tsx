import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cases } from "@/data/cases";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function CasePreview() {
  const [featured, a, b] = cases;

  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Studi kasus"
          title="Bukti cara kerja, bukan sekadar janji"
          body="Setiap proyek didokumentasikan dari masalah nyata hingga hasil terukur. Data berikut bersifat contoh dan akan diganti dengan studi kasus klien sesungguhnya."
          action={{ label: "Lihat semua studi kasus", href: "/kisah-sukses" }}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Link
              href={`/kisah-sukses#${featured.slug}`}
              className="group flex h-full flex-col justify-between gap-10 rounded-lg border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-panel md:p-10"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="label text-accent">{featured.industry}</span>
                <span className="label text-muted">{featured.size}</span>
                <span className="ml-auto text-xs text-muted">Durasi {featured.duration}</span>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-2.5">
                  <span className="label text-muted">Masalah</span>
                  <p className="text-base leading-relaxed text-text">{featured.challenge}</p>
                </div>
                <div className="flex flex-col gap-2.5 border-line-strong md:border-l md:pl-8">
                  <span className="label text-muted">Hasil</span>
                  <p className="text-base leading-relaxed text-text">{featured.result}</p>
                  {featured.metricValue ? (
                    <div className="mt-3 flex flex-col gap-1 rounded-md bg-accent-soft px-4 py-3">
                      <span className="label text-accent-deep">{featured.metricLabel}</span>
                      <span className="font-display text-2xl font-semibold tracking-tight text-accent-deep">
                        {featured.metricValue}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Baca studi kasus
                <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-6">
            {[a, b].map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <Link
                  href={`/kisah-sukses#${c.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-lg border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-panel"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span className="label text-accent">{c.industry}</span>
                    <span className="label text-muted">{c.size}</span>
                  </div>
                  <p className="line-clamp-3 text-base leading-relaxed text-text">{c.challenge}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                    <span className="text-xs text-muted">Durasi {c.duration}</span>
                    <ArrowRight size={15} className="text-accent transition-transform group-hover:translate-x-1" aria-hidden />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}