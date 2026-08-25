import { cn } from "@/lib/utils";

export function Pearl27Logo({ className = "size-10" }: { className?: string }) {
  return (
    <img
      src="/pearl27-logo.png"
      alt="Pearl 27 Logo"
      className={cn("shrink-0 object-contain aspect-square rounded-full", className)}
    />
  );
}
