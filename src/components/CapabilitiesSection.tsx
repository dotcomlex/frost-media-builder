import { motion } from "framer-motion";
import { useContactForm } from "@/components/ContactFormDialog";

/* ── Mini JSX illustrations per service ── */
const PhoneMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="w-10 h-16 rounded-lg border-2 border-white/30 bg-white/10 relative">
      <div className="absolute top-1 left-1 right-1 space-y-0.5">
        <div className="h-1 bg-white/30 rounded-full w-3/4" />
        <div className="h-1 bg-white/20 rounded-full w-1/2" />
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-400 border border-white/30" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-green-400 border border-white/30" />
    </div>
    <div className="absolute top-2 right-3 w-2 h-2 rounded-full bg-secondary/60 animate-pulse" />
  </div>
);

const BrowserMockup = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-20 h-14 rounded border border-white/25 bg-white/5 overflow-hidden">
      <div className="h-2.5 bg-white/10 flex items-center gap-0.5 px-1">
        <div className="w-1 h-1 rounded-full bg-red-400/70" />
        <div className="w-1 h-1 rounded-full bg-yellow-400/70" />
        <div className="w-1 h-1 rounded-full bg-green-400/70" />
      </div>
      <div className="p-1 space-y-0.5">
        <div className="h-3 bg-white/10 rounded-sm" />
        <div className="flex gap-0.5">
          <div className="h-2 flex-1 bg-white/8 rounded-sm" />
          <div className="h-2 flex-1 bg-white/8 rounded-sm" />
        </div>
      </div>
    </div>
  </div>
);

const ShoppingBagMockup = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      <div className="w-11 h-12 rounded-b-lg border-2 border-white/25 bg-white/8 relative">
        <div className="absolute -top-2 left-2 right-2 h-3 border-2 border-white/25 border-b-0 rounded-t-full" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-white/30 bg-secondary/20" />
      </div>
      <div className="absolute -right-2 -top-1 text-[8px] font-bold text-secondary bg-secondary/20 rounded-full w-4 h-4 flex items-center justify-center">3</div>
    </div>
  </div>
);

const FunnelMockup = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="flex flex-col items-center gap-0.5">
      <div className="w-16 h-2.5 bg-white/15 rounded-t" />
      <div className="w-12 h-2.5 bg-white/20" />
      <div className="w-8 h-2.5 bg-white/25" />
      <div className="w-4 h-2.5 bg-secondary/40 rounded-b" />
      <div className="w-1 h-3 bg-secondary/30" />
      <div className="w-2 h-2 rounded-full bg-secondary/50 animate-pulse" />
    </div>
  </div>
);

const ChatBubbleMockup = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="space-y-1.5 w-16">
      <div className="flex justify-end">
        <div className="h-2 w-10 bg-secondary/30 rounded-full rounded-br-sm" />
      </div>
      <div className="flex justify-start">
        <div className="h-2 w-12 bg-white/15 rounded-full rounded-bl-sm" />
      </div>
      <div className="flex justify-end">
        <div className="h-2 w-8 bg-secondary/30 rounded-full rounded-br-sm" />
      </div>
      <div className="flex justify-start">
        <div className="h-2 w-11 bg-white/15 rounded-full rounded-bl-sm" />
      </div>
    </div>
  </div>
);

const DashboardMockup = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-20 h-12 rounded border border-white/20 bg-white/5 p-1 flex gap-0.5">
      <div className="w-4 space-y-0.5">
        <div className="h-1 bg-white/15 rounded-full" />
        <div className="h-1 bg-white/10 rounded-full w-3" />
        <div className="h-1 bg-secondary/30 rounded-full w-2" />
      </div>
      <div className="flex-1 flex items-end gap-0.5 pb-0.5">
        <div className="w-1.5 bg-white/15 rounded-t h-3" />
        <div className="w-1.5 bg-white/20 rounded-t h-5" />
        <div className="w-1.5 bg-secondary/40 rounded-t h-7" />
        <div className="w-1.5 bg-white/15 rounded-t h-4" />
        <div className="w-1.5 bg-white/20 rounded-t h-6" />
      </div>
    </div>
  </div>
);

const services = [
  {
    title: "Social Media Advertising",
    desc: "Strategic Meta, Instagram & TikTok campaigns that fill your pipeline with qualified leads daily.",
    gradient: "from-[hsl(30,78%,53%)] to-[hsl(33,70%,58%)]",
    Illustration: PhoneMockup,
  },
  {
    title: "Website Design & Dev",
    desc: "Premium, conversion-optimized websites that make your brand unforgettable on every device.",
    gradient: "from-[hsl(213,80%,50%)] to-[hsl(213,60%,65%)]",
    Illustration: BrowserMockup,
  },
  {
    title: "E-Commerce & Shopify",
    desc: "Full store buildouts — from product pages to checkout flows — designed to maximize revenue.",
    gradient: "from-[hsl(160,84%,39%)] to-[hsl(160,60%,50%)]",
    Illustration: ShoppingBagMockup,
  },
  {
    title: "Lead Generation",
    desc: "End-to-end pipeline management from first click to closed deal. Every lead tracked and nurtured.",
    gradient: "from-[hsl(0,84%,60%)] to-[hsl(15,80%,55%)]",
    Illustration: FunnelMockup,
  },
  {
    title: "Conversational AI",
    desc: "AI voice callers, SMS agents & chatbots that respond instantly — trained on your brand, 24/7.",
    gradient: "from-[hsl(213,80%,50%)] to-[hsl(250,60%,60%)]",
    Illustration: ChatBubbleMockup,
  },
  {
    title: "CRM & Automation",
    desc: "All-in-one pipeline management with automated follow-ups, lead routing & full visibility.",
    gradient: "from-[hsl(33,70%,58%)] to-[hsl(30,78%,53%)]",
    Illustration: DashboardMockup,
  },
];

const CapabilitiesSection = () => {
  const { openForm } = useContactForm();

  return (
    <section id="services" className="py-14 md:py-20 bg-alpine-dark">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="font-mono-tech text-[10px] tracking-widest uppercase text-secondary mb-2">What We Do</p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-dark tracking-tight">
            Full-Stack Growth Infrastructure
          </h2>
          <p className="text-text-on-dark/45 text-sm mt-3 max-w-xl mx-auto">
            Everything your business needs to dominate — from ads to AI to automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onClick={openForm}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-400"
            >
              {/* Illustration header */}
              <div className={`h-20 bg-gradient-to-br ${s.gradient} opacity-25 group-hover:opacity-35 transition-opacity duration-400 relative`}>
                <div className="absolute inset-0 opacity-80">
                  <s.Illustration />
                </div>
              </div>

              <div className="px-5 pb-5 pt-4">
                <h3 className="text-sm font-bold text-text-on-dark font-heading mb-1.5">{s.title}</h3>
                <p className="text-text-on-dark/45 text-xs leading-relaxed">{s.desc}</p>
                <div className="mt-3 flex justify-end">
                  <span className="text-text-on-dark/20 group-hover:text-secondary transition-colors text-[10px] font-mono-tech tracking-wider uppercase">
                    Learn more →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
