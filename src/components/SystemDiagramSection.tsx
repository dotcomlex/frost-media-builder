import { motion, useInView, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const tabs = ["Home Services", "Beauty & Wellness", "E-commerce", "Professional Services"] as const;

type TabKey = typeof tabs[number];

interface CaseStudy {
  tag: string;
  metric: string;
  metricNum: number;
  metricSuffix: string;
  title: string;
  desc: string;
  quote: string;
  author: string;
}

const caseStudies: Record<TabKey, CaseStudy[]> = {
  "Home Services": [
    {
      tag: "Concrete & Renovation",
      metric: "1,900+",
      metricNum: 1900,
      metricSuffix: "+",
      title: "Scaling a Denver Concrete Company with AI Lead Systems",
      desc: "14er Renovations needed to stop relying on shared Angi leads. We built a complete AI-powered system that generates, qualifies, and books estimates automatically.",
      quote: "Before Frost Media, we were wasting budget on shared leads. Now every lead is ours, the AI qualifies them instantly, and we're booking consistently.",
      author: "Juan Rodriguez, Owner",
    },
    {
      tag: "Painting",
      metric: "78%",
      metricNum: 78,
      metricSuffix: "%",
      title: "AI-Powered Lead Qualification for Denver Painter",
      desc: "Jose's Painting was spending hours qualifying leads manually. Our AI system pre-qualifies before Jose even picks up the phone.",
      quote: "The AI books estimates for me. I just show up and close. It's like having a full-time assistant that never sleeps.",
      author: "Jose, Owner",
    },
    {
      tag: "HVAC",
      metric: "$120K",
      metricNum: 120,
      metricSuffix: "K",
      title: "Revenue Growth Through Bilingual Campaigns",
      desc: "Expanded reach into Spanish-speaking markets with parallel EN/ES campaigns, doubling their serviceable customer base in Denver.",
      quote: "We had no idea how much business we were missing. Frost Media opened up a completely new market for us.",
      author: "Marco, Operations Manager",
    },
  ],
  "Beauty & Wellness": [
    {
      tag: "Beauty Services",
      metric: "$85K",
      metricNum: 85,
      metricSuffix: "K",
      title: "Doubling Beauty Studio Revenue with Automated Booking",
      desc: "Divas Beauty Studio was manually responding to leads and missing opportunities. We implemented AI follow-up and automated scheduling in both English and Spanish.",
      quote: "1,900 messenger leads in one month. Five daily appointments booked automatically. The system runs while I'm with clients.",
      author: "Maria, Owner",
    },
  ],
  "E-commerce": [
    {
      tag: "Online Retail",
      metric: "340%",
      metricNum: 340,
      metricSuffix: "%",
      title: "ROAS Improvement for Denver E-commerce Brand",
      desc: "Rebuilt their ad infrastructure from scratch with proper tracking, creative testing, and audience segmentation.",
      quote: "Finally, we can see exactly which ads drive revenue. The clarity alone was worth it.",
      author: "Client, E-commerce Owner",
    },
  ],
  "Professional Services": [
    {
      tag: "Insurance",
      metric: "2.4x",
      metricNum: 240,
      metricSuffix: "%",
      title: "Lead Volume Growth for Insurance Agency",
      desc: "Built AI qualification system for a Denver insurance agency, filtering high-intent buyers from casual inquiries.",
      quote: "We went from chasing every lead to only talking to people ready to buy. Game changer.",
      author: "Client, Agency Owner",
    },
  ],
};

function AnimatedMetric({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-gradient-amber font-heading">
      {display.toLocaleString()}{suffix}
    </span>
  );
}

const SystemDiagramSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Home Services");

  return (
    <section id="work" className="py-16 md:py-24 lg:py-28 bg-slate-dark text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-4">Proven Results</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Real Campaigns, Real Revenue
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Case Study Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies[activeTab].map((cs, i) => (
            <div key={i} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-all">
              <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">{cs.tag}</span>
              <AnimatedMetric value={cs.metricNum} suffix={cs.metricSuffix} />
              <h3 className="text-xl font-bold mt-4 font-heading">{cs.title}</h3>
              <p className="text-primary-foreground/70 mt-3 leading-relaxed text-sm">{cs.desc}</p>
              <blockquote className="border-l-2 border-primary pl-4 mt-4 text-primary-foreground/80 italic text-sm">
                "{cs.quote}"
              </blockquote>
              <p className="text-primary-foreground/50 text-xs mt-2">— {cs.author}</p>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-14">
          <p className="text-xl font-heading font-bold">Want Results Like These?</p>
          <Button className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-10 py-6 text-lg font-bold shadow-xl shadow-secondary/20 hover:scale-105 transition-all mt-6">
            Book Your Strategy Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SystemDiagramSection;
