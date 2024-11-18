export const Invoice: React.FC = () => {
  return (
    <article className="grid grid-cols-2 grid-rows-4 rounded-lg bg-white p-6 dark:bg-slate-800">
      <h2 className="col-start-1 col-end-2 text-sm font-bold text-gray-800 lg:text-lg dark:text-white">
        <span className="font-light text-slate-500 dark:text-violet-200">
          #
        </span>
        RT3080
      </h2>
      <p className="row-start-3 row-end-4 text-slate-500 dark:text-slate-50">
        Due 19 Aug 2021
      </p>
      <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-right text-slate-500 lg:text-base dark:text-slate-50">
        Jensen Huang
      </p>
      <p className="row-start-4 row-end-5 text-lg font-bold text-gray-800 dark:text-2xl dark:text-white">
        £ 1,800.90
      </p>
      <p className="col-start-2 col-end-3 row-start-3 row-end-5 flex h-10 w-28 items-center justify-center self-center justify-self-end rounded-md bg-green-100 py-3 font-bold text-green-500">
        <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
        Paid
      </p>
    </article>
  );
};
