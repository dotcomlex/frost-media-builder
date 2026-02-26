import { Star, MapPin, Award } from "lucide-react";

const items = [
  { icon: Star, label: "4.9★ Google Rating" },
  { icon: Award, label: "$2M+ Client Revenue" },
  { icon: MapPin, label: "Denver, CO" },
  { icon: Award, label: "Meta Business Partner" },
  { icon: Award, label: "100+ Systems Built" },
];

const TrustBar = () => (
  <section className="bg-background border-y border-border py-5">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex items-center justify-start md:justify-center gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {items.map((item, i) => (
          <div key={item.label} className="flex items-center gap-2 shrink-0 snap-start px-2">
            <item.icon className="h-4 w-4 text-primary shrink-0" />
            <span className="text-sm text-muted-foreground whitespace-nowrap font-medium">{item.label}</span>
            {i < items.length - 1 && <span className="hidden md:block w-px h-4 bg-border ml-4" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
