import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => (
  <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(6 100% 67%), hsl(6 90% 60%), hsl(37 100% 65%))" }}>
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)" }} />

    <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">
          Ready to Build Your Lead Machine?
        </h2>
        <p className="text-xl text-white/90 mt-6">
          Book a free strategy call. We'll show you exactly how we'd fill your schedule with qualified, exclusive leads using AI-powered automation.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="bg-card text-primary hover:bg-card/90 rounded-xl px-12 py-6 text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Book Free Strategy Call →
          </Button>
        </div>
        <p className="text-sm text-white/70 mt-4">
          No commitment. No sales pitch. Just a conversation.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
