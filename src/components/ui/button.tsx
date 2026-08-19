import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const button = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold tracking-tight transition-all duration-200 active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  {
    variants: {
      variant: {
        primary:
          "bg-accent px-6 py-3 text-paper hover:bg-accent-deep",
        dark: "bg-ink px-6 py-3 text-paper hover:bg-ink-soft",
        ghost:
          "border border-line-strong bg-transparent px-6 py-3 text-text hover:border-text hover:bg-surface",
        link: "p-0 text-accent hover:text-accent-deep underline-offset-4 hover:underline",
      },
      withArrow: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
} & VariantProps<typeof button> &
  Omit<ComponentProps<typeof Link>, "href">;

export function ButtonLink({
  href,
  children,
  variant,
  withArrow,
  className,
  external,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={button({ variant, withArrow, className })}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
      {withArrow ? <ArrowRight size={16} weight="bold" aria-hidden /> : null}
    </Link>
  );
}

export { button, cva };
export type { VariantProps };