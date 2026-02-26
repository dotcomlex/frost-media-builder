import { motion } from "framer-motion";

const credentials = [
  "7+ Years Experience",
  "Bilingual (EN/ES)",
  "Denver, Colorado",
  "100+ Campaigns Launched",
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10" />
          <div className="rounded-2xl bg-card border border-border aspect-[3/4] w-full max-w-md mx-auto flex items-center justify-center">
            <span className="text-muted-foreground text-lg">Photo</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">ABOUT</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built Different, Not Corporate
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm Alex — a media buyer and marketing systems builder based in Denver, Colorado. I've spent 7+ years in the trenches of performance marketing, running campaigns across e-commerce, insurance, beauty, and home services. I'm not an agency with 50 employees and a fancy office. I'm one person who's really damn good at what I do.
            </p>
            <p>
              I started Frost Media because I got tired of watching contractors get ripped off by agencies that charge retainers and deliver nothing. The traditional model is broken — agencies get paid whether you get leads or not. I flipped the script. I only eat when you eat.
            </p>
            <p>
              I speak English and Spanish fluently, which means I can unlock markets your competitors can't touch. And I don't outsource your campaigns to some random team — I build everything myself because your business deserves that level of attention.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            {credentials.map((c) => (
              <span key={c} className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground">
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
