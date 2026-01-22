import { useActionState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";
import { api } from "../services/api";
import { useAuth } from "../hooks/useAuth";

const signInSchema = z.object({
  email: z.string().email({ message: "E-mail inválido!" }),
  password: z.string().trim().min(1, { message: "Informe a senha!" }),
});

export default function SignIn() {
  const [state, formAction, isLoading] = useActionState(onAction, null);
  const auth = useAuth();

  async function onAction(prevState: any, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      const response = await api.post("/sessions", data);
      auth.save(response.data);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return { message: error.issues[0].message };
      }

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }

      return { message: "Não foi possível fazer login" };
    }
  }

  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
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

      <span className="text-xs text-red-600 text-center">{state?.message}</span>

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
