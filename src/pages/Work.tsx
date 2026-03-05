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

      {/* Hero */}
      <section className="bg-alpine-dark pt-28 pb-16 md:pt-36 md:pb-20 px-5 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.06] via-transparent to-primary/[0.04]" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono-tech text-xs tracking-widest uppercase text-ice-blue mb-3">Portfolio</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-on-dark tracking-tight max-w-3xl">
              Recent Website Designs
            </h1>
            <p className="text-text-on-dark/50 text-base mt-4 max-w-xl">
              Premium websites built for businesses across every industry — designed to convert and built to last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects grid — light background */}
      <section className="bg-frost-light py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-xl hover:shadow-primary/[0.08] transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-base font-bold text-foreground">{p.name}</h3>
                    <span className="text-[10px] font-mono-tech tracking-widest uppercase text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
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
