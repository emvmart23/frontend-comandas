import { Button } from "@/components/ui/Button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import  InputPassword from "@/components/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { NewPasswordStep } from "../page";

interface ResetStepProps {
  setStep: (value: NewPasswordStep) => void
}

const newPasswordScheme = z.object({
  password: z.string().min(5, "").max(32, ""),
  newPassword: z.string().min(5, ""),
});

export default function ResetStepContent({setStep}:ResetStepProps) {
  const form = useForm<z.infer<typeof newPasswordScheme>>({
    resolver: zodResolver(newPasswordScheme),
    defaultValues: {
      password: "",
      newPassword: "",
    },
  });

  const onSubmit = () => {
    setStep("SUCCESS")
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-center font-bold text-xl mb-2">
          Crear nueva contraseña
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground text-center">
          Por favor, ingresa tu nueva contraseña a continuación.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form-auth-new-password"
          className="grid gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <InputPassword
            label="Nueva contraseña"
            id="form-auth-new-password"
            control={form.control}
            name="password"
          />
          <InputPassword
            label="Confirmar contraseña"
            id="form-auth-new-password"
            control={form.control}
            name="password"
          />
        </form>
      </CardContent>
      <CardFooter className="bg-transparent border-none pb-12">
        <Button className="w-full h-10">Restablecer contraseña</Button>
      </CardFooter>
    </>
  );
}
