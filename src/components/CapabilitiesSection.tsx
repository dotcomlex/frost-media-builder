import { motion } from "framer-motion";
import { Target, Bot, Megaphone, Globe } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Stunning, high-converting websites built from scratch — mobile-first, blazing fast, designed to impress and convert.",
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    icon: Megaphone,
    title: "Paid Media & Advertising",
    desc: "Strategic ad campaigns across Meta, TikTok, and Google that fill your pipeline with qualified leads every single day.",
    gradient: "from-primary/20 via-primary/5 to-transparent",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Intelligent systems that respond to every lead instantly — voice, text, chat — so you never miss an opportunity.",
    gradient: "from-accent/20 via-accent/5 to-transparent",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: Target,
    title: "Lead Generation & CRM",
    desc: "End-to-end pipeline management — from first click to closed deal, fully tracked and automated.",
    gradient: "from-success/20 via-success/5 to-transparent",
    iconColor: "text-success",
    iconBg: "bg-success/10",
    borderColor: "border-success/20",
  },
];

const CapabilitiesSection = () => {
  const { openForm } = useContactForm();

  return (
    <section id="services" className="py-16 md:py-24 bg-alpine-dark border-t border-white/5">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-on-dark tracking-tight">
            Full-Stack Growth Infrastructure
          </h2>
          <p className="text-text-on-dark/50 text-base mt-3 max-w-xl">
            Design, media, and AI — everything your business needs to scale.
          </p>
        </motion.div>

        <div className="space-y-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl border border-white/[0.08] ${s.borderColor} bg-white/[0.02] overflow-hidden hover:border-white/[0.15] transition-all duration-500 cursor-pointer`}
              onClick={openForm}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-6 md:p-8 flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className={`h-7 w-7 ${s.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-text-on-dark font-heading mb-2">{s.title}</h3>
                  <p className="text-text-on-dark/55 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <span className="hidden md:block text-text-on-dark/20 group-hover:text-text-on-dark/50 transition-colors text-sm font-medium shrink-0 mt-1">
                  Learn more →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;