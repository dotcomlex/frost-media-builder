import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import { useContactForm } from "@/components/ContactFormDialog";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
  { number: "1,900+", label: "Leads", desc: "For a Denver beauty studio in 30 days" },
  { number: "$180,000", label: "Revenue Increase", desc: "Home services client, 6-month campaign" },
  { number: "78%", label: "Close Rate", desc: "AI-qualified painting leads" },
  { number: "< 60s", label: "Response Time", desc: "Average AI response time, 24/7" },
];

const trustPills = ["7+ Years Experience", "Denver Based", "100+ Campaigns", "AI-Powered"];

const HeroSection = () => {
  const { openForm } = useContactForm();
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DotGlobeHero rotationSpeed={0.0015} globeRadius={2.2}>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90 z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-28 w-full flex flex-col items-center justify-center min-h-screen text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-border bg-card/50 backdrop-blur px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="font-mono-tech text-xs text-muted-foreground">Denver, Colorado | AI-Powered Marketing Systems</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-foreground max-w-4xl"
        >
          We Build Marketing Systems{" "}
          <span className="text-primary">That Actually Generate Revenue</span>
        </motion.h1>

        {/* Metrics Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-28 md:h-36 flex flex-col items-center justify-center mt-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMetric}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">{metrics[activeMetric].number}</p>
              <p className="text-base md:text-lg text-muted-foreground mt-2">{metrics[activeMetric].desc}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2 mt-4">
            {metrics.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveMetric(i)}
                className={`rounded-full transition-all ${i === activeMetric ? "bg-secondary w-8 h-2" : "bg-border w-2 h-2"}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mt-6 leading-relaxed"
        >
          Custom Meta campaigns + AI automation + professional websites. Everything built from scratch for businesses ready to dominate their market.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link to="/results">
            <Button
              size="lg"
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              See Our Results →
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={openForm}
            className="border-2 border-border text-foreground hover:bg-muted px-10 py-5 rounded-xl font-bold text-lg transition-all"
          >
            Schedule a Call
          </Button>
        </motion.div>

        {/* Trust Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap gap-3 justify-center mt-14"
        >
          {trustPills.map((pill, i) => (
            <motion.span
              key={pill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="border border-border bg-card/50 backdrop-blur px-4 py-2 rounded-full text-sm text-muted-foreground"
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-auto pt-8 pb-4 flex flex-col items-center gap-2 text-muted-foreground text-sm"
        >
          <span>Discover What We Build</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </motion.div>
      </div>
    </DotGlobeHero>
  );
};

export default HeroSection;
