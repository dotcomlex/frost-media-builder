import { motion } from "framer-motion";
import { Target, Bot, Calendar, Layout, Palette, PenTool } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const CapabilitiesSection = () => (
  <section id="capabilities" className="py-16 md:py-24 lg:py-32 bg-muted">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <motion.div {...fadeInUp}>
        <p className="font-mono-tech text-xs tracking-widest uppercase text-coral mb-4">What We Build</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          The Complete Growth Infrastructure
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mt-4">
          We don't just run ads or install chatbots. We build complete end-to-end systems, custom-built for your business, designed to generate, qualify, close, and manage customers on autopilot.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16">
        {/* Large featured card - Media Buying */}
        <motion.div
          {...fadeInUp}
          className="md:col-span-2 lg:row-span-2 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-frost-blue to-frost-blue-deep text-white hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
            <Target className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-bold mb-3 font-heading">Performance Media Buying</h3>
          <p className="text-white/80 text-base leading-relaxed mb-6">
            Custom Meta, Instagram, and TikTok campaigns built from the ground up. A/B tested ad copy and creatives. Audience targeting that actually converts. Expert copywriting in English and Spanish.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Meta Ads", "Instagram", "TikTok", "Bilingual", "A/B Testing"].map((tag) => (
              <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Tall card - AI Lead Systems */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:row-span-2 rounded-2xl p-6 md:p-8 bg-card border-t-4 border-t-frost-blue border border-border hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="w-14 h-14 rounded-xl bg-frost-blue/10 flex items-center justify-center mb-6">
            <Bot className="h-7 w-7 text-frost-blue" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3 font-heading">AI-Powered Lead Systems</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Instant AI qualification via SMS. Natural conversation flow that pre-sells your service. Automated follow-up sequences that never miss a lead. Smart routing to your calendar. 24/7 response time under 60 seconds.
          </p>
          <div className="flex flex-wrap gap-2">
            {["AI Qualification", "SMS Automation", "Instant Response"].map((tag) => (
              <span key={tag} className="rounded-full bg-frost-blue/10 text-frost-blue px-3 py-1 text-xs font-medium">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Small cards */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl p-6 bg-card border border-border hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
            <Layout className="h-5 w-5 text-foreground" />
          </div>
          <h3 className="text-base font-bold text-foreground mb-2 font-heading">CRM Infrastructure</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Complete customer management system. Track every lead, conversation, and deal with automated workflows.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl p-6 bg-card border border-border hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
            <Palette className="h-5 w-5 text-coral" />
          </div>
          <h3 className="text-base font-bold text-foreground mb-2 font-heading">Branding &amp; Design</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Logo design, brand identity, marketing materials. Custom-designed to position you as the premium choice.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="rounded-2xl p-6 bg-card border border-border hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center mb-4">
            <PenTool className="h-5 w-5 text-amber" />
          </div>
          <h3 className="text-base font-bold text-foreground mb-2 font-heading">Conversion Copywriting</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Ad copy, landing pages, email sequences, sales scripts. Written by experts who understand direct response.
          </p>
        </motion.div>
      </div>

      {/* Wide card - Websites & Funnels */}
      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 md:mt-6 rounded-2xl p-6 md:p-8 bg-coral-light border border-coral/20 hover:scale-[1.01] transition-transform duration-300"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-14 h-14 rounded-xl bg-coral/20 flex items-center justify-center shrink-0">
            <Calendar className="h-7 w-7 text-coral" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2 font-heading">Custom Websites &amp; Funnels</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              High-converting landing pages and full websites designed specifically for your industry. Mobile-first, fast-loading, SEO-optimized. Not templates. Custom-coded for maximum performance.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:ml-auto shrink-0">
            {["Web Design", "Funnels", "SEO", "Mobile-First"].map((tag) => (
              <span key={tag} className="rounded-full bg-coral/15 text-coral px-3 py-1 text-xs font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CapabilitiesSection;
