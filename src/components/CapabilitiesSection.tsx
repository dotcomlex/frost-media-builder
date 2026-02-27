import { motion } from "framer-motion";
import { Target, Bot, Globe, Megaphone } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Paid Media & Advertising",
    desc: "Meta, Instagram, and Google ad campaigns built to perform. We handle creative production, A/B testing, audience research, and scaling — for e-commerce brands, local businesses, and everything in between.",
    gradient: "from-ice-blue/20 to-primary/10",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Full-funnel lead generation for home services, beauty, insurance, real estate, and e-commerce. Every campaign is custom-built — no templates, no cookie-cutter strategies. Just systems that fill your pipeline.",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Bot,
    title: "AI-Powered Systems",
    desc: "Custom AI agents and chatbots that handle inbound leads, follow-ups, FAQ responses, objection handling, and appointment booking — all automated, 24/7. Your leads get instant responses while you focus on closing.",
    gradient: "from-ice-blue/15 to-primary/5",
  },
  {
    icon: Globe,
    title: "Web Design & Funnels",
    desc: "Landing pages, sales funnels, and full website builds designed to convert. We craft brand identities that stand out from the competition — mobile-first, SEO-optimized, and built for performance.",
    gradient: "from-secondary/15 to-secondary/5",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} pointer-events-none`} />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-heading">{s.title}</h3>
              <p className="text-muted-foreground text-base mt-3 leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
