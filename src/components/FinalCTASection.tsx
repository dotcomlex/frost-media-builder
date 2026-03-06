import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/components/ContactFormDialog";

const FinalCTASection = () => {
  const { openForm } = useContactForm();

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-br from-secondary to-amber-gold overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready to Stop Chasing Leads and Start Closing Jobs?
          </h2>
          <p className="text-lg text-white/80 mt-8 max-w-3xl mx-auto leading-relaxed">
            Book a free strategy session. We'll audit your current marketing, show you exactly what's broken, and design a custom system that generates qualified customers on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              size="lg"
              onClick={openForm}
              className="bg-white hover:bg-white/90 text-secondary px-12 py-6 rounded-xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
            >
              Book Your Free Strategy Session →
            </Button>
            <a href="tel:+17202887101">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 rounded-xl font-bold text-xl transition-all"
              >
                Call Us: (720) 288-7101
              </Button>
            </a>
          </div>

          <p className="text-white/60 text-sm mt-6">
            No sales pitch. No commitment. Just a real conversation about growing your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
