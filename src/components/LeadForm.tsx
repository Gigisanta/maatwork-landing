"use client";

/**
 * LeadForm — vía de conversión alternativa a WhatsApp: el usuario deja sus datos
 * y lo contactamos. Califica el lead (tipo de necesidad + rubro) para que la
 * primera conversación sea de cierre, no de diagnóstico. Cablea POST /api/leads
 * (zod + rate-limit + fallback sin-DB). Estados idle/submitting/success/error con
 * aria-live. En éxito ofrece seguir por WhatsApp con el contexto ya cargado.
 */
import { useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import { waLink } from "@/lib/whatsapp";

type Status = "idle" | "submitting" | "success" | "error";
type Necesidad = "no_define" | "producto" | "a_medida" | "automatizacion" | "integracion";

const NECESIDADES: { value: Necesidad; label: string }[] = [
  { value: "no_define", label: "¿Qué necesitás?" },
  { value: "producto", label: "Producto base operativo" },
  { value: "a_medida", label: "Software a medida" },
  { value: "automatizacion", label: "Automatización / IA" },
  { value: "integracion", label: "Integraciones / facturación" },
];

const NECESIDAD_TEXT: Record<Necesidad, string> = {
  no_define: "quiero contarles un proyecto",
  producto: "quiero arrancar con el producto base",
  a_medida: "quiero un desarrollo a medida",
  automatizacion: "quiero automatizar mi negocio",
  integracion: "quiero integrar y facturar con ARCA",
};

const INPUT_CLASS =
  "w-full h-12 px-4 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[14.5px] text-white placeholder:text-purple-400/80 focus:border-purple-600/55 focus:outline-none focus:ring-1 focus:ring-purple-600/40 transition-colors";

export function LeadForm() {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [necesidad, setNecesidad] = useState<Necesidad>("no_define");
  const [rubro, setRubro] = useState("");
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
        body: JSON.stringify({ nombre, whatsapp, necesidad, rubro, source: "contact_form" }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setStatus("success");
        track("lead_submitted", { source: "contact_form", necesidad, persisted: Boolean(data?.persisted) });
        return;
      }
      setStatus("error");
      if (res.status === 422) {
        setError("Revisá los datos: tu nombre y un WhatsApp válido con característica.");
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
    const waMsg = `Hola MaatWork, soy ${nombre || "—"} y ${NECESIDAD_TEXT[necesidad]}${rubro ? ` (${rubro})` : ""}`;
    return (
      <div
        role="status"
        className="rounded-2xl border border-success/30 bg-success/10 px-5 py-5 text-center"
      >
        <div className="flex items-center justify-center gap-2.5 text-[15px] font-semibold text-success">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 6 9 17l-5-5" />
          </svg>
          ¡Listo! Te contactamos antes de las 24 hs hábiles.
        </div>
        <p className="mt-2 text-[13.5px] text-slate-300">
          ¿Querés hablar ahora? Seguimos por WhatsApp con tu consulta ya cargada.
        </p>
        <a
          href={waLink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-whatsapp mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-[14.5px] font-semibold text-white hover-scale"
        >
          Seguir por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-2.5">
        <div className="grid gap-2.5 sm:grid-cols-2">
          <div>
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
          </div>
          <div>
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
              placeholder="WhatsApp (ej: 299 456 7890)"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className={INPUT_CLASS}
            />
          </div>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-necesidad" className="sr-only">¿Qué necesitás?</label>
            <select
              id="lead-necesidad"
              name="necesidad"
              value={necesidad}
              onChange={(e) => setNecesidad(e.target.value as Necesidad)}
              className={`${INPUT_CLASS} appearance-none`}
            >
              {NECESIDADES.map((n) => (
                <option key={n.value} value={n.value} className="bg-bg-base text-white">
                  {n.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="lead-rubro" className="sr-only">¿A qué se dedica tu negocio?</label>
            <input
              id="lead-rubro"
              name="rubro"
              type="text"
              maxLength={80}
              placeholder="¿A qué se dedica tu negocio?"
              value={rubro}
              onChange={(e) => setRubro(e.target.value)}
              className={INPUT_CLASS}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="cta-violet inline-flex h-12 shrink-0 items-center justify-center rounded-xl px-6 text-[14.5px] font-semibold text-white transition disabled:opacity-70 sm:px-7"
        >
          {status === "submitting" ? "Enviando…" : "Me contactan hoy"}
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
