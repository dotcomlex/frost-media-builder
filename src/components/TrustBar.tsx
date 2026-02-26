const items = [
  "Meta Business Partner",
  "AI-Powered Systems",
  "Custom Automation",
  "Advanced Analytics",
  "Conversion Optimization",
  "Mobile-First Design",
  "Bilingual Marketing (EN/ES)",
];

const TrustBar = () => (
  <section className="bg-white py-12 overflow-hidden">
    <div className="relative">
      <div className="animate-trust-scroll flex gap-4 w-max">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-xl border border-border bg-muted px-6 py-3 text-sm font-medium text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
