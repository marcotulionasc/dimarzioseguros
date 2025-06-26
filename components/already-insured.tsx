'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export function AlreadyInsured() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Já tem seguro?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Mesmo assim, vale a pena fazer nossa consultoria gratuita. 
            Em 15 minutos, você descobre se está realmente protegido ou pagando por um seguro que não funciona.
          </p>
          <Button className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
            <CheckCircle className="w-5 h-5" />
            Verificar Minha Proteção
          </Button>
        </div>
      </div>
    </section>
  )
}
