"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  MagnifyingGlass,
  Gear,
  ChartLineUp,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

const steps = [
  { icon: MagnifyingGlass, label: "Deteksi", desc: "Proses layak diotomasi" },
  { icon: ChartLineUp, label: "Strategi", desc: "Prioritas berbasis dampak" },
  { icon: Gear, label: "Eksekusi", desc: "Sistem berjalan dengan AI" },
  { icon: CheckCircle, label: "Ukur", desc: "Hasil bisnis terpantau" },
];

/** Diagram alur kerja ilustratif — bukan screenshoot produk. */
export function WorkflowMap() {
  const reduce = useReducedMotion();
  return (
    <div className="relative rounded-xl border border-ink-soft bg-ink p-6 text-paper shadow-panel md:p-8">
      <div className="absolute inset-0 rounded-xl grid-lines opacity-20" aria-hidden />

      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs font-semibold text-paper/70">
            Alur yang kami bangun bersama klien
          </p>
          <span className="label text-[9px] text-paper/40">ALUR IMPLEMENTASI</span>
        </div>

        <ol className="relative grid gap-8 sm:grid-cols-2">
          <span
            className="absolute left-[7px] top-2 bottom-2 w-px bg-paper/15 sm:hidden"
            aria-hidden
          />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.li
                key={s.label}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.12, duration: 0.5 }}
                className="relative flex gap-4 pl-1 sm:flex-col sm:gap-3"
              >
                <span className="relative z-10 mt-1 grid size-4 shrink-0 place-items-center sm:mt-0">
                  <span
                    className="absolute inset-0 rounded-full bg-accent/40"
                    style={{ animation: reduce ? undefined : "pulse-ring 2.4s ease-out infinite" }}
                  />
                  <span className="relative size-1.5 rounded-full bg-accent" />
                </span>
                <div className="flex gap-4 sm:gap-0 sm:flex-col">
                  <span className="flex items-center gap-2.5 sm:mb-2.5">
                    <Icon size={17} weight="bold" className="text-accent" aria-hidden />
                    <span className="text-sm font-semibold text-paper">
                      {String(i + 1).padStart(2, "0")} · {s.label}
                    </span>
                  </span>
                  <p className="text-xs leading-relaxed text-paper/55 sm:pl-7">
                    {s.desc}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>

        <div className="mt-8 flex items-center gap-3 rounded-lg border border-paper/10 bg-paper/5 px-4 py-3">
          <span className="size-2 shrink-0 rounded-full bg-success" aria-hidden />
          <p className="text-xs text-paper/70">
            Setiap keputusan penting tetap melewati manusia — AI mempercepat,
            manusia mengarahkan.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.6); opacity: 0.8; }
          70%, 100% { transform: scale(2.1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}