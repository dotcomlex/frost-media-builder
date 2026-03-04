import { motion } from "framer-motion";
import { Megaphone, Bot, Layers, Phone, MessageSquare, BrainCircuit, BarChart3, Zap, Users, Clock, TrendingUp, PieChart } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Megaphone,
    title: "Custom Ad Campaigns",
    subtitle: "Attract the Right Customers",
    desc: "We build and manage Meta ad campaigns tailored to your market, audience, and goals. Every dollar is tracked, tested, and optimized weekly for maximum ROI.",
    details: [
      { icon: BarChart3, label: "Weekly optimization & reporting" },
      { icon: Zap, label: "Scroll-stopping creative" },
      { icon: Users, label: "Hyper-targeted audiences" },
    ],
    gradient: "from-primary/20 to-primary/5",
    accentColor: "text-primary",
    iconBg: "bg-primary/15",
  },
  {
    num: "02",
    icon: Bot,
    title: "AI-Powered Response System",
    subtitle: "Engage Leads Instantly — 24/7",
    desc: "Your business never sleeps. Our cutting-edge AI suite handles every inbound lead instantly — no missed calls, no slow follow-ups, no lost revenue. Replace 2-3 employees at a fraction of the cost.",
    details: [
      { icon: Phone, label: "AI Voice Callers — qualify & book leads" },
      { icon: MessageSquare, label: "AI SMS Agents — instant text follow-ups" },
      { icon: BrainCircuit, label: "AI Chatbots — <30s website responses" },
    ],
    gradient: "from-accent/20 to-accent/5",
    accentColor: "text-accent",
    iconBg: "bg-accent/15",
  },
  {
    num: "03",
    icon: Layers,
    title: "Revenue Infrastructure",
    subtitle: "Convert & Close Automatically",
    desc: "Funnels, landing pages, CRM setup, and automated follow-ups that turn raw leads into closed deals. Everything connected, everything measured — so you know exactly what's working.",
    details: [
      { icon: TrendingUp, label: "Conversion-optimized funnels" },
      { icon: Clock, label: "Automated nurture sequences" },
      { icon: PieChart, label: "Full pipeline visibility" },
    ],
    gradient: "from-success/20 to-success/5",
    accentColor: "text-success",
    iconBg: "bg-success/15",
  },
];

const SystemBreakdownSection = () => (
  <section className="py-16 md:py-24 bg-frost-light">
    <div className="max-w-5xl mx-auto px-4 md:px-8">
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
        <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
          Three pillars working together to fill your pipeline and grow your business.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical connector line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 z-0" />

        {steps.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-16 last:mb-0 ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Step number on the timeline */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-background border-2 border-ice-blue/30 items-center justify-center shadow-md">
                <span className="font-mono-tech text-lg font-bold text-ice-blue">{step.num}</span>
              </div>

              {/* Content side */}
              <div className={`flex-1 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                {/* Mobile step number */}
                <div className="md:hidden flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-background border-2 border-ice-blue/30 flex items-center justify-center">
                    <span className="font-mono-tech text-sm font-bold text-ice-blue">{step.num}</span>
                  </div>
                  <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue">{step.subtitle}</p>
                </div>
                <p className={`hidden md:block font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-2`}>{step.subtitle}</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{step.desc}</p>
              </div>

              {/* Visual card side */}
              <div className="flex-1 w-full md:w-auto">
                <div className={`bg-background rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow ${isEven ? 'md:ml-16' : 'md:mr-16'}`}>
                  <div className={`w-14 h-14 rounded-xl ${step.iconBg} flex items-center justify-center mb-5`}>
                    <step.icon className={`h-7 w-7 ${step.accentColor}`} />
                  </div>
                  <div className="space-y-3">
                    {step.details.map((d) => (
                      <div key={d.label} className="flex items-center gap-3 text-sm">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center shrink-0`}>
                          <d.icon className={`h-4 w-4 ${step.accentColor}`} />
                        </div>
                        <span className="text-foreground/80">{d.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SystemBreakdownSection;
