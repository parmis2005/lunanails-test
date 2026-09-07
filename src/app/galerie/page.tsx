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
    src: "/images/brand/luxury-salon-hero.png",
    alt: "Fiktives luxuriöses Beauty Atelier mit Maniküreplätzen",
    label: "Luxury Studio",
  },
  {
    src: "/images/brand/nude-french-nails.png",
    alt: "Fiktive Nude French Nails mit Chrome-Akzent",
    label: "Soft French",
  },
  {
    src: "/images/brand/beauty-treatment-room.png",
    alt: "Fiktiver luxuriöser Beauty Treatment Raum",
    label: "Kosmetik & PMU",
  },
] as const;

const decorativeItems = [
  { label: "Russian Manicure", icon: "hand" },
  { label: "Luxury Pedicure", icon: "footprints" },
  { label: "Volume Lashes", icon: "gem" },
  { label: "Brow Lifting", icon: "eye" },
  { label: "Powderbrows", icon: "sparkles" },
  { label: "Glow Facial", icon: "brush" },
  { label: "Lip Blush", icon: "sparkles" },
  { label: "Pinterest Mood", icon: "heart" },
] as const;

export default function GaleriePage() {
  return (
    <>
      <PageHero
        kicker="Galerie"
        title="Luxury Beauty Moodboard"
        subtitle="Fiktive Beispielbilder und Pinterest-inspirierte Beauty-Moods für Nägel, Kosmetik, Wimpern, Brows und PMU."
      />

      <section className="bg-white py-16 sm:py-20">
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

          <div className="mx-auto mt-14 flex max-w-xl flex-col items-center gap-5 rounded-sm bg-cream px-6 py-8 text-center text-white ring-1 ring-rose-gold/18">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-rose-gold-dark">
              <InstagramIcon className="h-5 w-5" />
            </div>
            <p className="text-sm leading-relaxed text-white/76">
              Die visuelle Richtung orientiert sich an Pinterest-Moods für Luxury Nail Salon,
              Nude French Nails und Permanent Make-up. Die hier verwendeten Inhalte bleiben
              fiktive Demo-Inhalte.
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-white/40 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-white hover:text-white/80"
            >
              Pinterest-Inspiration ansehen
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
