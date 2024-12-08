import { cookies } from "next/headers";
import { decodeJwt } from "jose";
import { fetchService } from "./fetchService";
import { Client } from "../types/Client";
import { Invoice } from "../types/Invoice";

export const getUserClients = async () => {
  try {
    const userId = await getUserId();
    const clients = await fetchService<Client[]>(`/user/${userId}/clients`);
    return clients.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserInvoices = async () => {
  try {
    const userId = getUserId();
    const invoices = await fetchService<Invoice[]>(`/user/${userId}/invoices`);
    return invoices.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const getUserId = async () => {
  const c = await cookies();
  const token = c.get("invoice-session")!.value;
  const user = decodeJwt(token);
  return user.id;
};
