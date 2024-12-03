"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { InvoiceItem } from "@/lib/types/InvoiceItem";

interface TableProps {
  items: InvoiceItem[];
  onAdd: () => void;
  onDelete: (id: number) => void;
}

export const ItemListTable: React.FC<TableProps> = ({
  items,
  onAdd,
  onDelete,
}) => {
  return (
    <Table>
      <TableHeader className="hidden md:table-header-group">
        <TableRow className="hover:dark:bg-transparent">
          <TableHead>Item Name</TableHead>
          <TableHead className="w-[7.5rem]">Qty.</TableHead>
          <TableHead className="w-[10rem]">Price</TableHead>
          <TableHead>Total</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items?.map((item, idx) => (
          <TableRow
            key={item.id}
            className="grid w-full grid-cols-4 md:table-row"
          >
            <TableCell className="col-span-4 font-medium">
              <label className="label md:hidden">Item Name</label>
              <Input
                type="text"
                name={`invoiceItems[${idx}].name`}
                defaultValue={item.name}
              />
            </TableCell>
            <TableCell>
              <label className="label md:hidden">Qty.</label>
              <Input
                type="number"
                defaultValue={item.qty}
                name={`invoiceItems[${idx}].qty`}
                min={1}
              />
            </TableCell>
            <TableCell>
              <label className="label md:hidden">Price</label>
              <Input
                type="number"
                defaultValue={item.price}
                name={`invoiceItems[${idx}].price`}
              />
            </TableCell>
            <TableCell>
              <label className="label mb-5 md:hidden">Total</label>
              <span className="block md:inline">${item.qty * item.price}</span>
            </TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="icon"
                className="ml-6 mt-7 md:ml-0 md:mt-0"
                onClick={() => onDelete(idx)}
              >
                <Trash2 />
              </Button>
            </TableCell>
          </TableRow>
        ))}
        <TableRow className="hover:dark:bg-transparent">
          <TableCell colSpan={5}>
            <Button className="w-full" variant="secondary" onClick={onAdd}>
              + Add New Item
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
