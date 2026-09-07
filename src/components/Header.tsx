"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-gold/15 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl font-semibold tracking-wide text-charcoal lg:text-2xl">
            {siteConfig.shortName}
          </span>
          <span className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.25em] text-rose-gold">
            Nails & Beauty
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-rose-gold-dark ${
                  active ? "text-rose-gold-dark" : "text-charcoal-light"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phone.href}
            className="flex items-center gap-2 text-sm font-medium text-charcoal-light hover:text-rose-gold-dark"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone.display}
          </a>
          <Link
            href="/#buchung"
            className="btn-primary px-5 py-2.5 text-xs"
          >
            Termin buchen
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-sm p-2 text-charcoal lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-rose-gold/15 bg-white shadow-xl lg:hidden">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`border-b border-rose-gold/12 py-3 text-xs font-bold uppercase tracking-[0.16em] last:border-none ${
                    active ? "text-rose-gold-dark" : "text-charcoal-light"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={siteConfig.phone.href}
              onClick={closeMenu}
              className="flex items-center gap-2 py-3 text-sm font-medium text-charcoal-light"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone.display}
            </a>
            <Link
              href="/#buchung"
              onClick={closeMenu}
              className="btn-primary mb-4 mt-2 px-5 py-3 text-center text-xs"
            >
              Termin buchen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
