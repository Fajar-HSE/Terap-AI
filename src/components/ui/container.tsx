import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const container = cva("mx-auto w-full max-w-[1240px] px-5 md:px-8", {
  variants: {
    size: { default: "", narrow: "max-w-[860px]" },
  },
  defaultVariants: { size: "default" },
});

export function Container({
  className,
  size,
  children,
}: { className?: string; children: ReactNode } & VariantProps<typeof container>) {
  return <div className={container({ size, className })}>{children}</div>;
}