import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import Container from "@/components/Container";
import RatingStars from "@/components/RatingStars";
import SectionHeading from "@/components/SectionHeading";
import { iconMap } from "@/lib/icons";
import {
  fullAddress,
  googleMapsDirectionsUrl,
  highlights,
  serviceCategories,
  siteConfig,
  testimonials,
} from "@/lib/site-data";

const editorialImages = [
  {
    src: "/images/brand/nude-french-nails.png",
    alt: "Fiktive luxuriöse Nude French Nails mit Chrome-Akzent",
    label: "Pinterest Nails",
    title: "Soft French, Chrome & Clean Girl Nails",
  },
  {
    src: "/images/brand/beauty-treatment-room.png",
    alt: "Fiktiver luxuriöser Kosmetikraum mit Lash-, Brow- und PMU-Tools",
    label: "Beauty Suite",
    title: "Kosmetik, Lash & Brow, PMU",
  },
] as const;

const featuredServiceCategories = serviceCategories;

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-white text-white">
        <Image
          src="/images/brand/generated-beige-nail-video-frame.png"
          alt="Fiktives hellbraunes Luxus-Nagelstudio mit eleganter Maniküre"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#3b281b]/68 via-[#6f472f]/28 to-white/5" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/72 to-transparent" />

        <Container className="relative flex min-h-[calc(100svh-5rem)] items-center py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.32em] text-rose-gold">
              <Sparkles className="h-4 w-4" />
              Luxury Nails & Beauty Atelier
            </span>
            <h1 className="mt-7 max-w-2xl font-serif text-4xl font-light leading-tight text-white sm:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
              Luxus-Beauty für Nägel, Füße, Wimpern, Lash & Brow, Permanent Make-up
              und Kosmetik.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="#buchung" className="btn-primary">
                Termin buchen
                <CalendarCheck className="h-4 w-4" />
              </Link>
              <Link href="/leistungen" className="btn-outline">
                Leistungen ansehen
              </Link>
            </div>
            <div className="mt-10 flex flex-col gap-4 text-sm text-white/72 sm:flex-row sm:items-center">
              <span className="flex items-center gap-2">
                <RatingStars value={siteConfig.rating.value} size={16} />
                {siteConfig.rating.value.toLocaleString("de-DE")} · {siteConfig.rating.count} Demo-Bewertungen
              </span>
              <span className="hidden h-4 w-px bg-white/25 sm:block" />
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-rose-gold" />
                {fullAddress}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-rose-gold/15 bg-white py-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-cream text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg font-semibold text-charcoal">{item.title}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal-light">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionHeading
              kicker="Neues Konzept"
              title="Ein Beauty Atelier statt nur Nagelstudio"
              align="left"
            />
            <p className="mt-7 text-base leading-relaxed text-charcoal-light">
              Die neue Seite ist wie ein hochwertiger Salon-Auftritt aufgebaut: großer
              visueller Einstieg, klare Leistungsbereiche, eine vollständige Preisliste,
              echte Buchungsinteraktion und fake Kontaktdaten für eine reine Demo.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-charcoal-light sm:grid-cols-2">
              {["Fake-Telefon 0123456789", "Fake-Adresse", "Fake-Teamnamen", "Fiktive Bewertungen"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-rose-gold-dark" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {editorialImages.map((image) => (
              <article key={image.src} className="group overflow-hidden bg-white ring-1 ring-rose-gold/18">
                <div className="relative aspect-[4/5] overflow-hidden bg-champagne">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 32vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rose-gold-dark">
                    {image.label}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-charcoal">{image.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Leistungsbereiche"
            title="Beliebte Beauty-Leistungen"
            subtitle="Auf der Startseite zeigen wir nur eine Auswahl. Die komplette Preisliste findest du auf der Leistungen-Seite."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServiceCategories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <Link
                  key={category.id}
                  href="/leistungen"
                  className="group bg-cream p-6 text-white ring-1 ring-rose-gold/18 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(111,71,47,0.22)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-white text-rose-gold-dark shadow-sm">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/78">
                    {category.description}
                  </p>
                  <p className="mt-5 flex items-center gap-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                    {category.services[0].price}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href="/leistungen" className="btn-primary">
              Alle Leistungen ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-white py-20 text-charcoal sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-video overflow-hidden bg-cream ring-1 ring-rose-gold/20 lg:aspect-[4/5]">
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata">
              <source src="/videos/hero-manicure-background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-linear-to-t from-[#3b281b]/45 to-transparent" />
            <p className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.22em] text-white/85">
              Studio Reel
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-rose-gold">
              Video & Bilder
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Pinterest-inspirierter Look, eigene Demo-Assets
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-charcoal-light">
              Die Seite nutzt ein vorhandenes Maniküre-Video und neue generierte Bilder
              im Stil von Luxury Nail Salon, Nude French Nails und Beauty Salon Moodboards.
              Es werden keine echten Kundendaten oder echten Studioangaben verwendet.
            </p>
          </div>
        </Container>
      </section>

      <section id="buchung" className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Terminbuchung"
            title="Termin direkt vormerken"
            subtitle="Der Button funktioniert jetzt als Demo-Buchung auf der Website und zeigt nach dem Absenden eine fiktive Buchungsnummer."
          />
          <div className="mt-12">
            <BookingWidget />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading kicker="Team & Kontakt" title="Unser Atelier" align="left" />
            <p className="mt-7 text-sm leading-relaxed text-charcoal-light">
              Demo-Team: Mira Alen für Nails, Selin Moreau für Lash & Brow, Nora Vale
              für Kosmetik und Permanent Make-up.
            </p>
            <div className="mt-8 space-y-3 text-sm text-charcoal-light">
              <a href={siteConfig.phone.href} className="flex items-center gap-2 hover:text-rose-gold-dark">
                <Phone className="h-4 w-4 text-rose-gold-dark" />
                {siteConfig.phone.display}
              </a>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-rose-gold-dark"
              >
                <MapPin className="h-4 w-4 text-rose-gold-dark" />
                {fullAddress}
              </a>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.author} className="bg-cream p-5 text-white ring-1 ring-rose-gold/18">
                <RatingStars value={5} size={14} />
                <blockquote className="mt-4 text-sm leading-relaxed text-white/78">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
                  {testimonial.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
