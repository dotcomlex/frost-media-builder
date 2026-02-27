import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { TestimonialCard } from "@/components/ui/testimonial-cards";

const reviews = [
  { name: "Marcus T.", role: "HVAC Owner", location: "Phoenix, AZ", tag: "HVAC", quote: "Frost Media built us an AI lead system that completely filled our summer schedule. We had to hire two new techs just to keep up. Best investment we've ever made." },
  { name: "Sarah L.", role: "Beauty Studio Owner", location: "Denver, CO", tag: "Beauty", quote: "I went from empty afternoons to a full waitlist in three weeks. Their ad campaigns and AI booking assistant changed everything for my studio." },
  { name: "David R.", role: "Concrete Contractor", location: "Dallas, TX", tag: "Concrete", quote: "We closed more jobs in Q1 than the entire previous year. The lead gen system they built is a machine — quality leads, every single day." },
  { name: "Jennifer K.", role: "E-Commerce Brand Owner", location: "Los Angeles, CA", tag: "E-Commerce", quote: "Our ROAS tripled after they restructured our ad accounts. The creative testing framework alone was worth 10x what we paid." },
  { name: "Mike P.", role: "Painting Company Owner", location: "Denver, CO", tag: "Painting", quote: "Every estimate I go on now actually closes. Their AI chatbot pre-qualifies every lead before I even show up. No more wasted drives." },
  { name: "Carlos M.", role: "Roofing Company Owner", location: "Tampa, FL", tag: "Roofing", quote: "We went from competing on price to being the go-to roofer in our zip codes. Booked out months in advance now." },
  { name: "Amanda W.", role: "Insurance Agent", location: "Austin, TX", tag: "Insurance", quote: "Their AI chatbot handles all my inbound leads instantly. I used to lose prospects because I couldn't respond fast enough. Not anymore." },
  { name: "Jason B.", role: "Real Estate Team Lead", location: "Miami, FL", tag: "Real Estate", quote: "Our lead gen pipeline runs completely on autopilot. Frost Media set it up, and now we just focus on closing deals." },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("");
}

type Position = "front" | "middle" | "back";

const SystemDiagramSection = () => {
  const [positions, setPositions] = useState<Position[]>(["front", "middle", "back"]);
  const [startIndex, setStartIndex] = useState(0);

  const handleShuffle = useCallback(() => {
    setPositions((prev) => {
      const next = [...prev];
      next.unshift(next.pop()!);
      return next;
    });
    // After a full cycle of 3, rotate in new reviews
    setStartIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  // Get 3 reviews starting from startIndex, wrapping around
  const visibleReviews = [0, 1, 2].map((offset) => {
    const idx = (startIndex + offset) % reviews.length;
    return { ...reviews[idx], globalIndex: idx };
  });

  return (
    <section id="work" className="py-16 md:py-24 bg-frost-light">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs tracking-widest uppercase text-primary mb-3">Social Proof</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-md">
              Real results from real businesses we've helped scale. Drag the cards to see more.
            </p>
          </motion.div>

          {/* Right: Shuffle Cards */}
          <div className="relative h-[450px] w-[350px] mx-auto lg:ml-auto lg:mr-0">
            {visibleReviews.map((review, index) => (
              <TestimonialCard
                key={`${review.name}-${review.globalIndex}`}
                handleShuffle={handleShuffle}
                testimonial={review.quote}
                position={positions[index]}
                author={review.name}
                role={review.role}
                location={review.location}
                tag={review.tag}
                initials={getInitials(review.name)}
                colorIndex={review.globalIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDiagramSection;
