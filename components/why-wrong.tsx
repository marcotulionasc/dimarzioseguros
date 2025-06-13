'use client'

import { AlertTriangle, XCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function WhyWrong() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-primary to-primary-dark text-white text-center mx-auto max-w-screen-xl space-y-8 rounded-lg"
    >
      <h2 className="text-4xl font-bold text-white font-playfair">Por que tanta gente contrata errado?</h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-xl text-white/90 font-montserrat leading-relaxed">
          3 em cada 5 sinistros são negados por erro na contratação:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <XCircle className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="font-semibold text-white font-montserrat mb-2">Cobertura errada</h3>
            <p className="text-white/80 text-sm font-montserrat">Seguro que não protege o que realmente importa</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <AlertTriangle className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="font-semibold text-white font-montserrat mb-2">Cláusulas escondidas</h3>
            <p className="text-white/80 text-sm font-montserrat">Letras miúdas que você só descobre depois</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <XCircle className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="font-semibold text-white font-montserrat mb-2">Seguro mal explicado</h3>
            <p className="text-white/80 text-sm font-montserrat">Falta de orientação técnica adequada</p>
          </div>
        </div>
        
        <p className="text-lg text-white/90 font-montserrat mt-6">
          Você só descobre quando já é tarde.
        </p>
        
        <Button className="bg-white text-primary hover:bg-white/90 font-montserrat font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 mt-6">
          Agendar minha análise gratuita
        </Button>
      </div>
    </motion.section>
  )
}
