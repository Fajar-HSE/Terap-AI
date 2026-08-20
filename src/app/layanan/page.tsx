import type { Metadata } from "next";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/home/cta-band";
import { PRIMARY_CTA } from "@/lib/site";

const FEATURED_SLUGS = ["training", "automation"];

export const metadata: Metadata = {
  title: "Layanan — Konsultasi, Otomasi, Training & Adopsi AI",
  description:
    "Dari otomasi administrasi pelatihan, implementasi AI agent, hingga training & adopsi untuk tim Anda — layanan AI yang mengantar dari peluang ke hasil yang terukur.",
};

export default function ServicesPage() {
  const featured = services.filter((s) => FEATURED_SLUGS.includes(s.slug));
  const rest = services.filter((s) => !FEATURED_SLUGS.includes(s.slug));

  return (
    <>
      <PageHeader
        eyebrow="Layanan"
        title="Layanan yang mengantar dari peluang ke hasil"
        body="Untuk lembaga pelatihan & sertifikasi, dua layanan ini paling sering menjadi titik awal. Layanan pendukung lainnya kami susun di bawah ini."
        breadcrumb={[{ label: "Layanan" }]}
      />

      <div className="bg-paper">
        <Container className="py-16 md:py-24">
          <p className="label mb-8 text-accent-warm">Paling sering dibutuhkan</p>
          <div className="grid gap-6 lg:grid-cols-2">
            {featured.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.slug} delay={i * 0.06}>
                  <article
                    id={svc.slug}
                    className="flex h-full scroll-mt-28 flex-col gap-6 rounded-lg border border-line border-t-2 border-t-accent-warm bg-surface p-8 shadow-panel md:p-10"
                  >
                    <div className="flex items-center gap-4">
                      <span className="grid size-12 place-items-center rounded-lg bg-accent-soft">
                        <Icon size={24} weight="regular" className="text-accent-deep" aria-hidden />
                      </span>
                      <span className="label text-muted">
                        {String(i + 1).padStart(2, "0")} / 02
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-h1 text-text">{svc.name}</h2>
                      <p className="text-lg leading-relaxed text-muted">{svc.summary}</p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-lg border border-line bg-paper p-5">
                      <p className="label text-accent">Masalah yang diselesaikan</p>
                      <p className="text-sm leading-relaxed text-muted">{svc.problem}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="label text-muted">Dampak bisnis</p>
                      <p className="text-base leading-relaxed text-text">{svc.impact}</p>
                    </div>
                    <div className="flex flex-col gap-3 border-t border-line pt-5">
                      <p className="label text-muted">Deliverables</p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {svc.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-2">
                      <ButtonLink href="/kontak" withArrow>
                        {PRIMARY_CTA}
                      </ButtonLink>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </div>

      <section className="border-y border-line bg-surface">
        <Container className="py-16 md:py-24">
          <SectionHeader
            eyebrow="Layanan lainnya"
            title="Tambahan yang kami sediakan bila dibutuhkan"
            body="Layanan berikut umumnya menyusul setelah dua layanan utama berjalan. Buka untuk melihat detailnya."
          />

          <div className="mt-12 flex flex-col">
            {rest.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <details key={svc.slug} className="group border-t border-line last:border-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-4">
                      <span className="label text-muted">{String(i + 3).padStart(2, "0")}</span>
                      <span className="grid size-10 place-items-center rounded-lg bg-accent-soft">
                        <Icon size={20} weight="regular" className="text-accent-deep" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-h3 text-text">{svc.name}</span>
                        <span className="block text-sm text-muted">{svc.summary}</span>
                      </span>
                    </span>
                    <CaretDown
                      size={20}
                      weight="bold"
                      className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <div className="grid gap-6 pb-8 md:grid-cols-2 md:gap-12 md:pl-[3.25rem]">
                    <div className="flex flex-col gap-2">
                      <p className="label text-accent">Masalah yang diselesaikan</p>
                      <p className="text-sm leading-relaxed text-muted">{svc.problem}</p>
                      <p className="label mt-4 text-muted">Dampak bisnis</p>
                      <p className="text-sm leading-relaxed text-text">{svc.impact}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="label text-muted">Deliverables</p>
                      <ul className="grid gap-2">
                        {svc.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2">
                        <ButtonLink href="/kontak" variant="ghost" withArrow>
                          {PRIMARY_CTA}
                        </ButtonLink>
                      </div>
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
