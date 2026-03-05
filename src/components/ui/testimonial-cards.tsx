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
    <div className="w-[300px] md:w-[360px] flex-shrink-0 snap-start rounded-2xl border border-white/[0.06] bg-white/[0.04] p-6 md:p-7 backdrop-blur-md flex flex-col gap-4">
      <img
        src={avatarUrl}
        alt={`Photo of ${name}`}
        className="mx-auto h-18 w-18 rounded-full border-2 border-secondary/30 object-cover ring-2 ring-secondary/10 ring-offset-2 ring-offset-alpine-dark"
      />

      <div className="flex justify-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
        ))}
      </div>

      <p className="text-center text-sm md:text-[15px] italic leading-relaxed text-text-on-dark/85">
        "{quote}"
      </p>

      <div className="text-center mt-auto">
        <p className="font-heading text-sm font-bold text-text-on-dark">{name}</p>
        <p className="text-xs text-text-on-dark/45">{role} · {location}</p>
      </div>

      <div className="flex justify-center">
        <span className="rounded-full bg-secondary/10 px-3 py-1 font-mono-tech text-[10px] font-bold uppercase tracking-wider text-secondary">
          {tag}
        </span>
      </div>
    </div>
  );
}
