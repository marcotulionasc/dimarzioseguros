'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Star } from 'lucide-react'

const steps = [
  { icon: ShieldCheck, text: 'Agende sua análise gratuita' },
  { icon: ShieldCheck, text: 'Entenda sua real necessidade' },
  { icon: ShieldCheck, text: 'Comparação nas principais seguradoras' },
  { icon: ShieldCheck, text: 'Você decide se quer contratar' }
]

const differentials = [
  'Atendimento completo em casos de sinistro',
  'Departamento próprio para parcelas em atraso',
  'Multicálculo automático com as principais seguradoras',
  'Consultoria focada em cobertura ideal e custo justo',
  'Atendimento 24 horas'
]

export function HowItWorks() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-16 text-center space-y-8"
    >
      <h2 className="text-3xl font-bold">Como funciona na prática</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="p-4 bg-white rounded-2xl shadow card-hover flex flex-col items-center text-center space-y-2">
            <step.icon className="w-8 h-8 text-secondary" />
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export function Differentials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-16 text-center space-y-8 bg-gray-50 rounded-2xl"
    >
      <h2 className="text-3xl font-bold">O que faz a Dimarzio diferente</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
        {differentials.map((d, i) => (
          <li key={i} className="flex items-start gap-2">
            <Star className="w-5 h-5 text-secondary mt-1" />
            <span>{d}</span>
          </li>
        ))}
      </ul>
      <div className="border p-4 italic rounded-md max-w-2xl mx-auto">“Você fala com quem resolve…”</div>
    </motion.section>
  )
}
