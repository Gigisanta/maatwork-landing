type ProductVideoProps = {
  className?: string;
};

/**
 * ProductVideo — real product footage for the hero.
 *
 * Sources are existing MaatWork product screenshots rendered into a silent
 * 9s loop (webm + mp4 fallback). This replaces the synthetic DashboardPreview
 * mock so the hero feels credible instead of like a Figma/Lottie placeholder.
 */
export function ProductVideo({ className = "" }: ProductVideoProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[22px] border border-white/10 bg-purple-975 shadow-2xl",
        "ring-1 ring-purple-600/20",
        className,
      ].join(" ")}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.035] px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
        </div>
        <div className="ml-3 min-w-0 flex-1 rounded-full border border-white/[0.08] bg-black/20 px-3 py-1 text-xs text-purple-400/80">
          app.maatwork.com.ar/panel
        </div>
        <div className="hidden items-center gap-1.5 rounded-full border border-success/20 bg-success/10 px-2.5 py-1 text-xs font-medium text-success md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          Live
        </div>
      </div>

      <video
        className="block aspect-video w-full bg-purple-975 object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/product-demo-poster.jpg"
        aria-label="Video demostrativo del panel real de MaatWork"
      >
        <source src="/product-demo.webm" type="video/webm" />
        <source src="/product-demo.mp4" type="video/mp4" />
      </video>

      {/* Subtle bottom caption */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-purple-975/85 to-transparent px-4 pb-4 pt-14">
        <p className="text-sm font-medium text-white md:text-base">
          Agenda, clientes y operación en una vista real del producto.
        </p>
      </div>
    </div>
  );
}
