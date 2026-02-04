import FormTitle from "../forms/FormTitle";

const ProductTitle = () => {
  return (
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
  );
};

export default ProductTitle;
