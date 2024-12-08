import { cookies } from "next/headers";
import { decodeJwt } from "jose";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const getClients = async () => {
  const c = await cookies();
  const token = c.get("invoice-session");
  const payload = decodeJwt(token!.value);
  try {
    const res = await fetch(`${process.env.API_DEV}/user/${payload.id}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
      method: "GET",
    });
    const data = await res.json();
    return data.data.clients;
  } catch (e) {
    console.log(e);
  }
};

export default async function ClientsPage() {
  const clients = await getClients();
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Clients</h1>
      <div className="flex flex-col">
        {clients?.map((client) => <p key={client.name}>{client.name}</p>)}
      </div>
      <Button asChild>
        <Link href="/account/clients/create">Create client</Link>
      </Button>
    </div>
  );
}
