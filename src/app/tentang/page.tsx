import type { Metadata } from "next";
import {
  User,
  Lightbulb,
  UsersThree,
  CompassRose,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PageHeader } from "@/components/ui/page-header";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/home/cta-band";
import { PRIMARY_CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang — Fajar & Terap AI",
  description:
    "Terap AI dijalankan oleh Fajar, praktisi HSE yang bergerak di dunia pelatihan & sertifikasi. Kami membantu lembaga pelatihan mengambil alih pekerjaan administrasi berulang dengan AI.",
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
        title="Fajar — praktisi HSE yang membantu lembaga pelatihan bekerja lebih ringan"
        body="Terap AI lahir dari pengalaman panjang di dunia pelatihan & sertifikasi. Bukan agen AI umum, tetapi partner yang paham konteks lembaga Anda."
        breadcrumb={[{ label: "Tentang" }]}
      />

      <section className="bg-surface">
        <Container className="py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal className="flex flex-col gap-4">
              <div
                className="grid aspect-[4/5] w-full place-items-center rounded-xl border border-line bg-surface-warm"
                aria-hidden
              >
                <span className="flex flex-col items-center gap-3 text-muted">
                  <User size={40} weight="light" />
                  <span className="label text-center text-muted">
                    FOTO Fajar
                    <br />
                    — ganti dengan foto asli
                  </span>
                </span>
              </div>
              <p className="text-sm text-muted">
                Ganti kotak di atas dengan foto asli Anda (rasio 4:5, latar
                netral).
              </p>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-6">
              <p className="label text-accent">Di balik Terap AI</p>
              <h2 className="text-h1 text-text">
                AI sebaiknya mengambil alih pekerjaan belakang layar — bukan
                menggantikan hubungan dengan peserta.
              </h2>
              <p className="text-lg leading-relaxed text-muted">
                Saya, Fajar, telah lama bergerak di dunia pelatihan dan
                sertifikasi — melalui HSE SkillUp dan Studio P26. Dari sana saya
                melihat pola yang sama berulang: tim pelatihan kewalahan oleh
                pekerjaan administrasi, menyusun proposal, mengejar calon
                peserta, merapikan database sertifikat — hingga energi terbesar
                habis sebelum menyentuh hal yang paling penting, yaitu
                pembelajaran itu sendiri.
              </p>
              <p className="text-lg leading-relaxed text-text">
                Terap AI dibuat untuk itu. Kami menggunakan AI guna mengambil
                alih pekerjaan berulang di belakang layar, sehingga Anda bisa
                fokus pada peserta. Setiap engagement dimulai dari satu hal
                sederhana: kirim brief singkat, dapatkan draf proposal — tanpa
                biaya di awal dan tanpa komitmen.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Catatan: kredensial spesifik (sertifikasi, pengalaman, dan
                angka) akan dilengkapi pada kolom di atas sebelum website
                diluncurkan.
              </p>
              <div className="mt-2">
                <ButtonLink href="/kontak" withArrow>
                  {PRIMARY_CTA}
                </ButtonLink>
              </div>
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

      <CtaBand />
    </>
  );
}
