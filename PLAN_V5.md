# Plan V5 — MaatWork Landing "Impressive"

> **Misión:** Llevar la landing actual de "vende" a "WOW 2025-2026", respetando 100% las restricciones de marca (no orbs, no gradient text, no glassmorphism excesivo, no 3D, no Framer Motion, no GSAP, no Three.js). Solo CSS animations + SVG inline + next/font/google.

---

## Research Summary (lo que aprendimos)

### 7 landings referencia analizadas
- **Linear.app** — Producto fotorrealista como protagonista. Dark casi negro. Sin animation en H1. Datos con nombres creíbles. El producto es la estrella.
- **Notion (night shift)** — Decoración espacial refuerza el concepto. Tabs con partners reales (OpenAI, Figma, Vercel).
- **Vercel** — Gradiente animado atmospheric. Sin app preview, es mood-driven. El triángulo wireframe es la firma.
- **Notion Calendar** — Dual-device (MacBook + iPhone). Video demo overlay con play button. Cross-platform.
- **Raycast** — Black sólido + red/pink light beams diagonales. Mood dinámico.
- **Wispr Flow** — Hero conceptual, no UI. App preview = raw speech vs AI polished (value prop en 2s).
- **Mixpanel** — Dashboard flotante con depth. Bento grid con hover reveal de gradient. Number counters animados.

### 7 patrones motion modernos (todos CSS-only)
1. **Scroll-driven parallax layered cards** — `animation-timeline: scroll()`
2. **Marquee de logos con gradient mask** — `mask-image` + marquee animation
3. **Bento grid hover reveal** — gradient sweep + content slide-up
4. **Glass card con conic gradient border animado** — `mask-composite: exclude` + rotation
5. **Number counter con CSS @property** — `counter()` + `animation-timeline: view()`
6. **Staggered letter reveal** — `<span>` por letra con delay incremental
7. **SVG inline animado con stroke-dasharray** — paths que se dibujan solos

### Brand tokens: Purple + Green
- **90:10 rule:** violeta 95%, verde solo funcional (CTA WhatsApp, badge online).
- **Nunca:** texto verde, background verde, gradiente purple→green.
- **Color puente:** blanco/lavanda separa purple y green cuando se tocan.

---

## Plan de Implementación (10 Fases)

Cada fase incluye archivos a modificar/crear, dependencias entre fases, y criterios de aceptación.

### FASE 0 — Animations Foundation (1 archivo)
**Archivo:** `src/app/globals.css`
**Tiempo:** 30min
**Criterio:** todas las keyframes y utilities nuevas están en el CSS compilado

Agregar al final de globals.css:
- `@keyframes` para: `marquee`, `marquee-slow`, `fade-up`, `letter-reveal`, `draw-stroke`, `pulse-ring`, `pulse-soft`, `glow-pulse`, `float-slow`, `shimmer-bg`, `border-spin`, `counter-up`, `ticker`, `cursor-blink`
- `.text-balance` utility
- `.mask-fade-both` utility para marquees
- `.glass-subtle` (opacidad < 0.1, solo donde se necesite)
- Variables CSS para `--ease-out-quart: cubic-bezier(0.16, 1, 0.3, 1)` y `--ease-out-expo`
- `.ease-out-quart` utility
- `@property --num` con `syntax: '<integer>'` para counter animation

**Decisión crítica:** todo CSS-only. **NO Framer Motion. NO GSAP. NO Lottie. NO Rive.**

---

### FASE 1 — Hero con App Preview Fotorrealista (3 archivos)
**Archivos:** 
- `src/components/Hero.tsx` (refactor total)
- `src/components/DashboardPreview.tsx` (nuevo — extracción)
- `src/components/StaggeredText.tsx` (nuevo — reusable)

**Tiempo:** 3-4h
**Criterio:** Hero con dashboard que ocupa 60% del viewport, datos creíbles, multiple depth layers, animations CSS.

**Composición del Hero:**
1. **Top bar del hero:**
   - Badge "14 días gratis · Sin tarjeta" con dot verde pulsante (`.pulse-soft`)
   - H1 "Automatizá tu local. Sin complicaciones." con staggered letter reveal (`.letter-reveal` span por span, `animation-delay` incremental 0.03s, duración 0.5s, easing `--ease-out-quart`)
   - H1 segundo color: `#d4b8ff` sólido (NO gradient, NO glow)
   - Subtitulo con `<strong>` highlight en "dejás de perder entre 2 y 5 horas por día"

