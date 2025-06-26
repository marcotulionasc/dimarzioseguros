'use client'

import { products, type Product } from '@/lib/products'
import { ProductFilterTabs } from './product-filter-tabs'
import { ProductCard } from './product-card'
import {
  Car,
  Home,
  Plane,
  Briefcase,
  Handshake,
  HeartPulse,
  PiggyBank,
  ShieldCheck,
  Laptop,
  HandCoins,
  Tractor,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const icons: Record<string, any> = {
  consorcio: PiggyBank,
  saude: HeartPulse,
  vida: Handshake,
  empresarial: Briefcase,
  automovel: Car,
  residencial: Home,
  viagem: Plane,
  'rc-profissional': ShieldCheck,
  rural: Tractor,
  'fianca-locaticia': HandCoins,
  portateis: Laptop,
  fiduciario: Briefcase,
}

export function ProductGrid() {
  const [filter, setFilter] = useState('Todos')
  const filters = ['Todos', 'Empresariais', 'Pessoais']
  const filtered = products.filter((p) => filter === 'Todos' || p.category === filter)
  const [parent] = useAutoAnimate()
  
  // Map specific slugs to their correct paths
  const getProductPath = (slug: string) => {
    if (slug === 'consorcio') {
      return '/consorcios'
    }
    const pathMap: Record<string, string> = {
      'automovel': '/seguro-automovel',
      'fianca-locaticia': '/seguro-fianca-locaticia',
      'garantia-fiduciaria': '/seguro-garantia-fiduciaria',
      'portateis': '/seguro-portateis',
      'rc-profissional': '/seguro-rc-profissional',
      'residencial': '/seguro-residencial',
      'rural': '/seguro-rural',
      'saude': '/seguro-saude',
      'viagem': '/seguro-viagem',
      'vida': '/seguro-vida',
      'fiduciario': '/seguro-fiduciario',
      'empresarial': '/seguro-empresarial'
    }
    return pathMap[slug] || `/produtos/${slug}`
  }
  
  return (
    <section id="seguros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Qual seguro você quer entender melhor?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Clique no ícone para saber mais sobre cada tipo de seguro
          </p>
          <ProductFilterTabs filters={filters} active={filter} onChange={setFilter} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          ref={parent}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8"
        >
          {filtered.map((p, index) => {
            const Icon = icons[p.slug]
            return (
              <motion.a
                key={p.slug}
                href={getProductPath(p.slug)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="text-center text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {p.title}
                </h3>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
