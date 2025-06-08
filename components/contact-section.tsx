'use client'

import { Mail, MapPin, Phone, Instagram, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface ContactInfo {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Rua Cumaru, 219 - sala 16, Campinas - SP',
    href: 'https://goo.gl/maps/your-address'
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(19) 3294-0655',
    href: 'tel:+551932940655'
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@dimarzioseguros.com.br',
    href: 'mailto:contato@dimarzioseguros.com.br'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@dimarzioseguros',
    href: 'https://www.instagram.com/dimarzioseguros/'
  }
]

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos aqui para ajudar você a encontrar a melhor proteção para o que importa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form className="space-y-6" action="https://formsubmit.co/contato@dimarzioseguros.com.br" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="nome"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="telefone"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="insurance" className="block text-sm font-medium text-neutral-700 mb-1">
                    Tipo de Seguro
                  </label>
                  <select
                    id="insurance"
                    name="tipo"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="">Selecione um tipo</option>
                    <option value="auto">Seguro Auto</option>
                    <option value="vida">Seguro de Vida</option>
                    <option value="residencial">Seguro Residencial</option>
                    <option value="empresarial">Seguro Empresarial</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="mensagem"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full primary-button">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.icon === Instagram ? "_blank" : undefined}
                    rel={item.icon === Instagram ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">{item.label}</p>
                      <p className="text-neutral-600 group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2">
                <p>Segunda a Sexta</p>
                <p className="text-xl font-semibold">09:00 - 18:00</p>
                <p className="text-sm text-white/80 mt-4">
                  Atendimento 24h para emergências através do nosso telefone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
