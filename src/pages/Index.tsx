import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ComparisonTable from "@/components/ComparisonTable";
import ResultsSection from "@/components/ResultsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Navigation />
    <HeroSection />
    <TrustBar />
    <ProblemSection />
    <CapabilitiesSection />
    <ComparisonTable />
    <ResultsSection />
    <ProcessSection />
    <TestimonialsSection />
    <IndustriesSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
