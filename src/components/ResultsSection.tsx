import { motion } from "framer-motion";
import { Sparkles, Scissors, HardHat, Paintbrush, TrendingUp, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

const bigMetrics = [
  { icon: Users, number: "500+", label: "Leads Generated Monthly" },
  { icon: DollarSign, number: "< $15", label: "Average Cost Per Lead" },
  { icon: TrendingUp, number: "3X", label: "Average Revenue Growth" },
];

const cases = [
  {
    icon: Sparkles,
    industry: "Beauty & Wellness",
    service: "Meta Ads + AI",
    metric: "1,900 Leads in 30 Days",
    desc: "Divas Beauty Studio needed consistent bookings. We launched Meta ads with AI instant response. Result: 5+ appointments booked daily on autopilot.",
    link: "/results/divas-beauty",
  },
  {
    icon: HardHat,
    industry: "Concrete & Driveways",
    service: "Lead Gen + AI",
    metric: "$180K Revenue Increase",
    desc: "14er Renovations was tired of shared Angi leads. We built an exclusive lead system with AI follow-up. 6-month revenue jumped $180K.",
    link: "/results/14er-renovations",
  },
  {
    icon: Paintbrush,
    industry: "Residential Painting",
    service: "AI Automation",
    metric: "78% Close Rate",
    desc: "Jose's Painting needed better lead quality. Our AI pre-qualifies leads before Jose calls. Close rate went from 40% to 78%.",
    link: "/results/joses-painting",
  },
];

const ResultsSection = () => (
  <section className="bg-card py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-3">Proven Results</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          Real Campaigns, Real Revenue
        </h2>
      </motion.div>

      {/* Big Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {bigMetrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <m.icon className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-4xl md:text-5xl font-bold text-secondary">{m.number}</p>
            <p className="text-base text-muted-foreground mt-2">{m.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((c, i) => (
          <motion.div
            key={c.industry}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl group transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <c.icon className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm text-primary font-medium">{c.industry}</p>
            <p className="text-xs text-muted-foreground mb-3">{c.service}</p>
            <h3 className="text-2xl font-bold text-foreground mb-3">{c.metric}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
            <Link to={c.link} className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Read Case Study →
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link to="/results" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-1 text-lg">
          See All Case Studies →
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ResultsSection;
