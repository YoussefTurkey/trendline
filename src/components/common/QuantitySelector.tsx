"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center w-full gap-5">
      {/* Quantity box */}
      <div className="flex items-center rounded-lg bg-gray-100 p-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg text-gray-500 bg-white"
          onClick={() => setQty(Math.max(1, qty - 1))}
        >
          −
        </Button>

        <span className="w-20 text-center text-lg font-medium">
          {qty.toString().padStart(2, "0")}
        </span>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg text-gray-500 bg-white"
          onClick={() => setQty(qty + 1)}
        >
          +
        </Button>
      </div>

      {/* Price */}
      <span className="text-xl font-semibold">$300.00</span>
    </div>
  );
}
