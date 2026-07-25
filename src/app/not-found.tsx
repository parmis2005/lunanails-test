import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-charcoal py-20 text-white">
      <Container className="text-center">
        <span className="font-serif text-6xl font-light text-rose-gold">404</span>
        <h1 className="mt-4 font-serif text-3xl font-light text-white sm:text-5xl">
          Diese Seite konnte nicht gefunden werden
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/65">
          Möglicherweise wurde die Seite verschoben oder existiert nicht mehr.
        </p>
        <Link
          href="/"
          className="btn-primary mt-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>
      </Container>
    </section>
  );
}
