# Social proof operativo

La landing V6 evita publicar nombres, fotos, logos o métricas no verificadas.

## Dónde editar

- Testimonios: `src/data/testimonials.ts`
- Rubros del marquee: `src/data/clients.ts` (preparado para futura migración si se decide centralizar el marquee)
- Stats: `src/components/StatsCounter.tsx`

## Política para testimonios reales

Antes de cambiar `verified: false` a `verified: true`:

1. Tener permiso escrito del cliente para usar nombre, local, ciudad y foto/logo.
2. Guardar foto/logo en `public/clients/`.
3. Evitar métricas inventadas. Si se dice "-30% no-shows" o "+18% ocupación", debe existir fuente interna.
4. Mantener quote breve: máximo 22 palabras.
5. No usar apellido completo si el cliente no lo autorizó.

## Estado actual

Los testimonios actuales son `Caso piloto` y NO atribuyen nombres reales. Están escritos para mostrar la estructura visual sin inventar prueba social.
