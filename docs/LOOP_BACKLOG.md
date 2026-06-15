# Loop backlog — automejora landing MaatWork

Cron `51e4a6b6`, cada 30 min (sesión-only, expira 7 días). Misión: evolucionar la web
para más visualizaciones y clientes. Cada iteración toma el top de "Pendiente",
lo aplica, verifica y commitea. Cero fabricación de datos. Surgical edits.

## Pendiente (prioridad ↓)

1. **Prueba social real** (BLOQUEADO en owner): conseguir 1-2 testimonios reales con nombre+permiso
   (hoy `verified:false`, framing honesto ya OK). No fabricar. Si hay clientes/logos reales, sumarlos.
2. **Conversión**: A/B de copy de CTA; FAQ que cubra objeciones; coherencia marquee (rubros SMB) con
   la narrativa elegida.
3. **Video showcase**: transición con wipe blanco diagonal tosca en frame fijo → re-render del asset.

### Para confirmar con el owner
- (vacío — dominio `maat.work` confirmado por el owner 2026-06-15)

## Hecho

- [2026-06-15] **🎥 Video showcase buggy → ProductShowcase React (data-driven, dark).** QA visual con
  chrome-devtools encontró 3 defectos baked en `product-showcase.{mp4,webm}`: (a) escena NMS = pantalla
  **blanca vacía** (parecía rota), (b) **wipe diagonal blanco tosco** cruzando CRM/Infrannova/Varigas
  (el defecto del backlog), (c) pills de módulos blanco-sobre-blanco (ilegibles). Infixeable con ffmpeg
  (baked) y las apps reales están auth-walled. Reemplazado por `ProductShowcase.tsx`: app-window dark con
  browser-chrome, 4 productos reales ciclando con crossfade CSS (sin wipe, sin blanco), datos DEMO marcados
  basados en entidades reales observadas en las apps vivas (Infrannova obras 12/avance 68%/alertas 3;
  Varigas 486 extintores). Pausa en hover, tabs clickeables, no auto-cicla con reduced-motion. Borrados
  ProductVideo.tsx + 3 assets (−1.4 MB → perf). Verificado desktop 1440 + mobile 390, sin overflow. Build estático OK.
- [2026-06-15] **🟢 WhatsApp real cargado (camino de conversión vivo).** Owner pasó el número real
  (299 456-9840). Cambio de 1 línea en `src/lib/whatsapp.ts` (`5492994569840`, formato AR 54+9+área).
  Los 6 CTA verificados en dev apuntando al número real, cero placeholder. La conversión ya no muere.
- [2026-06-15] **WhatsApp centralizado a 1 fuente de verdad.** Auditoría mobile detectó que los 6 CTA
  de WhatsApp tenían el número hardcodeado (5 hrefs literales + 2 consts duplicadas) → cambiarlo era
  editar 6 lugares (riesgo de dejar un CTA apuntando mal). Creado `src/lib/whatsapp.ts` con
  `WHATSAPP_NUMBER` + `waLink(text)` (codifica solo). Todos los call sites importan. Cero cambio de
  comportamiento (6 hrefs verificados idénticos en dev). Destraba el item #0: swap del número = 1 línea.
- [2026-06-15] **Métricas: Speed Insights (RUM de Core Web Vitals).** Ya teníamos pageviews + evento
  `whatsapp_cta` (Web Analytics), faltaba perf de usuario real. `@vercel/speed-insights/next` +
  `<SpeedInsights/>` en layout (junto a Analytics, en Suspense) + `vercel project speed-insights`
  (`enabled:true`). CWV de campo alimentan ranking SEO → más visualizaciones. Build estático OK.
- [2026-06-15] **Owner unblock: dominio + merge + deploy + analytics.** Owner confirmó dominio prod =
  `maat.work` (el código ya lo usaba → sin cambios). Consolidado TODO a `main`: `feat/v6-foundation`
  ya era ancestro de `loop/landing-autoimprove`; merge fast-forward de las 12 mejoras del loop → `main`
  → push. Vercel auto-deployó `a46f48c` a producción (state READY). **Web Analytics habilitado** vía
  `vercel project web-analytics` (`enabled:true`) → cierra el último gap de la misión de métricas.
- [2026-06-15] **Perf: `dns-prefetch` a wa.me** (CTA WhatsApp = camino de conversión dominante, 5+ links).
  Calienta el DNS para acelerar el handoff al click. 1 línea en head. (dns-prefetch, no preconnect: es
  navegación probable, no recurso del load.) 404 (`not-found.tsx`) auditado: ya está branded con CTA, sin cambios.
- [2026-06-15] **A11y: skip-to-content link (WCAG 2.4.1).** Faltaba bypass-blocks para teclado/lectores.
  Agregado `<a class="skip-link" href="#main-content">Saltar al contenido</a>` (oculto hasta focus),
  `<main id="main-content" tabIndex={-1}>` como target. Verificado: aparece al focusear, build estático OK.
  (Reduced-motion ya estaba cubierto con blanket en globals — no era gap.)
