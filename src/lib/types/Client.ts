import { User } from "./User";
import { Invoice } from "./Invoice";

export interface Client {
  id: number;
  userId: number;
  user: User;
  name: string;
  email: string;
  streetAddress: string;
  city: string;
  postCode: string;
  country: string;
  invoices: Invoice[];
}
