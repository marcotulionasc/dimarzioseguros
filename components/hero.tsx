'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CheckCircle, Shield, Users, Award } from 'lucide-react'

interface HeroProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const highlights = [
  {
    icon: Users,
    text: "Mais de 20.000 clientes atendidos",
    premium: false
  },
  {
    icon: Award,
    text: "Há 20 anos protegendo pessoas e empresas com clareza",
    premium: true
  },
  {
    icon: CheckCircle,
    text: "Comparação em até 17 seguradoras em tempo real",
    premium: false
  }
]

export function Hero({ title, description, buttonText, buttonLink }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-secondary overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              background: i % 2 === 0 ? '#ffffff' : 'rgba(255,255,255,0.1)',
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge de 20 anos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white font-montserrat font-medium mb-4"
          >
            <Award className="w-5 h-5 text-yellow-300" />
            <span>🎉 Comemorando 20 anos de excelência</span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white font-montserrat max-w-5xl mx-auto"
          >
            {title}
          </motion.h1>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 font-montserrat leading-relaxed max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-2"
          >
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-montserrat font-semibold px-10 py-3 rounded-lg text-base transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {buttonText}
            </Button>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 mb-4 max-w-4xl mx-auto"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className={`flex flex-col items-center text-center space-y-3 rounded-xl p-6 transition-all duration-300 ${
                  item.premium 
                    ? 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-400/30 shadow-lg shadow-yellow-400/10 hover:shadow-xl hover:shadow-yellow-400/20 transform hover:scale-105' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
                }`}
              >
                <div className={`rounded-full p-4 ${
                  item.premium 
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg' 
                    : 'bg-white/20'
                }`}>
                  <item.icon className={`w-8 h-8 ${
                    item.premium ? 'text-white' : 'text-white'
                  }`} />
                </div>
                <p className={`font-montserrat leading-tight ${
                  item.premium 
                    ? 'text-white font-semibold text-base' 
                    : 'text-white font-medium text-sm'
                }`}>
                  {item.text}
                </p>
                {item.premium && (
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
