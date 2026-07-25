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
        <span className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-rose-gold">
          {kicker}
        </span>
      )}
      <h2 className="font-serif text-4xl font-light leading-tight text-charcoal sm:text-5xl">
        {title}
      </h2>
      <div
        className={`section-divider mt-5 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {subtitle && (
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-charcoal-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
