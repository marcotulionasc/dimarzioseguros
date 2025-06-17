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
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-16 grid md:grid-cols-2 gap-8 items-center bg-blue-50 rounded-lg"
    >
      <div className="space-y-6">
        <h2 className="text-3xl font-bold font-montserrat text-institutional-black">
          Você já tem um seguro, mas será que ele protege o que importa?
        </h2>
        <p className="text-lg font-montserrat text-neutral-700 leading-relaxed">
          Com mais de 20 anos de experiência e mais de 20.000 clientes atendidos, a Dimarzio Seguros entrega um plano ajustado à sua realidade, sem empurrar nada, sem cobrar pela consultoria.
        </p>
        <Button className="bg-primary hover:bg-primary-dark text-white font-montserrat font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
          Quero minha análise gratuita
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="relative">
          <Image 
            src="/images/sobre-02.jpg" 
            alt="Pessoa analisando documentos" 
            width={500} 
            height={400} 
            className="rounded-lg shadow-dimarzio" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg pointer-events-none" />
        </div>
      </div>
    </motion.section>
  )
}
