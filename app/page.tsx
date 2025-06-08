'use client'

import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { ProductGrid } from '@/components/product-grid'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'

export default function Home() {
  return (
    <main className="space-y-16">
      <Hero />
      <Features />
      <ProductGrid />
      <Testimonials />
      <Faq />
    </main>
  )
}
