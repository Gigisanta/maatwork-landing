"use client";

/**
 * LeadForm — vía de conversión alternativa a WhatsApp: el usuario que no quiere
 * iniciar el chat deja nombre + WhatsApp y lo contactamos. Cablea el endpoint
 * ya existente POST /api/leads (zod + rate-limit + fallback sin-DB). Estados:
 * idle / submitting / success / error, con anuncios aria-live.
 */
import { useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";

type Status = "idle" | "submitting" | "success" | "error";

const INPUT_CLASS =
  "w-full h-12 px-4 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[14.5px] text-white placeholder:text-purple-400/80 focus:border-purple-600/55 focus:outline-none focus:ring-1 focus:ring-purple-600/40 transition-colors";

export function LeadForm() {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, whatsapp, source: "contact_form" }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setStatus("success");
        track("lead_submitted", { source: "contact_form", persisted: Boolean(data?.persisted) });
        return;
      }
      setStatus("error");
      if (res.status === 422) {
        setError("Revisá los datos: tu nombre y un WhatsApp válido (con característica).");
      } else if (res.status === 429) {
        setError("Demasiados intentos. Esperá un minuto y probá de nuevo.");
      } else {
        setError("No pudimos enviarlo. Escribinos por WhatsApp y lo resolvemos al toque.");
      }
    } catch {
      setStatus("error");
      setError("Sin conexión. Probá de nuevo o escribinos por WhatsApp.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex items-center justify-center gap-2.5 rounded-2xl border border-success/30 bg-success/10 px-5 py-4 text-[14.5px] font-medium text-success"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M20 6 9 17l-5-5" />
        </svg>
        ¡Listo! Te contactamos a la brevedad.
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-2.5 sm:flex-row">
      <label htmlFor="lead-nombre" className="sr-only">Tu nombre</label>
      <input
        id="lead-nombre"
        name="nombre"
        type="text"
        autoComplete="name"
        required
        minLength={2}
        maxLength={100}
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className={INPUT_CLASS}
      />
      <label htmlFor="lead-whatsapp" className="sr-only">Tu WhatsApp</label>
      <input
        id="lead-whatsapp"
        name="whatsapp"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        minLength={8}
        maxLength={32}
        placeholder="WhatsApp (con característica)"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        className={INPUT_CLASS}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="cta-violet inline-flex h-12 shrink-0 items-center justify-center rounded-xl px-6 text-[14.5px] font-semibold text-white transition disabled:opacity-70 sm:px-7"
      >
        {status === "submitting" ? "Enviando…" : "Que me contacten"}
      </button>
      </form>
      {error && (
        <p role="alert" aria-live="assertive" className="mt-2.5 text-[13px] text-coral">
          {error}
        </p>
      )}
    </div>
  );
}
