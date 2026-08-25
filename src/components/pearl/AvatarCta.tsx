import { cn } from "@/lib/utils";

export function AvatarCta({
  label = "Book an audit",
  sublabel = "15-min call, no deck",
  href = "#book",
  className,
  size = "md",
  onDark = false,
}: {
  label?: string;
  sublabel?: string;
  href?: string;
  className?: string;
  size?: "sm" | "md";
  onDark?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full transition-transform duration-300 hover:-translate-y-0.5",
        onDark
          ? "bg-ink-foreground text-ink shadow-bezel"
          : "bg-primary text-primary-foreground shadow-bezel",
        size === "md" ? "py-2 pl-2 pr-6" : "py-1.5 pl-1.5 pr-5",
        className,
      )}
    >
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-full font-mono text-[0.625rem] tracking-widest",
          onDark ? "bg-ink text-ink-foreground" : "bg-accent text-accent-foreground",
          size === "md" ? "size-10" : "size-8",
        )}
        aria-hidden="true"
      >
        P27
      </span>
      <span className="flex min-w-0 flex-col items-start leading-tight">
        <span className={cn("font-display font-bold", size === "md" ? "text-[0.95rem]" : "text-sm")}>
          {label}
        </span>
        {sublabel ? (
          <span
            className={cn(
              "text-[0.7rem]",
              onDark ? "text-ink/60" : "text-primary-foreground/60",
            )}
          >
            {sublabel}
          </span>
        ) : null}
      </span>
    </a>
  );
}
