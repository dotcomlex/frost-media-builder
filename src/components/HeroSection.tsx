import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const metrics = [
  { number: "1,900+", label: "Leads Generated", desc: "For Denver Beauty Studio in 30 Days" },
  { number: "$180K", label: "Revenue Increase", desc: "Home Services Client, 6 Months" },
  { number: "78%", label: "Close Rate", desc: "AI-Qualified Painting Leads" },
  { number: "< 60s", label: "Response Time", desc: "Average AI Response Time, 24/7" },
];

const trustPills = [
  "7+ Years Experience",
  "Denver Based",
  "Bilingual (EN/ES)",
  "100+ Campaigns",
  "AI-Powered",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const HeroSection = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-frost-white to-background bg-frost-pattern">
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 w-full text-center">
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-primary text-sm px-5 py-2 font-medium mb-8">
            📍 Denver, Colorado | AI-Powered Marketing Systems
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] mb-8"
        >
          <span className="text-foreground">We Build Marketing Systems</span>
          <br />
          <span className="text-gradient-ice">That Generate Real Revenue</span>
        </motion.h1>

        {/* Rotating Metrics Carousel */}
        <motion.div {...fadeUp(0.4)} className="my-10">
          <div className="relative h-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMetric}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-secondary font-heading">
                  {metrics[activeMetric].number}
                </p>
                <p className="text-base md:text-lg text-muted-foreground mt-1">
                  {metrics[activeMetric].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {metrics.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveMetric(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeMetric ? "bg-secondary w-8" : "bg-border hover:bg-muted-foreground"}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.p
          {...fadeUp(0.5)}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Custom Meta campaigns + AI automation + bilingual marketing. Everything built from scratch for businesses ready to dominate their market.
        </motion.p>

        <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button
            size="lg"
            className="bg-secondary hover:bg-amber-gold text-secondary-foreground px-10 py-6 rounded-xl font-bold text-lg shadow-xl shadow-secondary/30 hover:shadow-2xl hover:scale-105 transition-all duration-200"
            asChild
          >
            <a href="#work">See Our Results →</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-border text-foreground hover:bg-muted px-10 py-6 rounded-xl font-bold text-lg transition-all"
            asChild
          >
            <a href="#contact">Schedule a Call</a>
          </Button>
        </motion.div>

        <motion.div {...fadeUp(0.8)} className="flex flex-wrap justify-center gap-3 mt-14">
          {trustPills.map((pill) => (
            <span key={pill} className="border border-primary/20 bg-background px-4 py-2 rounded-full text-sm text-muted-foreground">
              {pill}
            </span>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-16"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground/40 mx-auto" />
          <p className="text-xs text-muted-foreground/40 mt-1">Discover What We Build</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
