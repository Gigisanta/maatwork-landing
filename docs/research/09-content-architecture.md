# Arquitectura de contenido — MaatWork (`maat.work`)

**Fecha:** 2026-06-19 · **Propósito:** diseño de mapa de sitio multi-página para rankear intents verticales y de servicio, migrar desde single-page sin rehacer el design system.

**Regla:** cero fabricación. Los ítems que requieren dato real del owner están marcados `[OWNER]`.

---

## Por qué una single-page no alcanza

Una sola URL compite con decenas de intents distintos desde el mismo dominio de autoridad, presupuesto de rastreo y señal de contenido. El SERP argentino para "software para gimnasios" o "automatización de procesos Argentina" lo dominan páginas dedicadas (AgendaPro, AccesoGym, Fitco) — cada una con H1-keyword, copy específico del rubro, FAQ propia y schema indexado por separado. La corrección es una sola: darle a cada intent su propia URL indexable.

**Principio rector (memorable.design / Whitehat SEO):** páginas de servicio e industria deben estar en tier 1 de la jerarquía (máximo 2 clics desde la home); páginas enterradas a 4+ clics quedan fuera del presupuesto de rastreo habitual de Googlebot.

---

## Modelo de arquitectura: hub-and-spoke con topic clusters

```
maat.work/
├── [HOME] — hub principal, enlaza a todos los spokes
│
├── SERVICIOS (pillar pages)
│   ├── /servicios/desarrollo-a-medida
│   ├── /servicios/automatizacion-de-procesos
│   ├── /servicios/app-movil
│   ├── /servicios/integraciones
│   └── /servicios/producto-base          ← diferenciador MaatWork vs fábrica pura
│
├── VERTICALES / INDUSTRIA (cluster pages — intent de rubro)
│   ├── /software-para-gimnasios
│   ├── /software-para-natatorios
│   ├── /software-para-pilates
│   ├── /software-para-barberias
│   └── /software-para-academias
│
├── CASOS / PORTFOLIO (sub-páginas de los 4 productos reales)
│   ├── /casos/nms                         ← Natatory Management System
│   ├── /casos/maatwork-crm
│   ├── /casos/infrannova
│   └── /casos/varigas
│
├── COMPARATIVAS (intent transaccional)
│   └── /vs-agendapro                      ← [OWNER] datos públicos verificados
│
├── BLOG / RECURSOS (TOFU + GEO / AI citations)
│   ├── /blog/cobrar-cuotas-gimnasio-argentina
│   ├── /blog/sistema-turnos-vs-excel
│   └── /blog/recordatorios-automaticos-whatsapp
│
├── PROCESO / SOBRE
│   ├── /proceso                           ← cómo trabajamos, 5 pasos, implementación guiada
│   └── /sobre                             ← quiénes somos [OWNER]
│
└── /contacto
```

---

## Estructura de URLs

| Patrón | Ejemplo | Racional |
|---|---|---|
| `/servicios/{slug}` | `/servicios/automatizacion-de-procesos` | Agrupa autoridad temática bajo un padre rastreable |
| `/{keyword-de-rubro}` | `/software-para-natatorios` | Keyword exacta en URL, sin carpeta padre — corta, indexable, el patrón que usan los competidores AR |
| `/casos/{slug}` | `/casos/nms` | Diferencia portfolio de servicios; habilita schema `SoftwareApplication` por producto |
| `/vs-{competidor}` | `/vs-agendapro` | Intent transaccional alto; patrón estándar en B2B SaaS |
| `/blog/{slug}` | `/blog/cobrar-cuotas-gimnasio-argentina` | Rutas planas bajo `/blog/` para evitar profundidad extra |

---

## Internal linking y topic clusters

**Flujo de link equity (hub-and-spoke):**

```
HOME  →  páginas de servicio (pillar)
HOME  →  verticales de rubro (cluster)
verticales de rubro  →  pillar de servicio relevante
verticales de rubro  →  caso de producto relacionado
casos  →  servicio que lo construyó
blog  →  vertical de rubro + pillar de servicio
```

Reglas:
- Cada cluster page enlaza **hacia arriba** a su pillar.
- La home enlaza **hacia abajo** a las páginas tier-1 más importantes (al menos verticales y servicios clave).
- Las comparativas enlazan a los verticales pertinentes.
- El footer incluye nav links a servicios y verticales (no solo contacto/home).

**No usar footer dumps** (listas de 20 links sin jerarquía) — link equity se diluye. Mantener 5-7 links estructurales en footer.

---

## Migración desde single-page (Next.js App Router)

La home actual (`src/app/page.tsx`) no se toca en la migración: sigue siendo `/`. La estrategia es **adición incremental de rutas**, no reescritura.

### Pasos técnicos

1. **Crear directorio de ruta** — p.ej. `src/app/software-para-natatorios/page.tsx`. App Router descubre la ruta automáticamente; sin config adicional.
2. **Reusar componentes existentes** — `Navbar`, `Footer`, `StickyWhatsApp`, `LeadForm`, `FAQ` (con props de rubro), `FinalCTA`. Ningún rediseño. El design system (`maatwork-ds.css`) ya está disponible globalmente.
3. **`generateMetadata` por ruta** — cada `page.tsx` exporta su propio `metadata` object con `title`, `description`, `openGraph`, `canonical`. Esto es la ventaja del App Router vs single-page.
4. **Schema por página** — las verticales suman `BreadcrumbList`; los casos suman `SoftwareApplication`; la home retiene el `Organization`/`WebSite` existente.
5. **Actualizar `sitemap.ts`** — agregar rutas nuevas al array. Ya existe el archivo; solo extenderlo.
6. **Internal links** — agregar enlaces desde la home existente (`ProductEcosystem`, `HowItWorks`, `Footer`) hacia las páginas nuevas con anchor text keyword-rich.

