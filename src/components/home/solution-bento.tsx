import Link from "next/link";
import { ArrowRight, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { solutions } from "@/data/solutions";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

function MiniPipeline({ problem, outcome }: { problem: string; outcome: string }) {
  return (
    <div className="mt-6 flex flex-col gap-2" aria-hidden>
      <div className="flex items-center justify-between gap-3 rounded-lg border border-paper/15 bg-paper/5 px-4 py-3">
        <span className="text-xs text-paper/70">{problem}</span>
        <CaretRight size={14} className="shrink-0 text-accent-soft" />
        <span className="text-xs text-paper/70">{outcome}</span>
      </div>
      <div className="text-center">
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="mx-auto text-accent">
          <path d="M0 6h22m0 0l-5-4m5 4l-5 4" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-accent px-4 py-3">
        <span className="text-xs font-semibold text-paper">Sistem berjalan & terukur</span>
        <span className="label text-[9px] text-paper/80">HUMAN-IN-THE-LOOP</span>
      </div>
    </div>
  );
}

export function SolutionBento() {
  const featured = solutions[0];
  const rest = solutions.slice(1, 6);

  return (
    <section className="border-y border-line bg-surface py-20 md:py-28">
      <Container>
        <Reveal className="max-w-[680px]">
          <h2 className="text-h1 text-text">
            Solusi yang kami susun dari masalah bisnis, bukan dari teknologi
          </h2>
          <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-muted">
            Setiap solusi dimulai dari satu pertanyaan sederhana: apa yang
            sebenarnya paling mengganggu operasional Anda hari ini?
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Link
              href={`/solusi#${featured.slug}`}
              className="group flex h-full flex-col justify-between gap-6 rounded-lg bg-ink p-6 text-paper transition-transform duration-300 hover:-translate-y-1 md:p-9"
            >
              <div className="flex flex-col gap-3">
                <span className="label text-accent-soft">Solusi unggulan</span>
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                  {featured.problem}
                </h3>
                <p className="max-w-[52ch] text-base leading-relaxed text-paper/70">
                  {featured.outcome}
                </p>
              </div>
              <MiniPipeline
                problem={featured.prompt}
                outcome="Hasil terukur"
              />
            </Link>
          </Reveal>

          {rest.map((s, i) => {
            const Icon = s.icon;
            const tinted = i % 2 === 1;
            return (
              <Reveal key={s.slug} delay={(i % 2) * 0.06}>
                <Link
                  href={`/solusi#${s.slug}`}
                  className={`group flex h-full flex-col gap-5 rounded-lg border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    tinted
                      ? "border-line bg-surface-warm"
                      : "border-line bg-surface"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-md bg-accent-soft">
                      <Icon size={20} weight="regular" className="text-accent-deep" aria-hidden />
                    </span>
                    <ArrowRight
                      size={15}
                      className="text-muted opacity-0 transition-all group-hover:translate-x-1 group-hover:text-accent group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                  <h3 className="text-h3 text-text">{s.problem}</h3>
                  <p className="mt-auto text-sm leading-relaxed text-muted">{s.outcome}</p>
                </Link>
              </Reveal>
            );
          })}

          <Reveal delay={0.08}>
            <Link
              href="/solusi"
              className="group flex h-full flex-col items-start justify-between gap-6 rounded-lg border border-dashed border-line-strong p-6 transition-colors hover:border-accent"
            >
              <span className="label text-muted">Solusi lainnya</span>
              <span className="flex flex-col gap-3">
                <span className="font-display text-xl font-semibold tracking-tight text-text">
                  Lihat delapan pola otomasi yang paling umum
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Buka halaman solusi
                  <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}