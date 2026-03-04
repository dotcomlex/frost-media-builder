import { motion } from "framer-motion";
import { Target, Bot, PenTool, Megaphone, Globe, Settings, Phone, MessageSquare, BrainCircuit, Clock, DollarSign, UserMinus } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Paid Media",
    benefit: "More customers, lower cost per lead.",
    points: ["Meta campaigns that scale profitably", "Scroll-stopping creative that converts", "A/B tested for maximum ROI"],
    borderColor: "border-l-primary",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: Target,
    title: "Lead Generation",
    benefit: "Your calendar, fully booked every month.",
    points: ["Geo-targeted campaigns for any industry", "Full-funnel lead capture & routing", "Home services, beauty, insurance & more"],
    borderColor: "border-l-success",
    iconBg: "bg-success/15",
    iconColor: "text-success",
  },
  {
    icon: Bot,
    title: "AI Automation Suite",
    benefit: "Save time & money — no extra hires needed.",
    points: [
      "AI Voice Callers — answer & qualify leads 24/7",
      "AI SMS Agents — instant text follow-ups that close",
      "AI Chatbots — respond in <30s on your website",
      "Automated booking, reminders & nurture sequences",
    ],
    extraDetail: "Replace 2-3 full-time employees with AI that never sleeps, never calls in sick, and costs a fraction of a salary.",
    borderColor: "border-l-accent",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    featured: true,
  },
  {
    icon: PenTool,
    title: "Copywriting & Creative",
    benefit: "Words and visuals that sell.",
    points: ["Direct-response ad copy that converts", "Branded creative & video production", "Landing page copy & email sequences"],
    borderColor: "border-l-secondary",
    iconBg: "bg-secondary/15",
    iconColor: "text-secondary",
  },
  {
    icon: Globe,
    title: "Web Design & Funnels",
    benefit: "High-converting sites built to close.",
    points: ["Custom websites & landing pages", "Conversion-optimized funnels", "Mobile-first, fast-loading design"],
    borderColor: "border-l-destructive",
    iconBg: "bg-destructive/15",
    iconColor: "text-destructive",
  },
  {
    icon: Settings,
    title: "CRM & Automation",
    benefit: "Never lose a lead again.",
    points: ["Pipeline management & lead routing", "Automated follow-up sequences", "Full visibility into every deal"],
    borderColor: "border-l-ice-blue",
    iconBg: "bg-ice-blue/15",
    iconColor: "text-ice-blue",
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
            whileHover={{ y: -6 }}
            className={`rounded-xl border border-white/[0.08] ${s.borderColor} border-l-4 bg-white/[0.03] overflow-hidden hover:bg-white/[0.06] hover:shadow-lg hover:shadow-ice-blue/5 transition-all duration-300 group ${s.featured ? 'sm:col-span-2 lg:col-span-1 ring-1 ring-accent/20' : ''}`}
          >
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center shrink-0 shadow-lg shadow-ice-blue/5`}>
                  <s.icon className={`h-6 w-6 ${s.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-on-dark font-heading">{s.title}</h3>
                  <p className="text-ice-blue font-medium text-xs">{s.benefit}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="text-text-on-dark/55 text-sm flex items-start gap-2">
                    <span className="text-ice-blue mt-0.5 text-xs">▸</span>
                    {p}
                  </li>
                ))}
              </ul>

              {s.extraDetail && (
                <div className="mt-4 pt-3 border-t border-white/[0.08]">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-1.5 text-text-on-dark/40 text-xs">
                      <Clock className="h-3.5 w-3.5 text-ice-blue" />
                      <span>24/7</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-on-dark/40 text-xs">
                      <DollarSign className="h-3.5 w-3.5 text-success" />
                      <span>Save 70%+</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-on-dark/40 text-xs">
                      <UserMinus className="h-3.5 w-3.5 text-secondary" />
                      <span>No hires</span>
                    </div>
                  </div>
                  <p className="text-text-on-dark/40 text-xs leading-relaxed italic">{s.extraDetail}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
