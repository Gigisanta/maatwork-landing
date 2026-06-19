# 17 — Lead Qualification & Sales Funnel para Agencia de Software a Medida

Fecha: 2026-06-19
Contexto: MaatWork — estudio argentino de software y automatización. Canal actual: WhatsApp pre-cargado + form mínimo (nombre + WhatsApp → Neon).

---

## 1. Qué datos capturar (y por qué)

### Marco de referencia: BANT simplificado

Para deals sub-$25 K con 1-2 decisores y ciclo < 30 días (perfil MaatWork), BANT es el framework adecuado según [Salesmotion](https://salesmotion.io/blog/lead-qualification-framework-guide) y [SkipCall](https://skipcall.io/en/blog/bant-vs-meddic). MEDDIC se justifica solo cuando ACV supera los USD 25 K y hay 3+ stakeholders.

Dimensiones BANT aplicadas a MaatWork:

| Dimensión | Pregunta form | Propósito |
|-----------|--------------|-----------|
| Need (Necesidad) | ¿Qué necesitás? (producto listo / app a medida / automatización) | Enruta al flujo correcto |
| Authority | Rol (dueño / gerente / CTO / otro) | Identifica si hablas con el decisor |
| Budget | Inversión estimada (3 rangos) | Filtra calidad, prepara propuesta |
| Timeline | Urgencia (quiero empezar ya / en 30-90 días / explorando) | Prioriza follow-up |

Datos adicionales de contexto:

- **Industria / rubro**: permite personalizar pitch y caso de éxito relevante
- **Sistema actual**: Excel / sistema propio / ninguno → define alcance técnico
- **Tamaño de negocio**: empleados o facturación aproximada (solo si aplica)

### Regla de oro

Un lead calificado al entrar a WhatsApp elimina el tiempo de diagnóstico y permite que la primera conversación sea de cierre. Responder en < 5 minutos multiplica x21 la probabilidad de conversión ([Monday.com BANT](https://monday.com/blog/crm-and-sales/bant-qualified-leads/)).

---

## 2. Diseño del form/flujo (progressive profiling, multi-paso, condicional)

### Principios

- **Progressive profiling**: primero lo mínimo (nombre + WhatsApp), datos adicionales solo si el lead avanza. Según [SmartBug Media](https://www.smartbugmedia.com/blog/how-to-use-progressive-profiling-to-qualify-leads), reduce fricción y mejora calidad simultáneamente.
- **Multi-step forms**: elevan la tasa de completado vs. un form largo de una sola pantalla ([Digioh](https://www.digioh.com/blog/multi-step-forms)).
- **Conditional logic**: mostrar solo preguntas relevantes según tipo de necesidad ([Reform](https://www.reform.app/blog/how-to-qualify-and-route-leads-with-your-form)).

### Flujo propuesto (3 pasos)

**Paso 1 — Contacto** (siempre):
- Nombre
- WhatsApp
- Tipo de necesidad: `[Producto listo] [App a medida] [Automatización]`

**Paso 2 — Contexto** (condicional por tipo):

- *Producto listo*: rubro, cantidad de usuarios estimados → redirigir a autoservicio/pricing
- *App a medida*: industria, sistema actual, rol decisor, presupuesto (3 rangos), urgencia
- *Automatización*: herramientas actuales, proceso a automatizar (texto libre breve), urgencia

**Paso 3 — Confirmación**:
- Mensaje personalizado según tipo + próximo paso explícito (link autoservicio ó "te contactamos en X horas")

Fuente de arquitectura: [involve.me](https://www.involve.me/blog/best-form-builders-with-conditional-logic), [ROASForm](https://www.roasform.com/product/conditional-logic).

---

## 3. Enrutamiento de leads

| Tipo lead | Ruta | Acción automática |
|-----------|------|-------------------|
| Producto listo | Autoservicio | Link a pricing/sign-up + email con instrucciones |
| App a medida | Discovery call | WhatsApp con contexto pre-cargado → agendar llamada |
| Automatización | Discovery call | WhatsApp con contexto + ejemplo de caso similar |
| Budget < mínimo viable | Nurturing | Email con contenido educativo, re-calificar en 30 días |

---

## 4. Contexto que llega al WhatsApp (mensaje pre-cargado enriquecido)

Modelo actual: mensaje genérico. Modelo propuesto: mensaje generado dinámicamente con los datos del form.

Ejemplo de template para "app a medida":

```
Hola MaatWork, me contacto desde el sitio.
Necesito: [App a medida]
Rubro: [Retail / Logística / etc.]
Sistema actual: [Excel]
Rol: [Dueño]
Inversión estimada: [USD 5.000–15.000]
Urgencia: [Quiero empezar en los próximos 30 días]
```

Esto convierte la apertura en una conversación de propuesta, no de diagnóstico. Referencia: [SleekFlow](https://sleekflow.io/en-us/blog/whatsapp-lead-generation), [Rasayel](https://learn.rasayel.io/en/blog/whatsapp-lead-qualification/).

---

## 5. Funnel completo: Lead → Discovery → Propuesta → Cierre

```
[Landing form] 
    ↓ (lead calificado con contexto)
[WhatsApp con datos] ── Producto listo → [Autoservicio / pricing]
    ↓ (a medida / automatización)
[Discovery call 30 min]
    ↓
[Propuesta escrita en 48-72h]
    ↓
[Negociación / objeciones]
    ↓
[Contrato + kickoff]
```

### Discovery call (30 min) — agenda tipo

1. Contexto del negocio (5 min): validar lo que llegó del form
2. Problema central y consecuencias de no resolverlo (10 min)
3. Solución ideal desde su perspectiva (5 min)
4. Presupuesto, plazos y decisores (5 min)
5. Próximo paso: propuesta o desestimación honesta (5 min)

Fuentes: [HubSpot](https://blog.hubspot.com/sales/discovery-call-questions), [Avoma](https://www.avoma.com/blog/discovery-call).

### Benchmarks de conversión B2B (referencia)

- BANT bien implementado: +59% conversión vs. sin framework ([Salesmotion](https://salesmotion.io/blog/lead-qualification-framework-guide))
- Respuesta en < 5 min: x21 probabilidad de conversión vs. 30 min ([Monday.com](https://monday.com/blog/crm-and-sales/bant-qualified-leads/))
- Sales + marketing alineados: +19% crecimiento de ingresos ([Martal](https://martal.ca/b2b-sales-funnel-lb/))

---

## 6. Qué NO hacer

- Form de 10+ campos en una pantalla → abandono masivo
- WhatsApp genérico sin contexto → el equipo arranca desde cero
- Routing manual sin criterio explícito → leads se enfrían
- Pedir presupuesto como primer campo → percepción agresiva

---

## Fuentes

- [SmartBug Media — Progressive Profiling](https://www.smartbugmedia.com/blog/how-to-use-progressive-profiling-to-qualify-leads)
- [Digioh — Multi-Step Forms](https://www.digioh.com/blog/multi-step-forms)
- [Reform — Qualify and Route Leads with Forms](https://www.reform.app/blog/how-to-qualify-and-route-leads-with-your-form)
- [Salesmotion — Lead Qualification Framework](https://salesmotion.io/blog/lead-qualification-framework-guide)
- [SkipCall — BANT vs MEDDIC](https://skipcall.io/en/blog/bant-vs-meddic)
- [Monday.com — BANT Qualified Leads](https://monday.com/blog/crm-and-sales/bant-qualified-leads/)
- [Monday.com — Lead Generation Forms](https://monday.com/blog/crm-and-sales/lead-generation-forms/)
- [SleekFlow — WhatsApp Lead Generation](https://sleekflow.io/en-us/blog/whatsapp-lead-generation)
- [Rasayel — WhatsApp Lead Qualification](https://learn.rasayel.io/en/blog/whatsapp-lead-qualification/)
- [HubSpot — Discovery Call Questions](https://blog.hubspot.com/sales/discovery-call-questions)
- [Avoma — Discovery Call Playbook](https://www.avoma.com/blog/discovery-call)
- [Martal — B2B Sales Funnel 2025](https://martal.ca/b2b-sales-funnel-lb/)
- [involve.me — Form Builders Conditional Logic](https://www.involve.me/blog/best-form-builders-with-conditional-logic)
- [ROASForm — Conditional Logic](https://www.roasform.com/product/conditional-logic)
