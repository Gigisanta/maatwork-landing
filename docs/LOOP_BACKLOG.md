# Loop backlog — automejora landing MaatWork

Cron `51e4a6b6`, cada 30 min (sesión-only, expira 7 días). Misión: evolucionar la web
para más visualizaciones y clientes. Cada iteración toma el top de "Pendiente",
lo aplica, verifica y commitea. Cero fabricación de datos. Surgical edits.

## Pendiente (prioridad ↓)

1. **Prueba social real** (BLOQUEADO en owner): conseguir 1-2 testimonios reales con nombre+permiso
   (hoy `verified:false`, framing honesto ya OK). No fabricar. Si hay clientes/logos reales, sumarlos.
2. **Conversión**: A/B de copy de CTA; FAQ que cubra objeciones; coherencia marquee (rubros SMB) con
   la narrativa elegida.

### Para confirmar con el owner
- (dominio `maat.work` confirmado por el owner 2026-06-15)

## Hecho

- [2026-06-16] **Analytics: trackeo de conversión del form (`lead_submitted`).** El form de leads (2ª vía
  de conversión) no se trackeaba → sus conversiones eran invisibles al lado de `whatsapp_cta`. Disparo
  `track("lead_submitted", {source, persisted})` en submit exitoso. Cierra el gap de medición del funnel.
  lint+typecheck+build verdes. Commit `a174b0c`.
- [2026-06-16] **Infra: Neon DB provisionada + `DATABASE_URL` configurada en Vercel.** El form de leads
  no persistía (sin env). Provisionada DB Neon dedicada vía `vercel integration add neon` (`neon-beige-window`,
  conectada a prod/preview/dev → DATABASE_URL + 18 vars Neon encriptadas en Vercel). Creada tabla `leads`
  (id uuid, nombre, whatsapp, email, rubro, problema, source, utm_*, metadata jsonb, created_at) + índice
  `created_at DESC`. NO se reusó la Neon vieja del ecosistema (estaba marcada "ROTATE"=filtrada → riesgo
  PII). E2E verificado local: POST → `persisted:true`, fila en DB; test rows truncadas. `.env.local`
  (secreto) gitignored. Redeploy prod para tomar la env. Item owner-gated resuelto.

- [2026-06-15] **Conversión: form de captura cableado al `/api/leads` huérfano.** Hallazgo: la route
  `POST /api/leads` (zod + rate-limit 5/min + fallback graceful sin-DB) NO tenía consumidor en la UI —
  la única vía de conversión era WhatsApp. Agregado `LeadForm` (nombre+whatsapp) en FinalCTA como vía
  alternativa ("que te contactemos"). Estados idle/submitting/success/error con aria-live; reusa estilos
  input + cta-violet. Verificado end-to-end por curl (202/422/400/429) y markup SSR (form + inputs con
  label). `source=contact_form`. lint+typecheck+build verdes, dev sin errores de hidratación.
  ⚠️ **Owner: confirmar `DATABASE_URL` en Vercel** — sin esa env la API responde 202 (el usuario ve
  éxito pero el lead NO se persiste). Visual del form no confirmado per-sección (MCP caído; FinalCTA es
  `.reveal` → blanco en headless) → reconfirmar al volver MCP. Commit `1576aa6`.
- [2026-06-15] **A11y: input de búsqueda del FAQ sin label + contraste de placeholder.** Auditoría del
  HTML renderizado: 4 inputs / 3 labels → el buscador del FAQ (`type="search"`) tenía solo placeholder
  (sin nombre accesible; los lectores de pantalla no lo anuncian fiable). Agregado `aria-label`.
  Placeholder `text-purple-400/60` (WCAG ~3.1, falla AA) → `/80` (4.5). Verificado en HTML: 4 inputs
  con nombre. lint+typecheck+build verdes. Commit `bd8a461`.
- [2026-06-15] **Perf LCP: delay del reveal del H1 570ms→180ms.** El H1 es el elemento LCP pero su
  segunda línea (gradiente `todo tu negocio.`) arrancaba en `opacity:0` con `animation-delay` de 570ms
  — resto de la matemática de stagger per-char ya muerta (`baseDelayMs = 120 + line1.length*18`).
  Chrome ignora nodos `opacity:0` → el LCP se disparaba ~570ms más allá del primer paint. Delays chicos
  fijos (60/180ms), reveal conservado. Removida prop `staggerMs` (muerta). lint+typecheck+build verdes,
  hero QA headless OK. Commit `86faf87`.
