import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { logOut } from "../auth/actions";
import { cookies } from "next/headers";

export const User: React.FC = async () => {
  const c = await cookies();
  const session = c.get("invoice-session");
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="h-10 w-10 cursor-pointer rounded-full bg-slate-200"></div>
      </PopoverTrigger>
      <PopoverContent className="mb-4 ml-4 w-auto">
        {session ? (
          <div className="flex flex-col gap-6">
            <Link href="/account">
              <Button variant="ghost">Account</Button>
            </Link>
            <form action={logOut}>
              <Button type="submit" variant="ghost">
                Log out
              </Button>
            </form>
          </div>
        ) : (
          <Button asChild variant="ghost">
            <Link href="/auth/login">Log In</Link>
          </Button>
        )}
      </PopoverContent>
    </Popover>
  );
};
