# SEO Técnico y Structured Data — MaatWork multi-página

**Fecha:** 2026-06-19  
**Scope:** schema.org para estudio argentino de software + automatización escalando a multi-página.

---

## Estado actual del JSON-LD (hallazgos en `src/app/layout.tsx`)

| Campo | Estado | Problema |
|---|---|---|
| `Organization.sameAs` | `[]` vacío | No aporta señales de autoridad; agregar perfiles reales (LinkedIn, Google Business, etc.) cuando existan |
| `Organization.address` | Solo `addressCountry: "AR"` | Falta `streetAddress`, `addressLocality`, `addressRegion`, `postalCode` si hay sede física |
| `Organization.telephone` | Ausente | Recomendado para LocalBusiness/contacto |
| `Organization.contactPoint` | Ausente | Útil para señalar WhatsApp / email de contacto |
| `SoftwareApplication.url` | Ausente | Debe apuntar a la URL canónica de la app |
| `SoftwareApplication` — sin `@id` | Sin IRI | Dificulta referencias cruzadas dentro del `@graph` |
| `AggregateOffer.lowPrice: "100"` | USD hardcodeado | Verificar que coincida con precio real mostrado en página (hoy Pricing.tsx dice "base") |
| `FAQPage` en layout global | En todas las páginas | Al escalar, debe estar solo en la página que contiene la FAQ visible |
| `hreflang` duplicado | En `<head>` manual + `metadata.alternates` | Next.js App Router ya inyecta el tag via `alternates`; el `<link>` manual es redundante |

---

## P0 — Crítico (hacerlo antes de lanzar páginas nuevas)

### 1. Schema de página vs. schema global
- **Qué:** Mover `FAQPage` al componente de página donde vive el FAQ; no en `layout.tsx`.
- **Por qué:** Google espera que el schema coincida con el contenido visible de esa URL específica. FAQPage en todas las rutas generará errores en Search Console.
- **Esfuerzo:** Bajo — mover bloque a `page.tsx` o componente FAQ.
- **Dato real requerido:** No.

### 2. `sameAs` en Organization
- **Qué:** Completar con URLs reales: LinkedIn, Google Business Profile, GitHub org, etc.
- **Por qué:** Es la señal más directa de Entity Authority para Google Knowledge Graph y AI Search (GEO/AEO). Array vacío = desperdicio de campo.
- **Esfuerzo:** Mínimo — agregar strings reales.
- **Dato real requerido:** Sí — URLs de perfiles verificados.

### 3. `BreadcrumbList` en páginas internas
- **Qué:** Agregar `BreadcrumbList` JSON-LD a cada página interna (`/servicios`, `/industrias`, `/casos`, `/blog/*`).
- **Por qué:** Rich snippet de migas en SERPs; señal estructural de jerarquía del sitio. Google usa esto en AI Overviews.
- **Esfuerzo:** Bajo por página — componente reutilizable.
- **Dato real requerido:** No (URLs propias).

### 4. Sitemap dinámico con páginas nuevas
- **Qué:** Actualizar `sitemap.ts` para incluir todas las rutas al escalar; usar `generateSitemaps()` si el catálogo crece.
- **Por qué:** Hoy solo incluye `/`. Páginas no listadas tardan más en ser indexadas.
- **Esfuerzo:** Bajo — extender el array o hacer sitemap dinámico desde fuente de datos.
- **Dato real requerido:** No.

---

## P1 — Alta prioridad (al crear páginas de servicios/industrias)

### 5. `Service` schema en páginas de servicio
- **Qué:** Usar `@type: "Service"` con `name`, `description`, `provider` (ref al `@id` de Organization), `areaServed`, `serviceType`, `hasOfferCatalog`.
- **Por qué:** Describe semánticamente qué ofrece MaatWork en cada página. Diferente de `SoftwareApplication` (que describe el producto). Ambos coexisten en el `@graph`.
- **Esfuerzo:** Medio — un bloque por página de servicio.
- **Dato real requerido:** Sí — descripción, precio referencial si aplica.

### 6. `Organization` vs `LocalBusiness` — decisión de tipo
- **Qué:** Si MaatWork tiene dirección física pública, upgradar a `LocalBusiness` (no usar `ProfessionalService` — deprecado en schema.org). Si es 100% remoto/digital, mantener `Organization`.
- **Por qué:** `LocalBusiness` habilita Knowledge Panel, maps, "near me"; `Organization` es correcto para entidad digital-first. `ProfessionalService` fue deprecado por confusión con `Service`.
- **Esfuerzo:** Bajo — cambio de tipo en el nodo existente.
- **Dato real requerido:** Sí — dirección física si existe.

### 7. `canonical` y `hreflang` por página
- **Qué:** Cada ruta nueva debe declarar `alternates.canonical` y `alternates.languages["es-AR"]` en su `generateMetadata`. Eliminar el `<link rel="alternate">` manual en `layout.tsx` (duplicado con el que genera Next.js).
- **Por qué:** Sin canonical por ruta, Google puede elegir la URL canónica incorrecta. El tag manual en `<head>` ya es generado por `metadata.alternates` del App Router — duplicarlo puede confundir crawlers.
- **Esfuerzo:** Bajo — patrón estándar App Router.
- **Dato real requerido:** No.

