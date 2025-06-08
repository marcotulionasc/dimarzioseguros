"use client";

import { useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu, X, Phone } from 'lucide-react'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-primary"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex h-20 items-center justify-between">
              <span className="text-xl font-bold text-primary">
                Menu
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="space-y-8 py-8">
              <div className="flex flex-col gap-6 text-lg">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/#seguros', label: 'Produtos' },
                  { href: '/contato', label: 'Contato' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-neutral-700 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Button className="w-full flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                (11) 4321-1234
              </Button>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
} 