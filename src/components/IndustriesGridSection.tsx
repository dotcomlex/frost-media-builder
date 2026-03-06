import { Wind, Droplets, Hammer, Zap, Home, Paintbrush, TreePine, Wrench, ArrowRight } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";

const industries = [
  { icon: Wind, title: "HVAC", sub: "Heating & Cooling" },
  { icon: Droplets, title: "Plumbing", sub: "Residential & Commercial" },
  { icon: Hammer, title: "Concrete", sub: "Driveways & Patios" },
  { icon: Zap, title: "Electrical", sub: "Licensed Electricians" },
  { icon: Home, title: "Roofing", sub: "Residential & Commercial" },
  { icon: Paintbrush, title: "Painting", sub: "Interior & Exterior" },
  { icon: TreePine, title: "Landscaping", sub: "Design & Maintenance" },
  { icon: Wrench, title: "Remodeling", sub: "Home Renovation" },
];

const IndustriesGridSection = () => {
  const { openForm } = useContactForm();

  return (
    <section className="py-24 bg-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-sky-400" />
            <span className="text-sm font-semibold text-sky-400 uppercase tracking-wider">Industries We Serve</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-heading">
            Built for Home Service Contractors
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed">
            We specialize in marketing systems for trade businesses across Colorado. From HVAC to concrete, we understand your market.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(({ icon: Icon, title, sub }) => (
            <button
              key={title}
              onClick={openForm}
              className="group relative bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-300 overflow-hidden text-left"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-sky-500/0 group-hover:from-sky-500/10 group-hover:to-transparent transition-all duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-7 h-7 text-sky-400" />
                </div>
                <div className="text-base font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">{title}</div>
                <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{sub}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            onClick={openForm}
            className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold text-lg group transition-colors"
          >
            See All Industries We Serve
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default IndustriesGridSection;
