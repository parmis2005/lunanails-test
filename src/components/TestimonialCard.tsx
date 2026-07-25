import { Quote } from "lucide-react";
import RatingStars from "@/components/RatingStars";
import type { Testimonial } from "@/lib/site-data";

export default function TestimonialCard({ quote, author }: Testimonial) {
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-900/5">
      <Quote className="h-6 w-6 text-rose-300" strokeWidth={1.5} aria-hidden="true" />
      <RatingStars value={5} size={14} />
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-stone-700">
        „{quote}“
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-stone-900">
        {author}
      </figcaption>
    </figure>
  );
}
