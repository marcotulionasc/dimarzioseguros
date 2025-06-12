'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function AlreadyInsured() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-16 grid md:grid-cols-2 gap-8 items-center bg-blue-50 rounded-sm"
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Você já tem um seguro?</h2>
        <p className="text-lg">Dimarzio Seguros há 20 anos ajudando mais de 10 mil clientes a proteger o que importa.</p>
        <Button className="primary-button rounded-sm">Quero minha análise gratuita</Button>
      </div>
      <div className="flex justify-center">
        <Image src="/images/sobre-02.jpg" alt="Pessoa analisando documentos" width={500} height={400} className="rounded-sm shadow-lg" />
      </div>
    </motion.section>
  )
}
