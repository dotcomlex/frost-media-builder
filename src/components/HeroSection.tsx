import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DottedSurface } from "@/components/ui/dotted-surface";
import heroMountains from "@/assets/hero-mountains.png";
import { useContactForm } from "@/components/ContactFormDialog";

const HeroSection = () => {
  const { openForm } = useContactForm();

  return (
    <section className="relative bg-alpine-black min-h-[85vh] md:min-h-[85vh] flex items-center">
      <img
        src={heroMountains}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/55 to-black/35" />
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <DottedSurface className="h-full w-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-28 w-full">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono-tech text-[10px] md:text-xs tracking-widest uppercase text-secondary mb-4 hero-text-glow"
        >
          📍 Denver, Colorado
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-text-on-dark max-w-4xl hero-text-glow"
        >
          We Build{" "}
          <span className="text-secondary">Growth Machines</span>{" "}
          for Ambitious Brands
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base text-text-on-dark/70 max-w-lg mt-5 leading-relaxed hero-text-glow"
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
            150+ businesses scaled · Meta & Shopify Partner
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
