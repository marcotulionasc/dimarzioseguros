'use client'

import { CheckCircle, FileSearch, BarChart3, Target, Gift } from 'lucide-react'
import { motion } from 'framer-motion'

const itens = [
  {
    icon: FileSearch,
    title: 'Diagnóstico do seu seguro atual',
    description: 'Análise completa das suas coberturas e possíveis brechas'
  },
  {
    icon: BarChart3,
    title: 'Comparativo real com até 17 seguradoras',
    description: 'Melhores opções do mercado lado a lado'
  },
  {
    icon: Target,
    title: 'Recomendações ajustadas pra sua realidade',
    description: 'Soluções personalizadas para seu perfil e necessidades'
  },
  {
    icon: Gift,
    title: 'Sem pagar nada. Sem assinar nada.',
    description: 'Consultoria 100% gratuita e sem compromisso'
  }
]

export function Consultoria() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-16 space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold font-montserrat text-institutional-black">
          O que você leva da consultoria gratuita
        </h2>
        <p className="text-lg text-neutral-600 font-montserrat max-w-2xl mx-auto">
          Tudo que você precisa saber para tomar a melhor decisão
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {itens.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group flex items-start gap-4 p-6 bg-white rounded-lg shadow-dimarzio hover:shadow-dimarzio-lg transition-all duration-300 border border-neutral-100"
          >
            <div className="bg-primary/10 text-primary rounded-lg p-3 group-hover:scale-110 transition-transform">
              <item.icon className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold font-montserrat text-institutional-black">
                {item.title}
              </h3>
              <p className="text-neutral-600 font-montserrat">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-lg font-montserrat text-primary font-medium bg-primary/10 px-6 py-3 rounded-lg inline-block">
          "Já ajudamos mais de 20.000 pessoas a corrigirem erros no seguro sem gastar R$1 a mais."
        </p>
      </div>
    </motion.section>
  )
}
