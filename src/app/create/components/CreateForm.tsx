"use client";

import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/datePicker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
// import { ItemListTable } from "./ItemListTable";

export const CreateForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-4">
      <fieldset>
        <legend className="font-bold capitalize text-slate-600 dark:text-white lg:mb-4">
          Bill from
        </legend>
        <label htmlFor="userStreetAddress" className="label">
          Street address
        </label>
        <br />
        <Input
          id="userStreetAddress"
          type="text"
          name="userStreetAddress"
          className="mb-6"
        />
        <div className="mb-6 flex flex-wrap gap-6 lg:flex-nowrap">
          <div className="w-1/3 flex-grow lg:w-full lg:max-w-[50%]">
            <label htmlFor="userCity" className="label">
              City
            </label>
            <br />
            <Input id="userCity" type="text" name="userCity" />
          </div>
          <div className="w-1/3 flex-grow lg:w-full lg:max-w-[50%]">
            <label htmlFor="userPostCode" className="label">
              Post Code
            </label>
            <br />
            <Input id="userPostCode" type="text" name="userPostCode" />
          </div>
          <div className="w-full">
            <label htmlFor="userCountry" className="label">
              Country
            </label>
            <br />
            <Input id="userCountry" type="text" name="userCountry" />
          </div>
        </div>
      </fieldset>

      <fieldset className="mb-4">
        <legend className="font-bold capitalize text-slate-600 dark:text-white lg:mb-4">
          Bill To
        </legend>
        <label htmlFor="clientName" className="label">
          Client&apos;s name
        </label>
        <br />
        <Input id="clientName" type="text" name="clientName" className="mb-6" />
        <label htmlFor="clientEmail" className="label">
          Client&apos;s email
        </label>
        <br />
        <Input
          id="clientEmail"
          type="text"
          name="clientEmail"
          className="mb-6"
        />
        <div className="mb-6 flex flex-wrap gap-6 lg:flex-nowrap">
          <div className="w-1/3 flex-grow lg:w-full lg:max-w-[50%]">
            <label htmlFor="clientCity" className="label">
              City
            </label>
            <br />
            <Input id="clientCity" type="text" name="clientCity" />
          </div>
          <div className="w-1/3 flex-grow lg:w-full lg:max-w-[50%]">
            <label htmlFor="clientPostCode" className="label">
              Post Code
            </label>
            <br />
            <Input id="clientPostCode" type="text" name="clientPostCode" />
          </div>
          <div className="w-full">
            <label htmlFor="clientCountry" className="label">
              Country
            </label>
            <br />
            <Input id="clientCountry" type="text" name="clientCountry" />
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            <label htmlFor="invoiceDate" className="label">
              Invoice Date
            </label>
            <br />
            <DatePicker />
          </div>
          <div className="flex-1">
            <label className="label">Payment Terms</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Payment Terms" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="60">60 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-xl font-bold text-slate-800 dark:text-slate-500">
          Item List
        </legend>
        {/* <ItemListTable
          items={invoiceItems}
          onAddItem={addItem}
          onDeleteItem={removeItem}
        /> */}
      </fieldset>
      <div className="flex items-center">
        <Button className="mr-auto" variant="destructive">
          Discard
        </Button>
        <Button variant="secondary">Save Draft</Button>
        <Button type="submit" className="ml-4 bg-purple-400">
          Create
        </Button>
      </div>
    </form>
  );
};
