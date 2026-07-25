import Container from "@/components/Container";

export default function PageHero({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-rose-100 bg-linear-to-b from-rose-50 to-cream-50 py-14 sm:py-20">
      <Container className="text-center">
        {kicker && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
            {kicker}
          </span>
        )}
        <h1 className="mt-3 font-serif text-3xl font-semibold text-stone-900 sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
