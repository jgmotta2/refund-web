import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function SignIn() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Enviado!");
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input required legend="Nome" onChange={(e) => setNome(e.target.value)} />

      <Input
        required
        legend="e-mail"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        legend="Confirme sua senha"
        type="password"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button isLoading={isLoading} type="submit">
        Cadastrar
      </Button>
      <a
        href="/"
        className="text-gray-100 text-center text-sm font-semibold mt-5 mb-4 hover:text-green-800 transition ease-linear"
      >
        Já tenho uma conta
      </a>
    </form>
  );
}
