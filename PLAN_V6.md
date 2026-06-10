# Plan V6 — MaatWork Landing "Editorial Premium"

> **Misión:** Llevar la landing actual (V5 funcional, código completo, plan implementado) de "correcta" a "editorial premium tipo Stripe" — sin tocar lo que ya funciona, atacando solo lo que la hace ver **amateur**.

---

## 0. Snapshot de partida

- **Repo ganador:** `Gigisanta/maatwork-landing` (el linkeado en este chat)
- **Tag de auditoría:** `audit-pre-v6-20260610-132456`
- **Estado actual:** TypeScript pasa, `next build` compila limpio, 22 archivos, 2805 líneas, FCP 160ms mobile, bundle 244KB total. **El problema NO es de performance ni de features — es de diseño de superficie.**
- **Repos a archivar:** `landing-maatwork-v2`, `landing-maatwork-v3` (bit-exactos — v3 es clon de v2) y `MaatWorkLandingPage` (viejo con galaxy, ya auditado en mayo). Acción: marcar como archived en GitHub + redirect en README al repo canónico.
- **Stack a mantener:** Next.js 16.2.7 + React 19.2.7 + TypeScript 5.7 + Tailwind v4.3 (`@theme` CSS-first) + `next/font/google` (Plus Jakarta Sans 600-800 + Inter 400-600) + IntersectionObserver client component. **Sin Framer Motion, GSAP, Three.js, Rive, Lottie.** El brief del cliente es claro y disciplinado.

---

## 1. Diagnóstico (qué es lo "feo" — targets del V6)

Auditoría técnica + lectura de código + métricas de performance. Lo que la V5 tiene y lo que le falta:

| # | Problema concreto | Severidad | Fase V6 |
|---|---|---|---|
| 1 | **Tokens de `@theme` muertos** — 201 hex hardcoded (`#7c3aed`, `#d4b8ff`, `#a78bfa`, `#25D366`) en 22 archivos. 0 uso de `text-purple-*`/`bg-purple-*` aunque `--color-purple-600: #7c3aed` ya está definido. Cambiar un tono requiere sed. | 🔴 alta | F1 |
| 2 | **DashboardPreview sintético (577L)** — nombres ficticios, KPIs animados, cursor simulado, toast pop, avatars con iniciales. Se ve "dibujo de Figma / placeholder de Lottie". El brief del delegado confirma: el patrón ganador 2025-2026 es **video real del producto** (5-8s, loop silencioso) o captura viva. | 🔴 alta | F2 |
| 3 | **Type scale inconsistente** — H1 mobile 36-40px / desktop 56-72px, H2 mobile 28-34px / desktop 36-44px, body 14-18px, todo ad-hoc. No hay escala editorial 1.25. Stripe usa 12/14/16/20/24/32/40/56. | 🟠 media | F1 |
| 4 | **Spacing respiratorio** — `py-20 md:py-28` por todos lados, pero dentro de las cards los gaps son `gap-3`, `gap-4`, `gap-5` mezclados. Falta un sistema `space-y-*` editorial. | 🟠 media | F1 |
| 5 | **H1 staggered letter reveal** — el `StaggeredText` con `<span>` por letra puede generar problemas de a11y (lectores de pantalla leen letra por letra), accesibilidad, y se ve raro si el copy cambia. Reemplazar por **typed reveal** o **fade-in por línea**. | 🟠 media | F3 |
| 6 | **Datos del trust bar sintéticos** — "+$5.1M gestionados · +349 clientes · 99.9% uptime · 5-10 días" son placeholder. Per Gio: usar 1-2 reales con foto si existen, resto sintéticos bien armados, README documenta cómo completar. | 🟡 baja | F4 |
| 7 | **Testimonials con quote mark gigante** — el quote SVG 100x80 es decorativo pero no funciona si los quotes son cortos. Patrón ganador 2025-2026: **fotos reales con bordes redondeados** + quote como caption. | 🟡 baja | F4 |
| 8 | **Logo marquee con texto plano** — "Gimnasios · CrossFit · Boxeo · Yoga..." en gris. Falta identidad visual: íconos custom SVG de cada rubro o logos reales si los hay. | 🟡 baja | F4 |
| 9 | **Footer genérico** — 4 columnas + newsletter + bottom strip. Patrón ganador: footer **compacto de 1 línea** + newsletter inline + links agrupados. | 🟢 nice | F5 |
| 10 | **Sin nav-burger pulido en mobile** — el menú mobile abre con slide-in básico. Patrón 2025-2026: full-screen overlay con búsqueda rápida. | 🟢 nice | F5 |
| 11 | **Falta de video og:image y twitter:image** — meta sociales importantes para que la preview de WhatsApp/Slack/Twitter muestre algo. | 🟡 baja | F6 |
| 12 | **Sin schema markup FAQPage** — el JSON-LD ya tiene Organization + SoftwareApplication pero no incluye las preguntas frecuentes. Mejora CTR en Google. | 🟢 nice | F6 |

