# Menú de servicios MaatWork — Definición de oferta comercial

**Fecha:** 2026-06-19  
**Alcance:** Capacidades evidenciadas en portfolio real + investigación de cómo los mejores software studios estructuran su menú. Cero fabricación.

---

## 1. Capacidades reales evidenciadas por el portfolio

### Portfolio verificado en producción (fuente: `src/data/products.ts`)

| Sistema | Dominio | Stack verificado | Módulos |
|---|---|---|---|
| **NMS** (Natatory Management System) | Gestión vertical (natatorios) | Next.js 15, Neon + Prisma, NextAuth, Playwright | Asistencias, Pagos, Calendario, ARCA (facturación AFIP) |
| **MaatWorkCRM** | CRM multi-tenant comercial | CRM v3, RBAC, TanStack Query, API core | Pipeline, Contactos, Tareas, Facturas |
| **Infrannova** | Gestión de obras e infraestructura | Next.js 16, Drizzle, Server Actions, AI docs | Obras, Curva S, Partes, Certificados |
| **Varigas** | Operación de extintores (seguridad) | Dashboard, Órdenes, Stock | Clientes, Extintores, Órdenes, Vencimientos |

### Capacidades transversales identificadas (fuente: código fuente `src/components/`)

- **Producto base operativo SaaS** con plan desde USD 100/mes (Pricing.tsx)
- **Automatización WhatsApp** 24/7 como módulo (Features.tsx: módulo "Automatización")
- **Cobros automáticos y links de pago** (módulo cotizable)
- **App móvil nativa iOS/Android** (módulo cotizable)
- **Facturación ARCA/AFIP** (evidencia en NMS)
- **Reportes y dashboards** en tiempo real (módulo "Tablero")
- **Integraciones y multi-sucursal** (listados en QUOTED_MODULES)
- **Implementación guiada en 5–10 días** con migración de datos (HowItWorks.tsx)

---

## 2. Cómo estructuran su menú los mejores software studios

### Patrones extraídos de referentes (investigación)

