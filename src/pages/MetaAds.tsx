import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";

const competitors = [
  { name: "HomeAdvisor / Angi", desc: "Same lead sold to 3-5 contractors. First to call wins. You're racing against competitors.", price: "$15-$80 per shared lead", bad: true },
  { name: "Thumbtack", desc: "Pay to quote. Competing against 4+ contractors every single time. Expensive price shoppers.", price: "$20-$100+ per quote request", bad: true },
  { name: "Frost Media", desc: "100% exclusive. Lead only goes to you. No competition. No price shoppers.", price: "Flat monthly fee", bad: false },
];

const included = [
  { title: "Custom Ad Creative", desc: "Professional ad copy and images designed specifically for your service. Built to convert, not just get clicks." },
  { title: "Precise Audience Targeting", desc: "We target homeowners in your exact service area who need your services right now. Not random clicks." },
  { title: "Constant A/B Testing", desc: "We test different ads, audiences, and messaging to continuously lower your cost per lead." },
  { title: "You Own Your Ad Account", desc: "Your ad account, your data, your audience. No platform lock-in. You can leave anytime and keep everything." },
];

const MetaAds = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Facebook & Instagram Advertising</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            100% exclusive leads. Never shared with competitors. Custom campaigns built for your business.
          </p>
          <button onClick={openForm} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-colors">
            Get Started
          </button>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">The Problem with Lead Marketplaces</h2>
          <p className="text-xl text-slate-300 mb-12 text-center max-w-3xl mx-auto">
            HomeAdvisor, Angi, and Thumbtack sell the same lead to multiple contractors. You're competing on price from the start.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {competitors.map((c) => (
              <div key={c.name} className={`bg-slate-900 p-8 rounded-xl border-2 ${c.bad ? "border-red-500/30" : "border-green-500/30"}`}>
                <h3 className="text-xl font-bold text-white mb-3">{c.name}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{c.desc}</p>
                <p className={`font-semibold text-lg ${c.bad ? "text-red-400" : "text-green-400"}`}>{c.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">What's Included</h2>
          <div className="space-y-6">
            {included.map((f) => (
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

      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stop paying for shared leads</h2>
          <p className="text-xl text-slate-300 mb-8">See how many exclusive leads we can generate for your business.</p>
          <button onClick={openForm} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-colors">
            Book Free Strategy Call
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MetaAds;
