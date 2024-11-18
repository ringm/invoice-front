import { Header } from "./components/Header";
import { Invoice } from "./components/Invoice";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-8 flex flex-col gap-4">
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
      </div>
    </>
  );
}
