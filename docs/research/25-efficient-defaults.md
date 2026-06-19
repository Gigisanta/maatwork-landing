# Defaults eficientes — MaatWork (ítems sin resolver)

**Fecha:** 2026-06-19  
**Autor:** research agent  
**Política:** cero fabricación — todo lo marcado como "confirmar" requiere decisión del owner.

---

## 1. Términos comerciales públicos para servicios a medida

### Default recomendado

| Término | Default propuesto | Estándar del mercado AR |
|---|---|---|
| Propiedad del código | **Cliente al 100%** desde la entrega final | Mayoría de estudios AR transfieren al pagar. Lo contrario ahuyenta clientes. |
| Permanencia / contrato | **Sin permanencia mínima** para el plan SaaS. Proyectos a medida: contrato por proyecto (no mensual) | SaaS B2B global: sin lock-in o 12 meses con descuento. A medida: por proyecto es estándar. |
| Pago por milestones | **50% inicio / 50% entrega final** para proyectos ≤ USD 5 K. Para proyectos mayores: 40% inicio / 30% hito intermedio / 30% entrega | Patrón dominante en freelancers y estudios AR. Protege al proveedor y al cliente. |
| Garantía / SLA post-entrega | **30 días de garantía de bugs** post-entrega (correcciones sin costo de defectos en funcionalidad entregada). Soporte posterior: paquete cotizable por separado. | Agencias serias ofrecen 30–90 días. 30 días es el mínimo creíble. |

**Confirmar:** ¿El owner acepta la transferencia total del código al cliente? ¿Qué cambio se usa para el contrato en USD (oficial BNA, MEP, blue)? Esto va en el contrato, no en la landing.

---

## 2. Naming de los carriles de servicio

### Default recomendado (4 carriles)

```
1. Sistema operativo base       → reemplaza "Producto base" (más concreto, menos SaaS-genérico)
2. Desarrollo a medida          → directo, sin jerga
3. Automatizaciones e IA        → "IA" suma SEO/GEO y expectativa del mercado 2026
4. Integraciones y fiscal       → incluye ARCA/AFIP como diferenciador técnico real
```

**Por qué:** basado en patrones de Spiral Scout, Leanware, BIT Studios (ver `18-service-offering-menu.md`): máximo 4 categorías padre, naming por resultado/dominio, no por stack. "Automatizaciones e IA" es el naming que el mercado AR busca activamente en 2026 (ver `08-seo-keywords.md`).

**Confirmar:** ¿El owner quiere mantener "Integraciones y fiscal" como carril visible o colapsarlo dentro de "Desarrollo a medida"? Opción B válida si el menú se siente largo.

---

## 3. Directorios de registro (SEO/GEO/leads en AR)

### Prioridad recomendada

| Prioridad | Directorio | Por qué | Esfuerzo |
|---|---|---|---|
| 1 | **Google Business Profile** | Aparece en maps + búsqueda local + GEO (LLMs citan GBP). Gratis. | Bajo — 30 min |
| 2 | **Clutch.co** | Referencia global más citada para software studios. Gratis básico. Reviews verificadas por Clutch. | Medio — 1h setup + reseñas |
| 3 | **LinkedIn Company Page** | Canal B2B principal en AR. GEO lo cita. Base para contenido. | Bajo — 1h |
| 4 | **GoodFirms** | Complementa Clutch. Aparece en búsquedas "mejores agencias software AR". Gratis. | Bajo — 45 min |
| 5 | **Comparasoftware.com.ar** | Directorio local AR con tráfico de compradores PyME. | Bajo — 30 min |

**Cómo conseguir las primeras reseñas honestamente:**
- Al cerrar cada proyecto: email personalizado con link directo al perfil (Google o Clutch).
- No presionar. No editar. El cliente envía con su nombre real.
- Clutch hace una llamada de verificación con el cliente (proceso de ellos, no de MaatWork).
- Si el cliente prefiere anonimato: no publicar hasta tener consentimiento explícito.

**Confirmar:** ¿Existe Google Business Profile activo? ¿Hay LinkedIn Company Page creado?

---

## 4. Sección founder / equipo visible

### Default recomendado

**Qué incluir:**
- Foto real (no avatar, no logo). Encuadre profesional pero no estudio — natural suma confianza.
- Nombre completo + cargo ("Founder & Lead Engineer" o equivalente real).
- 2–3 líneas de bio: qué construyó, por qué existe MaatWork, dónde está basado.
- Link a LinkedIn verificable (perfil real con historial).
- "Hecho en Argentina" como dato, no como slogan — zona horaria, idioma, contexto PyME local.

**Qué no incluir:**
- Cargos inflados ("CEO & CTO & Visionary Leader").
- Bio en tercera persona.
- Foto de stock o avatar.
- Credenciales no obtenidas.

**Por qué funciona:** E-E-A-T de Google y confianza B2B: compradores confían en personas antes que en empresas. Agencias con founders visibles acortan el ciclo de ventas (fuente: `15-trust-credibility.md`, Digital Agency Network 2026).

**Confirmar:** ¿El owner quiere aparecer como cara pública? ¿Hay otros miembros del equipo con trabajo verificable a mostrar?

---

## 5. Tooling de conversión (agendar diagnóstico, demo, leads)

### Default recomendado

| Función | Herramienta | Costo | Por qué |
|---|---|---|---|
| Agendado de diagnóstico | **Cal.com** (self-hosted o cloud) | Gratis en cloud básico | Open source, sin branding forzado, integra con Google Calendar, genera link directo. Calendly cobra USD 10–16/mes para remover su branding. |
| Demo grabada | **Loom** (plan gratuito) | Gratis hasta 25 videos | Estándar de facto en B2B. Permite grabar el producto en acción, compartir link, ver cuánto vio el prospecto. |
| Captura de leads | **Form actual (nombre + WhatsApp → Neon)** | Ya existe | Ya implementado. Mejora: agregar tipo de necesidad en el primer paso (ver `17-lead-qualification-sales.md`). |

**Confirmar:** ¿El owner quiere Cal.com en la landing en esta iteración o mantener WhatsApp directo como único canal de entrada? Cal.com agrega un paso pero califica mejor.

---

## 6. Garantía / risk-reversal

### Default recomendado

**Frase más potente y honesta:**

> "Te mostramos el sistema funcionando antes de que firmes nada."

**Implementación concreta:**
1. Para el plan base: demo en vivo del producto real (NMS, CRM o similar) antes del contrato.
2. Para proyectos a medida: propuesta técnica escrita sin costo + primer entregable funcional antes del segundo pago.
3. Publicar explícitamente: "30 días de garantía de bugs post-entrega incluidos en todo proyecto."

**Por qué es la más potente:** elimina la objeción "pago por una promesa" — el comprador ve el software antes de comprometer dinero. Es análoga al free trial de SaaS pero adaptada a servicios. Aumenta conversión 50–60% vs. solo screenshots (Storylane 2026, fuente: `15-trust-credibility.md`).

**Confirmar:** ¿El owner puede ofrecer demos en vivo del producto base en toda llamada de ventas? ¿Se acepta formalmente la política de "30 días de garantía de bugs"?

---

## Fuentes internas utilizadas

- `docs/research/15-trust-credibility.md`
- `docs/research/16-pricing-packaging.md`
- `docs/research/17-lead-qualification-sales.md`
- `docs/research/18-service-offering-menu.md`
- `docs/MARKET_RESEARCH.md`
