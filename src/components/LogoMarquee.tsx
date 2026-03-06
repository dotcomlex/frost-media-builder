import logoDivas from "@/assets/logo-client-divas.png";
import logoCertapro from "@/assets/logo-client-certapro.png";
import logo360 from "@/assets/logo-client-360painting.png";
import logoTs from "@/assets/logo-client-ts.svg";
import logoFlsouthern from "@/assets/logo-client-flsouthern.png";
import logoTexan from "@/assets/logo-client-texan.png";
import logoEhrco from "@/assets/logo-client-ehrco.png";
import logoCristobal from "@/assets/logo-client-cristobal.png";
import logoCapro from "@/assets/logo-client-capro.png";
import logoPhoenix from "@/assets/logo-client-phoenix.png";
import logoAzpremier from "@/assets/logo-client-azpremier.png";

const logos = [
  { src: logoDivas, alt: "Divas Beauty" },
  { src: logoCertapro, alt: "CertaPro Painters" },
  { src: logo360, alt: "360 Painting" },
  { src: logoTs, alt: "T&S" },
  { src: logoFlsouthern, alt: "Florida Southern Roofing" },
  { src: logoTexan, alt: "Texan Remodeling" },
  { src: logoEhrco, alt: "EHR Co" },
  { src: logoCristobal, alt: "Cristobal Concrete" },
  { src: logoCapro, alt: "CA Pro Concrete" },
  { src: logoPhoenix, alt: "Phoenix Concrete Company" },
  { src: logoAzpremier, alt: "Arizona Premier Concrete" },
];

const LogoMarquee = () => {
  const doubled = [...logos, ...logos];

  return (
    <div className="w-full py-10 md:py-14 bg-background overflow-hidden">
      <div className="container mx-auto mb-8">
        <h2 className="text-xl md:text-2xl tracking-tight font-mono-tech text-foreground uppercase">
          Who we work with
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee w-max">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-4 md:px-8 min-w-[100px] md:min-w-[120px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-14 w-auto max-w-[120px] md:max-w-[160px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
