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
      <section className="relative flex min-h-[680px] items-center justify-center overflow-hidden bg-charcoal py-20 text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/hero-manicure-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/72 via-charcoal/52 to-charcoal/82" />
        <div className="absolute inset-0 bg-linear-to-br from-rose-gold/16 via-transparent to-charcoal/30" />

        <Container className="relative z-10 text-center">
          <div className="mx-auto max-w-4xl">
            <span className="animate-fade-in-up inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.32em] text-rose-gold/95">
              <Sparkles className="h-3.5 w-3.5" />
              Nagelstudio in {siteConfig.city}
            </span>

            <h1 className="animate-fade-in-up delay-100 mt-6 font-serif text-5xl font-light italic leading-tight text-white sm:text-7xl">
              {siteConfig.shortName}
            </h1>
            <div className="section-divider mx-auto mt-6" aria-hidden="true" />

            <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/84 sm:text-lg">
              {siteConfig.tagline}
            </p>

            <div className="animate-fade-in-up delay-300 mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/kontakt"
                className="btn-primary"
              >
                Termin anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/leistungen"
                className="btn-outline"
              >
                Leistungen ansehen
              </Link>
            </div>

            <div className="animate-fade-in-up delay-400 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="flex items-center gap-2">
                <RatingStars value={siteConfig.rating.value} size={18} />
                <span className="text-sm font-medium text-white/80">
                  {siteConfig.rating.value.toLocaleString("de-DE")} ({siteConfig.rating.count}) ·{" "}
                  {siteConfig.rating.source}
                </span>
              </div>
              <span className="hidden h-4 w-px bg-white/25 sm:block" />
              <div className="flex items-center gap-1.5 text-sm text-white/72">
                <MapPin className="h-4 w-4 text-rose-gold" />
                {fullAddress}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="border-y border-black/5 bg-white py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-champagne text-rose-gold-dark transition-colors">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-light">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="overflow-hidden bg-cream py-20 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 grid grid-cols-2 gap-4 lg:order-1">
            <GalleryTile icon={iconMap.heart} label="Sorgfältig" variant={2} />
            <PhotoTile
              src="/images/gallery/fake-french-manicure.jpg"
              alt="Fiktive klassische French Nails mit weißer Spitze"
              label="French"
              className="mt-8"
            />
            <PhotoTile
              src="/images/gallery/fake-glitter-nailart.jpg"
              alt="Fiktives Nude-Nageldesign mit Glitzer-Akzent"
              label="Nailart"
            />
            <GalleryTile icon={iconMap.calendar} label="Flexibel" variant={3} className="mt-8" />
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              kicker="Über uns"
              title={`Dein Nagelstudio in ${siteConfig.city}`}
              align="left"
            />
            <p className="mt-8 text-base leading-relaxed text-charcoal-light">
              Bei {siteConfig.shortName} in der {siteConfig.address.street} dreht sich alles um
              gepflegte Hände und Füße. Ob klassische Maniküre, langanhaltende
              Gel-Modellage oder feine Nailart-Details – wir nehmen uns Zeit für dich und
              setzen deine Wünsche sorgfältig um.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-light">
              Kurzfristige Termine, saubere Arbeit und ein freundliches Team erwarten
              dich – ganz unkompliziert, auch spontan.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center gap-2 border-b border-rose-gold/40 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-rose-gold-dark hover:text-charcoal"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="h-4 w-4" />
            </Link>
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

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <div
                  key={category.id}
                  className="group relative overflow-hidden rounded-sm bg-cream p-6 ring-1 ring-rose-gold/18"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-champagne text-rose-gold-dark transition-colors group-hover:bg-rose-gold/20">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                    {category.description}
                  </p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-rose-gold-dark">
                    {category.services[0].name} {category.services[0].price}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/leistungen"
              className="btn-primary"
            >
              Alle Leistungen & Preise
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-20 sm:py-24">
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
              className="inline-flex items-center gap-2 border-b border-rose-gold/40 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-rose-gold-dark hover:text-charcoal"
            >
              Alle Bewertungen ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-charcoal py-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,130,0.18),transparent_30%)]"
          aria-hidden="true"
        />
        <Container className="relative flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-rose-gold">
              Dein nächster Termin
            </p>
            <h2 className="font-serif text-3xl font-light italic text-white sm:text-5xl">
              Bereit für gepflegte Nägel?
            </h2>
            <p className="mt-3 text-sm text-white/55">
              Mo–Sa 10:00–20:00 Uhr · {fullAddress}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phone.href}
              className="btn-primary"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone.display}
            </a>
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
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
