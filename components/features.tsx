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
      <div className="flex flex-col md:flex-row gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-white rounded-xl shadow p-4 flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-100 text-blue-700 rounded-full p-2">
              <step.icon className="w-6 h-6" />
            </div>
            <p className="text-left">{step.text}</p>
          </motion.div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {differentials.map((d, i) => (
          <div key={i} className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all flex flex-col items-center text-center gap-2">
            <div className="bg-white rounded-xl p-3 shadow mb-2">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <span>{d}</span>
          </div>
        ))}
      </div>
      <div className="p-4 italic rounded-md border max-w-2xl mx-auto">“Você fala com quem resolve…”</div>
    </motion.section>
  )
}
