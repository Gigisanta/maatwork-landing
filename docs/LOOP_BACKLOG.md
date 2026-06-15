# Loop backlog — automejora landing MaatWork

Cron `51e4a6b6`, cada 30 min (sesión-only, expira 7 días). Misión: evolucionar la web
para más visualizaciones y clientes. Cada iteración toma el top de "Pendiente",
lo aplica, verifica y commitea. Cero fabricación de datos. Surgical edits.

## Pendiente (prioridad ↓)

1. **Posicionamiento split-brain** (impacto alto, decisión de producto). Hero + ProductEcosystem
   venden verticales B2B (NMS natatorios, Infrannova obras, Varigas extintores); marquee +
   ProblemSolution + footer + FinalCTA venden gimnasios/locales con turnos. Dos ICP en una página.
   Unificar hacia UN ICP. NO inventar: requiere confirmación del owner antes de reescribir copy.
2. **SEO**: verificar metadata por sección, `<title>`/description, OG/twitter image reales,
   JSON-LD Organization/Product, sitemap.ts + robots.ts coherentes con dominio prod.
3. **Performance / LCP**: peso del video showcase (mp4+webm) en hero; lazy/poster; medir LCP con
   Lighthouse; preconnect; fuentes display con font-display swap.
4. **Accesibilidad**: contraste texto purple-400/80 sobre fondo oscuro; focus states de sliders y
   CTAs; labels de inputs; reduced-motion ya cubierto en StaggeredText.
5. **Analítica**: confirmar que hay tracking de pageviews + clicks de CTA WhatsApp (sin esto no se
   puede medir "más visualizaciones y clientes"). Si falta, proponer e instalar algo liviano.
6. **Video showcase**: transición con wipe blanco diagonal se ve tosca en frame fijo. Asset baked
   (.mp4/.webm) → requiere re-render del video, no CSS.
7. **Conversión**: A/B de copy de CTA, prueba de urgencia/escasez honesta, FAQ que cubra objeciones.

## Hecho

- [2026-06-15] Headline hero: descendentes cortados en línea con gradiente
  (`background-clip:text` + `line-height:0.94`). Fix `padding-bottom:0.18em` en `.hero-title-accent`.
- [2026-06-15] Marquee: Yoga y Pilates compartían ícono `<Lotus />`. Pilates → nuevo `<Mat />`.
- [2026-06-15] Pricing: badge "MÁS POPULAR" sobre el único plan (ilógico) → "TODO INCLUIDO".
