"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link
            href="#produtos"
            className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-all-300"
          >
            Produtos
          </Link>
          <Link
            href="#beneficios"
            className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-all-300"
          >
            Benefícios
          </Link>
          <Link
            href="#depoimentos"
            className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-all-300"
          >
            Depoimentos
          </Link>
          <Link
            href="#precos"
            className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-all-300"
          >
            Planos
          </Link>
          <Link
            href="#contato"
            className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-all-300"
          >
            Contato
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
} 