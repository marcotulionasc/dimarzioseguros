'use client'

import { Check, Shield, Users, Clock } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const benefits = [
  {
    icon: Shield,
    title: 'Atendimento humanizado e rápido',
    description: 'Suporte personalizado e ágil para todas as suas necessidades'
  },
  {
    icon: Users,
    title: 'Parceria com as principais seguradoras',
    description: 'Acesso às melhores opções do mercado em um só lugar'
  },
  {
    icon: Clock,
    title: 'Equipe especializada em sinistros',
    description: 'Profissionais experientes para resolver qualquer situação'
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image 
                src="/placeholder.jpg" 
                alt="Equipe Dimarzio" 
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-8 left-8 right-8 bg-white rounded-xl p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-neutral-600">Anos de<br />experiência</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-neutral-600">Clientes<br />satisfeitos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-neutral-600">Suporte<br />disponível</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="lg:pl-8"
          >
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-sm">
              Por que nos escolher
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-8">
              Por que escolher a Dimarzio?
            </h2>
            <div className="space-y-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0, transition: { delay: i * 0.2 } }
                  }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
