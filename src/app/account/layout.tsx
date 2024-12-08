import Link from "next/link";

export default async function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full max-w-6xl items-start gap-12">
      <nav aria-label="account navigation" className="flex w-44 flex-col gap-6">
        <Link href="/account">Overview</Link>
        <Link href="/account/clients">Clients</Link>
        <Link href="/account/addresses">My Addresses</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
