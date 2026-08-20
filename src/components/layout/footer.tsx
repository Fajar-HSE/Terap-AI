import Link from "next/link";
import {
  EnvelopeSimple,
  MapPin,
  Phone,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/ui/logo";
import { site, PRIMARY_CTA } from "@/lib/site";

const footerGroups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Navigasi",
    links: [
      { label: "Layanan", href: "/layanan" },
      { label: "Solusi", href: "/solusi" },
      { label: "Studi Kasus", href: "/kisah-sukses" },
      { label: "Wawasan", href: "/wawasan" },
      { label: "Tentang", href: "/tentang" },
      { label: "Kontak", href: "/kontak" },
    ],
  },
  {
    title: "Layanan",
    links: [
      { label: "AI Readiness Assessment", href: "/layanan#assessment" },
      { label: "AI Strategy Consulting", href: "/layanan#consulting" },
      { label: "AI Automation", href: "/layanan#automation" },
      { label: "AI Agent Implementation", href: "/layanan#agent" },
      { label: "Training & Adoption", href: "/layanan#training" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper" id="footer">
      <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex max-w-sm flex-col gap-6">
            <Link href="/" aria-label="Beranda Terap AI">
              <Logo dark />
            </Link>
            <p className="text-sm leading-relaxed text-paper/70">
              Konsultasi strategi dan implementasi AI untuk lembaga pelatihan &
              sertifikasi. Kami membantu Anda dari menyusun proposal hingga
              mengelola database peserta — lalu mengubahnya menjadi sistem
              yang benar-benar bekerja.
            </p>
            <ul className="mt-2 flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2.5 text-paper/85">
                <EnvelopeSimple size={16} weight="bold" aria-hidden />
                <a href={`mailto:${site.contact.email}`} className="hover:underline">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-paper/85">
                <Phone size={16} weight="bold" aria-hidden />
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-paper/85">
                <MapPin size={16} weight="bold" aria-hidden />
                {site.contact.city}
              </li>
            </ul>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="label mb-5 text-paper/50">{group.title}</h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/85 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-paper/15 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-paper/50">
            © {new Date().getFullYear()} {site.legalName}. Seluruh hak cipta.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/kontak"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent-soft hover:text-paper"
            >
              {PRIMARY_CTA}
              <ArrowUpRight
                size={15}
                weight="bold"
                aria-hidden
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-paper/35">
          Studi kasus dan metrik pada prototype ini masih bersifat contoh dan
          wajib diganti dengan data nyata sebelum live.
        </p>
      </div>
    </footer>
  );
}