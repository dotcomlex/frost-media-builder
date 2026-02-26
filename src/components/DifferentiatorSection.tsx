import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const otherAgency = [
  "$2,000-5,000/month regardless of results",
  "Shared leads sold to multiple contractors",
  "Generic ad templates and recycled creative",
  "Monthly reports nobody reads",
  "6-12 month contracts",
  "You carry all the risk",
];

const frostMedia = [
  "I only earn when you close jobs",
  "100% exclusive leads — yours only",
  "Custom campaigns built from scratch",
  "AI systems that respond in seconds",
  "Full transparency on every lead",
  "We both win or nobody pays",
];

const DifferentiatorSection = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(to bottom, hsl(var(--frost-surface)), hsl(142 40% 8%), hsl(var(--frost-surface)))",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(circle at 50% 50%, hsl(var(--frost-green) / 0.06) 0%, transparent 60%)",
      }}
    />

    <div className="relative z-10 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">WHY FROST MEDIA</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
          I Only Get Paid When You Get Paid
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
          15% commission on closed jobs from my leads. That's it. If my marketing doesn't make you money, I don't make money. Our incentives are 100% aligned.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8"
        >
          <h3 className="text-destructive font-heading font-semibold text-xl mb-6">The Retainer Model</h3>
          <ul className="space-y-4">
            {otherAgency.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-primary/5 border border-primary/20 rounded-2xl p-8 relative glow-green"
        >
          <span className="absolute top-4 right-4 rounded-full bg-primary text-primary-foreground text-xs font-bold px-3 py-1">
            RECOMMENDED
          </span>
          <h3 className="text-primary font-heading font-semibold text-xl mb-6">The Performance Model</h3>
          <ul className="space-y-4">
            {frostMedia.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="border-l-2 border-primary pl-6 mt-12 max-w-2xl mx-auto"
      >
        <p className="text-lg text-muted-foreground italic">
          "Think about it — would I build AI systems, write custom ad copy, and optimize your campaigns every day if I wasn't confident it would work?"
        </p>
      </motion.div>
    </div>
  </section>
);

export default DifferentiatorSection;
