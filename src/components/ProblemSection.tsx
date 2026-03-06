import { motion } from "framer-motion";
import { Users, TrendingDown, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const problems = [
  {
    icon: Users,
    title: "Flat Sales from Shared Leads",
    desc: "HomeAdvisor and Angi sell the same lead to 5 contractors. You're paying for leads your competitors also get—and they respond faster.",
    link: "/services/lead-generation",
  },
  {
    icon: TrendingDown,
    title: "Rising Costs, Shrinking ROI",
    desc: "You're spending more on ads than ever, but your cost per lead keeps climbing. Without proper tracking, you have no idea what's working.",
    link: "/services/meta-ads",
  },
  {
    icon: Clock,
    title: "Slow Response = Lost Revenue",
    desc: "78% of customers buy from the first contractor who responds. If you're taking hours to follow up, you've already lost the job.",
    link: "/services/ai-automation",
  },
];

const ProblemSection = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-3">Tired of Wasting Money?</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight max-w-4xl mx-auto">
          Tired of Paying for Leads Your Competitors Also Get?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl transition-all"
          >
            <p.icon className="h-8 w-8 text-secondary mb-6" />
            <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
            <Link to={p.link} className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 text-sm group">
              We fix this <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
