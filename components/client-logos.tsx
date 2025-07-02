'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Users, Award, CheckCircle } from 'lucide-react'

const trustStats = [
  {
    icon: Users,
    number: '20.000+',
    label: 'Clientes Atendidos',
    description: 'Pessoas protegidas'
  },
  {
    icon: Award,
    number: '20',
    label: 'Anos de Mercado',
    description: 'Experiência comprovada'
  },
  {
    icon: Shield,
    number: '17',
    label: 'Seguradoras',
    description: 'Parceiras de confiança'
  },
  {
    icon: CheckCircle,
    number: '98%',
    label: 'Satisfação',
    description: 'Clientes satisfeitos'
  }
]

const clientLogos = [
  { 
    name: 'Porto Seguro', 
    logo: 'https://www.portoseguro.com.br/content/dam/porto-seguro/institucional/logo-porto-seguro.png',
    fallback: 'https://logospng.org/download/porto-seguro/logo-porto-seguro-256.png'
  },
  { 
    name: 'Bradesco Seguros', 
    logo: 'https://images.seeklogo.com/logo-png/30/1/bradesco-seguros-logo-png_seeklogo-300101.png',
    fallback: 'https://logoeps.com/wp-content/uploads/2013/03/bradesco-vector-logo.png'
  },
  { 
    name: 'Itaú Seguros', 
    logo: 'https://images.seeklogo.com/logo-png/30/1/itau-seguros-logo-png_seeklogo-300099.png',
    fallback: 'https://logos-world.net/wp-content/uploads/2021/02/Itau-Logo.png'
  },
  { 
    name: 'Allianz', 
    logo: 'https://images.seeklogo.com/logo-png/0/1/allianz-logo-png_seeklogo-6867.png',
    fallback: 'https://logoeps.com/wp-content/uploads/2012/11/allianz-vector-logo.png'
  },
  { 
    name: 'Mapfre', 
    logo: 'https://www.mapfre.com.br/media/logo-mapfre.png',
    fallback: 'https://logoeps.com/wp-content/uploads/2013/03/mapfre-vector-logo.png'
  },
  { 
    name: 'HDI Seguros', 
    logo: 'https://images.seeklogo.com/logo-png/30/1/hdi-seguros-logo-png_seeklogo-300098.png',
    fallback: 'https://logoeps.com/wp-content/uploads/2013/03/hdi-vector-logo.png'
  }
]

export function ClientLogos() {
  return (
    <section className="py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Section with Team Image */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/new-image-02.jpg"
                alt="Equipe Dimarzio Seguros"
                fill
                className=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100 max-w-[200px] md:max-w-xs">
              <div className="text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                </div>
                <p className="text-xs md:text-sm font-semibold text-gray-900">Empresa Certificada</p>
                <p className="text-xs text-gray-600">CNPJ: 10.894.914/0001-05</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 text-left">
              Você já tem um seguro, 
              <span className="text-primary"> mas será que ele protege o que importa?</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 text-left">
            Com mais de 20 anos de experiência e mais de 20.000 clientes atendidos, a Dimarzio Seguros entrega um plano ajustado à sua realidade — sem empurrar nada, sem cobrar pela consultoria.
            </p>
            
            {/* Trust Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {trustStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center p-3 md:p-4 bg-blue-50 rounded-xl border border-blue-100"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6 md:mb-8">
            Trabalhamos com as melhores seguradoras do mercado
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 items-center max-w-5xl mx-auto">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-square bg-white rounded-xl p-3 md:p-4 hover:bg-gray-50 transition-colors duration-300 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      width={80}
                      height={80}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        // Fallback para URLs alternativas
                        const target = e.target as HTMLImageElement;
                        if (client.fallback && target.src !== client.fallback) {
                          target.src = client.fallback;
                        } else {
                          // Se também der erro, mostrar texto
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-xs text-gray-500 font-medium text-center leading-tight">${client.name}</span>`;
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-600 mt-6 md:mt-8 text-sm md:text-base"
          >
            E muitas outras seguradoras parceiras para oferecer as melhores opções para você
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 