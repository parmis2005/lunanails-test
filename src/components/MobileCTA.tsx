import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-rose-gold/20 bg-white/95 shadow-[0_-8px_28px_rgba(111,71,47,0.2)] backdrop-blur lg:hidden">
      <a
        href={siteConfig.phone.href}
        className="flex flex-1 items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-[0.14em] text-charcoal"
      >
        <Phone className="h-4 w-4 text-rose-gold-dark" aria-hidden="true" />
        Anrufen
      </a>
      <div className="w-px bg-rose-gold/20" />
      <Link
        href="/#buchung"
        className="flex flex-1 items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-[0.14em] text-charcoal"
      >
        <CalendarCheck className="h-4 w-4 text-rose-gold-dark" aria-hidden="true" />
        Termin
      </Link>
    </div>
  );
}
