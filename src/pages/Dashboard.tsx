import { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import searchSvg from "../assets/search.svg";
import RefundItem, { type RefundItemProps } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";
import Pagination from "../components/Pagination";
import { api } from "../services/api";
import { AxiosError } from "axios";

const PER_PAGE = 1;

export default function Dashboard() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [refunds, setRefunds] = useState<RefundItemProps[]>([]);

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < 10) {
        return prevPage + 1;
      }

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage;
    });
  }

  async function fetchRefunds() {
    try {
      const response = await api.get<RefundsPaginationAPIresponse>(
        `/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`,
      );

      setRefunds(
        response.data.refunds.map((refund) => ({
          id: refund.id,
          amount: refund.amount,
          description: refund.name,
          categoryImg: CATEGORIES[refund.category].icon,
          name: refund.user.name,
        })),
      );

      setTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }

      alert("Não foi possível carregar!");
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    fetchRefunds();
  }

  useEffect(() => {
    fetchRefunds();
  }, [page]);

  return (
    <div className="bg-gray-500 w-full p-10 rounded-xl lg:w-2xl mx-auto">
      <h1 className="text-gray-100 font-bold text-xl ">Solicitações</h1>

      <form
        onSubmit={onSubmit}
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

      <div className="flex flex-col gap-5 my-6 max-h-85.5 overflow-y-scroll">
        {refunds.map((item) => (
          <RefundItem key={item.id} data={item} href={`/refund/${item.id}`} />
        ))}
      </div>

      <div>
        <Pagination
          current={page}
          total={totalPages}
          onNext={() => handlePagination("next")}
          onPrevious={() => handlePagination("previous")}
        />
      </div>
    </div>
  );
}
