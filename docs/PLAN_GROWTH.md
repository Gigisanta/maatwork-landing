# Plan de crecimiento — Reposicionamiento, Conversión, SEO

**Fecha:** 2026-06-19 · **Alcance:** sitio MaatWork (`maat.work`).
**Insumo:** auditoría inicial (3 agentes) + investigación profunda (20 agentes sonnet, informes en `docs/research/01-20`).
**Regla inviolable:** cero fabricación de clientes, métricas o testimonios. Ítems que requieren un dato/activo real del owner van marcados `[OWNER]`.

---

## 0. El pivote (lo que cambió)

MaatWork **no es un SaaS de gimnasios**. Es un **estudio de software y automatización a medida para cualquier negocio**: construye apps a medida + automatizaciones de todo tipo (WhatsApp, cobros, integraciones, IA/agentes), y ofrece un producto base operativo como puerta de entrada. Los 4 productos en producción (NMS, MaatWorkCRM, Infrannova, Varigas) son **portfolio/prueba**, no la oferta. Gimnasios = una industria de ejemplo, no el core.

> Esto reemplaza la decisión de posicionamiento "SMB-local con turnos" de `docs/MARKET_RESEARCH.md`, que dejaba explícito el fork inverso ("factory de software vertical B2B — avisar y se reescribe"). El owner gatilló ese fork el 2026-06-19.

## 1. Diagnóstico convergente (20 agentes)

1. **Posicionamiento (`01,03,04,05,18,19`).** El mercado de estudios y de agencias de automatización está saturado de claims genéricos ("soluciones a medida + experiencia + compromiso") → invisibilidad. El diferenciador más fuerte de MaatWork está **inexplotado**: 4 productos propios en producción, navegables, que ningún competidor tiene. Segundo ángulo único: las automation agencies AR (Duotach, Wodes) solo cablean herramientas de terceros; MaatWork **construye el software y además lo automatiza**.
2. **Oferta sin forma (`18,02,03`).** Las capacidades existen pero están dispersas (Features, Pricing, ProductEcosystem). No hay un **menú de servicios contratable**. El comprador ve qué construyeron pero no sabe qué puede pedir.
3. **SEO mal apuntado (`08,09`).** Title/keywords/JSON-LD hablan de "agenda, cobros, turnos". Quien busca "desarrollo de software a medida" o "automatización de procesos para PyME" nunca llega. Y una single-page no rankea para múltiples intents.
4. **Conversión de ticket alto (`07,16,17,15`).** El funnel es de trial SaaS, pero buena parte de la venta es consultiva (proyectos a medida). Falta señal de precio (48-86% de compradores B2B la exigen), calificación de leads, y enrutamiento producto-listo vs proyecto-a-medida.
5. **Confianza sin fabricar (`15,14`).** Estudio nuevo, sin prueba social pública. La prueba honesta más potente —productos vivos navegables— hoy está subaprovechada.

## 2. El mensaje (norte de todo el copy)

- **Claim central:** problema del cliente, no features. Eje: *"El software de tu negocio, hecho a tu medida"* + automatización.
- **Prueba de entrega:** *"No prometemos que podemos construirlo. Ya lo construimos."* → portfolio vivo.
- **Diferenciador estructural:** *"No te conectamos herramientas de terceros. Construimos el sistema que tu negocio necesita y lo automatizamos."*
- **Riesgo cero:** *"Te mostramos el software funcionando antes de cualquier compromiso."*

---

## Fase 0 — Reposicionar la home (copy + schema, sin rutas nuevas)

Rápido, sin dependencia de owner, alto leverage. Es cambiar el qué-somos, no la arquitectura.

