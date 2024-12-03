import { InvoiceItem } from "./InvoiceItem";
import { User } from "./User";
import { UserAddress } from "./UserAddress";
import { Client } from "./Client";

export interface Invoice {
  id: string;
  title: string;
  published: boolean;
  userId: number;
  user: User;
  userAddressId: number;
  billFrom: UserAddress;
  clientId: number;
  billTo: Client;
  invoiceDate: Date;
  paymentDue: Date;
  invoiceItems: InvoiceItem[];
  paid: boolean;
}
