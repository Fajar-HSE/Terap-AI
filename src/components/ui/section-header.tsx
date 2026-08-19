import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

/**
 * Section header. Rules (design.md §EYEBROW_RESTRAINT):
 * eyebrow usage is capped at 1 per 3 sections — pages must respect this budget.
 */
export function SectionHeader({
  eyebrow,
  title,
  body,
  action,
  layout = "default",
  index,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  action?: { label: string; href: string; external?: boolean };
  layout?: "default" | "narrow";
  index?: string;
}) {
  return (
    <Reveal className="relative">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div
          className={`flex flex-col gap-4 ${
            layout === "narrow" ? "max-w-[46ch]" : "max-w-[56ch]"
          }`}
        >
          {eyebrow ? (
            <p className="label text-accent">
              {index ? (
                <>
                  <span className="text-muted">{index}</span> · {eyebrow}
                </>
              ) : (
                eyebrow
              )}
            </p>
          ) : null}
          <h2 className="text-h2 text-text">{title}</h2>
          {body ? (
            <p className="max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
              {body}
            </p>
          ) : null}
        </div>
        {action ? (
          <Link
            href={action.href}
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:text-accent-deep hover:underline"
            {...(action.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {action.label}
            {action.external ? (
              <ArrowUpRight
                size={15}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            ) : (
              <ArrowRight
                size={15}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            )}
          </Link>
        ) : null}
      </div>
    </Reveal>
  );
}