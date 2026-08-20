"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/ui/logo";
import { nav, PRIMARY_CTA } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/90 backdrop-blur-md"
          : "bg-paper"
      }`}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1240px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" aria-label="Beranda Terap AI" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "text-text"
                  : "text-muted hover:text-text"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/kontak"
            aria-label={PRIMARY_CTA}
            className="hidden rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-deep lg:inline-flex"
          >
            Konsultasi
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="inline-flex size-10 items-center justify-center rounded-md border border-line bg-surface text-text transition-colors hover:border-line-strong lg:hidden"
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Menu seluler"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-md px-3 py-3 text-base font-medium ${
                      pathname === item.href
                        ? "bg-accent-soft text-accent-deep"
                        : "text-text hover:bg-surface-warm"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/kontak"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-md bg-accent px-4 py-3 text-base font-semibold text-paper"
                >
                  {PRIMARY_CTA}
                </Link>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}