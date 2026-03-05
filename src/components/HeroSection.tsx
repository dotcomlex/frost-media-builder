import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import { useContactForm } from "@/components/ContactFormDialog";

const HeroSection = () => {
  const { openForm } = useContactForm();

  return (
    <DotGlobeHero rotationSpeed={0.0015} globeRadius={2.2}>
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-28 w-full flex items-center min-h-[85vh]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono-tech text-[10px] md:text-xs tracking-widest uppercase text-ice-blue mb-4"
          >
            📍 Denver, Colorado
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-text-on-dark max-w-4xl"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.7)' }}
          >
            We Build{" "}
            <span className="text-ice-blue">Growth Machines</span>{" "}
            for Ambitious Brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-text-on-dark/70 max-w-lg mt-5 leading-relaxed"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
          >
            Ads that convert. AI that responds. Systems that scale. Your entire revenue engine — designed, built, and managed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button
              size="lg"
              onClick={openForm}
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground px-10 py-5 rounded-xl font-bold text-base shadow-xl shadow-secondary/30 hover:scale-105 transition-all"
            >
              Book a Free Strategy Call →
            </Button>
            <p className="font-mono-tech text-[10px] text-text-on-dark/40 tracking-wide">
              Trusted by Colorado's fastest-growing brands
            </p>
          </motion.div>
        </div>
      </div>
    </DotGlobeHero>
  );
};

export default HeroSection;
