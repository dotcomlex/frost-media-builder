import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";

import workRizeshift from "@/assets/work-rizeshift.png";
import workHelixr from "@/assets/work-helixr.png";
import workSkihaven from "@/assets/work-skihaven.png";
import workIsprout from "@/assets/work-isprout.png";
import workProfx from "@/assets/work-profx.png";
import workSmartgravity from "@/assets/work-smartgravity.png";
import workArchitude from "@/assets/work-architude.png";

const projects = [
  { img: workRizeshift, name: "RizeShift", tag: "Tech / HR", desc: "All-in-one HR and payroll platform with modern UI" },
  { img: workHelixr, name: "Helixr", tag: "Technology", desc: "Enterprise technology consulting digital presence" },
  { img: workSkihaven, name: "Ski Haven Retreat", tag: "Hospitality", desc: "Luxury ski resort booking experience" },
  { img: workIsprout, name: "iSprout", tag: "Real Estate", desc: "Real estate platform with intuitive property search" },
  { img: workProfx, name: "PRO FX", tag: "Consumer Retail", desc: "Premium retail brand with e-commerce integration" },
  { img: workSmartgravity, name: "Smart Gravity", tag: "Services", desc: "Service company with modern lead generation" },
  { img: workArchitude, name: "Architude", tag: "Industrial", desc: "Industrial architecture firm portfolio" },
];

const Work = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen bg-alpine-dark overflow-x-hidden">
      <Navigation />

      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">Our Work</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-on-dark tracking-tight max-w-3xl">
              Websites That Convert. Brands That Stand Out.
            </h1>
            <p className="text-text-on-dark/50 text-base mt-4 max-w-xl">
              A selection of our recent website design and development projects across industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading text-lg font-bold text-text-on-dark">{p.name}</h3>
                    <span className="text-[10px] font-mono-tech tracking-widest uppercase text-ice-blue/70 bg-ice-blue/10 px-2 py-0.5 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-text-on-dark/45 text-sm">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-text-on-dark/50 text-sm mb-4">Want something like this for your business?</p>
            <Button
              onClick={openForm}
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-10 py-5 font-bold text-base shadow-xl shadow-secondary/30"
            >
              Start Your Project →
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;