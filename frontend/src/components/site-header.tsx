import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { RESTAURANT } from "@/data/menu";

const links = [
  { to: "/menu", label: "Menu" },
  { to: "/reservations", label: "Reservations" },
  { to: "/story", label: "Our Story" },
  { to: "/chef", label: "Chef" },
  { to: "/gallery", label: "Gallery" },
  { to: "/visit", label: "Visit" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-ink/95 backdrop-blur-sm border-b border-border/60" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <Link to="/" className="group leading-none" onClick={() => setOpen(false)}>
            <span className="font-display text-2xl tracking-[0.18em] text-foreground">
              {RESTAURANT.name.toUpperCase()}
            </span>
            <span className="mt-1 block eyebrow text-[0.55rem]">{RESTAURANT.descriptor}</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[0.78rem] tracking-[0.14em] uppercase text-muted-foreground transition-colors hover:text-brass"
                activeProps={{ className: "text-brass" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/order"
              className="border border-brass-soft/60 px-4 py-2 text-[0.7rem] tracking-[0.18em] uppercase text-brass transition-colors hover:bg-brass hover:text-primary-foreground"
            >
              Order Online
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-ink px-6 pt-28 lg:hidden">
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/order"
              onClick={() => setOpen(false)}
              className="mt-4 self-start border border-brass-soft/60 px-5 py-3 text-[0.7rem] tracking-[0.18em] uppercase text-brass"
            >
              Order Online
            </Link>
          </nav>
        </div>
      )}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-ink/95 px-5 py-3 backdrop-blur-sm lg:hidden">
        <Link
          to="/reservations"
          className="block w-full bg-brass py-3 text-center text-[0.72rem] tracking-[0.2em] uppercase text-primary-foreground"
        >
          Reserve a table
        </Link>
      </div>
    </>
  );
}
