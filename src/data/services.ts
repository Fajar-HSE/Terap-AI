import type { Icon } from "@phosphor-icons/react";
import {
  CompassRose,
  Graph,
  Gauge,
  Robot,
  ArrowsClockwise,
  PlugsConnected,
  GraduationCap,
  MapTrifold,
} from "@phosphor-icons/react/dist/ssr";

export type Service = {
  slug: string;
  icon: Icon;
  name: string;
  summary: string;
  problem: string;
  impact: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "consulting",
    icon: CompassRose,
    name: "AI Strategy Consulting",
    summary:
      "Peta prioritas AI yang realistis untuk bisnis Anda — bukan daftar buzzword.",
    problem:
      "Banyak perusahaan tertarik ke AI, tetapi bingung mulai dari mana dan takut salah investasi.",
    impact:
      "Portofolio prioritas yang jelas, roadmap 6–18 bulan, dan estimasi dampak untuk tiap inisiatif.",
    deliverables: [
      "AI opportunity mapping",
      "Business case & ROI estimate",
      "Transformasi roadmap 6–18 bulan",
      "Prioritas berdasarkan dampak & kesiapan",
    ],
  },
  {
    slug: "assessment",
    icon: Gauge,
    name: "AI Readiness Assessment",
    summary:
      "Audit data, proses, dan kemampuan organisasi Anda terhadap kesiapan AI.",
    problem:
      "Organisasi menanam AI tanpa tahu apakah fondasi data dan prosesnya sudah siap.",
    impact:
      "Pemahaman objektif atas gap dan langkah konkret untuk mencapai kondisi siap-adopsi.",
    deliverables: [
      "Data & infrastruktur audit",
      "Proses maturity scorecard",
      "Kesiapan SDM & tata kelola",
      "Rekomendasi bertahap",
    ],
  },
  {
    slug: "automation",
    icon: ArrowsClockwise,
    name: "AI Automation",
    summary:
      "Otomatisasi pekerjaan berulang yang menghabiskan waktu tim Anda.",
    problem:
      "Tim tenggelam dalam tugas manual berulang yang justru bisa ditangani sistem.",
    impact:
      "Jam kerja yang nilainya bisa dialihkan, sampai 60–80% dari proses rutin terpilih.",
    deliverables: [
      "Pemetaan proses yang layak diotomasi",
      "Automasi end-to-end",
      "Monitoring & penanganan kegagalan",
      "Dokumentasi proses",
    ],
  },
  {
    slug: "agent",
    icon: Robot,
    name: "AI Agent Implementation",
    summary:
      "Asisten AI yang bekerja nyata di workflow Anda — dari resume hingga eksekusi.",
    problem:
      "Anda ingin AI yang tidak hanya menjawab pertanyaan, tetapi melakukan pekerjaan.",
    impact:
      "Tugas kompleks yang dijalankan secara mandiri dengan supervise batas yang jelas.",
    deliverables: [
      "Design workflow & agent routing",
      "Agent dengan tool integration",
      "Governance & human-in-the-loop",
      "Evaluasi performa berkala",
    ],
  },
  {
    slug: "process",
    icon: Graph,
    name: "Business Process Automation",
    summary:
      "Perampingan alur kerja lintas departemen dengan teknologi yang sesuai.",
    problem:
      "Alur manual yang berantai dan rawan error memperlambat layanan ke pelanggan.",
    impact:
      "Lead time singkat, error berkurang, dan lintasan proses yang bisa diaudit.",
    deliverables: [
      "As-is & to-be process mapping",
      "Automasi antar-sistem",
      "Approval & exception handling",
      "SLA dan laporan proses",
    ],
  },
  {
    slug: "integration",
    icon: PlugsConnected,
    name: "AI Integration",
    summary:
      "Integrasi AI ke sistem yang sudah Anda pakai — minim gangguan operasional.",
    problem:
      "Sistem lama (ERP, CRM, spreadsheet) belum saling bicara dan sulit disambungkan AI.",
    impact:
      "AI bekerja di atas data yang sudah ada, tanpa migrasi besar-besaran yang berisiko.",
    deliverables: [
      "Integrasi dengan sistem existing",
      "Data pipeline yang aman",
      "API & penanganan error",
      "Dokumentasi teknis",
    ],
  },
  {
    slug: "training",
    icon: GraduationCap,
    name: "Training & AI Adoption",
    summary:
      "Tim Anda paham dan percaya diri memakai AI — adopsi tidak menggantung pada konsultan.",
    problem:
      "Solusi dibangun tetapi tidak dipakai karena tim tidak dilibatkan sejak awal.",
    impact:
      "Kepemilikan internal atas sistem AI dan adopsi yang bertahan.",
    deliverables: [
      "Workshop role-based",
      "Playbook penggunaan",
      "Pendampingan setelah go-live",
      "Champion program",
    ],
  },
  {
    slug: "roadmap",
    icon: MapTrifold,
    name: "Roadmap & Pendampingan",
    summary:
      "Bimbingan berkelanjutan agar transformasi AI berjalan sesuai rencana.",
    problem:
      "Proyek berjalan sendiri setelah konsultan pergi dan mulai melenceng.",
    impact:
      "Kontrol kualitas, review berkala, dan koreksi arah yang cepat.",
    deliverables: [
      "Review berkala (bulanan/kuartalan)",
      "Audit hasil & KPI",
      "Prioritas ulang roadmap",
      "Eskalasi risiko",
    ],
  },
];