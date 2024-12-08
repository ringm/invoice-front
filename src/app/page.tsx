import { Header } from "./components/Header";
import { Invoice } from "./components/Invoice";
import { cookies } from "next/headers";

const getInvoices = async () => {
  const c = await cookies();
  const token = c.get("invoice-session");
  try {
    const res = await fetch(`${process.env.API_DEV}/invoice`, {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
      method: "GET",
    });
    if (res.ok) {
      const invoices = await res.json();
      return invoices.data;
    }
    return null;
  } catch (e) {
    console.log(e);
  }
};

export default async function Home() {
  const invoices = await getInvoices();
  const pendingInvoices = invoices.filter((invoice) => !invoice.paid).length;
  return (
    <div className="w-full max-w-3xl">
      <Header pendingInvoicesAmount={pendingInvoices} />
      <div className="mt-8 flex flex-col gap-4">
        {invoices?.map((invoice) => <Invoice key={invoice.id} {...invoice} />)}
      </div>
    </div>
  );
}
