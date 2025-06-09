import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguro de Portáteis | Dimarzio Seguros",
  description: "Proteja seus eletrônicos contra roubo, furto qualificado, quebra acidental e dano elétrico. Cobertura para celulares, notebooks, câmeras e mais.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 