import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";

const painPoints = [
  { title: "Shared Leads", desc: "HomeAdvisor sells your lead to 3-5 other HVAC companies. First to call wins. You're always racing." },
  { title: "Seasonal Slowdowns", desc: "Business drops hard in spring and fall. You need consistent year-round lead flow to stay profitable." },
  { title: "Price Shoppers", desc: "Marketplace leads just want the cheapest quote. They're not looking for quality work or service." },
];

const solutions = [
  { title: "100% Exclusive Leads", desc: "Every lead goes only to you. Never shared with competitors. You're not racing against 4 other HVAC companies." },
  { title: "AI Instant Response", desc: "FrostBot™ responds to every lead in under 60 seconds, 24/7. Even when you're on a job site or after hours." },
  { title: "Pre-Qualified Leads", desc: "AI qualifies leads before they reach you. Only serious buyers with real HVAC needs get through." },
];

const IndustryHVAC = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">HVAC Marketing That Actually Works</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Generate exclusive leads for your HVAC business. No more shared leads from HomeAdvisor or Angi.
          </p>
          <button onClick={openForm} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-colors">
            Get Started
          </button>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Challenges HVAC Contractors Face</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((p) => (
              <div key={p.title} className="bg-slate-900 p-8 rounded-xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">How We Help HVAC Businesses</h2>
          <div className="space-y-6">
            {solutions.map((s) => (
              <div key={s.title} className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-green-500 text-2xl">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to grow your HVAC business?</h2>
          <p className="text-xl text-slate-300 mb-8">Book a free strategy session to see how we can help.</p>
          <button onClick={openForm} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-colors">
            Book Free Strategy Call
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryHVAC;
