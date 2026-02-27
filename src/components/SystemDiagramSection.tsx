import { motion } from "framer-motion";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const reviews = [
  {
    name: "Marcus T.",
    role: "HVAC Owner",
    location: "Phoenix, AZ",
    tag: "HVAC",
    quote: "Frost Media built us an AI lead system that completely filled our summer schedule. We had to hire two new techs just to keep up. Best investment we've ever made.",
  },
  {
    name: "Sarah L.",
    role: "Beauty Studio Owner",
    location: "Denver, CO",
    tag: "Beauty",
    quote: "I went from empty afternoons to a full waitlist in three weeks. Their ad campaigns and AI booking assistant changed everything for my studio.",
  },
  {
    name: "David R.",
    role: "Concrete Contractor",
    location: "Dallas, TX",
    tag: "Concrete",
    quote: "We closed more jobs in Q1 than the entire previous year. The lead gen system they built is a machine — quality leads, every single day.",
  },
  {
    name: "Jennifer K.",
    role: "E-Commerce Brand Owner",
    location: "Los Angeles, CA",
    tag: "E-Commerce",
    quote: "Our ROAS tripled after they restructured our ad accounts. The creative testing framework alone was worth 10x what we paid.",
  },
  {
    name: "Mike P.",
    role: "Painting Company Owner",
    location: "Denver, CO",
    tag: "Painting",
    quote: "Every estimate I go on now actually closes. Their AI chatbot pre-qualifies every lead before I even show up. No more wasted drives.",
  },
  {
    name: "Carlos M.",
    role: "Roofing Company Owner",
    location: "Tampa, FL",
    tag: "Roofing",
    quote: "We went from competing on price to being the go-to roofer in our zip codes. Booked out months in advance now.",
  },
  {
    name: "Amanda W.",
    role: "Insurance Agent",
    location: "Austin, TX",
    tag: "Insurance",
    quote: "Their AI chatbot handles all my inbound leads instantly. I used to lose prospects because I couldn't respond fast enough. Not anymore.",
  },
  {
    name: "Jason B.",
    role: "Real Estate Team Lead",
    location: "Miami, FL",
    tag: "Real Estate",
    quote: "Our lead gen pipeline runs completely on autopilot. Frost Media set it up, and now we just focus on closing deals.",
  },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("");
}

const avatarColors = [
  "bg-ice-blue/20 text-ice-blue",
  "bg-secondary/20 text-secondary",
  "bg-primary/20 text-primary",
  "bg-amber/20 text-amber",
];

const TestimonialCard = ({ review, index }: { review: typeof reviews[0]; index: number }) => (
  <div className="bg-card border border-border rounded-2xl p-7 md:p-8 shadow-md flex flex-col h-full min-w-0">
    <div className="flex items-center gap-4 mb-5">
      <div className={`w-12 h-12 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center font-heading font-bold text-sm`}>
        {getInitials(review.name)}
      </div>
      <div>
        <p className="font-heading font-bold text-foreground text-sm">{review.name}</p>
        <p className="text-muted-foreground text-xs">{review.role} · {review.location}</p>
      </div>
    </div>
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
      ))}
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{review.quote}"</p>
    <div className="mt-5">
      <span className="text-xs font-bold font-mono-tech tracking-wider uppercase bg-primary/10 text-primary px-3 py-1 rounded-full">
        {review.tag}
      </span>
    </div>
  </div>
);

const SystemDiagramSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <section id="work" className="py-16 md:py-24 bg-frost-light">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-3">Social Proof</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg mt-4">Real results from real businesses we've helped scale.</p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {reviews.map((review, i) => (
              <div key={review.name} className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0">
                <TestimonialCard review={review} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "bg-primary scale-125" : "bg-border hover:bg-muted-foreground/30"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDiagramSection;
