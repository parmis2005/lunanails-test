import type { Metadata } from "next";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import PageHero from "@/components/PageHero";
import {
  fullAddress,
  googleMapsDirectionsUrl,
  siteConfig,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Adresse, Öffnungszeiten und Kontaktmöglichkeiten von Happy Nails Koblenz.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        kicker="Kontakt"
        title="So erreichst du uns"
        subtitle="Ruf uns an, schreib uns eine Nachricht oder komm direkt vorbei."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-rose-100 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-xl font-semibold text-stone-900">
                Kontaktdaten
              </h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                  <span className="text-stone-700">{fullAddress}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-rose-500" />
                  <a href={siteConfig.phone.href} className="text-stone-700 hover:text-rose-600">
                    {siteConfig.phone.display}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-rose-500" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-stone-700 hover:text-rose-600"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-700"
              >
                <Navigation className="h-4 w-4" />
                Route planen
              </a>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-white p-6 sm:p-8">
              <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-stone-900">
                <Clock className="h-5 w-5 text-rose-500" />
                Öffnungszeiten
              </h2>
              <dl className="mt-5 divide-y divide-stone-100 text-sm">
                {siteConfig.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between py-2">
                    <dt className="text-stone-500">{h.day}</dt>
                    <dd
                      className={
                        "closed" in h && h.closed
                          ? "font-medium text-stone-400"
                          : "font-medium text-stone-800"
                      }
                    >
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-xl font-semibold text-stone-900">Anfahrt</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Wir befinden uns in der Moselweißer Straße in Koblenz – sowohl mit dem
                Auto als auch mit öffentlichen Verkehrsmitteln gut zu erreichen. Nutze
                den Routenplaner-Button für die schnellste Verbindung von deinem
                Standort aus.
              </p>
            </div>
          </div>

          <MapEmbed className="min-h-[420px] lg:sticky lg:top-24 lg:h-full" />
        </Container>
      </section>

      <section className="border-t border-rose-100 bg-white py-16 sm:py-20">
        <Container className="mx-auto max-w-2xl">
          <h2 className="text-center font-serif text-2xl font-semibold text-stone-900 sm:text-3xl">
            Terminanfrage
          </h2>
          <p className="mt-3 text-center text-sm text-stone-500">
            Fülle das Formular aus, dein E-Mail-Programm öffnet sich mit einer
            vorausgefüllten Nachricht an uns.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
