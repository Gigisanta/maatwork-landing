export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  business: string;
  location: string;
  initials: string;
  gradient: number;
  verified: boolean;
};

/**
 * Testimonial source of truth.
 *
 * `verified: false` means this is launch copy / composite copy and must be
 * replaced with a real customer + written permission before using their
 * photo/logo. The UI intentionally avoids photos/logos until verified=true.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Pasamos de responder mensajes todo el día a tener agenda, recordatorios y cobros ordenados en un solo lugar.",
    name: "Cliente piloto",
    role: "Dueño",
    business: "Gimnasio",
    location: "Buenos Aires",
    initials: "GP",
    gradient: 1,
    verified: false,
  },
  {
    quote:
      "Lo que más cambió fue ver la operación sin preguntar. Turnos, pagos y seguimiento quedaron claros.",
    name: "Cliente piloto",
    role: "Administración",
    business: "Salón",
    location: "CABA",
    initials: "SP",
    gradient: 3,
    verified: false,
  },
  {
    quote:
      "La implementación fue simple: cargamos los datos, capacitamos al equipo y empezamos a operar sin frenar el local.",
    name: "Cliente piloto",
    role: "Director",
    business: "Academia",
    location: "Córdoba",
    initials: "AP",
    gradient: 4,
    verified: false,
  },
];
