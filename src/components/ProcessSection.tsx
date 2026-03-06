import { motion } from "framer-motion";
import { Phone, Wrench, TrendingUp, ArrowRight } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";

const steps = [
  {
    num: "1",
    icon: Phone,
    title: "Free Strategy Session",
    desc: "We analyze your market, competition, and growth potential. No sales pitch—just a real conversation about what's working and what's not.",
    timeline: "30-60 minutes",
  },
  {
    num: "2",
    icon: Wrench,
    title: "Custom System Build",
    desc: "We build your ads, website, AI automation, and CRM—tailored specifically to your business. Everything custom, nothing template.",
    timeline: "7-10 days",
  },
  {
    num: "3",
    icon: TrendingUp,
    title: "Leads Start Flowing",
    desc: "Exclusive leads delivered to your phone with AI follow-up handling initial contact. You focus on estimates and closing deals.",
    timeline: "Ongoing optimization",
  },
];

const ProcessSection = () => {
  const { openForm } = useContactForm();

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-3">Our Process</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            From First Call to First Lead in 14 Days
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative bg-card border border-border rounded-2xl p-10 flex-1"
            >
              <span className="absolute -top-6 -left-4 text-8xl font-bold text-primary/10 select-none font-heading">{step.num}</span>
              <div className="relative z-10">
                <step.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                <p className="text-sm text-primary font-medium font-mono-tech">{step.timeline}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-primary/40 z-20" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Button
            onClick={openForm}
            className="bg-secondary hover:bg-amber-gold text-secondary-foreground px-8 py-3 rounded-lg font-bold text-base shadow-lg hover:scale-105 transition-all"
          >
            Book Your Free Strategy Session
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
