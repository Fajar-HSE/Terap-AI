# Nexova AI — Website Company Profile (AI Consulting)

Website premium company profile untuk perusahaan jasa konsultasi & implementasi
AI (UMKM → enterprise). Dibangun dengan **Next.js 16 (App Router) + TypeScript +
Tailwind CSS v4 + Motion + Phosphor Icons**, dengan **Ghost CMS** sebagai headless
CMS untuk halaman wawasan.

> Nama **"Nexova"** adalah placeholder desain — ganti semua nilai brand di
> `src/lib/site.ts` sebelum production.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (lint + typecheck + prerender)
npm start          # menjalankan hasil build
```

## Struktur penting

```
src/
├─ app/                     # halaman (App Router)
│  ├─ page.tsx              # Home (11 section)
│  ├─ tentang/              # About
│  ├─ layanan/              # Services (8 layanan)
│  ├─ solusi/               # Solutions (8 pola masalah→solusi)
│  ├─ kisah-sukses/         # Case Studies (format Challenge→Approach→Result)
│  ├─ wawasan/ [+[slug]]    # Insights listing + detail artikel
│  └─ kontak/               # Kontak + form konversi
├─ components/
│  ├─ layout/               # Header, Footer
│  ├─ ui/                   # Button, Container, Reveal, SectionHeader, dll
│  ├─ home/                 # Section komponen Home
│  ├─ articles/             # ArticleCard
│  └─ contact/              # ContactForm
├─ data/                    # Konten contoh (services, solutions, cases, insights)
├─ lib/                     # site config, ghost client, tipe artikel
└─ app/globals.css          # Design tokens (desain system)
```

## Ghost CMS

Halaman `/wawasan` membaca artikel dari Ghost Content API. Konfigurasi via
environment (`cp .env.example .env.local`):

```bash
GHOST_CONTENT_URL=https://your-ghost-blog.example
GHOST_CONTENT_KEY=your-content-api-key
```

Jika belum dikonfigurasi, situs memakai artikel contoh dari `src/data/insights.ts`
(artikel ditandai `isSample`).

## Desain

Direction & design system lengkap: `docs/design-direction.md`. Tokens warna,
tipografi (Space Grotesk + Manrope), spacing, radius, dan shadow diterapkan di
`src/app/globals.css`.

## Sebelum live — checklist penggantian placeholders

- [ ] Nama brand, email, telepon, WhatsApp, kota di `src/lib/site.ts`
- [ ] Logo nyata (ganti `src/components/ui/logo.tsx`)
- [ ] Foto tim & studi kasus (slot berlabel "PLACEHOLDER" di halaman terkait)
- [ ] Data studi kasus, metrik, dan testimoni asli (`src/data/cases.ts`)
- [ ] Artikel asli di Ghost + env Ghost API
- [ ] Form kontak dihubungkan ke backend/CRM Anda
- [ ] Opengraph image & favicon sesuai brand (lihat `src/app/opengraph-image.tsx`)