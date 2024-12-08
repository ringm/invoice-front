export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-lg">{children}</div>;
}
