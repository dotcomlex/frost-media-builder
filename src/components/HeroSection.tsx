import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-background" />
    <div
      className="absolute inset-0 opacity-100"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, hsl(var(--frost-green) / 0.08) 0%, transparent 70%)",
      }}
    />
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div {...fadeUp(0.1)}>
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 text-primary text-sm px-4 py-1.5 font-medium mb-8">
          Performance Marketing × AI Automation
        </span>
      </motion.div>

      <motion.h1
        {...fadeUp(0.2)}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
      >
        <span className="text-foreground">Your Ads Should</span>
        <br />
        <span className="text-gradient-green">Print Money.</span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.4)}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
      >
        I build AI-powered lead generation systems for home service contractors.
        You only pay when jobs close. No retainers. No shared leads. No bullshit.
      </motion.p>

      <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
        <Button size="lg" className="glow-green-lg rounded-xl px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-200">
          Book a Free Strategy Call
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-xl px-8 py-6 text-lg border-border hover:bg-secondary/50"
          asChild
        >
          <a href="#results">See Results ↓</a>
        </Button>
      </motion.div>

      <motion.div
        {...fadeUp(0.8)}
        className="mt-16 flex flex-wrap items-center justify-center gap-3"
      >
        <span className="text-sm text-muted-foreground/60 mr-2">Trusted by contractors across Denver</span>
        {["Painting", "Concrete", "Renovation", "Beauty"].map((cat) => (
          <span
            key={cat}
            className="rounded-lg border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
          >
            {cat}
          </span>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-16"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground/40 mx-auto" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
