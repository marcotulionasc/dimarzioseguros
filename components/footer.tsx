import Image from 'next/image'
import Link from 'next/link'
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
  { name: 'Contato', href: '/contato' },
  { name: 'Sobre Nós', href: '/#sobre' },
  { name: 'Blog', href: '/blog' }
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-xl p-2">
                <Image 
                  src="/logo.svg" 
                  alt="Dimarzio Seguros" 
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Dimarzio Seguros</h3>
                <p className="text-white/80 text-sm">20 anos protegendo com clareza</p>
              </div>
            </div>
            <p className="text-white/70">
              Somos uma corretora de seguros comprometida em oferecer as melhores soluções
              para proteger o que é mais importante para você.
            </p>
            <div className="flex gap-4">
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

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-5">
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <p>Rua Cumaru, 219 - sala 16<br />Campinas - SP</p>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5" />
                <a href="tel:+551932940655" className="hover:text-white transition-colors">
                  (19) 3294-0655
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70">
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

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2024 Dimarzio Seguros. Todos os direitos reservados.</p>
            <p>CNPJ: 10.894.914/0001-05</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
