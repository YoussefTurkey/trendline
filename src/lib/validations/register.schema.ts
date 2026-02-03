import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(3, "Full Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 chars"),
  passwordConfirmation: z.string().min(6, "Password must be at least 6 chars"),
  countryCode: z.string().min(1, "Country code is required"),
  phone: z.string().min(5, "Phone number is required"),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Password does not match",
  path: ["passwordConfirmation"],
});

export type RegisterFormData = z.infer<typeof registerSchema>;