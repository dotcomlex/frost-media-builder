import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";

const caseStudies = [
  {
    industry: "Beauty Studio",
    headline: "1,900 Leads in 30 Days",
    desc: "Divas Beauty Studio needed consistent bookings. We launched Meta ads with AI instant response. Result: 5+ appointments booked daily on autopilot.",
    metrics: [
      { label: "Leads Generated", value: "1,900" },
      { label: "Time Period", value: "30 days" },
      { label: "Cost Per Lead", value: "$3.20" },
    ],
  },
  {
    industry: "Concrete & Driveways",
    headline: "4.2x Return on Ad Spend",
    desc: "14er Renovations was tired of shared Angi leads. We built an exclusive lead system with AI follow-up. Revenue jumped significantly in 6 months.",
    metrics: [
      { label: "ROAS", value: "4.2x" },
      { label: "Time Period", value: "6 months" },
      { label: "Lead Source", value: "100% Exclusive" },
    ],
  },
  {
    industry: "Residential Painting",
    headline: "78% Close Rate",
    desc: "Jose's Painting needed better lead quality. Our AI pre-qualifies leads before Jose calls. Close rate went from 40% to 78%.",
    metrics: [
      { label: "Close Rate", value: "78%" },
      { label: "Previous Close Rate", value: "40%" },
      { label: "Improvement", value: "+95%" },
    ],
  },
];

const CaseStudies = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Real Results from Real Businesses</h1>
          <p className="text-xl text-slate-300">See how we've helped contractors across Colorado grow their businesses.</p>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.headline} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
                <div className="p-8">
                  <div className="text-sm text-sky-400 font-semibold mb-2 uppercase tracking-wide">{cs.industry}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{cs.headline}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{cs.desc}</p>
                  <div className="space-y-3 mb-6 bg-slate-800 p-6 rounded-lg">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="flex justify-between items-center">
                        <span className="text-slate-400">{m.label}:</span>
                        <span className="text-white font-bold text-lg">{m.value}</span>
                      </div>
                    ))}
                  </div>
                  <button onClick={openForm} className="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-2">
                    Get Similar Results →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Want results like these?</h2>
          <p className="text-xl text-slate-300 mb-8">Book a free strategy call to see what we can do for your business.</p>
          <button onClick={openForm} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-colors">
            Book Free Strategy Call
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
