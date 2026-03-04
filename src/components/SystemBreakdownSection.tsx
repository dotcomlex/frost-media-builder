import { motion } from "framer-motion";
import { Megaphone, Bot, Layers, Phone, MessageSquare, BrainCircuit, BarChart3, Zap, Users, TrendingUp, Clock, PieChart } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Megaphone,
    title: "Custom Ad Campaigns",
    subtitle: "Attract the Right Customers",
    desc: "We build and manage Meta ad campaigns tailored to your market, audience, and goals. Every dollar is tracked, tested, and optimized weekly so your cost per lead drops while your pipeline grows.",
    pills: [
      { icon: BarChart3, label: "Weekly optimization" },
      { icon: Zap, label: "Scroll-stopping creative" },
      { icon: Users, label: "Hyper-targeted audiences" },
    ],
    accentColor: "text-primary",
    pillBg: "bg-primary/10",
    numColor: "text-primary/[0.06]",
  },
  {
    num: "02",
    icon: Bot,
    title: "AI-Powered Response System",
    subtitle: "Engage Leads Instantly — 24/7",
    desc: "Your business never sleeps. Our AI suite handles every inbound lead the moment they come in — qualifying, responding, and booking automatically. No missed calls, no slow follow-ups, no lost revenue.",
    pills: [
      { icon: Phone, label: "AI Voice Callers" },
      { icon: MessageSquare, label: "AI SMS Agents" },
      { icon: BrainCircuit, label: "AI Chatbots" },
    ],
    accentColor: "text-accent",
    pillBg: "bg-accent/10",
    numColor: "text-accent/[0.06]",
  },
  {
    num: "03",
    icon: Layers,
    title: "Revenue Infrastructure",
    subtitle: "Convert & Close Automatically",
    desc: "Funnels, landing pages, CRM, and automated follow-ups that turn raw leads into closed deals. Everything connected, everything measured — so you know exactly what's driving growth.",
    pills: [
      { icon: TrendingUp, label: "Optimized funnels" },
      { icon: Clock, label: "Automated nurture" },
      { icon: PieChart, label: "Full visibility" },
    ],
    accentColor: "text-success",
    pillBg: "bg-success/10",
    numColor: "text-success/[0.06]",
  },
];

const SystemBreakdownSection = () => (
  <section className="bg-frost-light overflow-hidden">
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">The System</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          How We Build Your Revenue Machine
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-xl mx-auto">
          Three pillars working together to fill your pipeline and grow your business.
        </p>
      </motion.div>

      {/* Immersive stacked sections */}
      <div className="space-y-12 md:space-y-20">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="relative"
          >
            {/* Giant watermark number */}
            <span
              className={`absolute -top-4 md:-top-8 left-0 font-heading text-[8rem] md:text-[12rem] font-black leading-none select-none pointer-events-none ${step.numColor}`}
            >
              {step.num}
            </span>

            <div className="relative z-10">
              {/* Subtitle label */}
              <p className={`font-mono-tech text-xs tracking-widest uppercase ${step.accentColor} mb-2`}>
                {step.subtitle}
              </p>

              {/* Title + icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${step.pillBg} flex items-center justify-center shrink-0`}>
                  <step.icon className={`h-5 w-5 ${step.accentColor}`} />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{step.title}</h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-6">
                {step.desc}
              </p>

              {/* Horizontal pills */}
              <div className="flex flex-wrap gap-2">
                {step.pills.map((pill) => (
                  <div
                    key={pill.label}
                    className={`flex items-center gap-2 ${step.pillBg} rounded-full px-4 py-2`}
                  >
                    <pill.icon className={`h-4 w-4 ${step.accentColor}`} />
                    <span className="text-foreground/80 text-sm font-medium">{pill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemBreakdownSection;
