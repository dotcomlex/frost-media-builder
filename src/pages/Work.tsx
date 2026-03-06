import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";

import heroMountains from "@/assets/hero-mountains.png";
import carouselMorris from "@/assets/carousel-morris.png";
import carouselRizeshift from "@/assets/carousel-rizeshift.png";
import carouselSolarect from "@/assets/carousel-solarect.png";
import workRizeshift from "@/assets/work-rizeshift.png";
import workHelixr from "@/assets/work-helixr-full.png";
import workSkihaven from "@/assets/work-skihaven.png";
import workIsprout from "@/assets/work-isprout.png";
import workProfx from "@/assets/work-profx.png";
import workSmartgravity from "@/assets/work-smartgravity.png";
import workArchitude from "@/assets/work-architude.png";
import workIgauge from "@/assets/work-igauge.jpg";

const featuredProjects = [
  {
    name: "Morris Caps Inc.",
    description: "Morris Caps Inc. provides cutting-edge R&D cloud solutions for the biopharmaceutical industry, helping scientists accelerate innovation with advanced data management, collaboration, and workflow optimization.",
    img: carouselMorris,
    url: "https://morriscapsinc.com/",
  },
  {
    name: "RizeShift",
    description: "RizeShift is an all-in-one HR and payroll platform designed to streamline workforce management, automate payroll processing, and ensure compliance with real-time HR analytics.",
    img: carouselRizeshift,
    url: "https://rizeshift.com/",
  },
  {
    name: "Solarect",
    description: "Solarect Transport Inc. is a trusted freight transportation provider specializing in truckload, LTL, and intermodal shipping across the U.S. with competitive rates and reliable solutions.",
    img: carouselSolarect,
    url: "https://solarect.org/",
  },
];

const gridProjects = [
  { img: workHelixr, name: "Helixr", tag: "Technology", url: "http://helixr.com/" },
  { img: workIgauge, name: "QS I-GAUGE", tag: "Education", url: "https://www.igauge.in/" },
  { img: workSkihaven, name: "Ski Haven Retreat", tag: "Hospitality", url: "https://www.skihavenretreat.com/" },
  { img: workIsprout, name: "iSprout", tag: "Real Estate", url: "https://isprout.in/" },
  { img: workProfx, name: "PRO FX", tag: "Consumer Retail", url: "https://profx.com/" },
  { img: workSmartgravity, name: "Smart Gravity", tag: "Services", url: "https://smart-gravity.com/" },
  { img: workArchitude, name: "Architude", tag: "Industrial", url: "https://architude.org/" },
  { img: workRizeshift, name: "RizeShift", tag: "Tech / HR", url: "https://rizeshift.com/" },
];

const Work = () => {
  const { openForm } = useContactForm();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      {/* Hero Statement */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-5 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground"
          >
            We pride ourselves on top-tier design & development practices, where aesthetics and usability both play a key role
          </motion.h1>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="relative overflow-hidden">
        <div className="relative" ref={emblaRef}>
          <div className="flex">
            {featuredProjects.map((project) => (
              <div key={project.name} className="flex-[0_0_100%] min-w-0">
                <div
                  className="relative py-16 md:py-24 px-5 md:px-12 lg:px-20"
                  style={{
                    background: "linear-gradient(135deg, hsl(213 80% 50%) 0%, hsl(213 55% 14%) 100%)",
                  }}
                >
                  {/* Decorative curves */}
                  <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0]">
                    <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-10 md:h-16">
                      <path d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z" fill="hsl(0 0% 100%)" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] rotate-180">
                    <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-10 md:h-16">
                      <path d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z" fill="hsl(0 0% 100%)" />
                    </svg>
                  </div>

                  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                    {/* Text */}
                    <div className="md:w-2/5 text-center md:text-left">
                      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {project.name}
                      </h2>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-full px-6 py-3 text-sm font-bold transition-all hover:scale-105 shadow-lg"
                      >
                        View Project <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                    {/* Mockup */}
                    <div className="md:w-3/5">
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full rounded-lg shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Previous"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Next"
        >
          <ArrowRight className="h-5 w-5 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {featuredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === selectedIndex ? "bg-white scale-125" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {gridProjects.map((project, i) => (
              <motion.a
                key={project.name + i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group block"
              >
                <div className="relative rounded-2xl overflow-hidden bg-muted">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="mt-4 px-1">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-0.5">{project.tag}</p>
                </div>
              </motion.a>
            ))}
          </div>
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
