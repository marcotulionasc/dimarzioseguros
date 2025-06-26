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
    title: 'Cotação em múltiplas seguradoras',
    description: 'Comparamos preços e coberturas para você escolher o melhor'
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            O que você leva da consultoria gratuita
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Tudo que você precisa saber para tomar a melhor decisão
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {itens.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex items-start gap-6 p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="bg-blue-50 text-primary rounded-xl p-4 group-hover:scale-105 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-2xl px-8 py-6 inline-block">
            <p className="text-lg text-primary font-medium">
              "Já ajudamos mais de 20.000 pessoas a corrigirem erros no seguro sem gastar R$1 a mais."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
