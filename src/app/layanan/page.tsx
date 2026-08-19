import type { Metadata } from "next";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/home/cta-band";
import { PRIMARY_CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Layanan — Konsultasi, Assessment, Otomasi & Training AI",
  description:
    "Dari AI Readiness Assessment, strategi, automasi, hingga training — layanan AI yang mengantar Anda dari peluang ke hasil yang terukur.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Layanan"
        title="Layanan yang mengantar dari peluang ke hasil"
        body="Setiap bisnis berbeda, sehingga kami menyesuaikan layanan berdasarkan tahap, data, dan tujuan Anda — bukan memaksakan satu paket untuk semua."
        breadcrumb={[{ label: "Layanan" }]}
      />

      <div className="bg-paper">
        <Container className="py-16 md:py-24">
          <div className="flex flex-col divide-y divide-line border-t border-line">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.slug}>
                  <article
                    id={svc.slug}
                    className="grid scroll-mt-28 gap-8 py-10 md:grid-cols-[120px_1fr] md:gap-12 md:py-12"
                  >
                    <div className="flex items-start gap-4 md:flex-col md:gap-5">
                      <span className="label text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span className="grid size-11 place-items-center rounded-lg bg-accent-soft">
                        <Icon size={22} weight="regular" className="text-accent-deep" aria-hidden />
                      </span>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-h2 text-text">{svc.name}</h2>
                        <p className="text-lg leading-relaxed text-muted">{svc.summary}</p>
                        <div className="flex flex-col gap-2 rounded-lg border border-line bg-surface p-5">
                          <p className="label text-accent">Masalah yang diselesaikan</p>
                          <p className="text-sm leading-relaxed text-muted">{svc.problem}</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-5">
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
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </div>

      <section className="border-t border-line bg-surface">
        <Container className="py-16 md:py-20">
          <SectionHeader
            title="Belum yakin layanan mana yang dibutuhkan?"
            body="Tidak masalah. Konsultasi awal kami tanpa biaya dan tanpa komitmen — kami bantu Anda menemukan titik awal yang tepat."
            action={{ label: "Mulai diskusi", href: "/kontak" }}
          />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}