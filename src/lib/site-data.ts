// Zentrale Inhalts-Datei mit bewusst fiktiven Demo-Daten.
// Diese Daten gehoeren zu keinem echten Unternehmen.

export const siteConfig = {
  name: "Luna Beauty Atelier",
  shortName: "Luna Beauty",
  city: "Demostadt",
  tagline:
    "Luxuriöses Demo-Beauty-Studio für Nails, Feet, Lashes, Brows, Permanent Make-up und Kosmetik.",
  description:
    "Fiktives Luxus-Nagelstudio mit Maniküre, Pediküre, Wimpern, Lash & Brow, Permanent Make-up und Kosmetik.",

  phone: {
    display: "0123456789",
    href: "tel:0123456789",
  },

  email: "hello@luna-beauty.example",

  address: {
    street: "Diamantallee 18",
    zip: "45678",
    city: "Demostadt",
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

  rating: {
    value: 5.0,
    outOf: 5,
    count: 186,
    source: "Demo-Bewertungen",
  },

  social: {
    instagram: "https://www.pinterest.com/ideas/luxury-nail-salon/903471115328/",
    facebook: "#",
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
  duration: string;
  note?: string;
  // Fiktive Demo-Preise.
  verified?: boolean;
};

export type ServiceCategory = {
  id: string;
  icon: "hand" | "footprints" | "gem" | "sparkles" | "eye" | "brush";
  title: string;
  description: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "naegel",
    icon: "hand",
    title: "Nägel",
    description: "Russische Maniküre, Naturnagelaufbau, Refill und feine Nailart.",
    services: [
      { name: "Russische Maniküre", duration: "30 min", price: "45,00 €" },
      { name: "Naturnagelverlängerung", duration: "55 min", price: "75,00 €" },
      { name: "Naturnagelverstärkung", duration: "55 min", price: "55,00 €" },
      { name: "Modellage entfernen inkl. Maniküre", duration: "30 min", price: "48,00 €" },
      { name: "Auffüllen Natur kurz", duration: "55 min", price: "50,00 €" },
      { name: "Auffüllen Natur mittel", duration: "55 min", price: "53,00 €" },
      { name: "Auffüllen Natur lang", duration: "55 min", price: "56,00 €" },
      { name: "Farbe, Babyboomer oder French", duration: "5 min", price: "5,00 €" },
      { name: "Nailart pro Nagel", duration: "5 min", price: "2,00 €" },
      { name: "Reparatur pro Nagel", duration: "5 min", price: "5,00 €" },
    ],
  },
  {
    id: "fuesse",
    icon: "footprints",
    title: "Füße",
    description: "Kosmetische Pediküre, Gel und intensive Hornhautbehandlung.",
    services: [
      { name: "Kosmetische Pediküre ohne Gel", duration: "30 min", price: "45,00 €" },
      { name: "Kosmetische Pediküre intensive Hornhautbehandlung", duration: "60 min", price: "55,00 €" },
      { name: "Kosmetische Pediküre mit Gel", duration: "50 min", price: "55,00 €" },
      { name: "Pediküre mit Gel intensive Hornhautbehandlung", duration: "60 min", price: "65,00 €" },
    ],
  },
  {
    id: "wimpern",
    icon: "gem",
    title: "Wimpern",
    description: "Volumenverlängerung, Auffüllen und schonendes Entfernen.",
    services: [
      { name: "Wimpernverlängerung Volumen", duration: "120 min", price: "150,00 €" },
      { name: "Auffüllen Volumen 2 Wochen", duration: "60 min", price: "60,00 €" },
      { name: "Auffüllen Volumen 3 Wochen", duration: "60 min", price: "70,00 €" },
      { name: "Auffüllen Volumen 4 Wochen", duration: "90 min", price: "80,00 €" },
      { name: "Wimpern entfernen inkl. färben", duration: "30 min", price: "30,00 €" },
    ],
  },
  {
    id: "lash-brow",
    icon: "eye",
    title: "Lash & Brow",
    description: "Lifting, Färben und Formen für einen präzisen Blick.",
    services: [
      { name: "Lash Lifting inkl. Färben", duration: "45 min", price: "60,00 €" },
      { name: "Brow Lifting inkl. Färben & Zupfen", duration: "30 min", price: "60,00 €" },
      { name: "Lash Brow Kombi", duration: "60 min", price: "104,00 €" },
      { name: "Augenbrauen färben", duration: "15 min", price: "12,00 €" },
      { name: "Augenbrauen zupfen", duration: "15 min", price: "12,00 €" },
      { name: "Wimpern färben", duration: "15 min", price: "12,00 €" },
    ],
  },
  {
    id: "permanent-makeup",
    icon: "sparkles",
    title: "Permanent Make-up",
    description: "Powderbrows, Lippenpigmentierung, Lidstrich und PMU-Removal.",
    services: [
      { name: "Powderbrows / Erstbehandlung", duration: "120 min", price: "500,00 €" },
      { name: "Powderbrows / Auffrischung", duration: "60 min", price: "280,00 €" },
      { name: "Lippen Pigmentierung / Erstbehandlung", duration: "120 min", price: "500,00 €" },
      { name: "Lippen Pigmentierung / Auffrischung", duration: "60 min", price: "280,00 €" },
      { name: "Wimpernkranzverdichtung oben oder unten", duration: "60 min", price: "320,00 €" },
      { name: "Wimpernkranzverdichtung / Auffrischung", duration: "30 min", price: "160,00 €" },
      { name: "Permanent Make-up Entfernung pro Sitzung", duration: "60 min", price: "160,00 €" },
      { name: "Lidstrich", duration: "120 min", price: "380,00 €" },
    ],
  },
  {
    id: "kosmetik",
    icon: "brush",
    title: "Kosmetik",
    description: "Facials, Glow Treatments und gepflegte Haut als Beauty-Erweiterung.",
    services: [
      { name: "Signature Glow Facial", duration: "60 min", price: "89,00 €" },
      { name: "Hydra Clean Treatment", duration: "75 min", price: "119,00 €" },
      { name: "Dermaplaning Deluxe", duration: "45 min", price: "79,00 €" },
      { name: "Luxus Skin Ritual mit Maske", duration: "90 min", price: "149,00 €" },
    ],
  },
];

export const servicePricingNote =
  "Alle Angaben sind fiktive Demo-Preise. Je nach Aufwand, Hautbild, Nagellänge und gewünschtem Design kann der finale Preis variieren.";

// Fiktive Beispielbewertungen fuer die Demo-Webseite.
export type Testimonial = {
  quote: string;
  author: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sehr ruhige Atmosphäre, präzise Arbeit und ein luxuriöses Ergebnis. Meine French Nails sahen wochenlang perfekt aus.",
    author: "Mila Sommer",
  },
  {
    quote:
      "Ich habe Lash Lifting und Brow Styling gebucht. Die Beratung war klar, das Ergebnis natürlich und gepflegt.",
    author: "Nora Winter",
  },
  {
    quote:
      "Das Glow Facial war genau die Ergänzung, die ich gesucht habe. Professionell, hygienisch und sehr hochwertig.",
    author: "Lea Berger",
  },
];

export const highlights = [
  {
    icon: "calendar",
    title: "Online Terminbuchung",
    text: "Leistung, Datum und Uhrzeit direkt auf der Website auswählen.",
  },
  {
    icon: "map-pin",
    title: "Zentral gelegen",
    text: `${siteConfig.address.street}, zentral gelegen.`,
  },
  {
    icon: "shield-check",
    title: "Hygiene & Präzision",
    text: "Sterile Tools, ruhige Abläufe und saubere Detailarbeit.",
  },
  {
    icon: "heart",
    title: "Beauty-Konzept",
    text: "Nägel, Füße, Wimpern, Brows, PMU und Kosmetik aus einer Hand.",
  },
] as const;

export const bookingDays = [
  { label: "Di 08. Sep.", slots: ["10:00", "11:30", "14:00", "16:30", "18:00"] },
  { label: "Mi 09. Sep.", slots: ["09:30", "12:00", "15:00", "17:30"] },
  { label: "Do 10. Sep.", slots: ["10:30", "13:00", "16:00", "19:00"] },
  { label: "Fr 11. Sep.", slots: ["11:00", "13:30", "15:30", "18:30"] },
  { label: "Sa 12. Sep.", slots: ["09:00", "10:30", "12:00", "14:30"] },
] as const;
