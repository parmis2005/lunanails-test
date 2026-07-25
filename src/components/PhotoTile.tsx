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
      className={`group relative aspect-square overflow-hidden rounded-2xl shadow-sm ring-1 ring-rose-900/5 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 25vw, 45vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {label && (
        <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 via-black/10 to-transparent px-3 pb-2.5 pt-6 text-sm font-medium text-white">
          {label}
        </span>
      )}
    </div>
  );
}
