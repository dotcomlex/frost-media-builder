import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "150+", label: "Clients Served" },
  { value: "$10M+", label: "Revenue Generated" },
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-alpine-navy">
    <div className="max-w-3xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">About Frost Media</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark tracking-tight mb-6">
          Built by Denver Marketers Who Saw the Gaps
        </h2>
        <div className="space-y-4 text-base md:text-lg text-text-on-dark/60 leading-relaxed">
          <p>
            After seven years running performance campaigns across insurance, e-commerce, beauty, and home services, we kept seeing businesses throwing money at ads with zero tracking and agencies charging retainers regardless of results.
          </p>
          <p>
            So we built Frost Media differently. A small expert team based in Denver, Colorado — combining AI technology with proven direct-response marketing. Everything is custom. No templates, no recycled campaigns. Just systems that generate real revenue.
          </p>
          <p>
            We don't just run ads. We build the entire infrastructure — from the first click to the closed deal. That's why our clients stay, and that's why they grow.
          </p>
        </div>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-2xl md:text-4xl font-black text-ice-blue">{s.value}</p>
            <p className="text-xs md:text-sm text-text-on-dark/40 mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
