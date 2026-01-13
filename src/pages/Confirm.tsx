import { Navigate, useLocation } from "react-router";
import okSvg from "../assets/ok.svg";
import Button from "../components/Button";

export default function Confirm() {
  const location = useLocation();

  if (!location.state?.fromSubmit) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className=" w-full flex items-center justify-center mx-auto lg:w-2xl bg-gray-500 rounded-xl flex-col p-10 gap-6">
      <h1 className="text-green-100 text-2xl font-bold">
        Solicitação Enviada!
      </h1>
      <img src={okSvg} alt="ícone de confirmação" />
      <p className="text-gray-200 text-sm text-center">
        Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o
        setor financeiro irá entrar em contato com você.
      </p>
      <a
        href="/"
        className="bg-green-100 rounded-lg text-gray-400 w-full h-12 flex justify-center items-center hover:bg-green-200 transition ease-linear"
      >
        Nova solicitação
      </a>
    </div>
  );
}
