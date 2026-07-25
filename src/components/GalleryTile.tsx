import { type LucideIcon } from "lucide-react";

const gradients = [
  "from-rose-200 via-rose-100 to-cream-100",
  "from-cream-200 via-rose-100 to-rose-200",
  "from-stone-200 via-cream-100 to-rose-100",
  "from-rose-300 via-rose-100 to-cream-50",
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
      className={`group relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-linear-to-br ${gradient} p-6 text-center shadow-sm ring-1 ring-rose-900/5 ${className}`}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/30 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
      <Icon
        className="relative h-9 w-9 text-rose-600/70 transition-transform duration-300 group-hover:scale-110"
        strokeWidth={1.5}
      />
      <span className="relative text-sm font-medium text-stone-700">{label}</span>
    </div>
  );
}
