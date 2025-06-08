'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BadgeCheck, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function Hero() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-primary/95 to-primary-dark text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-white rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-white rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial="initial"
        animate="animate"
        variants={stagger}
        className="container mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium"
            >
              <span className="mr-2">🎉</span>
              <span>20 anos de excelência</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Dimarzio Seguros — 20 anos protegendo com clareza
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/80"
            >
              Seguros pensados para você e sua família.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button className="primary-button group">
                Quero minha análise gratuita
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm mt-8"
            >
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <BadgeCheck className="text-success h-5 w-5" />
                Atendimento 24h
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <BadgeCheck className="text-success h-5 w-5" />
                +10k clientes
              </span>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            variants={fadeInUp}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <Image 
                src="/placeholder.jpg" 
                alt="Família protegida" 
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
