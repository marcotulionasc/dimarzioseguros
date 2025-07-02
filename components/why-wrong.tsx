'use client'

import { Button } from '@/components/ui/button'
import { AlertTriangle, FileX, Eye, HelpCircle } from 'lucide-react'

export function WhyWrong() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 text-left md:text-center text-white">
            Por que tanta gente contrata errado?
          </h2>
          <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl md:mx-auto px-2 text-left md:text-center">
            3 em cada 5 sinistros são negados por erro na contratação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <FileX className="w-8 h-8 md:w-12 md:h-12 text-white mb-2 md:mb-4" />
            <h3 className="font-semibold text-white mb-1 md:mb-2 text-base md:text-lg">Cobertura errada</h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">Seguro que não protege o que realmente importa</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Eye className="w-8 h-8 md:w-12 md:h-12 text-white mb-2 md:mb-4" />
            <h3 className="font-semibold text-white mb-1 md:mb-2 text-base md:text-lg">Cláusulas escondidas</h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">Letras miúdas que você só descobre depois</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <HelpCircle className="w-8 h-8 md:w-12 md:h-12 text-white mb-2 md:mb-4" />
            <h3 className="font-semibold text-white mb-1 md:mb-2 text-base md:text-lg">Seguro mal explicado</h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">Falta de orientação técnica adequada</p>
          </div>
        </div>
        
        <div className="text-center px-4">
          <p className="text-base md:text-lg text-white/90 mb-4 md:mb-8 leading-relaxed">
            <strong>Você só descobre quando já é tarde.</strong>
          </p>
          
          <Button 
            className="bg-white text-primary hover:bg-gray-100 font-medium px-6 py-2.5 md:px-8 md:py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm md:text-base w-full sm:w-auto"
            onClick={() => {
              const element = document.querySelector('#contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Agendar minha análise gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}
