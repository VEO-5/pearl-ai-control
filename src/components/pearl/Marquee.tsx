import { cn } from "@/lib/utils";

interface ClientBrand {
  name: string;
  domain: string;
}

const clients: ClientBrand[] = [
  { name: "Alarm.com", domain: "alarm.com" },
  { name: "BambooHR", domain: "bamboohr.com" },
  { name: "Sunrun", domain: "sunrun.com" },
  { name: "Angel Studios", domain: "angel.com" },
  { name: "Chatbooks", domain: "chatbooks.com" },
  { name: "American Campus", domain: "americancampus.com" },
  { name: "BYU-Pathway", domain: "byupathway.org" },
  { name: "SafeStreets", domain: "safestreets.com" },
];

export function LogoMarquee() {
  const items = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-4 select-none">
      {/* Left/Right Edge Gradient Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent sm:w-24" />

      <div className="marquee-track flex w-max items-center gap-4 sm:gap-6">
        {items.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex h-16 sm:h-20 shrink-0 items-center justify-center gap-3.5 sm:gap-4 rounded-2xl border border-border/80 bg-white/95 px-6 sm:px-8 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <div className="grid size-10 sm:size-12 shrink-0 place-items-center rounded-xl bg-slate-100/90 p-1.5 border border-slate-200/80 overflow-hidden">
              <img
                src={`https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`}
                alt={`${client.name} logo`}
                className="size-full object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
            <span className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
              {client.name}
            </span>
          </div>
        ))}

        {/* Trailing +20 More Card */}
        <div className="flex h-16 sm:h-20 shrink-0 items-center justify-center rounded-2xl border border-dashed border-border/80 bg-inset/60 px-6 sm:px-8 text-xs sm:text-sm font-mono font-medium text-soft">
          +20 more brands
        </div>
      </div>
    </div>
  );
}
