import { MapPin, Phone } from "lucide-react";
import { googleMapsDirectionsUrl, siteConfig } from "@/lib/site-data";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-rose-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 lg:hidden">
      <a
        href={siteConfig.phone.href}
        className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-stone-800"
      >
        <Phone className="h-4 w-4 text-rose-600" aria-hidden="true" />
        Anrufen
      </a>
      <div className="w-px bg-rose-100" />
      <a
        href={googleMapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-stone-800"
      >
        <MapPin className="h-4 w-4 text-rose-600" aria-hidden="true" />
        Route
      </a>
    </div>
  );
}
