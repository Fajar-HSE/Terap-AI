# Terap AI — Design Direction

> Nama "Terap AI" adalah brand utama (diatur di `src/lib/site.ts`).

## Design Read

> *"Reading this as: B2B AI consulting company profile for founder/CEO/decision-maker (UMKM → enterprise), with a premium strategic-editorial language, leaning toward deep-ink + warm paper + single petroleum-teal accent, Space Grotesk + Manrope, restrained purposeful motion."*

**Dials:** `DESIGN_VARIANCE 6` / `MOTION_INTENSITY 5` / `VISUAL_DENSITY 3`

---

## PHASE 1 — Brand Direction

### A. Positioning
> "Kami membantu bisnis menemukan proses yang layak diotomatisasi dengan AI — lalu mengubahnya menjadi sistem yang benar-benar bekerja."

### B. Brand Personality
Professional, Intelligent, Strategic, Trustworthy, Human-centered, Practical, Premium.
Hindari: futuristik berlebihan, cyberpunk, neon, robot, playful, template startup.

### C. Color System — rasio 60/30/10
Palet ditujukan untuk kredibilitas B2B: **ink + paper + satu aksen petroleum-teal**.
Bukan purple-blue gradient, bukan neon, bukan brass/beige craft.

| Token | Light hex | Peran |
|---|---|---|
| `--ink` | `#121715` | Text utama, base gelap, surface gelap |
| `--ink-soft` | `#232A27` | Surface gelap terangkat |
| `--paper` | `#F6F5F1` | Background utama (warm neutral) |
| `--surface` | `#FFFFFF` | Card / panel |
| `--surface-warm` | `#EDEAE4` | Background tinted section |
| `--accent` | `#0E5F52` | Aksen tunggal (CTA, highlight) — petroleum teal |
| `--accent-deep` | `#0A4A40` | Hover / state aksen |
| `--accent-soft` | `#E3EFEA` | Tinted background aksen |
| `--text` | `#1B211E` | Text primer |
| `--text-muted` | `#5B635E` | Text sekunder |
| `--line` | `#E1DFD9` | Border / hairline |
| `--success` | `#1F7A5B` | Status sukses |
| `--warning` | `#B57918` | Peringatan |
| `--error` | `#B33327` | Error |

Psikologi: ink = kredibilitas & otoritas; paper = hangat & manusiawi; petroleum-teal = intelejensia, tenang, teknologi tanpa klise ungu.

### D. Typography — 2 font family
- **Space Grotesk** (display/h1–h3): karakter struktural, modern, sedikit geometris.
- **Manrope** (body/UI/button): sangat mudah dibaca, profesional, mendukung volume Indonesia.
- Skala: display 58–72 / h1 42–54 / h2 30–40 / h3 20–26 / body 16–17 / body-lg 18–19 / caption 13 / label 11 uppercase tracking-[0.14em].
- Body max-width `65ch`. Italic emphasis hanya dari **keluarga font yang sama** (Space Grotesk italic), beri `leading-[1.1]` + reserve untuk descender.

### E. Visual Language
- **Radius:** small 4, md 8 (button/input), lg 12 (panel), xl 20 (media). Tidak ada pill default.
- **Shadow:** 1 token hemat — hanya untuk panel terangkat/hover interactive. Hairline border sebagai penanda struktur, bukan shadow.
- **Icon:** Phosphor, stroke terstandar (`strokeWidth` konsisten), hanya dengan makna.
- **Imagery:** fotografi editorial grayscale + screenshot/komponen sistem nyata (workflow map). Placeholder picsum bertanda `[PLACEHOLDER]`.
- **Motion:** subtle, purposeful, fast. `prefers-reduced-motion` dihormati.

---

## PHASE 2 — Design System (ringkas)

- Tokens warna di atas diterjemahkan ke CSS variables + Tailwind v4 `@theme`.
- Spacing scale: 4/8/12/16/24/32/48/64/80/96/128.
- Container: `max-w-[1240px]`, gutter 24; mobile gutter 20.
- Komponen inti: Button (primary/ghost/link + states), Eyebrow (maks 1 per 3 section), SectionHeader, Navbar (≤72px, 1 baris), Footer, FeatureRow, StatBlock, CaseCard, ArticleCard, Testimonial, FAQ accordion, ContactForm, Modal-less (tidak perlu modal di MVP), breadcrumb.
- Anti-pattern yang dikunci: tanpa gradient ungu, tanpa glassmorphism, tanpa glow, tanpa blob, tanpa card-grid berulang, zigzag max 2 section beruntun, eyebrow maks 1/3.

---

## PHASE 3 — Information Architecture (sitemap)

```
/                     Home
/tentang              Tentang kami (filosofi, pendekatan, tim)
/layanan              Layanan (consulting, assessment, automation, agent, training)
/solusi               Solusi per masalah bisnis (bukan per teknologi)
/kisah-sukses         Studi kasus (Challenge → Approach → Implementation → Result)
/wawasan              Insights / artikel (Ghost CMS)
/wawasan/[slug]       Detail artikel + related
/kontak               Form konsultasi + info kontak
```

## PHASE 4 — UX Flow

`Visitor → Understand → Explore → Trust → Engage → Lead`
- Home memenangkan attention dengan positioning (bukan hype), lalu bukti → layanan → cara kerja → studi kasus → CTA.
- Setiap halaman memiliki 1 primary CTA (label konsisten: **"Konsultasikan Peluang AI"**) + 1 secondary.
- Form kontak mengumpulkan qualifying data (nama, perusahaan, ukuran, challenge) untuk routing lead.