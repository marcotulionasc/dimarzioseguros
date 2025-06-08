'use client'

import Link from 'next/link'
import { products } from '@/lib/products'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export function ProductGrid() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <Link key={p.slug} href={`/produtos/${p.slug}`} className="block">
            <Card className="shadow card-hover h-full">
              <CardContent className="p-6 flex flex-col items-center gap-2">
                <span className="font-semibold text-lg">{p.title}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </motion.section>
  )
}
