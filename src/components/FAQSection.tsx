import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the 15% commission work exactly?",
    a: "Simple. I generate leads through my marketing system. When one of those leads turns into a closed job, I earn 15% of the job total. If a homeowner books a $10,000 driveway through my ads, that's $1,500 for me. If they pay you in installments, my commission splits the same way — you pay me when they pay you. If a lead doesn't close, you owe me nothing on that lead.",
  },
  {
    q: "What does the monthly fee cover?",
    a: "The $2,000 monthly management fee covers everything I build and manage: ad campaign strategy, creative production, ad copywriting, AI chatbot systems, automated follow-up sequences, landing pages, lead management platform access, a dedicated business phone number, and daily campaign optimization. The ad budget ($1,500/month to start) goes directly to Meta — not to me.",
  },
  {
    q: "How are your leads different from HomeAdvisor or Angi?",
    a: "Every lead I generate is 100% exclusive to you. HomeAdvisor and Angi sell the same lead to 3-5 contractors, creating a race to see who calls first. With me, the lead is yours and only yours. Plus, my AI system responds instantly, so by the time your competitors would've even seen the notification, the lead is already booked on your calendar.",
  },
  {
    q: "What if I'm already running Facebook ads?",
    a: "If your current ads are working, great — keep them. But if you're boosting posts or running ads without a system behind them (landing pages, AI follow-up, automated booking), you're leaving money on the table. I build complete systems, not just ads.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients start getting leads within the first 1-2 weeks of launching campaigns. The first month is about testing — finding the best audiences, offers, and creative angles. By month 2-3, we're scaling what works and your pipeline should be consistently filling up.",
  },
  {
    q: "Do I need to be tech-savvy?",
    a: "Not at all. I handle everything — the ads, the AI, the automations, the tech. You get a simple app on your phone where you can see all your leads and conversations in real time. All you need to do is show up to the appointments and close.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-card">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">FAQ</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Questions You're Probably Thinking
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
              className="border border-border rounded-xl px-6 bg-background/50 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline text-left py-5 font-medium">
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
