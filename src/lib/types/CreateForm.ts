import { InvoiceItem } from "./InvoiceItem";

export interface CreateFormValues {
  id: string;
  userStreetAddress: string;
  userCity: string;
  userPostCode: string;
  userCountry: string;
  clientName: string;
  clientEmail: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  invoiceDate: string;
  paymentTerms: string;
  invoiceItems: InvoiceItem[];
}
