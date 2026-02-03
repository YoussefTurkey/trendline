"use client";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { TInputType } from "@/types/auth";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type: TInputType;
}

export function InputField({ label, error, type, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <Field className="py-2 relative">
      <FieldLabel htmlFor={label}>{label}</FieldLabel>
      <div className="relative w-full">
        <Input
          id={label}
          type={inputType}
          {...props}
          className={`w-full border p-2 rounded
          ${error ? "border-red-500" : "border-gray-300"}
        `}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && (
        <FieldDescription className="text-red-500 text-xs">
          {error}
        </FieldDescription>
      )}
    </Field>
  );
}
