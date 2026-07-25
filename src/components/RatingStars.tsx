import { Star } from "lucide-react";

export default function RatingStars({
  value,
  outOf = 5,
  size = 18,
}: {
  value: number;
  outOf?: number;
  size?: number;
}) {
  const stars = Array.from({ length: outOf }, (_, i) => {
    const fill = Math.min(1, Math.max(0, value - i));
    return fill;
  });

  return (
    <div className="flex items-center gap-1" aria-label={`${value} von ${outOf} Sternen`}>
      {stars.map((fill, i) => (
        <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
          <Star
            width={size}
            height={size}
            className="absolute inset-0 text-champagne"
            fill="currentColor"
          />
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${fill * 100}%` }}
          >
            <Star width={size} height={size} className="text-rose-gold" fill="currentColor" />
          </span>
        </span>
      ))}
    </div>
  );
}
