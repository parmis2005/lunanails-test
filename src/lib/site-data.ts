// Zentrale Inhalts-Datei. Hier an EINER Stelle alle echten Geschäftsdaten pflegen.
// Felder mit "TODO" sind Platzhalter und sollten vor dem Livegang geprüft/ersetzt werden.

export const siteConfig = {
  name: "Happy Nails Koblenz",
  shortName: "Happy Nails",
  city: "Koblenz",
  tagline:
    "Schöne Fingernägel – eine Selbstverständlichkeit für jede gepflegte und auf ihr Aussehen bedachte Frau.",
  description:
    "Nagelstudio in Koblenz für Maniküre, Pediküre, Gel-Modellage und Nailart. Kurzfristige Termine, saubere Arbeit, faire Preise.",

  // TODO: Telefonnummer verifizieren – aus Verzeichniseintrag ohne Formatierung übernommen
  // und als deutsche Rufnummer (Vorwahl Koblenz 0261) rekonstruiert.
  phone: {
    display: "0261 95232366",
    href: "tel:+4926195232366",
  },

  // TODO: durch echte geschäftliche E-Mail-Adresse ersetzen (Quelle lieferte nur einen
  // generischen Platzhalter, keine echte Studio-Adresse).
  email: "info@happynails-koblenz.de",

  // WICHTIG: Die Quellseite nannte "Moselweißer Str. 117-119", das reale Google-Maps-Profil
  // "Happy Nails" in Koblenz löst jedoch auf Hausnummer 40 auf (4,2 ★, 152 Bewertungen).
  // Bitte unbedingt die tatsächliche Adresse gegenprüfen, bevor die Seite live geht.
  address: {
    street: "Moselweißer Str. 40",
    zip: "56073",
    city: "Koblenz",
    country: "Deutschland",
  },

  hours: [
    { day: "Montag", time: "10:00 – 20:00" },
    { day: "Dienstag", time: "10:00 – 20:00" },
    { day: "Mittwoch", time: "10:00 – 20:00" },
    { day: "Donnerstag", time: "10:00 – 20:00" },
    { day: "Freitag", time: "10:00 – 20:00" },
    { day: "Samstag", time: "10:00 – 20:00" },
    { day: "Sonntag", time: "Geschlossen", closed: true },
  ],

  // TODO: Bewertungsstand regelmäßig mit dem echten Google-Profil abgleichen.
  rating: {
    value: 4.2,
    outOf: 5,
    count: 152,
    source: "Google Bewertungen",
  },

  social: {
    instagram: "https://www.instagram.com/happynailskoblenz/?hl=de",
    facebook: "https://www.facebook.com/HappyNailsKoblenz/?locale=de_DE",
  },
} as const;

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`;

export const googleMapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${siteConfig.name} ${fullAddress}`
)}&output=embed`;

export const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  fullAddress
)}`;

export const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.name} ${fullAddress}`
)}`;

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/galerie", label: "Galerie" },
  { href: "/bewertungen", label: "Bewertungen" },
  { href: "/kontakt", label: "Kontakt" },
];

export type Service = {
  name: string;
  price: string;
  // "verified" = Preis stammt 1:1 aus der Quelle. Alle anderen sind Richtwerte (siehe Hinweis
  // auf der Leistungen-Seite) und sollten vom Studio final geprüft werden.
  verified?: boolean;
};

export type ServiceCategory = {
  id: string;
  icon: "hand" | "footprints" | "gem" | "sparkles";
  title: string;
  description: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "manikuere",
    icon: "hand",
    title: "Maniküre",
    description: "Pflege und Verschönerung für gepflegte Hände.",
    services: [
      { name: "Klassische Maniküre", price: "ab 25 €" },
      { name: "Maniküre mit Lackieren", price: "ab 32 €" },
      { name: "Shellac / Gel-Lack", price: "ab 30 €" },
      { name: "Nagelverlängerung Gel (Hände)", price: "ab 45 €" },
    ],
  },
  {
    id: "pedikuere",
    icon: "footprints",
    title: "Pediküre",
    description: "Entspannte Fußpflege für den perfekten Auftritt.",
    services: [
      { name: "Fußpflege mit Lack", price: "ab 30 €" },
      { name: "Pediküre mit French Gel", price: "47 €", verified: true },
      { name: "Medizinische Fußpflege", price: "ab 35 €" },
    ],
  },
  {
    id: "gel-modellage",
    icon: "gem",
    title: "Gel & Modellage",
    description: "Langanhaltende Modellagen in Wunschform und -länge.",
    services: [
      { name: "Vollmodellage Gel", price: "ab 50 €" },
      { name: "Auffüllen der Modellage", price: "ab 35 €" },
      { name: "Babyboomer", price: "ab 55 €" },
      { name: "French Gel", price: "ab 45 €" },
    ],
  },
  {
    id: "nailart",
    icon: "sparkles",
    title: "Nailart & Extras",
    description: "Kleine Details mit großer Wirkung.",
    services: [
      { name: "Nailart pro Nagel", price: "ab 2 €" },
      { name: "French-Effekt Aufpreis", price: "ab 5 €" },
      { name: "Gel-/Lackentfernung", price: "ab 10 €" },
    ],
  },
];

export const servicePricingNote =
  "Alle Preise sind Richtwerte und können je nach Aufwand, Nagellänge und gewünschtem Design variieren. Sprich uns gerne für ein individuelles Angebot an.";

// Beispieltexte, keine echten, verifizierten Kundenbewertungen (Quelle lieferte keine
// eindeutig zuordenbaren Bewertungen). Bitte vor Veröffentlichung durch echte,
// freigegebene Kundenstimmen ersetzen – siehe Hinweis in README.
export type Testimonial = {
  quote: string;
  author: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sehr freundliches Team, saubere Arbeit und meine Nägel halten richtig lange. Ich komme gerne wieder.",
    author: "Stammkundin",
  },
  {
    quote:
      "Termin kurzfristig bekommen, top Beratung und das Ergebnis war genau so, wie ich es mir gewünscht habe.",
    author: "Kundin, Koblenz",
  },
  {
    quote:
      "Sehr entspannte Atmosphäre und pünktlicher Termin ohne lange Wartezeit. Kann ich nur empfehlen.",
    author: "Erstbesuch",
  },
];

export const highlights = [
  {
    icon: "calendar",
    title: "Kurzfristige Termine",
    text: "Unkompliziert einen Termin sichern – auch spontan.",
  },
  {
    icon: "map-pin",
    title: "Zentral in Koblenz",
    text: `${siteConfig.address.street}, gut erreichbar.`,
  },
  {
    icon: "shield-check",
    title: "Hygiene & Sorgfalt",
    text: "Sauberes Arbeiten nach hohem Qualitätsstandard.",
  },
  {
    icon: "heart",
    title: "Persönliche Beratung",
    text: "Individuell auf deine Wünsche abgestimmt.",
  },
] as const;
