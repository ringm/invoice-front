import Link from "next/link";
import { Header } from "./components/Header";
import { CreateForm } from "./components/CreateForm";

export default function Create() {
  return (
    <>
      <nav aria-label="Second navigation" className="mb-6">
        <Link
          href="/"
          className="text-sm font-bold text-slate-800 lg:text-base dark:text-white"
        >
          Go back
        </Link>
      </nav>
      <Header />
      <CreateForm />
    </>
  );
}
