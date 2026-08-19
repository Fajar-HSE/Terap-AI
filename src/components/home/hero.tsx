"use client";

import { motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { WorkflowMap } from "./workflow-map";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const base = reduce ? {} : { opacity: 0, y: 20 };
  const anim = (delay: number) => ({
    initial: base,
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 -z-10 grid-lines-faint opacity-40" aria-hidden />
      <Container className="relative flex min-h-[calc(100dvh-68px)] flex-col justify-center py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col items-start gap-7">
            <motion.p
              {...anim(0)}
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-xs font-semibold text-muted"
            >
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              AI Consulting & Implementation
            </motion.p>

            <motion.h1
              {...anim(0.08)}
              className="text-display max-w-[16ch] text-text"
            >
              AI yang bekerja nyata untuk{" "}
              <em className="font-semibold not-italic text-accent">bisnis Anda</em>
            </motion.h1>

            <motion.p
              {...anim(0.16)}
              className="max-w-[46ch] text-lg leading-relaxed text-muted"
            >
              Konsultasi dan implementasi AI untuk UMKM hingga enterprise — dari
              menemukan peluang, hingga sistem yang benar-benar berjalan.
            </motion.p>

            <motion.div
              {...anim(0.24)}
              className="flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="/kontak" withArrow>
                {PRIMARY_CTA}
              </ButtonLink>
              <ButtonLink href="/solusi" variant="ghost">
                {SECONDARY_CTA}
              </ButtonLink>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="hidden md:block"
          >
            <WorkflowMap />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}