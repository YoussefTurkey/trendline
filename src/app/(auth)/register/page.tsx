"use client";

import FormTitle from "@/components/forms/FormTitle";
import { InputField } from "@/components/forms/Input";
import { Button } from "@/components/ui/button";
import {
  RegisterFormData,
  registerSchema,
} from "@/lib/validations/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { registerFormFields } from "./registerFormFields";
import toast from "react-hot-toast";
import Link from "next/link";

const Register = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
        {
          name: data.fullName,
          email: data.email,
          password: data.password,
          password_confirmation: data.passwordConfirmation,
          mobile_country_code: data.countryCode,
          mobile: data.phone,
        },
      );

      console.log("Register Response:", response.data);

      if (response.data.status) {
        toast.success("Registration Success");
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        router.push(`/verify?email=${data.email}`);
      }
    } catch (error: any) {
      console.error(error.response?.data);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <section className="sec">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 border rounded-lg w-100 shadow-xl"
      >
        <FormTitle>Register</FormTitle>

        {registerFormFields.map((field) => {
          if (field.group === "phone") return null;
          return (
            <InputField
              key={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name)}
              error={errors[field.name]?.message}
            />
          );
        })}

        <div className="flex gap-2">
          {registerFormFields
            .filter((field) => field.group === "phone")
            .map((field) => (
              <InputField
                key={field.id}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name)}
                error={errors[field.name]?.message}
              />
            ))}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white w-full py-2 mt-3 rounded disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </Button>

        <div className="flex items-center justify-center gap-1 mt-5">
          <p>Have an account already?</p>
          <Link href={'/login'} prefetch className="underline text-blue-500">login</Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
