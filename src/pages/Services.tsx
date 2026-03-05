import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import { Globe, Megaphone, MessageSquare, Target, PenTool, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "We design and build premium websites that look incredible on every device. Mobile-first, blazing fast, SEO-ready — crafted to convert visitors into customers.",
    details: ["Custom responsive design", "E-commerce & landing pages", "CMS integration", "Performance optimization"],
    accent: "bg-secondary",
    accentLight: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Megaphone,
    title: "Paid Media & Advertising",
    desc: "Strategic campaigns across Meta, TikTok, and Google designed to generate qualified leads at scale. Every dollar tracked, every campaign optimized weekly.",
    details: ["Meta & TikTok ads", "Google Ads management", "Creative testing", "ROI tracking"],
    accent: "bg-primary",
    accentLight: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    desc: "AI-powered agents that respond to every lead instantly across voice, text, web chat, and social DMs — 24/7, trained on your industry.",
    details: ["AI Voice Agents", "Smart SMS Responses", "Website Chat", "Social DM Automation"],
    accent: "bg-accent",
    accentLight: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Geo-targeted campaigns with full-funnel lead capture. From awareness to booked appointment — we build the entire pipeline.",
    details: ["Geo-targeted campaigns", "Full-funnel strategy", "Lead qualification", "Appointment booking"],
    accent: "bg-success",
    accentLight: "bg-success/10",
    iconColor: "text-success",
  },
  {
    icon: PenTool,
    title: "Creative & Copywriting",
    desc: "Direct-response ad copy, branded creative, and content that stops the scroll and drives action.",
    details: ["Ad creative & video", "Direct-response copy", "Brand identity", "Social content"],
    accent: "bg-destructive",
    accentLight: "bg-destructive/10",
    iconColor: "text-destructive",
  },
  {
    icon: Settings,
    title: "CRM & Pipeline Management",
    desc: "Automated follow-ups, lead routing, and full pipeline visibility so no opportunity falls through the cracks.",
    details: ["CRM setup", "Automated follow-ups", "Lead scoring", "Pipeline analytics"],
    accent: "bg-ice-blue",
    accentLight: "bg-ice-blue/10",
    iconColor: "text-ice-blue",
  },
];

const Services = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="bg-alpine-dark pt-28 pb-20 md:pt-36 md:pb-28 px-5 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">Services</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-on-dark tracking-tight max-w-3xl">
              Everything You Need to Dominate Your Market
            </h1>
            <p className="text-text-on-dark/50 text-base md:text-lg mt-4 max-w-xl">
              Design, media buying, AI automation, and full-funnel infrastructure — all under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services — alternating light sections */}
      <div>
        {services.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <section
              key={s.title}
              className={`py-16 md:py-24 px-5 md:px-8 ${isEven ? "bg-frost-light" : "bg-background"}`}
            >
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} gap-8 md:gap-14 items-start md:items-center`}
                >
                  {/* Icon block */}
                  <div className="shrink-0">
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl ${s.accentLight} flex items-center justify-center`}>
                      <s.icon className={`h-10 w-10 md:h-12 md:w-12 ${s.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className={`h-1 w-12 ${s.accent} rounded-full mb-4`} />
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{s.title}</h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.details.map((d) => (
                        <span
                          key={d}
                          className="text-xs font-medium text-foreground/60 bg-foreground/[0.05] rounded-full px-3 py-1.5"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="bg-alpine-dark py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-on-dark mb-4">
              Ready to Scale?
            </h2>
            <p className="text-text-on-dark/50 text-base mb-8">
              Let's build the growth infrastructure your business deserves.
            </p>
            <Button
              onClick={openForm}
              size="lg"
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-10 py-6 font-bold text-lg shadow-xl shadow-secondary/30"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
