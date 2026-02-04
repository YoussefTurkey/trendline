"use client";

import { faker } from "@faker-js/faker";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { productSlides } from "@/data/product";

export const title = "Carousel with Thumbnails";

const ProductCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const handleApiChange = (newApi: CarouselApi) => {
    setApi(newApi);

    if (newApi) {
      setCurrent(newApi.selectedScrollSnap());

      newApi.on("select", () => {
        setCurrent(newApi.selectedScrollSnap());
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-4">
      <Carousel setApi={handleApiChange}>
        <CarouselContent>
          {productSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative flex aspect-square items-center justify-center rounded-2xl bg-[#F5F5F5] p-6">
                <div className="absolute inset-0 bg-linear-to-b from-black/20 to-transparent rounded-xl" />
                <Image
                  src={slide.img}
                  width={600}
                  height={600}
                  alt={slide.alt}
                  className="object-contain max-h-100"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/80 hover:bg-[#BE968E] hover:text-white shadow" />
        <CarouselNext className="right-4 bg-white/80 hover:bg-[#BE968E] hover:text-white shadow" />
      </Carousel>

      <div className="flex justify-center gap-2">
        {productSlides.map((slide, index) => (
          <Button
            key={slide.id}
            onClick={() => api?.scrollTo(index)}
            variant="ghost"
            className={`relative h-20 lg:h-24 w-20 lg:w-24 rounded-xl p-2 ${
              current === index ? "bg-black text-white" : "bg-[#F5F5F5]"
            }`}
          >
            <Image
              src={slide.img}
              fill
              alt={slide.alt}
              className="object-contain"
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
