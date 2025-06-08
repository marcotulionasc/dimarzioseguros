'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function PaperQuestion() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gray-100 mx-auto max-w-screen-xl px-4 md:px-8 text-center space-y-4"
    >
      <h2 className="text-3xl font-bold">Seu seguro protege ou é só papel?</h2>
      <p className="text-lg">Não fique na dúvida. Revise suas coberturas agora mesmo.</p>
      <Button className="primary-button">Falar no WhatsApp</Button>
    </motion.section>
  )
}
