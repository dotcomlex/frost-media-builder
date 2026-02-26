import { motion } from "framer-motion";

const credentials = [
  "7+ Years Experience",
  "Bilingual (EN/ES)",
  "Denver, Colorado",
  "100+ Campaigns",
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 lg:py-32" style={{ background: "linear-gradient(135deg, hsl(24 100% 96%), hsl(37 100% 96%))" }}>
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 relative"
        >
          <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-3xl -z-10" />
          <div className="rounded-2xl bg-card border border-border aspect-[3/4] w-full max-w-md mx-auto flex items-center justify-center shadow-2xl overflow-hidden">
            <span className="text-muted-foreground text-lg">Photo</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-4">About</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
            Built by a Media Buyer, Not a Corporate Agency
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              We're Alex Luna—a performance marketer and AI systems builder based in Denver. Seven years in the trenches of direct-response advertising across e-commerce, insurance, beauty, and home services. We're not a 50-person agency with overhead and account managers. We're one person who's really good at building lead generation systems.
            </p>
            <p>
              We started Frost Media to fix what's broken in contractor marketing. Most agencies charge monthly retainers whether the phone rings or not. Most lead services sell the same contact to five different contractors. We do neither. Every lead is exclusive. Every system is custom-built. No templates, no recycled campaigns.
            </p>
            <p>
              We speak fluent English and Spanish, which means we can unlock markets your competitors can't touch. And we don't outsource your campaigns—we build everything ourselves because your business deserves that attention.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {credentials.map((c) => (
              <span key={c} className="rounded-lg border border-primary/20 bg-card px-4 py-2 text-sm font-medium text-foreground">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
