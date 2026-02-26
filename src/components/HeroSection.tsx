import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const StarField = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [star.opacity, star.opacity * 0.3, star.opacity] }}
          transition={{ duration: 3 + star.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const MountainSilhouettes = () => (
  <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
    <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
      <path
        d="M0,320 L0,240 Q120,120 240,200 Q360,100 480,180 Q600,60 720,160 Q840,80 960,140 Q1080,40 1200,120 Q1320,80 1440,100 L1440,320 Z"
        fill="#0F172A"
        opacity="0.6"
      />
      <path
        d="M0,320 L0,260 Q180,160 360,220 Q540,140 720,200 Q900,120 1080,180 Q1260,100 1440,160 L1440,320 Z"
        fill="#0A0E1A"
        opacity="0.8"
      />
    </svg>
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0A0E1A] via-[#1E3A8A] to-[#0F172A]">
    <StarField />
    <MountainSilhouettes />

    <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-20 w-full text-center">
      <motion.div {...fadeUp(0.1)}>
        <span className="inline-block rounded-full border border-frost-blue/30 bg-frost-blue/10 backdrop-blur-sm text-frost-blue text-sm px-5 py-2 font-medium mb-8">
          AI-Powered Growth Systems for Colorado Businesses
        </span>
      </motion.div>

      <motion.h1
        {...fadeUp(0.2)}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
      >
        <span className="text-white">We Build Systems That</span>
        <br />
        <span className="text-white">Generate, Close &amp; Manage</span>
        <br />
        <span className="text-gradient-frost">Leads on Autopilot</span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.4)}
        className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed"
      >
        Advanced AI systems + expert media buying + custom automation.
        Everything built from scratch. Based in Denver, serving businesses ready to scale.
      </motion.p>

      <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
        <Button
          size="lg"
          className="bg-frost-blue hover:bg-frost-blue-deep text-white px-10 py-6 rounded-xl font-bold text-lg glow-frost-lg hover:scale-105 transition-all duration-200"
          asChild
        >
          <a href="#capabilities">See Our Systems</a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-2 border-white/20 text-white hover:bg-white/10 px-10 py-6 rounded-xl font-bold text-lg bg-transparent"
          asChild
        >
          <a href="#results">Case Studies</a>
        </Button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-20"
      >
        <ChevronDown className="h-6 w-6 text-white/40 mx-auto" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
