'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/dimarzioseguros/',
    icon: Instagram
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/dimarzioseguros',
    icon: Facebook
  }
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Produtos', href: '/#seguros' },
  { name: 'Contato', href: '/#contato' },
  { name: 'Sobre Nós', href: '/#sobre' },
  { name: 'Blog', href: '/blog' }
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.8 })
  
  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-white" ref={ref}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-12 gap-12 footer-mobile-center">
          {/* Brand Column - Centralizado no mobile */}
          <div className="md:col-span-4 space-y-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <motion.div 
                className="relative w-16 h-16 rounded-xl p-2"
                whileHover={{ rotate: 6 }} 
                whileTap={{ scale: 0.95 }}
                animate={isInView ? { 
                  rotate: [0, 3, -3, 0],
                  filter: ["brightness(1)", "brightness(1.2)", "brightness(1.2)", "brightness(1)"]
                } : {}}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 8 }}
              >
                <Image 
                  src="/images/logo-dimarzio-white.png" 
                  alt="Dimarzio Seguros" 
                  fill
                  className="object-contain p-1"
                />
              </motion.div>
              <div className="text-left">
                <h3 className="font-bold text-xl">Dimarzio Seguros</h3>
                <p className="text-white text-sm">Não há liberdade sem segurança</p>
              </div>
            </div>
            <p className="text-white text-center md:text-left">
              Somos uma corretora de seguros comprometida em oferecer as melhores soluções
              para proteger o que é mais importante para você.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Centralizado no mobile */}
          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Centralizado no mobile */}
          <div className="md:col-span-5 text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3 text-white/70 justify-center md:justify-start">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <p className="text-white/70">Rua Cumaru, 219 - sala 16<br />Campinas - SP</p>
              </div>
              <div className="flex items-center gap-3 text-white/70 justify-center md:justify-start">
                <Phone className="w-5 h-5" />
                <a href="tel:+551932940655" className="hover:text-white transition-colors">
                  (19) 3294-0655
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70 justify-center md:justify-start">
                <Mail className="w-5 h-5" />
                <a 
                  href="mailto:contato@dimarzioseguros.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@dimarzioseguros.com.br
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Centralizado no mobile */}
      <div className="border-t border-white/10 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center md:text-left">
            <p className="text-white">© 2025 Dimarzio Seguros. Todos os direitos reservados.</p>
            <p className="text-white">CNPJ: 10.894.914/0001-05</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
