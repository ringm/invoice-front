import { CreateClientForm } from "../components/CreateForm";

export default async function CreateClientPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Create new client</h1>
      <CreateClientForm />
    </div>
  );
}
