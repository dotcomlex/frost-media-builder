import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Users } from "lucide-react";

import logoMeta from "@/assets/logo-meta.png";
import logoTiktok from "@/assets/logo-tiktok.svg";
import logoShopify from "@/assets/logo-shopify.svg";
import logoCpia from "@/assets/logo-cpia.png";
import logoFrost from "@/assets/logo-frost.png";
import logoPca from "@/assets/logo-pca.png";
import logoScript from "@/assets/logo-client-script.svg";
import logoGeo from "@/assets/logo-client-geo.svg";
import logoAmador from "@/assets/logo-client-amador.svg";
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
  { src: logoMeta, alt: "Meta Business Partner" },
  { src: logoTiktok, alt: "TikTok Partner" },
  { src: logoShopify, alt: "Shopify Partner" },
  { src: logoCpia, alt: "CPIA" },
  { src: logoFrost, alt: "Frost" },
  { src: logoPca, alt: "PCA" },
  { src: logoScript, alt: "Client Script" },
  { src: logoGeo, alt: "GeoSoftware" },
  { src: logoAmador, alt: "Amador" },
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <section className="bg-background py-8 overflow-hidden border-y border-border">
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="h-9 w-9 rounded-full bg-secondary/10 flex items-center justify-center">
          <Users className="h-4 w-4 text-secondary" />
        </div>
        <p className="font-mono-tech text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
          150+ Clients Served · Official Partners
        </p>
      </div>
      <div className="w-full px-4">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {logos.map((logo, i) => (
              <CarouselItem
                key={i}
                className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="flex items-center justify-center h-16 p-2">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 md:h-12 w-auto max-w-[120px] object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default LogoMarquee;
