import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import { Globe, Megaphone, Bot, Target, PenTool, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "We design and build premium websites that look incredible on every device. Mobile-first, blazing fast, SEO-ready — crafted to convert visitors into customers.",
    details: ["Custom responsive design", "E-commerce & landing pages", "CMS integration", "Performance optimization"],
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Megaphone,
    title: "Paid Media & Advertising",
    desc: "Strategic campaigns across Meta, TikTok, and Google designed to generate qualified leads at scale. Every dollar tracked, every campaign optimized weekly.",
    details: ["Meta & TikTok ads", "Google Ads management", "Creative testing frameworks", "ROI tracking & reporting"],
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Bot,
    title: "AI Automation Suite",
    desc: "AI-powered voice callers, SMS agents, chatbots, and DM automation that respond to every lead instantly — 24/7, trained on your industry.",
    details: ["AI Voice Callers", "AI SMS Agents", "Website & social chatbots", "Instagram & Facebook DM automation"],
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Geo-targeted campaigns with full-funnel lead capture. From awareness to booked appointment — we build the entire pipeline.",
    details: ["Geo-targeted campaigns", "Full-funnel strategy", "Lead qualification", "Appointment booking"],
    iconBg: "bg-success/10",
    iconColor: "text-success",
  },
  {
    icon: PenTool,
    title: "Creative & Copywriting",
    desc: "Direct-response ad copy, branded creative, and content that stops the scroll and drives action.",
    details: ["Ad creative & video", "Direct-response copywriting", "Brand identity", "Social media content"],
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
  },
  {
    icon: Settings,
    title: "CRM & Pipeline Management",
    desc: "Automated follow-ups, lead routing, and full pipeline visibility so no opportunity falls through the cracks.",
    details: ["CRM setup & management", "Automated follow-ups", "Lead routing & scoring", "Pipeline analytics"],
    iconBg: "bg-ice-blue/10",
    iconColor: "text-ice-blue",
  },
];

const Services = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen bg-alpine-dark overflow-x-hidden">
      <Navigation />

      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">Services</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-on-dark tracking-tight max-w-3xl">
              Everything You Need to Dominate Your Market
            </h1>
            <p className="text-text-on-dark/50 text-base mt-4 max-w-xl">
              Design, media buying, AI automation, and full-funnel infrastructure — all under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-5 md:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8 hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center shrink-0`}>
                  <s.icon className={`h-7 w-7 ${s.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-text-on-dark mb-2">{s.title}</h2>
                  <p className="text-text-on-dark/55 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.details.map((d) => (
                      <span
                        key={d}
                        className="text-xs font-medium text-text-on-dark/50 bg-white/[0.05] rounded-full px-3 py-1"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center pt-10"
          >
            <Button
              onClick={openForm}
              size="lg"
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-10 py-6 font-bold text-lg shadow-xl shadow-secondary/30"
            >
              Get Started →
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;