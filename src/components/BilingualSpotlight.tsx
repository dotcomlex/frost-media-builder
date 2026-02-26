import { motion } from "framer-motion";
import { Globe, Bot } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Unlock the Latino Market",
    desc: "Fluent English and Spanish campaigns. Ads, landing pages, AI chatbots, and customer service in both languages. Reach markets your competitors can't touch.",
    stat: "45% of Denver Metro is Hispanic/Latino",
    statSub: "Are you reaching them?",
  },
  {
    icon: Bot,
    title: "24/7 Lead Qualification & Booking",
    desc: "AI responds in under 60 seconds, qualifies leads, answers questions, and books appointments. Natural conversation flow in English or Spanish.",
    stat: "< 60 sec response time",
    statSub: "24/7/365 availability",
  },
];

const BilingualSpotlight = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
    <div className="max-w-5xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <f.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-heading mb-3">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{f.desc}</p>
            <div className="border-t border-border pt-4">
              <p className="text-lg font-bold text-secondary font-heading">{f.stat}</p>
              <p className="text-sm text-muted-foreground">{f.statSub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BilingualSpotlight;
