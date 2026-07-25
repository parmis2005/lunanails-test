import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { iconMap } from "@/lib/icons";
import { serviceCategories, servicePricingNote } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Leistungen & Preise",
  description:
    "Alle Leistungen von Happy Nails Koblenz im Überblick: Maniküre, Pediküre, Gel & Modellage sowie Nailart.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        kicker="Leistungen & Preise"
        title="Unsere Leistungen"
        subtitle="Von klassischer Maniküre bis zur aufwendigen Gel-Modellage – hier findest du alle Leistungen auf einen Blick."
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {serviceCategories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <div
                  key={category.id}
                  className="rounded-sm bg-white p-6 ring-1 ring-rose-gold/18 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-champagne text-rose-gold-dark">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl font-semibold text-charcoal">
                        {category.title}
                      </h2>
                      <p className="mt-1 text-sm text-charcoal-light">{category.description}</p>
                    </div>
                  </div>

                  <ul className="mt-6 divide-y divide-black/8">
                    {category.services.map((service) => (
                      <li
                        key={service.name}
                        className="flex items-center justify-between gap-4 py-3"
                      >
                        <span className="flex items-center gap-2 text-sm text-charcoal-light">
                          <Check className="h-4 w-4 shrink-0 text-rose-gold" />
                          {service.name}
                        </span>
                        <span className="whitespace-nowrap text-sm font-bold text-charcoal">
                          {service.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-charcoal-light">
            {servicePricingNote}
          </p>

          <div className="mt-10 text-center">
            <Link
              href="/kontakt"
              className="btn-primary"
            >
              Termin anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
