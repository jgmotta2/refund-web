import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { api } from "../services/api";

const signUpSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Informe o seu nome!" }),
    email: z.string().email({ message: "E-mail inválido!" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 dígitos!" }),
    passwordConfirm: z.string({ message: "Confirme sua senha!" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não coincidem!",
    path: ["passwordConfirm"],
  });

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);

      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm,
      });

      await api.post("/users", data);

      if (confirm("Cadastrado com sucesso. Deseja ir para a tela de login?")) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }

      alert("Não foi possível cadastrar!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        placeholder="Seu nome"
        legend="Nome"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        required
        placeholder="seu@email.com"
        legend="e-mail"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        placeholder="123456"
        legend="Senha"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        placeholder="123456"
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
