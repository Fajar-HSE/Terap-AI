import type { Metadata } from "next";
import { EnvelopeSimple, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak — Konsultasikan Peluang AI di Bisnis Anda",
  description:
    "Diskusikan peluang AI untuk bisnis Anda. Konsultasi awal tanpa biaya dan tanpa komitmen.",
};

const channels = [
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: Phone,
    label: "Telepon",
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: "Chat langsung",
    href: site.contact.whatsapp,
    external: true,
  },
  {
    icon: MapPin,
    label: "Berbasis",
    value: site.contact.city,
    href: undefined,
  },
];

export default async function ContactPage({
  searchParams,
}: PageProps<"/kontak">) {
  const { topic } = await searchParams;
  const topicSlug = typeof topic === "string" ? topic : undefined;

  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Diskusikan peluang AI di bisnis Anda"
        body="Konsultasi awal tanpa biaya dan tanpa komitmen. Ceritakan satu proses yang paling menguras waktu tim Anda, dan kami bantu melihat apakah proses itu layak diotomatisasi."
        breadcrumb={[{ label: "Kontak" }]}
      />

      <section className="bg-paper">
        <Container className="py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="label text-accent">Cara lain menghubungi kami</p>
                <ul className="flex flex-col divide-y divide-line border-y border-line">
                  {channels.map((c) => {
                    const Icon = c.icon;
                    const content = (
                      <>
                        <Icon size={20} weight="bold" className="text-accent" aria-hidden />
                        <span>
                          <span className="block text-xs font-semibold text-muted">{c.label}</span>
                          <span className="block text-sm font-medium text-text">{c.value}</span>
                        </span>
                      </>
                    );
                    return (
                      <li key={c.label} className={c.href ? "" : "pointer-events-none"}>
                        {c.href ? (
                          <a
                            href={c.href}
                            {...(c.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="flex items-center gap-4 py-4 transition-colors hover:bg-surface-warm/40"
                          >
                            {content}
                          </a>
                        ) : (
                          <span className="flex items-center gap-4 py-4">{content}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <Reveal>
                <div className="flex flex-col gap-3 rounded-lg border border-line bg-surface p-6">
                  <p className="label text-accent">Cara kami merespons</p>
                  <p className="text-sm leading-relaxed text-muted">
                    Sesi awal bersifat menggali: kami bertanya, mendengar, dan
                    memberi penilaian objektif apakah AI memang solusi yang
                    tepat untuk masalah Anda — tanpa memaksa.
                  </p>
                  <p className="text-xs leading-relaxed text-muted">
                    Nama “Nexova”, email, dan nomor telepon di halaman ini
                    adalah placeholder. Ganti dengan data resmi sebelum live.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <ContactForm topicSlug={topicSlug} />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}