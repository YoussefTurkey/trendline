import { IProductItemImg } from "@/data/product";
import { Heart, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";

export default function ProductCard({ img }: { img: IProductItemImg }) {
  return (
    <div className="group rounded-2xl p-3 transition">
      {/* Image */}

      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={img.img}
          fill
          alt={img.alt}
          className="h-full w-full object-cover border rounded-xl"
        />

        {/* Actions */}
        <div className="absolute right-2 top-2 flex gap-2">
          <button className="rounded-lg border bg-white p-2">
            <Image
              src={"/icons/addCart.svg"}
              width={20}
              height={20}
              alt="add-cart"
              loading="lazy"
            />
          </button>
          <button className="rounded-lg border bg-white p-2">
            <Image
              src={"/icons/wishlist2.svg"}
              width={20}
              height={20}
              alt="wishlist"
              loading="lazy"
            />
          </button>
        </div>

        {/* Badge */}
        {img.offer && (
          <Badge className="absolute left-2 top-2 rounded-lg px-3 py-1 text-xs border-[#BE968E] bg-white text-[#BE968E]">
            {img.offer}
          </Badge>
        )}
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">Dresses</p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Star className="h-4 w-4 fill-[#C49A8A] text-[#C49A8A]" />
            <strong>4.5</strong>
            <span className="text-xs">(2910)</span>
          </div>
        </div>

        <p className="line-clamp-2 text-sm font-medium truncate">
          J.VER Women’s Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free
        </p>

        {/* Price */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-semibold">AED 900</span>

          {/* Colors */}
          <div className="flex gap-1 pt-1">
            <span className="h-4 w-4 rounded-full bg-[#C49A8A]" />
            <span className="h-4 w-4 rounded-full bg-black" />
            <span className="h-4 w-4 rounded-full bg-[#E8E8E8]" />
            <span className="text-xs">+2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
