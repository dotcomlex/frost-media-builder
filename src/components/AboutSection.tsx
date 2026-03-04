import { motion } from "framer-motion";
import aboutTeam from "@/assets/about-team.jpg";

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-alpine-dark border-t border-white/5">
    <div className="max-w-4xl mx-auto px-5 md:px-8">
      {/* Team image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden mb-10"
      >
        <img
          src={aboutTeam}
          alt="Frost Media team working in our Denver office"
          className="w-full h-48 md:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpine-dark/80 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">About Frost Media</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark tracking-tight mb-8">
          Built by Denver Marketers Who Saw the Gaps
        </h2>
      </motion.div>

      {/* Divider */}
      <div className="w-16 h-px bg-ice-blue/30 mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-5 text-base md:text-lg text-text-on-dark/60 leading-relaxed"
      >
        <p>
          After seven years running performance campaigns across insurance, e-commerce, beauty, and home services, we kept seeing businesses throwing money at ads with zero tracking and agencies charging retainers regardless of results.
        </p>
        <p>
          So we built Frost Media differently. A small expert team based in Denver, Colorado — combining <span className="text-ice-blue font-medium">cutting-edge AI technology</span> with proven direct-response marketing. Everything is custom. No templates, no recycled campaigns. Just systems that generate real revenue.
        </p>
        <p>
          We don't just run ads. We build the <span className="text-text-on-dark font-medium">entire infrastructure</span> — from the first click to the closed deal. That's why our clients stay, and that's why they grow.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
