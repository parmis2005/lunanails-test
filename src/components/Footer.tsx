import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { fullAddress, navLinks, siteConfig } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <span className="font-serif text-xl font-semibold text-white">
            {siteConfig.shortName}
          </span>
          <p className="mt-2 text-sm leading-relaxed text-white/72">
            {siteConfig.tagline}
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center border border-white/25 bg-white/12 text-white transition-colors hover:border-white hover:bg-white hover:text-rose-gold-dark"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center border border-white/25 bg-white/12 text-white transition-colors hover:border-white hover:bg-white hover:text-rose-gold-dark"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white">
            Kontakt
          </h3>
          <ul className="mt-3 space-y-2.5 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />
              <span>{fullAddress}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-white" />
              <a href={siteConfig.phone.href} className="hover:text-white">
                {siteConfig.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-white" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white">
            Öffnungszeiten
          </h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-white" />
              <span className="text-white/68">Mo-Sa</span>
              <span>10:00 – 20:00</span>
            </li>
            <li className="flex items-center gap-2 pl-6">
              <span className="text-white/68">So</span>
              <span>Geschlossen</span>
            </li>
          </ul>

          <h3 className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-white">
            Navigation
          </h3>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white/68 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.name}
          </p>
          <div className="flex gap-4">
            <Link href="/impressum" className="uppercase tracking-[0.12em] hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="uppercase tracking-[0.12em] hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
