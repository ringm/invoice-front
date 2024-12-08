"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { createClient } from "../../actions";

export const CreateClientForm: React.FC = () => {
  const [state, action, isPending] = useActionState(createClient, undefined);
  return (
    <form action={action} className="max-w-xl">
      <label htmlFor="name" className="label">
        Name
      </label>
      <Input id="name" name="name" type="text" className="mb-2" required />
      {state?.errors?.name && (
        <p className="text-sm text-red-400">{state?.errors?.name}</p>
      )}

      <label htmlFor="name" className="label mt-4">
        Email
      </label>
      <Input id="email" name="email" type="email" required />
      {state?.errors?.email && (
        <p className="mt-2 text-sm text-red-400">{state?.errors?.email}</p>
      )}

      <label htmlFor="streetAddress" className="label mt-4">
        Street
      </label>
      <Input
        id="streetAddress"
        name="streetAddress"
        type="text"
        className="mb-2"
        required
      />
      {state?.errors?.streetAddress && (
        <p className="mt-2 text-sm text-red-400">
          {state?.errors?.streetAddress}
        </p>
      )}

      <div className="mb-6 mt-4 flex items-center gap-4">
        <div>
          <label htmlFor="city" className="label">
            City
          </label>
          <Input id="city" name="city" type="text" required />
          {state?.errors?.city && (
            <p className="mt-2 text-sm text-red-400">{state?.errors?.city}</p>
          )}
        </div>

        <div>
          <label htmlFor="country" className="label">
            Country
          </label>
          <Input id="country" name="country" type="text" required />
          {state?.errors?.country && (
            <p className="mt-2 text-sm text-red-400">
              {state?.errors?.country}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="postCode" className="label">
            Post Code
          </label>
          <Input id="postCode" name="postCode" type="text" required />
          {state?.errors?.postCode && (
            <p className="mt-2 text-sm text-red-400">
              {state?.errors?.postCode}
            </p>
          )}
        </div>
      </div>

      <Button disabled={isPending} type="submit">
        <Loader2 className={`mr-1 animate-spin ${!isPending && "hidden"}`} />
        Create
      </Button>
      {state?.success && <p className="mt-2 text-green-500">Client created.</p>}
      <p className="text-red-400">
        {state?.errors?.unauthorized ||
          (state?.errors?.server && (
            <p className="text-sm text-red-400">
              {state?.errors?.server}
              {state?.errors?.unauthorized}
            </p>
          ))}
      </p>
    </form>
  );
};
