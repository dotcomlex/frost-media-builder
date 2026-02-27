import { motion } from "framer-motion";
import { Megaphone, Bot, Layers, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Megaphone,
    title: "Custom Ad Campaigns",
    desc: "We build and manage Meta ad campaigns tailored to your market, audience, and goals. Every dollar is tracked, tested, and optimized weekly for maximum ROI.",
  },
  {
    num: "02",
    icon: Bot,
    title: "AI-Powered Response System",
    desc: "Custom AI chatbot, voice, and SMS agent that responds to every inbound lead in under 60 seconds — 24/7. No missed calls, no slow follow-ups, no lost revenue.",
  },
  {
    num: "03",
    icon: Layers,
    title: "Revenue Infrastructure",
    desc: "Funnels, landing pages, CRM setup, and automated follow-ups that turn raw leads into closed deals. Everything connected, everything measured.",
  },
];

const SystemBreakdownSection = () => (
  <section className="py-16 md:py-24 bg-frost-light">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">The System</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          How We Build Your Revenue Machine
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
          Three pillars working together to fill your pipeline and grow your business.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Connecting line on desktop */}
        <div className="hidden md:block absolute top-[3.5rem] left-[16.67%] right-[16.67%] h-px bg-ice-blue/30 z-0" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative z-10"
          >
            {/* Step number badge */}
            <div className="flex items-center justify-center mb-5">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-ice-blue/30 flex items-center justify-center shadow-sm">
                <span className="font-mono-tech text-lg font-bold text-ice-blue">{step.num}</span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-[1.75rem] h-5 w-5 text-ice-blue/40" />
              )}
            </div>

            <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 rounded-xl bg-ice-blue/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="h-6 w-6 text-ice-blue" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default SystemBreakdownSection;
