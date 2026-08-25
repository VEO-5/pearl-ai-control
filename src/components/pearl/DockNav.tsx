import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { AvatarCta } from "./AvatarCta";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#services", label: "What we do" },
  { href: "#why", label: "Why us" },
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
      className="grid size-10 shrink-0 place-items-center rounded-full bg-inset text-foreground transition-colors hover:bg-accent"
    >
      {dark ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  );
}

export function DockNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-3 sm:bottom-6"
    >
      <div className="flex w-full max-w-[min(46rem,100%)] items-center gap-2 rounded-full border border-border bg-shell/85 p-2 shadow-dock backdrop-blur-xl">
        <ThemeToggle />
        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex">
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
        <span className="min-w-0 flex-1 truncate px-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-soft md:hidden">
          Pearl 27
        </span>
        <AvatarCta size="sm" className="shrink-0" sublabel="15-min call" />
      </div>
    </nav>
  );
}
