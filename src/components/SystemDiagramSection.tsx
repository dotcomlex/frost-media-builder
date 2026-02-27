import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "@/components/ui/testimonial-cards";

const reviews = [
  { name: "Marcus T.", role: "HVAC Owner", location: "Phoenix, AZ", tag: "HVAC", quote: "Frost Media built us an AI lead system that completely filled our summer schedule. We had to hire two new techs just to keep up. Best investment we've ever made.", avatarId: 11 },
  { name: "Sarah L.", role: "Beauty Studio Owner", location: "Denver, CO", tag: "Beauty", quote: "I went from empty afternoons to a full waitlist in three weeks. Their ad campaigns and AI booking assistant changed everything for my studio.", avatarId: 32 },
  { name: "David R.", role: "Concrete Contractor", location: "Dallas, TX", tag: "Concrete", quote: "We closed more jobs in Q1 than the entire previous year. The lead gen system they built is a machine — quality leads, every single day.", avatarId: 15 },
  { name: "Jennifer K.", role: "E-Commerce Brand Owner", location: "Los Angeles, CA", tag: "E-Commerce", quote: "Our ROAS tripled after they restructured our ad accounts. The creative testing framework alone was worth 10x what we paid.", avatarId: 26 },
  { name: "Mike P.", role: "Painting Company Owner", location: "Denver, CO", tag: "Painting", quote: "Every estimate I go on now actually closes. Their AI chatbot pre-qualifies every lead before I even show up. No more wasted drives.", avatarId: 53 },
  { name: "Carlos M.", role: "Roofing Company Owner", location: "Tampa, FL", tag: "Roofing", quote: "We went from competing on price to being the go-to roofer in our zip codes. Booked out months in advance now.", avatarId: 59 },
  { name: "Amanda W.", role: "Insurance Agent", location: "Austin, TX", tag: "Insurance", quote: "Their AI chatbot handles all my inbound leads instantly. I used to lose prospects because I couldn't respond fast enough. Not anymore.", avatarId: 44 },
  { name: "Jason B.", role: "Real Estate Team Lead", location: "Miami, FL", tag: "Real Estate", quote: "Our lead gen pipeline runs completely on autopilot. Frost Media set it up, and now we just focus on closing deals.", avatarId: 60 },
];

const SystemDiagramSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="work" className="py-16 md:py-24 bg-alpine-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-ice-blue mb-3">Social Proof</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-text-on-dark/60 text-lg mt-4 max-w-lg mx-auto">
            Real results from real businesses we've helped scale.
          </p>
        </motion.div>

        {/* Scroll arrows (desktop) */}
        <div className="hidden md:flex justify-end gap-2 mb-4">
          <button
            onClick={() => scroll("left")}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-text-on-dark/70 hover:bg-white/10 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-text-on-dark/70 hover:bg-white/10 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Scrolling row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {reviews.map((r) => (
            <TestimonialCard
              key={r.name}
              avatarUrl={`https://i.pravatar.cc/128?img=${r.avatarId}`}
              name={r.name}
              role={r.role}
              location={r.location}
              tag={r.tag}
              quote={r.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDiagramSection;
