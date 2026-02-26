import { motion } from "framer-motion";
import { Target, Bot, Calendar, Layout, Filter, BarChart3 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const capabilities = [
  {
    title: "Direct-Response Meta Campaigns",
    description: "Custom Facebook and Instagram ads built from scratch. Not templates. Real campaigns with A/B tested copy, creative, and targeting that speaks your customer's language—in English and Spanish.",
    tags: ["Facebook", "Instagram", "A/B Testing", "Bilingual"],
    icon: Target,
    size: "large" as const,
    featured: true,
  },
  {
    title: "AI-Powered Follow-Up",
    description: "The second a lead comes in, our AI responds via text. Qualifies them. Answers questions. Books the estimate. All in natural, conversational language while you're on the job site.",
    tags: ["GoHighLevel", "SMS Automation", "Instant Response"],
    icon: Bot,
    size: "tall" as const,
  },
  {
    title: "Appointment Scheduling on Autopilot",
    description: "From ad click to calendar event without lifting a finger. Leads are qualified, scheduled, reminded, and no-show recovery runs automatically.",
    tags: ["Auto-Scheduling", "CRM Integration", "Smart Reminders"],
    icon: Calendar,
    size: "wide" as const,
    warm: true,
  },
  {
    title: "Custom Landing Pages",
    description: "High-converting pages designed for your specific services and service area. Mobile-first, fast-loading, conversion-optimized.",
    tags: [],
    icon: Layout,
    size: "small" as const,
  },
  {
    title: "24/7 Lead Screening",
    description: "Our AI asks the right questions, filters out tire-kickers, and only books qualified homeowners ready to get quotes.",
    tags: [],
    icon: Filter,
    size: "small" as const,
    glow: true,
  },
  {
    title: "Real-Time Reporting",
    description: "See every lead, conversation, and appointment in your dedicated dashboard. Full transparency on what's working.",
    tags: [],
    icon: BarChart3,
    size: "small" as const,
  },
];

const CapabilitiesSection = () => (
  <section id="capabilities" className="py-16 md:py-24 lg:py-32 bg-card">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <motion.div {...fadeInUp}>
        <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-4">Capabilities</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          The Complete Lead Generation Stack
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mt-4">
          We don't just run ads. We build end-to-end systems—from first click to booked appointment—powered by AI that never sleeps.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16">
        {/* Large featured card */}
        <motion.div
          {...fadeInUp}
          className="md:col-span-2 lg:row-span-2 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-primary to-secondary text-primary-foreground hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold mb-3">{capabilities[0].title}</h3>
          <p className="text-white/80 text-base leading-relaxed mb-6">{capabilities[0].description}</p>
          <div className="flex flex-wrap gap-2">
            {capabilities[0].tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Tall card */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:row-span-2 rounded-2xl p-6 md:p-8 bg-card border-t-4 border-t-primary border border-border hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-coral-light flex items-center justify-center mb-6">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">{capabilities[1].title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">{capabilities[1].description}</p>
          <div className="flex flex-wrap gap-2">
            {capabilities[1].tags.map((tag) => (
              <span key={tag} className="rounded-full bg-coral-light text-primary px-3 py-1 text-xs font-medium">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Small cards */}
        {capabilities.slice(3).map((cap, i) => (
          <motion.div
            key={cap.title}
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
            className={`rounded-2xl p-6 md:p-8 border border-border hover:scale-[1.02] transition-transform duration-300 ${
              cap.glow ? "bg-card shadow-lg shadow-primary/5" : "bg-surface-warm"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-coral-light flex items-center justify-center mb-4">
              <cap.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">{cap.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Wide amber card */}
      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 md:mt-6 rounded-2xl p-6 md:p-8 bg-amber-light border border-secondary/20 hover:scale-[1.01] transition-transform duration-300"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
            <Calendar className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{capabilities[2].title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">{capabilities[2].description}</p>
          </div>
          <div className="flex flex-wrap gap-2 md:ml-auto shrink-0">
            {capabilities[2].tags.map((tag) => (
              <span key={tag} className="rounded-full bg-secondary/15 text-secondary px-3 py-1 text-xs font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CapabilitiesSection;
