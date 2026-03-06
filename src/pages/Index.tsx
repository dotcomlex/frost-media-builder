import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustBadgesRow from "@/components/TrustBadgesRow";
import LogoMarquee from "@/components/LogoMarquee";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import FrostBotSection from "@/components/FrostBotSection";
import SystemDiagramSection from "@/components/SystemDiagramSection";
import SystemBreakdownSection from "@/components/SystemBreakdownSection";
import AboutSection from "@/components/AboutSection";
import IndustriesGridSection from "@/components/IndustriesGridSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Navigation />
    <HeroSection />
    <TrustBadgesRow />
    <LogoMarquee />
    <CapabilitiesSection />
    <FrostBotSection />
    <SystemDiagramSection />
    <SystemBreakdownSection />
    <AboutSection />
    <IndustriesGridSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
