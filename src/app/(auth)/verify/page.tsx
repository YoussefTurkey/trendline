"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { InputField } from "@/components/forms/Input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import FormTitle from "@/components/forms/FormTitle";

const VerifyEmail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVerify = async () => {
    if (!code) {
      toast.error("Please enter the verification code");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-email`,
        { code },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.status) {
        toast.success("Email verified successfully!");
        router.push("/login");
      } else {
        toast.error(response.data.message || "Invalid code");
      }
    } catch (error: any) {
      console.error(error.response?.data);
      toast.error(error.response?.data?.message || "Verification failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-email/resend-code`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success("Verification code resent!");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to resend code");
    }
  };

  return (
    <section className="sec flex flex-col items-center justify-center h-screen">
      <div className="p-5 border rounded-lg w-96 shadow-xl text-center">
        <FormTitle>Verify Your Email</FormTitle>

        <p className="mb-5 text-gray-600">
          Enter the code sent to <strong>{email}</strong>
        </p>

        <InputField
          label="Verification Code"
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <Button
          onClick={handleVerify}
          disabled={isSubmitting}
          className="bg-black text-white w-full py-2 mt-3 rounded disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? "Verifying..." : "Verify"}
        </Button>

        <div className="mt-4 text-sm text-gray-500 flex items-center gap-1">
          <p>Didn't receive the code?</p>
          <p
            className="text-blue-500 underline cursor-pointer"
            onClick={handleResend}
          >
            Resend Code
          </p>
        </div>
      </div>
    </section>
  );
};

export default VerifyEmail;
