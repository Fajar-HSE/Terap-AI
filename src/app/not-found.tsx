import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70dvh] flex-col items-start justify-center gap-6">
      <p className="label text-accent">404</p>
      <h1 className="text-h1 max-w-[18ch] text-text">Halaman yang Anda cari tidak ditemukan</h1>
      <p className="max-w-[52ch] text-lg leading-relaxed text-muted">
        Alamat mungkin salah ketik atau konten sudah dipindahkan. Anda bisa
        kembali ke beranda atau menjelajahi solusi kami.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/" variant="dark">
          Kembali ke beranda
        </ButtonLink>
        <Link
          href="/solusi"
          className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          Lihat solusi AI kami
        </Link>
      </div>
    </Container>
  );
}