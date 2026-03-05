import { motion } from "framer-motion";
import aboutDenver from "@/assets/about-denver.jpg";

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-alpine-dark border-t border-white/5">
    <div className="max-w-4xl mx-auto px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden mb-10"
      >
        <img
          src={aboutDenver}
          alt="Frost Media team working in our Denver office"
          className="w-full h-56 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpine-dark/80 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">About Us</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark tracking-tight mb-8">
          Denver-Based. Design-Obsessed. Results-Driven.
        </h2>
      </motion.div>

      <div className="w-16 h-px bg-ice-blue/30 mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-5 text-base md:text-lg text-text-on-dark/60 leading-relaxed"
      >
        <p>
          We're a small, elite team of designers, marketers, and engineers who believe great results start with <span className="text-text-on-dark font-medium">great design</span>. From high-end website builds to full-funnel advertising, we bring an obsessive attention to detail that most agencies skip.
        </p>
        <p>
          With experience spanning <span className="text-ice-blue font-medium">e-commerce, home services, beauty, insurance, and tech</span>, we don't recycle strategies. Every campaign, every website, every automation is built custom — because your business deserves more than a template.
        </p>
        <p>
          Based in Denver, Colorado — serving ambitious businesses everywhere.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;