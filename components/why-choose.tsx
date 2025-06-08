'use client'

import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  'Atendimento humanizado e rápido',
  'Parceria com as principais seguradoras',
  'Equipe especializada em sinistros'
]

export function WhyChoose() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gray-50 mx-auto max-w-screen-xl px-4 md:px-8 space-y-8"
    >
      <h2 className="text-3xl font-bold text-center">Por que escolher a Dimarzio?</h2>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="text-secondary mt-1" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  )
}
