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
      className="py-16 bg-gradient-to-br from-blue-100 to-white mx-auto max-w-screen-xl px-4 md:px-8 text-center space-y-4"
    >
      <h2 className="text-3xl font-bold">Seu seguro protege ou é só papel?</h2>
      <p className="text-lg text-gray-700">Não fique na dúvida. Revise suas coberturas agora mesmo.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button className="primary-button px-6 py-3">Agendar análise</Button>
        <Button variant="outline" className="px-6 py-3 border-blue-600 text-blue-600 hover:bg-blue-50">WhatsApp</Button>
      </div>
    </motion.section>
  )
}
