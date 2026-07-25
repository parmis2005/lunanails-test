import type { Metadata } from "next";
import Container from "@/components/Container";
import GalleryTile from "@/components/GalleryTile";
import PageHero from "@/components/PageHero";
import PhotoTile from "@/components/PhotoTile";
import { InstagramIcon } from "@/components/SocialIcons";
import { iconMap } from "@/lib/icons";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Fiktive Beispielbilder fuer ein Demo-Nagelstudio.",
};

const photoItems = [
  {
    src: "/images/gallery/fake-nude-manicure.jpg",
    alt: "Fiktive Nude-Maniküre an einem Salon-Tisch",
    label: "Gel-Modellage",
  },
  {
    src: "/images/gallery/fake-french-manicure.jpg",
    alt: "Fiktive klassische French Nails mit weißer Spitze",
    label: "French Nails",
  },
  {
    src: "/images/gallery/fake-glitter-nailart.jpg",
    alt: "Fiktives Nude-Nageldesign mit Glitzer-Akzent",
    label: "Nailart mit Glitzer",
  },
] as const;

const decorativeItems = [
  { label: "Babyboomer", icon: "gem" },
  { label: "Klassische Maniküre", icon: "hand" },
  { label: "Pediküre", icon: "footprints" },
  { label: "Shellac", icon: "hand" },
  { label: "Sommer-Design", icon: "sparkles" },
] as const;

export default function GaleriePage() {
  return (
    <>
      <PageHero
        kicker="Galerie"
        title="Einblicke in unsere Arbeit"
        subtitle="Ein paar echte Ergebnisse aus unserem Studio – weitere Fotos folgen laufend."
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {photoItems.map((item, i) => (
              <PhotoTile
                key={item.src}
                src={item.src}
                alt={item.alt}
                label={item.label}
                priority={i === 0}
              />
            ))}
            {decorativeItems.map((item, i) => (
              <GalleryTile
                key={item.label}
                icon={iconMap[item.icon]}
                label={item.label}
                variant={i}
              />
            ))}
          </div>

          <div className="mx-auto mt-14 flex max-w-xl flex-col items-center gap-5 rounded-sm bg-white px-6 py-8 text-center ring-1 ring-rose-gold/18">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne text-rose-gold-dark">
              <InstagramIcon className="h-5 w-5" />
            </div>
            <p className="text-sm leading-relaxed text-charcoal-light">
              Für aktuelle Nail-Looks aus unserem Studio folge uns gerne auf Instagram –
              dort teilen wir regelmäßig neue Designs.
            </p>
            <a
              href={siteConfig.social.instagram}
              className="border-b border-rose-gold/40 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-rose-gold-dark hover:text-charcoal"
            >
              Zu unserem Instagram-Profil
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
