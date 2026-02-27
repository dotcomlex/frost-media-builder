import { motion } from "framer-motion";
import { Target, Bot, PenTool, Megaphone, Globe, Settings } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Paid Media",
    benefit: "More customers, lower cost per lead.",
    points: ["Meta campaigns that scale profitably", "Scroll-stopping creative that converts", "A/B tested for maximum ROI"],
  },
  {
    icon: Target,
    title: "Lead Generation",
    benefit: "Your calendar, fully booked every month.",
    points: ["Geo-targeted campaigns for any industry", "Full-funnel lead capture & routing", "Home services, beauty, insurance & more"],
  },
  {
    icon: Bot,
    title: "AI Systems",
    benefit: "Instant responses, zero missed leads.",
    points: ["Custom AI chatbot responds in <30s", "Automated booking & follow-ups", "Works 24/7 so you don't have to"],
  },
  {
    icon: PenTool,
    title: "Copywriting & Creative",
    benefit: "Words and visuals that sell.",
    points: ["Direct-response ad copy that converts", "Branded creative & video production", "Landing page copy & email sequences"],
  },
  {
    icon: Globe,
    title: "Web Design & Funnels",
    benefit: "High-converting sites built to close.",
    points: ["Custom websites & landing pages", "Conversion-optimized funnels", "Mobile-first, fast-loading design"],
  },
  {
    icon: Settings,
    title: "CRM & Automation",
    benefit: "Never lose a lead again.",
    points: ["Pipeline management & lead routing", "Automated follow-up sequences", "Full visibility into every deal"],
  },
];

const CapabilitiesSection = () => (
  <section id="services" className="py-14 md:py-20 bg-alpine-dark border-t border-white/5">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">What We Build</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-on-dark tracking-tight">
          Complete Marketing Infrastructure
        </h2>
        <p className="text-text-on-dark/50 text-base mt-3 max-w-xl">
          Everything your business needs to attract, convert, and close.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 md:p-6 hover:bg-white/[0.06] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-ice-blue/10 flex items-center justify-center shrink-0">
                <s.icon className="h-5 w-5 text-ice-blue" />
              </div>
              <h3 className="text-lg font-bold text-text-on-dark font-heading">{s.title}</h3>
            </div>
            <p className="text-ice-blue font-medium text-sm mb-3">{s.benefit}</p>
            <ul className="space-y-1.5">
              {s.points.map((p) => (
                <li key={p} className="text-text-on-dark/50 text-sm flex items-start gap-2">
                  <span className="text-ice-blue mt-1 text-xs">▸</span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
