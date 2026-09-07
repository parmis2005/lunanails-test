import type { Metadata } from "next";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
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
    "Fiktive Adresse, Öffnungszeiten, Terminbuchung und Kontaktmöglichkeiten von Luna Beauty Atelier.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        kicker="Kontakt"
        title="So erreichst du uns"
        subtitle="Buche eine Demo-Behandlung, ruf uns an oder schreib uns eine Nachricht."
      />

      <section id="termin" className="bg-white py-16 sm:py-20">
        <Container>
          <BookingWidget />
        </Container>
      </section>

      <section className="border-t border-rose-gold/15 bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="rounded-sm bg-cream p-6 text-white ring-1 ring-rose-gold/18 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-white">
                Kontaktdaten
              </h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <span className="text-white/76">{fullAddress}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-white" />
                  <a href={siteConfig.phone.href} className="text-white/76 hover:text-white">
                    {siteConfig.phone.display}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-white" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-white/76 hover:text-white"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 px-5 py-2.5 text-xs"
              >
                <Navigation className="h-4 w-4" />
                Route planen
              </a>
            </div>

            <div className="rounded-sm bg-cream p-6 text-white ring-1 ring-rose-gold/18 sm:p-8">
              <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-white">
                <Clock className="h-5 w-5 text-white" />
                Öffnungszeiten
              </h2>
              <dl className="mt-5 divide-y divide-white/18 text-sm">
                {siteConfig.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between py-2">
                    <dt className="text-white/76">{h.day}</dt>
                    <dd
                      className={
                        "closed" in h && h.closed
                          ? "font-medium text-white/50"
                          : "font-bold text-white"
                      }
                    >
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-sm bg-cream p-6 text-white ring-1 ring-rose-gold/18 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-white">Anfahrt</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/76">
                Wir befinden uns in der {siteConfig.address.street} – sowohl mit dem
                Auto als auch mit öffentlichen Verkehrsmitteln gut zu erreichen. Nutze
                den Routenplaner-Button für die schnellste Verbindung von deinem
                Standort aus.
              </p>
            </div>
          </div>

          <MapEmbed className="min-h-[420px] lg:sticky lg:top-24 lg:h-full" />
        </Container>
      </section>

      <section className="border-t border-rose-gold/15 bg-white py-16 sm:py-20">
        <Container className="mx-auto max-w-2xl">
          <h2 className="text-center font-serif text-4xl font-light text-charcoal sm:text-5xl">
            Terminanfrage
          </h2>
          <div className="section-divider mx-auto mt-5" aria-hidden="true" />
          <p className="mt-6 text-center text-sm text-charcoal-light">
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
