const slots = Array.from({ length: 7 }, (_, i) => `Logo slot ${i + 1}`);

export function LogoMarquee() {
  const row = [...slots, ...slots];
  return (
    <div className="relative overflow-hidden py-2">
      <div className="marquee-track flex w-max gap-4">
        {row.map((label, i) => (
          <div
            key={`${label}-${i}`}
            className="flex h-16 w-44 shrink-0 items-center justify-center rounded-xl border border-dashed border-border bg-inset/60"
          >
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-soft">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