- [2026-06-15] **Dead code + audit mobile completo.** Removido `LockSpinStyle` en Features.tsx (componente
  nunca renderizado; los keyframes `lock-spin` ya viven en globals.css → era redundante, animación intacta).
  Audit mobile (390px) de las secciones que faltaban — HowItWorks, ProductEcosystem y menú mobile del navbar:
  todas renderizan bien, sin overflow ni roturas. **Cobertura de audit ahora completa** (desktop+mobile, todas
  las secciones). Próximas iteraciones: enfocar en items desbloqueados por el owner, no re-auditar lo sano.
- [2026-06-15] **Footer: form de newsletter muerto → CTA WhatsApp.** El form "Recibir tips" tenía
  `onSubmit preventDefault` sin handler (no hacía nada, sin feedback = UI engañosa). El schema de leads
  exige nombre+whatsapp (no acepta email-only) y no hay infra de email para "tips". Reemplazado por el
  CTA de WhatsApp (canal que sí funciona en todo el sitio) + "Te respondemos en el día". Sin promesa falsa.
  Footer dejó de necesitar `"use client"` → server component (menos JS). Build estático OK.
  (Si querés captura real de email: relajar leadSchema para `footer_newsletter` + wire fetch + infra de envío.)
- [2026-06-15] **Métricas fabricadas en Features (cero-fabricación).** Audit mobile (390px) encontró 2
  claims inventados presentados como hechos: title "Recuperá **8 hs/semana**" → "Recuperá horas cada
  semana"; desc "Recordatorios automáticos. **34% menos ausencias**." → "…que reducen ausencias".
  (Los widgets de hover con $/% son mockups demo ilustrativos, consistentes con el framing — se dejan.)
  Audit mobile además: Pricing card, calculadora ROI y bento Features renderizan bien en 390px (sin overflow).
- [2026-06-15] **Honestidad en FAQ/Features (barrera cero-fabricación + no quemar reputación).**
  (a) FAQ "¿Sirve para mi rubro?" decía "**Hoy tenemos clientes** en [6 rubros]" → contradecía la propia
  sección Testimonials (casos piloto, sin clientes nombrados). Reescrito a "Está pensado para…" (fit, no roster).
  (b) FAQ datos + Features card afirmaban "**Ley 25.326**" (compliance legal sin registro AAIP) y "servidores
  **en la región**" (stack usa Neon, típicamente US) → riesgo legal/reputacional. Reescrito a verdad verificable:
  backups diarios + export libre. typecheck OK. (Nota: dead code preexistente `LockSpinStyle` en Features.tsx, no tocado.)
- [2026-06-15] **Auditoría perf + a11y (medida, prod build en :3001).** LCP **185 ms**, CLS **0.00**,
  cero render-blocking → perf YA verde, el video showcase no es el LCP element (lo es el H1). Per YAGNI:
  NO se tocó perf (no se optimiza lo que está verde). Lighthouse mobile: A11y **96**, BP **96**, SEO **100**.
  Las 2 fallas son no-accionables: (a) contraste blanco/verde del CTA WhatsApp = excepción de marca
  (cambiarlo a verde oscuro mata el affordance y la conversión), (b) `errors-in-console` = 404 de
  `/_vercel/insights/script.js`, solo en localhost; en Vercel prod lo sirve la plataforma.
- [2026-06-15] **Social proof: fuga de notas de dev a producción.** Testimonials mostraba al visitante
  "Caso piloto · reemplazar por cliente real al publicar" (TODO de dev) y un subhead de scaffolding.
  → copy visitor-facing honesto ("Casos piloto reales, sin nombres inventados…") + caption "Caso piloto".
  Cero fabricación.
- [2026-06-15] **SEO alineado.** (a) Bug: dominio split — layout/canonical/OG/JSON-LD/hreflang en
  `maat.work` pero `sitemap.ts`/`robots.ts` en `maatwork.com.ar` → unificado a `maat.work` (canónico
  dominante). (b) Copy de title/description/OG/twitter/keywords alineado a narrativa SMB + outcome
  (agenda/cobros/clientes/WhatsApp, 14 días gratis). Verificado: `<title>`, sitemap.xml y robots.txt
  ya coherentes. OG/twitter images existen en /public. Ver caveat de dominio arriba.
- [2026-06-15] **Perf: prerender estático restaurado.** El script `build` tenía `next build --debug-prerender`
  → forzaba `/` y `/_not-found` a `ƒ` (dynamic). Vercel corre `npm run build` → prod perdía el static
  optimization (peor TTFB/CDN/LCP). Quitado el flag (vestigio de un debugging viejo, ver next.config) →
  `/` vuelve a `○ (Static)`. Build limpio.
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
