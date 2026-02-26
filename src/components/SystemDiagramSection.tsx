import { motion } from "framer-motion";
import { Megaphone, FileText, MessageSquare, Brain, CalendarCheck, Bell, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Megaphone, label: "Facebook Ad", sub: "Targeted campaign" },
  { icon: FileText, label: "Landing Page", sub: "Conversion-optimized" },
  { icon: MessageSquare, label: "Lead Capture", sub: "Form submission" },
  { icon: Brain, label: "AI Chatbot", sub: "Instant qualification" },
  { icon: CalendarCheck, label: "Calendar Booking", sub: "Auto-scheduled" },
  { icon: Bell, label: "Reminders", sub: "SMS follow-up" },
  { icon: CheckCircle2, label: "Contractor Shows Up", sub: "Ready to close" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const SystemDiagramSection = () => (
  <section id="systems" className="py-16 md:py-24 lg:py-32 bg-surface-warm">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-4">How The System Works</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          From Click to Close: Fully Automated
        </h2>
      </motion.div>

      {/* Flow diagram */}
      <div className="relative">
        {/* Desktop horizontal flow */}
        <div className="hidden lg:flex items-start justify-between gap-2 relative">
          {/* Connecting line */}
          <svg className="absolute top-10 left-0 right-0 w-full h-4 z-0" preserveAspectRatio="none">
            <line
              x1="6%"
              y1="50%"
              x2="94%"
              y2="50%"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              strokeDasharray="8 6"
              className="animate-flow-dash"
            />
          </svg>

          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative z-10 flex flex-col items-center text-center flex-1 group"
            >
              <div className="w-20 h-20 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center mb-3 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">{step.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{step.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden flex flex-col items-center gap-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="w-full"
            >
              <div className="flex items-center gap-4 rounded-xl bg-card border border-border p-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-coral-light flex items-center justify-center shrink-0">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{step.label}</p>
                  <p className="text-xs text-muted-foreground">{step.sub}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-0.5 h-4 bg-border" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SystemDiagramSection;
