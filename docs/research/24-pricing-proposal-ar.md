# MaatWork — Propuesta de Estructura de Pricing
**Fecha:** 2026-06-19 | **Estado:** Borrador para aprobación del owner

---

## Benchmarks verificados (precios públicos, sin fabricación)

| Referente | Producto | Precio público | Fuente |
|---|---|---|---|
| Xubio AR | ERP SaaS PyME | ARS 39.100–231.400/mes + IVA (≈ USD 27–160 al BNA) | [xubio.com/ar/precios-empresas](https://xubio.com/ar/precios-empresas) |
| Colppy | Gestión contable PyME | Precio ARS variable, ≈ USD 15–60/mes | [colppy.com/planes-y-precios-pymes](https://colppy.com/planes-y-precios-pymes) |
| ReservaSimple | Agenda + cobros online | USD 13,99/mes (plan Premium) | [reservasimple.com](https://www.reservasimple.com/software-turnos-citas-reservas-latinoamerica) |
| Turno App AR | Turnos + MP nativo | USD 9,90/mes plan Pro | [turnoapp.com.ar](https://turnoapp.com.ar/blog/app-para-gestionar-turnos-gratis) |
| Senior dev AR (agencia) | Hora facturada | USD 45–60/h (estudio boutique) | [sodi.com.ar](https://www.sodi.com.ar/blog/cuanto-cuesta-software-a-medida-argentina) / [grupovansur.com](https://grupovansur.com/en/el-costo-real-del-software-a-medida-en-argentina-2025-una-guia-transparente/) |
| Duotach (automatización n8n AR) | Setup + retainer SMB | Setup desde USD 500 diagnóstico; implementación USD 700/mes+; proyectos USD 1.500–20.000 | [duotach.com/en/services/n8n-automation](https://duotach.com/en/services/n8n-automation) |
| Agencias automatización LATAM | RPA/flujos n8n | Retainer USD 800–3.000/mes | [duotach.com/blog/top-5-consultorias-automatizacion-ia](https://duotach.com/blog/top-5-consultorias-automatizacion-ia) |

---

## Propuesta de estructura (RECOMENDACIÓN — no datos actuales de MaatWork)

### 1. Tiers del producto base
**Eje de escala:** volumen de operaciones (clientes activos/mes). Un solo eje evita confusión.

| Tier | Precio | Incluye | Límite |
|---|---|---|---|
| **Base** | **USD 100/mes** | Agenda online, cobros integrados (MP/transferencia), CRM básico (hasta 100 clientes activos), soporte por mail | Hasta 100 clientes activos |
| **Crecimiento** *(recomendado)* | **USD 190/mes** | Todo Base + recordatorios automáticos WhatsApp, reportes de caja, hasta 3 usuarios, onboarding asistido | Hasta 300 clientes activos |
| **Estudio** | **USD 320/mes** | Todo Crecimiento + usuarios ilimitados, integraciones (Xubio/Colppy), SLA respuesta 4hs, reunión mensual de revisión | Sin límite operacional |

> Ancla de ROI: "Si recuperás un cliente perdido por mes gracias a los recordatorios, el plan ya se paga."

---

### 2. Setup / Implementación
| Complejidad | Rango recomendado |
|---|---|
| Configuración estándar (carga de datos, MP, WhatsApp básico) | Desde USD 250 |
| Configuración con migración de datos + capacitación (hasta 2hs) | USD 400–600 |
| Setup complejo (multi-sede, integraciones con sistema existente) | USD 800–1.500 |

> Referencia interna: a USD 50/h senior local, 5–10hs de implementación = USD 250–500 de costo.

---

### 3. Automatizaciones (standalone o add-on)
| Concepto | Rango recomendado |
|---|---|
| Setup fee (diagnóstico + diseño de flujos + primer deploy) | USD 400–1.200 |
| Retainer mensual (mantenimiento + 1–2 flujos nuevos/mes) | USD 150–400/mes |
| Pack puntual (1 automatización entregada, sin retainer) | USD 300–800 |

> Benchmark directo: Duotach AR cobra USD 500 solo de diagnóstico; retainers de mercado van USD 800–3.000/mes para SMB. MaatWork puede posicionarse 30–40% por debajo de esos valores para el segmento PyME chica.

---

### 4. Proyectos a medida
| Complejidad | Horas estimadas | Rango USD (a USD 50/h promedio ponderado) |
|---|---|---|
| **Simple** (módulo nuevo, integración puntual, MVP funcional) | 20–60hs | USD 1.000–3.000 |
| **Medio** (sistema interno, app web con auth + CRUD + reportes) | 80–200hs | USD 4.000–10.000 |
| **Complejo** (plataforma multiusuario, lógica de negocio avanzada, integraciones múltiples) | 250–500hs+ | USD 12.500–25.000+ |

> Mínimo viable de proyecto: **USD 1.000** (para filtrar consultas no serias sin cerrar la puerta).
> Referencia: mercado AR publica proyectos simples desde USD 3.000 ([sodi.com.ar](https://www.sodi.com.ar/blog/cuanto-cuesta-software-a-medida-argentina)); MaatWork puede ser competitivo en el tramo bajo siendo más ágil.

---

### 5. Framing de dolarización
- **Frase sugerida (pública):** "Precios en USD como referencia. Se factura en pesos argentinos al tipo de cambio BNA del día de emisión."
- Esto es honesto, legal y protege contra la inflación sin ocultar que es en dólares.
- Para clientes que pregunten: "trabajamos en USD porque nuestros costos de infraestructura y talento tienen componente dólar, igual que cualquier SaaS internacional que usás hoy."

---

### 6. Qué mostrar público vs. "agendar"

| Mostrar público | Derivar a "agendá una llamada" |
|---|---|
| Tiers Base / Crecimiento / Estudio con precio | Precio exacto de Estudio (puede personalizarse) |
| Setup fee "desde USD 250" | Detalle de setup complejo |
| Automatizaciones "desde USD 400 de setup" | Retainer exacto (depende de cantidad de flujos) |
| Proyectos a medida "desde USD 1.000" | Cotización de proyecto Medio/Complejo |

> Regla: publicar el piso ancla la percepción de valor y filtra leads; ocultar el techo evita encajonarse en proyectos grandes.

---

## Qué necesita confirmar el owner

1. **Límites del plan Base y Crecimiento** — ¿100/300 clientes activos es correcto para el mercado objetivo?
2. **¿Cobra setup fee a nuevos clientes del producto base?** (recomendado: sí, waivearlo solo en plan anual).
3. **Tarifa hora interna real** para proyectos a medida — los rangos asumen USD 50/h; si es diferente, ajustar todos los rangos de proyectos.
4. **¿Ofrece plan anual con descuento?** (recomendado: 2 meses gratis = ~17% off; mejora cashflow y retención).
5. **¿Automatizaciones como add-on al producto base o como línea separada?** Hoy la tabla las separa; pueden cruzarse.

---

## Fuentes
- [xubio.com/ar/precios-empresas](https://xubio.com/ar/precios-empresas)
- [colppy.com/planes-y-precios-pymes](https://colppy.com/planes-y-precios-pymes)
- [reservasimple.com](https://www.reservasimple.com/software-turnos-citas-reservas-latinoamerica)
- [turnoapp.com.ar](https://turnoapp.com.ar/blog/app-para-gestionar-turnos-gratis)
- [sodi.com.ar — costo software a medida AR 2026](https://www.sodi.com.ar/blog/cuanto-cuesta-software-a-medida-argentina)
- [grupovansur.com — costo real software a medida AR 2025](https://grupovansur.com/en/el-costo-real-del-software-a-medida-en-argentina-2025-una-guia-transparente/)
- [duotach.com — automatización n8n AR precios](https://duotach.com/en/services/n8n-automation)
- [duotach.com — top 5 consultoras IA AR 2026](https://duotach.com/blog/top-5-consultorias-automatizacion-ia)
