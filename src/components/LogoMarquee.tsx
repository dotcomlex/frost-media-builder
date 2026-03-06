import logoDivas from "@/assets/logo-client-divas.png";
import logoCertapro from "@/assets/logo-client-certapro.png";
import logo360 from "@/assets/logo-client-360painting.png";
import logoTs from "@/assets/logo-client-ts.svg";
import logoHeartfl from "@/assets/logo-client-heartfl.png";
import logoFlsouthern from "@/assets/logo-client-flsouthern.png";
import logoTexan from "@/assets/logo-client-texan.png";
import logoEhrco from "@/assets/logo-client-ehrco.png";
import logoCristobal from "@/assets/logo-client-cristobal.png";
import logoCapro from "@/assets/logo-client-capro.png";

const logos = [
  { src: logoDivas, alt: "Divas Beauty" },
  { src: logoCertapro, alt: "CertaPro Painters" },
  { src: logo360, alt: "360 Painting" },
  { src: logoTs, alt: "T&S" },
  { src: logoHeartfl, alt: "Heart of Florida Roofing" },
  { src: logoFlsouthern, alt: "Florida Southern Roofing" },
  { src: logoTexan, alt: "Texan Remodeling" },
  { src: logoEhrco, alt: "EHR Co" },
  { src: logoCristobal, alt: "Cristobal Concrete" },
  { src: logoCapro, alt: "CA Pro Concrete" },
];

const LogoMarquee = () => {
  const doubled = [...logos, ...logos];

  return (
    <div className="w-full py-14 bg-background overflow-hidden">
      <div className="container mx-auto mb-10">
        <h2 className="text-xl md:text-2xl tracking-tight font-heading text-foreground">
          Brands That Trust Us
        </h2>
      </div>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee w-max">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 min-w-[120px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-14 md:h-16 w-auto max-w-[160px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
