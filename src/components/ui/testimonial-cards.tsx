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
    <div className="w-[300px] md:w-[370px] flex-shrink-0 snap-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md flex flex-col gap-4">
      <img
        src={avatarUrl}
        alt={`Photo of ${name}`}
        className="mx-auto h-20 w-20 rounded-full border-2 border-white/20 object-cover"
      />

      <div className="flex justify-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber text-amber" />
        ))}
      </div>

      <p className="text-center text-sm italic leading-relaxed text-text-on-dark/80">
        "{quote}"
      </p>

      <div className="text-center mt-auto">
        <p className="font-heading text-sm font-bold text-ice-blue">{name}</p>
        <p className="text-xs text-text-on-dark/50">{role} · {location}</p>
      </div>

      <div className="flex justify-center">
        <span className="rounded-full bg-ice-blue/15 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-ice-blue">
          {tag}
        </span>
      </div>
    </div>
  );
}
