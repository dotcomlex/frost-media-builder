import { motion } from "framer-motion";
import { Phone, MessageSquare, Globe, Send } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";

const channels = [
  { icon: Phone, label: "Voice Calls" },
  { icon: MessageSquare, label: "SMS" },
  { icon: Globe, label: "Web Chat" },
  { icon: Send, label: "Social DMs" },
];

const industries = ["Home Services", "Beauty & Med Spa", "E-Commerce", "Insurance", "Real Estate", "Fitness"];

const chatMessages = [
  { from: "customer", text: "Hi, I need a quote for a roof repair" },
  { from: "ai", text: "Hey! I'd love to help. Can you tell me roughly how large the area is? And are you seeing any leaks currently?" },
  { from: "customer", text: "About 200 sq ft, yes there's a small leak" },
  { from: "ai", text: "Got it — I'm checking availability now. We can have someone out tomorrow between 9-11am. Want me to lock that in for you?" },
];

const SystemBreakdownSection = () => {
  const { openForm } = useContactForm();

  return (
    <section className="bg-frost-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Mock Phone Chat */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="mx-auto max-w-sm">
              {/* Phone frame */}
              <div className="rounded-[2rem] bg-alpine-dark p-2 shadow-2xl shadow-black/30">
                <div className="rounded-[1.5rem] bg-alpine-dark overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-5 pt-3 pb-2">
                    <span className="text-[10px] text-text-on-dark/50 font-mono-tech">Frost AI Agent</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      <span className="text-[10px] text-success font-mono-tech">Online</span>
                    </div>
                  </div>

                  {/* Chat area */}
                  <div className="px-4 py-3 space-y-3 min-h-[320px]">
                    {chatMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.2 }}
                        className={`flex ${msg.from === "customer" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
                            msg.from === "customer"
                              ? "bg-secondary text-secondary-foreground rounded-br-md"
                              : "bg-white/10 text-text-on-dark/90 rounded-bl-md"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Input area */}
                  <div className="px-4 pb-4">
                    <div className="rounded-full bg-white/5 border border-white/10 px-4 py-2.5 flex items-center gap-2">
                      <span className="text-xs text-text-on-dark/30">Type a message...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Copy & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">Conversational AI</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground tracking-tight leading-tight">
              Your AI Team That Never Sleeps
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mt-5 leading-relaxed">
              Our AI agents speak your brand, know your services, and engage every prospect the moment they reach out. Voice calls, texts, website chat, social DMs — one intelligent system, zero missed opportunities.
            </p>

            {/* Stat callouts */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-xl bg-white shadow-sm">
                <p className="font-heading text-2xl md:text-3xl font-black text-ice-blue">&lt; 5s</p>
                <p className="text-[11px] text-muted-foreground mt-1 font-medium">Response Time</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white shadow-sm">
                <p className="font-heading text-2xl md:text-3xl font-black text-secondary">24/7</p>
                <p className="text-[11px] text-muted-foreground mt-1 font-medium">Availability</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white shadow-sm">
                <p className="font-heading text-2xl md:text-3xl font-black text-success">100%</p>
                <p className="text-[11px] text-muted-foreground mt-1 font-medium">On-Brand</p>
              </div>
            </div>

            {/* Channel pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {channels.map((c) => (
                <span key={c.label} className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/70 bg-ice-blue/[0.08] rounded-full px-3 py-1.5">
                  <c.icon className="h-3.5 w-3.5 text-ice-blue" />
                  {c.label}
                </span>
              ))}
            </div>

            {/* Industries */}
            <div className="flex flex-wrap gap-2 mt-4">
              {industries.map((ind) => (
                <span key={ind} className="text-[11px] font-mono-tech tracking-wider text-muted-foreground bg-foreground/[0.04] rounded-full px-3 py-1">
                  {ind}
                </span>
              ))}
            </div>

            <Button
              onClick={openForm}
              className="mt-8 bg-ice-blue hover:bg-deep-ice text-primary-foreground rounded-xl px-8 py-5 font-semibold shadow-lg shadow-ice-blue/20"
            >
              See It In Action →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SystemBreakdownSection;
