import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import heroMountains from "@/assets/hero-mountains.png";
import workRizeshift from "@/assets/work-rizeshift.png";
import workHelixr from "@/assets/work-helixr.png";
import workSkihaven from "@/assets/work-skihaven.png";
import workIsprout from "@/assets/work-isprout.png";
import workProfx from "@/assets/work-profx.png";
import workSmartgravity from "@/assets/work-smartgravity.png";
import workArchitude from "@/assets/work-architude.png";

const projects = [
  { img: workRizeshift, name: "RizeShift", tag: "Tech / HR", description: "HR tech platform with modern recruitment tools and candidate management." },
  { img: workHelixr, name: "Helixr", tag: "Technology", description: "SaaS product site with interactive demos and conversion-focused landing pages." },
  { img: workSkihaven, name: "Ski Haven Retreat", tag: "Hospitality", description: "Luxury resort website with immersive visuals and seamless booking integration." },
  { img: workIsprout, name: "iSprout", tag: "Real Estate", description: "Property listing platform with advanced search and virtual tour features." },
  { img: workProfx, name: "PRO FX", tag: "Consumer Retail", description: "E-commerce storefront with product showcases and streamlined checkout flow." },
  { img: workSmartgravity, name: "Smart Gravity", tag: "Services", description: "Professional services site with lead generation forms and case study highlights." },
  { img: workArchitude, name: "Architude", tag: "Industrial", description: "Architecture firm portfolio with project galleries and client testimonials." },
];

const Work = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero with mountain bg */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-5 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroMountains} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#070b14]/85" />
          <div className="absolute inset-0 bg-frost-pattern" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-ice-blue mb-5">
              Portfolio
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] max-w-3xl mx-auto">
              <span className="bg-gradient-to-r from-white via-white to-ice-blue bg-clip-text text-transparent">
                Recent Website Designs
              </span>
            </h1>
            <p className="text-text-on-dark/60 text-sm md:text-base mt-5 max-w-lg mx-auto leading-relaxed">
              Premium websites built for businesses across every industry — designed to convert and built to last.
            </p>
            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[2px] w-20 mx-auto mt-7 bg-gradient-to-r from-transparent via-ice-blue to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="relative py-12 md:py-20 px-5 md:px-8" style={{ background: 'linear-gradient(180deg, #0a0f1a 0%, #0d1829 50%, #0a0f1a 100%)' }}>
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 30%, hsl(213 80% 50% / 0.04), transparent)' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {projects.map((p, i) => {
              const isWide = i % 3 === 0;
              const num = String(i + 1).padStart(2, "0");

              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`group relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/[0.03] ${isWide ? "md:col-span-2" : ""}`}
                >
                  <div className={`relative overflow-hidden ${isWide ? "aspect-[16/10] md:aspect-[2.4/1]" : "aspect-[16/10]"}`}>
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 md:p-7">
                      <span className="font-mono-tech text-[10px] tracking-widest text-ice-blue/70 mb-1">{p.tag}</span>
                      <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-1">{p.name}</h3>
                      <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-md">{p.description}</p>
                    </div>
                    {/* Always-visible bottom info bar for mobile */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:hidden">
                      <h3 className="font-heading text-sm font-bold text-white">{p.name}</h3>
                      <span className="font-mono-tech text-[9px] tracking-widest text-ice-blue/60">{p.tag}</span>
                    </div>
                  </div>
                  {/* Project number */}
                  <span className="absolute top-3 left-4 font-mono-tech text-[10px] text-white/20 tracking-widest">{num}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroMountains} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#070b14]/80" />
          <div className="absolute inset-0 bg-frost-pattern" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono-tech text-[10px] tracking-widest uppercase text-ice-blue mb-4">Your Brand, Next</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark tracking-tight leading-tight">
              Want Something Like This?
            </h2>
            <p className="text-text-on-dark/50 text-sm mt-4 max-w-md mx-auto leading-relaxed">
              Let's build a website that makes your competitors nervous.
            </p>
            <Button
              size="lg"
              onClick={openForm}
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-10 py-5 text-base font-bold shadow-2xl shadow-secondary/40 hover:scale-105 transition-all mt-8"
            >
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