2. **CTAs (2):**
   - Primary: WhatsApp verde con icono. Hover: scale 1.02 + brighten. Active: scale 0.98.
   - Secondary: ghost violeta. Hover: fill violeta/10 + border violeta.

3. **Trust strip:** `+$5.1M · +349 · 99.9% · 5-10 días` con separators ·, sin pill

4. **Dashboard Preview (lado derecho o abajo del copy):**
   - Browser frame con traffic lights + URL bar
   - 3-column layout interno: sidebar (clientes list) | agenda (timeline vertical) | detail panel (cliente activo)
   - **Avatares con iniciales** en gradient de 4 colores de la paleta
   - **Status badges:** "Confirmado" (verde), "Pendiente" (gris), "En curso" (violeta)
   - **KPI strip arriba:** Ingresos mes, Cobros hoy, Asistencia
   - **Animaciones continuas CSS:**
     - Pulse dot verde en un badge "Live · 14:22"
     - Stagger fade-up de cada card de agenda (delay incremental)
     - Hover en cada turno: `translateX(4px)` + border violeta (`.ease-out-quart`)
   - **Floating notification (top-left):** "Cobro automático · 14:22" con ring de pulse
   - **Floating notification (bottom-right):** "+3 turnos nuevos" con avatar stack overlap
   - **Cursor visible (CSS only):** SVG cursor que aparece en posición fija con `animation` sutil, simulando que el usuario está clickeando
   - **Modal/hover popover simulado:** pequeño card que aparece con "Confirmado vía WhatsApp" en un avatar, con slide-in animation

5. **Bottom strip:** "Funciona con WhatsApp Business · MercadoPago · Calendario" (logos sutiles)

**Restricciones críticas a respetar:**
- NO gradient en texto
- NO floating orbs/blobs (solo el radial glow wash detrás del preview, opacity 0.6)
- NO glassmorphism (cards sólidas con border violeta)
- Logo del hero: solo elemento con glow
- Cursor es SVG, no librería

---

### FASE 2 — Marquee de Logos + Stats Animados (2 archivos)
**Archivos:**
- `src/components/LogoMarquee.tsx` (nuevo — reemplaza LogoBar)
- `src/components/StatsCounter.tsx` (nuevo — para trust bar)

**Tiempo:** 1.5h
**Criterio:** marquee infinito de logos sin cortes abruptos, stats cuentan al entrar en viewport

**LogoMarquee:**
- Strip horizontal con 10-12 logos/rubros
- 2 copias del track para seamless loop
- `animation: marquee 40s linear infinite`
- `.mask-fade-both` para gradient mask a los costados
- Pausa en hover: `.marquee:hover { animation-play-state: paused }`
- Cada logo: 24x24 icon + nombre corto en gris
- Logos custom SVG: Gym, CrossFit, Boxeo, Yoga, Salón, Barbería, Estética, Academia, Pilates, Spinning, Nutrición, Tattoo (12 rubros para llenar visualmente)

**StatsCounter:**
- Reemplaza el TrustBar actual
- Números grandes con `font-display text-[56px]`
- Animación: `@property --num` + `counter()` + `animation-timeline: view()` para que cuente de 0 al número real al entrar
- Fallback JS: IntersectionObserver que dispara el counter
- Cada stat: número + label + icono sutil al lado
- Dividers verticales entre stats (md+)

---

### FASE 3 — Bento Grid Features con Hover Reveal (2 archivos)
**Archivos:**
- `src/components/Features.tsx` (refactor)
- `src/components/BentoCard.tsx` (nuevo)

**Tiempo:** 2h
**Criterio:** 6 features en grilla bento asimétrica con hover reveal, gradient sweep, content slide-up

**Layout bento:**
```
┌─────────────┬─────────────┐
│  CRM        │  Cobros     │
│  (2x1)      │  (1x1)      │
├──────┬──────┤             │
│AGENDA│  WA  │─────────────┤
│(1x1) │(1x1) │  Dashboard  │
├──────┴──────┤  (2x1)      │
│  Datos       │             │
│  (1x1)      │             │
└─────────────┴─────────────┘
```

**BentoCard:**
- Border `rgba(124,58,237,0.15)` → on hover `rgba(124,58,237,0.4)`
- Background: `rgba(255,255,255,0.04)` → on hover `rgba(255,255,255,0.06)`
- `::after` con `linear-gradient(135deg, transparent 0%, rgba(124,58,237,0.15) 50%, transparent 100%)` que se mueve en hover (`background-position` animation)
- Icon top-left, title top-right, description bottom (que aparece en hover con slide-up + opacity 0→1)
- Easing: `--ease-out-quart`
- Al card de "CRM" agregar background dinámico: lista de 5 clientes con avatares que aparece en hover
- Al card de "Cobros" agregar: contador que cuenta de 0 a $1.24M en hover
- Al card de "WhatsApp" agregar: chat bubble preview que entra en hover
- Al card de "Agenda" agregar: timeline mini con dot verde pulsante en el turno activo
- Al card de "Dashboard" agregar: mini chart con 3 barras que crecen
- Al card de "Datos" agregar: lock icon que rota 360° en hover

