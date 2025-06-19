'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { MobileMenu } from './mobile-menu'
import { Button } from './ui/button'
import { Phone } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname()
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-20 h-20 rounded-lg p-1">
              <Image 
                src="/images/logo-dimarzio.png" 
                alt="Dimarzio Seguros" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium font-montserrat">
              {[
                { href: '/', label: 'Home' },
                { href: '/#seguros', label: 'Produtos' },
                { href: '/#contato', label: 'Contato' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-institutional-black hover:text-primary transition-colors"
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
            
            <Button 
              className="hidden lg:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-montserrat font-medium"
              variant="default"
            >
              <Phone className="w-4 h-4" />
              (19) 3294-0655
            </Button>
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
