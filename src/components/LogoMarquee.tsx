import logoPca from "@/assets/logo-pca.png";
import logoCpia from "@/assets/logo-cpia.png";
import logoMeta from "@/assets/logo-meta.png";
import logoTiktok from "@/assets/logo-tiktok.svg";
import logoShopify from "@/assets/logo-shopify.svg";
import logoAmador from "@/assets/logo-client-amador.svg";
import logoScript from "@/assets/logo-client-script.svg";
import logoGeo from "@/assets/logo-client-geo.svg";

const logos = [
  { src: logoPca, alt: "Painting Contractors Association" },
  { src: logoCpia, alt: "Commercial Painting Industry Association" },
  { src: logoMeta, alt: "Meta Business Partner" },
  { src: logoTiktok, alt: "TikTok Partner" },
  { src: logoShopify, alt: "Shopify Partner" },
  { src: logoAmador, alt: "Amador" },
  { src: logoScript, alt: "Client Partner" },
  { src: logoGeo, alt: "Client Partner" },
];

const LogoMarquee = () => {
  const doubled = [...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-8 overflow-hidden border-y border-border">
      <div className="relative">
        <div className="flex animate-marquee items-center gap-20 w-max">
          {doubled.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
