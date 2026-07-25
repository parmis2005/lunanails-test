"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { fullAddress, googleMapsEmbedSrc, siteConfig } from "@/lib/site-data";

export default function MapEmbed({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-rose-100 shadow-sm ${className}`}
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
        <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 bg-rose-50 p-8 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-rose-600 shadow-sm">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium text-stone-800">{fullAddress}</p>
            <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-stone-500">
              Beim Laden der Karte wird eine Verbindung zu Google-Servern hergestellt und
              es können Daten an Google übertragen werden. Es gelten die
              Datenschutzbestimmungen von Google.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-700"
          >
            Karte laden
          </button>
        </div>
      )}
    </div>
  );
}
