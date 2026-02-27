import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What makes you different from other agencies?",
    a: "We build complete systems, not just campaigns. Everything is custom — no templates, no recycled strategies. We combine paid media expertise with AI automation to create marketing infrastructure that runs 24/7.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients start getting qualified leads within 1-2 weeks. By month 2-3, your pipeline should be consistently full. AI automation works immediately — 24/7 response in under 60 seconds.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with home services (HVAC, roofing, painting, concrete), beauty studios, e-commerce brands, insurance, real estate, and more. If you're established and ready to scale, we can help.",
  },
  {
    q: "What's included in your services?",
    a: "Everything: paid media buying, AI lead systems, web design, funnels, CRM setup, copywriting, and branding. Complete revenue-generating infrastructure built from scratch.",
  },
  {
    q: "Do you work with startups?",
    a: "We're selective — we work with established businesses that have proven product-market fit and are ready to scale. We help good businesses become dominant.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-16 md:py-24 bg-frost-light">
    <div className="max-w-3xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Common Questions
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-primary/30"
          >
            <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline text-left py-5 font-semibold">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
