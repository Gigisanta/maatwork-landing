"use client";

/**
 * ProductVideo — V7 multi-product showcase.
 * Real app screenshots + curated demo data: NMS, MaatWorkCRM, Infrannova, Varigas.
 */
export function ProductVideo() {
  return (
    <div className="product-frame relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 p-2 backdrop-blur">
      <div className="absolute left-6 top-5 z-20 flex items-center gap-2 rounded-full border live-chip px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
        </span>
        Productos reales
      </div>

      <div className="absolute right-6 top-5 z-20 hidden items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur sm:flex">
        NMS · CRM · Infrannova · Varigas
      </div>

      <video
        className="relative z-10 aspect-video w-full rounded-[24px] object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/product-showcase-poster.jpg"
        aria-label="Showcase de productos MaatWork: NMS, MaatWorkCRM, Infrannova y Varigas"
      >
        <source src="/product-showcase.webm" type="video/webm" />
        <source src="/product-showcase.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-2 z-10 rounded-[24px] ring-1 ring-white/10" />
      <div className="pointer-events-none absolute inset-x-10 bottom-0 h-24 rounded-full bg-cyan-400/20 blur-3xl" />
    </div>
  );
}