- [2026-06-15] **Reparación: ESLint roto + 7 issues latentes.** `npm run lint` estaba muerto: `next lint`
  se removió en Next 16 y no había ESLint instalado (script fallaba con "Invalid project directory ... /lint").
  Reparado: instalado `eslint` + `eslint-config-next` (flat config nativo vía exports `core-web-vitals`/
  `typescript`; el `FlatCompat` con config-next 16 da "circular structure" → se usa import directo), script
  → `eslint .`. El linter restaurado encontró 7 problemas reales, todos arreglados: 5× `react-hooks/
  set-state-in-effect` (StatsCounter, HowItWorks, StaggeredText/Reveal seteaban estado sincrónico en effect
  para el path reduced-motion → cascading renders) resueltos con un hook `usePrefersReducedMotion`
  (`useSyncExternalStore`: valor en render, SSR-safe, sin hydration mismatch); 2× `no-unused-vars`
  (global-error ahora loguea el error en vez de tragarlo; removida prop muerta `large` de BentoCard).
  lint+typecheck+build verdes, hero QA headless OK. Commits `chore(lint)` + `fix:` (`ea592a3`).
- [2026-06-15] **Brand: cyan residual decorativo → violeta + contraste a11y.** Completa el pase a
  violeta: la pill `live-chip` del hero, el glow/borde del `product-frame`, el hover border de
  ecosystem y el sweep de bento seguían liderados por cyan → ahora violeta (amber queda como
  secundario cálido; ping emerald "vivo" se conserva). A11y: subidos los textos violeta que fallaban
  WCAG a cualquier tamaño (separator del eyebrow `/50`, micro-labels de mock `/55`). Pendiente menor:
  banda `text-purple-400/60-/75` (AA-large; mayormente micro-texto decorativo en DashboardPreview/
  Features) → pase de contraste con juicio visual cuando vuelva el MCP. QA hero headless OK. Commit `d0f8cb7`.
- [2026-06-15] **Perf/fluidez: fondo animado visible + super-optimización scroll/paint.** El `.bg-field`
  global estaba OCULTO: cada sección pintaba una base ink opaca encima. Secciones ahora con bases
  translúcidas (`section-base`/`elev1`/`elev2`, alpha ~0.80-0.88) → los blobs violeta sangran detrás del
  contenido (capa fixed = parallax sutil), contraste de texto conservado. Fluidez: `bg-morph` pasó a
  translate-only (sin scale → el blur no se re-rasteriza por frame, fluido en low-end), y los scroll
  listeners de Navbar + StickyWhatsApp ahora son rAF-throttled con `vh`/`docH` cacheados (sin reflow
  forzado por scroll). QA headless desktop 1440 + mobile 390: legible, sin breakage. Radial cyan
  residual de section-base → violeta. Commit `1c52651`.
- [2026-06-15] **Motion: fondo animado global + scroll-progress + card mouse-glow.** La página se
  sentía plana debajo del hero (el `.aurora-field` vivía solo en el hero). Agregado `AnimatedBackground`
  (4 blobs violeta que se deforman + 14 partículas que flotan, `fixed -z-10` sobre la base ink de
  `<html>`; `body` pasó a `transparent`), `ScrollProgress` (barra superior, GPU scaleX vía rAF) y
  `CardGlow` (resplandor violeta que sigue el cursor en ecosystem/bento cards, un solo listener
  delegado, solo `pointer:fine`; `::before` z-index:-1 + `isolation:isolate` en las cards). Mobile:
  partículas off, blobs suavizados. Todo transform/opacity (GPU) + respeta `prefers-reduced-motion`.
  Refs skill `frontend-ui-engineering/animated-backgrounds.md` + `landing-page-animation-catalog.md`.
  Build verde, clases sobreviven Lightning CSS, hero QA headless OK. ⚠️ QA per-sección del fondo
  mid-page no confirmado visualmente (MCP chrome-devtools caído; reveals salen blanco en headless) →
  reconfirmar al volver el MCP. Commit `4f4a2c2`.
- [2026-06-15] **Brand: color primario cyan→violeta (owner).** El owner confirmó violeta como color
  de marca. Recolor central: `globals.css` (`--color-border-accent`, eyebrow, logo-gradient, cta-violet,
  tab-progress, hero-title-accent, aurora glow) + Navbar (wordmark `Work`, underline), Hero (dot +
  botón secundario), ProductEcosystem (label, chips, hover). Per-product accents (multi-accent
  emerald/sky/amber/rose) intactos por diseño. Build verde, QA hero headless OK. Commit `f844c02`.
