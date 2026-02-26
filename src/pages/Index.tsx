import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SystemDiagramSection from "@/components/SystemDiagramSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <HeroSection />
    <CapabilitiesSection />
    <SystemDiagramSection />
    <ResultsSection />
    <AboutSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