---

## 2. Decisiones confirmadas con Gio

| Decisión | Elección |
|---|---|
| Repo a mantener | `maatwork-landing` (consolidar, archivar los otros 3) |
| V5 + backend | Sí — agregar el API route de leads del v2 con rate limit + zod + Neon |
| Dirección visual | **Editorial tipo Stripe** (Inter/Geist + type scale 1.25 + Bento cuidado + restrained motion) |
| Hero centerpiece | **Video corto 5-8s del producto real** (reemplaza DashboardPreview sintético) |
| Testimonios | **Mezcla: 1-2 reales con foto + resto sintéticos bien armados** (Linear-style) |
| Restricciones brand | Mantener: NO orbs, NO gradient text, NO glassmorphism excesivo, NO 3D, NO libs motion |

---

## 3. Plan de ejecución (6 fases, ~14-18h estimadas)

Cada fase es **independiente y entregable**. Verificación después de cada fase.

### FASE 1 — Foundations: tokens vivos + type scale editorial (1.5h, prioridad 🔴)

**Archivos:**
- `src/app/globals.css` (refactor — refactorizar `@theme`, eliminar duplicación)
- `src/components/Navbar.tsx` (consumir tokens)
- `src/components/Hero.tsx` (idem)
- `src/components/PricingROI.tsx` (idem)
- `src/components/Features.tsx` (idem)
- `src/components/Footer.tsx`, `FinalCTA.tsx`, `Testimonials.tsx`, `FAQ.tsx`, `HowItWorks.tsx`, `ProblemSolution.tsx`, `LogoMarquee.tsx`, `StatsCounter.tsx`, `DashboardPreview.tsx` (consumir tokens)
- `src/components/BentoCard.tsx` (idem)

**Tareas:**

1. **Migrar todos los hex hardcoded a tokens Tailwind v4** — `#7c3aed` → `text-purple-600`/`bg-purple-600`/`border-purple-600` (que el `@theme` ya define), `#d4b8ff` → `text-purple-200`, `#a78bfa` → `text-purple-400`, `#25D366` → `text-success`, `#0f0520` → `bg-bg-base`. **Meta: 0 hex hardcoded en componentes**, 100% consumo de tokens.
2. **Definir type scale editorial (Stripe-like):** 
   ```
   --text-xs: 12px
   --text-sm: 14px
   --text-base: 16px
   --text-lg: 18px
   --text-xl: 20px
   --text-2xl: 24px
   --text-3xl: 32px
   --text-4xl: 40px
   --text-5xl: 56px
   --text-display: 72px
   ```
   Aplicar consistentemente. H1 mobile = 4xl, H1 desktop = 5xl, H2 mobile = 3xl, H2 desktop = 4xl.
