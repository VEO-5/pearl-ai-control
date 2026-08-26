import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AvatarCta } from "./AvatarCta";
import { Pearl27Logo } from "./Pearl27Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why Pearl 27" },
  { href: "/#proof", label: "Proof" },
  { href: "/#faq", label: "FAQ" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(
    () => localStorage.getItem("pearl27-banner-dismissed") !== "true",
  );

  const dismissBanner = () => {
    setShowBanner(false);
    localStorage.setItem("pearl27-banner-dismissed", "true");
  };

  useEffect(() => {
    // Always enforce light mode
    document.documentElement.classList.remove("dark");
    localStorage.setItem("pearl27-theme", "light");
  }, []);

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
        scrolled ? "bg-background/80 backdrop-blur-xl" : "bg-background",
      )}
    >
      {showBanner && (
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-5 py-2 text-center">
          <p className="text-xs text-white/80">
            ✨ New experiences and smooth navigation are coming soon. Stay tuned.
            <button
              onClick={dismissBanner}
              className="ml-3 text-white/50 hover:text-white/80 transition-colors"
              aria-label="Dismiss"
            >
              ×
            </button>
          </p>
        </div>
      )}
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link
          to="/"
          hash="top"
          className="flex shrink-0 items-center gap-3 group"
          aria-label="Pearl 27 Home"
        >
          <Pearl27Logo className="size-11 transition-transform duration-300 group-hover:scale-105" />
        </Link>

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

        <div className="flex shrink-0 items-center gap-2">
          <AvatarCta size="sm" className="hidden sm:inline-flex" />
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
        <div className="border-t border-border bg-background px-5 pb-5 pt-3 md:hidden">
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
          <AvatarCta size="sm" className="mt-3 sm:hidden" />
        </div>
      ) : null}
    </header>
  );
}
