import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} – Nagelstudio in ${siteConfig.city}`,
    template: `%s – ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Nagelstudio Koblenz",
    "Maniküre Koblenz",
    "Pediküre Koblenz",
    "Gel Nägel Koblenz",
    "Nailart Koblenz",
    siteConfig.name,
  ],
  openGraph: {
    title: `${siteConfig.name} – Nagelstudio in ${siteConfig.city}`,
    description: siteConfig.description,
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${poppins.variable} ${playfair.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream-50 font-sans text-stone-800 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTA />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NailSalon",
              name: siteConfig.name,
              telephone: siteConfig.phone.display,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                postalCode: siteConfig.address.zip,
                addressLocality: siteConfig.address.city,
                addressCountry: "DE",
              },
              openingHoursSpecification: siteConfig.hours
                .filter((h) => !("closed" in h && h.closed))
                .map((h) => ({
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: h.day,
                  opens: "10:00",
                  closes: "20:00",
                })),
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: siteConfig.rating.value,
                bestRating: siteConfig.rating.outOf,
              },
              description: siteConfig.description,
            }),
          }}
        />
      </body>
    </html>
  );
}
