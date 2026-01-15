import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Enviado!");
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="e-mail"
        placeholder="seu@email.com"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        placeholder="123456"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button isLoading={isLoading} type="submit">
        Entrar
      </Button>

      <a
        href="/signup"
        className="text-gray-100 text-center text-sm font-semibold mt-5 mb-4 hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  );
}
