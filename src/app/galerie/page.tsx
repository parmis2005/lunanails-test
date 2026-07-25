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
  description: "Einblicke in die Arbeiten von Happy Nails Koblenz.",
};

const photoItems = [
  {
    src: "/images/gallery/gel-modellage-rot.jpg",
    alt: "Glänzende rote Gel-Modellage in Coffin-Form",
    label: "Gel-Modellage",
  },
  {
    src: "/images/gallery/french-nails-weiss.jpg",
    alt: "Klassische French Nails mit weißer Spitze",
    label: "French Nails",
  },
  {
    src: "/images/gallery/nailart-glitzer-nude.jpg",
    alt: "Nude Nageldesign mit Glitzer-Akzent",
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

      <section className="py-16 sm:py-20">
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

          <div className="mx-auto mt-14 flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-rose-100 bg-white px-6 py-8 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-600">
              <InstagramIcon className="h-5 w-5" />
            </div>
            <p className="text-sm leading-relaxed text-stone-600">
              Für aktuelle Nail-Looks aus unserem Studio folge uns gerne auf Instagram –
              dort teilen wir regelmäßig neue Designs.
            </p>
            <a
              href={siteConfig.social.instagram}
              className="text-sm font-semibold text-rose-600 hover:text-rose-700"
            >
              Zu unserem Instagram-Profil
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
