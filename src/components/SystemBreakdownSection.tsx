import { motion } from "framer-motion";
import { Phone, MessageSquare, BrainCircuit, Send } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";

const aiSolutions = [
  {
    icon: Phone,
    title: "AI Voice Callers",
    desc: "Your AI receptionist answers every call, qualifies leads, and books appointments — trained on your specific industry. No missed calls, no hold times.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: MessageSquare,
    title: "AI SMS Agents",
    desc: "Instant text responses to every inquiry. Follows up automatically, answers questions, and drives leads to book — all within seconds.",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: BrainCircuit,
    title: "AI Chatbots",
    desc: "Website and social media chatbots that engage visitors 24/7. Pre-qualifies leads so you only talk to people ready to buy.",
    iconBg: "bg-success/10",
    iconColor: "text-success",
  },
  {
    icon: Send,
    title: "AI DM Automation",
    desc: "Automated Instagram and Facebook DM responses that turn comments and messages into booked appointments — instantly.",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

const SystemBreakdownSection = () => {
  const { openForm } = useContactForm();

  return (
    <section className="bg-frost-light overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">AI Solutions</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Your 24/7 Sales Team — Powered by AI
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-lg mx-auto">
            No extra hires. No missed leads. AI agents trained on your industry, responding to every customer instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiSolutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-background p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className={`h-6 w-6 ${s.iconColor}`} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Works for home services, beauty, e-commerce, real estate, and more.
          </p>
          <Button
            onClick={openForm}
            className="bg-primary hover:bg-deep-ice text-primary-foreground rounded-xl px-8 py-5 font-semibold"
          >
            See How AI Can Work For You →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemBreakdownSection;