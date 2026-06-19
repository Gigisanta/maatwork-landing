# Inspiration Brief — MaatWork Landing Reposicionamiento
**Fecha:** 2026-06-19
**Scope:** Home page — estudio de software + automatización, mercado B2B AR/LATAM

---

## Contexto crítico

La landing actual está posicionada como **producto SaaS** (agenda/cobros/clientes para negocios de turno). La misión de este brief es reposicionarla como **estudio de software y automatización a medida** — el servicio profesional que construye esos productos para otros. Es un cambio de ICP completo: de usuario final a tomador de decisión empresarial.

---

## Referentes investigados

| Estudio/Agencia | URL | Por qué es referente |
|---|---|---|
| AWSMD | [awsmd.com](https://awsmd.com/) | Hero con rating Clutch, métricas cuantificadas (300+ proyectos, Fortune 500 logos), dark minimalista |
| Evil Martians (estudio 100 devtools) | [evilmartians.com](https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025) | Investigación de 100 landing pages, patrones validados |
| Arounda Agency | [arounda.agency](https://arounda.agency/blog/landing-page-examples) | Hero con outcome cuantificado ("4.6x revenue"), estructura servicios → casos → industrias → pricing |
| Flow Agency | [flow-agency.com](https://www.flow-agency.com/blog/b2b-saas-landing-page-best-practices/) | Framework 4C: Clarity → Comprehension → Credibility → Conversion |
| Lapa Ninja (Agency) | [lapa.ninja/category/agency](https://www.lapa.ninja/category/agency/) | Galería de agencias: Synthesis ("Future Proof with Data"), Oratory ("B2B Software Startups") |
| Creatif Agency | [creatif.agency](https://creatif.agency/what-makes-a-high-performing-landing-page-in-2025/) | Primeros 5 segundos = decisión; copy benefit-driven, outcomes not features |
| Involve.me | [involve.me/blog/landing-page-structure](https://www.involve.me/blog/landing-page-structure) | Anatomía completa con one-goal rule, repeated CTAs, strategic form placement |
| SaaS Hero / Flow Agency | — | Social proof near CTAs, not at page bottom; testimonials con before/after cuantificados |

---

## Patrones extraídos (no píxeles)

### Hero
- **Eyebrow técnico**: badge pequeño (credencial, Clutch stars, "en producción desde X") que da legitimidad antes de que el usuario lea el headline
- **Headline de outcome, no de features**: "Construimos el software que escala tu negocio" > "Desarrollamos apps y automatizaciones"
- **Dual CTA**: primario bold ("Hablemos de tu proyecto") + secundario outlined ("Ver proyectos")
- **Trust anchor inmediato**: debajo del CTA, 3-4 logos de clientes reales o 1 stat cuantificada. Evita el hero vacío.
- **Visual**: screenshot/demo real del producto entregado, no ilustración abstracta ni stock

### Trust block (post-hero)
- Logos de clientes o stat strip (proyectos entregados, años, industrias atendidas)
- Posición: inmediatamente después del hero, antes de explicar servicios
- En MaatWork: reutilizar ProofStrip existente con datos reales de proyectos del estudio

### Servicios
- **Tres columnas máx**, cada una: nombre del servicio → stack técnico o metodología → outcome que produce
- No listar features: listar problemas que resuelve ("Procesos manuales que frenan el crecimiento" → "Automatización con n8n/Python")
- Cards limpias, sin glassmorphism. Ícono simple + nombre + descripción 2 líneas.

### Portfolio / Casos
- Mínimo 2-3 proyectos destacados con: cliente (o sector si anónimo), problema, solución, resultado cuantificado
- Formato card horizontal o grid 2col con imagen real o mockup del entregable
- CTA por caso: "Ver detalle" (no "Leer más")

### Proceso ("Cómo trabajamos")
- 3-4 pasos numerados, horizontal en desktop / vertical en mobile
- Lenguaje concreto: "1. Diagnóstico (1 semana) → 2. MVP → 3. Iteración → 4. Entrega"
- Reduce fricción cognitiva del comprador B2B que no entiende cómo se cotiza trabajo a medida

### Prueba social / testimonios
- Máx 3 quotes curadas manualmente (no carrusel automático)
- Formato: foto + nombre + cargo + empresa + 1 resultado específico ("Redujimos 40% el tiempo en facturación")
- Posición: después de servicios/proceso, antes del CTA final

### FAQ
- 3-5 preguntas que manejen objeciones reales de compradores B2B AR: "¿Cuánto tarda?", "¿Trabajan con empresas chicas?", "¿Qué pasa si necesito cambios?"
- Reutilizar componente FAQ existente

### CTA final
- Full-width, fondo diferenciado (oscuro intenso o acento violeta)
- Headline corto: "¿Listo para automatizar?" o "Arrancamos en 1 semana"
- Un solo formulario o botón → WhatsApp/Calendly
- No repetir el mismo copy del hero

---

## Estructura de secciones recomendada (home reposicionada)

```
1. Navbar          (logo + links: Servicios / Proyectos / Proceso / Contacto + CTA "Hablemos")
2. Hero            (eyebrow + headline outcome + subhead + dual CTA + trust anchor)
3. ProofStrip      (stats del estudio: N proyectos / N años / sectores)
4. Servicios       (3 cols: Desarrollo a medida / Automatización / Integraciones)
5. Proyectos       (2-3 casos con resultado cuantificado)
6. Proceso         (3-4 pasos numerados)
7. Testimonios     (3 quotes curadas con nombre/empresa/resultado)
8. FAQ             (3-5 objeciones B2B)
9. CTA Final       (headline corto + formulario/botón único)
10. Footer
```

---

## Tabla de prioridades

| ID | Patrón | Qué | Por qué | Esfuerzo |
|----|--------|-----|---------|----------|
| P0 | Reencuadre hero | Cambiar headline de "Control operativo" a outcome del estudio | El visitor actual no entiende que MaatWork construye para otros | Bajo (copy) |
| P0 | Trust anchor en hero | Agregar logos/stats debajo del CTA en el hero | Primeros 5 seg determinan bounce rate; sin prueba el hero queda vacío | Bajo |
| P0 | Sección Proyectos/Portfolio | Card grid con 2-3 casos reales (sector + resultado cuantificado) | Compradores B2B compran prueba de capacidad, no promesas | Medio |
| P1 | Rediseño Servicios | 3-columna: Dev a medida / Automatización / Integraciones con stack y outcome | ProblemSolution actual está pensado para usuario final, no para quien compra el servicio | Medio |
| P1 | Sección Proceso | 3-4 pasos numerados "Cómo trabajamos" | Reduce fricción del comprador que no sabe cómo cotizar trabajo a medida | Bajo-Medio |
| P1 | Testimonios curados | 3 quotes con nombre/empresa/resultado real | B2B requiere prueba social atribuida; actualmente no existe | Medio |
| P2 | FAQ B2B | Reemplazar FAQ actual con objeciones del comprador de servicio | FAQ actual está pensado para usuario SaaS | Bajo |
| P2 | Navbar con links de secciones | Anchors a secciones clave + CTA "Hablemos" a la derecha | Navegación orientada a conversión B2B; actual no tiene estructura clara | Bajo |
| P2 | CTA final renovado | Headline breve + único punto de contacto | FinalCTA actual hereda framing SaaS; necesita copy de estudio | Bajo |

---

## Reglas de aplicación para MaatWork

- Mantener paleta actual: dark base, acento violeta (#7C3AED range) + dorado, tipografía Sora/Hanken
- Cero glassmorphism, gradient text, orbes flotantes
- Reutilizar todos los componentes existentes (Hero, ProofStrip, FAQ, FinalCTA, HowItWorks → renombrar a Proceso)
- Nuevas secciones = componentes nuevos mínimos: Servicios v2, Proyectos/Portfolio, Testimonios
- Verificar visualmente con screenshot en móvil antes de declarar done
- ProductEcosystem puede eliminarse o convertirse en showcase de tecnologías del stack del estudio

---

## Fuentes consultadas

- [Evil Martians — 100 devtool landing pages study](https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025)
- [Arounda Agency — 50 Best Landing Page Examples SaaS](https://arounda.agency/blog/landing-page-examples)
- [Flow Agency — B2B SaaS Landing Page Best Practices](https://www.flow-agency.com/blog/b2b-saas-landing-page-best-practices/)
- [Involve.me — Landing Page Structure & Anatomy](https://www.involve.me/blog/landing-page-structure)
- [AWSMD — Agency landing page reference](https://awsmd.com/)
- [Creatif Agency — High-Performing Landing Page 2025](https://creatif.agency/what-makes-a-high-performing-landing-page-in-2025/)
- [Lapa Ninja — Agency category](https://www.lapa.ninja/category/agency/)
- [Caffeine Marketing — Top 15 Software Dev Landing Pages](https://www.caffeinemarketing.com/blog/top-15-software-development-landing-page-designs)
- [SaaS Hero — B2B Landing CTA Practices](https://www.saashero.net/design/b2b-saas-landing-cta-practices/)
- [Landingpageflow — CTA Placement Strategies 2026](https://www.landingpageflow.com/post/best-cta-placement-strategies-for-landing-pages)
