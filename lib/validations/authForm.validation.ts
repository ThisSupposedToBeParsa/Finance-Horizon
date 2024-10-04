import { z } from "zod";

export const authFormSchema = (type: "sign-up" | "sign-in") =>
  z.object({
    // sign up
    firstName: type === "sign-up" ? z.string().min(2) : z.string().optional(),
    lastName: type === "sign-up" ? z.string().min(2) : z.string().optional(),
    address1: type === "sign-up" ? z.string().min(10) : z.string().optional(),
    state:
      type === "sign-up" ? z.string().min(2).max(2) : z.string().optional(),
    city:
      type === "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
    postalCode:
      type === "sign-up" ? z.string().max(10).min(10) : z.string().optional(),
    dateOfBirth: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    ssn: type === "sign-up" ? z.string().min(3) : z.string().optional(),

    // both
    email: z.string().email(),
    password: z.string().min(8),
  });
