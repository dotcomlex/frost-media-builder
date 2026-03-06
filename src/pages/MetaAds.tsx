import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import heroMountains from "@/assets/hero-mountains.png";
import dashboardMeta1 from "@/assets/dashboard-meta-1.jpg";
import dashboardMeta2 from "@/assets/dashboard-meta-2.jpg";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Target, TrendingUp, DollarSign, BarChart3, Users, Zap,
  Search, Palette, Rocket, LineChart, Wrench, Scissors,
  Home, ShoppingBag, Shield, Heart, CheckCircle2, XCircle,
  ChevronDown, ArrowRight, Sparkles, Eye, Globe
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TestimonialCard } from "@/components/ui/testimonial-cards";
import avatarPriya from "@/assets/avatar-priya.jpg";
import avatarBrian from "@/assets/avatar-brian.jpg";
import avatarMaria from "@/assets/avatar-maria.jpg";
import avatarTyler from "@/assets/avatar-tyler.jpg";
import avatarJason from "@/assets/avatar-jason.jpg";
import avatarMike from "@/assets/avatar-mike.jpg";

/* ── Animated counter component ── */
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => `${prefix}${Math.round(v)}${suffix}`);
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [isInView, value, motionVal]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (displayRef.current) displayRef.current.textContent = v;
    });
    return unsub;
  }, [rounded]);

  return <span ref={(el) => { (ref as any).current = el; (displayRef as any).current = el; }}>0</span>;
}

