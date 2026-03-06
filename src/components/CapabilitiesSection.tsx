import { motion } from "framer-motion";
import { Bot, Target, Globe, ShoppingCart, Magnet } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";

const services = [
  { num: "01", icon: Bot, title: "AI-Powered Lead Systems", desc: "Instant qualification, 24/7 follow-up, automated booking. Our AI responds in under 60 seconds and pre-qualifies leads before they reach you. Never miss another opportunity.", link: "/services/ai-automation" },
  { num: "02", icon: Target, title: "Facebook & Instagram Ads", desc: "Custom Meta campaigns that generate exclusive leads. Expert A/B testing, audience targeting, and creative designed to convert—not just get clicks.", link: "/services/meta-ads" },
  { num: "03", icon: Globe, title: "Professional Websites", desc: "High-converting landing pages and full websites. Mobile-first, SEO-optimized, custom-coded for speed. Built to turn visitors into customers.", link: "/services/web-design" },
  { num: "04", icon: ShoppingCart, title: "Shopify Stores", desc: "Complete e-commerce solutions from store setup to product pages to checkout optimization. We build online stores that actually sell.", link: "/services/ecommerce" },
  { num: "05", icon: Magnet, title: "Exclusive Lead Generation", desc: "100% exclusive leads delivered to your phone. No sharing with competitors. Real-time notifications. Complete CRM platform included.", link: "/services/lead-generation" },
];

const CapabilitiesSection = () => {
  const { openForm } = useContactForm();

  return (
    <section id="services" className="bg-card py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-3">What We Build</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight max-w-4xl mx-auto">
            Everything You Need to Dominate Your Market
          </h2>
          <p className="text-lg text-muted-foreground mt-5 max-w-3xl mx-auto">
            We don't just run ads. We build complete revenue-generating systems—custom for your business, powered by AI, managed by experts who care about ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background border border-border rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 flex flex-col group transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <s.icon className="h-7 w-7" />
              </div>
              <span className="font-mono-tech text-xs text-muted-foreground mb-2">{s.num}</span>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow">{s.desc}</p>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-lg text-foreground font-heading font-bold mb-4">Ready to Build Your System?</p>
          <Button
            onClick={openForm}
            className="bg-secondary hover:bg-amber-gold text-secondary-foreground px-8 py-3 rounded-lg font-bold text-base shadow-lg hover:scale-105 transition-all"
          >
            Book Strategy Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