### 8. `WebSite` + `potentialAction` (SearchAction)
- **Qué:** Agregar nodo `WebSite` al `@graph` del layout con `potentialAction: SearchAction` apuntando a búsqueda interna si existe.
- **Por qué:** Google retiró el Sitelinks Search Box de SERPs en nov 2024, pero el nodo `WebSite` con `@id` es necesario para establecer la identidad canónica del sitio en el grafo de entidades. SearchAction queda útil para Agentic/AI Search.
- **Esfuerzo:** Bajo — agregar nodo al `@graph`.
- **Dato real requerido:** No (SearchAction solo si hay buscador interno real).

---

## P2 — Medio plazo (blog y portfolio)

### 9. `BlogPosting` / `TechArticle` para blog
- **Qué:** Cada artículo de blog: `@type: "BlogPosting"` con `headline`, `datePublished`, `dateModified`, `author` (Person con `@id`), `image`, `publisher` (ref Organization).
- **Por qué:** Habilita rich result de artículo en SERPs. Campos mínimos para Google: `headline`, `image`, `datePublished`, `author`.
- **Esfuerzo:** Medio — componente de layout para `[slug]`.
- **Dato real requerido:** Sí — datos reales del artículo (autor, fecha, imagen).

### 10. `CreativeWork` / `SoftwareApplication` para portfolio
- **Qué:** Cada caso de cliente como `CreativeWork` (o `SoftwareApplication` si es producto) con `name`, `description`, `creator`, `about`, `url`.
- **Por qué:** Señala a Google que son trabajos propios, no contenido genérico.
- **Esfuerzo:** Medio.
- **Dato real requerido:** Sí — nombre del proyecto, descripción sin revelar cliente confidencial.

### 11. AggregateRating / Review — BLOQUEADO
- **Qué:** No implementar hasta tener reseñas reales de usuarios verificables en la propia página.
- **Por qué:** Google prohíbe explícitamente el autocontrol de reseñas ("entity that controls the reviews about itself"). Markup sin reviews reales visibles en página = violación de políticas → posible manual action. No hay rich snippet sin `ratingCount` o `reviewCount` visible y coincidente en el HTML.
- **Esfuerzo:** N/A hasta tener reviews.
- **Dato real requerido:** Sí, obligatorio — reviews genuinas de usuarios en la página.

### 12. Internal linking y estructura de headings
- **Qué:** Asegurar `<h1>` único por página, jerarquía correcta `h1 → h2 → h3`. Links internos contextuales entre páginas de servicio, industrias y casos.
- **Por qué:** Internal linking distribuye PageRank y ayuda a crawlers a entender la arquitectura. Headings incorrectos degradan accesibilidad y señales semánticas.
- **Esfuerzo:** Bajo-medio — auditoría por página al crearlas.
- **Dato real requerido:** No.

### 13. Imágenes y `alt` text
- **Qué:** Toda imagen con `alt` descriptivo real. OG image actualizada si cambia el producto.
- **Por qué:** Señal de relevancia; accesibilidad; Core Web Vitals (LCP depende de imagen principal).
- **Esfuerzo:** Bajo — disciplina en código.
- **Dato real requerido:** No (texto descriptivo real, no generado).

---

## Resumen de decisiones clave

| Tipo | Decisión |
|---|---|
| Organization vs LocalBusiness | Organization ahora; migrar a LocalBusiness solo si hay dirección física pública |
| ProfessionalService | No usar — deprecado |
| Service | Sí, por página de servicio |
| OfferCatalog | Útil si hay múltiples servicios con precios — usar `hasOfferCatalog` en `Organization` o `Service` |
| AggregateRating | Bloqueado hasta reviews reales |
| WebSite | Agregar al `@graph` global |
| BreadcrumbList | Por página interna, no global |
| BlogPosting | Al lanzar blog |

---

## Fuentes

- [Schema.org ProfessionalService (deprecated)](https://schema.org/ProfessionalService)
- [Schema.org OfferCatalog](https://schema.org/OfferCatalog)
- [Google: Review Snippet structured data](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- [Google: General Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Schema Markup for Service Businesses — BrandVM](https://www.brandvm.com/post/schema-markup-service-businesses)
- [LocalBusiness vs Organization Schema — SearchXPro](https://searchxpro.com/local-business-vs-organization-schema/)
- [Service Schema Markup — SchemaApp](https://www.schemaapp.com/schema-markup/services-schema-markup-schema-org-services/)
- [Next.js App Router SEO — Prateeksha Web Design](https://prateeksha.com/blog/nextjs-app-router-seo-metadata-sitemaps-canonicals)
- [Next.js Sitemap Complete Guide 2025 — Medium/Utsav Desai](https://utsavdesai26.medium.com/nextjs-sitemap-complete-guide-for-dynamic-seo-in-2025-1464c4902846)
- [Article vs Blog Schema 2026 — SearchEngineZine](https://searchenginezine.com/technical/schema/article-vs-blog-schema/)
- [Sitelinks Search Box deprecated Nov 2024 — SchemaApp Support](https://support.schemaapp.com/support/solutions/articles/33000241132-how-to-create-sitelinks-search-box-markup-)
- [BreadcrumbList SEO best practices — SearchEngineLand](https://searchengineland.com/guide/seo-breadcrumbs)
- [Structured Data & Schema for SEO/GEO/AEO — Opace Agency](https://opace.agency/blog/structured-data-schema-for-seo/)
