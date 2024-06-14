"use server";

import { z } from "zod";

const schema = z
  .object({
    displayName: z
      .string()
      .min(8, { message: "Must be 8 or more characters" })
      .max(15, { message: "Must be 15 or fewer characters" }),
    username: z
      .string()
      .min(8, { message: "Must be 3 or more characters" })
      .max(15, { message: "Must be 15 or fewer characters" }),
    email: z
      .string()
      .min(8, { message: "Must be 8 or more characters" })
      .max(30, { message: "Must be 30 or fewer characters" })
      .email(),
    password: z
      .string()
      .min(8, { message: "Must be 8 or more characters" })
      .max(20, { message: "Must be 20 or fewer characters" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,20}$/,
        {
          message:
            "Password should contain at least one uppercase, lowercase, number & special character alongside alphanumerics",
        }
      ),
    confirm: z
      .string()
      .min(8, { message: "Must be 8 or more characters" })
      .max(15, { message: "Must be 15 or fewer characters" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords must be equal",
    path: ["confirm"],
  });

export default async function SignInWithCredentials() {}
