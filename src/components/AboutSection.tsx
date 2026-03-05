import { motion } from "framer-motion";
import { PenTool, Zap, Layers } from "lucide-react";
import aboutDenver from "@/assets/about-denver.jpg";

const differentiators = [
  { icon: PenTool, title: "Design-First Approach", desc: "Every pixel serves a purpose. We don't do templates." },
  { icon: Zap, title: "Direct Response Experts", desc: "Copy and campaigns built to convert, not just look good." },
  { icon: Layers, title: "Full-Stack Capabilities", desc: "Ads, AI, web, CRM — one team, zero gaps." },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-alpine-dark">
    <div className="max-w-5xl mx-auto px-5 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img
            src={aboutDenver}
            alt="Frost Media team working in our Denver office"
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-alpine-dark/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="font-mono-tech text-[10px] tracking-widest uppercase text-text-on-dark/60 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
              📍 Denver, Colorado
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-secondary mb-3">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-on-dark tracking-tight mb-6">
            Denver-Based. Design-Obsessed. Results-Driven.
          </h2>
          <p className="text-text-on-dark/55 text-base leading-relaxed mb-4">
            We're a small, elite team of designers, marketers, and engineers who believe great results start with <span className="text-text-on-dark font-medium">great design</span>. From high-end website builds to full-funnel advertising and AI automation, we bring obsessive attention to detail.
          </p>
          <p className="text-text-on-dark/55 text-base leading-relaxed">
            With experience spanning e-commerce, home services, beauty, insurance, and tech — every campaign, every website, every automation is built custom.
          </p>
        </motion.div>
      </div>

      {/* Differentiators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {differentiators.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
              <d.icon className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-text-on-dark mb-1">{d.title}</h4>
              <p className="text-text-on-dark/45 text-xs leading-relaxed">{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
