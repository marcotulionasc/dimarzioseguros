'use client'

import { Button } from '@/components/ui/button'
import { AlertTriangle, FileX, Eye, HelpCircle } from 'lucide-react'

export function WhyWrong() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
            Por que tanta gente contrata errado?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            90% das pessoas descobrem que contrataram o seguro errado na hora do sinistro
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <FileX className="w-12 h-12 text-white mb-4" />
            <h3 className="font-semibold text-white mb-2">Cobertura errada</h3>
            <p className="text-white/80 text-sm">Seguro que não protege o que realmente importa</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <Eye className="w-12 h-12 text-white mb-4" />
            <h3 className="font-semibold text-white mb-2">Cláusulas escondidas</h3>
            <p className="text-white/80 text-sm">Letras miúdas que você só descobre depois</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <HelpCircle className="w-12 h-12 text-white mb-4" />
            <h3 className="font-semibold text-white mb-2">Seguro mal explicado</h3>
            <p className="text-white/80 text-sm">Falta de orientação técnica adequada</p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-white/90 mb-8">
            <strong>Resultado:</strong> Na hora H, você descobre que não tem a proteção que pensava ter.
          </p>
          
          <Button className="bg-white text-red-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
            Não Quero Correr Esse Risco
          </Button>
        </div>
      </div>
    </section>
  )
}
