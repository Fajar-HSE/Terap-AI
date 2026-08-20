import type { Icon } from "@phosphor-icons/react";
import {
  FileText,
  Funnel,
  ChatCircleText,
  Database,
  Question,
  Wrench,
  BookOpen,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";

export type Solution = {
  slug: string;
  icon: Icon;
  problem: string;
  outcome: string;
  industries: string[];
  prompt: string;
};

/** Diorganisasi berdasarkan masalah lembaga pelatihan & sertifikasi, bukan teknologi. */
export const solutions: Solution[] = [
  {
    slug: "proposal-pelatihan",
    icon: FileText,
    problem: "Menyusun proposal pelatihan & penawaran sertifikasi memakan waktu",
    outcome:
      "Dari brief singkat klien, AI menyusun draf proposal dan penawaran sertifikasi yang rapi — tinggal Anda review dan kirim, bukan mulai dari nol.",
    industries: ["Lembaga Pelatihan", "Sertifikasi", "BNSP"],
    prompt: "Draft proposal pelatihan",
  },
  {
    slug: "riset-klien",
    icon: Funnel,
    problem: "Menemukan perusahaan yang benar-benar butuh pelatihan & sertifikasi",
    outcome:
      "Riset dan pemfilteran calon klien berjalan otomatis berdasarkan kebutuhan kompetensi — daftar prospek yang relevan, bukan daftar acak.",
    industries: ["Lembaga Pelatihan", "HR", "Korporasi"],
    prompt: "Riset calon klien",
  },
  {
    slug: "follow-up-peserta",
    icon: ChatCircleText,
    problem: "Peserta yang ragu tidak kunjung mendaftar",
    outcome:
      "Follow-up otomatis dan personal menjaga calon peserta tetap termonitor hingga mendaftar — tanpa Anda mengejar satu per satu.",
    industries: ["Peserta", "Lembaga Pelatihan"],
    prompt: "Follow-up peserta",
  },
  {
    slug: "database-sertifikasi",
    icon: Database,
    problem: "Data peserta & status sertifikat tersebar dan sulit dilacak",
    outcome:
      "Database peserta dan pelacakan status sertifikat terpusat — tahu siapa lulus, siapa perlu refresh, dan kapan sertifikat jatuh tempo.",
    industries: ["Sertifikasi", "Lembaga Pelatihan"],
    prompt: "Database sertifikasi",
  },
  {
    slug: "tanya-jawab-peserta",
    icon: Question,
    problem: "Calon peserta bertanya berulang di luar jam kerja",
    outcome:
      "Asisten AI menjawab pertanyaan umum calon peserta 24/7 — jadwal, persyaratan, biaya — dan meneruskan yang kompleks ke tim Anda.",
    industries: ["Peserta", "Lembaga Pelatihan"],
    prompt: "Tanya-jawab calon peserta",
  },
  {
    slug: "administrasi-pendaftaran",
    icon: Wrench,
    problem: "Pendaftaran & dokumen sertifikat ditangani manual",
    outcome:
      "Formulir pendaftaran dan dokumen sertifikat diproses otomatis dengan jejak audit — mengurangi salah input dan waktu administrasi.",
    industries: ["Administrasi", "Sertifikasi"],
    prompt: "Otomasi pendaftaran",
  },
  {
    slug: "asisten-kurikulum",
    icon: BookOpen,
    problem: "Kurikulum & standar kompetensi sulit diakses tim",
    outcome:
      "Standar kompetensi, kurikulum, dan SOP menjadi asisten internal yang menjawab pertanyaan tim secara akurat dan terverifikasi.",
    industries: ["Lembaga Pelatihan", "Sertifikasi"],
    prompt: "Asisten kurikulum",
  },
  {
    slug: "evaluasi-pelatihan",
    icon: TrendUp,
    problem: "Evaluasi & laporan hasil pelatihan memakan waktu",
    outcome:
      "Rekap evaluasi peserta dan laporan kelayakan sertifikasi tersaji otomatis — membantu pengambilan keputusan yang lebih cepat.",
    industries: ["Lembaga Pelatihan", "Sertifikasi"],
    prompt: "Evaluasi pelatihan",
  },
];
