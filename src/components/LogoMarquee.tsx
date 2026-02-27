import logoPca from "@/assets/logo-pca.png";
import logoCpia from "@/assets/logo-cpia.png";
import logoMeta from "@/assets/logo-meta.png";

const logos = [
  { src: logoPca, alt: "Painting Contractors Association" },
  { src: logoCpia, alt: "Commercial Painting Industry Association" },
  { src: logoMeta, alt: "Meta Business Partner" },
];

const LogoMarquee = () => {
  // Double the logos for seamless infinite scroll
  const doubled = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-alpine-dark border-b border-white/10 py-6 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee items-center gap-16 w-max">
          {doubled.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
