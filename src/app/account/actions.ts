"use server";

import { cookies } from "next/headers";
import { decodeJwt } from "jose";
import { ClientSchema } from "@/lib/zod/client";

export const createClient = async (state: unknown, payload: FormData) => {
  const c = await cookies();
  const token = c.get("invoice-session");
  const user = decodeJwt(token!.value);

  try {
    const clientData = Object.fromEntries(payload.entries());
    const validationResult = ClientSchema.safeParse(clientData);

    if (!validationResult.success) {
      return {
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    const res = await fetch(`${process.env.API_DEV}/client`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
      method: "POST",
      body: JSON.stringify({
        userId: user.id,
        ...validationResult.data,
      }),
    });

    if (res.ok) {
      return { success: "crient created" };
    } else {
      return { errors: { badRequest: "" } };
    }
  } catch (e) {
    console.log(e);
    return {
      errors: { server: "Something went wrong. Try again later." },
    };
  }
};
