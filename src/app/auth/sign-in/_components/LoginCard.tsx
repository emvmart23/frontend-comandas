import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import LoginForm from "./LoginForm";
import { Button } from "@/components/ui/Button";

export default function LoginCard() {
  return (
    <Card className="w-full max-w-sm py-8">
      <CardHeader>
        <CardTitle className="text-center font-bold text-xl">
          Bienvenido
        </CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="border-none py-8 bg-inherit">
        <Button className="mx-auto py-4 px-6">Iniciar sesión</Button>
      </CardFooter>
    </Card>
  );
}