3. **Spacing editorial:** definir `space-y-section: 6rem (96px)`, `space-y-block: 4rem (64px)`, `space-y-card: 1.5rem (24px)`. Aplicar a las 10 secciones para consistencia.
4. **Crear utilities nuevas en `globals.css`:**
   - `.text-balance` (ya existe — verificar uso)
   - `.text-pretty` (Tailwind v4 trae nativo)
   - `.text-gradient-subtle` (para casos donde SÍ se permite — solo en números de pricing, NO en headlines)
   - `.surface-card` (background `bg-white/[0.04]`, border `border-white/[0.08]`, radius 16px, padding 24px)
   - `.surface-card-hover` (border `hover:border-purple-500/30`, background `hover:bg-white/[0.06]`)

**Criterio de aceptación:**
- `grep -rE "#[0-9a-fA-F]{6}" src/components/` → 0 resultados
- `npx tsc --noEmit` → 0 errores
- `npx next build` → 0 warnings
- Verificación visual: cambiar `--color-purple-600` en `@theme` debe propagarse a toda la landing.

---

### FASE 2 — Hero: video real del producto (3h, prioridad 🔴)

**Archivos:**
- `src/components/Hero.tsx` (refactor — copy + estructura)
- `src/components/ProductVideo.tsx` (nuevo — componente video con poster, autoplay silenciado, loop)
- `src/components/DashboardPreview.tsx` (marcar como deprecated, mover a `src/_legacy/` para referencia)
- `public/product-demo.webm` (nuevo — video 5-8s loop, 720p max, < 1MB)
- `public/product-demo.mp4` (nuevo — fallback Safari)
- `public/product-demo-poster.jpg` (nuevo — poster liviano < 30KB)

**Tareas:**

1. **Grabar / producir el video del producto real.** Opciones:
   - **Opción A (rápida, ~30min):** Captura de pantalla del `maatworkcrm` o `MaatWorkDashboard` real con `ffmpeg` looping 5-8s, mostrando agenda + dashboard en uso. Grabar local + hacer loop limpio.
   - **Opción B (más esfuerzo, ~3h):** Contratar / producir motion graphics con CapCut/Premiere de 5-8s mostrando el flujo: cliente reserva → recordatorio WA → cobro automático → KPI actualizado. Es lo que hacen Linear/Vercel.
   - **Recomendación:** Opción A primero, publicar V6 con video real básico, iterar a Opción B después.
2. **Comprimir para web:** `ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 800k -an product-demo.webm` + `ffmpeg -i input.mp4 -c:v libx264 -crf 28 -movflags +faststart -an product-demo.mp4`. **Sin audio** (muted autoplay).
3. **`ProductVideo.tsx`** — componente client con:
   - `<video autoPlay muted loop playsInline poster="/product-demo-poster.jpg">` con `<source>` webm + mp4
   - `preload="metadata"`
   - `aspect-video` 16:9
   - Browser frame opcional (si el video no tiene chrome propio): traffic lights + URL bar `app.maatwork.com.ar/panel`
   - Sombra suave y rounded-xl
   - `prefers-reduced-motion` → mostrar poster estático
4. **Hero refactor:** H1 sigue siendo "Automatizá tu local. Sin complicaciones." con **typed reveal** (no letter-reveal span por span) — fade-in de 600ms por línea. CTAs: primary WhatsApp verde, secondary "Ver demo" ghost. Trust strip con 4 stats reales/sintéticos bien armados. ProductVideo full-width abajo.
5. **Actualizar el accessibility tree** — `aria-label="Video demostrativo del producto MaatWork"` con `controls` opcional en `prefers-reduced-motion`.

**Criterio de aceptación:**
- Lighthouse mobile performance > 90, LCP < 2.5s
- Video < 1MB total, poster < 30KB
- En mobile, el poster aparece instantáneo y el video carga después
- Test en Safari (autoplay restrictions), Chrome, Firefox
- Test con `prefers-reduced-motion: reduce`

---

### FASE 3 — Copy & Typographic polish (2h, prioridad 🟠)

