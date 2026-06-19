import { OperationalField } from "@/components/OperationalField";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { ProductEcosystem } from "@/components/ProductEcosystem";
import { FAQ } from "@/components/FAQ";
import { About } from "@/components/About";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { KhekerFrieze } from "@/components/Ornaments";

function FriezeDivider({ count = 13, o = 0.08 }: { count?: number; o?: number }) {
  return (
    <div className="container-maat py-2">
      <KhekerFrieze count={count} o={o} />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <OperationalField />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProofStrip />
        <ProblemSolution />
        <Services />
        <Features />
        <HowItWorks />
        <FriezeDivider count={13} />
        <Pricing />
        <ProductEcosystem />
        <FAQ />
        <About />
        <FriezeDivider count={11} o={0.1} />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
