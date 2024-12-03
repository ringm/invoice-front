"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useActionState } from "react";
import { logIn } from "../actions";

export const LogInForm: React.FC = () => {
  const [state, action, isPending] = useActionState(logIn, {
    statusCode: undefined,
  });

  return (
    <>
      <form action={action} className="mb-4">
        <label htmlFor="email" className="label">
          email
        </label>
        <Input id="email" type="email" className="mb-6" />
        <label htmlFor="password" className="label">
          password
        </label>
        <Input id="password" type="password" className="mb-6" />
        <Button disabled={isPending} type="submit" className="w-32">
          <Loader2 className={`mr-1 animate-spin ${!isPending && "hidden"}`} />
          Log In
        </Button>
      </form>
      <p className="text-red-400">
        {state?.statusCode === 401 && "Invalid credentials."}
        {state?.statusCode === 404 &&
          "User doesn't exist. Try a different email or sign up."}
        {state?.statusCode === 500 &&
          "Something went wrong. Please try again later."}
      </p>
    </>
  );
};
