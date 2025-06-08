'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
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
      className="py-16 bg-gray-50 mx-auto max-w-screen-xl px-4 md:px-8"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Por que escolher a Dimarzio?</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <ul className="space-y-4">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="text-blue-600 mt-1" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Image src="/placeholder.jpg" alt="Equipe Dimarzio" width={400} height={300} className="rounded-xl shadow" />
        </div>
      </div>
    </motion.section>
  )
}
