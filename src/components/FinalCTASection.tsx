import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/components/ContactFormDialog";
import heroMountains from "@/assets/hero-mountains.png";

const FinalCTASection = () => {
  const { openForm } = useContactForm();

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* Mountain background */}
      <div className="absolute inset-0 z-0">
        <img src={heroMountains} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-alpine-black/80" />
        <div className="absolute inset-0 bg-frost-pattern" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono-tech text-[10px] tracking-widest uppercase text-ice-blue mb-4">Let's Talk</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark tracking-tight leading-tight">
            Ready to Build a System That Actually Works?
          </h2>
          <p className="text-text-on-dark/60 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            On this call, we'll audit your current setup, identify your biggest growth levers, and map out a custom plan — no sales pitch, no commitment.
          </p>
          <Button
            size="lg"
            onClick={openForm}
            className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-10 py-5 text-base font-bold shadow-2xl shadow-secondary/40 hover:scale-105 transition-all mt-8"
          >
            Book a Free Strategy Call →
          </Button>
          <p className="text-xs text-text-on-dark/30 mt-5 font-mono-tech tracking-wide">
            📍 Commerce City, Colorado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
