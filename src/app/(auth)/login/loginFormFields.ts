import { TInputType } from "@/types/auth";

export type LoginField = {
  id: string;
  name: "email" | "password";
  label: string;
  type: TInputType;
  placeholder: string;
};

export const loginFormFields: LoginField[] = [
  {
    id: crypto.randomUUID(),
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    id: crypto.randomUUID(),
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];