---

### FASE 4 — "Cómo funciona" con SVG Path Animation (1 archivo)
**Archivo:** `src/components/HowItWorks.tsx` (refactor)
**Tiempo:** 1.5h
**Criterio:** SVG con paths que se dibujan solos al entrar en viewport, simulando "el flujo de automatización"

**Visualización del flujo:**
- 3 steps: Cliente → MaatWork → Negocio del cliente
- SVG horizontal con 3 nodos conectados por paths
- Paths con `stroke-dasharray: 1000; stroke-dashoffset: 1000` → animation a `0` al entrar en viewport
- Cada nodo: circulo con icono + label + duración
- Al hacer scroll, las líneas se van dibujando progresivamente
- Después de dibujadas, los iconos hacen pulse una vez
- Stagger animation: línea 1 (0-2s), nodo 1 (2-2.5s), línea 2 (2.5-4.5s), nodo 2 (4.5-5s), etc.

**Step content:**
- Diagnóstico: 1-2 días, llamada 30min, entendemos tu local
- Prototipo: 3-7 días, configuramos con tus datos, te mostramos funcionando
- Lanzamiento: 1-2 días, capacitamos, migramos, arrancás a operar

**Colores de paths:** verde → violeta → verde (alternando para conectar purple+green brand)

---

### FASE 5 — Pricing con Featured Highlight + ROI Calculator V2 (1 archivo)
**Archivo:** `src/components/PricingROI.tsx` (refactor)
**Tiempo:** 1.5h
**Criterio:** pricing card "featured" con glow violeta animado, calculadora con más impacto visual

**Pricing card:**
- Wrapper con `::before` conic gradient que rota lentamente (4s loop) — `border-spin` animation
- Máscara con `mask-composite: exclude` para que el gradient sea solo el borde
- Inner card sólido violeta
- "MÁS POPULAR" badge animado con dot pulsante
- Hover: `scale(1.01)` + intensificar el glow

**ROI Calculator V2:**
- Sliders rediseñados con track custom
- Resultados en cards individuales con números más grandes
- Counter animation en los resultados (cuando cambia el slider)
- Comparación: "Hoy perdés $X" vs "Con MaatWork ahorrás $Y" — highlight visual
- Savings highlight en verde (cuando aplica)
- Slider track: violeta filled, lavender unfilled

---

### FASE 6 — Testimonials con Quote Card Stacking (1 archivo)
**Archivo:** `src/components/Testimonials.tsx` (refactor)
**Tiempo:** 1h
**Criterio:** 3 testimonials con quote mark gigante violeta que aparece en hover, avatar con iniciales, micro-stagger

**Card:**
- Quote mark `❝` SVG gigante (140px) en top-left como decoración
- Quote mark color: `rgba(124,58,237,0.10)` → on hover `rgba(124,58,237,0.25)`
- Avatar con iniciales y gradient (4 colores de la paleta)
- Hover: `translateY(-4px)` + border violeta + sombra más fuerte
- Border-bottom con gradient line: violeta → magenta → violeta que se mueve

---

### FASE 7 — FAQ con Smooth Accordion + Search (1 archivo)
**Archivo:** `src/components/FAQ.tsx` (refactor)
**Tiempo:** 1h
**Criterio:** accordion con transición suave (CSS grid-template-rows trick), no useState brute

**Implementation:**
- Mantener useState para el índice abierto
- CSS transition: `grid-template-rows: 0fr` → `1fr` con `overflow: hidden`
- El `+` icon rota 45° en lugar de cambiar a `×`
- Al abrir: `aria-expanded="true"` + smooth height
- Hover en card cerrada: border violeta/15
- Búsqueda opcional: input que filtra preguntas (client component, no agrega mucho código)

---

### FASE 8 — Final CTA con Live Ticker (1 archivo)
**Archivo:** `src/components/FinalCTA.tsx` (refactor)
**Tiempo:** 1h
**Criterio:** card grande con ticker sutil arriba, "X personas viendo esto ahora" simulado