### Mensaje y estructura
- **Hero reposicionado.** H1/subcopy del estudio (problema + outcome), no "plataforma operativa / agenda·cobros·clientes". Eyebrow → categoría real ("Estudio de software y automatización · Argentina"). Microcopy de prueba bajo el CTA. `Hero.tsx`. (`01,19`)
- **Sección de servicios explícita** (nueva o refactor de Features): 3 carriles nombrados con CTA propio — **Producto base operativo**, **Desarrollo a medida**, **Automatizaciones e IA / integraciones**. Cada uno: qué incluye, a quién sirve, prueba en el portfolio. `Features.tsx` o nueva `Services.tsx`. (`18,03`)
- **Separar portfolio (credibilidad) de servicios (oferta).** Reencuadrar `ProductEcosystem` como "Lo que ya construimos" / prueba, subordinado a servicios; destacar que son **4 industrias distintas** = prueba de adaptabilidad. Tags de industria + tiempo en producción + "ver en vivo". `ProductEcosystem.tsx`. (`14,18,01`)
- **Sección Proceso** ("cómo trabajamos", 3-5 pasos: diagnóstico→propuesta→desarrollo→entrega→soporte). Diferenciador "guiado vs self-service". Reusar/adaptar `HowItWorks.tsx`. (`15,19`)
- **ProofStrip** → señales del estudio (productos en producción, industrias servidas, soporte local), no repetir el H1. `ProofStrip.tsx`. (`19`)

### Conversión
- **Señal de precio visible** ("desde USD 100/mes" + "implementación/automatización desde USD X" `[OWNER]`) con framing de ROI encima. `Pricing.tsx`. (`16,02,04,07`)
- **Enriquecer el prefill de WhatsApp** con lo que el form ya tiene (nombre, tipo de necesidad, rubro) → el equipo arranca con contexto. `whatsapp.ts`, `LeadForm.tsx`. (`17`)
- **Continuación post-submit** del form (tiempo de respuesta concreto + CTA WhatsApp). `LeadForm.tsx`.
- **FAQ de objeciones de riesgo** (no solo "cuánto cuesta"): "¿quién es dueño del código?", "¿y si no me gusta?", "¿cuánto tarda?", "¿hay permanencia?". + CTA al final del FAQ. `faqs.ts`, `FAQ.tsx`. (`15,17`)
- **Términos de confianza** en la home: sin permanencia, pago por milestones, código del cliente, demo antes de firmar `[OWNER decisión]`. (`15`)

### SEO on-page (barato)
- **Title / H1 / description / keywords** al framing de estudio ("desarrollo de software a medida", "automatización de procesos", "estudio de software Argentina"). Captura intent transaccional que hoy se pierde. `layout.tsx`. (`08`)
- **JSON-LD Organization**: description al estudio + servicios; `addressRegion`/`addressLocality`; `telephone` y `sameAs` (LinkedIn, GitHub, Crunchbase, Wikidata) `[OWNER]`. Agregar nodo `WebSite` al `@graph`. **Corrección vs plan anterior:** NO usar `SearchAction` (sitelinks searchbox lo retiró Google nov-2024) salvo que haya buscador interno real. (`11,12`)
- **Mover `FAQPage` schema** a la URL donde el FAQ es visible (requisito de Google: schema = contenido visible). Nota: los rich results de FAQ están deprecados (may-2026) pero el schema sigue sirviendo como señal para LLMs. (`12`)
- **H2/H3 con keywords** conservando tono. (`08`)

### Medición
- Eventos por ubicación (`whatsapp_cta` con `location`), `section_view` (servicios/pricing/contacto), `faq_open`, y por carril de servicio. `AnalyticsEvents.tsx`.

---

## Fase 1 — Arquitectura multi-página (la palanca de tráfico)

Una single-page no captura intents. Migrar a multi-página con App Router **reusando** el design system (componentes, `maatwork-ds.css`, Navbar/Footer/LeadForm/FAQ/FinalCTA) — no se rediseña nada. Cada ruta usa `generateMetadata` propio (title/OG/canonical). Sitemap dinámico + internal linking + `BreadcrumbList`. (`09,12`)

**Páginas de servicio (pillar pages):**
- `/servicios/desarrollo-a-medida`, `/servicios/automatizaciones`, `/servicios/integraciones`, `/servicios/app-movil`, `/producto` (base operativo). Anclan topic clusters y profundidad temática. Solo copy. (`09,18`)

**Páginas de caso / portfolio** (una por producto): contexto→problema→solución→stack→estado actual + screenshot + "ver en vivo" + tiempo en producción. Habilitan schema `SoftwareApplication`/`CreativeWork`. `[OWNER]` para descripción del problema y permiso de mención. (`14,09`)

