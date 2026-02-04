"use client";
import { colors } from "@/data/product";
import { useState } from "react";

export default function ColorPicker() {
  const [selected, setSelected] = useState("Red");

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold">Colors</h4>

      <div className="flex items-start gap-6">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setSelected(color.name)}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full ${
                selected === color.name ? "ring-2 ring-black" : ""
              } bg-gray-100`}
            >
              <span
                className="h-8 w-8 rounded-full"
                style={{ backgroundColor: color.value }}
              />
            </div>

            {selected === color.name && (
              <span className="text-sm font-semibold text-[#545454]">
                {color.name}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
