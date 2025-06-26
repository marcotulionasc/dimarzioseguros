'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Car, Home, Heart, Briefcase, Shield, Plane, Smartphone, Users, Building, Tractor, UserCheck, MapPin } from 'lucide-react'

const products = [
  {
    title: 'Seguro Auto',
    description: 'Proteção completa para seu veículo',
    href: '/seguro-automovel',
    icon: Car,
    image: '/images/seguro-01.png',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Seguro Residencial',
    description: 'Sua casa sempre protegida',
    href: '/seguro-residencial',
    icon: Home,
    image: '/images/seguro-02.png',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Seguro de Vida',
    description: 'Proteção para quem você ama',
    href: '/seguro-vida',
    icon: Heart,
    color: 'from-red-500 to-red-600'
  },
  {
    title: 'Seguro Empresarial',
    description: 'Proteja seu negócio',
    href: '/seguro-empresarial',
    icon: Briefcase,
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Seguro Saúde',
    description: 'Cuidado com sua saúde',
    href: '/seguro-saude',
    icon: Shield,
    color: 'from-teal-500 to-teal-600'
  },
  {
    title: 'Seguro Viagem',
    description: 'Viaje com tranquilidade',
    href: '/seguro-viagem',
    icon: Plane,
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Seguro Portáteis',
    description: 'Dispositivos sempre seguros',
    href: '/seguro-portateis',
    icon: Smartphone,
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'Seguro RC Profissional',
    description: 'Responsabilidade civil',
    href: '/seguro-rc-profissional',
    icon: Users,
    color: 'from-pink-500 to-pink-600'
  },
  {
    title: 'Seguro Fiança Locatícia',
    description: 'Aluguel garantido',
    href: '/seguro-fianca-locaticia',
    icon: Building,
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    title: 'Seguro Rural',
    description: 'Proteção para o campo',
    href: '/seguro-rural',
    icon: Tractor,
    color: 'from-lime-500 to-lime-600'
  },
  {
    title: 'Seguro Fiduciário',
    description: 'Financiamento protegido',
    href: '/seguro-fiduciario',
    icon: UserCheck,
    color: 'from-amber-500 to-amber-600'
  },
  {
    title: 'Consorcios',
    description: 'Realize seus sonhos',
    href: '/consorcios',
    icon: MapPin,
    color: 'from-rose-500 to-rose-600'
  }
]

export function ProductGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Soluções completas de proteção para todas as suas necessidades
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link
                href={product.href}
                className="group block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 overflow-hidden"
              >
                <div className="p-4 lg:p-6">
                  {/* Image for featured products */}
                  {product.image && (
                    <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gray-50">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                  )}
                  
                  {/* Icon for products without images */}
                  {!product.image && (
                    <div className={`relative aspect-square mb-4 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <product.icon className="w-8 h-8 lg:w-12 lg:h-12 text-white" />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 text-sm lg:text-base group-hover:text-primary transition-colors duration-300 leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-2xl px-8 py-6 inline-block">
            <p className="text-lg text-primary font-medium mb-4">
              Não encontrou o que procura?
            </p>
            <p className="text-gray-600 mb-4">
              Fale conosco e encontraremos a solução ideal para você
            </p>
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Falar com Especialista
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
