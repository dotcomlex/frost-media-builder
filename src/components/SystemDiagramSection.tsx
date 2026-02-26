import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { CheckCircle2, Clock, Wifi, Target, UserCheck } from "lucide-react";

const conversation = [
  { sender: "lead", text: "Hey, I need a quote for a kitchen remodel" },
  { sender: "ai", text: "Hi! I'd be happy to help you get a quote for your kitchen remodel. To give you an accurate estimate, I just need a few quick details. What's the size of your kitchen?" },
  { sender: "lead", text: "About 200 sq ft" },
  { sender: "ai", text: "Perfect! And what type of work are you looking for? Full remodel, just cabinets, countertops, or something else?" },
  { sender: "lead", text: "Full remodel - cabinets, countertops, flooring" },
  { sender: "ai", text: "Great! I can get you scheduled for a free in-home estimate. We have availability this week. What day works best - Tuesday, Wednesday, or Thursday?" },
  { sender: "lead", text: "Thursday works" },
  { sender: "ai", text: "I have openings at 10am, 2pm, or 4pm on Thursday. Which time is best for you?" },
  { sender: "lead", text: "2pm" },
  { sender: "ai", text: "Excellent! You're scheduled for Thursday at 2pm. You'll get a text reminder the day before. The estimate is completely free and usually takes about 30 minutes. See you Thursday!" },
];

const stats = [
  { icon: Clock, value: "< 60 sec", label: "Response Time" },
  { icon: Wifi, value: "24/7", label: "Availability" },
  { icon: Target, value: "100%", label: "Qualification Rate" },
  { icon: UserCheck, value: "Zero", label: "Manual Work" },
];

const TypingIndicator = () => (
  <div className="flex gap-1 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 rounded-full bg-frost-blue/60"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </div>
);

const SystemDiagramSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    let idx = 0;
    const showNext = () => {
      if (idx >= conversation.length) {
        setTimeout(() => setBooked(true), 500);
        return;
      }
      const current = conversation[idx];
      if (current.sender === "ai") {
        setShowTyping(true);
        setTimeout(() => {
          setShowTyping(false);
          idx++;
          setVisibleMessages(idx);
          setTimeout(showNext, 1200);
        }, 1500);
      } else {
        idx++;
        setVisibleMessages(idx);
        setTimeout(showNext, 800);
      }
    };
    setTimeout(showNext, 600);
  }, [isInView]);

  return (
    <section id="systems" className="py-16 md:py-24 lg:py-32 bg-[#0A0E1A] bg-grid-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-frost-blue mb-4">AI Systems In Action</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Watch Our AI Work in Real-Time
          </h2>
        </motion.div>

        {/* Chat demo */}
        <div ref={ref} className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="border-b border-white/10 px-6 py-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-success relative">
                <span className="absolute inset-0 rounded-full bg-success animate-pulse-dot" />
              </div>
              <span className="text-white text-sm font-medium">Frost AI Assistant</span>
              <span className="text-frost-blue text-xs font-mono-tech ml-auto">LIVE</span>
            </div>

            <div className="p-6 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto">
              {conversation.slice(0, visibleMessages).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === "lead" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.sender === "lead"
                        ? "bg-frost-blue text-white rounded-br-md"
                        : "bg-white/10 text-slate-200 rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {showTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-2xl rounded-bl-md">
                    <TypingIndicator />
                  </div>
                </div>
              )}
              {booked && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="flex justify-center"
                >
                  <div className="bg-success/20 border border-success/30 rounded-xl px-6 py-3 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span className="text-success font-bold font-heading">BOOKED</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="h-6 w-6 text-frost-blue mx-auto mb-3" />
              <p className="text-2xl md:text-3xl font-bold text-white font-heading">{stat.value}</p>
              <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDiagramSection;
