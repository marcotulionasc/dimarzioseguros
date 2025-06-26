'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar } from 'lucide-react'

export function PaperQuestion() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
          Deixa eu te fazer uma pergunta
        </h2>
        <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
          Se hoje você precisar usar seu seguro, você saberia exatamente quais documentos reunir, 
          qual o prazo da seguradora para te responder, e em quantos dias você vai receber o dinheiro?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg">
            <Calendar className="w-5 h-5" />
            Quero Consultoria Gratuita
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg bg-transparent"
          >
            <ArrowRight className="w-5 h-5" />
            Ver Todos os Seguros
          </Button>
        </div>
        
        <p className="text-sm text-white/70 mt-8">
          ✓ Consultoria gratuita e sem compromisso • ✓ Resposta em até 24 horas
        </p>
      </div>
    </section>
  )
}
