import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------- Scroll reveal ---------- */

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

/* ---------- Eyebrow / section marker ---------- */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-soft",
        className,
      )}
    >
      <Crosshair />
      <span>{children}</span>
      <Crosshair />
    </div>
  );
}

function Crosshair() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className="size-3 shrink-0 text-dot">
      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1" />
      <circle cx="6" cy="6" r="1.6" fill="currentColor" />
    </svg>
  );
}

/* ---------- Bezel card ---------- */

export function Bezel({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div className={cn("bezel", className)}>
      <div className={cn("bezel-inner h-full p-6 sm:p-8", innerClassName)}>{children}</div>
    </div>
  );
}

/* ---------- Dot grid texture ---------- */

export function DotGrid({
  rows = 4,
  cols = 8,
  className,
  triangular = false,
}: {
  rows?: number;
  cols?: number;
  className?: string;
  triangular?: boolean;
}) {
  return (
    <div aria-hidden="true" className={cn("flex flex-col gap-2", className)}>
      {Array.from({ length: rows }).map((_, r) => (
        <div
          key={r}
          className="flex gap-2"
          style={triangular ? { paddingLeft: r * 10 } : undefined}
        >
          {Array.from({ length: triangular ? Math.max(1, cols - r) : cols }).map((__, c) => (
            <span key={c} className="size-1.5 rounded-full bg-dot/70" />
          ))}
        </div>
      ))}
    </div>
  );
}

/* ---------- Corner-bracket chip ---------- */

export function BracketChip({
  children,
  className,
  muted = false,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em]",
        muted ? "text-soft" : "text-foreground",
        className,
      )}
    >
      <Bracket className="left-0 top-0" />
      <Bracket className="right-0 top-0 rotate-90" />
      <Bracket className="bottom-0 right-0 rotate-180" />
      <Bracket className="bottom-0 left-0 -rotate-90" />
      {children}
    </span>
  );
}

function Bracket({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 8 8"
      aria-hidden="true"
      className={cn("pointer-events-none absolute size-2 text-dot", className)}
    >
      <path d="M0 8V0h8" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/* ---------- Placeholder frame ---------- */

export function PlaceholderSlot({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-inset/60 p-6 text-center",
        className,
      )}
    >
      {children}
      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-soft">
        {label}
      </span>
    </div>
  );
}
