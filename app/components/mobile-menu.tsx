import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-700 hover:text-blue-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <>
          {/* Backdrop com blur */}
          <div 
            className="fixed inset-0 z-[49] bg-black/50 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="fixed inset-0 z-50 bg-white">
            <div className="container h-full px-4">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="relative h-8 w-8 overflow-hidden">
                    <Image 
                      src="/logo.svg" 
                      alt="Dimarzio Seguros Logo" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-lg gradient-text">Dimarzio Seguros</span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 hover:text-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="mt-8">
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#produtos"
                      className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      Produtos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#beneficios"
                      className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      Benefícios
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#depoimentos"
                      className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      Depoimentos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#precos"
                      className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      Planos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contato"
                      className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="primary-button w-full h-12" onClick={() => setIsOpen(false)}>
                    Solicitar Cotação
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  )
} 