### Lo que NO hay que rehacer
- Design system, tokens, fuentes: ya están en `globals.css` + `maatwork-ds.css`.
- Navbar / Footer: reusar tal cual, con links nuevos.
- API de leads (`src/app/api/leads/route.ts`): funciona para todas las rutas.
- Layout raíz (`src/app/layout.tsx`): no tocar.

---

## Prioridad y esfuerzo por página

### P0 — Impacto máximo, menor esfuerzo, sin bloqueos externos

| Página | Por qué | Esfuerzo | Requiere dato real |
|---|---|---|---|
| `/software-para-natatorios` | NMS ya corre en producción; ventaja competitiva única; ningún competidor AR tiene página dedicada | Bajo (1 componente de layout + copy + FAQ) | El producto existe → se puede describir honestamente |
| `/software-para-gimnasios` | Mayor volumen de búsqueda en AR para este intent; competencia directa de AgendaPro/AccesoGym | Bajo (mismo template) | Confirmar módulos aplicables al rubro [OWNER] |
| Actualizar `sitemap.ts` | Las rutas nuevas no se indexan si no aparecen en el sitemap | Trivial (10 líneas) | No |
| Internal links home→verticales | Sin esto las páginas nuevas quedan huérfanas (no indexan bien) | Mínimo | No |

### P1 — Alto retorno, esfuerzo medio, algunos bloqueos menores

| Página | Por qué | Esfuerzo | Requiere dato real |
|---|---|---|---|
| `/software-para-pilates` | Rubro creciente AR, bajo competencia SEO local | Bajo | Confirmar módulos aplicables [OWNER] |
| `/software-para-barberias` | Intent con crecimiento claro; fácil de cubrir con mismo template | Bajo | Confirmar módulos [OWNER] |
| `/casos/nms` | Schema `SoftwareApplication` habilita rich results; credencial técnica real | Medio (copy de caso, stack, capturas) | Screenshots reales del producto [OWNER] |
| `/casos/maatwork-crm` | Segundo producto más cercano al comprador SMB | Medio | Igual que NMS [OWNER] |
| `/servicios/automatizacion-de-procesos` | Intent B2B de alto valor; pillar que ancla el cluster de blog | Medio | Solo copy de servicio; no requiere caso publicado |
| `/servicios/desarrollo-a-medida` | Intent fundacional del estudio; pillar central del árbol de servicios | Medio | Solo copy |
| `/proceso` | Diferenciador "implementación guiada vs self-service" merece URL propia para linkear desde verticales | Bajo-medio | Descripción de los 5 pasos reales [OWNER] |

### P2 — Valiosos pero baja urgencia o bloqueo externo relevante

| Página | Por qué | Esfuerzo | Requiere dato real |
|---|---|---|---|
| `/vs-agendapro` | Intent transaccional muy alto; riesgo de error si no hay datos públicos verificados | Medio | Precios/features del competidor verificados [OWNER] |
| `/casos/infrannova` + `/casos/varigas` | Credencial técnica, menor cercanía al comprador SMB actual | Medio | Screenshots + descripción honesta [OWNER] |
| `/software-para-academias` | Volumen menor, pero sin competidor local con página dedicada | Bajo | Confirmar módulos [OWNER] |
| `/servicios/app-movil` + `/servicios/integraciones` | Completan el mapa; menor volumen de búsqueda inmediato | Medio | Solo copy |
| `/blog/*` (3 artículos) | TOFU + GEO citations; requiere redacción larga y honesta | Alto | Solo escritura — no requiere activos externos, pero sí verificación de datos citados |
| `/sobre` | Señal E-E-A-T; útil pero no palanca de tráfico directa | Bajo | Foto, bio, historia real [OWNER] |
| `/contacto` | Página de destino alternativa al form del hero | Bajo | No |

---

## Fuentes

- [Website Architecture SEO: Structure Guide 2026 — memorable.design](https://memorable.design/website-architecture-seo/)
- [Effective Website Architecture SEO for Growth — Whitehat SEO](https://whitehat-seo.co.uk/blog/website-architecture-seo)
- [Topic Clusters for SEO — PipelineRoad Agency](https://pipelineroad.com/agency/blog/topic-clusters-seo)
- [Next.js App Router SEO Optimization 2026 — CreateBytes](https://createbytes.com/insights/nextjs-app-router-seo-optimization)
- [Next.js Pages Router to App Router Migration — EastonDev](https://eastondev.com/blog/en/posts/dev/20251218-nextjs-pages-to-app-router-migration/)
- [What Is a Pillar Page? Complete SEO Strategy Guide 2026 — Sudha Solutions](https://www.sudhasolutions.com/blog/what-is-pillar-page-seo-strategy-and-why-your-website-needs-one-today-2026-guide/)
- [Topic Clusters and Pillar Pages — Search Engine Land](https://searchengineland.com/guide/topic-clusters)
- [DevelopArgentina servicios (referencia competidor AR)](https://www.developargentina.com/servicios)
- Contexto existente: `docs/PLAN_GROWTH.md` · `docs/MARKET_RESEARCH.md` · `src/data/products.ts`
