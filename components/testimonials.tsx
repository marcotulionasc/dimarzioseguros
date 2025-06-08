'use client'

import { motion } from 'framer-motion'
import { TestimonialSlider } from './testimonial-slider'

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
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-16 space-y-8 text-center"
    >
      <h2 className="text-3xl font-bold">O que nossos clientes dizem</h2>
      <TestimonialSlider testimonials={testimonials} />
    </motion.section>
  )
}
