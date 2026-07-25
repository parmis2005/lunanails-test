"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Terminanfrage von ${name}`;
    const bodyLines = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      service ? `Gewünschte Leistung: ${service}` : null,
      "",
      message,
    ].filter((line): line is string => line !== null);

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-charcoal-light">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-sm border border-black/12 bg-white px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-rose-gold focus:ring-2 focus:ring-champagne"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-charcoal-light">
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-sm border border-black/12 bg-white px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-rose-gold focus:ring-2 focus:ring-champagne"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-charcoal-light">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-sm border border-black/12 bg-white px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-rose-gold focus:ring-2 focus:ring-champagne"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="service" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-charcoal-light">
            Gewünschte Leistung
          </label>
          <input
            id="service"
            name="service"
            type="text"
            placeholder="z. B. Gel-Modellage"
            className="w-full rounded-sm border border-black/12 bg-white px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-rose-gold focus:ring-2 focus:ring-champagne"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-charcoal-light">
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Dein Wunschtermin, Fragen zu Leistungen, ..."
            className="w-full rounded-sm border border-black/12 bg-white px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-rose-gold focus:ring-2 focus:ring-champagne"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="btn-primary w-full px-6 py-3 text-xs sm:w-auto"
          >
            Anfrage senden
          </button>
          {sent && (
            <p className="mt-3 text-sm text-charcoal-light">
              Dein E-Mail-Programm sollte sich gerade mit einer vorausgefüllten Nachricht
              geöffnet haben. Falls nicht, schreib uns gerne direkt an{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-rose-gold-dark">
                {siteConfig.email}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
