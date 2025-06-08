'use client'

import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const itens = [
  'Diagnóstico completo da sua situação',
  'Comparativo de coberturas e preços',
  'Recomendações personalizadas'
]

export function Consultoria() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-16 space-y-8"
    >
      <h2 className="text-3xl font-bold text-center">O que você leva da consultoria gratuita</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {itens.map((item, i) => (
          <li key={i} className="flex items-center gap-3 p-4 border-l-4 border-blue-600 bg-white rounded-md shadow">
            <CheckCircle className="text-blue-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="text-center italic">Já ajudamos mais de 10.000 pessoas a contratarem melhor.</div>
    </motion.section>
  )
}
