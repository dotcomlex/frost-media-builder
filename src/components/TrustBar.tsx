import { Star, Award, DollarSign, MapPin, Cpu, Shield } from "lucide-react";

const items = [
  { icon: Star, title: "4.9★ Rating", sub: "Based on 50+ reviews" },
  { icon: Award, title: "Meta Business Partner", sub: "Certified" },
  { icon: DollarSign, title: "$2M+ Client Revenue", sub: "Generated in 2024" },
  { icon: MapPin, title: "Denver, Colorado", sub: "Locally owned" },
  { icon: Shield, title: "Google Partner", sub: "Verified" },
  { icon: Cpu, title: "100+ Systems Built", sub: "For local businesses" },
];

const TrustBar = () => (
  <section className="bg-card border-y border-border py-5">
    <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-0 min-w-max">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`flex items-center gap-3 px-6 ${i < items.length - 1 ? "border-r border-border" : ""}`}
          >
            <item.icon className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground whitespace-nowrap">{item.title}</p>
              <p className="text-xs text-muted-foreground whitespace-nowrap">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
