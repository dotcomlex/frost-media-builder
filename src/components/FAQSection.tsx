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
    a: "We build complete systems, not just campaigns. Everything is custom-built for your business — no templates, no recycled strategies. We're bilingual (English/Spanish) and AI-powered from the ground up. And we're based right here in Denver, Colorado.",
  },
  {
    q: "What industries do you work with?",
    a: "We specialize in home services and beauty businesses, but we've built systems for e-commerce, professional services, and more. If you're established and ready to scale with proper infrastructure, we can help.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients start getting qualified leads within 1-2 weeks. Month one is testing and optimization. By month 2-3, your pipeline should be consistently full. AI automation starts working immediately — 24/7 response in under 60 seconds.",
  },
  {
    q: "Do you work with startups?",
    a: "We're selective. We work with established businesses that have proven product-market fit and are ready to scale. We're not a rescue service — we help good businesses become dominant.",
  },
  {
    q: "What's included in your services?",
    a: "Everything: media buying, AI systems, web design, CRM, copywriting, branding. We build complete revenue-generating infrastructures. All campaigns and systems are available in both English and Spanish.",
  },
  {
    q: "Are you local to Denver?",
    a: "Yes, we're based in Commerce City, Colorado. We work with businesses across the country, but we love working with local Colorado companies. Nothing beats a face-to-face strategy session over coffee.",
  },
  {
    q: "How does the bilingual marketing work?",
    a: "We create complete parallel campaigns in English and Spanish — ads, landing pages, AI chatbots, customer service. Not Google Translated copy, but native fluent marketing that resonates with Spanish-speaking audiences.",
  },
  {
    q: "What's the AI automation you mention?",
    a: "Custom AI chatbots that respond to leads via SMS/Facebook Messenger in under 60 seconds. They qualify leads, answer questions, handle objections, and book appointments directly on your calendar. Available in English or Spanish. Works 24/7, never misses a lead.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-16 md:py-24 lg:py-28 bg-frost-white">
    <div className="max-w-3xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Common Questions
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
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
