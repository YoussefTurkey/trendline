import { BreadcrumbBasic } from "../common/breadCrumb";
import ProductCarousel from "../common/productCarousel";
import { Badge } from "../ui/badge";
import { productAction, productSize, productType } from "@/data/product";
import { Button } from "../ui/button";
import Image from "next/image";
import { ProductSelect } from "../common/ProductSelect";
import ColorPicker from "../common/ColorPicker";
import QuantitySelector from "../common/QuantitySelector";

const ProductInfo = () => {
  return (
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

            <div className="flex items-center">
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
              J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
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

          {/* select */}
          <div className="my-10 space-y-5">
            <ProductSelect data={productType} label={"Type"} />
            <ProductSelect data={productSize} label={"Size"} />
          </div>

          {/* colors */}
          <ColorPicker />

          {/* Quantity */}
          <div className="space-y-5">
            <div className="flex items-center gap-1">
              <h4 className="text-lg font-semibold">Quantity</h4>
              <span className="text-[#8A8A8A]">($300.00 for Piece)</span>
            </div>
            <div className="flex items-center justify-between">
              <QuantitySelector />
              <Button className="bg-[#BE968E] text-white py-6 px-10">
                <span>Add To Cart</span>
                <Image
                  src={"/icons/addCart2.svg"}
                  width={15}
                  height={15}
                  alt="shipping-cart"
                  loading={"lazy"}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
