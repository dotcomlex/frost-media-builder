import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";

const stats = [
  { value: 1900, suffix: "+", label: "Qualified Leads Generated" },
  { value: 7, suffix: "+", label: "Years in Performance Marketing" },
  { value: 15, suffix: "%", label: "Commission — Only When You Close" },
  { value: 24, suffix: "/7", label: "AI Follow-Up, Never Misses a Lead" },
];

const testimonials = [
  {
    quote: "Before Frost Media, I was buying shared leads from HomeAdvisor and wasting half my budget on tire-kickers. Now every lead is mine, the AI qualifies them before I even pick up the phone, and I'm booking 3-4 estimates a week consistently.",
    name: "J. Rodriguez",
    company: "14er Renovations, Commerce City, CO",
    tag: "Concrete & Renovation",
  },
  {
    quote: "1,900+ messenger leads in a single month. Five daily appointments booked on autopilot. Alex's system literally runs while I'm with clients.",
    name: "Owner",
    company: "Divas Beauty, Denver, CO",
    tag: "Beauty Services",
  },
  {
    quote: "The AI chatbot books my estimates for me. I just show up, give the quote, and close. The follow-up is automatic. It's like having a full-time assistant that never sleeps.",
    name: "Jose",
    company: "Jose's Painting, Denver, CO",
    tag: "Painting",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary font-mono">
      {display.toLocaleString()}{suffix}
    </span>
  );
}

const ResultsSection = () => (
  <section id="results" className="py-20 md:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">RESULTS</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Numbers Don't Lie
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <AnimatedCounter value={s.value} suffix={s.suffix} />
            <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
          >
            <Quote className="h-8 w-8 text-primary/40 mb-4" />
            <p className="text-muted-foreground mb-6 leading-relaxed">"{t.quote}"</p>
            <div>
              <p className="text-foreground font-semibold text-sm">— {t.name}</p>
              <p className="text-muted-foreground text-sm">{t.company}</p>
              <span className="inline-block mt-3 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                {t.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
