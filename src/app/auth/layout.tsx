import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <main className="flex min-h-screen justify-center items-center">
      {children}
    </main>
  );
}
