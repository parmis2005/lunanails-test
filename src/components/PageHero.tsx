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
    <section className="relative overflow-hidden bg-white py-16 text-charcoal sm:py-24">
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(160,120,90,0.18))]"
        aria-hidden="true"
      />
      <Container className="relative text-center">
        {kicker && (
          <span className="text-xs font-bold uppercase tracking-[0.32em] text-rose-gold">
            {kicker}
          </span>
        )}
        <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-light leading-tight text-charcoal sm:text-6xl">
          {title}
        </h1>
        <div className="section-divider mx-auto mt-6" aria-hidden="true" />
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-charcoal-light sm:text-base">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