- [2026-06-15] **Brand: OG/Twitter regeneradas a violeta.** Social preview alineado al recolor:
  wordmark, `tu negocio.`, pill y glow en escala violeta. Template HTML→Chrome headless 1200×630,
  Jakarta, sin clipping. Commit `6d7ffd8`.

- [2026-06-15] **Fix scroll-spy: por posición, no por banda IO.** Bug encontrado en QA: con HowItWorks
  centrado (sección sin id), el navbar resaltaba "FAQ" (que estaba 2751px abajo) — el IO de banda fina
  (-45%/-50%) dejaba `activeId` stale cuando ninguna sección tracked estaba en la banda, y en jumps ganaba
  el último del array. Reescrito a position-based dentro del scroll listener existente (consolidado, se
  quitó el IO): activo = última sección cuyo `top` cruzó la línea de referencia (30% vh) = la sección en
  la que estás. Correcto entre secciones sin-id y en scrolls rápidos. typecheck + build OK.
  ⚠️ QA visual incompleto: el MCP de chrome-devtools se desconectó mid-iteración. Cambio layout-safe
  (solo toggle de `aria-current`/underline, sin cambio estructural) → reconfirmar visual la próxima iteración. La iteración anterior puso
  `aria-modal="true"` pero sin trap → Tab podía salir del modal (promesa falsa). Completado: al abrir el
  foco entra al primer ítem, Tab/Shift+Tab ciclan dentro del diálogo (6 focusables), Escape cierra +
  devuelve foco al toggle. Verificado: foco entra en "Productos", Tab desde "Hablar por WhatsApp" → "Productos",
  Shift+Tab al revés. Ponytail exime a11y de lazy → trap implementado (no se quita el claim). Build estático OK.
- [2026-06-15] **A11y: menú mobile = modal accesible.** El overlay del menú era un modal sin semántica
  ni manejo de teclado. Agregado `role="dialog"` + `aria-modal` + `aria-label`, `aria-haspopup="dialog"`
  en el toggle, y Escape-to-close que además devuelve el foco al botón toggle (no deja el foco huérfano
  en un elemento oculto). Verificado: abre con dialog presente, Escape → cierra + foco vuelve al toggle.
  typecheck + build estático OK. (Relevante en viewports angostos con teclado / lectores de pantalla.)
- [2026-06-15] **Perf: ProductShowcase pausa auto-avance off-screen.** El `setInterval` (cada 3.8s) y la
  animación CSS de la barra corrían aunque el showcase estuviera fuera de vista → re-renders + trabajo
  inútiles durante el resto del scroll. IntersectionObserver (threshold 0.15, mismo patrón que StatsCounter)
  gatea el interval y la barra en `visible`. Best-practice (no animar/timer off-screen), battery/CPU friendly.
  Verificado mobile 390: showcase renderiza, tab click NMS→Varigas OK, sin romper. typecheck + build estático OK.
- [2026-06-15] **Audit de perf + safe-area iOS en sticky CTA.** Perf trace prod: LCP **245 ms** (mejor
  que el 487 ms previo), CLS **0.00**, TTFB 9 ms, sin render-blocking → los últimos cambios (scroll-spy,
  sticky CTA, FAQ data-module, links) NO regresaron nada. Único item real: el sticky CTA usaba `bottom-4`
  fijo → en iPhones con home indicator quedaba pegado/tapado. Cambiado a `bottom-[calc(1rem+env(safe-area-inset-bottom))]`
  (estándar iOS). Verificado en CSS built (Lightning CSS no lo dropeó); en no-notch = 1rem (sin cambio).
- [2026-06-15] **ProductEcosystem: URLs de producto clickeables (prueba verificable).** Las URLs
  (oroazul.maat.work, crm.maat.work, infrannova.vercel.app, varigas.vercel.app) eran texto muerto. La
  tesis de la sección es "mostramos productos funcionando" → hacerlas clickeables deja al prospecto
  VERIFICAR que las apps existen y están vivas = credibilidad/confianza. Verificado que las 4 responden
  HTTP 200 (apps reales, no dominios muertos) antes de linkear. `<a target="_blank" rel="noopener">` +
  flecha externa + hover cyan + aria-label de pestaña nueva. Abre en pestaña nueva (no fuga la conversión).
  typecheck + build estático OK, QA desktop.
