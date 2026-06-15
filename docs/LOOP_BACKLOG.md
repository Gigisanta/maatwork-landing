# Loop backlog — automejora landing MaatWork

Cron `51e4a6b6`, cada 30 min (sesión-only, expira 7 días). Misión: evolucionar la web
para más visualizaciones y clientes. Cada iteración toma el top de "Pendiente",
lo aplica, verifica y commitea. Cero fabricación de datos. Surgical edits.

## Pendiente (prioridad ↓)

1. **Perf: ruta `/` se compila `ƒ` (dynamic), no estática** — preexistente, peor TTFB/CDN/LCP para
   un landing. Encontrar qué fuerza el bailout (incluso `/_not-found` es ƒ → algo global en layout/Turbopack)
   y restaurar prerender estático. Alto impacto en "más visualizaciones".
2. **SEO alineación**: `layout.tsx` metadata sigue mixto (title/keywords B2B "obras/natatorios" vs
   JSON-LD SMB). Alinear a la narrativa SMB elegida; verificar OG/twitter image reales, sitemap/robots
   vs dominio prod (maat.work). Riesgo medio (afecta indexación) → cambios cuidadosos.
3. **Performance / LCP**: peso del video showcase (mp4+webm) en hero; medir LCP con Lighthouse;
   preconnect a fuentes; revisar si el video debe ser `preload="none"` + poster.
4. **Prueba social honesta**: conseguir 1-2 testimonios reales con permiso (hoy `verified:false`).
   Mientras tanto, no fabricar. Considerar logos/clientes reales si existen.
5. **Accesibilidad**: contraste de `purple-400/80` sobre fondo oscuro (verificar ratio AA);
   focus-visible ya existe; reduced-motion ya cubierto.
6. **Conversión**: A/B de copy de CTA; FAQ que cubra objeciones; coherencia marquee (rubros SMB) con
   la narrativa elegida.
7. **Video showcase**: transición con wipe blanco diagonal tosca en frame fijo → re-render del asset.

## Hecho

- [2026-06-15] **Analítica** (era el blocker de la misión): `@vercel/analytics` (zero-config, proyecto
  ya en Vercel) → pageviews automáticos vía `<Analytics/>` (en `<Suspense>`) + `AnalyticsEvents.tsx`
  (listener delegado en `a[href*="wa.me"]` → evento `whatsapp_cta` = señal de conversión). Build+typecheck OK.
  Falta: habilitar Web Analytics en el dashboard de Vercel (no requiere código).
- [2026-06-15] Investigación de mercado → `docs/MARKET_RESEARCH.md`. Decisión de posicionamiento:
  unificar hacia SMB-local + productos como prueba (alineado a la lógica existente, no inventado).
- [2026-06-15] Hero subcopy → outcome-driven SMB, sin jerga de agencia.
- [2026-06-15] FinalCTA: eliminado ticker de actividad **fabricado** ("Martín de Iron Gym empezó")
  → prueba honesta (productos reales operando). cero-fabricación.
- [2026-06-15] `scroll-margin-top:5.5rem` en `section[id]` → anchors del navbar ya no quedan tapados
  bajo el header fijo de 64px. (Nota: `:where()` lo descartaba Lightning CSS de Tailwind v4 → selector plano.)
- [2026-06-15] Headline hero: descendentes cortados en línea con gradiente
  (`background-clip:text` + `line-height:0.94`). Fix `padding-bottom:0.18em` en `.hero-title-accent`.
- [2026-06-15] Marquee: Yoga y Pilates compartían ícono `<Lotus />`. Pilates → nuevo `<Mat />`.
- [2026-06-15] Pricing: badge "MÁS POPULAR" sobre el único plan (ilógico) → "TODO INCLUIDO".
