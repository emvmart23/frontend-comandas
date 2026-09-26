"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { InputPassword } from "@/components/ui/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import z from "zod";

const loginScheme = z.object({
  user: z.string().min(5, "").max(32, ""),
  password: z.string().min(5, ""),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginScheme>>({
    resolver: zodResolver(loginScheme),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSubmit = ({
    user,
    password,
  }: {
    user: string;
    password: string;
  }) => {
    
  };

  return (
    <form id="form-auth" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="user"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-auth-user">Usuario</FieldLabel>
              <Input
                {...field}
                id="form-auth-user"
                aria-invalid={fieldState.invalid}
                placeholder="Ingresa tu usuario"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <InputPassword
          label="Contraseña"
          id="form-auth-password"
          control={form.control}
          name="password"
        />
      </FieldGroup>
    </form>
  );
}
