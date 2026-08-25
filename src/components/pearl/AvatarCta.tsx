import { cn } from "@/lib/utils";

export function AvatarCta({
  label = "Book a call",
  href = "#book",
  className,
  size = "md",
  onDark = false,
}: {
  label?: string;
  href?: string;
  className?: string;
  size?: "sm" | "md";
  onDark?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center rounded-full font-display font-bold transition-all duration-300 hover:-translate-y-1 active:translate-y-0",
        onDark
          ? "bg-white text-slate-950 shadow-[0_10px_30px_-4px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_18px_42px_-6px_rgba(255,255,255,0.25),0_8px_20px_rgba(0,0,0,0.2)]"
          : "bg-slate-900 text-white shadow-[0_10px_28px_-4px_rgba(15,23,42,0.35),0_4px_10px_rgba(15,23,42,0.15)] hover:shadow-[0_18px_40px_-6px_rgba(15,23,42,0.45),0_8px_18px_rgba(15,23,42,0.2)] dark:bg-white dark:text-slate-900 dark:shadow-[0_10px_28px_-4px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_18px_40px_-6px_rgba(255,255,255,0.3)]",
        size === "md" ? "px-7 py-3 text-[0.95rem]" : "px-5 py-2.5 text-sm",
        className,
      )}
    >
      {label}
    </a>
  );
}
