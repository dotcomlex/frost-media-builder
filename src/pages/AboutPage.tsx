import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";

const AboutPage = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Frost Media</h1>
          <p className="text-xl text-slate-300">
            We build AI-powered marketing systems for home service contractors who are tired of paying for shared leads.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
          <div className="text-lg text-slate-300 space-y-6 leading-relaxed">
            <p>Frost Media started in Denver, Colorado with a simple mission: help contractors stop wasting money on shared leads from HomeAdvisor and Angi.</p>
            <p>After working with dozens of HVAC, plumbing, and concrete businesses, we saw the same problem over and over: contractors were paying $50-$100 for leads that were being sold to 5 other companies at the same time.</p>
            <p>The contractor who called first won the job. Everyone else wasted money.</p>
            <p>So we built a better system. 100% exclusive leads generated through Meta advertising. AI-powered instant response so you're always first to follow up. Automatic lead qualification so you only talk to serious buyers.</p>
            <p className="font-semibold text-white">Everything a contractor needs to grow without wasting money on tire-kickers.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Denver</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            We're based in Commerce City, Colorado because we understand the Denver market. We know the competition. We know what works in Colorado's home services industry.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">And we're invested in helping local businesses grow.</p>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to work together?</h2>
          <button onClick={openForm} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-colors">
            Book Free Strategy Call
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
