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
    <div className="w-[280px] md:w-[340px] flex-shrink-0 snap-start rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 md:p-6 backdrop-blur-md flex flex-col gap-3">
      <img
        src={avatarUrl}
        alt={`Photo of ${name}`}
        className="mx-auto h-16 w-16 rounded-full border-2 border-ice-blue/30 object-cover ring-2 ring-ice-blue/10 ring-offset-2 ring-offset-alpine-dark"
      />

      <div className="flex justify-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-ice-blue text-ice-blue" />
        ))}
      </div>

      <p className="text-center text-sm md:text-[15px] italic leading-relaxed text-text-on-dark/80">
        "{quote}"
      </p>

      <div className="text-center mt-auto">
        <p className="font-heading text-sm font-bold text-ice-blue">{name}</p>
        <p className="text-xs text-text-on-dark/50">{role} · {location}</p>
      </div>

      <div className="flex justify-center">
        <span className="rounded-full bg-ice-blue/10 px-3 py-1 font-mono-tech text-[10px] font-bold uppercase tracking-wider text-ice-blue">
          {tag}
        </span>
      </div>
    </div>
  );
}
