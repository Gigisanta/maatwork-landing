import { OperationalField } from "@/components/OperationalField";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export default function HomePage() {
  return (
    <>
      <OperationalField />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="home-compact" tabIndex={-1}>
        <Hero />
        <Services />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
