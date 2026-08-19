import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function PageHeader({
  eyebrow,
  title,
  body,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="border-b border-line bg-surface">
      <Container>
        <div className="flex flex-col gap-6 py-16 md:py-24">
          {breadcrumb ? (
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted">
              <Link href="/" className="hover:text-text">
                Beranda
              </Link>
              {breadcrumb.map((b) => (
                <span key={b.label} className="inline-flex items-center gap-1.5">
                  <CaretRight size={11} aria-hidden />
                  {b.href ? (
                    <Link href={b.href} className="hover:text-text">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-text">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          ) : null}
          <Reveal>
            <div className="flex max-w-[860px] flex-col gap-4">
              {eyebrow ? <p className="label text-accent">{eyebrow}</p> : null}
              <h1 className="text-h1 text-text">{title}</h1>
              {body ? (
                <p className="max-w-[62ch] text-lg leading-relaxed text-muted">{body}</p>
              ) : null}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}