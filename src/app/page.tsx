import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { LogoBar } from "@/components/LogoBar";
import { ProblemSolution } from "@/components/ProblemSolution";
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
        <TrustBar />
        <LogoBar />
        <ProblemSolution />
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
