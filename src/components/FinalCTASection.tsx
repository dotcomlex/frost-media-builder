import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(to bottom, hsl(var(--frost-navy)), hsl(142 40% 8%))",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(circle at 50% 50%, hsl(var(--frost-green) / 0.1) 0%, transparent 50%)",
      }}
    />

    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
          Ready to Stop Paying for Nothing?
        </h2>
        <p className="text-xl text-muted-foreground mt-6">
          Book a free strategy call. I'll show you exactly how I'd fill your schedule with qualified, exclusive leads — and you only pay when jobs close.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="animate-pulse-glow rounded-xl px-10 py-6 text-lg font-bold hover:scale-105 transition-all duration-300"
          >
            Book Your Free Strategy Call →
          </Button>
        </div>
        <p className="text-sm text-muted-foreground/60 mt-4">
          No contracts. No commitment. Just a conversation.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
