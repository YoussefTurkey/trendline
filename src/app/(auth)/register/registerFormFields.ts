import { TInputType } from "@/types/auth";

export type RegisterField = {
  id: string;
  name: "fullName" | "email" | "password" | 'passwordConfirmation' | "countryCode" | "phone";
  label: string;
  type: TInputType;
  placeholder: string;
  group?: string;
};

export const registerFormFields: RegisterField[] = [
  {
    id: crypto.randomUUID(),
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
  },
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
  {
    id: crypto.randomUUID(),
    name: "passwordConfirmation",
    label: "Comfirm Password",
    type: "password",
    placeholder: "Comfirm your password",
  },
  {
    id: crypto.randomUUID(),
    name: "countryCode",
    label: "Country Code",
    type: "text",
    placeholder: "EX: +971",
    group: "phone",
  },
  {
    id: crypto.randomUUID(),
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "EX: 11 111 1111 1",
    group: "phone",
  },
];
