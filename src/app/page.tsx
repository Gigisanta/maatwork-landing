import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsCounter } from "@/components/StatsCounter";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ProductEcosystem } from "@/components/ProductEcosystem";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingROI } from "@/components/PricingROI";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsCounter />
        <LogoMarquee />
        <ProblemSolution />
        <ProductEcosystem />
        <Features />
        <HowItWorks />
        <PricingROI />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
