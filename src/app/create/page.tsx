import Link from "next/link";
import { Header } from "./components/Header";
import { CreateForm } from "./components/CreateForm";

export default function Create() {
  return (
    <div className="w-full max-w-3xl">
      <nav aria-label="Second navigation" className="mb-6">
        <Link
          href="/"
          className="text-sm font-bold text-slate-800 dark:text-white lg:text-base"
        >
          Go back
        </Link>
      </nav>
      <Header />
      <CreateForm />
    </div>
  );
}
