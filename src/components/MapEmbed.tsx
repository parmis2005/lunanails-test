"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { fullAddress, googleMapsEmbedSrc, siteConfig } from "@/lib/site-data";

export default function MapEmbed({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-sm border border-rose-gold/20 bg-white ${className}`}
    >
      {loaded ? (
        <iframe
          title={`Karte – ${siteConfig.name}`}
          src={googleMapsEmbedSrc}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: 420 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 bg-champagne/55 p-8 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-rose-gold-dark shadow-sm">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium text-charcoal">{fullAddress}</p>
            <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-charcoal-light">
              Beim Laden der Karte wird eine Verbindung zu Google-Servern hergestellt und
              es können Daten an Google übertragen werden. Es gelten die
              Datenschutzbestimmungen von Google.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="btn-primary px-5 py-2.5 text-xs"
          >
            Karte laden
          </button>
        </div>
      )}
    </div>
  );
}
