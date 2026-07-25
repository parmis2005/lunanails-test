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
    <section className="relative overflow-hidden bg-charcoal py-16 text-white sm:py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,168,130,0.22),transparent_34%),linear-gradient(135deg,rgba(44,44,44,0.94),rgba(44,44,44,0.78))]"
        aria-hidden="true"
      />
      <Container className="relative text-center">
        {kicker && (
          <span className="text-xs font-bold uppercase tracking-[0.32em] text-rose-gold">
            {kicker}
          </span>
        )}
        <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-light leading-tight text-white sm:text-6xl">
          {title}
        </h1>
        <div className="section-divider mx-auto mt-6" aria-hidden="true" />
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/72 sm:text-base">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
