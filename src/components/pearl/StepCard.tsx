import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotGrid } from "./primitives";

export function StepCard({
  number,
  title,
  description,
  details,
  reversed = false,
}: {
  number: string;
  title: string;
  description: string;
  details: string[];
  reversed?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `step-${number}-details`;

  return (
    <div className="bezel">
      <div
        className={cn(
          "bezel-inner grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.25fr_1fr] lg:items-center",
          reversed && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="min-w-0">
          <div className="grid size-16 place-items-center rounded-2xl bg-inset font-display text-xl font-bold text-foreground shadow-inner">
            {number}
          </div>
          <h3 className="mt-6 text-2xl font-bold sm:text-3xl">{title}</h3>
          <p className="mt-3 max-w-prose text-soft">{description}</p>

          <div className="mt-6 h-px w-full bg-border" />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-4 inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-soft transition-colors hover:text-foreground"
          >
            <Plus
              className={cn("size-3.5 transition-transform duration-300", open && "rotate-45")}
            />
            See process + details
          </button>

          <div
            id={panelId}
            hidden={!open}
            className="mt-4 space-y-2 border-l border-border pl-4"
          >
            {details.map((d) => (
              <p key={d} className="text-sm text-soft">
                {d}
              </p>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-52 items-center justify-center lg:flex">
          <div className="absolute h-36 w-56 -rotate-6 rounded-xl border border-border bg-inset dot-field" />
          <div className="absolute h-36 w-56 translate-x-6 translate-y-6 rotate-3 rounded-xl border border-border bg-shell" />
          <DotGrid rows={3} cols={5} className="relative z-10 opacity-70" />
        </div>
      </div>
    </div>
  );
}
