import Form from "next/form";
import { createInvoice } from "../actions";

export const CreateForm: React.FC = () => {
  return (
    <Form action={createInvoice} className="flex flex-col gap-4">
      <fieldset>
        <legend className="font-bold capitalize text-slate-600 lg:mb-4 dark:text-white">
          Bill from
        </legend>
        <label htmlFor="userStreetAddress" className="label">
          Street address
        </label>
        <br />
        <input
          id="userStreetAddress"
          type="text"
          name="userStreetAddress"
          className="input mb-6"
        />
        <div className="mb-6 flex flex-wrap gap-6 lg:flex-nowrap">
          <div className="w-1/3 flex-grow lg:w-full lg:max-w-[50%]">
            <label htmlFor="userCity" className="label">
              City
            </label>
            <br />
            <input
              id="userCity"
              type="text"
              name="userCity"
              className="input"
            />
          </div>
          <div className="w-1/3 flex-grow lg:w-full lg:max-w-[50%]">
            <label htmlFor="userPostCode" className="label">
              Post Code
            </label>
            <br />
            <input
              id="userPostCode"
              type="text"
              name="userPostCode"
              className="input"
            />
          </div>
          <div className="w-full">
            <label htmlFor="userCountry" className="label">
              Country
            </label>
            <br />
            <input
              id="userCountry"
              type="text"
              name="userCountry"
              className="input"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="mb-4">
        <legend className="font-bold capitalize text-slate-600 lg:mb-4 dark:text-white">
          Bill To
        </legend>
        <label htmlFor="clientName" className="label">
          Client&apos;s name
        </label>
        <br />
        <input
          id="clientName"
          type="text"
          name="clientName"
          className="input mb-6"
        />
        <label htmlFor="clientEmail" className="label">
          Client&apos;s email
        </label>
        <br />
        <input
          id="clientEmail"
          type="text"
          name="clientEmail"
          className="input mb-6"
        />
        <div className="mb-6 flex flex-wrap gap-6 lg:flex-nowrap">
          <div className="w-1/3 flex-grow lg:w-full lg:max-w-[50%]">
            <label htmlFor="clientCity" className="label">
              City
            </label>
            <br />
            <input
              id="clientCity"
              type="text"
              name="clientCity"
              className="input"
            />
          </div>
          <div className="w-1/3 flex-grow lg:w-full lg:max-w-[50%]">
            <label htmlFor="clientPostCode" className="label">
              Post Code
            </label>
            <br />
            <input
              id="clientPostCode"
              type="text"
              name="clientPostCode"
              className="input"
            />
          </div>
          <div className="w-full">
            <label htmlFor="clientCountry" className="label">
              Country
            </label>
            <br />
            <input
              id="clientCountry"
              type="text"
              name="clientCountry"
              className="input"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            <label htmlFor="invoiceDate" className="label">
              Invoice Date
            </label>
            <br />
            <input id="invoiceDate" type="date" className="input" />
          </div>
          <div className="flex-1">
            <label className="label">Payment Terms</label>
            <select className="input">
              <option>30 days</option>
              <option>60 days</option>
              <option>90 days</option>
            </select>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-xl font-bold text-slate-800 dark:text-slate-500">
          Item List
        </legend>
        <ul>
          <li>
            <div></div>
          </li>
        </ul>
      </fieldset>
    </Form>
  );
};
