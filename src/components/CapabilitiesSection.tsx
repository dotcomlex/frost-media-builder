import { motion } from "framer-motion";
import { Target, Bot, Globe, Megaphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Paid Media & Advertising",
    tagline: "Your ads, engineered to print money.",
    deliverables: [
      "Meta, Instagram & Google campaigns",
      "Scroll-stopping creative production",
      "Rigorous A/B testing frameworks",
      "Deep audience research & targeting",
      "Retargeting funnels that convert",
      "Scaling strategies that actually work",
    ],
    outcome: "Stop guessing. Start scaling.",
    accent: "border-ice-blue",
    accentBg: "bg-ice-blue/10",
    accentText: "text-ice-blue",
  },
  {
    icon: Target,
    title: "Lead Generation",
    tagline: "Your pipeline, full. Every single month.",
    deliverables: [
      "Custom campaigns for any industry",
      "Geo-targeted ad delivery",
      "Full-funnel architecture",
      "CRM integration & lead routing",
      "Home services, beauty, insurance, real estate & more",
    ],
    outcome: "From empty calendar to fully booked.",
    accent: "border-secondary",
    accentBg: "bg-secondary/10",
    accentText: "text-secondary",
  },
  {
    icon: Bot,
    title: "AI-Powered Systems",
    tagline: "Your best closer — working 24/7.",
    deliverables: [
      "Custom AI agent & chatbot",
      "Instant lead response (<30 seconds)",
      "FAQ & objection handling",
      "Automated appointment booking",
      "Follow-up sequences that never forget",
      "Full CRM integration",
    ],
    outcome: "Every lead gets a response in seconds, not hours.",
    accent: "border-ice-blue",
    accentBg: "bg-ice-blue/10",
    accentText: "text-ice-blue",
  },
  {
    icon: Globe,
    title: "Web Design & Funnels",
    tagline: "Websites that sell. Not just sit there.",
    deliverables: [
      "High-converting landing pages",
      "Multi-step sales funnels",
      "Full website builds & redesigns",
      "Brand identity & visual systems",
      "Mobile-first, SEO-optimized",
    ],
    outcome: "Your digital presence becomes your best salesperson.",
    accent: "border-secondary",
    accentBg: "bg-secondary/10",
    accentText: "text-secondary",
  },
];

const CapabilitiesSection = () => (
  <section id="services" className="py-16 md:py-28 bg-frost-light">
    <div className="max-w-5xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-3">What We Build</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          Complete Marketing Infrastructure
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
          Everything your business needs to attract, convert, and close — built as one integrated system.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`bg-card rounded-2xl border border-border border-l-4 ${s.accent} p-8 md:p-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className={`w-14 h-14 rounded-xl ${s.accentBg} flex items-center justify-center shrink-0`}>
                <s.icon className={`h-7 w-7 ${s.accentText}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground font-heading">{s.title}</h3>
                <p className={`text-lg font-medium ${s.accentText} mt-1 italic`}>"{s.tagline}"</p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <ArrowRight className={`h-4 w-4 ${s.accentText} mt-0.5 shrink-0`} />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-border">
                  <p className="font-heading font-bold text-foreground text-base">
                    Outcome: <span className={s.accentText}>{s.outcome}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
