import { Invoice } from "./Invoice";
import { UserAddress } from "./UserAddress";
import { Client } from "./Client";

export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  clients: Client[];
  invoices: Invoice[];
  addresses: UserAddress[];
}
