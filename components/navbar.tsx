'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MobileMenu } from './mobile-menu'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Dimarzio Seguros" width={32} height={32} />
          <span className="font-bold text-xl text-primary">Dimarzio Seguros</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link href="/#seguros" className="hover:text-secondary transition-colors">Produtos</Link>
          <Link href="/contato" className="hover:text-secondary transition-colors">Contato</Link>
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
