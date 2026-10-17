import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SuccessStepContent() {
  return (
    <>
      <CardHeader>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EBF6F0] text-primary mx-auto mb-6">
          <Check className="h-6 w-6" color="green" />
        </div>
        <CardTitle className="text-center">¡Contraseña actualizada!</CardTitle>
        <CardDescription className="text-center">
          Tu contraseña ha sido restablecida exitosamente.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href="/auth/sign-in"
          className="block text-center text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors"
        >
          Volver al inicio de sesión
        </Link>
      </CardContent>
    </>
  );
}
