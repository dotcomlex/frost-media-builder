import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const rows = [
  { feature: "Lead Exclusivity", frost: "100% Exclusive", others: "Shared 3-5x" },
  { feature: "Response Time", frost: "AI < 60 sec, 24/7", others: "Manual call/text" },
  { feature: "Cost Model", frost: "Flat monthly", others: "$15-$80 per lead" },
  { feature: "Lead Quality", frost: "AI pre-qualifies", others: "Tire-kickers included" },
  { feature: "Data Ownership", frost: "You own everything", others: "Platform owns it" },
  { feature: "Contract Terms", frost: "Month-to-month after 90d", others: "Annual / hard cancel" },
];

const ComparisonTable = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-3">The Frost Media Difference</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          Stop Competing for Shared Leads
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          See how Frost Media exclusive leads compare to HomeAdvisor, Angi, and Thumbtack
        </p>
      </motion.div>

      {/* Desktop Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:block rounded-2xl border border-border overflow-hidden"
      >
        <div className="grid grid-cols-4 bg-card">
          <div className="p-4 border-b border-border" />
          <div className="p-4 border-b border-border bg-primary/10 border-x border-primary/30 text-center">
            <p className="font-heading font-bold text-primary text-lg">Frost Media</p>
          </div>
          <div className="p-4 border-b border-border text-center">
            <p className="font-heading font-semibold text-muted-foreground">HomeAdvisor / Angi</p>
          </div>
          <div className="p-4 border-b border-border text-center">
            <p className="font-heading font-semibold text-muted-foreground">Thumbtack</p>
          </div>
        </div>
        {rows.map((row, i) => (
          <div key={row.feature} className={`grid grid-cols-4 ${i % 2 === 0 ? "bg-background" : "bg-card"}`}>
            <div className="p-4 border-b border-border flex items-center">
              <span className="text-sm font-medium text-foreground">{row.feature}</span>
            </div>
            <div className="p-4 border-b border-border bg-primary/5 border-x border-primary/30 flex items-center justify-center gap-2">
              <Check className="h-4 w-4 text-success shrink-0" />
              <span className="text-sm text-foreground">{row.frost}</span>
            </div>
            <div className="p-4 border-b border-border flex items-center justify-center gap-2">
              <X className="h-4 w-4 text-destructive shrink-0" />
              <span className="text-sm text-muted-foreground">{row.others}</span>
            </div>
            <div className="p-4 border-b border-border flex items-center justify-center gap-2">
              <X className="h-4 w-4 text-destructive shrink-0" />
              <span className="text-sm text-muted-foreground">{row.others}</span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        <div className="bg-card border-2 border-primary/50 rounded-2xl p-6">
          <p className="font-heading font-bold text-primary text-lg mb-4">Frost Media</p>
          {rows.map((row) => (
            <div key={row.feature} className="flex items-start gap-2 py-2 border-b border-border last:border-0">
              <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">{row.feature}</p>
                <p className="text-xs text-muted-foreground">{row.frost}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-card border border-border rounded-2xl p-6 opacity-60">
          <p className="font-heading font-semibold text-muted-foreground text-lg mb-4">HomeAdvisor / Angi / Thumbtack</p>
          {rows.map((row) => (
            <div key={row.feature} className="flex items-start gap-2 py-2 border-b border-border last:border-0">
              <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">{row.feature}</p>
                <p className="text-xs text-muted-foreground">{row.others}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Link to="/services/lead-generation" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-1">
          Get Your Free Lead Estimate <span>→</span>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ComparisonTable;
