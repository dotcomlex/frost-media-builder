import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Position = "front" | "middle" | "back";

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: Position;
  author: string;
  role: string;
  location: string;
  tag: string;
  initials: string;
  colorIndex: number;
}

const avatarColors = [
  "bg-ice-blue/20 text-ice-blue",
  "bg-secondary/20 text-secondary",
  "bg-primary/20 text-primary",
  "bg-amber/20 text-amber",
];

export function TestimonialCard({
  handleShuffle,
  testimonial,
  position,
  author,
  role,
  location,
  tag,
  initials,
  colorIndex,
}: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? 2 : position === "middle" ? 1 : 0,
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
      }}
      drag
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={(e: MouseEvent | PointerEvent | TouchEvent) => {
        dragRef.current = "clientX" in e ? e.clientX : 0;
      }}
      onDragEnd={(e: MouseEvent | PointerEvent | TouchEvent) => {
        const x = "clientX" in e ? e.clientX : 0;
        if (dragRef.current - x > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-5 rounded-2xl border-2 border-border bg-card/80 p-7 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div
        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${avatarColors[colorIndex % avatarColors.length]} font-heading text-xl font-bold`}
      >
        {initials}
      </div>

      <div className="flex justify-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
        ))}
      </div>

      <span className="text-center text-sm italic leading-relaxed text-muted-foreground">
        "{testimonial}"
      </span>

      <div className="text-center">
        <p className="font-heading text-sm font-bold text-ice-blue">{author}</p>
        <p className="text-xs text-muted-foreground">
          {role} · {location}
        </p>
      </div>

      <div className="flex justify-center">
        <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-primary">
          {tag}
        </span>
      </div>
    </motion.div>
  );
}
