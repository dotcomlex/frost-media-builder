import { motion } from "framer-motion";
import { Megaphone, Bot, Layers } from "lucide-react";

const pillars = [
  {
    icon: Megaphone,
    title: "Custom Ad Campaigns",
    desc: "We build and manage Meta ad campaigns tailored to your market, audience, and goals. Every dollar is tracked, tested, and optimized weekly for maximum ROI.",
  },
  {
    icon: Bot,
    title: "AI-Powered Response System",
    desc: "Custom AI chatbot, voice, and SMS agent that responds to every inbound lead in under 60 seconds — 24/7. No missed calls, no slow follow-ups, no lost revenue.",
  },
  {
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-ice-blue/10 flex items-center justify-center mb-5">
              <p.icon className="h-6 w-6 text-ice-blue" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemBreakdownSection;
