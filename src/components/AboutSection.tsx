import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const credentials = [
  "7+ Years Experience",
  "Denver, Colorado",
  "Bilingual (EN/ES)",
  "100+ Systems Built",
  "AI-Powered",
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-4">About Frost Media</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Built by Denver Marketers Who Saw the Gaps
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm Christian Alejandro — founder of Frost Media. After seven years running performance campaigns across insurance, e-commerce, beauty, and home services, I kept seeing the same problems: businesses throwing money at ads with zero tracking, agencies charging retainers regardless of results, and contractors sharing leads with five competitors.
            </p>
            <p>
              So we built Frost Media differently. We're a small expert team based here in Denver, Colorado. We combine cutting-edge AI technology with proven direct-response marketing to build complete revenue-generating systems.
            </p>
            <p>
              We speak fluent English and Spanish, which means we can unlock markets your competitors can't touch. Everything we build is custom. No templates, no recycled campaigns. We're selective about who we work with — we want businesses that are established, have skin in the game, and are ready to scale.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {credentials.map((c) => (
              <span key={c} className="rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground">
                {c}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Button className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-8 py-5 font-bold shadow-lg shadow-secondary/20 hover:scale-105 transition-all">
              Want to Work Together?
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 relative"
        >
          <div className="absolute -inset-6 bg-primary/10 rounded-3xl blur-3xl -z-10" />
          <div className="rounded-2xl border-4 border-border aspect-[3/4] w-full max-w-md mx-auto flex items-center justify-center shadow-2xl overflow-hidden bg-muted">
            <span className="text-muted-foreground text-lg">Photo</span>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">📍 Commerce City, Colorado 80022</p>
            <p className="text-sm text-muted-foreground mt-1">📞 (720) 288-7101</p>
            <p className="text-sm text-muted-foreground mt-1">✉️ hello@frostmedia.co</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
