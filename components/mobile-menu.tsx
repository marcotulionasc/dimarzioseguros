"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Menu, X, Phone, Home, Package, Mail, ArrowRight } from 'lucide-react'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/#seguros', label: 'Produtos', icon: Package },
    { href: '/#contato', label: 'Contato', icon: Mail },
  ]

  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-primary hover:bg-primary/10"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop com blur melhorado */}
          <div 
            className="fixed inset-0 z-[9998] mobile-menu-backdrop"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu com animação */}
          <div className="fixed inset-0 z-[9999] bg-white mobile-menu-slide">
            <div className="flex flex-col h-full">
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-100 bg-gradient-to-r from-[#0E71B8] to-[#2B2E83]">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8">
                    <Image 
                      src="/images/logo-dimarzio-white.png" 
                      alt="Dimarzio Seguros" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white block">
                      Dimarzio Seguros
                    </span>
                    <span className="text-xs text-amber-200 font-medium">
                      20 anos protegendo você
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-6 bg-white">
                <div className="space-y-2">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#0E71B8]/5 hover:to-[#2B2E83]/5 transition-all duration-200 border border-transparent hover:border-[#0E71B8]/10"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#0E71B8]/10 to-[#2B2E83]/10 group-hover:from-[#0E71B8]/20 group-hover:to-[#2B2E83]/20 transition-all duration-200">
                          <Icon className="w-5 h-5 text-[#0E71B8]" />
                        </div>
                        <span className="text-lg font-medium text-neutral-700 group-hover:text-[#0E71B8] transition-colors">
                          {item.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#0E71B8] group-hover:translate-x-1 transition-all duration-200 ml-auto" />
                      </Link>
                    )
                  })}
                </div>

                {/* CTA Button */}
                <div className="mt-8 space-y-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-[#0E71B8] to-[#2B2E83] hover:from-[#2B2E83] hover:to-[#0E71B8] text-white font-medium py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (19) 3294-0655
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-sm text-neutral-500">
                      Atendimento de segunda à sexta
                    </p>
                    <p className="text-sm text-neutral-500">
                      das 8h às 18h
                    </p>
                  </div>
                </div>
              </nav>

            </div>
          </div>
        </>
      )}
    </div>
  )
} 