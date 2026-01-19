import { useActionState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function SignIn() {
  function onAction(formData: FormData) {
    console.log(formData.get("email"));

    alert("Enviado!");
  }

  return (
    <form action={onAction} className="w-full flex flex-col gap-4">
      <Input
        required
        name="email"
        legend="e-mail"
        placeholder="seu@email.com"
        type="email"
      />

      <Input
        required
        name="password"
        legend="Senha"
        placeholder="123456"
        type="password"
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
