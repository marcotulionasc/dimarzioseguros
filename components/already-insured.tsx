'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export function AlreadyInsured() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Já tem seguro?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Mesmo assim, vale a pena fazer nossa consultoria gratuita. 
              Em 15 minutos, você descobre se está realmente protegido ou pagando por um seguro que não funciona.
            </p>
            <Button 
              className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
              onClick={() => {
                const element = document.querySelector('#contato');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <CheckCircle className="w-5 h-5" />
              Verificar Minha Proteção
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/sobre-02.jpg"
                alt="Consultoria personalizada Dimarzio Seguros"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Consultoria Ativa</span>
              </div>
              <p className="text-xs text-gray-600">Mais de 20.000 análises realizadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
