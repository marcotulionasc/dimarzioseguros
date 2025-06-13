'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MessageCircle, Calendar } from 'lucide-react'

export function PaperQuestion() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 mx-auto max-w-screen-xl px-4 md:px-8 text-center space-y-8 rounded-lg"
    >
      <div className="space-y-4">
        <h2 className="text-4xl font-bold font-montserrat text-institutional-black">
          Seu seguro protege ou é só papel?
        </h2>
        <p className="text-xl text-neutral-700 font-montserrat max-w-2xl mx-auto leading-relaxed">
          Entre em contato agora e receba um contato com a agilidade e atenção que você merece!
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
        <Button className="bg-primary hover:bg-primary-dark text-white font-montserrat font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg">
          <Calendar className="w-5 h-5" />
          Agendar minha análise gratuita
        </Button>
        <Button 
          variant="outline" 
          className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-montserrat font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
        </Button>
      </div>
      
      <div className="pt-6">
        <p className="text-sm text-neutral-500 font-montserrat">
          Há 20 anos protegendo pessoas e empresas com clareza.
        </p>
      </div>
    </motion.section>
  )
}
