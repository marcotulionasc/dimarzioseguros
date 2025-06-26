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
  { name: 'Porto Seguro', logo: '/placeholder-logo.png' },
  { name: 'Bradesco Seguros', logo: '/placeholder-logo.png' },
  { name: 'Itaú Seguros', logo: '/placeholder-logo.png' },
  { name: 'Allianz', logo: '/placeholder-logo.png' },
  { name: 'SulAmérica', logo: '/placeholder-logo.png' },
  { name: 'Mapfre', logo: '/placeholder-logo.png' },
  { name: 'HDI Seguros', logo: '/placeholder-logo.png' },
  { name: 'Liberty Seguros', logo: '/placeholder-logo.png' }
]

export function ClientLogos() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Section with Team Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
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
                src="/images/hero-dimarzio.png"
                alt="Equipe Dimarzio Seguros"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-xs">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Empresa Certificada</p>
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
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              20 anos protegendo 
              <span className="text-primary"> com clareza</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Somos uma empresa familiar que cresceu junto com nossos clientes. 
              Nossa missão é simples: explicar cada detalhe para que você nunca se sinta perdido.
            </p>
            
            {/* Trust Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {trustStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
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
          <h3 className="text-2xl font-light text-gray-900 mb-8">
            Trabalhamos com as melhores seguradoras do mercado
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-square bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300 border border-gray-200 hover:border-gray-300">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500 font-medium text-center leading-tight">
                      {client.name}
                    </span>
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
            className="text-gray-600 mt-8"
          >
            E muitas outras seguradoras parceiras para oferecer as melhores opções para você
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 