import { motion } from "framer-motion";
import { Target, Bot, PenTool, Megaphone, Globe, Settings } from "lucide-react";

const primaryServices = [
  {
    icon: Megaphone,
    title: "Paid Media",
    desc: "Meta campaigns built to scale profitably — every dollar tracked, tested, and optimized for maximum ROI.",
    gradient: "from-primary/20 via-primary/5 to-transparent",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "AI Voice Callers, SMS Agents, and Chatbots that respond instantly — 24/7 lead engagement without extra hires.",
    gradient: "from-accent/20 via-accent/5 to-transparent",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Geo-targeted campaigns with full-funnel lead capture — your calendar stays fully booked every month.",
    gradient: "from-success/20 via-success/5 to-transparent",
    iconColor: "text-success",
    iconBg: "bg-success/10",
  },
];

const secondaryServices = [
  {
    icon: PenTool,
    title: "Creative & Copy",
    desc: "Direct-response ad copy and branded creative that actually converts.",
    iconColor: "text-secondary",
  },
  {
    icon: Globe,
    title: "Web & Funnels",
    desc: "High-converting landing pages and funnels, mobile-first and fast.",
    iconColor: "text-destructive",
  },
  {
    icon: Settings,
    title: "CRM & Pipeline",
    desc: "Automated follow-ups, lead routing, and full pipeline visibility.",
    iconColor: "text-ice-blue",
  },
];

const CapabilitiesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-alpine-dark border-t border-white/5">
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">What We Build</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-on-dark tracking-tight">
          Complete Marketing Infrastructure
        </h2>
        <p className="text-text-on-dark/50 text-base mt-3 max-w-xl">
          Everything your business needs to attract, convert, and close.
        </p>
      </motion.div>

      {/* Primary services — large bento cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {primaryServices.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden hover:border-white/[0.15] transition-all duration-500"
          >
            {/* Gradient background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative p-6 md:p-8">
              <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className={`h-7 w-7 ${s.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-text-on-dark font-heading mb-3">{s.title}</h3>
              <p className="text-text-on-dark/55 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary services — compact row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {secondaryServices.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <s.icon className={`h-5 w-5 ${s.iconColor} shrink-0`} />
              <h3 className="text-base font-bold text-text-on-dark font-heading">{s.title}</h3>
            </div>
            <p className="text-text-on-dark/45 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
