import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import { Globe, Megaphone, MessageSquare, Target, ShoppingCart, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Advertising",
    desc: "Strategic campaigns across Meta, Instagram & TikTok designed to generate qualified leads at scale. Every dollar tracked, every campaign optimized weekly.",
    details: ["Meta & Instagram Ads", "TikTok Ads", "Creative testing & iteration", "ROAS tracking & optimization"],
    gradient: "from-[hsl(30,78%,53%)] to-[hsl(33,70%,58%)]",
    iconBg: "bg-secondary/15",
    iconColor: "text-secondary",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "We design and build premium websites that look incredible on every device. Mobile-first, blazing fast, SEO-ready — crafted to convert visitors into customers.",
    details: ["Custom responsive design", "Landing pages & funnels", "CMS integration", "Performance optimization"],
    gradient: "from-[hsl(213,80%,50%)] to-[hsl(213,60%,65%)]",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Shopify Builds",
    desc: "Full-service store buildouts from product pages to checkout optimization. We build stores that look beautiful and convert at scale.",
    details: ["Shopify store setup", "Product page design", "Checkout optimization", "Revenue analytics"],
    gradient: "from-[hsl(160,84%,39%)] to-[hsl(160,60%,50%)]",
    iconBg: "bg-success/15",
    iconColor: "text-success",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Geo-targeted campaigns with full-funnel lead capture. From awareness to booked appointment — we build the entire pipeline and manage it daily.",
    details: ["Geo-targeted campaigns", "Full-funnel strategy", "Lead qualification", "Appointment booking"],
    gradient: "from-[hsl(0,84%,60%)] to-[hsl(15,80%,55%)]",
    iconBg: "bg-destructive/15",
    iconColor: "text-destructive",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    desc: "AI-powered agents that respond to every lead instantly across voice calls, SMS, web chat, and social DMs — 24/7, trained on your industry and brand.",
    details: ["AI Voice Callers", "Smart SMS Agents", "Website Chatbots", "Social DM Automation"],
    gradient: "from-[hsl(213,80%,50%)] to-[hsl(250,60%,60%)]",
    iconBg: "bg-ice-blue/15",
    iconColor: "text-ice-blue",
  },
  {
    icon: Settings,
    title: "CRM & Pipeline Management",
    desc: "All-in-one system for automated follow-ups, lead routing, and full pipeline visibility so no opportunity falls through the cracks.",
    details: ["CRM setup & migration", "Automated follow-ups", "Lead scoring & routing", "Pipeline analytics"],
    gradient: "from-[hsl(33,70%,58%)] to-[hsl(30,78%,53%)]",
    iconBg: "bg-amber/15",
    iconColor: "text-amber",
  },
];

const Services = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero — bright, editorial */}
      <section className="bg-gradient-to-b from-frost-light to-background pt-28 pb-16 md:pt-36 md:pb-24 px-5 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-frost-pattern opacity-30" />
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-4">Our Services</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight max-w-3xl mx-auto">
              Everything You Need to{" "}
              <span className="text-secondary">Dominate</span> Your Market
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mt-5 max-w-xl mx-auto">
              Ads, AI, web design, e-commerce, and full-funnel infrastructure — all under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services — alternating editorial sections */}
      <div>
        {services.map((s, i) => {
          const isEven = i % 2 === 0;
          const isReversed = i % 2 === 1;
          return (
            <section
              key={s.title}
              className={`py-16 md:py-24 px-5 md:px-8 ${isEven ? "bg-background" : "bg-frost-light"}`}
            >
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""} gap-10 md:gap-16 items-start md:items-center`}
                >
                  {/* Large icon block */}
                  <div className="shrink-0">
                    <div className={`w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-xl`}>
                      <s.icon className="h-10 w-10 md:h-12 md:w-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{s.title}</h2>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.details.map((d) => (
                        <span
                          key={d}
                          className="text-xs font-medium text-foreground/65 bg-foreground/[0.05] rounded-full px-4 py-2"
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

      {/* CTA — dark contrast */}
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
