import { Invoice } from "./Invoice";

export interface InvoiceItem {
  id: number;
  invoiceId: string;
  invoice: Invoice;
  name: string;
  qty: number;
  price: number;
}
