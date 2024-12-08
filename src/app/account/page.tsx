import { cookies } from "next/headers";
import { decodeJwt } from "jose";

const getMe = async () => {
  const c = await cookies();
  const token = c.get("invoice-session");
  const payload = decodeJwt(token!.value);
  return payload;
};

export default async function Account() {
  const me: any = await getMe();
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Account</h1>
      <div className="flex">
        <div className="mr-4 h-32 w-32 rounded-md bg-slate-500"></div>
        <div className="pt-2">
          <p>Username</p>
          <p className="mb-2 text-lg">{me?.name}</p>
          <p>Email</p>
          <p className="text-lg">{me?.email}</p>
        </div>
      </div>
    </div>
  );
}