**Archivos:**
- `src/components/Hero.tsx`
- `src/components/StaggeredText.tsx` (deprecar o refactor)
- `src/components/Features.tsx`
- `src/components/ProblemSolution.tsx`
- `src/components/StatsCounter.tsx`
- `src/components/PricingROI.tsx`
- `src/components/Testimonials.tsx`
- `src/components/HowItWorks.tsx`
- `src/components/FAQ.tsx`
- `src/components/FinalCTA.tsx`

**Tareas:**

1. **Reemplazar `StaggeredText` letter-reveal por fade-in por línea** — más editorial, mejor a11y. CSS: `opacity 0 → 1` + `translateY(8px) → 0` con `transition-delay` por línea (no por letra).
2. **Aplicar `text-balance` a todos los H1/H2** y `text-pretty` a párrafos largos.
3. **Refinar copy por sección** (sin inventar features, solo mejor prosa):
   - Hero subtitle: cambiar "ydejás de perder entre 2 y 5 horas por día" (typo, "y" pegado) → "y dejás de perder entre 2 y 5 horas por día".
   - ProblemSolution: convertir a "Antes/Después" con bullets contrastantes
   - Features: usar verbo de acción al inicio ("Ordená tu agenda", "Cobrá sin perseguir", "Mantené WhatsApp sincronizado", etc.)
   - Testimonials: ya están bien, solo pulir a 2-3 líneas
   - FinalCTA: pregunta directa ("¿Listo para dejar de improvisar?")
4. **H1 a 2 líneas en mobile**, 1 línea en desktop. Letter-spacing -0.04em en H1, -0.02em en H2.
5. **Body line-height 1.6** (Stripe usa 1.5 en headlines, 1.6 en body).

**Criterio de aceptación:**
- Readability score > 60 en Flesch (español)
- Sin typos
- Consistencia de voice: imperativo directo, sin jerga SaaS

---

### FASE 4 — Social proof real + rubro icons (2h, prioridad 🟡)

**Archivos:**
- `src/components/Testimonials.tsx` (refactor)
- `src/components/LogoMarquee.tsx` (refactor)
- `src/components/StatsCounter.tsx` (refactor)
- `src/data/testimonials.ts` (nuevo — fuente de datos)
- `src/data/clients.ts` (nuevo — logos reales con permiso)
- `public/clients/` (directorio nuevo — fotos/logos)

**Tareas:**

1. **Testimonials:** pasar de 3 cards con quote mark gigante a **3 testimonials con foto real + nombre + rol + local + quote**. Mezcla:
   - 1-2 con foto real (si hay clientes con permiso escrito — Gio confirmará)
   - 1-2 con avatar sintético (estilo Linear: iniciales + gradient de 4 colores de la paleta)
   - Card layout: foto circular 64x64 + nombre + rol (sin quote mark gigante) + quote
   - Hover: border violeta + sutil `translateY(-2px)`
2. **LogoMarquee:** agregar íconos custom SVG por rubro (Gym, CrossFit, Boxeo, Yoga, Salón, Barbería, Estética, Academia, Pilates, Spinning, Nutrición, Tattoo) — uno por rubro, 12 íconos distintos. Si hay logos reales con permiso, mezclarlos 60/40 con íconos.
3. **StatsCounter:** números grandes + label + ícono. **Quitar el `$5.1M` sintético** si no es real. Reemplazar por datos verificables: "+5-10 días de setup", "24/7 online", "< 2hs respuesta soporte" (soporte real, sin夸大).
4. **Crear `src/data/testimonials.ts`** con tipo y array. Documentar en README cómo agregar testimonios reales.

**Criterio de aceptación:**
- 0 números hardcodeados sin fuente
- README actualizado con sección "Cómo agregar clientes reales"
- Sin imágenes externas (todo self-hosted)

---

### FASE 5 — Mobile + nav polish (1.5h, prioridad 🟢)

