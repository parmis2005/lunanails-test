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

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {serviceCategories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <div
                  key={category.id}
                  className="rounded-2xl border border-rose-100 bg-white p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-semibold text-stone-900">
                        {category.title}
                      </h2>
                      <p className="text-sm text-stone-500">{category.description}</p>
                    </div>
                  </div>

                  <ul className="mt-6 divide-y divide-stone-100">
                    {category.services.map((service) => (
                      <li
                        key={service.name}
                        className="flex items-center justify-between gap-4 py-3"
                      >
                        <span className="flex items-center gap-2 text-sm text-stone-700">
                          <Check className="h-4 w-4 shrink-0 text-rose-400" />
                          {service.name}
                        </span>
                        <span className="whitespace-nowrap text-sm font-semibold text-stone-900">
                          {service.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-stone-500">
            {servicePricingNote}
          </p>

          <div className="mt-10 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-rose-600/25 transition-colors hover:bg-rose-700"
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
