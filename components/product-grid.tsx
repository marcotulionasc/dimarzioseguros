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
import { useState } from 'react'

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
  return (
    <motion.section
      id="seguros"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-16 space-y-8 text-center"
    >
      <h2 className="text-3xl font-bold">Qual seguro você quer entender melhor?</h2>
      <ProductFilterTabs filters={filters} active={filter} onChange={setFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((p) => {
          const Icon = icons[p.slug]
          return <ProductCard key={p.slug} slug={p.slug} title={p.title} icon={Icon} />
        })}
      </div>
    </motion.section>
  )
}
