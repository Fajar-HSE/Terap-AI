import { EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { site, PRIMARY_CTA } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-accent text-paper">
      <Container>
        <div className="flex flex-col gap-10 py-16 md:py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
          <Reveal className="max-w-[640px]">
            <p className="label text-paper/70">Tinggal kirim brief</p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Ada satu proses yang sangat menguras waktu tim Anda?
            </h2>
            <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-paper/80">
              Ceritakan kepada kami. Pada sesi pertama, kami akan membantu Anda
              melihat apakah proses itu layak diotomatisasi dengan AI.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-3 lg:w-80">
            <a
              href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Kirim Brief: Peluang AI di Bisnis Saya")}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-paper px-6 py-4 text-sm font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5"
            >
              <EnvelopeSimple size={18} weight="bold" aria-hidden />
              {PRIMARY_CTA} via email
            </a>
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-paper/40 px-6 py-4 text-sm font-bold text-paper transition-colors hover:bg-paper/10"
            >
              <WhatsappLogo size={18} weight="bold" aria-hidden />
              Chat WhatsApp
            </a>
            <p className="text-center text-xs text-paper/70">Umumnya kami balas dalam satu hari kerja</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}