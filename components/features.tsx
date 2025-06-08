'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Star, ArrowRight, CheckCircle2, Clock, Users, Wallet, Phone } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const steps = [
  { 
    icon: CheckCircle2, 
    text: 'Agende sua análise gratuita',
    description: 'Processo simples e rápido, sem compromisso'
  },
  { 
    icon: Users, 
    text: 'Entenda sua real necessidade',
    description: 'Análise personalizada do seu perfil'
  },
  { 
    icon: Wallet, 
    text: 'Comparação nas principais seguradoras',
    description: 'Melhores opções do mercado'
  },
  { 
    icon: Phone, 
    text: 'Você decide se quer contratar',
    description: 'Sem pressão, decisão é sua'
  }
]

const differentials = [
  {
    title: 'Atendimento completo em sinistro',
    icon: ShieldCheck,
    description: 'Suporte total quando você mais precisa'
  },
  {
    title: 'Departamento de parcelas',
    icon: Clock,
    description: 'Gestão dedicada para parcelas em atraso'
  },
  {
    title: 'Multicálculo automático',
    icon: Wallet,
    description: 'Comparação com principais seguradoras'
  },
  {
    title: 'Consultoria especializada',
    icon: Users,
    description: 'Foco em cobertura ideal e custo justo'
  },
  {
    title: 'Atendimento 24 horas',
    icon: Phone,
    description: 'Sempre disponível quando precisar'
  }
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
          >
            Como funciona na prática
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-neutral-600 text-lg"
          >
            Processo simples e transparente para sua segurança
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: i * 0.2 } }
              }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-6 left-6 bg-primary/10 text-primary rounded-xl p-3 group-hover:scale-110 transition-transform">
                <step.icon className="w-6 h-6" />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">{step.text}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export function Differentials() {
  return (
    <section className="py-24 bg-white">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            variants={fadeInUp}
            className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-sm"
          >
            Nossos diferenciais
          </motion.span>
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl font-bold mt-4 mb-4"
          >
            O que faz a Dimarzio diferente
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-neutral-600 text-lg"
          >
            Excelência em cada detalhe do seu atendimento
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
              }}
              className="group bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-lg p-3 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeInUp}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <blockquote className="text-2xl font-medium text-neutral-800 italic">
            "Você fala com quem resolve…"
          </blockquote>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
