import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-linear-to-b from-rose-50 to-cream-50 py-20">
      <Container className="text-center">
        <span className="font-serif text-6xl font-semibold text-rose-300">404</span>
        <h1 className="mt-4 font-serif text-2xl font-semibold text-stone-900 sm:text-3xl">
          Diese Seite konnte nicht gefunden werden
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-stone-600">
          Möglicherweise wurde die Seite verschoben oder existiert nicht mehr.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>
      </Container>
    </section>
  );
}
