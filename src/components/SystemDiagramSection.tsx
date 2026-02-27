import { motion } from "framer-motion";

const caseStudies = [
  {
    tag: "HVAC",
    location: "Phoenix, AZ",
    title: "HVAC Company Dominates Peak Season",
    narrative: "A mid-size HVAC company in Phoenix was relying on word-of-mouth and outdated mailers. We launched targeted Meta campaigns, built a high-converting landing page, and deployed an AI agent to instantly qualify and book leads. Within two months, their schedule was fully booked through summer — and they had to hire two new techs to keep up.",
  },
  {
    tag: "Concrete",
    location: "Dallas, TX",
    title: "Concrete Contractor Scales Past Seven Figures",
    narrative: "A Dallas-based concrete contractor had inconsistent deal flow and was wasting hours chasing unqualified leads. We built a full lead gen system with geo-targeted ads, an automated follow-up sequence, and a branded website that positioned them as the premium option. They closed more jobs in Q1 than the entire previous year.",
  },
  {
    tag: "Painting",
    location: "Denver, CO",
    title: "Painting Company Eliminates Wasted Estimates",
    narrative: "A Denver painter was driving across town for estimates that never closed. We implemented an AI chatbot that pre-qualifies every lead — asking about square footage, timeline, and budget before scheduling. Now every estimate is with a serious buyer, and his close rate went through the roof.",
  },
  {
    tag: "Beauty",
    location: "Denver, CO",
    title: "Beauty Studio Fills the Calendar on Autopilot",
    narrative: "A boutique beauty studio was posting on Instagram but getting zero bookings from it. We ran conversion-focused ad campaigns with scroll-stopping creative and connected an AI booking assistant that responds instantly. Within weeks, she went from empty afternoons to a waitlist.",
  },
  {
    tag: "E-Commerce",
    location: "Los Angeles, CA",
    title: "E-Commerce Brand Triples ROAS",
    narrative: "An LA-based skincare brand was burning cash on poorly structured ad accounts with no creative testing framework. We rebuilt their ad strategy from scratch — new creative angles, rigorous A/B testing, optimized landing pages, and retargeting funnels. Their return on ad spend tripled in 60 days.",
  },
  {
    tag: "Roofing",
    location: "Tampa, FL",
    title: "Roofing Company Owns Their Market",
    narrative: "A Tampa roofing company was competing on price against lowball competitors. We repositioned their brand, built a professional website showcasing their craftsmanship, and ran hyper-local ad campaigns targeting homeowners in storm-prone zip codes. They became the go-to roofer in their area — booked out months in advance.",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white/[0.06] border border-white/[0.1] rounded-2xl p-7 md:p-8 hover:bg-white/[0.1] transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold font-mono-tech tracking-wider uppercase bg-ice-blue/15 text-ice-blue px-3 py-1 rounded-full">
                {cs.tag}
              </span>
              <span className="text-xs text-text-on-dark/40">{cs.location}</span>
            </div>
            <h3 className="text-lg font-bold text-text-on-dark font-heading leading-snug mb-3">{cs.title}</h3>
            <p className="text-text-on-dark/60 text-sm leading-relaxed">{cs.narrative}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemDiagramSection;
