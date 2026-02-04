import Image from "next/image";
import RatingSummary from "../common/RatingSummary";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import { comment } from "@/data/product";

const ProductRating = () => {
  return (
    <div className="container mx-auto px-10 my-20">
      <h3 className="text-3xl font-semibold w-full xl:w-170 relative after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-1 after:rounded-full after:bg-[#BE968E]">
        Rating & Reviews
      </h3>

      <div className="flex items-center justify-between gap-20">
        <RatingSummary />
        <div className="hidden lg:flex  flex-col items-center gap-5">
          <p className="text-[#545454] text-lg">Total Reviews</p>
          <h4 className="text-7xl font-semibold">3.0K</h4>
          <Button className="bg-[#BE968E] text-white py-6 px-10 w-full lg:w-fit">
            <span>Add Comment</span>
            <Image
              src={"/icons/comment.svg"}
              width={20}
              height={20}
              alt="comment"
              loading={"lazy"}
            />
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 my-10">
        {comment.length > 0 &&
          comment.map((com) => (
            <div
              key={com.id}
              className="flex flex-col gap-3 not-last:border-b pb-5"
            >
              <div className="flex items-start md:items-center justify-between">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <h5 className="text-2xl font-bold">{com.name}</h5>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-[#BE968E] text-[#BE968E]" />
                    <Star className="h-5 w-5 fill-[#BE968E] text-[#BE968E]" />
                    <Star className="h-5 w-5 fill-[#BE968E] text-[#BE968E]" />
                    <Star className="h-5 w-5 fill-[#BE968E] text-[#BE968E]" />
                    <Star className="h-5 w-5 fill-[#BE968E]/40 text-[#BE968E]/40" />
                  </div>
                </div>
                <p className="text-[#545454] text-lg">{com.createdAt}</p>
              </div>
              <p className="text-lg">{com.msg}</p>
            </div>
          ))}

        <Button className="bg-[#F5F5F5] text-[#BE968E] hover:text-white py-6 px-10 w-full md:w-fit">
          View More Comments
        </Button>
      </div>
    </div>
  );
};

export default ProductRating;
