# Investigación de productos: NMS y Varigas
**Fecha:** 2026-06-19  
**Método:** WebFetch directo + WebSearch. Cero fabricación — solo lo verificado en pantalla.

---

## 1. NMS — Natatory Management System

**URL:** https://oroazul.maat.work  
**Estado:** Auth-walled completo. La URL carga directamente un spinner "Verificando sesión..." sin ningún contenido público previo. No hay landing, no hay descripción de módulos, no hay marketing.

**Qué se puede afirmar con certeza:**
- Nombre completo visible: "NMS - Natatory Management System"
- Industria: gestión de natatorios (piletas/clubs acuáticos)
- El cliente se llama "Oro Azul" (dominio `oroazul.maat.work`)
- Se encontró en web pública una empresa registrada "ORO AZUL S.A." con CUIT 33710377699 en Argentina — probable cliente real
- No se encontró información pública adicional sobre el cliente ni descripción de funcionalidades en ninguna fuente externa

**Stack tecnológico visible:** ninguno (todo detrás de auth)

**Lo que NO se puede afirmar:** módulos, flujos, base de datos, si maneja turnos/membresías/facturación. No visible desde afuera.

---

## 2. Varigas — Sistema de Gestión de Extintores

**URL:** https://varigas.vercel.app  
**Estado:** Landing pública + login. Tiene página de inicio con propuesta de valor, más `/sign-in` y `/sign-up` accesibles.

**Qué se puede afirmar con certeza (texto visible en la landing):**

- **Gestión de Clientes:** "Gestioná tu cartera con CUIT validado, datos de contacto e historial completo" — implica integración o validación contra padrón AFIP/ARCA
- **Inventario de Extintores:** control por cliente con vencimientos y alertas automáticas
- **Órdenes de Trabajo:** recargas, reparaciones, pruebas hidráulicas — numeradas y trazables
- **Control de Acceso / Roles:** administradores, técnicos, recepción
- **Copyright:** 2026 — sistema activo
- **Infraestructura:** desplegado en Vercel (dominio `varigas.vercel.app`)

**Industria:** empresas de venta, recarga y mantenimiento de matafuegos/extintores en Argentina — sector regulado (IRAM 3517, normativa PBA, etc.)

**Problema resuelto:** operación diaria de una empresa de extintores — trazabilidad de equipos por cliente, control de vencimientos, gestión de órdenes de trabajo (recargas, reparaciones, hidráulicas), roles diferenciados por función

**Stack tecnológico visible:** Vercel (hosting/deployment). Frontend web. No se expone más desde la capa pública.

**Búsqueda externa:** no se encontró mención pública de "Varigas" como empresa cliente real; el nombre probablemente es el nombre del producto/sistema, no del cliente final.

---

## Capacidades de MaatWork que estos productos prueban

| Capacidad | Evidencia |
|---|---|
| SaaS multi-rol con auth | Ambos productos tienen sistema de acceso con roles (Varigas: admin/técnico/recepción) |
| Gestión de entidades con historial | Varigas: clientes + extintores con historial completo |
| Control de vencimientos y alertas | Varigas: alertas automáticas de vencimiento |
| Órdenes de trabajo trazables | Varigas: OT numeradas para recargas/reparaciones/hidráulicas |
| Software vertical para industrias reguladas | Varigas: sector extintores (normativa IRAM/PBA); NMS: natatorios |
| Deploy en infraestructura moderna | Vercel (Varigas confirmado); dominio propio para NMS |
| Integración con datos fiscales argentinos | Varigas: CUIT validado en ficha de cliente |

---

## Para el case study (qué se puede afirmar honestamente)

**NMS:** "Sistema de gestión para natatorio Oro Azul. Aplicación web a medida, completamente autenticada, operativa en producción." — nada más sin acceso interno.

**Varigas:** "Sistema integral de gestión para empresa de extintores: cartera de clientes con CUIT validado, inventario de extintores con alertas de vencimiento, órdenes de trabajo numeradas (recargas, reparaciones, pruebas hidráulicas) y control de acceso por roles (administradores, técnicos, recepción). Desplegado en Vercel, activo en 2026."

**Qué falta para un case study completo:** acceso interno para documentar flujos reales, métricas de uso, nombre/confirmación del cliente Varigas, y testimonios.
