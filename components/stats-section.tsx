'use client'

import { motion } from 'framer-motion'
import { Users, Award, Shield, TrendingUp } from 'lucide-react'

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: '20K+',
      label: 'Clientes Atendidos',
      description: 'Pessoas e empresas protegidas'
    },
    {
      icon: Award,
      number: '20+',
      label: 'Anos de Mercado',
      description: 'Experiência e confiabilidade'
    },
    {
      icon: Shield,
      number: '17',
      label: 'Seguradoras Parceiras',
      description: 'Ampla cobertura nacional'
    },
    {
      icon: TrendingUp,
      number: '98%',
      label: 'Satisfação dos Clientes',
      description: 'Excelência no atendimento'
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-tight mb-3 md:mb-4 text-white">
            Números que falam por si
          </h2>
          <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto px-2">
            Há 20 anos protegendo pessoas e empresas com clareza
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-auto md:h-72 flex flex-col justify-center min-h-[180px] md:min-h-0">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl mb-3 md:mb-6 group-hover:bg-white/30 transition-colors duration-300 mx-auto">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                
                {/* Number */}
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-base md:text-xl font-semibold text-white mb-1 md:mb-2 leading-tight">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-sm md:text-base text-white/80 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 