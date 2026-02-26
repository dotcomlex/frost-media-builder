import { motion } from "framer-motion";
import { Rocket, Bot, Handshake } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Rocket,
    title: "I Build Your Lead Machine",
    desc: "I study your market, write custom ad copy, design creatives, and launch targeted Meta campaigns for your specific services and service area. No templates — everything built from scratch.",
  },
  {
    num: "02",
    icon: Bot,
    title: "AI Qualifies & Books",
    desc: "The second a lead comes in, my AI system responds via text. It asks the right questions, answers theirs, handles objections, and books the estimate directly on your calendar. Average response time: under 60 seconds.",
  },
  {
    num: "03",
    icon: Handshake,
    title: "You Close, We Both Win",
    desc: "You show up to qualified, pre-set appointments with homeowners who are ready to buy. When the job closes, I earn my 15%. If it doesn't close, you don't owe me anything on that lead.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 md:py-28 bg-card">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">THE PROCESS</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          From Ad Click to Booked Job in 3 Steps
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
        {/* Connecting lines (desktop) */}
        <div className="hidden md:block absolute top-[60px] left-[calc(33.33%_-_16px)] right-[calc(33.33%_-_16px)] h-[2px] border-t-2 border-dashed border-primary/30" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="text-center relative"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6 relative z-10">
              <span className="text-primary text-2xl font-bold font-mono">{step.num}</span>
            </div>
            <div className="bg-primary/10 rounded-xl p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <step.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
