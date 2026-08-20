export const site = {
  name: "Terap AI",
  legalName: "Terap AI",
  tagline: "AI untuk Lembaga Pelatihan & Sertifikasi",
  url: "https://aibisnis.web.id",
  description:
    "Konsultasi strategi dan implementasi AI untuk UMKM hingga enterprise. Kami membantu bisnis menemukan proses yang layak diotomatisasi — lalu mengubahnya menjadi sistem yang benar-benar bekerja.",
  contact: {
    email: "halo@aibisnis.web.id",
    phone: "+62 853 2888 35511",
    whatsapp: "https://wa.me/6285328883511",
    city: "Yogyakarta, Indonesia",
  },
} as const;

export const nav = [
  { label: "Layanan", href: "/layanan" },
  { label: "Solusi", href: "/solusi" },
  { label: "Studi Kasus", href: "/kisah-sukses" },
  { label: "Wawasan", href: "/wawasan" },
  { label: "Tentang", href: "/tentang" },
] as const;

export const PRIMARY_CTA = "Kirim Brief, Dapat Draf Proposal";
export const SECONDARY_CTA = "Lihat Solusi AI";