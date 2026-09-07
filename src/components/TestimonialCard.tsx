import { Quote } from "lucide-react";
import RatingStars from "@/components/RatingStars";
import type { Testimonial } from "@/lib/site-data";

export default function TestimonialCard({ quote, author }: Testimonial) {
  return (
    <figure className="flex h-full flex-col rounded-sm bg-cream p-5 text-white ring-1 ring-rose-gold/18">
      <Quote className="h-6 w-6 text-white/65" strokeWidth={1.5} aria-hidden="true" />
      <RatingStars value={5} size={14} />
      <blockquote className="mt-4 flex-1 text-sm leading-7 text-white/78">
        „{quote}“
      </blockquote>
      <figcaption className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
        {author}
      </figcaption>
    </figure>
  );
}
