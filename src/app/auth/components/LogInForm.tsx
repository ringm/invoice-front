"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { LogInFormType } from "@/lib/types/LogInForm";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";

export const LogInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm<LogInFormType>({ mode: "all" });

  // function wait(ms: number) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  const router = useRouter();
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const onSubmit: SubmitHandler<LogInFormType> = async (data) => {
    try {
      const { email, password } = data;
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (res?.status === 200) {
        router.push("/");
      } else {
        router.push(`?status=${res?.status}`);
      }
    } catch (e) {
      console.log(e);
      router.push(`?status=500`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <label htmlFor="email" className="label">
          email
        </label>
        <Input
          {...register("email", { required: true })}
          id="email"
          type="email"
          className="mb-6"
        />
        <label htmlFor="password" className="label">
          password
        </label>
        <Input
          {...register("password", { required: true, minLength: 6 })}
          id="password"
          type="password"
          className="mb-6"
        />
        <Button
          disabled={!isDirty || !isValid || isSubmitting}
          type="submit"
          className="w-32"
        >
          <Loader2
            className={`mr-1 animate-spin ${!isSubmitting && "hidden"}`}
          />
          Log In
        </Button>
      </form>
      <p className="text-red-400">
        {status === "401" && "Invalid credentials."}
        {status === "404" &&
          "User doesn't exist. Try a different email or sign up."}
        {status === "500" && "Something went wrong. Please try again later."}
      </p>
    </>
  );
};
