import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Dashboard() {
  const [name, setName] = useState("");

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

        <Button>AU</Button>
      </form>
    </div>
  );
}
