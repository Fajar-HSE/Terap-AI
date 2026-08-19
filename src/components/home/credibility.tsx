import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    title: "Menghasilkan, bukan merekomendasikan",
    body: "Kami menangani implementasi hingga sistem berjalan — bukan sekadar menyodorkan slide strategi.",
  },
  {
    title: "Skala yang realistis",
    body: "Pendekatan berbeda untuk UMKM dan enterprise, dengan dampak yang bisa diperhitungkan sejak awal.",
  },
  {
    title: "Berpusat pada hasil bisnis",
    body: "Setiap keputusan teknologi diukur dari pengaruhnya terhadap pelanggan, biaya, dan kecepatan kerja.",
  },
];

export function Credibility() {
  return (
    <section className="border-b border-line bg-surface">
      <Container>
        <Reveal>
          <div className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {pillars.map((p, i) => (
              <div key={p.title} className="flex flex-col gap-3 py-8 pr-4 md:px-8 md:py-14 md:first:pl-0 md:last:pr-0">
                <span className="label text-muted">0{i + 1}</span>
                <h3 className="text-lg font-semibold tracking-tight text-text md:text-xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {p.title}
                </h3>
                <p className="max-w-[40ch] text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}