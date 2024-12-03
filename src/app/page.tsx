import { Header } from "./components/Header";
import { Invoice } from "./components/Invoice";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <>
        <p>
          You are not logged in. Please log in or sign up to access this page.
        </p>
        <div className="flex items-center gap-4">
          <Button asChild className="mt-4">
            <Link href="/auth/login">Log In</Link>
          </Button>
          <Button asChild className="mt-4">
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="mt-8 flex flex-col gap-4">
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
      </div>
    </>
  );
}
