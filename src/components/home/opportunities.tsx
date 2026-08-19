"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Check } from "@phosphor-icons/react/dist/ssr";

const functions = [
  {
    id: "sales",
    label: "Penjualan",
    items: [
      {
        opportunity: "Kualifikasi lead otomatis",
        outcome:
          "Setiap prospek dinilai dan direspons cepat, sales fokus pada yang paling prospek.",
      },
      {
        opportunity: "Follow-up yang tidak terlewat",
        outcome:
          "Tindak lanjut konsisten dan terjadwal tanpa ketergantungan ingatan individu.",
      },
      {
        opportunity: "Ringkasan pipeline harian",
        outcome: "Kondisi deal dirangkum otomatis untuk keputusan mingguan yang cepat.",
      },
    ],
  },
  {
    id: "service",
    label: "Layanan Pelanggan",
    items: [
      {
        opportunity: "Respons 24/7 untuk pertanyaan umum",
        outcome: "Keluhan dan pertanyaan terlayani kapan pun dengan nada yang tetap manusiawi.",
      },
      {
        opportunity: "Eskalasi konteks yang benar",
        outcome: "Kasus kompleks berpindah ke manusia lengkap dengan konteks yang jelas.",
      },
      {
        opportunity: "Rangkuman percakapan",
        outcome: "Poin penting setiap interaksi tercatat otomatis untuk tim dan atasan.",
      },
    ],
  },
  {
    id: "operations",
    label: "Operasi & Admin",
    items: [
      {
        opportunity: "Pemrosesan dokumen otomatis",
        outcome: "Faktur, kontrak, dan formulir masuk ke sistem tanpa input manual.",
      },
      {
        opportunity: "Asisten pengetahuan internal",
        outcome: "SOP dan manual dapat diakses lewat tanya jawab dengan sumber yang tertelusur.",
      },
      {
        opportunity: "Automasi proses berantai",
        outcome: "Pekerjaan lintas departemen berjalan otomatis dengan audit trail lengkap.",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    items: [
      {
        opportunity: "Drafting kampanye lebih cepat",
        outcome: "Ide dan materi awal diproduksi cepat, tetap melewati review brand.",
      },
      {
        opportunity: "Personalisasi pesan",
        outcome: "Pesan disesuaikan segmen tanpa menambah beban kerja tim.",
      },
      {
        opportunity: "Insight dari data pasar",
        outcome: "Ringkasan tren dan kompetitor tersaji otomatis untuk strategi bulanan.",
      },
    ],
  },
];

export function Opportunities() {
  const [active, setActive] = useState(functions[0].id);
  const data = functions.find((f) => f.id === active) ?? functions[0];

  return (
    <section className="border-y border-line bg-surface py-20 md:py-28">
      <Container>
        <Reveal className="max-w-[720px]">
          <p className="label text-accent">02 · Peluang</p>
          <h2 className="text-h1 mt-4 text-text">
            Di mana AI paling sering menghasilkan dampak nyata
          </h2>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-muted">
            Pilih fungsi bisnis Anda, lalu lihat peluang yang paling umum kami
            temukan di lapangan.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal>
            <div
              className="flex flex-wrap gap-2 lg:flex-col lg:gap-3"
              role="tablist"
              aria-label="Fungsi bisnis"
            >
              {functions.map((f) => {
                const selected = f.id === active;
                return (
                  <button
                    key={f.id}
                    role="tab"
                    id={`tab-${f.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${f.id}`}
                    onClick={() => setActive(f.id)}
                    className={`min-w-[40%] flex-1 rounded-md border px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:min-w-0 lg:flex-none lg:px-5 lg:py-4 ${
                      selected
                        ? "border-ink bg-ink text-paper"
                        : "border-line bg-surface text-muted hover:border-line-strong hover:text-text"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              key={data.id}
              role="tabpanel"
              aria-labelledby={`tab-${data.id}`}
              className="border-t border-line"
            >
              <ul className="mt-2 flex flex-col divide-y divide-line">
                {data.items.map((item) => (
                  <li key={item.opportunity} className="grid gap-1 py-5 sm:grid-cols-2 sm:gap-8">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft">
                        <Check size={12} weight="bold" className="text-accent-deep" aria-hidden />
                      </span>
                      <h3 className="text-h3 text-text">{item.opportunity}</h3>
                    </div>
                    <p className="sm:pt-1 text-base leading-relaxed text-muted">{item.outcome}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}