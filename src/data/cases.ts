export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  size: "UMKM" | "Enterprise";
  duration: string;
  challenge: string;
  approach: string;
  result: string;
  metricLabel?: string;
  metricValue?: string;
  /** Seluruh studi kasus pada prototype bersifat contoh — wajib diganti data nyata. */
  isSample: true;
};

export const cases: CaseStudy[] = [
  {
    slug: "distribution-b2b",
    client: "Distributor B2B (contoh)",
    industry: "Distribusi · Sales",
    size: "Enterprise",
    duration: "12 minggu",
    isSample: true,
    challenge:
      "Tim sales menghabiskan 40% waktu untuk input data manual dan follow-up prospek yang berulang. Lead lama tidak pernah dikejar kembali.",
    approach:
      "Kualifikasi lead otomatis dihubungkan ke CRM, ringkasan prospek harian dibuat AI, dan follow-up terpersonalisasi dikirim otomatis. Sales tetap memegang keputusan final pada deal.",
    result:
      "Waktu sales untuk administrasi berkurang drastis; proyeksi nilai pipeline di akhir tahun naik di atas target pertumbuhan.",
    metricLabel: "Estimasi pertumbuhan pipeline",
    metricValue: "+38%",
  },
  {
    slug: "umkm-customer-service",
    client: "Retail UMKM (contoh)",
    industry: "Retail · Layanan",
    size: "UMKM",
    duration: "6 minggu",
    isSample: true,
    challenge:
      "Owner kewalahan: pertanyaan dari marketplace dan WhatsApp menumpuk, respons lambat, banyak pesanan terabaikan.",
    approach:
      "Asisten AI menjawab pertanyaan umum di WhatsApp dengan ramah, lalu meneruskan yang kompleks ke tim. Katalog dan stok dijelaskan otomatis.",
    result:
      "Semua percakapan responsif; pesanan yang sebelumnya terlewat kini terlayani, tanpa menambah karyawan baru.",
    metricLabel: "Waktu respons",
    metricValue: "24 jam → 2 menit",
  },
  {
    slug: "manufacturing-documents",
    client: "Produsen menengah (contoh)",
    industry: "Manufaktur · Operasi",
    size: "Enterprise",
    duration: "10 minggu",
    isSample: true,
    challenge:
      "Ribuan dokumen mutu dan manual mesin tersimpan sebagai PDF yang tidak terstruktur. Teknisi kesulitan menemukan prosedur saat dibutuhkan.",
    approach:
      "Dokumen diproses menjadi basis pengetahuan terindex, asisten internal menjawab pertanyaan prosedur, dan versi dokumen selalu terverifikasi.",
    result:
      "Teknisi mendapatkan jawaban prosedur dalam hitungan detik dengan sumber yang dapat dilacak.",
    metricLabel: "Waktu pencarian prosedur",
    metricValue: "jam → <1 menit",
  },
];