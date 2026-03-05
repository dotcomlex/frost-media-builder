import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import workRizeshift from "@/assets/work-rizeshift.png";
import workHelixr from "@/assets/work-helixr.png";
import workSkihaven from "@/assets/work-skihaven.png";
import workIsprout from "@/assets/work-isprout.png";
import workProfx from "@/assets/work-profx.png";
import workSmartgravity from "@/assets/work-smartgravity.png";
import workArchitude from "@/assets/work-architude.png";

const projects = [
  { img: workRizeshift, name: "RizeShift", tag: "Tech / HR" },
  { img: workHelixr, name: "Helixr", tag: "Technology" },
  { img: workSkihaven, name: "Ski Haven Retreat", tag: "Hospitality" },
  { img: workIsprout, name: "iSprout", tag: "Real Estate" },
  { img: workProfx, name: "PRO FX", tag: "Consumer Retail" },
  { img: workSmartgravity, name: "Smart Gravity", tag: "Services" },
  { img: workArchitude, name: "Architude", tag: "Industrial" },
];

const Work = () => {
  const { openForm } = useContactForm();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero — bright */}
      <section className="bg-gradient-to-b from-frost-light to-background pt-28 pb-14 md:pt-36 md:pb-20 px-5 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-frost-pattern opacity-30" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-4">Portfolio</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight max-w-3xl mx-auto">
              Recent Website Designs
            </h1>
            <p className="text-muted-foreground text-base mt-4 max-w-xl mx-auto">
              Premium websites built for businesses across every industry — designed to convert and built to last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-background py-10 md:py-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl overflow-hidden bg-white shadow-lg shadow-black/[0.06] hover:shadow-xl hover:shadow-black/[0.12] transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-base font-bold text-foreground">{p.name}</h3>
                    <span className="text-[10px] font-mono-tech tracking-widest uppercase text-muted-foreground bg-frost-light px-2.5 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>
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
            <p className="text-muted-foreground text-sm mb-4">Want something like this for your business?</p>
            <Button
              onClick={openForm}
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-10 py-5 font-bold text-base shadow-xl shadow-secondary/30"
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
