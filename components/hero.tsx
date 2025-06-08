'use client'

import { Button } from '@/components/ui/button'
import { BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full text-center py-24 px-4 bg-gradient-to-br from-primary to-secondary text-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Dimarzio Seguros</h1>
      <p className="text-lg md:text-2xl mb-8">20 anos protegendo com clareza</p>
      <Button className="primary-button text-base md:text-lg px-8 py-4 rounded-full">Quero minha análise gratuita</Button>
      <div className="flex justify-center gap-6 mt-8 text-sm">
        <span className="flex items-center gap-2"><BadgeCheck className="text-secondary" />Atendimento 24h</span>
        <span className="flex items-center gap-2"><BadgeCheck className="text-secondary" />+10k clientes</span>
      </div>
    </motion.section>
  )
}
