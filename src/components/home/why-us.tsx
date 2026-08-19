import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

const points = [
  {
    title: "Mulai dari yang paling berdampak",
    body: "Satu proses terbukti lebih berharga daripada sepuluh rencana. Kami mulai dari kemenangan kecil yang bisa diukur.",
  },
  {
    title: "Manusia tetap di pusat",
    body: "Kami merancang titik pengawasan manusia ke dalam setiap sistem. Otomasi mempercepat, bukan mengambil alih keputusan penting.",
  },
  {
    title: "Transparan soal biaya dan risiko",
    body: "Sebelum memulai, Anda tahu apa yang dibangun, berapa biayanya, dan di mana risikonya. Tidak ada kejutan di akhir.",
  },
  {
    title: "Diukur, bukan sekadar dibangun",
    body: "Kami menetapkan metrik keberhasilan di awal dan memantau hasilnya saat sistem berjalan — bukan setelah selesai.",
  },
];

export function WhyUs() {
  return (
    <section className="border-y border-line bg-surface-warm py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="flex flex-col gap-6">
              <h2 className="text-h1 max-w-[16ch] text-text">
                Banyak tim yang menjual AI. Kami memiliki prinsip yang sama
              </h2>
              <p className="max-w-[48ch] text-lg leading-relaxed text-muted">
                Pendekatan kami muncul dari satu keyakinan: teknologi sebaik apa
                pun tidak berguna jika tidak membantu bisnis Anda bertumbuh.
              </p>
              <div>
                <ButtonLink href="/tentang" variant="dark" withArrow>
                  Tentang kami
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-3 bg-paper p-7">
                  <span className="label text-accent">0{i + 1}</span>
                  <h3 className="text-h3 text-text">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}