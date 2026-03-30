import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import { motion } from "framer-motion";
import { PenTool, Zap, Layers } from "lucide-react";
import aboutDenver from "@/assets/about-denver.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutWorkspace from "@/assets/about-workspace.jpg";
import aboutWorking from "@/assets/about-working.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

const values = [
  {
    icon: PenTool,
    title: "Design-First, Always",
    desc: "We don't do cookie-cutter templates. Every website, every ad, every automation is crafted from scratch to match your brand and convert your audience.",
  },
  {
    icon: Zap,
    title: "Results Over Vanity",
    desc: "We don't chase likes or impressions. We build systems that generate real leads, real calls, and real revenue for your business.",
  },
  {
    icon: Layers,
    title: "One Team, Zero Gaps",
    desc: "Ads, AI, web, CRM — all under one roof. No juggling agencies, no miscommunication. Just a tight-knit crew that moves fast.",
  },
];

const AboutPage = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img
          src={aboutDenver}
          alt="Denver Colorado skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpine-dark via-alpine-dark/60 to-alpine-dark/30" />
        <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-14 md:pb-20 max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="font-mono-tech text-[10px] tracking-widest uppercase text-ice-blue mb-3">
              About Us
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-on-dark tracking-tight mb-4">
              Hey, we're BrainBrite.
            </h1>
            <p className="text-text-on-dark/70 text-lg md:text-xl max-w-xl leading-relaxed">
              A small team of designers and marketers building growth systems for home service businesses who are done wasting money.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-5">
                We started because businesses kept getting ripped off.
              </h2>
              <div className="text-muted-foreground text-[15px] leading-relaxed space-y-4">
                <p>
                  HomeAdvisor, Angi, Thumbtack — they all do the same thing. Sell your lead to 5 other companies and let you fight over it. The fastest caller wins. Everyone else wastes money.
                </p>
                <p>
                  We thought that was broken. So we built a better way: exclusive leads through Meta ads, AI that responds instantly, and CRM automation that keeps your pipeline full without you lifting a finger.
                </p>
                <p className="font-medium text-foreground">
                  No shared leads. No wasted ad spend. Just a system that works while you're running your business.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <img
                src={aboutTeam}
                alt="Frost Media team collaborating"
                className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
              How we think about growth.
            </h2>
            <p className="text-muted-foreground text-[15px] max-w-lg mx-auto">
              We're not a big agency with 50 clients. We keep things small so every project gets real attention.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 md:py-28 bg-alpine-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-frost-pattern opacity-20 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-on-dark tracking-tight mb-4">
              Let's build something.
            </h2>
            <p className="text-text-on-dark/50 text-[15px] mb-8 max-w-md mx-auto">
              Whether you need more leads, a better website, or a full growth system — let's talk about what's possible.
            </p>
            <button
              onClick={openForm}
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground px-8 py-4 rounded-xl font-heading font-semibold text-sm shadow-lg transition-colors"
            >
              Book Free Strategy Call →
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
