import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguro Empresarial | Dimarzio Seguros",
  description: "Proteção completa para seu negócio contra incêndio, roubo, danos elétricos e muito mais. Análise técnica especializada com 20 anos de experiência.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 