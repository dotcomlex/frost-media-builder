import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import heroMountains from "@/assets/hero-mountains.png";
import dashboardResults1 from "@/assets/dashboard-results-1.jpg";
import dashboardResults2 from "@/assets/dashboard-results-2.jpg";
import logoMeta from "@/assets/logo-meta.png";
import logoTiktok from "@/assets/logo-tiktok.svg";
import { motion } from "framer-motion";
import {
  Target, TrendingUp, DollarSign, BarChart3, Users, Zap,
  Search, Palette, Rocket, LineChart, Building2, Scissors,
  Home, ShoppingBag, Shield, Wrench, Heart, CheckCircle2, XCircle,
  MessageSquare, Eye, Lock, Clock, ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TestimonialCard } from "@/components/ui/testimonial-cards";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarMarcus from "@/assets/avatar-marcus.jpg";
import avatarJennifer from "@/assets/avatar-jennifer.jpg";
import avatarCarlos from "@/assets/avatar-carlos.jpg";
import avatarAmanda from "@/assets/avatar-amanda.jpg";
import avatarDavid from "@/assets/avatar-david.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0, 0, 0.2, 1] as const },
  }),
};

const stats = [
  { value: "100+", label: "Campaigns Launched" },
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Industries Served" },
];

const whyCards = [
  { icon: DollarSign, title: "Lowest Cost Per Lead", desc: "Social media advertising consistently delivers the lowest cost per qualified lead compared to any other paid channel — especially for local businesses." },
  { icon: Target, title: "Precision Audience Targeting", desc: "Reach homeowners, business owners, or any niche audience by location, demographics, interests, and behaviors. No wasted spend on irrelevant clicks." },
  { icon: TrendingUp, title: "Scalable & Predictable", desc: "Once we find a winning formula, we scale it. Go from 10 leads a week to 50+ without losing quality. Predictable growth you can staff for." },
];

const platforms = [
  { name: "Facebook", icon: "📘" },
  { name: "Instagram", icon: "📸" },
  { name: "TikTok", icon: "🎵" },
  { name: "Snapchat", icon: "👻" },
  { name: "Pinterest", icon: "📌" },
  { name: "Messenger", icon: "💬" },
];

const processSteps = [
  { num: "01", icon: Search, title: "Strategy & Research", desc: "We audit your market, analyze competitors, and map out your ideal customer profile to build a data-driven plan." },
  { num: "02", icon: Palette, title: "Creative Development", desc: "Scroll-stopping ad creative and copy designed to convert — not just get impressions. Tested across formats." },
  { num: "03", icon: Rocket, title: "Launch & Test", desc: "We A/B test audiences, placements, and messaging from day one. Every dollar is tracked, nothing is wasted." },
  { num: "04", icon: LineChart, title: "Optimize & Scale", desc: "Lower your CPA, increase ROAS, and scale the winners. Continuous optimization based on real performance data." },
];

const industries = [
  { icon: Wrench, name: "Contractors & Home Services", result: "Painting, roofing, concrete — $8-15 cost per lead" },
  { icon: Scissors, name: "Beauty & Med Spas", result: "Eyelash extensions, skincare — 3x booking increase" },
  { icon: Home, name: "Real Estate", result: "Buyer & seller leads at scale for agents and investors" },
  { icon: ShoppingBag, name: "E-commerce & DTC", result: "Product launches, retargeting, 3-5x ROAS campaigns" },
  { icon: Shield, name: "Insurance & Finance", result: "Life insurance, Medicare — exclusive lead generation" },
  { icon: Heart, name: "Local Services & Wellness", result: "Gyms, clinics, salons — dominate your local market" },
];

const tradAgency = [
  { icon: XCircle, text: "Cookie-cutter campaigns copied from templates" },
  { icon: XCircle, text: "They own your ad account — you're locked in" },
  { icon: XCircle, text: "No transparency on spend or performance" },
  { icon: XCircle, text: "Slow communication, monthly reports you can't understand" },
  { icon: XCircle, text: "Leads shared with other businesses" },
];

const frostDiff = [
  { icon: CheckCircle2, text: "Custom strategy built for YOUR business and market" },
  { icon: CheckCircle2, text: "You own your ad account — leave anytime, keep everything" },
  { icon: CheckCircle2, text: "Full transparency — real-time access to your dashboard" },
  { icon: CheckCircle2, text: "Direct communication, weekly optimization reports" },
  { icon: CheckCircle2, text: "100% exclusive leads + AI-powered follow-up with FrostBot" },
];

const competitors = [
  { name: "HomeAdvisor / Angi", desc: "Same lead sold to 3-5 contractors. First to call wins. You're racing against competitors every time.", price: "$15-$80 per shared lead", bad: true },
  { name: "Thumbtack", desc: "Pay to quote. Competing against 4+ contractors on every job. Expensive price shoppers who ghost.", price: "$20-$100+ per quote", bad: true },
  { name: "Frost Media", desc: "100% exclusive. The lead only goes to you. No competition. No price shoppers. AI follow-up included.", price: "Flat monthly fee", bad: false },
];

