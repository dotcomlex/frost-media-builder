import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
    }, 1000);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="w-full py-14 bg-alpine-dark">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-heading text-text-on-dark">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {logos.map((logo, i) => (
                <CarouselItem
                  key={i}
                  className="basis-1/4 lg:basis-1/6"
                >
                  <div className="flex items-center justify-center rounded-xl bg-alpine-navy aspect-square p-6">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 w-auto max-w-full object-contain opacity-80"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
