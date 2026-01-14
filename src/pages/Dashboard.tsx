import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import searchSvg from "../assets/search.svg";
import RefundItem, { type RefundItemProps } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";
import Pagination from "../components/Pagination";

export default function Dashboard() {
  const [name, setName] = useState("");

  const EXAMPLE_REFUNDITEM: RefundItemProps = {
    id: "12",
    amount: 34.9,
    name: "João Gabriel Motta",
    category: "Transporte",
    categoryImg: CATEGORIES.transport.icon,
  };

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div className="bg-gray-500 w-full p-10 rounded-xl lg:w-2xl mx-auto">
      <h1 className="text-gray-100 font-bold text-xl ">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex items-center justify-between pb-6 border-b border-b-gray-400 md:flex-row gap-2 mt-6 "
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="icone de pesquisa" />
        </Button>
      </form>

      <div className="flex flex-col gap-5 mt-6 max-h-85.5 overflow-y-scroll">
        <RefundItem data={EXAMPLE_REFUNDITEM} />
        <RefundItem data={EXAMPLE_REFUNDITEM} />
        <RefundItem data={EXAMPLE_REFUNDITEM} />
        <RefundItem data={EXAMPLE_REFUNDITEM} />
        <RefundItem data={EXAMPLE_REFUNDITEM} />
        <RefundItem data={EXAMPLE_REFUNDITEM} />
        <RefundItem data={EXAMPLE_REFUNDITEM} />
        <RefundItem data={EXAMPLE_REFUNDITEM} />
      </div>

      <div className="flex flex-col mt-6">
        <Pagination current={1} total={10} />
      </div>
    </div>
  );
}