const testimonials = [
  { avatarUrl: avatarSarah, name: "Sarah Mitchell", role: "Owner", location: "Denver, CO", tag: "Painting Contractor", quote: "We went from 5 leads a month to over 40. The quality is insane — these people are ready to buy." },
  { avatarUrl: avatarMarcus, name: "Marcus Johnson", role: "Founder", location: "Austin, TX", tag: "Concrete & Masonry", quote: "Best ROI we've ever seen from any marketing. $12 per lead and they actually answer the phone." },
  { avatarUrl: avatarJennifer, name: "Jennifer Park", role: "Marketing Dir.", location: "Miami, FL", tag: "Med Spa", quote: "Our booking rate tripled in 60 days. The ad creative they produce is on another level." },
  { avatarUrl: avatarCarlos, name: "Carlos Rivera", role: "CEO", location: "Phoenix, AZ", tag: "Roofing Company", quote: "Finally an agency that actually knows what they're doing. Transparent, fast, and results-driven." },
  { avatarUrl: avatarAmanda, name: "Amanda Chen", role: "Owner", location: "Portland, OR", tag: "E-commerce", quote: "3.2x ROAS on our first campaign. They scaled us from $50/day to $500/day profitably." },
  { avatarUrl: avatarDavid, name: "David Thompson", role: "Agent", location: "Dallas, TX", tag: "Real Estate", quote: "The leads are exclusive and the AI follow-up closes deals while I sleep. Game changer." },
];

const faqs = [
  { q: "How much should I budget for Facebook ads?", a: "We recommend starting with a minimum of $1,000-$1,500/month in ad spend for local businesses. This gives us enough data to test audiences, optimize creative, and find your winning formula. E-commerce campaigns typically start at $2,000-$3,000/month. We'll help you set the right budget based on your goals and market." },
  { q: "How long before I see results?", a: "Most clients see their first leads within 48-72 hours of launch. However, the real optimization happens in weeks 2-4 as we gather data and refine targeting. By month 2, campaigns are typically running at peak efficiency with a proven cost per lead." },
  { q: "Do I own my ad account?", a: "Absolutely. Your ad account, your pixel data, your audiences — it's all yours. We never hold your data hostage. If you ever decide to leave, you keep everything. This is a huge differentiator from agencies that lock you into their accounts." },
  { q: "What industries do you work with?", a: "We've run successful campaigns across 20+ industries including home services (painting, roofing, concrete, HVAC), beauty & med spas, real estate, e-commerce, insurance, fitness, and local services. Our strategies are proven across B2C and local lead generation." },
  { q: "How is this different from boosting posts?", a: "Boosting posts is Meta's simplest (and least effective) ad format. We build full-funnel campaigns with custom audiences, conversion tracking, retargeting, A/B testing, and optimized creative. The difference in results is typically 5-10x better performance than boosted posts." },
  { q: "What platforms do you advertise on?", a: "We run campaigns across Facebook, Instagram, TikTok, Snapchat, Pinterest, and Messenger. We'll recommend the best platform mix based on your audience and goals — most businesses see the best results starting with Facebook and Instagram, then expanding." },
  { q: "Can you help with e-commerce ads?", a: "Yes! We run product catalog ads, dynamic retargeting, lookalike audiences, and full-funnel e-commerce campaigns. We've helped DTC brands scale from launch to six figures in monthly revenue with profitable ROAS." },
  { q: "How do you measure success?", a: "We track everything: cost per lead, cost per acquisition, ROAS, conversion rates, lead quality scores, and revenue attribution. You get real-time access to your dashboard plus weekly reports breaking down exactly what's working and what we're optimizing." },
];

