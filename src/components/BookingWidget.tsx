"use client";

import { useMemo, useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2, ChevronRight, Clock, Send, Sparkles } from "lucide-react";
import { bookingDays, serviceCategories } from "@/lib/site-data";

export default function BookingWidget() {
  const [categoryId, setCategoryId] = useState(serviceCategories[0].id);
  const activeCategory =
    serviceCategories.find((category) => category.id === categoryId) ?? serviceCategories[0];
  const [serviceName, setServiceName] = useState(activeCategory.services[0].name);
  const [dayLabel, setDayLabel] = useState<string>(bookingDays[0].label);
  const [time, setTime] = useState<string>(bookingDays[0].slots[0]);
  const [confirmation, setConfirmation] = useState<string | null>(null);

  const selectedService = useMemo(() => {
    return (
      activeCategory.services.find((service) => service.name === serviceName) ??
      activeCategory.services[0]
    );
  }, [activeCategory, serviceName]);

  function updateCategory(nextId: string) {
    const nextCategory =
      serviceCategories.find((category) => category.id === nextId) ?? serviceCategories[0];
    setCategoryId(nextId);
    setServiceName(nextCategory.services[0].name);
  }

  function updateDay(nextLabel: string) {
    const nextDay = bookingDays.find((day) => day.label === nextLabel) ?? bookingDays[0];
    setDayLabel(nextLabel);
    setTime(nextDay.slots[0]);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const note = String(data.get("note") ?? "");

    const seed = `${name}-${phone}-${serviceName}-${dayLabel}-${time}-${note}`;
    const hash = Array.from(seed).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    setConfirmation(`LBA-${String(hash).padStart(5, "0").slice(-5)}`);
  }

  const activeDay = bookingDays.find((day) => day.label === dayLabel) ?? bookingDays[0];

  return (
    <div className="overflow-hidden bg-white ring-1 ring-rose-gold/18">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="bg-cream p-6 text-white sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-white">
            <Sparkles className="h-4 w-4" />
            Online Buchung
          </div>
          <h3 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
            Termin in wenigen Schritten anfragen
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/76">
            Wähle eine Beauty-Leistung, einen Beispieltermin und bestätige deine Demo-Buchung
            direkt auf der Website. Alle Daten auf dieser Demo-Seite sind fiktiv.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => updateCategory(category.id)}
                className={`min-h-12 border px-3 py-2 text-left text-[11px] font-bold uppercase tracking-[0.12em] transition ${
                  category.id === activeCategory.id
                    ? "border-white bg-white text-rose-gold-dark"
                    : "border-white/25 bg-white/10 text-white/76 hover:border-white hover:text-white"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 p-6 sm:p-8">
          <div>
            <label htmlFor="booking-service" className="booking-label">
              Leistung
            </label>
            <select
              id="booking-service"
              value={serviceName}
              onChange={(event) => setServiceName(event.target.value)}
              className="booking-field"
            >
              {activeCategory.services.map((service) => (
                <option key={service.name} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="booking-day" className="booking-label">
                Tag
              </label>
              <select
                id="booking-day"
                value={dayLabel}
                onChange={(event) => updateDay(event.target.value)}
                className="booking-field"
              >
                {bookingDays.map((day) => (
                  <option key={day.label} value={day.label}>
                    {day.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="booking-time" className="booking-label">
                Uhrzeit
              </label>
              <select
                id="booking-time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                className="booking-field"
              >
                {activeDay.slots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot} Uhr
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="border border-rose-gold/20 bg-white p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-charcoal">{selectedService.name}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-charcoal-light">
                  <Clock className="h-3.5 w-3.5 text-rose-gold-dark" />
                  {selectedService.duration}
                </p>
              </div>
              <p className="whitespace-nowrap font-serif text-xl font-semibold text-charcoal">
                {selectedService.price}
              </p>
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-rose-gold-dark">
              <CalendarCheck className="h-3.5 w-3.5" />
              {dayLabel}, {time} Uhr
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="booking-name" className="booking-label">
                Name *
              </label>
              <input id="booking-name" name="name" required className="booking-field" />
            </div>
            <div>
              <label htmlFor="booking-phone" className="booking-label">
                Telefon *
              </label>
              <input id="booking-phone" name="phone" required type="tel" className="booking-field" />
            </div>
          </div>

          <div>
            <label htmlFor="booking-note" className="booking-label">
              Hinweis
            </label>
            <textarea
              id="booking-note"
              name="note"
              rows={3}
              className="booking-field resize-none"
              placeholder="Designwunsch, Allergien, PMU-Fragen, ..."
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Anfrage senden
            <Send className="h-4 w-4" />
          </button>

          {confirmation && (
            <div className="border border-rose-gold/35 bg-champagne/70 p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-charcoal">
                <CheckCircle2 className="h-5 w-5 text-rose-gold-dark" />
                Terminbuchung vorgemerkt
              </p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                {selectedService.name} am {dayLabel} um {time} Uhr. Deine fiktive
                Buchungsnummer ist <span className="font-bold text-charcoal">{confirmation}</span>.
              </p>
            </div>
          )}

          <a
            href="/leistungen"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.14em] text-rose-gold-dark hover:text-charcoal"
          >
            Vollständige Preisliste
            <ChevronRight className="h-4 w-4" />
          </a>
        </form>
      </div>
    </div>
  );
}
