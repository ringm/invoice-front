"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useActionState } from "react";
import { logIn } from "../actions";

export const LogInForm: React.FC = () => {
  const [state, action, isPending] = useActionState(logIn, { errors: {} });

  return (
    <>
      <form action={action} className="mb-4">
        <label htmlFor="email" className="label">
          email
        </label>
        <Input id="email" name="email" type="email" className="mb-2" />
        {state?.errors?.email && (
          <p className="text-sm text-red-400">{state?.errors?.email}</p>
        )}
        <label htmlFor="password" className="label mt-4">
          password
        </label>
        <Input id="password" name="password" type="password" className="mb-2" />
        {state?.errors?.password && (
          <p className="text-sm text-red-400">{state?.errors?.password}</p>
        )}
        <Button type="submit" className="mt-6 w-32">
          <Loader2 className={`mr-1 animate-spin ${!isPending && "hidden"}`} />
          Log In
        </Button>
      </form>
      <p className="text-red-400">
        {state.errors?.unauthorized ||
          (state.errors?.server && (
            <p className="text-sm text-red-400">
              {state.errors.server}
              {state.errors.unauthorized}
            </p>
          ))}
      </p>
    </>
  );
};