const MetaAds = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ── A. HERO ── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-alpine-dark">
        <img src={heroMountains} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-alpine-dark/60 via-alpine-dark/80 to-alpine-dark" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-mono text-xs tracking-[0.25em] uppercase text-ice-blue mb-4">
            Social Media Advertising
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }} className="font-heading text-4xl md:text-6xl font-bold text-text-on-dark mb-6 leading-tight">
            Expert Ad Campaigns That Generate <span className="text-amber">Real Leads</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }} className="text-lg md:text-xl text-text-on-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            100% exclusive leads. Custom creative. Tested strategies across Facebook, Instagram, TikTok & more. We've launched 100+ campaigns for businesses just like yours.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}>
            <button onClick={openForm} className="bg-amber hover:bg-amber/90 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-colors text-lg">
              Get Your Free Strategy Call →
            </button>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={4} viewport={{ once: true }} className="flex flex-wrap justify-center gap-8 md:gap-16 mt-14">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-ice-blue">{s.value}</p>
                <p className="text-sm text-text-on-dark/50 mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── B. WHY SOCIAL ADS ── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-ice-blue mb-3">Why Social Media Ads?</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">The Most Powerful Customer Acquisition Channel</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              While your competitors waste money on shared leads and outdated marketing, social media ads put your business directly in front of people who need your services — right now.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyCards.map((c, i) => (
              <motion.div key={c.title} variants={fadeUp} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }} className="bg-background rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-ice-blue/10 flex items-center justify-center mb-5">
                  <c.icon className="h-6 w-6 text-ice-blue" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. PLATFORMS ── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">Platforms We Advertise On</h2>
            <p className="text-muted-foreground">We go where your customers are — across every major social platform.</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }} className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {platforms.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
                <span className="text-3xl">{p.icon}</span>
                <span className="text-sm font-medium text-foreground">{p.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── D. PROCESS ── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-ice-blue mb-3">Our Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">How We Work</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <motion.div key={s.num} variants={fadeUp} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }} className="bg-background rounded-xl p-6 border border-border relative">
                <span className="font-mono text-5xl font-bold text-ice-blue/10 absolute top-4 right-4">{s.num}</span>
                <div className="h-10 w-10 rounded-lg bg-ice-blue/10 flex items-center justify-center mb-4">
                  <s.icon className="h-5 w-5 text-ice-blue" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E. INDUSTRIES ── */}
      <section className="py-20 md:py-28 bg-alpine-dark">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-ice-blue mb-3">Multi-Industry Expertise</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-on-dark mb-4">Industries We've Helped Dominate</h2>
            <p className="text-text-on-dark/60 max-w-2xl mx-auto">We're not a one-trick agency. From contractors to e-commerce, we've proven our strategies across 20+ industries.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} variants={fadeUp} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 hover:bg-white/[0.07] transition-colors">
                <ind.icon className="h-8 w-8 text-ice-blue mb-4" />
                <h3 className="font-heading text-lg font-bold text-text-on-dark mb-2">{ind.name}</h3>
                <p className="text-sm text-text-on-dark/60">{ind.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── F. RESULTS DASHBOARD ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-ice-blue mb-3">Proven Results</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Real Campaign Performance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We don't just promise results — we deliver them. Here's what our campaigns look like inside the Ads Manager.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { value: "+32%", label: "Avg. Conversion Rate Increase", color: "text-green-500" },
              { value: "-40%", label: "Avg. Cost Per Lead Reduction", color: "text-ice-blue" },
              { value: "3.2x", label: "Average ROAS Across Campaigns", color: "text-amber" },
            ].map((stat, i) => (
              <motion.div key={stat.label} variants={fadeUp} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }} className="bg-muted rounded-xl p-8 text-center border border-border">
                <p className={`font-heading text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-xl overflow-hidden border border-border shadow-lg">
              <img src={dashboardResults1} alt="Facebook Ads Manager dashboard showing successful lead generation campaign" className="w-full h-auto" />
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }} className="rounded-xl overflow-hidden border border-border shadow-lg">
              <img src={dashboardResults2} alt="Facebook Ads campaign overview with multiple active campaigns" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── G. WHAT MAKES US DIFFERENT ── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-ice-blue mb-3">The Frost Difference</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Not Your Typical Agency</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-background rounded-xl p-8 border border-destructive/20">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-destructive" /> Traditional Agency
              </h3>
              <div className="space-y-4">
                {tradAgency.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }} className="bg-background rounded-xl p-8 border border-green-500/20">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" /> Frost Media
              </h3>
              <div className="space-y-4">
                {frostDiff.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── H. LEAD MARKETPLACE COMPARISON ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Stop Paying for Shared Leads</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              HomeAdvisor, Angi, and Thumbtack sell the same lead to multiple contractors. You're competing on price from the start. There's a better way.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {competitors.map((c, i) => (
              <motion.div key={c.name} variants={fadeUp} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }} className={`rounded-xl p-8 border-2 ${c.bad ? "bg-background border-destructive/20" : "bg-ice-blue/5 border-ice-blue/30 ring-2 ring-ice-blue/10"}`}>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{c.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{c.desc}</p>
                <p className={`font-semibold text-lg ${c.bad ? "text-destructive" : "text-green-500"}`}>{c.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── I. TESTIMONIALS ── */}
      <section className="py-20 md:py-28 bg-alpine-dark overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-ice-blue mb-3">Client Results</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-on-dark">What Our Clients Say</h2>
          </motion.div>
        </div>
        <div className="flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </section>

      {/* ── J. FAQ ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-ice-blue mb-3">FAQ</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Common Questions About Social Media Ads</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-muted/50">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── K. FINAL CTA ── */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-alpine-dark">
        <img src={heroMountains} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-alpine-dark/70 to-alpine-dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-heading text-3xl md:text-5xl font-bold text-text-on-dark mb-6">
            Ready to Start Generating <span className="text-amber">Real Leads</span>?
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }} className="text-lg text-text-on-dark/60 mb-10">
            Book a free strategy call and see exactly how many exclusive leads we can generate for your business.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
            <button onClick={openForm} className="bg-amber hover:bg-amber/90 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-colors text-lg">
              Book Your Free Strategy Call →
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MetaAds;
