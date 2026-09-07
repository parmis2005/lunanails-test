import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { iconMap } from "@/lib/icons";
import { serviceCategories, servicePricingNote } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Leistungen & Preise",
  description:
    "Alle fiktiven Leistungen von Luna Beauty Atelier: Nägel, Füße, Wimpern, Lash & Brow, Permanent Make-up und Kosmetik.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        kicker="Leistungen & Preise"
        title="Unsere Leistungen"
        subtitle="Eine luxuriöse Demo-Preisliste mit Nägeln, Füßen, Wimpern, Lash & Brow, Permanent Make-up und Kosmetik."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8">
            {serviceCategories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <div
                  key={category.id}
                  className="rounded-sm bg-cream p-6 text-white ring-1 ring-rose-gold/18 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-rose-gold-dark">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl font-semibold text-white">
                        {category.title}
                      </h2>
                      <p className="mt-1 text-sm text-white/72">{category.description}</p>
                    </div>
                  </div>

                  <ul className="mt-6 divide-y divide-white/18">
                    {category.services.map((service) => (
                      <li
                        key={service.name}
                        className="grid gap-3 py-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"
                      >
                        <div>
                          <p className="text-base font-medium text-white">{service.name}</p>
                          <p className="mt-1 text-sm text-white/70">{service.duration}</p>
                        </div>
                        <span className="whitespace-nowrap text-base font-bold text-white sm:min-w-24 sm:text-right">
                          {service.price}
                        </span>
                        <Link
                          href="/#buchung"
                          aria-label={`${service.name} buchen`}
                          className="inline-flex h-9 w-9 items-center justify-center border border-white/25 text-white transition hover:border-white hover:bg-white hover:text-rose-gold-dark"
                        >
                          <Plus className="h-5 w-5" />
                        </Link>
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
