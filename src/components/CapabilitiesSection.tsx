import { motion } from "framer-motion";
import { Target, Bot, Globe, Palette, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const services = [
  {
    num: "01",
    icon: Target,
    title: "Lead Generation & Paid Ads",
    desc: "Custom Meta and Instagram campaigns built from the ground up. Expert A/B testing, audience targeting, and bilingual copywriting (English/Spanish). Not templates — real campaigns designed to convert.",
    link: "#",
  },
  {
    num: "02",
    icon: Bot,
    title: "AI-Powered Lead Systems",
    desc: "Instant qualification, 24/7 follow-up, automated booking. Our AI responds in under 60 seconds and pre-qualifies leads before they reach you.",
    link: "#",
  },
  {
    num: "03",
    icon: Globe,
    title: "Custom Websites & Funnels",
    desc: "High-converting landing pages and full websites. Mobile-first, SEO-optimized, custom-coded for maximum performance. Not WordPress templates.",
    link: "#",
  },
  {
    num: "04",
    icon: Palette,
    title: "Branding & Design",
    desc: "Logo design, brand identity, marketing materials. Everything custom-designed to position you as the premium choice in your market.",
    link: "#",
  },
  {
    num: "05",
    icon: Search,
    title: "SEO & Content Marketing",
    desc: "Organic visibility that compounds over time. Technical SEO, content strategy, and local optimization for Denver and beyond.",
    link: "#",
  },
];

const CapabilitiesSection = () => (
  <section id="services" className="py-16 md:py-24 lg:py-28 bg-frost-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.div {...fadeInUp}>
        <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-4">What We Build</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          Complete Marketing Infrastructure
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mt-4">
          We don't just run ads. We build end-to-end revenue-generating systems — custom for your business, powered by AI, managed by experts who care about ROI.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <s.icon className="h-7 w-7 text-primary" />
            </div>
            <p className="font-mono-tech text-xs text-muted-foreground mt-2">{s.num}</p>
            <h3 className="text-xl font-bold text-foreground mt-2 font-heading">{s.title}</h3>
            <p className="text-muted-foreground text-base mt-3 leading-relaxed">{s.desc}</p>
            <a href={s.link} className="text-primary hover:text-ice-blue-deep font-medium mt-4 inline-flex items-center gap-1 text-sm">
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeInUp} className="text-center mt-16">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Ready to Build Your System?</h3>
        <Button className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-10 py-6 text-lg font-bold shadow-xl shadow-secondary/20 hover:scale-105 transition-all mt-6">
          Book Strategy Call
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CapabilitiesSection;
