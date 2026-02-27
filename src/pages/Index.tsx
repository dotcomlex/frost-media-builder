import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SystemDiagramSection from "@/components/SystemDiagramSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Navigation />
    <HeroSection />
    <CapabilitiesSection />
    <SystemDiagramSection />
    <AboutSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
