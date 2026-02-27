import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-frost-light to-background">
    <div className="max-w-3xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-3">About Frost Media</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
          Built by Denver Marketers Who Saw the Gaps
        </h2>
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            After seven years running performance campaigns across insurance, e-commerce, beauty, and home services, we kept seeing businesses throwing money at ads with zero tracking and agencies charging retainers regardless of results.
          </p>
          <p>
            So we built Frost Media differently. A small expert team based in Denver, Colorado — combining AI technology with proven direct-response marketing. Everything is custom. No templates, no recycled campaigns. Just systems that generate real revenue.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