**Páginas de industria** (SEO programático **anclado en prueba real**, NO templates vacíos — Google may-2026 penaliza thin content sitewide). 15-25 páginas de calidad año 1, no 500. (`10,06,20`)
- **P0 (hueco competitivo claro + prueba propia):** `/software-para-extintores` (Varigas; casi sin competencia AR, demanda regulatoria), `/software-para-natatorios` (NMS; sin competidor AR fuerte).
- **P0 (demanda alta, competencia baja en el nicho chico) `[OWNER]` valida fit:** salud/consultorios chicos (regulación 2026 fuerza adopción; dolor = facturación a obras sociales), logística/distribución PyME, manufactura PyME industrial.
- **P1 (credencial):** `/software-para-obras` (Infrannova; CAMARCO impulsa digitalización), estudios contables/legales (gestión del estudio, no software contable).
- **Gimnasios/turnos** queda como **una** página de industria más, no el eje.
- Guardrail: no publicar página de industria sin caso real o research sectorial propio verificable.

**Comparativas (P2):** `/vs-[competidor]` solo con datos públicos verificados. (`09`)

**Blog (P2):** 3-5 artículos definitorios ("¿Cuánto cuesta automatizar X en Argentina?", "Software a medida vs ERP genérico", "Automatizar cobros/WhatsApp"). TOFU + citations en LLMs. Schema `BlogPosting`. (`09,10,11`)

---

## Fase 2 — Funnel de venta consultiva

- **Form multi-paso bifurcado por tipo de necesidad** (producto listo / a medida / automatización) con calificación condicional (industria, tamaño, sistema actual, urgencia, presupuesto). Enrutamiento: producto→pricing/autoservicio; a medida→discovery call. Extiende `/api/leads`. `[OWNER]` define rangos de presupuesto. (`17,07,13`)
- **Agendar diagnóstico** (Cal.com/Calendly embebido) como alternativa al WhatsApp en frío; captura fuera de horario. (`13,17`)
- **Pricing en 3 tiers** (Base publicado / Crecimiento con rango / A medida "agendar") + setup fee orientativo + mecanismo de dolarización explícito ("facturado en pesos al BNA del día") + ancla de ROI. `[OWNER]` rangos reales. (`16`)
- **Modelo automatización = setup + retainer** (AI agents as a service), presentado aparte del SaaS. `[OWNER]`. (`02,03,05`)

---

## Fase 3 — Off-site, GEO y confianza (mayormente `[OWNER]`)

- **`sameAs` + entidad:** perfiles reales en LinkedIn, GitHub, Crunchbase, **Wikidata** → entity linking (recuperación 2.8× en LLMs). (`11`)
- **Directorios que citan los LLMs:** perfil en **Clutch** y **GoodFirms** con ≥3 reseñas reales; listings AR (developargentina, comparasoftware). Las marcas se citan 6.5× más vía terceros que desde su dominio. (`11,08`)
- **Bing Webmaster Tools** (ChatGPT indexa vía Bing; Claude vía Brave). (`11`)
- **Equipo/fundador visible** (foto, nombre, LinkedIn) `[OWNER]`. (`15`)
- **Primeras reseñas y un caso con métricas reales** (pedir al cierre de cada proyecto, consentimiento explícito). Habilita `AggregateRating` **solo** con reviews verificables (sin esto = riesgo de manual action de Google). `[OWNER]`. (`12,15,11`)
- **Un dato original citable** (ej. horas reales ahorradas en un caso) — imán de citas en LLMs. `[OWNER]`. (`11,05`)
- **Demo grabada** (Loom de 2-3 min mostrando flujo real). `[OWNER]`. (`13`)

---

## Orden de ejecución

1. **Fase 0** ya (días): reposiciona el mensaje sin tocar arquitectura. Mayor impacto/esfuerzo.
2. **Fase 1** en paralelo apenas el copy estabilice: páginas de servicio + casos + industrias P0. Es lo que mueve tráfico orgánico de fondo.
3. **Fase 2** funnel consultivo a medida que se definan rangos de precio.
4. **Fase 3** off-site/GEO a medida que el owner libere assets.

Cada cambio: cero fabricación, edits quirúrgicos, verificación visual + `lint`/`typecheck`/`build` verdes antes de commitear (ver `docs/LOOP_BACKLOG.md`).

## Datos confirmados (investigación 2026-06-19, `docs/research/21-25`)

