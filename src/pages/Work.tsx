import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import heroMountains from "@/assets/hero-mountains.png";

const CDN = "https://theuswebdesignllc.com/assets/images/portfolios";

type Category = { label: string; images: string[] };

const categories: Category[] = [
  { label: "Ecommerce", images: Array.from({ length: 8 }, (_, i) => `${CDN}/e-commerce/new${i + 1}.webp`) },
  { label: "Fitness", images: Array.from({ length: 8 }, (_, i) => `${CDN}/fitness/thumb/t-${i + 1}.webp`) },
  { label: "Food", images: Array.from({ length: 8 }, (_, i) => `${CDN}/food/thumb/t-${i + 1}.webp`) },
  { label: "Transport", images: Array.from({ length: 8 }, (_, i) => `${CDN}/transport/t-${i + 1}.webp`) },
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
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState(0);
  const [activeMobileCard, setActiveMobileCard] = useState<number | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const activeCategory = categories[activeTab];

  const handleCardClick = useCallback(
    (src: string, index: number) => {
      if (isMobile) {
        // First tap scrolls, second tap opens lightbox
        if (activeMobileCard === index) {
          setLightboxSrc(src);
          setActiveMobileCard(null);
        } else {
          setActiveMobileCard(index);
        }
      } else {
        setLightboxSrc(src);
      }
    },
    [isMobile, activeMobileCard]
  );

  // Reset mobile card when tab changes
  const handleTabChange = (i: number) => {
    setActiveTab(i);
    setActiveMobileCard(null);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      {/* Hero — compact, with mountain bg */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroMountains} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[hsl(var(--alpine-dark))]/85" />
          <div className="absolute inset-0 bg-frost-pattern" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono-tech text-[10px] tracking-widest uppercase text-ice-blue mb-3"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-5xl font-black tracking-tight text-white"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-white/60 text-sm md:text-base mt-2 max-w-md mx-auto"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
          >
            {isMobile ? "Tap to preview, tap again to view full design." : "Hover to preview, click to view the full design."}
          </motion.p>
        </div>
      </section>

      {/* Tab Bar + Grid — light background */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => handleTabChange(i)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 border ${
                  i === activeTab
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-background text-foreground/70 border-border hover:bg-background/80 hover:text-foreground"
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {activeCategory.images.map((src, i) => (
                <PortfolioCard
                  key={src}
                  src={src}
                  index={i}
                  label={activeCategory.label}
                  isMobile={isMobile}
                  isActive={isMobile && activeMobileCard === i}
                  onClick={() => handleCardClick(src, i)}
                />
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 flex flex-col"
            onClick={() => setLightboxSrc(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxSrc(null)}
              className="sticky top-4 right-4 self-end mr-4 mt-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Scrollable image */}
            <div className="flex-1 overflow-y-auto flex justify-center pb-8 -mt-10" onClick={(e) => e.stopPropagation()}>
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={lightboxSrc}
                alt="Full page design"
                className="w-full max-w-3xl h-auto object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Card Component ── */

interface PortfolioCardProps {
  src: string;
  index: number;
  label: string;
  isMobile: boolean;
  isActive: boolean;
  onClick: () => void;
}

const PortfolioCard = ({ src, index, label, isMobile, isActive, onClick }: PortfolioCardProps) => {
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const container = img.parentElement;
    if (!container) return;
    const containerH = container.clientHeight;
    const imgH = img.naturalHeight * (container.clientWidth / img.naturalWidth);
    const diff = imgH - containerH;
    if (diff > 0) {
      const duration = Math.max(3, diff / 250);
      img.dataset.scrollY = `-${diff}px`;
      img.dataset.scrollDuration = `${duration}s`;
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    if (isMobile) return;
    const img = e.currentTarget;
    const scrollY = img.dataset.scrollY;
    const dur = img.dataset.scrollDuration || "3s";
    if (scrollY) {
      img.style.transition = `transform ${dur} ease-in-out`;
      img.style.transform = `translateY(${scrollY})`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    if (isMobile) return;
    const img = e.currentTarget;
    const dur = img.dataset.scrollDuration || "3s";
    img.style.transition = `transform ${dur} ease-in-out`;
    img.style.transform = "translateY(0)";
  };

  // Mobile: apply scroll via isActive
  const getMobileStyle = (el: HTMLImageElement | null): React.CSSProperties => {
    if (!isMobile || !el) return {};
    const scrollY = el.dataset.scrollY;
    const dur = el.dataset.scrollDuration || "3s";
    if (isActive && scrollY) {
      return { transition: `transform ${dur} ease-in-out`, transform: `translateY(${scrollY})` };
    }
    return { transition: `transform ${dur} ease-in-out`, transform: "translateY(0)" };
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      onClick={onClick}
      className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-background border border-border shadow-sm hover:shadow-xl cursor-pointer transition-shadow duration-300"
    >
      <img
        src={src}
        alt={`${label} design ${index + 1}`}
        loading="lazy"
        className="w-full h-auto absolute top-0 left-0 object-cover object-top will-change-transform"
        onLoad={handleImageLoad}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={(el) => {
          if (el && isMobile) {
            const style = getMobileStyle(el);
            if (style.transform) {
              el.style.transition = style.transition as string;
              el.style.transform = style.transform as string;
            }
          }
        }}
      />

      {/* Mobile hint */}
      {isMobile && !isActive && (
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3 pointer-events-none">
          <p className="text-white/80 text-[10px] font-mono-tech tracking-wider text-center">Tap to preview</p>
        </div>
      )}

      {/* Light overlay on hover (desktop) */}
      {!isMobile && (
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </motion.div>
  );
};

export default Work;
