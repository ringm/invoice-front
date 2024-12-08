import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>;
}

export const Header: React.FC<{ pendingInvoicesAmount: number }> = ({
  pendingInvoicesAmount,
}) => {
  return (
    <header className="flex justify-between">
      <div>
        <h1 className="text-xl font-bold text-gray-950 dark:text-white lg:text-3xl">
          Invoices
        </h1>
        <p className="font-regular text-slate-500 dark:text-slate-300">
          There are {pendingInvoicesAmount} pending invoices
        </p>
      </div>
      <Button asChild>
        <Link href="/create">+ New</Link>
      </Button>
    </header>
  );
};
