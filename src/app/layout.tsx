import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plataforma de gestion de operaciones",
  description:
    "Optimiza las operaciones de tu negocio nocturno en Perú con nuestro sistema de gestión integral",
  keywords: [
    "sistema de gestion de operaciones",
    "control de asistencia laboral",
    "gestion de personal",
    "software de operaciones",
    "registro de asistencia",
    "dashboard de operaciones",
    "control de horarios y turnos",
    "gestion de equipos de trabajo",
    "reportes de asistencia",
    "software SaaS Peru",
  ],
  authors: [
    {
      name: "Max Martinez",
      url: "https://portfolio-mu-weld-20.vercel.app/",
    },
    {
      name: "Hilari Martinez",
      url: "https://portfolio-iota-gilt-44.vercel.app/",
    },
  ],
  publisher: "Max Martinez",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full antialiased",
        inter.variable,
        spaceGrotesk.variable
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
