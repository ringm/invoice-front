"use server";

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export async function logIn(
  state: { statusCode: number | undefined },
  formData: FormData,
) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.status !== 200) {
      return { statusCode: res?.status };
    }
  } catch (e) {
    console.log(e);
    return { statusCode: 500 };
  }
  redirect("/");
}