**Card:**
- Background: gradient sutil de `#2d1065` → `#1a0a3e`
- Top: ticker tipo "🟢 Martín (Iron Gym) empezó hace 2 min" — loop de 5 mensajes
- Headline + sub + 2 CTAs
- Ticker animation: marquee horizontal con gradient mask
- Border violeta/25 con hover violeta/50
- Glow violeta sutil detrás

---

### FASE 9 — Footer con Newsletter + Multi-col (1 archivo)
**Archivo:** `src/components/Footer.tsx` (refactor)
**Tiempo:** 1h
**Criterio:** footer con 4 columnas + newsletter input funcional

**Layout:**
- Logo + descripción
- Producto / Rubros / Empresa / Legal columns
- Newsletter: input "Recibí tips para tu local" + submit
- Social icons: LinkedIn, Instagram, WhatsApp
- Bottom strip: copyright + "Hecho con ♥ en Buenos Aires"
- Hover en links: color violeta + underline animado

---

### FASE 10 — Page-level Polish (2 archivos)
**Archivos:**
- `src/app/page.tsx` (refactor — re-orden de secciones + nuevo Navbar)
- `src/components/Navbar.tsx` (refactor — más opciones)

**Tiempo:** 1h

**Page order final:**
1. Navbar (sticky con blur)
2. **Hero** (full viewport height)
3. **TrustStrip** (reemplaza TrustBar, con counter)
4. **LogoMarquee** (reemplaza LogoBar, marquee infinito)
5. **ProblemSolution** (sin cambios significativos)
6. **Features** (refactored a bento)
7. **HowItWorks** (refactored con SVG animation)
8. **PricingROI** (refactored)
9. **Testimonials** (refactored)
10. **FAQ** (refactored)
11. **FinalCTA** (refactored con ticker)
12. **Footer** (refactored con newsletter)

**Navbar:**
- Logo + 4 links (Funcionalidades, Precios, Casos, FAQ)
- CTA "Probar gratis" verde WhatsApp
- Al scrollear: glass effect con `backdrop-filter: blur(12px)` + bg `rgba(15,5,32,0.85)` + border bottom white/5
- Menu mobile con slide-in (no dropdown que rompe)

---

## Restricciones Globales (NO VIOLAR)

| Restricción | Razón |
|---|---|
| **NO** Framer Motion, GSAP, motion-one, Rive, Lottie | Brief del cliente + costo |
| **NO** Three.js, OGL, pixi.js | Brief del cliente |
| **NO** float orbs, particles, abstract blobs | Brief del cliente |
| **NO** gradient en texto (solo CTAs + logo) | Brief del cliente |
| **NO** glassmorphism excesivo (opacidad < 0.10) | Brief del cliente |
| **NO** purple glow por todos lados (solo logo del hero) | Brief del cliente |
| **NO** más de 1 tono de verde (solo #25D366) | Regla de marca |
| **NO** más de 1 acento (WhatsApp green solo funcional) | Regla 90:10 |
| **SÍ** `next/font/google` para fonts | Self-hosted |
| **SÍ** Tailwind v4 con `@theme` | Stack definido |
| **SÍ** SVG inline para iconos | Cero deps |
| **SÍ** CSS animations + IntersectionObserver client component | Cero animation libraries |

---

## Validación Continua

Después de cada 3-4 archivos escritos:
1. `tsc --noEmit` — verificar 0 errores
2. `next build` — verificar build limpio
3. `next start` local
4. Browser visual QA con Playwright
5. `git commit` con mensaje convencional
6. `git push` → Vercel auto-deploy
7. Verificar el deploy en https://maatwork-landing.vercel.app

---

## Métricas de éxito

- **Visual:** la hero debe sentirse "WOW" al primer scroll, no "ok".
- **Performance:** mantener TTFB < 500ms, total page size < 200KB HTML, CSS < 60KB, 0 third-party.
- **Conversión:** 2 CTAs verdes WhatsApp visibles (hero + final CTA) + 2 ghosts.
- **A11y:** contraste WCAG AA en todos los textos, aria-labels en iconos, focus rings visibles.
- **Mobile:** responsive en 360px, 768px, 1024px, 1280px.

---

## Estimación de tiempo total

- Fase 0: 30min
- Fase 1: 3-4h
- Fase 2: 1.5h
- Fase 3: 2h
- Fase 4: 1.5h
- Fase 5: 1.5h
- Fase 6: 1h
- Fase 7: 1h
- Fase 8: 1h
- Fase 9: 1h
- Fase 10: 1h
- QA + commits + deploys: 1.5h

**Total: ~16h de trabajo distribuido en sesiones.**
