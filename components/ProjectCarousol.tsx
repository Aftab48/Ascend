"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

interface ProjectImageCarouselProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectImageCarousel({
  images,
  projectTitle,
}: ProjectImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
        skipSnaps: false,
        dragFree: false,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full "
    >
      <CarouselContent className="-ml-4">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="pl-4 basis-4/5 md:basis-3/5 lg:basis-1/2"
          >
            <div
              style={{
                opacity: current === index ? 1 : 0.4,
                transform: current === index ? "scale(1)" : "scale(0.85)",
              }}
            >
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={image}
                  alt={`${projectTitle} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
