import { motion } from "framer-motion";

const caseStudies = [
  {
    metric: "1,900+",
    label: "Leads in 30 Days",
    title: "Denver Beauty Studio — AI-Powered Booking",
    desc: "Implemented AI follow-up and automated scheduling in English and Spanish.",
    quote: "Five daily appointments booked automatically. The system runs while I'm with clients.",
    author: "Maria, Owner",
  },
  {
    metric: "78%",
    label: "Close Rate",
    title: "Denver Painter — AI Lead Qualification",
    desc: "Pre-qualifies leads before Jose even picks up the phone, eliminating wasted time.",
    quote: "The AI books estimates for me. I just show up and close.",
    author: "Jose, Owner",
  },
  {
    metric: "$120K",
    label: "Revenue Growth",
    title: "HVAC Company — Bilingual Campaigns",
    desc: "Expanded reach into Spanish-speaking markets with parallel EN/ES campaigns.",
    quote: "Frost Media opened up a completely new market for us.",
    author: "Marco, Operations Manager",
  },
];

const SystemDiagramSection = () => (
  <section id="work" className="py-16 md:py-24 bg-alpine-dark">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">Proven Results</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark tracking-tight">
          Real Campaigns, Real Revenue
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/[0.08] border border-white/[0.12] rounded-2xl p-8 hover:bg-white/[0.12] transition-colors"
          >
            <p className="text-4xl md:text-5xl font-black font-heading text-secondary">{cs.metric}</p>
            <p className="text-sm text-text-on-dark/50 mt-1 font-medium">{cs.label}</p>
            <h3 className="text-lg font-bold text-text-on-dark mt-5 font-heading leading-snug">{cs.title}</h3>
            <p className="text-text-on-dark/60 text-sm mt-2">{cs.desc}</p>
            <blockquote className="border-l-2 border-ice-blue pl-4 mt-5 text-text-on-dark/70 italic text-sm">
              "{cs.quote}"
            </blockquote>
            <p className="text-text-on-dark/40 text-xs mt-2">— {cs.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemDiagramSection;
