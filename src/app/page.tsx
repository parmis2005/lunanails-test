import Link from "next/link";
import { ArrowRight, CalendarCheck, MapPin, Phone, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import GalleryTile from "@/components/GalleryTile";
import PhotoTile from "@/components/PhotoTile";
import RatingStars from "@/components/RatingStars";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { iconMap } from "@/lib/icons";
import {
  fullAddress,
  googleMapsDirectionsUrl,
  highlights,
  serviceCategories,
  siteConfig,
  testimonials,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-rose-50 via-cream-50 to-cream-50">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-rose-100/60 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="text-center lg:text-left">
            <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 shadow-sm ring-1 ring-rose-100">
              <Sparkles className="h-3.5 w-3.5" />
              Nagelstudio in {siteConfig.city}
            </span>

            <h1 className="animate-fade-in-up delay-100 mt-6 font-serif text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
              {siteConfig.shortName}
            </h1>

            <p className="animate-fade-in-up delay-200 mx-auto mt-5 max-w-xl text-lg leading-relaxed text-stone-600 lg:mx-0">
              {siteConfig.tagline}
            </p>

            <div className="animate-fade-in-up delay-300 mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-rose-600/25 transition-colors hover:bg-rose-700"
              >
                Termin anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-stone-800 ring-1 ring-stone-200 transition-colors hover:bg-stone-50"
              >
                Leistungen ansehen
              </Link>
            </div>

            <div className="animate-fade-in-up delay-400 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <RatingStars value={siteConfig.rating.value} size={18} />
                <span className="text-sm font-medium text-stone-700">
                  {siteConfig.rating.value.toLocaleString("de-DE")} ({siteConfig.rating.count}) ·{" "}
                  {siteConfig.rating.source}
                </span>
              </div>
              <span className="hidden h-4 w-px bg-stone-300 sm:block" />
              <div className="flex items-center gap-1.5 text-sm text-stone-600">
                <MapPin className="h-4 w-4 text-rose-500" />
                {fullAddress}
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up delay-200 relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
            <GalleryTile icon={iconMap.sparkles} label="Nailart" variant={0} className="mt-8" />
            <PhotoTile
              src="/images/gallery/gel-modellage-rot.jpg"
              alt="Glänzende rote Gel-Modellage in Coffin-Form"
              label="Gel & Modellage"
              priority
            />
            <GalleryTile icon={iconMap.hand} label="Maniküre" variant={2} />
            <GalleryTile
              icon={iconMap.footprints}
              label="Pediküre"
              variant={3}
              className="mt-8"
            />
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="border-y border-rose-100 bg-white py-14">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {highlights.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-stone-500">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              kicker="Über uns"
              title="Dein Nagelstudio in Koblenz"
              align="left"
            />
            <p className="mt-6 text-base leading-relaxed text-stone-600">
              Bei {siteConfig.shortName} in der Moselweißer Straße dreht sich alles um
              gepflegte Hände und Füße. Ob klassische Maniküre, langanhaltende
              Gel-Modellage oder feine Nailart-Details – wir nehmen uns Zeit für dich und
              setzen deine Wünsche sorgfältig um.
            </p>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              Kurzfristige Termine, saubere Arbeit und ein freundliches Team erwarten
              dich – ganz unkompliziert, auch spontan.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-rose-600 hover:text-rose-700"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <GalleryTile icon={iconMap.heart} label="Sorgfältig" variant={2} />
            <GalleryTile icon={iconMap["shield-check"]} label="Hygienisch" variant={0} />
            <GalleryTile icon={iconMap.sparkles} label="Kreativ" variant={1} />
            <GalleryTile icon={iconMap.calendar} label="Flexibel" variant={3} />
          </div>
        </Container>
      </section>

      {/* Services teaser */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Leistungen"
            title="Maniküre, Pediküre & mehr"
            subtitle="Ein Überblick über unsere beliebtesten Leistungen. Die vollständige Preisliste findest du auf der Leistungen-Seite."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <div
                  key={category.id}
                  className="rounded-2xl border border-rose-100 bg-cream-50 p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-stone-900">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {category.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-rose-600">
                    {category.services[0].name} {category.services[0].price}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Alle Leistungen & Preise
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Bewertungen"
            title="Was unsere Kundinnen sagen"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/bewertungen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600 hover:text-rose-700"
            >
              Alle Bewertungen ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-16">
        <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
              Bereit für gepflegte Nägel?
            </h2>
            <p className="mt-2 text-sm text-stone-400">
              Mo–Sa 10:00–20:00 Uhr · {fullAddress}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone.display}
            </a>
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700"
            >
              <CalendarCheck className="h-4 w-4" />
              Route planen
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
