import { Button } from "@/components/ui/Button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function SentStepContent() {
  return (
    <>
      <CardHeader>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-6">
          <Mail className="h-6 w-6" />
        </div>
        <CardTitle className="text-center text-xl font-bold">
          Revisa tu correo
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground text-center">
          Hemos enviado un enlace de recuperación a tu correo electrónico.
          Revisa tu bandeja de entrada.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 mt-4">
        <Button
          type="submit"
          form="form-auth-reset"
          className="w-full mx-auto h-10"
        >
          ¿No recibiste el correo? Reenviar
        </Button>
        <Link
          href="/auth/sign-in"
          className="block text-center font-medium text-primary hover:underline mt-2"
        >
          Volver al inicio de sesión
        </Link>
      </CardContent>
    </>
  );
}
