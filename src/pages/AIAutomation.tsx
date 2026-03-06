import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  MessageSquare,
  Globe,
  Send,
  Zap,
  Clock,
  CalendarCheck,
  Bot,
  Wrench,
  Sparkles,
  Home,
  Shield,
  ShoppingCart,
  Thermometer,
  X,
  Check,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import heroMountains from "@/assets/hero-mountains.png";

/* ── Chat demo: Contractor scenario ── */
const chatMessages = [
  { from: "customer", text: "Hey, I think my roof has a leak. Do you guys do repairs?" },
  { from: "ai", text: "Hey! Absolutely — we handle all types of roof repairs. Can you tell me roughly where the leak is and how big the affected area might be?" },
  { from: "customer", text: "It's above the garage, maybe 150 sq ft. It leaks when it rains hard" },
  { from: "ai", text: "Got it — sounds like it could be flashing or shingle damage. A few quick questions: Is this a residential property? And do you have a preferred day for an estimate?" },
  { from: "customer", text: "Yeah residential. Wait — is this a real person?" },
  { from: "ai", text: "Great question! I'm FrostBot, an AI assistant for Summit Roofing. I'm here 24/7 to get you scheduled fast. A real estimator will be at your home for the inspection 👍" },
  { from: "customer", text: "Oh cool. Thursday morning works" },
  { from: "ai", text: "Perfect — I've got you down for Thursday 9-11am. You'll get a confirmation text shortly. Anything else I can help with?" },
];

/* ── Instagram DM demo ── */
const igMessages = [
  { from: "customer", text: "Love your work! How much for a full set of lashes? 😍" },
  { from: "ai", text: "Thank you! 🥰 Our classic full set starts at $150 and volume starts at $200. Would you like to book an appointment?" },
  { from: "customer", text: "Volume please! Do you have anything this weekend?" },
  { from: "ai", text: "Let me check… We have Saturday at 10am or 2pm open! Which works better for you?" },
  { from: "customer", text: "2pm Saturday!" },
  { from: "ai", text: "You're all set for Saturday at 2pm for a volume full set! 💅 You'll get a reminder 24hrs before. See you then!" },
];

