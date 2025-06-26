'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, CheckCircle } from 'lucide-react'

export function FinalCTA() {
  const benefits = [
    'Consultoria 100% gratuita',
    'Sem compromisso ou pressão',
    'Análise completa do seu perfil',
    'Comparação em 17 seguradoras'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/3 rounded-full blur-2xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                <Shield className="w-4 h-4" />
                Proteção garantida
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight">
                Está na hora de proteger o que mais importa
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Não deixe para depois. Agende sua consultoria gratuita agora e descubra como ter a proteção ideal sem pagar a mais.
              </p>
            </div>
            
            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
                onClick={() => {
                  const element = document.querySelector('#contato');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Quero minha análise gratuita
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
              >
                (19) 3294-0655
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Container */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">20+</div>
                      <div className="text-white/80 text-sm">Anos de experiência</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">20K+</div>
                      <div className="text-white/80 text-sm">Clientes protegidos</div>
                    </div>
                  </div>
                  
                  {/* Trust Indicator */}
                  <div className="bg-white/20 rounded-2xl p-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Shield className="w-6 h-6 text-white" />
                      <span className="text-white font-semibold">Dimarzio Seguros</span>
                    </div>
                    <div className="flex justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full" />
                      ))}
                    </div>
                    <p className="text-white/90 text-sm">Avaliação 5 estrelas</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}