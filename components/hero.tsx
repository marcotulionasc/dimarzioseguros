'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionDivider } from './section-divider'

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full py-24 bg-gradient-to-br from-blue-700 to-blue-100 text-white"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center relative">
        <span className="absolute -top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">20 anos</span>
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Dimarzio Seguros — 20 anos protegendo com clareza</h1>
          <p className="text-lg text-blue-100">Seguros pensados para você e sua família.</p>
          <Button className="primary-button text-base md:text-lg px-8 py-4 rounded-full">Quero minha análise gratuita</Button>
          <div className="flex justify-center md:justify-start gap-6 text-sm mt-4">
            <span className="flex items-center gap-2"><BadgeCheck className="text-secondary" />Atendimento 24h</span>
            <span className="flex items-center gap-2"><BadgeCheck className="text-secondary" />+10k clientes</span>
          </div>
        </div>
        <div className="hidden md:block">
          <Image src="/placeholder.jpg" alt="Família protegida" width={500} height={400} className="rounded-xl shadow" />
        </div>
      </div>
      <SectionDivider className="text-white" />
    </motion.section>
  )
}
