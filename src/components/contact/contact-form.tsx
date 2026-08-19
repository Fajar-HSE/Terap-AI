"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Check, WarningCircle, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";
import { solutions } from "@/data/solutions";

const sizeOptions = [
  "1–9 karyawan (UMKM)",
  "10–49 karyawan",
  "50–249 karyawan",
  "250+ karyawan (Enterprise)",
] as const;

const helpOptions = [
  "Masih menjelajah peluang AI",
  "Ingin menilai kesiapan AI",
  "Butuh otomasi proses tertentu",
  "Ingin membangun AI agent",
  "Butuh training & adopsi AI",
  "Lainnya",
] as const;

type FormState = "idle" | "error" | "success";

const empty = {
  name: "",
  company: "",
  email: "",
  phone: "",
  size: "",
  need: "",
  detail: "",
};

export function ContactForm({ topicSlug }: { topicSlug?: string }) {
  const topicLabel = useMemo(() => {
    const found = solutions.find((s) => s.slug === topicSlug);
    return found?.problem ?? "Umum — jelajah peluang AI";
  }, [topicSlug]);

  const [values, setValues] = useState({ ...empty, need: helpOptions[0] });
  const [errors, setErrors] = useState<Partial<typeof empty>>({});
  const [status, setStatus] = useState<FormState>("idle");

  function set<K extends keyof typeof empty>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<typeof empty> = {};
    if (!values.name.trim()) next.name = "Nama wajib diisi.";
    if (!values.company.trim()) next.company = "Nama perusahaan wajib diisi.";
    if (!values.email.trim()) next.email = "Email wajib diisi.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Format email tidak valid.";
    if (!values.phone.trim()) next.phone = "Nomor WhatsApp/telepon wajib diisi.";
    if (!values.detail.trim()) next.detail = "Ceritakan tantangan Anda secara singkat.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  const waMsg = useMemo(() => {
    const lines = [
      `Halo ${site.name}, saya ingin berkonsultasi.`,
      ``,
      `Topik: ${topicLabel}`,
      `Nama: ${values.name}`,
      `Perusahaan: ${values.company}`,
      `Email: ${values.email}`,
      `Kontak: ${values.phone}`,
      `Skala: ${values.size || "—"}`,
      `Kebutuhan: ${values.need}`,
      ``,
      `Tantangan: ${values.detail}`,
    ];
    return lines.join("\n");
  }, [values, topicLabel]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Konsultasi AI — ${values.company || "Prospek baru"}`);
    const body = encodeURIComponent(waMsg);
    return `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
  }, [waMsg, values.company]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("success");
  }

  const inputBase =
    "w-full rounded-md border border-line bg-surface px-4 py-3 text-sm text-text placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none";
  const labelBase = "label text-muted";
  const errClass = "text-sm text-error";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full flex-col justify-center gap-6 rounded-lg border border-line bg-surface p-8 md:p-10"
        role="status"
      >
        <span className="grid size-12 place-items-center rounded-full bg-accent-soft">
          <Check size={24} weight="bold" className="text-accent-deep" aria-hidden />
        </span>
        <div className="flex flex-col gap-2">
          <h2 className="text-h2 text-text">Terima kasih, {values.name.split(" ")[0]}.</h2>
          <p className="max-w-[52ch] text-base leading-relaxed text-muted">
            Detail Anda telah dirangkum di bawah. Pilih salah satu kanal untuk
            mengirimkannya — kami umumnya membalas dalam satu hari kerja.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`${site.contact.whatsapp}?text=${encodeURIComponent(waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
          >
            <WhatsappLogo size={18} weight="bold" aria-hidden />
            Kirim via WhatsApp
          </a>
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2.5 rounded-md border border-line-strong px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:border-text"
          >
            <EnvelopeSimple size={18} weight="bold" aria-hidden />
            Kirim via Email
          </a>
        </div>
        <p className="text-xs text-muted">
Catatan: form submit ini belum terhubung ke backend. Sambungkan
          form ini ke server/CRM Anda sebelum peluncuran.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-6 rounded-lg border border-line bg-surface p-6 md:p-8"
    >
      <div className="flex flex-col gap-2 border-b border-line pb-5">
        <p className="label text-accent">Form konsultasi</p>
        <h2 className="text-h3 text-text">Ceritakan tantangan Anda</h2>
        <p className="text-sm text-muted">
          Topik fokus: <span className="font-medium text-text">{topicLabel}</span>
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelBase}>Nama lengkap *</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            required
            className={inputBase}
            placeholder="Budi Santoso"
          />
          {errors.name ? <p className={errClass} role="alert">{errors.name}</p> : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className={labelBase}>Nama perusahaan *</label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
            required
            className={inputBase}
            placeholder="PT Contoh Sejahtera"
          />
          {errors.company ? <p className={errClass} role="alert">{errors.company}</p> : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelBase}>Email kantor *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            required
            className={inputBase}
            placeholder="nama@perusahaan.co.id"
          />
          {errors.email ? <p className={errClass} role="alert">{errors.email}</p> : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelBase}>WhatsApp / Telepon *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            required
            className={inputBase}
            placeholder="+62 8xx xxxx xxxx"
          />
          {errors.phone ? <p className={errClass} role="alert">{errors.phone}</p> : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="size" className={labelBase}>Ukuran perusahaan</label>
          <select
            id="size"
            name="size"
            value={values.size}
            onChange={(e) => set("size", e.target.value)}
            className={inputBase}
          >
            <option value="">Pilih rentang karyawan</option>
            {sizeOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="need" className={labelBase}>Kebutuhan Anda</label>
          <select
            id="need"
            name="need"
            value={values.need}
            onChange={(e) => set("need", e.target.value)}
            className={inputBase}
          >
            {helpOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="detail" className={labelBase}>Tantangan yang ingin Anda selesaikan *</label>
        <textarea
          id="detail"
          name="detail"
          rows={4}
          value={values.detail}
          onChange={(e) => set("detail", e.target.value)}
          required
          className={`${inputBase} resize-y`}
          placeholder="Contoh: tim Customer Service kami menghabiskan banyak waktu menjawab pertanyaan yang sama..."
        />
        {errors.detail ? <p className={errClass} role="alert">{errors.detail}</p> : null}
      </div>

      {status === "error" ? (
        <p className="flex items-center gap-2 rounded-md bg-warning/10 px-4 py-3 text-sm text-warning" role="alert">
          <WarningCircle size={17} weight="bold" aria-hidden />
          Periksa kembali kolom yang ditandai, lalu kirim ulang.
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
        >
          Kirim pertanyaan
        </button>
        <p className="text-xs text-muted">
          Kami tidak membagikan data Anda ke pihak ketiga.
        </p>
      </div>
    </form>
  );
}