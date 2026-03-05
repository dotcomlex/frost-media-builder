import logoMeta from "@/assets/logo-meta.png";
import logoTiktok from "@/assets/logo-tiktok.svg";
import logoShopify from "@/assets/logo-shopify.svg";
import { Users } from "lucide-react";

const logos = [
  { src: logoMeta, alt: "Meta Business Partner" },
  { src: logoShopify, alt: "Shopify Partner" },
  { src: logoTiktok, alt: "TikTok Partner" },
];

const LogoMarquee = () => {
  const doubled = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-8 overflow-hidden border-y border-border">
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="h-9 w-9 rounded-full bg-secondary/10 flex items-center justify-center">
          <Users className="h-4 w-4 text-secondary" />
        </div>
        <p className="font-mono-tech text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          150+ Clients Served · Official Partners
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee items-center gap-20 w-max">
          {doubled.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-9 md:h-11 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
