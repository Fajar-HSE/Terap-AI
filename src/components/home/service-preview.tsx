import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function ServicePreview() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Layanan"
          title="Layanan yang mengantar Anda dari peluang ke hasil"
          body="Tidak setiap masalah membutuhkan teknologi yang sama. Kami memilih pendekatan sesuai tahap dan skala bisnis Anda."
          action={{ label: "Lihat semua layanan", href: "/layanan" }}
        />

        <div className="mt-14 grid grid-cols-1 border border-line bg-surface sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Reveal
                key={svc.slug}
                delay={(i % 4) * 0.05}
                className={
                  i % 4 !== 0 ? "border-t border-line sm:border-t-0 sm:border-l" : "border-t border-line sm:border-t-0"
                }
              >
                <Link
                  href={`/layanan#${svc.slug}`}
                  className="group flex h-full flex-col gap-5 p-6 transition-colors hover:bg-surface-warm"
                >
                  <span className="flex items-center justify-between">
                    <Icon
                      size={26}
                      weight="regular"
                      className="text-accent"
                      aria-hidden
                    />
                    <ArrowRight
                      size={15}
                      className="text-muted opacity-0 transition-all group-hover:translate-x-1 group-hover:text-accent group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                  <span className="flex flex-col gap-2">
                    <h3 className="text-h3 text-text">{svc.name}</h3>
                    <p className="text-sm leading-relaxed text-muted">{svc.summary}</p>
                  </span>
                  <span className="label mt-auto text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}