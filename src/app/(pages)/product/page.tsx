import { BreadcrumbBasic } from "@/components/common/breadCrumb";
import ProductCarousel from "@/components/common/productCarousel";
import FormTitle from "@/components/forms/FormTitle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { productAction } from "@/data/product";
import Image from "next/image";

const Product = () => {
  return (
    <section>
      <div
        className="relative bg-cover bg-top p-20"
        style={{
          backgroundImage: "url('/images/bg.webp')",
        }}
      >
        <h2 className="absolute inset-0 flex items-center text-center justify-center text-[80px] lg:text-[120px] font-extrabold text-outline select-none">
          Product Details
        </h2>
        <FormTitle style={"relative z-10 text-5xl font-bold mt-5"}>
          Product Details
        </FormTitle>
      </div>

      <div className="container mx-auto my-5 px-5">
        <div className="bg-[#ECECEC]/40 rounded-xl px-10 py-5">
          <BreadcrumbBasic />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          <ProductCarousel />

          <div className="space-y-5">
            {/* head */}
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className="text-[#BE968E] border-[#BE968E] rounded-full py-2 px-5 text-md"
              >
                T-Shirt
              </Badge>

              <div className="hidden lg:flex items-center">
                {productAction.length > 0 &&
                  productAction.map((icon) => (
                    <Button variant={"ghost"} key={icon.id}>
                      <Image
                        src={icon.icon}
                        width={30}
                        height={30}
                        alt={icon.alt}
                        loading="lazy"
                      />
                    </Button>
                  ))}
              </div>
            </div>

            {/* info */}
            <div className="space-y-5 border-b">
              <h3 className="text-3xl mb-5 w-full xl:w-170">
                J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With
                Blue
              </h3>

              <div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold text-2xl">$300.00</p>
                  <p className="text-xl line-through text-[#8A8A8A]">$360.00</p>
                </div>
                <p className="text-[#8A8A8A]">
                  This price is exclusive of taxes.
                </p>
              </div>

              <p className="text-lg pb-5">
                Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam
                nonummy Lorem ipsum dolor sit amet, diam nonummy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
