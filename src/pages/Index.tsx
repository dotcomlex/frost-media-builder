import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import WhyFailSection from "@/components/WhyFailSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SystemDiagramSection from "@/components/SystemDiagramSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Navigation />
    <HeroSection />
    <TrustBar />
    <WhyFailSection />
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
