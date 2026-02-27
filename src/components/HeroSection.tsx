import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative bg-alpine-dark bg-frost-pattern min-h-[80vh] md:min-h-[85vh] flex items-center">
    <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 w-full">
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
        Custom Meta campaigns + AI automation + bilingual marketing. Built from scratch for businesses ready to dominate.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex flex-col sm:flex-row items-start gap-6"
      >
        <Button
          size="lg"
          className="bg-secondary hover:bg-amber-gold text-secondary-foreground px-10 py-6 rounded-xl font-bold text-lg shadow-xl shadow-secondary/30 hover:scale-105 transition-all"
          asChild
        >
          <a href="#work">See Our Results →</a>
        </Button>

        <div className="flex items-baseline gap-3">
          <span className="text-4xl md:text-5xl font-black font-heading text-secondary">1,900+</span>
          <span className="text-sm text-text-on-dark/50 leading-tight">
            Leads Generated<br />in 30 Days
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
