import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { fullAddress, navLinks, siteConfig } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rose-100 bg-stone-900 text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <span className="font-serif text-xl font-semibold text-white">
            {siteConfig.shortName}
          </span>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">
            {siteConfig.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="rounded-full border border-stone-700 p-2 text-stone-300 transition-colors hover:border-rose-500 hover:text-rose-400"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="rounded-full border border-stone-700 p-2 text-stone-300 transition-colors hover:border-rose-500 hover:text-rose-400"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
              <span>{fullAddress}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-rose-400" />
              <a href={siteConfig.phone.href} className="hover:text-white">
                {siteConfig.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-rose-400" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Öffnungszeiten
          </h3>
          <ul className="mt-4 space-y-1.5 text-sm">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-rose-400" />
              <span className="text-stone-400">Mo–Sa</span>
              <span>10:00 – 20:00</span>
            </li>
            <li className="flex items-center gap-2 pl-6">
              <span className="text-stone-400">So</span>
              <span>Geschlossen</span>
            </li>
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white">
            Navigation
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
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

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.name}
          </p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-stone-300">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-stone-300">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
