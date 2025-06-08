'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    text: 'Antes da Dimarzio, eu achava que estava protegido. Eles revisaram meu seguro e corrigiram várias brechas que poderiam me deixar na mão.',
    author: 'Luciana M., empresária'
  },
  {
    text: 'Recebi um atendimento técnico, claro e sem empurroterapia. E paguei menos do que antes.',
    author: 'Carlos T., engenheiro'
  }
]

export function Testimonials() {
  return (
    <motion.section
      id="depoimentos"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container py-16 space-y-8 text-center"
    >
      <h2 className="text-3xl font-bold">O que nossos clientes dizem</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <Card key={i} className="bg-gray-50 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <p className="text-lg italic">“{t.text}”</p>
              <p className="text-sm font-medium">{t.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  )
}
