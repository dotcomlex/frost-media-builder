import { Bot, Check, ArrowRight } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";

const features = [
  {
    title: "Instant Response (< 60 seconds)",
    desc: "Every new lead gets an instant text response. 24/7/365. No exceptions.",
  },
  {
    title: "Automatic Pre-Qualification",
    desc: "AI asks the right questions to identify serious buyers before you call.",
  },
  {
    title: "Smart Appointment Booking",
    desc: "Leads book directly into your calendar through natural text conversation.",
  },
];

const FrostBotSection = () => {
  const { openForm } = useContactForm();

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-sky-500/20 blur-[100px] rounded-full" />
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-sky-500/20 rounded-3xl p-16 flex items-center justify-center">
              <Bot className="w-48 h-48 text-sky-400" strokeWidth={1.5} />
            </div>
            <div className="absolute -top-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-2xl">
              &lt;60sec Response
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sm font-semibold text-sky-400 uppercase tracking-wider">FrostBot™ AI System</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-heading">
              Never miss a lead again — even at 2am
            </h2>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              FrostBot™ responds to every lead in under 60 seconds, qualifies them automatically, and books appointments while you sleep.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mt-1">
                    <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white mb-1 group-hover:text-sky-400 transition-colors">
                      {f.title}
                    </div>
                    <div className="text-slate-400 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={openForm}
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 transition-all group"
            >
              See FrostBot™ in Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FrostBotSection;
