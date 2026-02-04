import ProductInfo from "@/components/product/ProductInfo";
import ProductRating from "@/components/product/ProductRating";
import ProductTitle from "@/components/product/ProductTitle";

const Product = () => {
  return (
    <section>
      <ProductTitle />
      <ProductInfo />
      <ProductRating />
    </section>
  );
};

export default Product;
