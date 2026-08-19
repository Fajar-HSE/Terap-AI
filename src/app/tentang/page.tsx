import type { Metadata } from "next";
import {
  CompassRose,
  UsersThree,
  Lightbulb,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PageHeader } from "@/components/ui/page-header";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/home/cta-band";
import { PRIMARY_CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang — Mengapa Nexova ada",
  description:
    "Kami ada untuk menjembatani teknologi AI dan kebutuhan bisnis nyata — dengan pendekatan yang manusiawi, pragmatis, dan terukur.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Masalah dulu, teknologi kemudian",
    body: "Kami tidak menjual teknologi. Kami memulai dari proses yang mengganggu dan memilih solusi yang paling masuk akal untuk masalah itu.",
  },
  {
    icon: UsersThree,
    title: "Manusia di tengah transformasi",
    body: "Sistem AI yang paling kuat pun tidak berguna tanpa orang yang memakai dan mempercayainya. Adopsi adalah bagian dari desain.",
  },
  {
    icon: CompassRose,
    title: "Pragmatis dan bertahap",
    body: "Kami percaya pada kemenangan kecil yang terukur. Satu proses yang terbukti lebih berharga daripada sepuluh rencana besar.",
  },
  {
    icon: ShieldCheck,
    title: "Risiko dikelola, bukan diabaikan",
    body: "Data, keamanan, dan tata kelola diperlakukan sebagai bagian dari sistem sejak hari pertama — bukan tambahan di akhir.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang"
        title="Praktisi yang menjembatani AI dan kebutuhan bisnis nyata"
        body="Kami bekerja untuk UMKM, perusahaan menengah, dan enterprise — membantu mereka menemukan proses yang layak diotomatisasi, lalu mengubahnya menjadi sistem yang benar-benar bekerja."
        breadcrumb={[{ label: "Tentang" }]}
      />

      <section className="bg-surface">
        <Container className="py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <Reveal className="flex flex-col gap-6">
              <p className="label text-accent">Berdiri untuk satu alasan</p>
              <h2 className="text-h1 text-text">
                AI sering dijual sebagai produk. Kami menjualnya sebagai proses.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-muted">
                Hampir setiap minggu, kami melihat bisnis membeli perangkat AI
                yang mahal lalu gagal dipakai — karena tidak dimulai dari
                masalah yang nyata.
              </p>
              <p className="text-lg leading-relaxed text-text">
                Nexova ada untuk menjadi penyeimbang: konsultan teknologi yang
                berpikir seperti pemilik bisnis. Kami mengukur setiap rencana
                dari pengaruhnya terhadap pelanggan, biaya, dan kecepatan kerja
                — bukan dari kerumitan teknologinya.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Nama “Nexova” adalah placeholder desain dan belum merupakan
                identitas resmi. Profil tim dan data perusahaan akan dilengkapi
                dengan informasi nyata sebelum website diluncurkan.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface-warm">
        <Container className="py-16 md:py-24">
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={(i % 2) * 0.06}>
                  <div className="flex h-full flex-col gap-5 bg-paper p-8">
                    <span className="grid size-11 place-items-center rounded-lg bg-accent-soft">
                      <Icon size={22} weight="regular" className="text-accent-deep" aria-hidden />
                    </span>
                    <h3 className="text-h3 text-text">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{v.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 md:py-24">
          <Reveal className="max-w-[720px]">
            <p className="label text-accent">Tim</p>
            <h2 className="text-h1 mt-4 text-text">Bekerja dengan orang yang memahami konteks Anda</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Profil tim bersifat contoh pada prototype ini. Profil sesungguhnya
              akan ditambahkan sebelum peluncuran.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Penasihat Strategi AI", "Insinyur Otomasi", "Lead Adopsi & Training"].map(
              (role, i) => (
                <Reveal key={role} delay={i * 0.06}>
                  <div className="flex flex-col gap-3 rounded-lg border border-line bg-paper p-6">
                    <span
                      className="grid aspect-[4/3] w-full place-items-center rounded-md bg-surface-warm"
                      aria-hidden
                    >
                      <span className="label text-muted">FOTO TIM — PLACEHOLDER</span>
                    </span>
                    <h3 className="text-h3 text-text">{role}</h3>
                    <p className="text-sm text-muted">
                      Peran desain di tim transformasi AI. Isi dengan nama dan
                      profil asli.
                    </p>
                  </div>
                </Reveal>
              ),
            )}
          </div>

          <div className="mt-16 flex justify-center">
            <ButtonLink href="/kontak" withArrow>
              {PRIMARY_CTA}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}