**Archivos:**
- `src/components/Navbar.tsx` (refactor — full-screen mobile menu con búsqueda)
- `src/components/Footer.tsx` (refactor — compacto de 1 línea + newsletter inline)
- `src/components/HowItWorks.tsx` (refactor — vertical en mobile, horizontal en desktop)
- `src/components/Features.tsx` (refactor — single column en mobile, bento en md+)

**Tareas:**

1. **Navbar mobile:** full-screen overlay con backdrop-blur, lista de links + CTA WhatsApp + 1 link a "Ver demo en video".
2. **Footer:** compacto de 1 línea en desktop: `MaatWork · © 2026 · Producto · Precios · FAQ · LinkedIn · Instagram · WhatsApp`. Newsletter inline en otra línea. **Reducir de 4 columnas a 1 línea** en mobile.
3. **HowItWorks mobile:** SVG horizontal → vertical (3 cards apiladas con conector vertical).
4. **Features mobile:** bento 3-col → 1-col stack.
5. **PricingROI mobile:** pricing cards → 1-col stack con el "MÁS POPULAR" arriba.

**Criterio de aceptación:**
- Lighthouse mobile usability > 95
- Touch targets > 44x44px en todos los botones
- Sin horizontal scroll en mobile

---

### FASE 6 — SEO + Schema + Meta social (1.5h, prioridad 🟡)

**Archivos:**
- `src/app/layout.tsx` (refactor — agregar `FAQPage` schema, og:image, twitter:image)
- `public/og-image.png` (nuevo — 1200x630 con H1 + ProductVideo frame + logo)
- `public/twitter-image.png` (nuevo — 1200x675)
- `public/favicon.svg` (ya existe — verificar)
- `src/app/sitemap.ts` (refactor)
- `src/app/robots.ts` (refactor)

**Tareas:**

1. **Generar `og-image.png` y `twitter-image.png`** con ffmpeg/canvas — frame del video + H1 + logo + URL.
2. **Agregar `FAQPage` schema** al JSON-LD existente con las preguntas del FAQ.
3. **Meta descripción mejorada:** "MaatWork es el SaaS argentino para gestionar turnos, cobros, clientes y WhatsApp en gyms, salones y academias. 14 días gratis, setup en 5-10 días, soporte en español."
4. **Sitemap:** solo `/` por ahora, agregar `priority: 1.0`, `changefreq: weekly`.
5. **Robots:** asegurar que `User-agent: *`, `Allow: /`, host explícito.

**Criterio de aceptación:**
- Preview en Facebook Sharing Debugger: muestra og-image + título + descripción
- Preview en Twitter Card Validator: muestra twitter-image
- Google Rich Results Test: pasa FAQPage
- Schema Markup Validator: 0 errores

---

## 4. Consolidación de repos (paralelo a F1-F6, 30min)

**Acciones:**

1. **Marcar como archived en GitHub:**
   - `landing-maatwork-v2` → archived, README redirige a `maatwork-landing`
   - `landing-maatwork-v3` → archived, README redirige a `maatwork-landing`
   - `MaatWorkLandingPage` → archived, README redirige a `maatwork-landing`
2. **Setup del redirect:** agregar nota en README de cada repo archived: "Este proyecto fue consolidado en [`Gigisanta/maatwork-landing`](https://github.com/Gigisanta/maatwork-landing). El código aquí es histórico."
3. **Agregar el API route de leads del v2** al ganador (paralelo a F2): `src/app/api/leads/route.ts` con zod + rate limit + Neon. Variables: `DATABASE_URL`, `ALLOWED_ORIGIN`. Esto era lo único útil del v2 que faltaba.
4. **Cleanup de skills del sistema** (si hay alguna referencia a los 4 repos, apuntar solo al ganador).

---

## 5. Verificación continua (entre fases)

Después de cada fase, antes de hacer commit:

