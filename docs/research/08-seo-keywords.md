# Keyword & Intent Research — MaatWork (Estudio de Software + Automatización AR)

> Fecha: 2026-06-19 | Basado en WebSearch + análisis de SERP actual. Sin datos fabricados.

---

## 1. Estado actual de la landing (GAP de arranque)

**Keywords actuales en `layout.tsx`:** "software de gestión", "sistema de turnos", "agenda online", "gestión de cobros", "CRM Argentina", "WhatsApp para negocios", "software para gimnasios", "automatización comercial".

**Problema identificado:** El title y description apuntan a "plataforma operativa para agenda, cobros y clientes". El producto NMS en el Hero es claramente un SaaS de gimnasios/turnos. La landing **no menciona en ningún lugar visible**: desarrollo a medida, fábrica de software, automatización con IA, integración de sistemas, ni el posicionamiento como estudio/agencia. Un comprador B2B buscando "empresa de software argentina" o "automatización con IA para empresas" nunca llega a maat.work.

---

## 2. Landscape competitivo

Los SERP para las keywords de alto volumen en AR están dominados por:
- **Rankings/directorios:** itoeste.com, grupovansur.com, developargentina.com, comparasoftware.com.ar — difíciles de desplazar para genéricos.
- **Software houses con blog activo:** Globant, NaNLABS, IT Oeste, Web-Argentina.com.
- **Agencias de automatización emergentes:** Duotach (N8N/IA, BA), Artics, Practia — compitiendo con contenido específico por intent.

La competencia en long-tail vertical ("software para logística Argentina", "automatizar cobros WhatsApp PyME") es **significativamente menor** que en los genéricos.

---

## 3. Keywords por intent

### TRANSACCIONAL (intención de compra / contratación inmediata)

| Keyword | Volumen estimado | Competencia | Oportunidad |
|---|---|---|---|
| empresa de software a medida Argentina | Medio | Media-Alta | Requiere dato real (GSC/Semrush) |
| desarrollo de software a medida Buenos Aires | Medio | Media | Alta — domina SEO local |
| agencia de automatización Argentina | Bajo-Medio | Baja | Alta — término emergente, pocos players |
| automatización con IA para empresas Argentina | Bajo | Muy baja | Alta — creciente 2025-2026 |
| integrar WhatsApp con CRM Argentina | Bajo | Baja | Alta — muy específico, comprador activo |
| fábrica de software Argentina | Bajo-Medio | Media | Media — existe ranking, difícil de entrar sin dominio |
| sistema a medida para PyME Argentina | Muy bajo | Muy baja | Alta long-tail |
| automatizar cobros Argentina | Muy bajo | Baja | Alta — problema específico |

### COMERCIAL / INVESTIGACIÓN (comparan opciones, cerca del cierre)

| Keyword | Oportunidad |
|---|---|
| mejor empresa de software argentina 2026 | Baja (dominado por directorios) |
| cuánto cuesta software a medida Argentina | Media — contenido de blog posiciona |
| agencia automatización procesos PyME | Alta — pocos resultados relevantes |
| software para logística Argentina a medida | Alta — vertical específico |
| integración de sistemas ERP Argentina | Media — nicho técnico |
| automatización de procesos con IA Argentina | Alta — creciente, poco contenido bueno |

### INFORMACIONAL (educación, pueden convertir con nurturing)

| Keyword | Valor |
|---|---|
| qué es automatización de procesos empresariales | Bajo para MaatWork — mucho contenido genérico |
| cómo integrar WhatsApp con sistema de gestión | Medio — útil como contenido que deriva a demo |
| agentes de IA para PyMEs argentinas | Medio — tendencia 2026, buen blog post |
| cuánto cuesta automatizar procesos en Argentina | Alto — capta buyers que investigan precio |

---

## 4. Long-tail de alto intent, baja competencia (P0 oportunidades)

Estas combinan intención transaccional + especificidad de industria o problema. Son las más rentables para un estudio chico:

1. **"automatizar WhatsApp cobros PyME Argentina"** — búsqueda real, casi sin contenido, problema muy concreto (Fuente: iasistemas.com, basework.com.ar confirman demanda).
2. **"software a medida para [logística / inmobiliaria / construcción] Argentina"** — comparasoftware.com.ar tiene páginas genéricas, no software houses especializados (Fuente: comparasoftware.com.ar).
3. **"agencia de automatización con IA Buenos Aires"** — Duotach es el único player visible; nicho abierto (Fuente: duotach.com).
4. **"integrar sistemas ERP CRM Argentina"** — intención técnica B2B, baja competencia orgánica (Fuente: wynges.com, blip.ai).
5. **"cuánto cuesta desarrollo de software a medida Argentina"** — grupovansur.com tiene un artículo que rankea; MaatWork podría competir con contenido más específico (Fuente: grupovansur.com).

---

## 5. GAP principal (resumen ejecutivo)

