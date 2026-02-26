import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FinalCTASection = () => (
  <section id="contact" className="py-20 md:py-28 lg:py-32 bg-slate-dark bg-frost-pattern relative overflow-hidden">
    <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground tracking-tight leading-tight">
          Ready to Stop Wasting Money on Agencies That Don't Deliver?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/70 mt-8 max-w-3xl mx-auto leading-relaxed">
          Book a free strategy session. We'll audit your current marketing, show you exactly what's broken, and design a custom system that generates qualified customers on autopilot. In English and Spanish.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            size="lg"
            className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-12 py-6 text-lg md:text-xl font-bold shadow-2xl shadow-secondary/40 hover:shadow-secondary/60 hover:scale-105 transition-all duration-300"
          >
            Book Your Free Strategy Session →
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl px-12 py-6 text-lg font-bold bg-transparent transition-all"
            asChild
          >
            <a href="tel:7202887101" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call Us: (720) 288-7101
            </a>
          </Button>
        </div>
        <p className="text-sm text-primary-foreground/40 mt-6">
          No sales pitch. No commitment. Just a real conversation about growing your business.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
