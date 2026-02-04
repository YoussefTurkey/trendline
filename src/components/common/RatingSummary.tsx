import { Progress } from "@/components/ui/progress";
import { ratings } from "@/data/product";
import { Star } from "lucide-react";

export default function RatingSummary() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 my-10 w-full">
      {/* Left */}
      <div className="flex items-end gap-5">
        <div className="text-9xl font-semibold">4,5</div>
        <div className="text-gray-400 text-3xl">/5</div>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-3 w-full">
        {ratings.map((item) => (
          <div key={item.star} className="flex items-center gap-3">
            {/* Star number */}
            <div className="flex items-center gap-1 w-10">
              <Star className="h-5 w-5 fill-[#BE968E] text-[#BE968E]" />
              <span className="text-md">{item.star}</span>
            </div>

            {/* Progress */}
            <Progress value={item.percent} className="h-2 bg-[#E6E6E6]" />

            {/* Percent */}
            <span className="w-10 text-md text-[#545454] text-right">
              %{item.percent}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
