import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { SECONDARY_CTA } from "@/lib/site";

const problems = [
  {
    title: "Tim tenggelam dalam pekerjaan berulang",
    body: "Input data, rekap, dan follow-up rutin menyita jam kerja yang seharusnya untuk melayani dan bertumbuh.",
  },
  {
    title: "Respons pelanggan yang lambat dan tidak konsisten",
    body: "Pertanyaan dari banyak kanal tidak terjawab cepat, dan kualitas jawaban bergantung mood individu.",
  },
  {
    title: "Proses bergantung pada ingatan segelintir orang",
    body: "Pengetahuan kritis tersimpan di kepala tim, bukan di sistem — berisiko ketika mereka pergi.",
  },
  {
    title: "Data tersebar, keputusan tertunda",
    body: "Informasi untuk keputusan tersebar di spreadsheet dan aplikasi yang tidak terhubung.",
  },
];

export function Problems() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="flex flex-col items-start gap-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="label text-accent">01 · Masalah</p>
              <h2 className="text-h1 mt-4 max-w-[18ch] text-text">
                Transformasi AI gagal ketika dimulai dari teknologi
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[52ch] text-lg leading-relaxed text-muted">
                Kami memulai dari sisi yang sebaliknya: memahami proses yang
                nyata, menemukan titik yang paling membebani, baru memilih
                teknologi yang tepat — sekecil dan serumit apa pun skalanya.
              </p>
              <div className="mt-8">
                <ButtonLink href="/solusi" variant="ghost" withArrow>
                  {SECONDARY_CTA}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col divide-y divide-line border-y border-line">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="group flex gap-6 py-7 transition-colors hover:bg-surface-warm/40 md:gap-10">
                  <span className="label pt-1 text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-h3 text-text">{p.title}</h3>
                    <p className="max-w-[52ch] text-base leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}