import { cookies } from "next/headers";
import { decodeJwt } from "jose";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getUserClients } from "@/lib/services/userService";

export default async function ClientsPage() {
  const clients = await getUserClients();
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
