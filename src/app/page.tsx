import { Header } from "./components/Header";
import { Invoice } from "./components/Invoice";
import { getUserInvoices } from "@/lib/services/userService";

export default async function Home() {
  const invoices = await getUserInvoices();
  const pendingInvoices = invoices.filter((invoice) => !invoice.paid).length;
  return (
    <div className="w-full max-w-3xl">
      <Header pendingInvoicesAmount={pendingInvoices} />
      {invoices.length > 0 ? (
        <div className="mt-8 flex flex-col gap-4">
          {invoices?.map((invoice) => (
            <Invoice key={invoice.id} {...invoice} />
          ))}
        </div>
      ) : (
        <p>You don't have any invoices. Try creating one.</p>
      )}
    </div>
  );
}
