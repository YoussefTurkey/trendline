import { BreadcrumbBasic } from "@/components/common/breadCrumb";
import ProductCarousel from "@/components/common/productCarousel";
import FormTitle from "@/components/forms/FormTitle";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
          <ProductCarousel />
        </div>
      </div>
    </section>
  );
};

export default Product;
