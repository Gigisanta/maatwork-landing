import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero, PageCTA } from "@/components/subpage";
import { Safari } from "@/components/magicui/Safari";
import { DashboardUI } from "@/components/SystemPreview";
import { ServiceCards } from "@/components/ServiceCards";
import { TechStack } from "@/components/TechStack";
import { ProcessTimeline } from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Servicios — sistemas a medida y páginas web",
  description:
    "Lo que podemos construir para tu negocio: sistemas hechos a medida para tu empresa y páginas web rápidas que convierten. Estudio de software en Argentina.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios — sistemas a medida y páginas web · MaatWork",
    description:
      "Sistemas hechos a medida para empresas y páginas web rápidas que convierten. Estudio de software argentino.",
    url: "https://maat.work/servicios",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Servicios de MaatWork" }],
  },
};

export default function ServicesIndexPage() {
  return (
    <PageShell tone="light">
      <Breadcrumb tone="light" items={[{ name: "Servicios", href: "/servicios" }]} />
      <PageHero
        tone="light"
        eyebrow="Servicios"
        h1="Lo que podemos construir para tu negocio"
        intro="Sistemas hechos a medida para tu empresa y páginas web rápidas que convierten. Empezás con lo que necesitás hoy y escalás cuando haga falta."
        ctaMsg="quiero contarles un proyecto"
        secondaryHref="/casos"
        secondaryLabel="Ver casos reales"
        visual={
          <Safari
            url="app.maat.work/panel"
            className="rounded-[12px]"
            style={{ boxShadow: "0 40px 90px -32px rgba(15,15,35,0.4), 0 0 0 1px rgba(15,15,35,0.05)" }}
          >
            <DashboardUI />
          </Safari>
        }
      />
      <ServiceCards />
      <TechStack tone="light" />
      <ProcessTimeline />
      <PageCTA
        tone="light"
        title="¿Listo para empezar?"
        text="Contanos qué necesitás y en una primera charla entendemos tu operación, definimos el alcance y los tiempos, y te armamos una propuesta a tu medida. No damos precios genéricos: cada proyecto es distinto, así que la cotización va a medida y sin costo."
        ctaMsg="quiero contarles un proyecto"
      />
    </PageShell>
  );
}
