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
  { from: "ai", text: "Hey! I'd love to help. Can you tell me roughly how large the area is?" },
  { from: "customer", text: "About 200 sq ft, yes there's a small leak" },
  { from: "ai", text: "Got it — we can have someone out tomorrow 9-11am. Want me to lock that in?" },
];

const SystemBreakdownSection = () => {
  const { openForm } = useContactForm();

  return (
    <section className="bg-frost-light overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Mock Phone Chat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-1"
          >
            <div className="mx-auto max-w-[280px]">
              <div className="rounded-[1.75rem] bg-alpine-dark p-1.5 shadow-xl shadow-black/20">
                <div className="rounded-[1.25rem] bg-alpine-dark overflow-hidden">
                  <div className="flex items-center justify-between px-4 pt-2.5 pb-1.5">
                    <span className="text-[9px] text-text-on-dark/50 font-mono-tech">Frost AI Agent</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                      <span className="text-[9px] text-success font-mono-tech">Online</span>
                    </div>
                  </div>

                  <div className="px-3 py-2 space-y-2 min-h-[200px]">
                    {chatMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.15 }}
                        className={`flex ${msg.from === "customer" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-xl px-3 py-2 text-[11px] leading-relaxed ${
                            msg.from === "customer"
                              ? "bg-secondary text-secondary-foreground rounded-br-sm"
                              : "bg-white/10 text-text-on-dark/85 rounded-bl-sm"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="px-3 pb-3">
                    <div className="rounded-full bg-white/5 border border-white/10 px-3 py-2 flex items-center">
                      <span className="text-[10px] text-text-on-dark/25">Type a message...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Copy & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-2"
          >
            <p className="font-mono-tech text-[10px] tracking-widest uppercase text-ice-blue mb-2">Conversational AI</p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-foreground tracking-tight leading-tight">
              Your AI Team That Never Sleeps
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mt-4 leading-relaxed">
              Our AI agents speak your brand, know your services, and engage every prospect the moment they reach out. Voice, text, chat, DMs — one system, zero missed opportunities.
            </p>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="text-center p-3 rounded-lg bg-white shadow-sm">
                <p className="font-heading text-xl md:text-2xl font-black text-ice-blue">&lt; 30s</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">Response</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white shadow-sm">
                <p className="font-heading text-xl md:text-2xl font-black text-secondary">24/7</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">Availability</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white shadow-sm">
                <p className="font-heading text-xl md:text-2xl font-black text-success">100%</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">On-Brand</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-5">
              {channels.map((c) => (
                <span key={c.label} className="inline-flex items-center gap-1 text-[10px] font-medium text-foreground/70 bg-ice-blue/[0.08] rounded-full px-2.5 py-1">
                  <c.icon className="h-3 w-3 text-ice-blue" />
                  {c.label}
                </span>
              ))}
            </div>

            <div className="hidden md:flex flex-wrap gap-1.5 mt-3">
              {industries.map((ind) => (
                <span key={ind} className="text-[10px] font-mono-tech tracking-wider text-muted-foreground bg-foreground/[0.04] rounded-full px-2.5 py-0.5">
                  {ind}
                </span>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SystemBreakdownSection;
