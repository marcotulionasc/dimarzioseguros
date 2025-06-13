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
    description: 'Clique no botão e conte pra gente o que precisa proteger.'
  },
  { 
    icon: Users, 
    text: 'Entenda sua real necessidade',
    description: 'A gente ouve, analisa e mostra o que você precisa — sem enrolação.'
  },
  { 
    icon: Wallet, 
    text: 'Comparação nas principais seguradoras do mercado',
    description: 'A gente faz a cotação e te mostra a melhor condição real.'
  },
  { 
    icon: Phone, 
    text: 'Você decide se quer contratar ou não',
    description: 'Sem pressão. Sem truque. Só clareza.'
  }
]

const differentials = [
  {
    title: 'Atendimento completo, inclusive em casos de sinistro',
    icon: ShieldCheck,
    description: 'Você fala com quem resolve. Mesmo aos finais de semana.'
  },
  {
    title: 'Departamento próprio que acompanha parcelas em atraso',
    icon: Clock,
    description: 'Controle dedicado para manter seu seguro sempre em dia'
  },
  {
    title: 'Sistema de multicálculo automático',
    icon: Wallet,
    description: 'Comparação com as principais seguradoras do mercado'
  },
  {
    title: 'Consultoria com foco principal em sinistro',
    icon: Users,
    description: 'Cobertura ideal e custo ajustado para sua realidade'
  },
  {
    title: 'Atendimento em sinistro 24 horas',
    icon: Phone,
    description: 'Suporte completo quando você mais precisa'
  }
]

interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  features: Feature[];
}

export function Features({ title, features }: FeaturesProps) {
  return (
    <section className="py-24 bg-white">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl font-bold mb-4"
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
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
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

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
            className="text-4xl font-bold mb-4 font-montserrat text-institutional-black"
          >
            Como funciona na prática
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-neutral-600 text-lg font-montserrat"
          >
            4 passos simples para sua segurança
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
              className="group relative bg-white rounded-2xl p-6 shadow-dimarzio hover:shadow-dimarzio-lg transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm font-montserrat shadow-lg">
                {i + 1}
              </div>
              
              <div className="absolute -top-6 left-6 bg-primary/10 text-primary rounded-xl p-3 group-hover:scale-110 transition-transform">
                <step.icon className="w-6 h-6" />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 font-montserrat text-institutional-black">{step.text}</h3>
                <p className="text-neutral-600 font-montserrat">{step.description}</p>
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
            className="text-sm font-medium text-white bg-primary px-4 py-2 rounded-lg font-montserrat"
          >
            Nossos diferenciais
          </motion.span>
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl font-bold mt-4 mb-4 font-montserrat text-institutional-black"
          >
            O que faz a Dimarzio diferente
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-neutral-600 text-lg font-montserrat"
          >
            Com 20 anos de mercado, a Dimarzio vai além do básico. Corretora tem em toda esquina. Atendimento técnico, quase nenhuma.
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
