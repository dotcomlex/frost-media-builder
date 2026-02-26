import { motion } from "framer-motion";
import { DollarSign, Users, Bot } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Retainers With No Accountability",
    desc: "You pay the same whether you get 50 leads or zero. The agency gets paid either way.",
  },
  {
    icon: Users,
    title: "Shared Leads = Bidding Wars",
    desc: "HomeAdvisor and Angi sell the same lead to 3-5 contractors. By the time you call, they've already booked someone else.",
  },
  {
    icon: Bot,
    title: "Slow Follow-Up Kills Deals",
    desc: "The average contractor takes 24+ hours to respond to a lead. By then, the homeowner has moved on.",
  },
];

const ProblemSection = () => (
  <section id="problem" className="py-20 md:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">THE PROBLEM</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Most Agencies Charge You Whether They Deliver or Not
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mt-6">
          You're paying $2,000-5,000/month in retainers to agencies that send you shared leads, recycled creative, and monthly reports full of metrics that don't mean anything. Meanwhile, your phone isn't ringing and your schedule has gaps.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(var(--frost-green)/0.05)] transition-all duration-300 group"
          >
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
            <div className="bg-primary/10 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4">
              <p.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{p.title}</h3>
            <p className="text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
