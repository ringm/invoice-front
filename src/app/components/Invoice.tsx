import { dateFormatter } from "@/lib/utils";
import { Invoice as InvoiceProps } from "@/lib/types/Invoice";

export const Invoice: React.FC<InvoiceProps> = ({
  id,
  paymentDue,
  billTo,
  title,
  total,
  paid,
}) => {
  return (
    <article className="grid grid-cols-2 grid-rows-4 rounded-lg bg-white p-6 dark:bg-slate-800">
      <h2 className="col-start-1 col-end-2 text-sm font-bold text-gray-800 dark:text-white lg:text-lg">
        <span className="font-light text-slate-500 dark:text-violet-200">
          #
        </span>
        {id}
      </h2>
      <p className="row-start-3 row-end-4 text-slate-500 dark:text-slate-50">
        Due {dateFormatter.format(new Date(paymentDue))}
      </p>
      <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-right text-slate-500 dark:text-slate-50 lg:text-base">
        {billTo?.name}
      </p>
      <p className="row-start-4 row-end-5 text-lg font-bold text-gray-800 dark:text-2xl dark:text-white">
        £ {total}
      </p>
      <p
        className={`col-start-2 col-end-3 row-start-3 row-end-5 flex h-10 w-28 items-center justify-center self-center justify-self-end rounded-md py-3 font-bold ${paid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
      >
        <span
          className={`mr-2 h-2 w-2 rounded-full ${paid ? "bg-green-500" : "bg-red-500"}`}
        />
        {paid ? "Paid" : "Not Paid"}
      </p>
    </article>
  );
};
