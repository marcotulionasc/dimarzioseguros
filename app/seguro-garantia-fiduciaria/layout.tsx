import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguro Garantia Fiduciária | Dimarzio Seguros",
  description: "Substitua depósitos judiciais e cauções em processos trabalhistas, tributários, cíveis ou contratuais. Proteja seu caixa e evite bloqueio de bens.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 