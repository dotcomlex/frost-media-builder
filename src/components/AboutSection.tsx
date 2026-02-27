import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-background">
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
            So we built Frost Media differently. A small expert team in Denver, Colorado — combining AI technology with proven direct-response marketing. We speak fluent English and Spanish, unlocking markets your competitors can't touch. Everything is custom. No templates, no recycled campaigns.
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Commerce City, Colorado 80022</span>
          <a href="tel:7202887101" className="flex items-center gap-2 hover:text-foreground transition-colors"><Phone className="h-4 w-4 text-primary" /> (720) 288-7101</a>
          <a href="mailto:hello@frostmedia.co" className="flex items-center gap-2 hover:text-foreground transition-colors"><Mail className="h-4 w-4 text-primary" /> hello@frostmedia.co</a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
