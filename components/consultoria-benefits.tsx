'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Search, BarChart3, Target, Gift } from 'lucide-react'

export function ConsultoriaBenefits() {
  const benefits = [
    {
      title: 'Diagnóstico do seu seguro atual',
      icon: Search,
      description: 'Análise completa da sua cobertura atual'
    },
    {
      title: 'Comparativo real com até 17 seguradoras',
      icon: BarChart3,
      description: 'Todas as opções do mercado em suas mãos'
    },
    {
      title: 'Recomendações ajustadas pra sua realidade',
      icon: Target,
      description: 'Orientação personalizada para seu perfil'
    },
    {
      title: 'Sem pagar nada. Sem assinar nada.',
      icon: Gift,
      description: 'Consultoria 100% gratuita, sem compromisso'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-tight mb-3 md:mb-4">
            O que você leva da <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">consultoria gratuita</span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1">
                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Decorative gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8 md:p-12 shadow-lg">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-24 h-24 border border-green-500 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 border border-green-500 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 