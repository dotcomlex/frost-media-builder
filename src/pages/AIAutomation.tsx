import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";

const steps = [
  { num: "1", title: "Lead Comes In", desc: "Someone fills out your website form, calls your number, or messages you on Facebook." },
  { num: "2", title: "AI Responds Instantly", desc: "FrostBot™ sends an automated text in under 60 seconds asking qualifying questions." },
  { num: "3", title: "You Get Qualified Lead", desc: "Pre-qualified lead details sent to your phone. Ready to close." },
];

const features = [
  { title: "24/7 Instant Response", desc: "Every lead gets a text response in under 60 seconds, even at 2am on Sunday." },
  { title: "Smart Qualification", desc: "AI asks the right questions to filter out tire-kickers and identify serious buyers." },
  { title: "Appointment Booking", desc: "Leads book directly into your calendar through natural text conversation." },
  { title: "Full CRM Integration", desc: "Every conversation saved to your CRM with complete lead history and notes." },
];

const AIAutomation = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">AI Lead Automation</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Respond to every lead in under 60 seconds. Qualify them automatically. Book appointments while you sleep.
          </p>
          <button onClick={openForm} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="bg-slate-900 p-8 rounded-xl border border-slate-700">
                <div className="text-5xl font-bold text-amber-500 mb-4">{s.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">What You Get</h2>
          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-green-500 text-2xl">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to automate your lead follow-up?</h2>
          <p className="text-xl text-slate-300 mb-8">Book a free strategy session to see exactly how FrostBot™ works for your business.</p>
          <button onClick={openForm} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-colors">
            Book Free Strategy Call
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAutomation;
