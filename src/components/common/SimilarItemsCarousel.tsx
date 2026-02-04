import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../product/ProductCard";
import { productItemImg } from "@/data/product";

export default function SimilarItemsCarousel() {
  return (
    <section className="space-y-6">
      {/* Header */}
      <h3 className="text-3xl font-semibold w-full xl:w-170 relative after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-1 after:rounded-full after:bg-[#BE968E]">
        Similar Items
      </h3>

      {/* Carousel */}
      <Carousel opts={{ align: "start" }} className="relative">
        <CarouselContent className="-ml-4">
          {productItemImg.map((img, i) => (
            <CarouselItem
              key={i}
              className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              <ProductCard img={img} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <div className="absolute -bottom-10 left-1/2">
          <CarouselPrevious className="-translate-x-2 bg-gray-100 hover:bg-[#C49A8A] hover:text-white" />
          <CarouselNext className="translate-x-2 bg-[#C49A8A] text-white hover:opacity-90" />
        </div>
      </Carousel>
    </section>
  );
}
