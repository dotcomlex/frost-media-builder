import { motion } from "framer-motion";
import { Flame, Droplets, HardHat, Zap, Home, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { icon: Flame, title: "HVAC Marketing", desc: "Heating, cooling & air quality contractors", href: "/industries/hvac" },
  { icon: Droplets, title: "Plumbing Marketing", desc: "Residential & commercial plumbers", href: "/industries/plumbing" },
  { icon: HardHat, title: "Concrete & Renovation", desc: "Driveways, patios, home remodeling", href: "/industries/concrete" },
  { icon: Zap, title: "Electrical Marketing", desc: "Licensed electricians & electrical contractors", href: "/industries/electrical" },
  { icon: Home, title: "Roofing Marketing", desc: "Residential & commercial roofing companies", href: "/industries/roofing" },
  { icon: Wrench, title: "General Contractors", desc: "Multi-trade construction & renovation", href: "/industries/contractors" },
];

const IndustriesSection = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p className="font-mono-tech text-xs tracking-widest uppercase text-primary mb-3">Who We Help</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          Built for Home Services Businesses
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Specialized marketing systems for contractors and service providers across Colorado
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link
              to={ind.href}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:bg-muted hover:shadow-xl flex flex-col items-center text-center transition-all block"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <ind.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{ind.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">{ind.desc}</p>
              <ArrowRight className="h-5 w-5 text-primary mt-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
