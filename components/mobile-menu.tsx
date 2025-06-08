"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  isScrolled: boolean;
}

export function MobileMenu({ isScrolled }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/#seguros", label: "Produtos" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className={isScrolled ? 'text-neutral-700' : 'text-white'}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-white">
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-neutral-900">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-500"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-neutral-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-neutral-200">
            <Button 
              className="w-full flex items-center justify-center gap-2"
              variant="default"
            >
              <Phone className="w-4 h-4" />
              (11) 4321-1234
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
} 