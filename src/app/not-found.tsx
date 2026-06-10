import Link from "next/link";

/**
 * Custom not-found page.
 *
 * Next 16.2.7 + React 19.2.7 has a bug in the default _not-found
 * prerendering when there are custom <head> elements with array
 * children (the JSON-LD script in layout.tsx triggers the warning
 * cascade). Providing an explicit not-found page here silences the
 * prerender error and gives users a branded 404.
 */
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-purple-400 text-sm uppercase tracking-[0.18em]">
          404 · Página no encontrada
        </p>
        <h1 className="font-display text-white text-4xl md:text-5xl font-extrabold tracking-[-0.03em] mt-4">
          Esto se perdió entre los turnos.
        </h1>
        <p className="text-purple-200 text-base mt-4">
          La página que buscás no existe. Volvé al inicio y descubrí cómo
          MaatWork ordena tu local.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center mt-8 h-11 px-6 rounded-full text-white font-semibold text-sm bg-purple-600 hover:bg-purple-700 transition"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
