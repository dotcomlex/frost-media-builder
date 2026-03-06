import { motion } from "framer-motion";
import { Phone, MessageSquare, Globe, Send } from "lucide-react";

const channels = [
  { icon: Phone, label: "Voice Calls" },
  { icon: MessageSquare, label: "SMS" },
  { icon: Globe, label: "Web Chat" },
  { icon: Send, label: "Social DMs" },
];

const chatMessages = [
  { from: "customer", text: "Hi, I need a quote for a roof repair" },
  { from: "ai", text: "Hey! I'd love to help. Can you tell me roughly how large the area is?" },
  { from: "customer", text: "About 200 sq ft, yes there's a small leak" },
  { from: "ai", text: "Got it — we can have someone out tomorrow 9-11am. Want me to lock that in?" },
];

const SystemBreakdownSection = () => {
  return (
    <section className="bg-muted overflow-hidden relative">
      {/* Decorative blurred circles */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-56 h-56 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <p className="font-mono-tech text-[10px] tracking-widest uppercase text-muted-foreground mb-2">Conversational AI</p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-foreground tracking-tight leading-tight">
              Your AI Team That Never Sleeps
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mt-4 leading-relaxed">
              Our AI agents speak your brand, know your services, and engage every prospect the moment they reach out. Voice, text, chat, DMs — one system, zero missed opportunities.
            </p>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="text-center p-3 rounded-lg border border-border bg-background border-t-2 border-t-primary">
                <p className="font-heading text-xl md:text-2xl font-black text-foreground">&lt; 30s</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">Response</p>
              </div>
              <div className="text-center p-3 rounded-lg border border-border bg-background border-t-2 border-t-primary">
                <p className="font-heading text-xl md:text-2xl font-black text-foreground">24/7</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">Availability</p>
              </div>
              <div className="text-center p-3 rounded-lg border border-border bg-background border-t-2 border-t-primary">
                <p className="font-heading text-xl md:text-2xl font-black text-foreground">100%</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">On-Brand</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-5">
              {channels.map((c) => (
                <span key={c.label} className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground bg-background rounded-full px-2.5 py-1 border border-border">
                  <c.icon className="h-3 w-3 text-primary" />
                  {c.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Phone Mock */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="relative mx-auto max-w-[300px]">
              {/* Glow behind phone */}
              <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative rounded-[2rem] bg-alpine-dark p-1.5 shadow-2xl shadow-primary/10 ring-1 ring-white/10">
                <div className="rounded-[1.5rem] bg-alpine-dark overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 pt-3 pb-2">
                    <span className="text-[9px] text-text-on-dark/50 font-mono-tech">Frost AI Agent</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[9px] text-primary font-mono-tech">Online</span>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="px-3 py-2 space-y-2.5 min-h-[220px]">
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
                      transition={{ delay: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/10 rounded-xl rounded-bl-sm px-4 py-2.5 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-text-on-dark/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-text-on-dark/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-text-on-dark/40 animate-bounce" style={{ animationDelay: '300ms' }} />
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SystemBreakdownSection;
