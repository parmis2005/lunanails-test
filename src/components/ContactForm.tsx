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
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-stone-700">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-700">
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-stone-700">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-stone-700">
            Gewünschte Leistung
          </label>
          <input
            id="service"
            name="service"
            type="text"
            placeholder="z. B. Gel-Modellage"
            className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-stone-700">
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Dein Wunschtermin, Fragen zu Leistungen, ..."
            className="w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-rose-600/20 transition-colors hover:bg-rose-700 sm:w-auto"
          >
            Anfrage senden
          </button>
          {sent && (
            <p className="mt-3 text-sm text-stone-600">
              Dein E-Mail-Programm sollte sich gerade mit einer vorausgefüllten Nachricht
              geöffnet haben. Falls nicht, schreib uns gerne direkt an{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-rose-600">
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
