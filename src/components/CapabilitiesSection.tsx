import { motion } from "framer-motion";
import { Target, Bot, Globe } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Lead Generation & Paid Ads",
    desc: "Custom Meta and Instagram campaigns. Expert A/B testing, audience targeting, and bilingual copywriting. Real campaigns, not templates.",
  },
  {
    icon: Bot,
    title: "AI-Powered Lead Systems",
    desc: "Instant qualification, 24/7 follow-up, automated booking. Our AI responds in under 60 seconds and pre-qualifies leads before they reach you.",
  },
  {
    icon: Globe,
    title: "Web Design & Branding",
    desc: "High-converting landing pages, full websites, and complete brand identity. Mobile-first, SEO-optimized, custom-coded for performance.",
  },
];

const CapabilitiesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-frost-light">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-3">What We Build</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          Complete Marketing Infrastructure
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-heading">{s.title}</h3>
            <p className="text-muted-foreground text-base mt-3 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
