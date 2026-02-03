"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { InputField } from "@/components/forms/Input";
import { loginSchema, LoginFormData } from "@/lib/validations/login.schema";
import { Button } from "@/components/ui/button";
import { loginFormFields } from "./loginFormFields";
import FormTitle from "@/components/forms/FormTitle";
import Link from "next/link";
import GoogleButton from "@/components/common/GoogleButton";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      toast.error("Invalid email or password");
      return;
    }

    toast.success("Login successful");

    const session = await fetch("/api/auth/session").then((res) => res.json());
    localStorage.setItem("token", session.accessToken);

    router.push("/dashboard");
  };

  return (
    <section className="sec">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 border rounded-lg w-100 shadow-xl"
      >
        <FormTitle>Login</FormTitle>
        {loginFormFields.map((field) => (
          <InputField
            key={field.id}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.name)}
            error={errors[field.name]?.message}
          />
        ))}

        <Button
          disabled={isSubmitting}
          className="bg-black text-white w-full py-2 mt-3 rounded disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>

        <GoogleButton />

        <div className="flex items-center justify-center gap-1 mt-5">
          <p>Have not an account?</p>
          <Link href={"/register"} prefetch className="underline text-blue-500">
            register
          </Link>
        </div>
      </form>
    </section>
  );
}