const channels = [
  { icon: Phone, label: "Voice Calls" },
  { icon: MessageSquare, label: "SMS" },
  { icon: Globe, label: "Web Chat" },
  { icon: Send, label: "Social DMs" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Messenger" },
];

const steps = [
  { num: "01", icon: Zap, title: "Lead Reaches Out", desc: "Someone calls, texts, fills out a form, or sends a DM — on any channel, any time of day." },
  { num: "02", icon: Bot, title: "AI Qualifies & Engages", desc: "FrostBot responds in under 30 seconds, asks qualifying questions, handles objections, and builds trust." },
  { num: "03", icon: CalendarCheck, title: "Appointment Booked", desc: "The lead is booked directly into your calendar. You get a notification with all the details — ready to close." },
];

const useCases = [
  { icon: Wrench, industry: "Contractors", desc: "Qualifies roof repair leads, books estimates, follows up on pending quotes." },
  { icon: Sparkles, industry: "Beauty & Med Spas", desc: "Books appointments via Instagram DMs, sends reminders, handles rescheduling." },
  { icon: Home, industry: "Real Estate", desc: "Follows up with buyer inquiries 24/7, qualifies budget & timeline." },
  { icon: Thermometer, industry: "HVAC & Plumbing", desc: "Handles emergency service requests instantly, dispatches priority jobs." },
  { icon: Shield, industry: "Insurance", desc: "Qualifies policy inquiries, schedules consultations, answers coverage questions." },
  { icon: ShoppingCart, industry: "E-commerce", desc: "Answers product questions, recovers abandoned carts, processes returns." },
];

const withoutItems = [
  "Leads wait hours (or days) for a response",
  "Missed calls after business hours",
  "Manual follow-up with spreadsheets",
  "Repetitive questions answered one by one",
  "Leads go cold before you respond",
];

const withItems = [
  "Every lead gets a response in under 30 seconds",
  "24/7 availability — nights, weekends, holidays",
  "Automated qualification & appointment booking",
  "AI handles FAQs, objections, and follow-ups",
  "3x more leads converted to booked appointments",
];

const faqs = [
  { q: "How does FrostBot learn about my business?", a: "We train FrostBot on your services, pricing, service areas, FAQs, and brand voice. It knows your business inside and out — from your most popular services to your cancellation policy." },
  { q: "Will customers know they're talking to AI?", a: "FrostBot is transparent when asked, but most customers can't tell. The conversations are natural, on-brand, and designed to feel like your best team member is responding." },
  { q: "What channels does it work on?", a: "SMS, voice calls, website chat, Instagram DMs, Facebook Messenger, and Google Business Messages. One AI, every channel — no lead slips through." },
  { q: "How long does setup take?", a: "Most businesses are fully live within 5-7 business days. We handle all the training, integration, and testing — you just review and approve." },
  { q: "Can it handle objections?", a: "Absolutely. FrostBot is trained on common objections in your industry and responds with the exact messaging you'd want your best salesperson to use." },
  { q: "What if the AI can't answer a question?", a: "If FrostBot encounters something outside its training, it gracefully hands off to your team with full conversation context — so nothing falls through the cracks." },
  { q: "How much does it cost?", a: "Pricing is based on your volume and channels. Book a strategy call and we'll give you a transparent quote tailored to your business — no hidden fees." },
  { q: "Is my data secure?", a: "100%. All conversations are encrypted, stored securely, and compliant with industry standards. Your customer data never leaves your ecosystem." },
];

/* ── Phone Mockup Component ── */
const PhoneMockup = ({
  messages,
  headerLabel,
  headerIcon,
}: {
  messages: { from: string; text: string }[];
  headerLabel: string;
  headerIcon?: React.ReactNode;
}) => (
  <div className="relative mx-auto max-w-[300px]">
    <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl" />
    <div className="relative rounded-[2rem] bg-alpine-dark p-1.5 shadow-2xl shadow-primary/10 ring-1 ring-white/10">
      <div className="rounded-[1.5rem] bg-alpine-dark overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-3 pb-2">
          <span className="text-[9px] text-text-on-dark/50 font-mono-tech flex items-center gap-1.5">
            {headerIcon}
            {headerLabel}
          </span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] text-primary font-mono-tech">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="px-3 py-2 space-y-2 min-h-[260px] max-h-[340px] overflow-y-auto scrollbar-hide">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.12 }}
              className={`flex ${msg.from === "customer" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[82%] rounded-xl px-3 py-2 text-[11px] leading-relaxed ${
                  msg.from === "customer"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-white/10 text-text-on-dark/85 rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="flex justify-start"
          >
            <div className="bg-white/10 rounded-xl rounded-bl-sm px-4 py-2.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-text-on-dark/40 animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-text-on-dark/40 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-text-on-dark/40 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </motion.div>
        </div>

        {/* Input */}
        <div className="px-3 pb-3">
          <div className="rounded-full bg-white/5 border border-white/10 px-3 py-2 flex items-center">
            <span className="text-[10px] text-text-on-dark/25">Type a message...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AIAutomation = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ═══════ 1. HERO ═══════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroMountains} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-alpine-black/80" />
          <div className="absolute inset-0 bg-frost-pattern" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono-tech text-[10px] tracking-widest uppercase text-ice-blue mb-4">
              Conversational AI
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-on-dark tracking-tight leading-tight hero-text-glow">
              Your AI Employee That{" "}
              <span className="text-ice-blue">Never Clocks Out</span>
            </h1>
            <p className="text-text-on-dark/60 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              Respond to every lead in under 30 seconds. Qualify them automatically. Book appointments while you sleep. Fully trained on your business — voice, text, DMs.
            </p>
            <Button
              size="lg"
              onClick={openForm}
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-10 py-5 text-base font-bold shadow-2xl shadow-secondary/40 hover:scale-105 transition-all mt-8"
            >
              See FrostBot In Action →
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 mt-12 max-w-lg mx-auto"
          >
            {[
              { stat: "< 30s", label: "Response" },
              { stat: "24/7", label: "Availability" },
              { stat: "3x", label: "More Bookings" },
            ].map((s) => (
              <div key={s.label} className="text-center p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
                <p className="font-heading text-xl md:text-2xl font-black text-text-on-dark">{s.stat}</p>
                <p className="text-[10px] text-text-on-dark/50 mt-0.5 font-medium font-mono-tech">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ 2. LIVE CHAT DEMO ═══════ */}
      <section className="bg-muted overflow-hidden relative">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/[0.06] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-56 h-56 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <PhoneMockup messages={chatMessages} headerLabel="Frost AI · Summit Roofing" />
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-mono-tech text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
                Live Demo
              </p>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-foreground tracking-tight leading-tight">
                Trained on <span className="text-primary">Your</span> Business. Ready to Close.
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mt-4 leading-relaxed">
                FrostBot knows your services, pricing, service areas, and FAQs inside out. It qualifies leads, handles objections naturally, and books appointments — all in a conversation that feels human.
              </p>
              <p className="text-muted-foreground text-sm md:text-base mt-3 leading-relaxed">
                No scripts. No robotic responses. Just a smart AI teammate that sounds exactly like your brand.
              </p>

              <div className="flex flex-wrap gap-1.5 mt-6">
                {channels.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground bg-background rounded-full px-2.5 py-1 border border-border"
                  >
                    <c.icon className="h-3 w-3 text-primary" />
                    {c.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ 3. HOW IT WORKS ═══════ */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="font-mono-tech text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
              The Process
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              How FrostBot Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 rounded-xl border border-border bg-background border-t-2 border-t-primary text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-mono-tech text-[10px] text-muted-foreground tracking-widest mb-1">{s.num}</p>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 4. USE CASES ═══════ */}
      <section className="py-14 md:py-20 bg-muted relative">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="font-mono-tech text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
              Industries
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Built For Every Industry
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.industry}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group p-5 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                  <uc.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1">{uc.industry}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 5. WITH vs WITHOUT ═══════ */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="font-mono-tech text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
              The Difference
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              What Changes When FrostBot Takes Over
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Without */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-xl border border-destructive/20 bg-destructive/5"
            >
              <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <X className="h-5 w-5 text-destructive" />
                Without FrostBot
              </h3>
              <ul className="space-y-3">
                {withoutItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* With */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-xl border border-primary/20 bg-primary/5"
            >
              <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                With FrostBot
              </h3>
              <ul className="space-y-3">
                {withItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ 6. SOCIAL MEDIA DMs ═══════ */}
      <section className="bg-alpine-dark overflow-hidden relative">
        <div className="absolute inset-0 bg-frost-pattern" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/[0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-mono-tech text-[10px] tracking-widest uppercase text-ice-blue mb-2">
                Social Media AI
              </p>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-text-on-dark tracking-tight leading-tight">
                Every DM Answered.{" "}
                <span className="text-ice-blue">Every Lead Captured.</span>
              </h2>
              <p className="text-text-on-dark/60 text-sm md:text-base mt-4 leading-relaxed">
                Your Instagram comments, Facebook messages, and Google Business inquiries — all handled instantly by AI that knows your brand, your services, and exactly how to book the appointment.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  { icon: Instagram, label: "Instagram DMs" },
                  { icon: Facebook, label: "Facebook Messenger" },
                  { icon: MessageCircle, label: "Google Business" },
                ].map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 text-[10px] font-medium text-text-on-dark/70 bg-white/5 rounded-full px-3 py-1.5 border border-white/10"
                  >
                    <c.icon className="h-3 w-3 text-ice-blue" />
                    {c.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Phone - Instagram style */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <PhoneMockup
                messages={igMessages}
                headerLabel="Instagram DM"
                headerIcon={<Instagram className="h-3 w-3 text-ice-blue" />}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ 7. FAQ ═══════ */}
      <section className="py-12 md:py-18 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="font-mono-tech text-[10px] tracking-widest uppercase text-muted-foreground mb-2">FAQ</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Questions About FrostBot
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-1.5">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-lg px-5 bg-background data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline text-left py-4 text-sm font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════ 8. FINAL CTA ═══════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroMountains} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-alpine-black/80" />
          <div className="absolute inset-0 bg-frost-pattern" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono-tech text-[10px] tracking-widest uppercase text-ice-blue mb-4">
              Get Started
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark tracking-tight leading-tight">
              See FrostBot In Action
            </h2>
            <p className="text-text-on-dark/60 text-sm mt-4 max-w-md mx-auto leading-relaxed">
              Book a free demo and we'll show you exactly how FrostBot handles leads for businesses like yours — live, on the call.
            </p>
            <Button
              size="lg"
              onClick={openForm}
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-10 py-5 text-base font-bold shadow-2xl shadow-secondary/40 hover:scale-105 transition-all mt-8"
            >
              Book a Free Demo →
            </Button>
            <p className="text-xs text-text-on-dark/30 mt-5 font-mono-tech tracking-wide">
              📍 Denver, Colorado
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAutomation;
