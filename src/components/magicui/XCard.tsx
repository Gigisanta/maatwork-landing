/**
 * XCard — tweet-card de MagicUI para la cuenta real @MaatWorkX
 * (x.com/MaatWorkX). Anatomía completa de tweet: avatar, nombre,
 * verificado, handle, cuerpo, fecha y fila de acciones.
 *
 * TODO: cuando haya un tweet fijado, reemplazar por react-tweet con el
 * ID real para embeber el tweet vivo (npm i react-tweet).
 */
import { MOTIFS } from "@/lib/motifs";

const X_URL = "https://x.com/MaatWorkX";

export function XCard({ className = "" }: { className?: string }) {
  return (
    <a
      href={X_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`ops-card group relative flex flex-col overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] ${className}`}
      aria-label="MaatWork en X (@MaatWorkX)"
    >
      {/* Header: avatar + nombre verificado + logo X */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.05] p-2 text-text-primary"
            dangerouslySetInnerHTML={{ __html: MOTIFS["logo-mark"] || "" }}
            aria-hidden
          />
          <div className="leading-tight">
            <p className="flex items-center gap-1 text-[14px] font-semibold text-text-primary">
              MaatWork
              <VerifiedBadge />
            </p>
            <p className="font-mono text-[11.5px] text-[var(--text-muted)]">@MaatWorkX</p>
          </div>
        </div>
        <XLogo />
      </div>

      {/* Cuerpo del tweet */}
      <p className="mt-3.5 text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
        Construimos sistemas de gestión y agentes de IA{" "}
        <span className="text-[var(--violet-300)]">en público</span>. Cada
        sistema que ves en maat.work está operando con usuarios reales, hoy.
      </p>

      <p className="mt-3 font-mono text-[11px] text-[var(--text-muted)]">
        maat.work · Argentina
      </p>

      {/* Fila de acciones — anatomía de tweet */}
      <div className="mt-auto flex items-center justify-between border-t border-white/[0.07] pt-3.5 text-[var(--text-muted)]">
        <span className="flex items-center gap-1.5 transition-colors group-hover:text-[var(--text-tertiary)]">
          <ReplyIcon />
        </span>
        <span className="flex items-center gap-1.5 transition-colors group-hover:text-[var(--text-tertiary)]">
          <RepostIcon />
        </span>
        <span className="flex items-center gap-1.5 transition-colors group-hover:text-[var(--text-tertiary)]">
          <HeartIcon />
        </span>
        <span className="inline-flex items-center rounded-full border border-white/[0.14] px-3 py-1 text-[11.5px] font-semibold text-text-primary transition-colors group-hover:border-[var(--violet-ring)] group-hover:text-[var(--violet-300)]">
          Seguir
        </span>
      </div>
    </a>
  );
}

function VerifiedBadge() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--violet-400)" aria-label="Cuenta verificada">
      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
    </svg>
  );
}

function XLogo() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 flex-none text-[var(--text-tertiary)] transition-colors group-hover:text-text-primary" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ReplyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function RepostIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
