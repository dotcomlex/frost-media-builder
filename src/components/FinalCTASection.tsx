import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/components/ContactFormDialog";

const FinalCTASection = () => {
  const { openForm } = useContactForm();

  return (
    <section id="contact" className="py-20 md:py-28 bg-alpine-black bg-frost-pattern">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark tracking-tight leading-tight">
            Ready to Build a System That Actually Works?
          </h2>
          <p className="text-text-on-dark/50 text-sm mt-4">📍 Denver, Colorado</p>
          <Button
            size="lg"
            onClick={openForm}
            className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-12 py-6 text-lg font-bold shadow-2xl shadow-secondary/40 hover:scale-105 transition-all mt-10"
          >
            Book a Call →
          </Button>
          <p className="text-sm text-text-on-dark/40 mt-6">
            No sales pitch. No commitment. Just a real conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;