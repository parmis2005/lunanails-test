import { Quote } from "lucide-react";
import RatingStars from "@/components/RatingStars";
import type { Testimonial } from "@/lib/site-data";

export default function TestimonialCard({ quote, author }: Testimonial) {
  return (
    <figure className="flex h-full flex-col rounded-sm bg-white p-6 ring-1 ring-rose-gold/18">
      <Quote className="h-6 w-6 text-rose-gold/55" strokeWidth={1.5} aria-hidden="true" />
      <RatingStars value={5} size={14} />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-light">
        „{quote}“
      </blockquote>
      <figcaption className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-charcoal">
        {author}
      </figcaption>
    </figure>
  );
}