- [2026-06-15] **SEO: FAQ rich snippets sincronizados + métrica inventada fuera.** El JSON-LD FAQPage
  tenía solo 4 preguntas mientras el FAQ visible tenía 7 → Google solo veía la mitad. Además el FAQ #7
  reincidía con "Respuesta promedio: 2 horas" (métrica sin respaldo que ya saqué del StatsCounter, y
  contradecía el footer "en el día"). Fix robusto: extraído `FAQS` a `src/data/faqs.ts` (única fuente);
  `<FAQ>` y el JSON-LD ahora la consumen → el structured data SIEMPRE matchea lo visible (requisito de
  Google para rich results). Corregido #7 a honesto ("mismo día hábil"). Verificado: HTML servido tiene
  7 `Question`, answer honesta presente, claim "2 horas" eliminado. typecheck + build estático OK.
- [2026-06-15] **CTA sticky mobile (conversión).** La home mide ~16 pantallas en mobile y el WhatsApp
  quedaba lejos durante el scroll (6 CTAs dispersos, ninguno persistente). Nuevo `StickyWhatsApp`: pill
  verde fijo abajo, solo mobile (`md:hidden`), aparece tras pasar el hero (scrollY > 0.9vh) y se oculta
  cerca del fondo (últimas ~1.3vh) para no tapar el FinalCTA/footer. Número real, lo trackea AnalyticsEvents.
  a11y: aria-hidden + tabIndex -1 cuando oculto. QA mobile 390: oculto top → visible mid → oculto bottom,
  estados verificados. typecheck + build estático OK. (Posible porque el número de WhatsApp ya es real.)
- [2026-06-15] **Navbar scroll-spy (orientación en página larga).** IntersectionObserver sobre las 4
  secciones (#productos/#funcionalidades/#precios/#faq); el link de la sección que cruza el mid-band del
  viewport (rootMargin -45%/-50%) se resalta: texto blanco + underline cyan lleno + `aria-current="true"`
  (a11y). En el tope (hero) no resalta ninguno. Solo nav desktop (mobile = overlay tap, sin scroll).
  QA: scroll a #precios → solo "Precios" activo, highlight correcto. typecheck + build estático OK.
- [2026-06-15] **ProductShowcase: pulido de animación/UX.** (1) Transición entre productos: opacity →
  opacity + slide-up (translateY 10px→0, 700ms ease-out) = más premium. (2) Barra de progreso cyan→violeta
  en el tab activo que se llena en `INTERVAL_MS` (3.8s) → señala el auto-avance y da feedback de que los
  tabs son clickeables. Keyframe `tab-progress` (scaleX) + clase `.tab-progress`. Se oculta en hover (pausa)
  y respeta reduced-motion (en ese caso no auto-cicla; tabs siguen clickeables = contenido accesible).
  QA: barra se llena y se mueve al tab activo al click, sin glitch. Build estático OK.
- [2026-06-15] **Hero H1 elevado + gradient premium ("landing impresionante").** El H1 era
  "Software real para operar. **No otra landing vacía.**" — la 2da línea era meta (hablaba de landings,
  no del negocio del cliente), débil para conversión e inconsistente con la OG/metadata. Reescrito a
  benefit-led y confiado: "Software real para operar **todo tu negocio**." (coherente con la OG nueva).
  Además el gradient del accent pasó de un rainbow de 4 colores (cyan→blanco→violeta→ámbar, washy/slop
  según el tone-doc) a un cyan→violeta de 2 acentos de marca = más premium. QA desktop 1440 + mobile 390:
  wrap correcto, descendentes OK, sin overflow, build estático limpio.
- [2026-06-15] **OG/social image rota → regenerada (CTR de shares = visualizaciones).** QA encontró que
  `og-image.png` tenía el headline CORTADO ("Software real para operar empr[esas]" colisionaba con las
  cards decorativas) + copy stale. La OG es lo que se ve al compartir en WhatsApp/redes → un preview roto
  mata el click-through. Regenerada con fidelidad de fuente (template HTML brandeado → screenshot headless
  1200×630, normalizado con sips): wordmark, pill "Productos reales, no humo", headline sin clip
  ("Software real para operar tu negocio"), subhead honesto + 4 chips de producto. og + twitter actualizadas.
- [2026-06-15] **Métrica inventada en StatsCounter (cero-fabricación + consistencia).** "2 hs ·
  respuesta soporte" = SLA cuantificada sin respaldo que además CONTRADECÍA el footer ("Te respondemos
  en el día"). Reemplazada por un stat verdadero y on-brand: "100 % · soporte en español" (matchea
  "Hecho en Argentina, en español"). Verificación de calidad post-cambios (Lighthouse mobile, prod
  build): A11y 96, BP 96, SEO 100, Agentic 100, LCP 487 ms (verde), CLS 0.00 — las 2 fallas siguen
  siendo no-accionables (contraste del CTA verde = excepción de marca; 404 de `/_vercel/*` solo localhost).
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
