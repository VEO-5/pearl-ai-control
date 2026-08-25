import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AvatarCta } from "./AvatarCta";
import { cn } from "@/lib/utils";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Pearl 27" },
  { href: "#proof", label: "Proof" },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("pearl27-theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid size-10 shrink-0 place-items-center rounded-full text-foreground transition-colors hover:bg-inset"
    >
      {dark ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  );
}

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-shell/80 backdrop-blur-xl"
          : "border-b border-transparent bg-shell",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <span
            className="grid size-9 place-items-center rounded-full bg-primary font-mono text-[0.625rem] tracking-widest text-primary-foreground"
            aria-hidden="true"
          >
            P27
          </span>
          <span className="font-display text-base font-bold tracking-tight">Pearl 27</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-block whitespace-nowrap rounded-full px-3.5 py-2 text-sm text-soft transition-colors hover:bg-inset hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1.5">
          <ThemeToggle />
          <AvatarCta size="sm" sublabel="15-min call" className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full text-foreground transition-colors hover:bg-inset md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-shell px-5 pb-5 pt-3 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm text-soft transition-colors hover:bg-inset hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <AvatarCta size="sm" sublabel="15-min call" className="mt-3 sm:hidden" />
        </div>
      ) : null}
    </header>
  );
}
