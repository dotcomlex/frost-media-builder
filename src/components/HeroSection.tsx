import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DottedSurface } from "@/components/ui/dotted-surface";

const HeroSection = () => (
  <section className="relative bg-alpine-black min-h-[80vh] md:min-h-[85vh] flex items-center">
    <div className="absolute inset-0 z-0 overflow-hidden">
      <DottedSurface className="h-full w-full" />
    </div>
    <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-32 w-full">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono-tech text-xs md:text-sm tracking-widest uppercase text-ice-blue mb-6"
      >
        📍 Denver, Colorado — AI-Powered Marketing
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1] text-text-on-dark max-w-4xl"
      >
        We Build Systems That Generate{" "}
        <span className="text-ice-blue">Real Revenue</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base md:text-lg text-text-on-dark/60 max-w-2xl mt-6 leading-relaxed"
      >
        Custom Meta campaigns + AI automation + high-converting funnels. Built from scratch for businesses ready to dominate.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8"
      >
        <Button
          size="lg"
          className="bg-secondary hover:bg-amber-gold text-secondary-foreground px-10 py-6 rounded-xl font-bold text-lg shadow-xl shadow-secondary/30 hover:scale-105 transition-all"
          asChild
        >
          <a href="#contact">Book a Free Strategy Call →</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
