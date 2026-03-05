import { motion } from "framer-motion";
import { Target, MessageSquare, Megaphone, Globe } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    desc: "Stunning, conversion-optimized websites that make your brand unforgettable.",
    gradient: "from-secondary via-secondary/60 to-amber-500",
    iconColor: "text-secondary",
  },
  {
    icon: Megaphone,
    title: "Paid Media",
    desc: "Strategic ad campaigns that fill your pipeline with qualified leads daily.",
    gradient: "from-primary via-primary/60 to-blue-400",
    iconColor: "text-primary",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    desc: "Intelligent agents that respond to every lead instantly — voice, text, and chat.",
    gradient: "from-accent via-accent/60 to-emerald-400",
    iconColor: "text-accent",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "End-to-end pipeline management from first click to closed deal.",
    gradient: "from-success via-success/60 to-teal-400",
    iconColor: "text-success",
  },
];

const CapabilitiesSection = () => {
  const { openForm } = useContactForm();

  return (
    <section id="services" className="py-16 md:py-24 bg-alpine-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-on-dark tracking-tight">
            Full-Stack Growth Infrastructure
          </h2>
          <p className="text-text-on-dark/50 text-base mt-3 max-w-xl">
            Design, media, and AI — everything your business needs to scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={openForm}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden hover:border-white/[0.15] transition-all duration-500 cursor-pointer"
            >
              {/* Gradient accent bar at top */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${s.gradient}`} />

              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <s.icon className={`h-6 w-6 ${s.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-text-on-dark font-heading mb-2">{s.title}</h3>
                    <p className="text-text-on-dark/55 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-text-on-dark/20 group-hover:text-text-on-dark/50 transition-colors text-xs font-medium">
                    Learn more →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
