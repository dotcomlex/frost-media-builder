import { motion } from "framer-motion";
import { ChevronDown, Users, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(24 100% 96%), hsl(0 0% 100%), hsl(37 100% 96%))" }}>
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {/* Main hero content */}
        <div className="lg:col-span-2">
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-block rounded-full border border-primary/30 bg-coral-light text-primary text-sm px-4 py-1.5 font-medium mb-8">
              AI-Powered Lead Generation for Home Service Contractors
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-foreground">We Build Lead Generation</span>
            <br />
            <span className="text-foreground">Systems </span>
            <span className="text-gradient-coral">That Work</span>
            <br />
            <span className="text-gradient-coral">While You Sleep</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            Custom Meta ads, AI qualification, instant follow-up, automated booking. Every lead exclusive. Every system custom-built for Denver contractors.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button size="lg" className="glow-coral-lg rounded-xl px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-200 shadow-xl shadow-primary/25">
              Book Strategy Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-8 py-6 text-lg border-border text-foreground hover:bg-muted/50"
              asChild
            >
              <a href="#systems">See How It Works ↓</a>
            </Button>
          </motion.div>
        </div>

        {/* Bento stat cards */}
        <div className="flex flex-col gap-4">
          <motion.div
            {...fadeUp(0.3)}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
            <p className="text-4xl font-bold text-primary font-mono-tech">
              <AnimatedCounter target={1900} suffix="+" />
            </p>
            <p className="text-sm text-muted-foreground mt-1">Qualified Leads Generated</p>
          </motion.div>

          <motion.div
            {...fadeUp(0.45)}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center">
                <Lock className="h-5 w-5 text-primary" />
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground">100% Exclusive Leads</p>
            <p className="text-xs text-muted-foreground mt-1">Never shared. Ever.</p>
          </motion.div>

          <motion.div
            {...fadeUp(0.6)}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center relative">
                <Zap className="h-5 w-5 text-success" />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-success">
                  <span className="absolute inset-0 rounded-full bg-success animate-pulse-dot" />
                </span>
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground">AI Response Time: &lt;60 seconds</p>
            <p className="font-mono-tech text-xs tracking-widest uppercase text-success mt-1">24/7 Active</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-16 text-center"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground/40 mx-auto" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
