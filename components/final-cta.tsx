'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle, Calendar, Shield } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/3 rounded-full blur-2xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 md:space-y-8">
          
         
          
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 text-left text-white"
          >
            Seu seguro protege ou é só papel?
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto text-left"
          >
            Entre em contato agora e receba um atendimento com a agilidade e atenção que você merece!
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-8 justify-center max-w-2xl mx-auto"
          >
            <Button 
              size="lg"
              className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 text-lg rounded-lg transition-colors duration-200 inline-flex items-center gap-3"
              onClick={() => {
                const element = document.querySelector('#contato');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Calendar className="w-5 h-5" />
              Agendar minha análise gratuita
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <Button 
              
              size="lg"
              className="bg-white border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg rounded-lg transition-colors duration-200 inline-flex items-center gap-3"
              onClick={() => {
                window.open('https://wa.me/5519932940655?text=Olá! Gostaria de agendar uma análise gratuita do meu seguro.', '_blank');
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 pt-6 md:pt-8"
          >
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm md:text-base font-medium">Resposta em minutos</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm md:text-base font-medium">20+ anos de experiência</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2 text-white/80">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full" />
                ))}
              </div>
              <span className="text-sm md:text-base font-medium">Avaliação 5 estrelas</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}