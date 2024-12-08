import { object, string } from "zod";

export const ClientSchema = object({
  name: string().min(1, "Required field."),
  email: string().min(1, "Required field.").email("Invalid email"),
  streetAddress: string().min(1, "Required field."),
  city: string().min(1, "Required field."),
  country: string().min(1, "Required field."),
  postCode: string().min(1, "Required field."),
});
