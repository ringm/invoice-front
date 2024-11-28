import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-12 w-full rounded-md border border-gray-300 bg-slate-100 px-4 text-slate-800 shadow-none outline-none focus:outline-1 focus:outline-offset-0 focus:outline-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
