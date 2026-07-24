import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SystemPreview } from "@/components/SystemPreview";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Nosotros } from "@/components/Nosotros";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

// Orden persuasivo: problema → solución → prueba (casos reales) → acción.
// Precios vive en /precios: primero valor, después número.
export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="home-compact" tabIndex={-1}>
        <Hero />
        <SystemPreview />
        <Services />
        <PortfolioSection />
        <Nosotros />
        <TechStack />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