/* ── Real platform SVG icons ── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="25%" stopColor="#fa7e1e" />
        <stop offset="50%" stopColor="#d62976" />
        <stop offset="75%" stopColor="#962fbf" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.1a8.16 8.16 0 005.58 2.2v-3.45a4.85 4.85 0 01-3.77-1.87V6.69h3.77z" className="text-foreground" />
  </svg>
);
const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FFFC00">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.214.12-.04.239-.075.34-.1a1.717 1.717 0 01.449-.07c.252 0 .478.07.67.209a.549.549 0 01.213.437c0 .404-.496.663-1.099.95-.18.09-.345.165-.494.254-.255.154-.55.354-.683.603a.8.8 0 00-.048.66c.06.175.12.351.18.527.329.916.79 2.168-.093 3.092-.476.497-1.194.803-1.87.803-.331 0-.644-.058-.925-.168-.615-.24-1.33-.39-1.637-.39a2.91 2.91 0 00-.34.024 7.93 7.93 0 01-.553.067c-.226.023-.428.052-.59.052-.18 0-.355-.023-.524-.068a7.047 7.047 0 01-.546-.068 2.78 2.78 0 00-.342-.024c-.31 0-1.026.15-1.637.39-.284.11-.594.168-.925.168-.68 0-1.396-.306-1.87-.803-.888-.924-.423-2.176-.094-3.092.06-.176.12-.352.18-.527a.8.8 0 00-.048-.66c-.133-.249-.428-.449-.683-.603a8.758 8.758 0 00-.494-.254c-.603-.287-1.098-.546-1.098-.95a.549.549 0 01.213-.437c.192-.14.418-.209.67-.209.15 0 .3.024.449.07.101.025.22.06.34.1.264.094.622.23.922.214.199 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.3-4.847C7.647 1.069 11.004.793 11.994.793h.212z" />
  </svg>
);
const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#E60023">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
  </svg>
);
const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0099FF">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.2l3.131 3.259L19.752 8.2l-6.561 6.763z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

const testimonials = [
  { avatarUrl: avatarPriya, name: "Priya Sharma", role: "Owner", location: "Charlotte, NC", tag: "HVAC Services", quote: "We booked 38 installs in our first month with Frost. The leads were pre-qualified and ready to schedule." },
  { avatarUrl: avatarBrian, name: "Brian O'Neill", role: "Founder", location: "Tampa, FL", tag: "Pressure Washing", quote: "Cut our cost per lead from $35 to $9. Their ad targeting is surgical — every lead is in our service area." },
  { avatarUrl: avatarMaria, name: "Maria Gonzalez", role: "Director", location: "Las Vegas, NV", tag: "Beauty Studio", quote: "Went from relying on walk-ins to a fully booked calendar 3 weeks out. The creative they make is gorgeous." },
  { avatarUrl: avatarTyler, name: "Tyler Brooks", role: "CEO", location: "Nashville, TN", tag: "Fencing Company", quote: "Other agencies burned our budget on trash leads. Frost gave us exclusive, high-intent leads from day one." },
  { avatarUrl: avatarJason, name: "Jason Kim", role: "Owner", location: "San Diego, CA", tag: "E-commerce DTC", quote: "Scaled from $2K/month to $18K/month in revenue with a 4.1x ROAS. These guys actually know Meta inside out." },
  { avatarUrl: avatarMike, name: "Mike Patterson", role: "Broker", location: "Chicago, IL", tag: "Insurance", quote: "The AI follow-up texts respond in under 5 seconds. My close rate went up 40% because of speed-to-lead alone." },
];

const faqs = [
  { q: "How much should I budget for Facebook ads?", a: "We recommend starting with $1,000-$1,500/month in ad spend for local businesses. This gives us enough data to test audiences, optimize creative, and find your winning formula. E-commerce campaigns typically start at $2,000-$3,000/month." },
  { q: "How long before I see results?", a: "Most clients see their first leads within 48-72 hours of launch. Real optimization happens in weeks 2-4 as we gather data. By month 2, campaigns run at peak efficiency with a proven cost per lead." },
  { q: "What industries do you work with?", a: "We've run successful campaigns across 20+ industries: home services, beauty & med spas, real estate, e-commerce, insurance, fitness, and local services." },
  { q: "How is this different from boosting posts?", a: "Boosting is Meta's simplest (and least effective) ad format. We build full-funnel campaigns with custom audiences, conversion tracking, retargeting, and A/B testing. Typically 5-10x better performance." },
  { q: "Can you help with e-commerce ads?", a: "Yes! We run product catalog ads, dynamic retargeting, lookalike audiences, and full-funnel e-commerce campaigns. We've helped DTC brands scale to six figures in monthly revenue." },
  { q: "How do you measure success?", a: "We track cost per lead, CPA, ROAS, conversion rates, and lead quality scores. You get real-time dashboard access plus weekly reports." },
];

const MetaAds = () => {
  const { openForm } = useContactForm();
  const platformLogos = [
    { icon: <FacebookIcon />, name: "Facebook" },
    { icon: <InstagramIcon />, name: "Instagram" },
    { icon: <TikTokIcon />, name: "TikTok" },
    { icon: <SnapchatIcon />, name: "Snapchat" },
    { icon: <PinterestIcon />, name: "Pinterest" },
    { icon: <MessengerIcon />, name: "Messenger" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* ═══════════════════════════════════════════
          A. HERO — immersive, compact on mobile
      ═══════════════════════════════════════════ */}
      <section className="relative pt-24 pb-14 md:pt-36 md:pb-28 overflow-hidden bg-alpine-dark">
        <img src={heroMountains} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-alpine-dark/40 via-alpine-dark/70 to-alpine-dark" />
        <div className="absolute inset-0 bg-frost-pattern opacity-30" />

        <div className="relative z-10 px-5 max-w-5xl mx-auto">
          {/* Meta partner badge */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-ice-blue" />
            <span className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-ice-blue">Social Media Advertising Experts</span>
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}
            className="font-heading text-[2rem] leading-[1.15] md:text-6xl font-bold text-text-on-dark mb-4">
            Facebook & Instagram Ads That Generate{" "}
            <span className="bg-gradient-to-r from-amber to-amber-gold bg-clip-text text-transparent">Real, Exclusive Leads</span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}
            className="text-base md:text-xl text-text-on-dark/65 max-w-2xl mb-8 leading-relaxed">
            7+ years running campaigns across Facebook, Instagram, TikTok & more. Custom creative. Tested strategies. Leads that are 100% yours.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-3 mb-12">
            <button onClick={openForm} className="bg-secondary hover:bg-amber-gold text-secondary-foreground px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-secondary/30 transition-all hover:scale-[1.02] text-base flex items-center justify-center gap-2">
              Get Your Free Strategy Call <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          {/* Stats strip */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={4} viewport={{ once: true }}
            className="grid grid-cols-3 gap-3">
            {[
              { val: 100, suffix: "+", label: "Campaigns" },
              { val: 7, suffix: "+", label: "Years Exp." },
              { val: 20, suffix: "+", label: "Industries" },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.05] border border-white/10 rounded-xl py-3 px-2 text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-ice-blue">
                  <AnimatedCounter value={s.val} suffix={s.suffix} />
                </p>
                <p className="text-[11px] text-text-on-dark/45 mt-0.5 font-mono-tech tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          B. PLATFORMS — auto-scrolling marquee
      ═══════════════════════════════════════════ */}
      <section className="py-8 bg-alpine-dark border-t border-b border-white/5">
        <div className="px-5 mb-5">
          <p className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-text-on-dark/40 text-center">Platforms We Advertise On</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-alpine-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-alpine-dark to-transparent z-10" />
          <div className="flex animate-marquee w-max">
            {[...platformLogos, ...platformLogos, ...platformLogos].map((p, i) => (
              <div key={i} className="flex items-center gap-2.5 px-6 md:px-8">
                {p.icon}
                <span className="text-sm font-medium text-text-on-dark/70 whitespace-nowrap">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          C. WHY SOCIAL ADS — infographic-style
      ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="px-5 max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <p className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-ice-blue mb-2">Why Social Ads?</p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground leading-tight">
              The Most Powerful Customer Acquisition Channel — Period.
            </h2>
          </motion.div>

          {/* Infographic cards — alternating accent color */}
          <div className="space-y-4">
            {[
              { stat: "3.96B", label: "monthly active users on Meta platforms", desc: "Your customers are already scrolling. We put your business in front of them with precision targeting by location, demographics, interests, and behaviors.", accent: "from-[hsl(213,80%,50%)] to-[hsl(213,60%,35%)]", icon: Globe },
              { stat: "$0.97", label: "average cost per click", desc: "Social ads consistently deliver the lowest cost per qualified lead compared to any other paid channel — especially for local service businesses.", accent: "from-[hsl(160,84%,39%)] to-[hsl(160,60%,30%)]", icon: DollarSign },
              { stat: "8.25%", label: "average conversion rate", desc: "That's 3x higher than search ads. When your creative is dialed in and your funnel is built right, social ads convert at rates other channels can't touch.", accent: "from-[hsl(30,78%,53%)] to-[hsl(33,70%,40%)]", icon: Target },
            ].map((item, i) => (
              <motion.div key={item.stat} variants={fadeUp} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }}
                className="bg-background rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className={`bg-gradient-to-r ${item.accent} px-5 py-4 flex items-center gap-4`}>
                  <item.icon className="h-6 w-6 text-white/90" />
                  <div>
                    <span className="font-heading text-3xl font-bold text-white">{item.stat}</span>
                    <span className="text-white/70 text-sm ml-2">{item.label}</span>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          D. RESULTS — dashboard images + counters
      ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-alpine-dark overflow-hidden">
        <div className="px-5 max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
            <p className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-ice-blue mb-2">Proven Results</p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-text-on-dark leading-tight">
              Real Campaign Performance
            </h2>
            <p className="text-text-on-dark/50 text-sm mt-2 max-w-lg">
              We don't just promise results — here's what our campaigns look like inside the Ads Manager.
            </p>
          </motion.div>

          {/* Horizontal scroll dashboard images */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-5 px-5" style={{ WebkitOverflowScrolling: "touch" }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="min-w-[85vw] md:min-w-0 md:flex-1 snap-start rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img src={dashboardMeta1} alt="Facebook Ads Manager showing 847 leads at $8.42 per lead with 4.2x ROAS" className="w-full h-auto" />
              <div className="absolute bottom-3 left-3 bg-alpine-dark/80 backdrop-blur-sm border border-ice-blue/30 rounded-lg px-3 py-1.5">
                <span className="font-mono-tech text-[10px] text-ice-blue">LIVE CAMPAIGN DATA</span>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}
              className="min-w-[85vw] md:min-w-0 md:flex-1 snap-start rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img src={dashboardMeta2} alt="Before and after campaign performance comparison showing CPA drop from $45 to $12" className="w-full h-auto" />
              <div className="absolute bottom-3 left-3 bg-alpine-dark/80 backdrop-blur-sm border border-ice-blue/30 rounded-lg px-3 py-1.5">
                <span className="font-mono-tech text-[10px] text-ice-blue">BEFORE & AFTER</span>
              </div>
            </motion.div>
          </div>

          {/* Animated KPI counters */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}
            className="grid grid-cols-3 gap-3 mt-8">
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 text-center">
              <p className="font-heading text-2xl md:text-4xl font-bold text-success">+<AnimatedCounter value={32} suffix="%" /></p>
              <p className="text-[10px] text-text-on-dark/40 font-mono-tech mt-1">Conv. Rate ↑</p>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 text-center">
              <p className="font-heading text-2xl md:text-4xl font-bold text-ice-blue">-<AnimatedCounter value={40} suffix="%" /></p>
              <p className="text-[10px] text-text-on-dark/40 font-mono-tech mt-1">Cost / Lead ↓</p>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 text-center">
              <p className="font-heading text-2xl md:text-4xl font-bold text-amber"><AnimatedCounter value={3} suffix=".2x" /></p>
              <p className="text-[10px] text-text-on-dark/40 font-mono-tech mt-1">Avg ROAS</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          E. PROCESS — vertical timeline
      ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="px-5 max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <p className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-ice-blue mb-2">Our Process</p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">From Strategy to Scale</h2>
          </motion.div>

          <div className="relative">
            {/* Glowing timeline line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-ice-blue via-ice-blue/40 to-transparent" />

            <div className="space-y-8">
              {[
                { num: "01", icon: Search, title: "Strategy & Research", desc: "We audit your market, analyze your competitors, and map out your ideal customer profile. No guesswork — pure data." },
                { num: "02", icon: Palette, title: "Creative Development", desc: "Scroll-stopping ad creative and copy designed to convert. We test images, videos, carousels — every format that works for your niche." },
                { num: "03", icon: Rocket, title: "Launch & A/B Test", desc: "We A/B test audiences, placements, and messaging from day one. Every dollar is tracked, every variable is tested." },
                { num: "04", icon: LineChart, title: "Optimize & Scale", desc: "Lower your CPA, increase ROAS, and scale the winners. Weekly optimization based on real performance data — not vanity metrics." },
              ].map((step, i) => (
                <motion.div key={step.num} variants={fadeUp} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }}
                  className="flex gap-5 relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ice-blue/15 border-2 border-ice-blue/40 flex items-center justify-center z-10">
                    <step.icon className="h-4 w-4 text-ice-blue" />
                  </div>
                  <div className="flex-1 bg-background rounded-xl border border-border p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono-tech text-[10px] text-ice-blue/50 tracking-widest">{step.num}</span>
                      <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          F. INDUSTRIES — horizontal scroll cards
      ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="px-5 max-w-5xl mx-auto mb-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-ice-blue mb-2">Multi-Industry Expertise</p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground leading-tight">
              20+ Industries. Proven Results in Every One.
            </h2>
          </motion.div>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-5 scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
          {[
            { icon: Wrench, name: "Contractors", result: "Painting, roofing, concrete — $8-15 CPL", gradient: "from-[hsl(213,80%,50%)] to-[hsl(213,55%,30%)]" },
            { icon: Scissors, name: "Beauty & Med Spas", result: "Lashes, skincare — 3x booking increase", gradient: "from-[hsl(330,60%,50%)] to-[hsl(280,50%,35%)]" },
            { icon: Home, name: "Real Estate", result: "Buyer & seller leads at scale", gradient: "from-[hsl(160,84%,39%)] to-[hsl(160,50%,25%)]" },
            { icon: ShoppingBag, name: "E-commerce", result: "Product launches, 3-5x ROAS", gradient: "from-[hsl(30,78%,53%)] to-[hsl(20,60%,35%)]" },
            { icon: Shield, name: "Insurance", result: "Life, Medicare — exclusive leads", gradient: "from-[hsl(250,50%,50%)] to-[hsl(250,40%,30%)]" },
            { icon: Heart, name: "Health & Wellness", result: "Gyms, clinics — dominate local", gradient: "from-[hsl(0,70%,55%)] to-[hsl(340,50%,35%)]" },
          ].map((ind, i) => (
            <motion.div key={ind.name} variants={fadeUp} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }}
              className={`min-w-[220px] md:min-w-0 md:flex-1 snap-start rounded-2xl bg-gradient-to-br ${ind.gradient} p-5 text-white shadow-lg flex flex-col`}>
              <ind.icon className="h-7 w-7 text-white/80 mb-3" />
              <h3 className="font-heading text-base font-bold mb-1">{ind.name}</h3>
              <p className="text-xs text-white/70 leading-relaxed">{ind.result}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          G. COMPARISON — Traditional vs Frost
      ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="px-5 max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
            <p className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-ice-blue mb-2">The Frost Difference</p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">Not Your Typical Agency</h2>
          </motion.div>

          <div className="space-y-4">
            {/* Traditional — red themed */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-background rounded-2xl border-2 border-destructive/20 p-5">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="h-5 w-5 text-destructive" />
                <h3 className="font-heading text-lg font-bold text-foreground">Traditional Agency</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Cookie-cutter campaigns copied from templates",
                  "They own your ad account — you're locked in",
                  "No transparency on spend or performance",
                  "Slow communication, monthly reports you can't read",
                  "Leads shared with other businesses",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frost — green themed */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}
              className="bg-background rounded-2xl border-2 border-success/30 p-5 ring-1 ring-success/10">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <h3 className="font-heading text-lg font-bold text-foreground">Frost Media</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Custom strategy built for YOUR business and market",
                  "You own your ad account — leave anytime, keep everything",
                  "Full transparency — real-time access to your dashboard",
                  "Direct communication, weekly optimization reports",
                  "100% exclusive leads + AI-powered follow-up with FrostBot",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          H. TESTIMONIALS — horizontal scroll
      ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-alpine-dark overflow-hidden">
        <div className="px-5 mb-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-ice-blue mb-2">Client Results</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-on-dark">What Our Clients Say</h2>
          </motion.div>
        </div>
        <div className="flex gap-4 overflow-x-auto px-5 pb-4 snap-x snap-mandatory scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          I. FAQ — accordion
      ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="px-5 max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <p className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-ice-blue mb-2">FAQ</p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">Common Questions</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-muted/50">
                <AccordionTrigger className="text-left font-heading text-sm font-semibold text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          J. FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-alpine-dark">
        <img src={heroMountains} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-alpine-dark/60 to-alpine-dark" />
        <div className="absolute inset-0 bg-frost-pattern opacity-20" />
        <div className="relative z-10 px-5 max-w-2xl mx-auto text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-heading text-2xl md:text-5xl font-bold text-text-on-dark mb-5 leading-tight">
            Ready to Start Generating{" "}
            <span className="bg-gradient-to-r from-amber to-amber-gold bg-clip-text text-transparent">Real Leads</span>?
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}
            className="text-base text-text-on-dark/50 mb-8">
            Book a free strategy call and see exactly how many exclusive leads we can generate for your business.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
            <button onClick={openForm} className="bg-secondary hover:bg-amber-gold text-secondary-foreground px-8 py-4 rounded-xl font-bold shadow-xl shadow-secondary/30 transition-all hover:scale-[1.02] text-lg flex items-center justify-center gap-2 mx-auto">
              Book Your Free Strategy Call <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
          <p className="text-xs text-text-on-dark/25 mt-6 font-mono-tech tracking-wide">📍 Denver, Colorado</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MetaAds;
