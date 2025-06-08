'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MobileMenu } from './mobile-menu'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { Phone } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg'
            : 'bg-black/20 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 bg-white rounded-sm p-1">
                <Image 
                  src="/logo.svg" 
                  alt="Dimarzio Seguros" 
                  fill
                  className="object-contain group-hover:scale-105 transition-transform"
                  priority
                />
              </div>
              <span className={`font-bold text-xl ${
                isScrolled ? 'text-primary' : 'text-white'
              } group-hover:text-primary transition-colors`}>
                Dimarzio Seguros
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm font-medium">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/#seguros', label: 'Produtos' },
                  { href: '/contato', label: 'Contato' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-2 ${
                      isScrolled ? 'text-neutral-700' : 'text-white'
                    } hover:text-primary transition-colors`}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform origin-left hover:scale-x-100" />
                  </Link>
                ))}
              </div>
              
              <Button 
                className="hidden lg:flex items-center gap-2 primary-button rounded-sm"
                size="sm"
              >
                <Phone className="w-4 h-4" />
                (11) 4321-1234
              </Button>
            </nav>

            <div className="md:hidden">
              <MobileMenu isScrolled={isScrolled} />
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}
