import { motion } from "framer-motion";
import { useContactForm } from "@/components/ContactFormDialog";

import serviceSocialAds from "@/assets/service-social-ads.jpg";
import serviceWebDesign from "@/assets/service-web-design.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";
import serviceLeadGen from "@/assets/service-lead-gen.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceCrm from "@/assets/service-crm.jpg";

const services = [
  {
    title: "Social Media Advertising",
    desc: "Strategic Meta, Instagram & TikTok campaigns that fill your pipeline with qualified leads daily.",
    image: serviceSocialAds,
  },
  {
    title: "Website Design & Dev",
    desc: "Premium, conversion-optimized websites that make your brand unforgettable on every device.",
    image: serviceWebDesign,
  },
  {
    title: "E-Commerce & Shopify",
    desc: "Full store buildouts — from product pages to checkout flows — designed to maximize revenue.",
    image: serviceEcommerce,
  },
  {
    title: "Lead Generation",
    desc: "End-to-end pipeline management from first click to closed deal. Every lead tracked and nurtured.",
    image: serviceLeadGen,
  },
  {
    title: "Conversational AI",
    desc: "AI voice callers, SMS agents & chatbots that respond instantly — trained on your brand, 24/7.",
    image: serviceAi,
  },
  {
    title: "CRM & Automation",
    desc: "All-in-one pipeline management with automated follow-ups, lead routing & full visibility.",
    image: serviceCrm,
  },
];

const CapabilitiesSection = () => {
  const { openForm } = useContactForm();

  return (
    <section id="services" className="py-14 md:py-20 bg-muted">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="font-mono-tech text-[10px] tracking-widest uppercase text-muted-foreground mb-2">What We Do</p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Full-Stack Growth Infrastructure
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
            Everything your business needs to dominate — from ads to AI to automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onClick={openForm}
              className="group rounded-xl border border-border bg-card overflow-hidden cursor-pointer hover:shadow-lg hover:border-ice-blue/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold text-foreground font-heading mb-1.5">{s.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                <div className="mt-3 flex justify-end">
                  <span className="text-muted-foreground/40 group-hover:text-ice-blue transition-colors text-[10px] font-mono-tech tracking-wider uppercase">
                    Learn more →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
