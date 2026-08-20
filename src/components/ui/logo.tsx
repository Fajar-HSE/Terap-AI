import { site } from "@/lib/site";

/** Wordmark + geometric node mark. To be replaced with real brand logo later. */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className="grid size-8 shrink-0 place-items-center rounded-md text-paper"
        style={{ backgroundColor: dark ? "transparent" : undefined }}
        aria-hidden
      >
        <svg
          viewBox="0 0 32 32"
          className="size-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="7" fill={dark ? "#004a8e" : "#121715"} />
          <path
            d="M16 7 L25 12 L25 20 L16 25 L7 20 L7 12 Z"
            stroke={dark ? "#e6eef6" : "#f6f5f1"}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="16" r="2.6" fill="#e6eef6" />
          <path
            d="M16 7 V13.4"
            stroke="#e6eef6"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 12 L13.4 15.2"
            stroke="#e6eef6"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M25 20 L18.6 16.8"
            stroke="#e6eef6"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] font-bold tracking-tight ${
            dark ? "text-paper" : "text-text"
          }`}
        >
          {site.name.split(" ")[0]}
          <span className="text-accent"> AI</span>
        </span>
        <span className={`label mt-1 text-[9px] ${dark ? "text-paper/50" : "text-muted"}`}>
          {site.tagline}
        </span>
      </span>
    </span>
  );
}