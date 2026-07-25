import Image from "next/image";

export default function PhotoTile({
  src,
  alt,
  label,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`group relative aspect-square overflow-hidden rounded-sm bg-charcoal ring-1 ring-rose-gold/18 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 25vw, 45vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {label && (
        <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-charcoal/78 via-charcoal/20 to-transparent px-4 pb-4 pt-10 text-xs font-bold uppercase tracking-[0.16em] text-white">
          {label}
        </span>
      )}
    </div>
  );
}
