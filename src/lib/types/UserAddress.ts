import { User } from "./User";
import { Invoice } from "./Invoice";

export interface UserAddress {
  id: number;
  streetAddress: string;
  postalCode: string;
  city: string;
  country: string;
  userId: number;
  user: User;
  invoices: Invoice[];
}
