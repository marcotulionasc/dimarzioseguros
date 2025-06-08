'use client'

import { Mail, MapPin, Phone, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export function ContactSection() {
  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-16 space-y-4 text-center"
    >
      <h2 className="text-3xl font-bold">Contato</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        <div className="flex flex-col items-center gap-2">
          <MapPin className="text-secondary" />
          <span className="text-sm">Rua Cumaru, 219 - sala 16, Campinas - SP</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Phone className="text-secondary" />
          <span className="text-sm">(19) 3294-0655</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Mail className="text-secondary" />
          <span className="text-sm">contato@dimarzioseguros.com.br</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Instagram className="text-secondary" />
          <a href="https://www.instagram.com/dimarzioseguros/" target="_blank" rel="noopener noreferrer" className="underline text-sm">Instagram</a>
        </div>
      </div>
    </motion.section>
  )
}
