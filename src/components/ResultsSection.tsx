import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Before Frost Media, we were burning money on Angi leads and getting nowhere. Now we have a predictable system that generates qualified leads every single day. Best decision we made for our business.",
    name: "Juan Rodriguez",
    company: "14er Renovations",
    tag: "Concrete & Driveways",
    platform: "Google",
  },
  {
    quote: "1,900 qualified leads in one month. I still can't believe it. The AI system handles everything in English and Spanish — I just show up to appointments that are already pre-sold.",
    name: "Maria",
    company: "Divas Beauty Studio",
    tag: "Beauty Services",
    platform: "Google",
  },
  {
    quote: "Christian and his team built us a complete infrastructure — ads, AI follow-up, CRM, everything. We finally have visibility into our marketing ROI. The bilingual capability opened up a whole new customer base.",
    name: "Jose",
    company: "Jose's Painting",
    tag: "Residential Painting",
    platform: "Clutch",
  },
];

const ResultsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-4">Client Voices</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Desktop: show all 3 */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-frost-white border border-border rounded-2xl p-8"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.company}</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">{t.tag}</span>
                <span className="text-xs text-muted-foreground">{t.platform}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-frost-white border border-border rounded-2xl p-6"
          >
            <Quote className="h-6 w-6 text-primary/20 mb-3" />
            <p className="text-foreground leading-relaxed mb-4 text-sm">"{testimonials[active].quote}"</p>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-3.5 w-3.5 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-foreground font-semibold text-sm">{testimonials[active].name}</p>
            <p className="text-muted-foreground text-sm">{testimonials[active].company}</p>
          </motion.div>
          <div className="flex justify-center gap-4 mt-6 items-center">
            <button onClick={() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length)} className="p-2 rounded-full border border-border hover:bg-muted">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-primary w-6" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={() => setActive((p) => (p + 1) % testimonials.length)} className="p-2 rounded-full border border-border hover:bg-muted">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
