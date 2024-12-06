"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { LogInSchema } from "@/lib/zod/auth";
import { LogInErrors } from "@/lib/types/LogInForm";

export async function logIn(
  state: LogInErrors,
  formData: FormData,
): Promise<LogInErrors> {
  const c = await cookies();
  try {
    const validationResult = LogInSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const email = formData.get("email");
    const password = formData.get("password");

    if (!validationResult.success) {
      return {
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DEV}/auth/login`, {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.status !== 200) {
      return { errors: { unauthorized: "Invalid credentials." } };
    }

    const authHeader = res.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("No valid Authorization header found.");
    }

    const token = authHeader.substring("Bearer ".length);

    c.set({
      name: "invoice-session",
      value: token,
      httpOnly: true,
      path: "/",
    });
  } catch (e) {
    console.log(e);
    return {
      errors: { server: "Something went wrong. Try again later." },
    };
  }

  redirect("/");
}

export async function logOut() {
  const c = await cookies();
  try {
    c.delete("invoice-session");
  } catch (e) {
    console.log(e);
  }
  redirect("/auth/login");
}