```bash
cd /Users/prueba/repos/maatwork-landing  # o donde esté clonado
NODE_ENV=development npx tsc --noEmit       # 0 errores
NODE_ENV=development npx next build        # 0 warnings
NODE_ENV=development npx next start -p 3500 &
sleep 3
# Browser visual QA con Playwright (ya tenemos venv instalada)
~/.hermes/hermes-agent/venv/bin/python3 -c "
from playwright.sync_api import sync_playwright
p = sync_playwright().start()
b = p.chromium.launch()
ctx = b.new_context(viewport={'width': 1440, 'height': 900})
pg = ctx.new_page()
pg.goto('http://localhost:3500', wait_until='networkidle')
pg.wait_for_timeout(2000)
pg.screenshot(path='/tmp/qa-desktop.png', full_page=True)
# mobile
ctx2 = b.new_context(viewport={'width': 390, 'height': 844})
pg2 = ctx2.new_page()
pg2.goto('http://localhost:3500', wait_until='networkidle')
pg2.wait_for_timeout(2000)
pg2.screenshot(path='/tmp/qa-mobile.png', full_page=True)
b.close()
"
kill $! 2>/dev/null
git add -A
git status  # revisar diff
git commit -m "feat(v6.FX): <descripción>"
git push origin main
```

---

## 6. Estimación total

| Fase | Horas | Prioridad |
|---|---|---|
| F1 — Foundations (tokens + type scale) | 1.5h | 🔴 |
| F2 — Video real del producto | 3h | 🔴 |
| F3 — Copy & typography polish | 2h | 🟠 |
| F4 — Social proof real + rubro icons | 2h | 🟡 |
| F5 — Mobile + nav polish | 1.5h | 🟢 |
| F6 — SEO + Schema + Meta social | 1.5h | 🟡 |
| Consolidación de repos | 0.5h | 🟠 |
| QA + commits + deploys | 2h | 🟠 |
| **TOTAL** | **~14h** | |

**Sugerencia de cadencia:** 2-3 fases por sesión, con QA visual de Gio entre sesiones.

---

## 7. Riesgos y mitigación

| Riesgo | Mitigación |
|---|---|
| El video real tarda más de lo estimado | Empezar con captura de pantalla básica (Opción A de F2). Iterar a motion graphics después. |
| No hay clientes con permiso escrito para testimonios | Usar la "mezcla" confirmada: 1-2 reales si hay, resto sintéticos bien armados. README documenta cómo swap cuando lleguen. |
| Cambiar todos los tokens rompe algo visual | Hacer F1 primero en branch separado, validar, merge. No tocar tokens durante F2-F6. |
| El mobile menu nuevo introduce bugs | Testear en iPhone 13 + Android 14 + Safari iOS. Si hay issues, fallback al slide-in simple. |
| Vercel deploy falla por el video | Usar Vercel Blob o Cloudflare R2 si > 4.25MB. Verificar tamaño antes de push. |

---

## 8. Out of scope (no se hace en V6)

- App móvil (PWA / React Native) — out of scope, tema separado
- Internacionalización (i18n) — landing es es-AR only por ahora
- Blog / content marketing — out of scope
- A/B testing infrastructure — out of scope, post-launch
- Dark mode toggle — el sitio ya es dark, no hay light mode
- Internacional pricing — el sitio es Argentina only

---

## 9. Próximo paso

**Validación de Gio:** ¿arrancamos con F1 (foundations) esta misma sesión, o querés revisar este plan primero? Si arrancamos, mi flujo es:

1. Branch `feat/v6-f1-tokens` desde `main`
2. F1 → typecheck + build + screenshot diff
3. Commit + push + PR para review
4. Merge → F2
5. Repetir hasta F6

Si querés que delegue partes a subagentes en paralelo (e.g. F1 + F4 + F6 no se pisan), avisame y armo el kanban.

---

**Snapshot de partida:** `audit-pre-v6-20260610-132456`
**Tag canónico:** `main` @ `1bde609`
**Repo:** `Gigisanta/maatwork-landing`
**Stack final:** Next 16.2.7 + React 19.2.7 + TS 5.7 + Tailwind 4.3 + CSS-only motion
**Performance target:** Lighthouse mobile > 90, FCP < 1s, bundle < 250KB
