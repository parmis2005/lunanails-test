import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { fullAddress, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero kicker="Rechtliches" title="Impressum" />

      <section className="py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <div className="space-y-10 text-sm leading-relaxed text-stone-700">
            <div>
              <h2 className="font-serif text-xl font-semibold text-stone-900">
                Angaben gemäß § 5 TMG
              </h2>
              {/*
                TODO (Inhaber:in): Vollständigen rechtlichen Namen/Rechtsform eintragen,
                z. B. "Vorname Nachname, Inhaber:in Happy Nails Koblenz" oder Firmenname
                laut Gewerbeanmeldung/Handelsregister.
              */}
              <p className="mt-3">
                [Vollständiger Name / Firma gemäß Gewerbeanmeldung]
                <br />
                {siteConfig.name}
                <br />
                {fullAddress}
                <br />
                {siteConfig.address.country}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-stone-900">Kontakt</h2>
              <p className="mt-3">
                Telefon: {siteConfig.phone.display}
                <br />
                E-Mail: {siteConfig.email}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-stone-900">
                Umsatzsteuer-ID
              </h2>
              {/* TODO: Falls vorhanden, USt-IdNr. gemäß § 27a UStG eintragen. */}
              <p className="mt-3">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [falls
                vorhanden eintragen]
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-stone-900">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              {/* TODO: Namen der inhaltlich verantwortlichen Person eintragen. */}
              <p className="mt-3">
                [Vollständiger Name]
                <br />
                {fullAddress}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-stone-900">
                EU-Streitschlichtung
              </h2>
              <p className="mt-3">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-rose-600 hover:text-rose-700"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
                verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-stone-900">
                Haftung für Inhalte
              </h2>
              <p className="mt-3">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
                diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
                10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder
                nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-stone-900">
                Haftung für Links
              </h2>
              <p className="mt-3">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
                Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-stone-900">Urheberrecht</h2>
              <p className="mt-3">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
