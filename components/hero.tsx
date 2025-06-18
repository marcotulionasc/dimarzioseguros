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
    premium: true,
    isHighlight: true
  },
  {
    icon: CheckCircle,
    text: "Comparação em até 17 seguradoras em tempo real",
    premium: false
  }
]

// Valores fixos para os elementos de fundo, evitando Math.random() para resolver hidratação
const backgroundElements = [
  { width: 250, height: 280, left: 10, top: 15, duration: 12 },
  { width: 180, height: 200, left: 75, top: 60, duration: 15 },
  { width: 320, height: 350, left: 20, top: 75, duration: 18 },
  { width: 150, height: 180, left: 85, top: 25, duration: 14 },
  { width: 220, height: 240, left: 50, top: 40, duration: 16 },
  { width: 280, height: 300, left: 30, top: 85, duration: 13 }
]

export function Hero({ title, description, buttonText, buttonLink }: HeroProps) {
  return (
    <section className="hero-section relative flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-secondary overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {backgroundElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              background: i % 2 === 0 ? '#ffffff' : 'rgba(255,255,255,0.1)',
              width: `${element.width}px`,
              height: `${element.height}px`,
              left: `${element.left}%`,
              top: `${element.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Container principal com padding responsivo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          
          {/* Badge de 20 anos com espaçamento correto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-badge inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-white font-montserrat font-medium text-sm sm:text-base"
          >
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
            <span className="whitespace-nowrap">🎉 Comemorando 20 anos de excelência</span>
          </motion.div>

          {/* Título Principal com melhor responsividade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-white font-montserrat max-w-6xl mx-auto px-2 sm:px-4">
              {title}
            </h1>
          </motion.div>

          {/* Descrição com melhor espaçamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto px-2 sm:px-4"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-montserrat leading-relaxed sm:leading-relaxed md:leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* CTA Button com melhor responsividade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-2 sm:pt-4 md:pt-6"
          >
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-montserrat font-semibold px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px] sm:min-w-[250px] md:min-w-[300px]"
            >
              {buttonText}
            </Button>
          </motion.div>

          {/* Highlights Grid com layout fluido */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-6 sm:pt-8 md:pt-10 lg:pt-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className={`flex flex-col items-center text-center space-y-3 sm:space-y-4 rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 ${
                    item.premium 
                      ? item.isHighlight
                        ? 'bg-gradient-to-br from-yellow-400/20 to-yellow-500/30 border-2 border-yellow-400/40 shadow-lg shadow-yellow-400/20 hover:shadow-xl hover:shadow-yellow-400/30 transform hover:scale-105'
                        : 'bg-gradient-to-br from-white/20 to-white/30 border-2 border-white/30 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 transform hover:scale-105'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
                  }`}
                >
                  <div className={`rounded-full p-3 sm:p-4 md:p-5 ${
                    item.premium 
                      ? item.isHighlight 
                        ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-400/30' 
                        : 'bg-gradient-to-br from-white to-white/80 shadow-lg'
                      : 'bg-white/20'
                  }`}>
                    <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${
                      item.premium 
                        ? item.isHighlight 
                          ? 'text-primary' 
                          : 'text-primary'
                        : 'text-white'
                    }`} />
                  </div>
                  <p className={`font-montserrat leading-tight ${
                    item.premium 
                      ? `${item.isHighlight ? 'text-yellow-400' : 'text-white'} font-semibold text-sm sm:text-base md:text-lg` 
                      : 'text-white font-medium text-xs sm:text-sm md:text-base'
                  }`}>
                    {item.text}
                  </p>
                  {item.premium && (
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-75"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradiente sutil na parte inferior para transição suave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  )
}
