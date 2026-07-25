export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment}`}>
      {kicker && (
        <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
          {kicker}
        </span>
      )}
      <h2 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
