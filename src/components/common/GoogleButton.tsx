"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton() {
  const handleGoogleSignIn = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 pt-4">
        <span className="flex-1 h-px bg-gray-300"></span>
        <span className="text-gray-500 text-sm">OR</span>
        <span className="flex-1 h-px bg-gray-300"></span>
      </div>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <FcGoogle className="text-xl mr-3" />
        <span className="font-medium">Continue with Google</span>
      </button>
    </div>
  );
}
