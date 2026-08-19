"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
} & ComponentProps<typeof motion.div>;

/** Scroll-triggered reveal. Honours prefers-reduced-motion. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}