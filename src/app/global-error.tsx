"use client";

import { useEffect } from "react";

/**
 * Custom global-error page.
 *
 * Next 16.2.7 + React 19.2.7 throws a `useContext` error during
 * prerender of the default _global-error page when the layout uses
 * `next/font/google` with variable classes. Defining an explicit
 * global-error here bypasses the default renderer and silences the
 * build failure.
 *
 * NOTE: this MUST be a client component and MUST render its own
 * <html> + <body> since it replaces the root layout when shown.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="es-AR">
      <body
        style={{
          background: "var(--color-purple-975)",
          color: "var(--color-white)",
          fontFamily:
            "var(--font-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <p
            style={{
              color: "var(--color-purple-400)",
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Error inesperado
          </p>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 800,
              marginTop: 16,
              letterSpacing: "-0.03em",
            }}
          >
            Algo se rompió del lado del servidor.
          </h1>
          <p style={{ color: "var(--color-purple-200)", marginTop: 16, fontSize: 16 }}>
            Ya estamos trabajando en esto. Probá recargar la página o volvé al
            inicio.
          </p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: 32,
              height: 44,
              padding: "0 24px",
              borderRadius: 9999,
              background: "var(--color-purple-600)",
              color: "var(--color-white)",
              fontWeight: 600,
              fontSize: 14,
              border: "none",
              cursor: "pointer",
            }}
          >
            Reintentar
          </button>
        </div>
      </body>
    </html>
  );
}
