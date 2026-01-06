import Button from "../components/Button";
import Input from "../components/Input";

export default function SignIn() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input legend="e-mail" placeholder="seu@email.com" type="email" />

      <Input legend="Senha" placeholder="123456" type="password" />

      <Button>Entrar</Button>
    </form>
  );
}
