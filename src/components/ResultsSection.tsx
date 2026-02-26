import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote, Users, Clock, Lock, Award } from "lucide-react";

const stats = [
  { icon: Users, value: 1900, suffix: "+", label: "Qualified Leads Generated" },
  { icon: Clock, value: 60, prefix: "<", suffix: "s", label: "Average AI Response Time" },
  { icon: Lock, value: 100, suffix: "%", label: "Exclusive - Never Shared" },
  { icon: Award, value: 7, suffix: "+", label: "Years Performance Marketing" },
];

const testimonials = [
  {
    quote: "Before Frost Media, we were buying shared leads from Angi and wasting half our budget on tire-kickers. Now every lead is ours, the AI qualifies them before we even pick up the phone, and we're booking 3-4 estimates consistently every week.",
    name: "Juan Rodriguez",
    company: "14er Renovations, Commerce City, CO",
    tag: "Concrete & Renovation",
  },
  {
    quote: "1,900+ qualified leads in one month. Five daily appointments booked automatically. The system literally runs while I'm with clients. I've never seen anything like it.",
    name: "Maria",
    company: "Divas Beauty Studio, Denver, CO",
    tag: "Beauty Services",
  },
  {
    quote: "The AI books my estimates for me. I just show up and close. It's like having a full-time assistant who never sleeps and never misses a lead.",
    name: "Jose",
    company: "Jose's Painting, Denver, CO",
    tag: "Painting",
  },
];

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
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
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-gradient-frost font-heading">
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

const ResultsSection = () => (
  <section id="results" className="py-16 md:py-24 lg:py-32 bg-background">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-coral mb-4">Results</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Numbers from Real Clients
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <s.icon className="h-6 w-6 text-frost-blue mx-auto mb-3" />
            <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
            <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
          </motion.div>
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
            className="bg-muted border border-border rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 relative"
          >
            <Quote className="h-8 w-8 text-frost-blue/30 mb-4" />
            <p className="text-muted-foreground mb-6 leading-relaxed">"{t.quote}"</p>
            <div>
              <p className="text-foreground font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.company}</p>
              <span className="inline-block mt-3 rounded-full bg-frost-blue/10 text-frost-blue px-3 py-1 text-xs font-medium">
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
