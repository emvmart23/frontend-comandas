"use client";
import { Button } from "@/components/ui/Button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { ResetPasswordStep } from "../page";
import { useState } from "react";
import { Spinner } from "@/components/ui/Spinner";

interface RequestStepProps {
  setStep: (value: ResetPasswordStep) => void;
}

const resetPasswordScheme = z.object({
  email: z.email().min(5, "").max(32, ""),
});

export default function RequestStepContent({ setStep }: RequestStepProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof resetPasswordScheme>>({
    resolver: zodResolver(resetPasswordScheme),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = () => {
    setIsLoading(true);
    setStep("SENT");
  };

  return (
    <>
      <CardHeader className="mb-4">
        <CardTitle className="text-center font-bold text-xl mb-2">
          ¿ Olvidaste tu contraseña ?
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground text-center">
          Ingresa tu correo electrónico y te enviaremos un enlace para
          restablecer tu contraseña.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-auth-reset" onSubmit={onSubmit}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-auth-reset">
                    Correo electronico
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-auth-reset"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ingresa tu correo"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-8 pb-12 border-none bg-transparent">
        <Button
          type="submit"
          form="form-auth-reset"
          className="w-full mx-auto h-10"
        >
          {isLoading ? <Spinner /> : "Enviar enlace"}
        </Button>
        <Link
          href="/auth/sign-in"
          className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors"
        >
          volver al inicio de sesión
        </Link>
      </CardFooter>
    </>
  );
}
