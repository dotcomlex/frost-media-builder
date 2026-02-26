import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SystemDiagramSection from "@/components/SystemDiagramSection";
import AboutSection from "@/components/AboutSection";
import BilingualSpotlight from "@/components/BilingualSpotlight";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Navigation />
    <HeroSection />
    <TrustBar />
    <CapabilitiesSection />
    <SystemDiagramSection />
    <AboutSection />
    <BilingualSpotlight />
    <ResultsSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
    <MobileCTABar />
  </div>
);

export default Index;
