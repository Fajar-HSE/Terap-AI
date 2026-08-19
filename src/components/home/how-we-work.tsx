import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const steps = [
  {
    title: "Pahami proses",
    body: "Kami memetakan alur kerja Anda, termasuk titik mostibah yang tidak pernah terlihat sebelumnya.",
    detail: "Workshop dengan pemilik proses, observasi lapangan, dan audit data.",
  },
  {
    title: "Prioritaskan peluang",
    body: "Semua kandidat otomasi dinilai dari dampak, biaya, dan risiko — bukan dari keren-tidaknya teknologi.",
    detail: "Roadmap 90 hari dengan hasil yang bisa diukur pada tahap pertama.",
  },
  {
    title: "Bangun & uji",
    body: "Prototipe dijalankan pada data nyata dan diawasi manusia sejak hari pertama. Unit sempit dulu, baru diperluas.",
    detail: "Human-in-the-loop dengan titik eskalasi dan jejak audit yang jelas.",
  },
  {
    title: "Ukur & perbaiki",
    body: "Hasil bisnis dipantau dengan metrik yang disepakati, lalu sistem disempurnakan secara berkelanjutan.",
    detail: "Sesi review berkala dan rencana pengembangan berikutnya.",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-ink py-20 text-paper md:py-28">
      <Container>
        <SectionHeader
          title="Cara kami bekerja: bertahap, dapat diukur, tetap diawasi"
          body="Tidak ada loncatan besar yang berisiko. Setiap tahap dibuktikan dahulu sebelum diperluas."
        />

        <ol className="mt-14 grid gap-12 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <li className="relative flex flex-col gap-4 border-t-2 border-accent pt-6">
                <span className="label text-accent-soft">
                  {String(i + 1).padStart(2, "0")} / 04
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-paper">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-paper/70">{s.body}</p>
                <p className="label mt-auto text-[10px] text-paper/40">{s.detail}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}