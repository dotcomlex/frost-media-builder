import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroMountains from "@/assets/hero-mountains.png";

const CDN = "https://theuswebdesignllc.com/assets/images/portfolios";

type Category = {
  label: string;
  images: string[];
};

const categories: Category[] = [
  {
    label: "Ecommerce",
    images: Array.from({ length: 8 }, (_, i) => `${CDN}/e-commerce/new${i + 1}.webp`),
  },
  {
    label: "Fitness",
    images: Array.from({ length: 8 }, (_, i) => `${CDN}/fitness/thumb/t-${i + 1}.webp`),
  },
  {
    label: "Food",
    images: Array.from({ length: 8 }, (_, i) => `${CDN}/food/thumb/t-${i + 1}.webp`),
  },
  {
    label: "Transport",
    images: Array.from({ length: 8 }, (_, i) => `${CDN}/transport/t-${i + 1}.webp`),
  },
  {
    label: "Technology",
    images: [
      ...Array.from({ length: 6 }, (_, i) => `${CDN}/technology/${i + 1}.webp`),
      `${CDN}/technology/t-7.webp`,
      `${CDN}/technology/t-8.webp`,
    ],
  },
  {
    label: "Real Estate",
    images: [
      ...Array.from({ length: 6 }, (_, i) => `${CDN}/real-state/Real_estate-portfolio-${i + 1}.webp`),
      `${CDN}/real-state/t-7.webp`,
      `${CDN}/real-state/t-8.webp`,
    ],
  },
  {
    label: "Fintech",
    images: [
      ...Array.from({ length: 6 }, (_, i) => `${CDN}/finance/Finance-portfolio-${i + 1}.webp`),
      `${CDN}/finance/t-7.webp`,
      `${CDN}/finance/t-8.webp`,
    ],
  },
  {
    label: "Construction",
    images: [
      ...Array.from({ length: 6 }, (_, i) => `${CDN}/construction/${i + 1}.webp`),
      `${CDN}/construction/t-7.webp`,
      `${CDN}/construction/t-8.webp`,
    ],
  },
];

const Work = () => {
  const { openForm } = useContactForm();
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = categories[activeTab];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 px-5 md:px-8 bg-[hsl(var(--alpine-dark))]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono-tech text-[10px] tracking-widest uppercase text-ice-blue mb-4"
          >
            Website Design Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white"
          >
            High-Converting Websites That Drive Real Results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-sm md:text-base mt-4 max-w-xl mx-auto"
          >
            Browse our portfolio across industries — hover to preview the full page design.
          </motion.p>
        </div>
      </section>

      {/* Tab Bar + Grid */}
      <section className="py-12 md:py-20 px-5 md:px-8 bg-[hsl(var(--alpine-dark))]">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 border ${
                  i === activeTab
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {activeCategory.images.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-white/5 border border-white/10 cursor-default"
                >
                  <img
                    src={src}
                    alt={`${activeCategory.label} design ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto absolute top-0 left-0 object-cover object-top transition-transform duration-[4s] ease-linear group-hover:-translate-y-[calc(100%-100%*3/4)] will-change-transform"
                    style={{
                      /* The image is taller than the container — on hover it scrolls to the bottom */
                    }}
                    onLoad={(e) => {
                      const img = e.currentTarget;
                      const container = img.parentElement;
                      if (container) {
                        const containerH = container.clientHeight;
                        const imgH = img.naturalHeight * (container.clientWidth / img.naturalWidth);
                        const diff = imgH - containerH;
                        if (diff > 0) {
                          img.style.setProperty("--scroll-y", `-${diff}px`);
                        }
                      }
                    }}
                    onMouseEnter={(e) => {
                      const scrollY = e.currentTarget.style.getPropertyValue("--scroll-y");
                      if (scrollY) {
                        e.currentTarget.style.transform = `translateY(${scrollY})`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroMountains} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[hsl(var(--alpine-dark))]/85" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Want Something Like This?
            </h2>
            <p className="text-white/60 text-sm mt-4 max-w-md mx-auto leading-relaxed">
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
