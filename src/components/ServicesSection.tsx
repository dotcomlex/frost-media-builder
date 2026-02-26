import { motion } from "framer-motion";
import { Target, Bot, CalendarCheck, Layout } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Meta Ads That Actually Convert",
    desc: "Custom Facebook and Instagram campaigns built from scratch. Not templates. Not boosted posts. Real direct-response campaigns with ad copy that speaks your customer's language. I test hooks, angles, and offers until we find what prints.",
    tags: ["Facebook Ads", "Instagram Ads", "Retargeting", "A/B Testing"],
  },
  {
    icon: Bot,
    title: "AI-Powered Lead Follow-Up",
    desc: "The second a lead comes in, my AI system responds instantly via text. It qualifies them, answers questions, handles objections, and books the estimate — all in a natural, conversational tone. No more missed leads at 2am.",
    tags: ["AI Chatbots", "SMS Automation", "24/7 Response", "GoHighLevel"],
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking on Autopilot",
    desc: "From ad click to booked appointment without you lifting a finger. Leads are qualified, scheduled, and reminded automatically. You just show up and close.",
    tags: ["Auto-Scheduling", "Reminders", "No-Show Recovery", "CRM"],
  },
  {
    icon: Layout,
    title: "Landing Pages & Funnels",
    desc: "High-converting landing pages designed specifically for your service area. Mobile-first, fast-loading, and built to turn clicks into calls. Not cookie-cutter templates — custom pages that match your campaigns.",
    tags: ["Custom Design", "Mobile-First", "Conversion Optimized", "Bilingual"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-card">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">THE SOLUTION</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          A Lead Gen System That Pays for Itself
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mt-4">
          I don't just run ads. I build complete systems — from the first click to the booked appointment — powered by AI that works while you sleep.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-secondary/50 border border-border rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="bg-primary/10 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-6">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground mb-6">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
