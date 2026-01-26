import { useEffect, useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import Upload from "../components/Upload";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router";
import fileSvg from "../assets/file.svg";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";
import { api } from "../services/api";
import { FormatCurrency } from "../utils/formatCurrency";
import { da } from "zod/v4/locales";

const refundSchema = z.object({
  name: z.string().trim().min(1, { message: "Informe o nome da solicitação!" }),
  category: z.string().min(1, { message: "Informe uma categoria!" }),
  amount: z.coerce
    .number({ message: "Informe um número válido!" })
    .positive({ message: "Informe um valor superior a 0!" }),
});

export default function Refund() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState("");
  const [fileURL, setFileURL] = useState<string | null>();

  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (params.id) {
      return navigate(-1);
    }

    try {
      setIsLoading(true);

      if (!file) {
        return alert("Selecione um arquivo!");
      }

      const fileUploadForm = new FormData();
      fileUploadForm.append("file", file);

      const response = await api.post("/uploads", fileUploadForm);

      const data = refundSchema.parse({
        name,
        category,
        amount: amount.replace(",", "."),
      });

      await api.post("/refunds", {
        ...data,
        filename: response.data.filename,
      });

      navigate("/confirm", { state: { fromSubmit: true } });
    } catch (error) {
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }

      alert("Não foi possível realizar a solicitação!");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchRefunds(id: string) {
    const { data } = await api.get<RefundAPIresponse>(`/refunds/${id}`);

    setName(data.name);
    setCategory(data.category);
    setAmount(FormatCurrency(data.amount));
    setFileURL(data.filename);
  }

  useEffect(() => {
    if (params.id) {
      fetchRefunds(params.id);
    }
  }, [params.id]);

  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:w-2xl mx-auto"
    >
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso
        </p>
      </header>

      <Input
        required
        legend="Nome da solicitação"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={!!params.id}
      />

      <div className="flex gap-4">
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          legend="Categorias"
          disabled={!!params.id}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>

        <Input
          required
          legend="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={!!params.id}
        />
      </div>

      {params.id && fileURL ? (
        <a
          href={`http://localhost:3333/uploads/${fileURL}`}
          target="_blank"
          className="flex items-center justify-center gap-2 text-sm text-green-100 font-semibold my-6 hover:opacity-75 transition ease-linear"
        >
          <img src={fileSvg} alt="icone de arquivo" /> Abrir comprovante
        </a>
      ) : (
        <Upload
          filename={file && file?.name}
          legend="Comprovante"
          required
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
          disabled={!!params.id}
        />
      )}

      <Button type="submit">{params.id ? "Voltar" : "Enviar"}</Button>
    </form>
  );
}
