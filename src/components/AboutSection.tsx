import { motion } from "framer-motion";
import { Users, Calendar, DollarSign, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "150+", label: "Clients Served" },
  { icon: Calendar, value: "7+", label: "Years Experience" },
  { icon: DollarSign, value: "$2M+", label: "Ad Spend Managed" },
  { icon: MapPin, value: "Denver", label: "Colorado HQ" },
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-alpine-dark border-t border-white/5">
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">About Frost Media</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark tracking-tight mb-8">
          Built by Denver Marketers Who Saw the Gaps
        </h2>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
      >
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center">
            <s.icon className="h-5 w-5 text-ice-blue mx-auto mb-2" />
            <p className="font-heading text-2xl md:text-3xl font-bold text-text-on-dark">{s.value}</p>
            <p className="text-text-on-dark/40 text-xs mt-1">{s.label}</p>
          </div>
        ))}
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
