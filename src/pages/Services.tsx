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
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "We design and build premium websites that look incredible on every device. Mobile-first, blazing fast, SEO-ready — crafted to convert visitors into customers.",
    details: ["Custom responsive design", "Landing pages & funnels", "CMS integration", "Performance optimization"],
    gradient: "from-[hsl(213,80%,50%)] to-[hsl(213,60%,65%)]",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Shopify Builds",
    desc: "Full-service store buildouts from product pages to checkout optimization. We build stores that look beautiful and convert at scale.",
    details: ["Shopify store setup", "Product page design", "Checkout optimization", "Revenue analytics"],
    gradient: "from-[hsl(160,84%,39%)] to-[hsl(160,60%,50%)]",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Geo-targeted campaigns with full-funnel lead capture. From awareness to booked appointment — we build the entire pipeline and manage it daily.",
    details: ["Geo-targeted campaigns", "Full-funnel strategy", "Lead qualification", "Appointment booking"],
    gradient: "from-[hsl(0,84%,60%)] to-[hsl(15,80%,55%)]",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    desc: "AI-powered agents that respond to every lead instantly across voice calls, SMS, web chat, and social DMs — 24/7, trained on your industry and brand.",
    details: ["AI Voice Callers", "Smart SMS Agents", "Website Chatbots", "Social DM Automation"],
    gradient: "from-[hsl(213,80%,50%)] to-[hsl(250,60%,60%)]",
  },
  {
    icon: Settings,
    title: "CRM & Pipeline Management",
    desc: "All-in-one system for automated follow-ups, lead routing, and full pipeline visibility so no opportunity falls through the cracks.",
    details: ["CRM setup & migration", "Automated follow-ups", "Lead scoring & routing", "Pipeline analytics"],
    gradient: "from-[hsl(33,70%,58%)] to-[hsl(30,78%,53%)]",
  },
];

const Services = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-frost-light to-background pt-24 pb-12 md:pt-32 md:pb-16 px-5 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-frost-pattern opacity-30" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="font-mono-tech text-[10px] tracking-widest uppercase text-ice-blue mb-3">Our Services</p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight max-w-2xl mx-auto">
              Everything You Need to{" "}
              <span className="text-secondary">Dominate</span> Your Market
            </h1>
            <p className="text-muted-foreground text-sm mt-4 max-w-lg mx-auto">
              Ads, AI, web design, e-commerce, and full-funnel infrastructure — all under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <div>
        {services.map((s, i) => {
          const isEven = i % 2 === 0;
          const isReversed = i % 2 === 1;
          return (
            <section
              key={s.title}
              className={`py-10 md:py-14 px-5 md:px-8 ${isEven ? "bg-background" : "bg-frost-light"}`}
            >
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""} gap-8 md:gap-12 items-start md:items-center`}
                >
                  <div className="shrink-0">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}>
                      <s.icon className="h-7 w-7 md:h-9 md:w-9 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">{s.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.details.map((d) => (
                        <span
                          key={d}
                          className="text-[11px] font-medium text-foreground/60 bg-foreground/[0.05] rounded-full px-3 py-1.5"
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
      <section className="bg-alpine-dark py-14 md:py-20 px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-on-dark mb-3">
              Ready to Scale?
            </h2>
            <p className="text-text-on-dark/50 text-sm mb-6">
              Let's build the growth infrastructure your business deserves.
            </p>
            <Button
              onClick={openForm}
              size="lg"
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-8 py-5 font-bold text-base shadow-xl shadow-secondary/30"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
