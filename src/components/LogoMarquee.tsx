import logoMeta from "@/assets/logo-meta.png";
import logoTiktok from "@/assets/logo-tiktok.svg";
import logoShopify from "@/assets/logo-shopify.svg";

const logos = [
  { src: logoMeta, alt: "Meta Business Partner" },
  { src: logoShopify, alt: "Shopify Partner" },
  { src: logoTiktok, alt: "TikTok Partner" },
];

const LogoMarquee = () => {
  const doubled = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-6 overflow-hidden border-y border-border">
      <p className="text-center font-mono-tech text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
        Official Partners
      </p>
      <div className="relative">
        <div className="flex animate-marquee items-center gap-16 w-max">
          {doubled.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;