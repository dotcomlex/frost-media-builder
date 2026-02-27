import { motion } from "framer-motion";
import { Phone, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Strategy Call",
    desc: "We learn your business, your goals, and your market. No fluff — just a clear roadmap to results.",
  },
  {
    num: "02",
    icon: Wrench,
    title: "We Build Your System",
    desc: "Custom ads, AI automation, and funnels — all integrated into one revenue-driving machine.",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "You Scale",
    desc: "Leads flow in, your calendar fills up, revenue grows. We optimize every week so it only gets better.",
  },
];

const ProcessSection = () => (
  <section className="py-16 md:py-24 bg-alpine-dark relative overflow-hidden">
    <div className="absolute inset-0 bg-frost-pattern opacity-30" />
    <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">The Process</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark tracking-tight">
          How It Works
        </h2>
        <p className="text-text-on-dark/60 text-lg mt-4 max-w-xl mx-auto">
          From first call to fully booked — here's exactly what happens.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* connecting line on desktop */}
        <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-ice-blue/50 via-secondary/50 to-ice-blue/50" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="w-14 h-14 rounded-full bg-ice-blue/15 border-2 border-ice-blue/40 flex items-center justify-center mx-auto mb-5 relative z-10 backdrop-blur-sm">
              <step.icon className="h-6 w-6 text-ice-blue" />
            </div>
            <span className="font-mono-tech text-xs text-ice-blue/50 tracking-widest">{step.num}</span>
            <h3 className="font-heading text-xl font-bold text-text-on-dark mt-2">{step.title}</h3>
            <p className="text-text-on-dark/60 text-sm mt-3 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
