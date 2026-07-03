import { OperationalField } from "@/components/OperationalField";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { ProductEcosystem } from "@/components/ProductEcosystem";
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
        <ProofStrip />
        <ProblemSolution />
        <Services />
        <HowItWorks />
        <Pricing />
        <ProductEcosystem />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
