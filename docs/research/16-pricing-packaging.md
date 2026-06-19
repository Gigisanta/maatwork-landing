# Pricing & Packaging — MaatWork

**Fecha:** 2026-06-19
**Alcance:** Investigación para estructura de pricing pública en la landing de MaatWork (estudio AR de software a medida + automatización).

---

## Contexto del problema

MaatWork opera en un modelo híbrido producto+servicios+automatización con precio base USD 100/mes (facturado en pesos al cambio). El dilema central: mostrar precio público reduce fricción pero "a medida" es difícil de tarifar. Contexto AR agrava: inflación residual, presupuestos PyME ajustados, objeción de dolarización.

---

## Hallazgos de mercado

### 1. Transparencia de precio: el debate resuelto

La evidencia 2025-2026 favorece mostrar precio:

- **86% de compradores B2B quieren transparencia total de precio** antes de contactar (TrustRadius 2025).
- **48% dice que la ausencia de precio en el sitio es el principal disuasivo** de compra.
- **45% de compradores B2B globales** cita la transparencia de precios como el cambio #1 que piden a sus vendors (eMarketer/TrustRadius).
- Mostrar precio auto-selecciona: elimina leads sin presupuesto, reduce demos innecesarias, acelera el ciclo de venta.

**Fuente:** [SmartyAds – B2B Pricing Transparency](https://smartyads.com/blog/b2b-tech-buyers-demand-pricing-transparency) | [PricingLink – Transparency 2025](https://pricinglink.com/blog/2025-post/transparency-in-pricing-building-client-trust-2025/)

### 2. Modelo que usan las automation agencies globales

El patrón dominante en 2025-2026 para hybrid product+services es:

**Setup fee + retainer mensual:**
- Setup: USD 2.500–15.000 (según complejidad e integraciones)
- Retainer: USD 500–5.000/mes (soporte, cambios, monitoreo)
- Las que tienen producto SaaS: plan base published + módulos/add-ons a cotizar

**"Starting at" como precio ancla:**
- Agencias serias publican el piso ("desde USD X/mes") sin dar techo.
- El rango orientativo ("nuestros proyectos van de USD X a USD Y") califica al lead sin encajonarse.
- Reservan precio exacto para propuesta post-diagnóstico.

**Fuentes:** [Arsum – AI Automation Agency Pricing 2026](https://arsum.com/blog/posts/ai-automation-agency-pricing/) | [Taskip – 6 Proven Models](https://taskip.net/ai-automation-agency-pricing/) | [DigitalAgencyNetwork – AI Pricing Guide 2026](https://digitalagencynetwork.com/ai-agency-pricing/)

### 3. Estructura de tiers (Good/Better/Best)

La evidencia de SaaS B2B converge en 3–4 tiers:
- **Tier base (precio publicado):** funcionalidad core, precio fijo mensual, onboarding incluido.
- **Tier intermedio (precio publicado o "desde"):** módulos adicionales, más automatizaciones, más usuarios.
- **Enterprise/Custom ("cotizar"):** integraciones específicas, desarrollos a medida, SLA personalizado.

El tier medio debe ser el "default visual" (destacado). El alto ancla valor y hace que el medio parezca razonable.

**Fuente:** [Figma – Pricing Page Best Practices](https://www.figma.com/resource-library/pricing-page-best-practices/) | [NewBreed – B2B Pricing Page](https://www.newbreedrevenue.com/blog/b2b-pricing-page-best-practices)

### 4. Anclaje de valor y ROI (no solo precio)

El error más común: mostrar precio sin framing de valor. Las páginas que convierten anclan el precio contra:
- **Costo del problema:** "¿cuánto te cuesta hoy ese proceso manual?" → "el plan base paga su propio costo si ahorra 1 empleado 4h/semana".
- **Costo alternativo:** "vs. contratar un desarrollador freelance a USD 40/h".
- **Outcome concreto:** no "ahorrás tiempo" sino "reducís costos operativos estimados en USD 1.500/mes".

**Fuente:** [OptimizeSmart – Automation Agency Pricing Rules](https://optimizesmart.com/blog/ai-automation-agency-pricing-rules/) | [Administrate – Proving ROI](https://administrate.dev/blog/proving-roi-to-automation-clients-the-time-saved-report)

### 5. Contexto argentino: objeción de dolarización

- El mercado AR de software a medida **ya cotiza en USD de facto**; la discusión es sobre el tipo de cambio aplicado, no sobre si dolarizar.
- Mercado local para PyMEs: agencias de marketing digital AR cobran USD 150–350/mes por servicios básicos, USD 350–800/mes intermedios. Software a medida: USD 30–55/h para perfiles con experiencia.
- La objeción real no es "¿por qué USD?" sino "¿qué tipo de cambio usan?". Solución: publicar "facturado en pesos al tipo de cambio oficial del día de facturación" o especificar el mecanismo con claridad.
- PyMEs AR con presupuesto limitado responden mejor a ROI-framing concreto que a precio bajo: demostrar que la herramienta paga su costo.

**Fuentes:** [GrupoVansur – Costo Software a Medida AR 2025](https://grupovansur.com/en/el-costo-real-del-software-a-medida-en-argentina-2025-una-guia-transparente/) | [SODI – Costo Software 2026](https://www.sodi.com.ar/blog/cuanto-cuesta-software-a-medida-argentina) | [Finmi – Agencias Marketing AR](https://finmi.com.ar/blog/cuanto-cuesta-agencia-marketing-digital-argentina)

### 6. 61% de empresas usan hybrid pricing (2025)

Subscripción base + consumo/módulos variables es el modelo de mayor crecimiento (21% mediana), combinando predictibilidad con flexibilidad.

**Fuente:** [Zylos – SaaS Pricing Strategy 2026](https://zylos.ai/research/2026-02-14-saas-pricing-strategy/)

---

## Estructura de pricing recomendada para MaatWork

### Arquitectura propuesta

```
[PLAN BASE]              [CRECIMIENTO]           [A MEDIDA]
Desde USD 100/mes        Desde USD 250/mes        Cotizar
Publicado                Publicado o rango        CTA "agendar llamada"
────────────────         ──────────────────       ───────────────────
· Producto core          · +módulos               · Desarrollo custom
· N usuarios             · +automatizaciones      · Integraciones propias
· Onboarding             · Soporte prioritario    · SLA personalizado
· Soporte básico         · Reportes avanzados     · Equipo dedicado
```

**Setup fee:** publicar rango orientativo ("implementación desde USD 500, según complejidad"). Esto califica al lead, no lo espanta.

**Automatizaciones:** publicar "desde USD X por flujo" o "incluidas N automatizaciones, adicionales a cotizar" — no precio fijo por proyecto.

### Framing de precio (crítico)

Encima del pricing mostrar una línea de anclaje de valor:
> "Un empleado administrativo AR cuesta ~USD 600/mes. Nuestro plan base automatiza lo equivalente a 4h/semana de trabajo repetitivo."

### Manejo de la objeción de dolarización

Incluir una nota corta debajo del precio:
> "Los planes se facturan en pesos argentinos al tipo de cambio oficial BNA del día de emisión de la factura."

No pedir disculpas por el USD; explicar el mecanismo con neutralidad.

---

## Qué NO hacer

- Ocultar todo precio con solo "contactanos" → pierde 48% de visitantes (dato TrustRadius).
- Mostrar precio sin framing de valor → convierte menos aunque el precio sea competitivo.
- Dar precio exacto para desarrollos a medida → encajona y obliga a negociar desde ese número.
- Usar "precio en pesos" fijo sin mecanismo de ajuste → crea riesgo cambiario y obliga a actualizar la landing constantemente.

---

## Fuentes

- [Latenode – 17 Top AI Automation Agencies 2025](https://latenode.com/blog/industry-use-cases-solutions/enterprise-automation/17-top-ai-automation-agencies-in-2025-complete-service-comparison-pricing-guide)
- [DigitalAgencyNetwork – AI Agency Pricing Guide 2026](https://digitalagencynetwork.com/ai-agency-pricing/)
- [Taskip – AI Automation Agency Pricing: 6 Proven Models](https://taskip.net/ai-automation-agency-pricing/)
- [Arsum – AI Automation Agency Pricing 2026](https://arsum.com/blog/posts/ai-automation-agency-pricing/)
- [Assembly – Complete Guide to Productized Services 2025](https://assembly.com/blog/productized-services)
- [OptimizeSmart – AI Automation Agency Pricing Rules](https://optimizesmart.com/blog/ai-automation-agency-pricing-rules/)
- [Zylos – SaaS Pricing Strategy 2026](https://zylos.ai/research/2026-02-14-saas-pricing-strategy/)
- [GetMonetizely – SaaS Pricing Benchmark 2025](https://www.getmonetizely.com/articles/saas-pricing-benchmark-study-2025-key-insights-from-100-companies-analyzed)
- [PipelineRoad – SaaS Pricing Page Best Practices 2026](https://pipelineroad.com/agency/blog/saas-pricing-page-best-practices)
- [SmartyAds – B2B Pricing Transparency](https://smartyads.com/blog/b2b-tech-buyers-demand-pricing-transparency)
- [PricingLink – Transparency in Pricing 2025](https://pricinglink.com/blog/2025-post/transparency-in-pricing-building-client-trust-2025/)
- [NewBreed – 5 B2B Pricing Page Best Practices](https://www.newbreedrevenue.com/blog/b2b-pricing-page-best-practices)
- [Figma – Pricing Page Best Practices](https://www.figma.com/resource-library/pricing-page-best-practices/)
- [Administrate – Proving ROI to Automation Clients](https://administrate.dev/blog/proving-roi-to-automation-clients-the-time-saved-report)
- [GrupoVansur – Costo Software a Medida AR 2025](https://grupovansur.com/en/el-costo-real-del-software-a-medida-en-argentina-2025-una-guia-transparente/)
- [SODI – Cuánto cuesta software a medida Argentina 2026](https://www.sodi.com.ar/blog/cuanto-cuesta-software-a-medida-argentina)
- [Finmi – Cuánto cuesta agencia marketing digital Argentina](https://finmi.com.ar/blog/cuanto-cuesta-agencia-marketing-digital-argentina)
