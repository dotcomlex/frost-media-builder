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
    a: "We build complete systems, not just campaigns. Everything is custom — no templates, no recycled strategies. We combine social media advertising expertise with AI automation to create marketing infrastructure that runs 24/7.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients start getting qualified leads within 1-2 weeks. By month 2-3, your pipeline should be consistently full. AI automation works immediately — 24/7 response in under 5 seconds.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with home services (HVAC, roofing, painting, concrete), beauty studios, e-commerce brands, insurance, real estate, fitness, and more. If you're established and ready to scale, we can help.",
  },
  {
    q: "What's included in your services?",
    a: "Everything: social media advertising (Meta, IG, TikTok), lead generation, website design & development, e-commerce & Shopify store builds, conversational AI (voice callers, SMS, chatbots), CRM & pipeline management, copywriting, and branding.",
  },
  {
    q: "Do you work with startups?",
    a: "We're selective — we work with established businesses that have proven product-market fit and are ready to scale. We help good businesses become dominant.",
  },
  {
    q: "How much do your services cost?",
    a: "Our pricing is based on scope and scale. We don't do cookie-cutter packages — every engagement is custom-built around your goals. Book a strategy call and we'll give you a transparent breakdown.",
  },
  {
    q: "What's your onboarding process like?",
    a: "Simple: strategy call → custom game plan → we build everything in 1-2 weeks → launch. You'll have a dedicated point of contact and full visibility into every step.",
  },
  {
    q: "Can you guarantee results?",
    a: "We don't make empty promises. What we can guarantee is a battle-tested system, weekly optimization, and full transparency. Our track record speaks for itself.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-12 md:py-18 bg-white">
    <div className="max-w-2xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="font-mono-tech text-[10px] tracking-widest uppercase text-muted-foreground mb-2">FAQ</p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
          Common Questions
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-1.5">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border border-border rounded-lg px-5 bg-white data-[state=open]:border-secondary/30"
          >
            <AccordionTrigger className="text-foreground hover:text-secondary hover:no-underline text-left py-4 text-sm font-semibold">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
