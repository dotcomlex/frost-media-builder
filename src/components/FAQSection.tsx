import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How are your leads different from Angi or HomeAdvisor?",
    a: "Every lead we generate is 100% exclusive to you. We never share leads with competitors. Our AI responds in under 60 seconds and qualifies them before they reach you, so you only talk to people ready to buy.",
  },
  {
    q: "What if I'm already running ads?",
    a: "If your ads are working, great. But if you're running ads without complete systems behind them, like AI follow-up, automated booking, and full CRM tracking, you're leaving 60-70% of potential revenue on the table. We build complete infrastructure, not just ads.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients start getting qualified leads within 1-2 weeks. The first month is testing and optimization. By month 2-3, your pipeline should be consistently full.",
  },
  {
    q: "Do you work with my industry?",
    a: "We specialize in home services and beauty businesses, but we've built systems for insurance, e-commerce, and more. If you have an established business ready to scale, we can probably help.",
  },
  {
    q: "What makes your AI different?",
    a: "Our AI is custom-trained on real sales conversations in your industry. It knows how to qualify leads, handle objections naturally, and book appointments without sounding robotic. It's not a generic chatbot. It's a trained system.",
  },
  {
    q: "Do you work with everyone?",
    a: "No. We're selective. We want businesses that are already established, have proper operations in place, and are ready to invest in growth. We're not a rescue service. We help good businesses become dominant.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-16 md:py-24 lg:py-32 bg-muted">
    <div className="max-w-3xl mx-auto px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-frost-blue mb-4">FAQ</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Questions You're Probably Asking
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-frost-blue/30"
            >
              <AccordionTrigger className="text-foreground hover:text-frost-blue hover:no-underline text-left py-5 font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
