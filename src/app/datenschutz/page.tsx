import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { fullAddress, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero kicker="Rechtliches" title="Datenschutzerklärung" />

      <section className="bg-white py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <div className="space-y-10 rounded-sm bg-white p-6 text-sm leading-relaxed text-charcoal-light ring-1 ring-rose-gold/18 sm:p-10">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-charcoal">
                Verantwortlicher
              </h2>
              <p className="mt-3">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                <br />
                {/* TODO: siehe Impressum – vollständigen rechtlichen Namen ergänzen */}
                {siteConfig.name}, {fullAddress}
                <br />
                E-Mail: {siteConfig.email}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-charcoal">Hosting</h2>
              {/* TODO: tatsächlichen Hosting-Anbieter eintragen, sobald die Seite live geht. */}
              <p className="mt-3">
                Diese Website wird bei einem externen Dienstleister gehostet
                (Hosting-Provider). Die personenbezogenen Daten, die auf dieser Website
                erfasst werden, werden auf den Servern des Hosters gespeichert. Der
                genaue Anbieter wird hier ergänzt, sobald die Website produktiv
                geschaltet ist.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-charcoal">
                Allgemeine Hinweise
              </h2>
              <p className="mt-3">
                Beim Aufruf dieser Website erhebt der Hosting-Anbieter automatisch
                Informationen in sogenannten Server-Logfiles, die Ihr Browser
                automatisch übermittelt (z. B. Browsertyp, verwendetes Betriebssystem,
                Referrer-URL, IP-Adresse, Uhrzeit der Serveranfrage). Diese Daten sind
                nicht bestimmten Personen zuordenbar und werden nicht mit anderen
                Datenquellen zusammengeführt.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-charcoal">
                Kontaktaufnahme
              </h2>
              <p className="mt-3">
                Das Kontaktformular auf dieser Website übermittelt Ihre Eingaben nicht an
                einen Server, sondern öffnet direkt eine vorausgefüllte E-Mail in Ihrem
                E-Mail-Programm. Die von Ihnen eingegebenen Daten werden erst durch das
                Absenden dieser E-Mail an uns übertragen und ausschließlich zur
                Bearbeitung Ihrer Anfrage verwendet. Alternativ können Sie uns auch
                direkt per Telefon oder E-Mail kontaktieren; die dabei anfallenden Daten
                verwenden wir ebenfalls nur zur Bearbeitung Ihres Anliegens.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-charcoal">
                Google Maps
              </h2>
              <p className="mt-3">
                Auf der Kontaktseite bieten wir die Möglichkeit, eine Karte des Dienstes
                Google Maps zu laden, um unseren Standort anzuzeigen. Die Karte wird
                erst nach einem aktiven Klick auf „Karte laden“ eingebunden. Erst dann
                stellt Ihr Browser eine Verbindung zu Servern von Google her, wodurch
                Google unter anderem Ihre IP-Adresse erhält und ggf. Cookies setzt.
                Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin
                4, Irland. Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in
                der{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-rose-gold-dark hover:text-charcoal"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-charcoal">Cookies</h2>
              <p className="mt-3">
                Diese Website verwendet keine Cookies zu Analyse- oder
                Marketingzwecken. Es werden lediglich technisch notwendige Funktionen
                genutzt (z. B. das optionale Laden der Google-Maps-Karte gemäß obigem
                Abschnitt).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-charcoal">
                Ihre Rechte
              </h2>
              <p className="mt-3">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung,
                Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum
                Thema Datenschutz können Sie sich jederzeit über die im Impressum
                angegebenen Kontaktdaten an uns wenden.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