**Spiral Scout** (spiralscout.com): 3 grupos padre → "AI & Automation", "Custom Software & Platforms", "Strategy & Execution". Cada uno con 4–7 sub-servicios. Credibilidad por tecnología específica (Temporal SDK, Clutch rankings) no por volumen de claims.
- Fuente: [Spiral Scout — Custom Software Development](https://spiralscout.com/services/software-development/custom-software-development)

**Leanware** (leanware.co): entrada por diagnóstico (AI ROI Assessment) → solución (Managed AI Agents) → equipo (Dedicated Engineering Teams). Jerarquía que muestra progresión de expertise, no lista de capabilities.
- Fuente: [Leanware — Boutique Software Development Companies](https://leanware.co/insights/boutique-software-development-companies)

**BIT Studios** (bitstudios.com): nesting de especificidad (Custom Software Development ⊃ SaaS, Enterprise, CRM). Delivery models separados del servicio para dar flexibilidad sin parecer genérico. Verticalización por industria (healthcare, retail, fintech).
- Fuente: [BIT Studios — Software Development Services](https://www.bitstudios.com/service/software-development-services/)

**Principios comunes extraídos:**
1. **3–4 categorías padre máximo.** Más fragmenta y confunde.
2. **Naming por resultado/negocio**, no por tecnología. "Control operativo" vende mejor que "Next.js + Prisma".
3. **Entrada diferenciada por perfil de cliente**: quien quiere algo ya construido vs. quien necesita algo a medida.
4. **Credenciales de construcción real** (proyectos en producción, casos con resultado medible) como ancla anti-genérico.
5. **El producto propio como prueba de capacidad**, no como disclaimer.
- Fuente: [100signals — Best positioning agencies for software dev companies](https://100signals.com/best-positioning-agencies-for-software-development-companies/)
- Fuente: [DevSquad — Software development agencies and their core specialties](https://devsquad.com/blog/software-development-agencies)

### Patrón del mercado argentino (fuente: research 04-competitive-dev-agencies.md)
El océano competitivo local usa lenguaje indistinguible: "a medida", "soluciones tecnológicas de alto impacto". El diferenciador escaso y más convincente son métricas de resultado + sistemas propios en producción. MaatWork ya tiene ambos.

---

## 3. Menú de servicios propuesto para MaatWork

### Marco conceptual: dos modos de entrar

```
¿Querés algo que ya funciona?     →  Producto base operativo (SaaS)
¿Necesitás algo específico tuyo?  →  Desarrollo a medida
```

Este bifurcador evita el "hacemos de todo" porque cada visitante entra por un carril. Los módulos y automatizaciones son el puente entre ambos.

---

### Las 4 categorías del menú

#### S1. Producto operativo base
**Qué es:** Sistema SaaS en producción con agenda, cobros, clientes, tablero e inventario. Implementación guiada en 5–10 días. Plan base desde USD 100/mes.

**A quién le sirve:** Negocios con turnos, cobros recurrentes y clientes repetidos (gimnasios, estudios, academias, salones, barberías, servicios). Propietarios que manejan Excel + WhatsApp y quieren ordenar la operación sin construir software propio.

**Problema que resuelve:** Agenda fragmentada, cobros sin seguimiento, saturación de WhatsApp, sin visibilidad del negocio.

**Prueba en el portfolio:** NMS (natatorios), MaatWorkCRM, Varigas (extintores). Todos en producción con datos reales.

**Presentación landing:** Card principal con precio visible, lista de qué incluye, CTA "Ver demo operativa". Módulos avanzados en card secundaria (cotizar).

---

#### S2. Desarrollo a medida
**Qué es:** Construcción de sistemas completos desde cero para operaciones específicas del cliente. Aplica el mismo stack probado (Next.js, Prisma/Drizzle, Neon, NextAuth, RBAC, Server Actions) pero adaptado al dominio.

**A quién le sirve:** Empresas con operación compleja que ningún SaaS genérico resuelve (constructoras, industrias con gestión vertical, empresas con flujos propietarios). ICP: dueño/director técnico que ya perdió tiempo con soluciones genéricas.

**Problema que resuelve:** Procesos críticos dependientes de hojas de cálculo, sistemas legacy sin integración, flujos que no encajan en ningún producto estándar.

**Prueba en el portfolio:** Infrannova (obras, curva S, redeterminaciones, certificados) — dominio que ningún SaaS estándar cubre. Varigas (extintores con vencimientos y órdenes de trabajo).

**Presentación landing:** En "Ecosistema operativo" — 4 cards mostrando sistemas en producción con stack, módulos y URL. El copy: "No vendemos una promesa. Estos sistemas ya operan."

---

#### S3. Automatizaciones e integraciones
**Qué es:** Automatizaciones sobre sistemas existentes: WhatsApp Business API (confirmaciones, respuestas, campañas), cobros automáticos con links de pago (Mercado Pago), integraciones entre sistemas (CRM ↔ facturación ↔ agenda), sincronización multi-sucursal.

**A quién le sirve:** Clientes del producto base que ya tienen la operación ordenada y quieren ahorrar horas de operación manual. También empresas con sistemas propios que necesitan conectar plataformas.

**Problema que resuelve:** Tiempo perdido en tareas repetitivas (confirmaciones manuales, copia de datos entre sistemas, seguimiento de deudores). WhatsApp como cuello de botella operativo.

**Prueba en el portfolio:** Módulo "Automatización" en NMS (WhatsApp 24/7). MaatWorkCRM con integración de facturación ARCA/AFIP. QUOTED_MODULES listados en Pricing.tsx evidencian el alcance real.

**Presentación landing:** Subcategoría dentro del pricing ("Módulos avanzados a cotizar") + mención en Features. Podría tener sección propia si el tráfico de intención lo justifica.

---

#### S4. Facturación y cumplimiento fiscal (ARCA/AFIP)
**Qué es:** Integración de facturación electrónica ARCA/AFIP dentro de sistemas propios. Emisión de facturas A/B/C desde el sistema operativo del cliente, sin depender de software contable separado.

**A quién le sirve:** PyMEs y profesionales que emiten facturas y quieren el flujo integrado en su sistema de gestión, no en una herramienta aparte.

**Problema que resuelve:** Facturación manual, sistemas de gestión desconectados del módulo fiscal, errores por doble carga.

**Prueba en el portfolio:** NMS tiene integración ARCA verificada (modules: ["Asistencias", "Pagos", "Calendario", "ARCA"]). MaatWorkCRM tiene módulo "Facturas".

**Presentación landing:** No requiere sección propia en esta etapa. Se menciona como diferenciador técnico dentro de S2 (desarrollo a medida) y como módulo cotizable en S3.

> **Nota:** Esta categoría puede colapsarse en S2/S3 para no fragmentar el menú. Se separa aquí como capacidad documentada.

---

## 4. Cómo evitar "hacemos de todo" con amplitud real

### La regla de anclaje único
El producto base (S1) es el ancla de posicionamiento. Todo lo demás se presenta como "lo que viene después de ordenar la operación base". Esta secuencia comunica foco sin ocultar capacidad.

Flujo narrativo en landing:
```
Problema operativo → Producto base (solución inmediata) → Módulos avanzados (escalar) → Desarrollo a medida (para lo específico tuyo)
```

### Los dos errores a evitar

1. **Lista plana de servicios** ("hacemos web, móvil, CRM, ERP, automatizaciones, IA, integraciones..."): sin jerarquía ni audiencia clara, todo pierde peso.
2. **Hiperfoco en el stack tecnológico**: "Next.js + Prisma + Neon" es evidencia para quien sabe, no el mensaje principal. Va en las cards de portfolio, no en el headline.

### Señal de credibilidad ante la amplitud
La respuesta al escepticismo "¿pueden hacer todo eso?" son los 4 sistemas en producción, verificables en sus URLs reales. Eso hace el trabajo que ningún claim verbal puede hacer.
- Fuente: [Leanware — How boutique studios differentiate](https://leanware.co/insights/boutique-software-development-companies)

---

## 5. Estructura de sección de servicios en landing (card layout)

### Opción A: Dos carriles (recomendado para el estado actual)
```
[ ¿Querés ordenar tu operación?  ]   [ ¿Necesitás software específico? ]
[ → Plan base desde USD 100/mes  ]   [ → Proyecto a medida              ]
[ CTA: Ver demo                  ]   [ CTA: Hablar con el equipo        ]
```
Debajo: módulos y automatizaciones como "Lo que viene después".

**Por qué:** La landing actual está 100% orientada al plan base (S1). Un segundo carril claro para S2 (desarrollo a medida) captura visitantes con necesidades diferentes sin diluir el mensaje principal.

### Opción B: 3–4 cards de servicio con íconos
```
[01 Sistema operativo]  [02 Desarrollo a medida]  [03 Automatizaciones]
```
Cada card: título, para quién, qué incluye, CTA específico.

**Por qué:** Funciona cuando la landing ya tiene suficiente contexto de marca. Más limpia para una segunda versión del sitio.

### Lo que NO hacer
- No listar 8+ servicios en la misma sección sin jerarquía.
- No usar nombres genéricos ("Soluciones tecnológicas", "Desarrollo integral").
- No mezclar la sección de servicios con el portfolio (son funciones distintas: una dice qué vendés, la otra prueba que podés hacerlo).

---

## 6. Datos que requieren confirmación interna

| Dato | Por qué importa | Fuente a consultar |
|---|---|---|
| ¿Cuántos proyectos a medida completados fuera del portfolio público? | Calibrar si S2 es una oferta activa o aspiracional | Gio / equipo |
| ¿Hay clientes actuales con automatizaciones WhatsApp en producción? | Prueba real para S3 | Gio / equipo |
| ¿La integración ARCA/AFIP en NMS está en uso con clientes reales? | Proof point para S4 | Gio / equipo |
| ¿Cuál es el ticket promedio de un proyecto a medida? | Calibrar mensaje de precio en S2 | Gio / equipo |
| ¿Hay casos de Mercado Pago / cobros automáticos en producción? | Verificar alcance real de S3 | Gio / equipo |

---

## 7. Fuentes

- [Spiral Scout — Custom Software Development Services](https://spiralscout.com/services/software-development/custom-software-development)
- [Leanware — Boutique Software Development Companies 2025](https://leanware.co/insights/boutique-software-development-companies)
- [BIT Studios — Software Development Services](https://www.bitstudios.com/service/software-development-services/)
- [BIT Studios — Custom Software Development](https://www.bitstudios.com/service/custom-software-development-services/)
- [100signals — Best Positioning Agencies for Software Dev Companies](https://100signals.com/best-positioning-agencies-for-software-development-companies/)
- [DevSquad — Software Development Agencies and Their Core Specialties](https://devsquad.com/blog/software-development-agencies)
- [Assembly — Complete Guide to Productized Services 2025](https://assembly.com/blog/productized-services)
- Research interno: `docs/research/04-competitive-dev-agencies.md`
- Research interno: `docs/research/03-packaging-strategy.md`
- Fuente primaria: `src/data/products.ts`, `src/components/Features.tsx`, `src/components/Pricing.tsx`, `src/components/HowItWorks.tsx`
