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
          className="mb-8 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 text-left text-white">
            Números que falam por si
          </h2>
          <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl px-2 text-left">
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
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 min-h-[120px] md:min-h-[140px]">
                <div className="flex items-start gap-4">
                  {/* Icon Column */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                      <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Text Column */}
                  <div className="flex-1 text-left">
                    {/* Number */}
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-sm md:text-base font-semibold text-white mb-1 leading-tight">
                      {stat.label}
                    </div>
                    
                    {/* Description */}
                    <div className="text-xs md:text-sm text-white/80 leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 