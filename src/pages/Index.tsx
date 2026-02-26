import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import ResultsSection from "@/components/ResultsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <HeroSection />
    <ProblemSection />
    <ServicesSection />
    <DifferentiatorSection />
    <ResultsSection />
    <HowItWorksSection />
    <AboutSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
