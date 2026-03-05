import { motion } from "framer-motion";
import { Target, MessageSquare, Megaphone, Globe, ShoppingCart, Settings } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Advertising",
    desc: "Strategic Meta, Instagram & TikTok campaigns that fill your pipeline with qualified leads daily.",
    gradient: "from-[hsl(30,78%,53%)] to-[hsl(33,70%,58%)]",
    iconBg: "bg-secondary/15",
    iconColor: "text-secondary",
  },
  {
    icon: Globe,
    title: "Website Design & Dev",
    desc: "Premium, conversion-optimized websites that make your brand unforgettable on every device.",
    gradient: "from-[hsl(213,80%,50%)] to-[hsl(213,60%,65%)]",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Shopify",
    desc: "Full store buildouts — from product pages to checkout flows — designed to maximize revenue.",
    gradient: "from-[hsl(160,84%,39%)] to-[hsl(160,60%,50%)]",
    iconBg: "bg-success/15",
    iconColor: "text-success",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "End-to-end pipeline management from first click to closed deal. Every lead tracked and nurtured.",
    gradient: "from-[hsl(0,84%,60%)] to-[hsl(15,80%,55%)]",
    iconBg: "bg-destructive/15",
    iconColor: "text-destructive",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    desc: "AI voice callers, SMS agents & chatbots that respond instantly — trained on your brand, 24/7.",
    gradient: "from-[hsl(213,80%,50%)] to-[hsl(250,60%,60%)]",
    iconBg: "bg-ice-blue/15",
    iconColor: "text-ice-blue",
  },
  {
    icon: Settings,
    title: "CRM & Automation",
    desc: "All-in-one pipeline management with automated follow-ups, lead routing & full visibility.",
    gradient: "from-[hsl(33,70%,58%)] to-[hsl(30,78%,53%)]",
    iconBg: "bg-amber/15",
    iconColor: "text-amber",
  },
];

const CapabilitiesSection = () => {
  const { openForm } = useContactForm();

  return (
    <section id="services" className="py-20 md:py-28 bg-alpine-dark">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-secondary mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark tracking-tight">
            Full-Stack Growth Infrastructure
          </h2>
          <p className="text-text-on-dark/45 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Everything your business needs to dominate — from ads to AI to automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={openForm}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500"
            >
              {/* Gradient header area */}
              <div className={`h-32 bg-gradient-to-br ${s.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Floating icon */}
              <div className="absolute top-16 left-6">
                <div className={`w-16 h-16 rounded-2xl ${s.iconBg} backdrop-blur-sm flex items-center justify-center shadow-lg`}>
                  <s.icon className={`h-7 w-7 ${s.iconColor}`} />
                </div>
              </div>

              <div className="px-6 pb-6 pt-8">
                <h3 className="text-lg font-bold text-text-on-dark font-heading mb-2">{s.title}</h3>
                <p className="text-text-on-dark/50 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex justify-end">
                  <span className="text-text-on-dark/20 group-hover:text-secondary transition-colors text-xs font-mono-tech tracking-wider uppercase">
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