- **Entidad legal:** Reinnova Group S.R.L. (opera como MaatWork). **Tel/WhatsApp público:** +54 9 299 456-9840. **Instagram:** @maat.work.
- **Founder:** Giolivo García. ⚠️ El único LinkedIn hallable es su perfil **financiero** (Grupo Abax/Decrypto.la), que NO menciona MaatWork; no se halló perfil de software "Giolivo Santarelli". → **NO publicar `sameAs` de LinkedIn hasta confirmar la URL exacta.**
- **Diferenciador fiscal real:** ARCA/AFIP confirmado ("ArcaMaat" en CRM; Infrannova bimonetario ARS/USD + redeterminaciones). Comunicable sin fabricar.
- **Casos con material público:** **Varigas** (landing pública, features visibles) e **Infrannova** (infrannova.com.ar, módulos+stack documentados, usa Anthropic SDK para IA documental, CloudFlare R2, Curva S). **NMS** y **CRM** auth-walled (módulos observados al loguear, sin landing pública) → caso más flaco hasta que el owner aporte material/permiso.

## Pricing (modelo confirmado por owner)

**Desde USD 100/mes + setup fee inicial. Todo a cotizar según lo que necesita cada empresa.** No hay tiers fijos — es un estudio a medida. La landing comunica:

- **"Desde USD 100/mes"** como piso de entrada (facturado en pesos al cambio del día).
- **"Setup inicial"** según alcance.
- **"Cada solución se cotiza según tu necesidad"** → CTA a diagnóstico/cotización (WhatsApp / agendar), no una tabla de planes.
- Ancla de valor/ROI honesta + framing de dolarización (pesos al cambio). Sin urgencia falsa.

> Descartada la tabla de 3 tiers fijos de `docs/research/24` (no aplica al modelo a-medida). La investigación de benchmarks sigue siendo útil como referencia interna para cotizar.

## Defaults propuestos para el resto (aprobar/ajustar — `docs/research/25`)

- **Términos:** código 100% del cliente a la entrega · sin permanencia (SaaS) · milestones 50/50 (≤USD 5k) o 40/30/30 · garantía 30 días de bugs.
- **Carriles de servicio:** Sistema operativo base · Desarrollo a medida · Automatizaciones e IA · Integraciones y fiscal (máx 4).
- **Directorios (orden):** Google Business Profile → Clutch → LinkedIn Company Page → GoodFirms → ComparaSoftware AR. Reseñas: pedido por mail post-proyecto, sin editar, con nombre real.
- **Founder visible:** foto + nombre + cargo real + 2-3 líneas + LinkedIn verificable + "hecho en Argentina". (Requiere OK del owner para ser cara pública + URL de LinkedIn.)
- **Tooling:** Cal.com (gratis) para agendar diagnóstico · Loom (gratis) para demo grabada.
- **Risk-reversal:** "Te mostramos el sistema funcionando antes de que firmes nada" + garantía 30 días.

## Falta confirmar del owner

1. **URL exacta del LinkedIn** del founder (y de la página de empresa si existe) para `sameAs` + sección founder.
2. **Pricing:** ¿límites 100/300 clientes ok? ¿cobra setup fee? ¿tarifa hora real (si no es ~USD 50/h se reescalan los proyectos)? ¿plan anual con descuento? ¿automatización add-on o línea separada?
3. **Casos:** permiso para nombrar clientes (Oro Azul, etc.) + descripción del problema + fecha de go-live por producto.
4. **Industrias-foco** a priorizar (extintores + natatorios son P0 por hueco; validar salud/logística/manufactura según pipeline real).
5. **Acepta** formalmente: garantía 30 días, demo en vivo en toda llamada, código del cliente.
6. **Crear** (cuando quiera): Google Business Profile, LinkedIn Company Page, Clutch — habilitan `sameAs` + reviews + GEO.

## Índice de investigación (`docs/research/`)

`01` posicionamiento estudio · `02` servicios automatización/IA 2026 · `03` packaging híbrido · `04` competencia dev agencies AR · `05` competencia automation agencies · `06` mercados del portfolio · `07` ICP/buyer · `08` SEO keywords · `09` arquitectura de contenido · `10` SEO programático · `11` GEO/LLM · `12` SEO técnico/schema · `13` CRO ticket alto *(en proceso)* · `14` portfolio/casos · `15` confianza/credibilidad · `16` pricing/packaging · `17` calificación de leads · `18` menú de servicios · `19` inspiration brief · `20` demanda por industria AR.
