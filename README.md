# MaatWork Landing — "The One"

Landing page de MaatWork: SaaS de automatización comercial para Argentina.
Stack: **Next.js 16.2.7 + React 19.2.7 + TypeScript + Tailwind CSS v4.3.0**.

## Stack & Decisiones

- **Next.js 16 App Router** con metadata API completa
- **Tailwind v4** con `@theme` CSS-first (sin `tailwind.config.js`)
- **Fonts:** `next/font/google` con self-host automático (Plus Jakarta Sans 600-800 + Inter 400-600)
- **SEO:** JSON-LD (Organization + SoftwareApplication), sitemap.ts, robots.ts, OG, Twitter, hreflang `es-AR`
- **Animaciones:** CSS-only IntersectionObserver (`RevealOnScroll`) — sin Framer Motion
- **Icons:** SVG inline — sin librería externa
- **Cero 3rd party**: sin CDN externos, sin analytics, sin Google Fonts remoto
- **Cero magic:** sin shadcn/ui, sin componentes externos

## Comandos

```bash
npm install
npm run dev          # localhost:3000 con HMR (Turbopack)
npm run build        # production build
npm start            # serve production build
npm run typecheck    # tsc --noEmit (pasa limpio)
npm run lint         # next lint
```

## Estructura

```
src/
  app/
    layout.tsx       # fonts, metadata, JSON-LD, <html lang="es-AR">
    page.tsx         # composición de las 9 secciones
    globals.css      # @import "tailwindcss" + @theme custom
    sitemap.ts       # MetadataRoute
    robots.ts        # MetadataRoute
  components/
    Navbar.tsx           # transparente → solid con blur al scroll
    Hero.tsx             # H1 + dashboard mockup inline
    TrustBar.tsx         # 4 métricas
    ProblemSolution.tsx  # 4 pain points
    Features.tsx         # 6 features en grilla 3×2
    HowItWorks.tsx       # 3 pasos con connector
    PricingROI.tsx       # pricing card + calculadora interactiva
    Testimonials.tsx     # 3 quotes con quote mark violeta
    FAQ.tsx              # 7 preguntas en acordeón
    FinalCTA.tsx         # card CTA final
    Footer.tsx           # logo + 3 columnas
    Logo.tsx             # squircle SVG con M gradient
    RevealOnScroll.tsx   # IO client component
public/
  favicon.svg        # logo M en formato favicon
```

## Brand tokens (globals.css → @theme)

| Token              | Hex      | Uso |
|--------------------|----------|-----|
| `--color-bg-base`  | #0f0520  | Fondo hero, footer, default |
| `--color-bg-elev-1`| #1a0a3e  | Secciones alternadas |
| `--color-bg-elev-2`| #2d1065  | FAQ, contraste extra |
| `--color-purple-600`| #7c3aed | CTA violeta, accent |
| `--color-purple-500`| #a855f7 | Accent light |
| `--color-purple-400`| #a78bfa | Texto muted |
| `--color-purple-200`| #d4b8ff | Texto body, lavanda |
| `#25D366`          | WhatsApp | CTA verde |

## Performance (producción)

- HTML prerendered: **111KB**
- CSS compilado: **43KB** (incluye theme + utilities purgados)
- JS total uncompressed: **~631KB** (Next 16 + React 19 base)
- 0 third-party requests

## Pendientes (no críticos)

- `public/og.png` 1200×630: la metadata la referencia. Generar antes de deploy.
- Reemplazar `wa.me/5491100000000` por el número real.
- Configurar `metadataBase` con el dominio real en `layout.tsx` (default: `maatwork.com.ar`).
