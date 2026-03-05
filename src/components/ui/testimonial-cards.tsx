import { Star } from "lucide-react";

interface TestimonialCardProps {
  avatarUrl: string;
  name: string;
  role: string;
  location: string;
  tag: string;
  quote: string;
}

export function TestimonialCard({ avatarUrl, name, role, location, tag, quote }: TestimonialCardProps) {
  return (
    <div className="w-[270px] md:w-[300px] flex-shrink-0 snap-start rounded-xl border border-white/[0.06] bg-white/[0.04] p-5 backdrop-blur-md flex flex-col gap-3">
      <img
        src={avatarUrl}
        alt={`Photo of ${name}`}
        className="mx-auto h-14 w-14 rounded-full border-2 border-secondary/30 object-cover ring-2 ring-secondary/10 ring-offset-2 ring-offset-alpine-dark"
      />

      <div className="flex justify-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
        ))}
      </div>

      <p className="text-center text-xs md:text-[13px] italic leading-relaxed text-text-on-dark/80">
        "{quote}"
      </p>

      <div className="text-center mt-auto">
        <p className="font-heading text-xs font-bold text-text-on-dark">{name}</p>
        <p className="text-[10px] text-text-on-dark/45">{role} · {location}</p>
      </div>

      <div className="flex justify-center">
        <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 font-mono-tech text-[9px] font-bold uppercase tracking-wider text-secondary">
          {tag}
        </span>
      </div>
    </div>
  );
}
