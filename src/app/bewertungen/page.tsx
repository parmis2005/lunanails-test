import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import RatingStars from "@/components/RatingStars";
import TestimonialCard from "@/components/TestimonialCard";
import { googleMapsSearchUrl, siteConfig, testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Bewertungen",
  description: "Was Kundinnen über Happy Nails Koblenz sagen.",
};

export default function BewertungenPage() {
  return (
    <>
      <PageHero kicker="Bewertungen" title="Stimmen unserer Kundinnen" />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-rose-100 bg-white px-8 py-8 text-center">
            <span className="font-serif text-4xl font-semibold text-stone-900">
              {siteConfig.rating.value.toLocaleString("de-DE")}
              <span className="text-lg font-normal text-stone-400">
                {" "}
                / {siteConfig.rating.outOf}
              </span>
            </span>
            <RatingStars value={siteConfig.rating.value} size={22} />
            <p className="text-sm text-stone-500">
              Basierend auf {siteConfig.rating.count} {siteConfig.rating.source}
            </p>
            <a
              href={googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-600 hover:text-rose-700"
            >
              Alle Bewertungen auf Google ansehen
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
