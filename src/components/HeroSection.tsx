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
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-black/50 to-black/30" />
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <DottedSurface className="h-full w-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono-tech text-xs md:text-sm tracking-widest uppercase text-secondary mb-6 hero-text-glow"
        >
          📍 Denver, Colorado
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-text-on-dark max-w-4xl hero-text-glow"
        >
          We Build Systems That Generate{" "}
          <span className="text-secondary">Real Revenue</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base text-text-on-dark/80 max-w-xl mt-6 leading-relaxed hero-text-glow"
        >
          Your pipeline, fully booked. Your leads, instantly handled. Your revenue, on autopilot.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Button
            size="lg"
            onClick={openForm}
            className="bg-secondary hover:bg-amber-gold text-secondary-foreground px-10 py-6 rounded-xl font-bold text-lg shadow-xl shadow-secondary/30 hover:scale-105 transition-all"
          >
            Book a Free Strategy Call →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;