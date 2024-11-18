import Link from "next/link";

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>;
}

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between">
      <div>
        <h1 className="text-xl font-bold text-gray-950 lg:text-3xl dark:text-white">
          Invoices
        </h1>
        <p className="font-regular text-slate-500 dark:text-slate-300">
          There are 4 pending invoices
        </p>
      </div>
      <Link
        href="/create"
        className="flex cursor-pointer items-center justify-center rounded-full bg-violet-600 px-3 font-bold hover:bg-violet-500 lg:h-12"
      >
        + New
      </Link>
    </header>
  );
};
