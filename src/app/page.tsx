import { Header } from "./components/Header";
import { Invoice } from "./components/Invoice";
import { cookies } from "next/headers";

const getInvoices = async () => {
  const c = await cookies();
  const token = c.get("invoice-session");
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DEV}/invoice`, {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
      method: "GET",
    });
    console.log("res", res);
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
  console.log("invoices: ", invoices);
  return (
    <>
      <Header />
      <div className="mt-8 flex flex-col gap-4">
        {invoices?.map((invoice) => <Invoice key={invoice.id} {...invoice} />)}
      </div>
    </>
  );
}
