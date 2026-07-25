import { type LucideIcon } from "lucide-react";

const gradients = [
  "from-champagne via-cream to-white",
  "from-white via-champagne to-cream",
  "from-sage/20 via-cream to-champagne",
  "from-rose-gold/30 via-champagne to-white",
];

export default function GalleryTile({
  icon: Icon,
  label,
  variant = 0,
  className = "",
}: {
  icon: LucideIcon;
  label: string;
  variant?: number;
  className?: string;
}) {
  const gradient = gradients[variant % gradients.length];

  return (
    <div
      className={`group relative flex aspect-square flex-col items-center justify-center gap-4 overflow-hidden rounded-sm bg-linear-to-br ${gradient} p-6 text-center ring-1 ring-rose-gold/18 ${className}`}
    >
      <div className="absolute inset-3 border border-white/60" aria-hidden="true" />
      <Icon
        className="relative h-9 w-9 text-rose-gold-dark transition-transform duration-300 group-hover:scale-110"
        strokeWidth={1.5}
      />
      <span className="relative text-xs font-bold uppercase tracking-[0.18em] text-charcoal-light">
        {label}
      </span>
    </div>
  );
}
