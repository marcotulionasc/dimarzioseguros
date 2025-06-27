'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { MobileMenu } from './mobile-menu'
import { Button } from './ui/button'
import { Phone, Award, Sparkles } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname()
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-20 h-20 rounded-lg p-1 group-hover:scale-105 transition-transform duration-200">
                <Image 
                  src="/images/logo-dimarzio.png" 
                  alt="Dimarzio Seguros" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-full px-4 py-2 shadow-sm"
            >
              <div className="relative">
                <Award className="w-4 h-4 text-amber-600" />
                <Sparkles className="w-2 h-2 text-amber-500 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-sm font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent whitespace-nowrap">
                20 ANOS
              </span>
            </motion.div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium">
              {[
                { href: '/', label: 'Home' },
                { href: '/#seguros', label: 'Produtos' },
                { href: '/#contato', label: 'Contato' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-gray-700 hover:text-primary transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-primary/5 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </Link>
              ))}
            </div>
            
            <Button 
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              variant="default"
            >
              <Phone className="w-4 h-4" />
              (19) 3294-0655
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-1 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full px-2 py-1"
            >
              <Award className="w-3 h-3 text-amber-600" />
              <span className="text-xs font-bold text-amber-600">20</span>
            </motion.div>
            <MobileMenu />
          </div>
        </div>
      </div>
      
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-60"></div>
    </header>
  )
}
