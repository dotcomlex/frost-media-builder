import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarDavid from "@/assets/avatar-david.jpg";
import avatarMike from "@/assets/avatar-mike.jpg";
import avatarCarlos from "@/assets/avatar-carlos.jpg";
import avatarBrian from "@/assets/avatar-brian.jpg";
import avatarPriya from "@/assets/avatar-priya.jpg";

const testimonials = [
  {
    name: "Juan Rodriguez",
    company: "14er Renovations",
    industry: "Concrete & Driveways",
    quote: "Before Frost Media, we were burning money on Angi leads and getting nowhere. Now we have a predictable system that generates qualified leads every single day. Best decision we made for our business.",
    avatar: avatarDavid,
    platform: "Google Reviews",
  },
  {
    name: "Maria",
    company: "Divas Beauty Studio",
    industry: "Beauty Services",
    quote: "1,900 qualified leads in one month. I still can't believe it. The AI system handles everything—I just show up to appointments that are already pre-sold.",
    avatar: avatarSarah,
    platform: "Google Reviews",
  },
  {
    name: "Jose",
    company: "Jose's Painting",
    industry: "Residential Painting",
    quote: "Christian and his team built us a complete infrastructure—ads, AI follow-up, CRM, everything. We finally have visibility into our marketing ROI.",
    avatar: avatarMike,
    platform: "Clutch",
  },
  {
    name: "Carlos M.",
    company: "Roofing Solutions",
    industry: "Roofing",
    quote: "We went from competing on price to being the go-to roofer in our zip codes. Booked out months in advance now.",
    avatar: avatarCarlos,
    platform: "Google Reviews",
  },
  {
    name: "Brian H.",
    company: "Elite Plumbing",
    industry: "Plumbing",
    quote: "I was skeptical about AI automation, but their system books appointments while I sleep. Revenue is up 40% in three months.",
    avatar: avatarBrian,
    platform: "Google Reviews",
  },
  {
    name: "Priya S.",
    company: "Glow Med Spa",
    industry: "Med Spa",
    quote: "They built our entire funnel from scratch — ads, landing page, AI follow-up. We went from 5 bookings a week to 30+. Unreal.",
    avatar: avatarPriya,
    platform: "Google Reviews",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -380 : 380, behavior: "smooth" });
  };

  return (
    <section className="bg-card py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-3">Client Voices</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="hidden md:flex justify-end gap-2 mb-4">
          <button onClick={() => scroll("left")} className="rounded-full border border-border bg-background p-2.5 text-muted-foreground hover:bg-muted transition-colors" aria-label="Scroll left">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => scroll("right")} className="rounded-full border border-border bg-background p-2.5 text-muted-foreground hover:bg-muted transition-colors" aria-label="Scroll right">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-3 -mx-4 px-4"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-background border border-border rounded-2xl p-8 min-w-[340px] md:min-w-[380px] snap-start flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-base text-foreground/90 leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">{t.platform}</p>
              </div>
            ))}
            <div className="w-4 shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
