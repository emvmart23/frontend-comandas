import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import LoginForm from "./LoginForm";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function LoginCard() {
  return (
    <Card className="w-full max-w-md py-10 px-6">
      <CardHeader>
        <CardTitle className="text-center font-bold text-2xl">
          Bienvenido
        </CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="flex flex-col gap-6 pb-12 border-none bg-transparent">
        <Button type="submit" className="h-10 w-full">
          Iniciar sesión
        </Button>
        <Link
          href="/auth/reset-password"
          className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors"
        >
          ¿ Olvidaste tu contraseña ?
        </Link>
      </CardFooter>
    </Card>
  );
}