| Lo que la landing targetea hoy | Lo que MaatWork debería targetear |
|---|---|
| Software de turnos / agenda / gimnasios | Desarrollo de software a medida (estudio/agencia) |
| Plataforma SaaS de gestión | Automatización de procesos con IA para PyMEs AR |
| NMS como producto estrella | Portfolio: NMS + MaatWorkCRM + Infrannova + Varigas |
| Intent: buyer de SaaS de gimnasios | Intent: empresa/PyME que quiere solución a medida |
| Competidor: Trainingym, CrossfyApp | Competidor: IT Oeste, Duotach, Web-Argentina.com |

El H1 actual ("Control operativo para negocios de agenda, cobros y clientes") y el title ("Plataforma operativa para agenda, cobros y clientes") son correctos para NMS como producto pero **invisibilizan a MaatWork como estudio**. El comprador que busca "empresa de software a medida Argentina" nunca entiende que MaatWork puede construirle algo desde cero.

---

## 6. Priorización

### P0 — Máximo impacto, esfuerzo bajo-medio

- **Cambiar title/description/H1** para incluir "estudio de software" + "automatización": captura intent transaccional de compradores B2B. Sin datos de volumen exactos (requiere GSC o Semrush para confirmar).
- **Schema Organization**: actualizar `description` en JSON-LD para incluir "desarrollo a medida" y "automatización de procesos". Esfuerzo: 1h.

### P1 — Alto impacto, esfuerzo medio

- **Blog/contenido**: 3-5 posts sobre long-tails de industria ("software logística argentina", "automatizar cobros WhatsApp"). Requiere publicar páginas reales — no existe estructura de blog aún.
- **Keywords verticales en página**: sección de casos de uso por industria (logística, salud, construcción) para capturar long-tail sin páginas separadas.

### P2 — Oportunidad a largo plazo, esfuerzo alto

- **Landing páginas por vertical**: `/logistica`, `/inmobiliaria`, `/construccion` — requiere definir qué industrias trabaja MaatWork (dato real necesario del equipo).
- **Aparecer en directorios**: itoeste.com, developargentina.com, comparasoftware.com.ar listan empresas de software AR. Listings gratuitos con impacto de referral + señal de autoridad.

---

## 7. Datos reales necesarios (no fabricar)

- Volumen exacto de búsquedas: requiere Google Search Console (post-indexación) o Semrush/Ahrefs/Google Keyword Planner con cuenta activa.
- Industrias objetivo de MaatWork: el equipo debe confirmar en qué verticales tiene portfolio o quiere posicionarse.
- CTR actual y posiciones: GSC mostrará si ya hay impresiones para alguna keyword de estudio de software.

---

## Fuentes consultadas

- [Desarrollo de Software a Medida 2026 — IT Oeste](https://itoeste.com/desarrollo-de-software-a-medida-na/)
- [Las 14 Empresas de Software Argentina 2026 — IT Oeste](https://itoeste.com/empresa-de-software-top-14/)
- [Top 10 Desarrolladoras Argentina 2026 — Grupo Vansur](https://grupovansur.com/en/las-10-mejores-desarrolladoras-de-software-de-argentina-actualizado-2026/)
- [Costo Software a Medida Argentina 2025 — Grupo Vansur](https://grupovansur.com/en/el-costo-real-del-software-a-medida-en-argentina-2025-una-guia-transparente/)
- [Top 10 Software Factories Argentina 2025 — Grupo Vansur](https://grupovansur.com/en/ranking-2025-las-10-mejores-software-factorys-de-argentina/)
- [Agentes IA PyMEs Argentina 2026 — Develop Argentina](https://developargentina.com/blog/agentes-ia-pymes-argentina-automatizacion-2025)
- [Automatización Marketing PyMEs Argentina 2026 — IA Sistemas](https://iasistemas.com/blog/automatizacion-marketing-pymes-argentina)
- [Automatizaciones con IA para empresas Argentina — Artics](https://www.artics.com.ar/automatizaciones-ia-para-empresas/)
- [Top 5 Consultorías Automatización IA — Duotach](https://duotach.com/blog/top-5-consultorias-automatizacion-ia)
- [Cómo elegir empresa software Argentina 2026 — GranWeb](https://www.granweb.io/ar/blog/como-elegir-empresa-software-argentina-actualizado-2026)
- [IA para PyMEs Argentina 2026 — Runia](https://runia.ar/blog/agentes-ia-pymes-argentinas-2026)
- [CRM WhatsApp Argentina — Basework](https://www.basework.com.ar/blog/crm-whatsapp-argentina)
- [Integración WhatsApp ERP Argentina — Wynges](https://wynges.com/integracion-whatsapp-erp-argentina/)
- [Software Logística Argentina — ComparaSoftware](https://www.comparasoftware.com.ar/logistica-empresarial)
- [Software Inmobiliario Argentina — ComparaSoftware](https://www.comparasoftware.com.ar/software-inmobiliario)
- [Empresas Software Argentina (62) — Develop Argentina](https://developargentina.com/directorio/empresas-software-argentina)
