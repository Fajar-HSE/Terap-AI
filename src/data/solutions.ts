import type { Icon } from "@phosphor-icons/react";
import {
  Lightning,
  ChatCircleText,
  Funnel,
  Question,
  Wrench,
  FileText,
  TrendUp,
  Timer,
} from "@phosphor-icons/react/dist/ssr";

export type Solution = {
  slug: string;
  icon: Icon;
  problem: string;
  outcome: string;
  industries: string[];
  prompt: string;
};

/** Diorganisasi berdasarkan masalah bisnis, bukan teknologi. */
export const solutions: Solution[] = [
  {
    slug: "automate-repetitive",
    icon: Timer,
    problem: "Menghilangkan pekerjaan berulang yang menyita waktu tim",
    outcome:
      "Proses rutin berjalan otomatis dengan supervise manusia pada titik kritis — tim fokus pada pekerjaan bernilai tinggi.",
    industries: ["Operasi", "Administrasi", "F&B"],
    prompt: "Otomasi proses berulang",
  },
  {
    slug: "customer-response",
    icon: ChatCircleText,
    problem: "Memberikan respons pelanggan yang cepat dan konsisten",
    outcome:
      "Asisten AI menangani pertanyaan umum 24/7, eskalasi ke manusia terjadi otomatis saat konteks kompleks.",
    industries: ["Retail", "E-commerce", "Jasa"],
    prompt: "Automasi layanan pelanggan",
  },
  {
    slug: "lead-qualification",
    icon: Funnel,
    problem: "Mengotomatiskan kualifikasi dan follow-up prospek",
    outcome:
      "Setiap lead terkualifikasi otomatis, direspons cepat, dan diarahkan ke sales di waktu yang tepat.",
    industries: ["Sales", "B2B", "Distribusi"],
    prompt: "Automasi kualifikasi prospek",
  },
  {
    slug: "knowledge-assistant",
    icon: Question,
    problem: "Membuat pengetahuan internal dapat diakses semua orang",
    outcome:
      "Data know-how perusahaan (manual, SOP, dokumen) menjadi asisten yang menjawab pertanyaan tim secara akurat.",
    industries: ["Manufaktur", "Keuangan", "Korporasi"],
    prompt: "Asisten pengetahuan internal",
  },
  {
    slug: "document-processing",
    icon: FileText,
    problem: "Memproses dokumen dan formulir tanpa input tangan",
    outcome:
      "Faktur, kontrak, dan formulir diekstrak otomatis ke sistem — akurasi tinggi, jejak audit tersimpan.",
    industries: ["Keuangan", "Logistik", "Administrasi"],
    prompt: "Pemrosesan dokumen otomatis",
  },
  {
    slug: "sales-intelligence",
    icon: TrendUp,
    problem: "Mengubah data pasar dan pelanggan menjadi insight penjualan",
    outcome:
      "Ringkasan kompetitor, tren, dan skor peluang tersaji otomatis untuk keputusan sales yang lebih tajam.",
    industries: ["Sales", "Corporate", "Startup"],
    prompt: "Sales intelligence AI",
  },
  {
    slug: "marketing-automation",
    icon: Lightning,
    problem: "Menghasilkan konten dan kampanye dengan langkah lebih sedikit",
    outcome:
      "Ide, drafting, dan personalisasi kampanye dipercepat — tetap melewati review manusia dan brand guideline.",
    industries: ["Marketing", "UMKM", "Agen"],
    prompt: "Automasi pemasaran",
  },
  {
    slug: "operational-automation",
    icon: Wrench,
    problem: "Menambal bottleneck operasional lintas departemen",
    outcome:
      "Titik yang paling membebani operasional diidentifikasi dan diperbaiki secara bertahap dengan dampak yang terukur.",
    industries: ["Operasi", "Manufacturing", "Layanan"],
    prompt: "Optimasi operasional",
  },
];