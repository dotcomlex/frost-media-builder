import { motion } from "framer-motion";
import { Phone, MessageSquare, Globe, Send, CheckCircle2 } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";

const channels = [
  { icon: Phone, label: "Voice" },
  { icon: MessageSquare, label: "SMS" },
  { icon: Globe, label: "Web Chat" },
  { icon: Send, label: "Social DMs" },
];

const benefits = [
  "Responds to every lead in under 5 seconds",
  "Trained specifically on your industry & brand voice",
  "Books appointments and qualifies leads automatically",
  "Works 24/7 — no extra hires, no hold times",
  "Handles voice calls, texts, website chat & social DMs",
  "Proven across home services, beauty, e-commerce & more",
];

const SystemBreakdownSection = () => {
  const { openForm } = useContactForm();

  return (
    <section className="bg-frost-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">Conversational AI</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground tracking-tight leading-tight">
              Every Lead Gets an Instant, Intelligent Response
            </h2>
            <p className="text-muted-foreground text-base mt-4 leading-relaxed">
              Our AI agents speak your brand, know your services, and engage every prospect the moment they reach out — across every channel, around the clock. No missed calls. No slow replies. Just booked appointments and happier customers.
            </p>

            {/* Channel pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {channels.map((c) => (
                <span key={c.label} className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/70 bg-primary/[0.08] rounded-full px-3 py-1.5">
                  <c.icon className="h-3.5 w-3.5 text-primary" />
                  {c.label}
                </span>
              ))}
            </div>

            <Button
              onClick={openForm}
              className="mt-8 bg-primary hover:bg-deep-ice text-primary-foreground rounded-xl px-8 py-5 font-semibold"
            >
              See It In Action →
            </Button>
          </motion.div>

          {/* Right — Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/[0.04] transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span className="text-foreground/80 text-sm font-medium">{b}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SystemBreakdownSection;
