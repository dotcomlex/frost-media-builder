import { motion } from "framer-motion";
import { Unlink, Clock, Battery } from "lucide-react";

const problems = [
  {
    icon: Unlink,
    title: "Winging It Every Day",
    body: "Taking calls manually. Following up when you remember. Losing track of leads in text threads and voicemails. No CRM, no automation, no visibility into your pipeline.",
  },
  {
    icon: Clock,
    title: "Stuck in 2015",
    body: "Relying on word-of-mouth and shared leads. Paying for ads with zero data to prove ROI. Watching younger companies steal market share with better technology.",
  },
  {
    icon: Battery,
    title: "Trading Time for Money",
    body: "Spending nights responding to leads. Manually booking estimates. Re-explaining the same services 100 times. The business runs only when you're working.",
  },
];

const WhyFailSection = () => (
  <section className="py-16 md:py-24 lg:py-32 bg-[#0A0E1A] bg-grid-dark relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-frost-blue mb-4">The Problem</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
          Most Businesses Fail Because They're Running Blind
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mt-6">
          No lead tracking. No follow-up systems. No idea which marketing works. Relying on outdated methods while competitors use AI and automation to dominate.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-6">
              <p.icon className="h-7 w-7 text-coral" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-heading">{p.title}</h3>
            <p className="text-slate-400 leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyFailSection;
