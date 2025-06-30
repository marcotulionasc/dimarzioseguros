'use client'

import { CheckCircle, FileSearch, BarChart3, Target, Gift } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Items */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {itens.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="bg-blue-50 text-primary rounded-xl p-3 group-hover:scale-105 transition-transform flex-shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="sticky top-8">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/new-image-01.jpg"
                  alt="Profissional analisando seguros"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-gray-600">Gratuito</div>
                </div>
              </div>
            </div>
          </motion.div>
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
