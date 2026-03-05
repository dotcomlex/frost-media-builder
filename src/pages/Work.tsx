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

      <section className="bg-gradient-to-b from-frost-light to-background pt-24 pb-10 md:pt-32 md:pb-14 px-5 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-frost-pattern opacity-30" />
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="font-mono-tech text-[10px] tracking-widest uppercase text-ice-blue mb-3">Portfolio</p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight max-w-2xl mx-auto">
              Recent Website Designs
            </h1>
            <p className="text-muted-foreground text-sm mt-3 max-w-lg mx-auto">
              Premium websites built for businesses across every industry — designed to convert and built to last.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-8 md:py-12 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-xl overflow-hidden bg-white shadow-md shadow-black/[0.05] hover:shadow-lg hover:shadow-black/[0.1] transition-all duration-400"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-sm font-bold text-foreground">{p.name}</h3>
                    <span className="text-[9px] font-mono-tech tracking-widest uppercase text-muted-foreground bg-frost-light px-2 py-0.5 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground text-xs mb-3">Want something like this for your business?</p>
            <Button
              onClick={openForm}
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-8 py-4 font-bold text-sm shadow-xl shadow-secondary/30"
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
