import { Controller, useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().required("Email é obrigatório!"),
  password: yup
    .string()
    .required("Senha é obrigatória!")
    .min(8, "A senha deve conter no mínimo 8 caracteres!"),
});

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: yupResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            legend="e-mail"
            placeholder="seu@email.com"
            type="email"
            {...field}
          />
        )}
      />

      {errors.email?.message && (
        <span className="text-xs text-red-600">{errors.email.message}</span>
      )}

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            legend="Senha"
            placeholder="123456"
            type="password"
            {...field}
          />
        )}
      />

      {errors.password?.message && (
        <span className="text-xs text-red-600">{errors.password.message}</span>
      )}

      <Button type="submit">Entrar</Button>
    </form>
  );
}
