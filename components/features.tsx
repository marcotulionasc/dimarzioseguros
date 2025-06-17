'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Star, ArrowRight, CheckCircle2, Clock, Users, Wallet, Phone, Headphones, Calculator, UserCheck, Clock2 } from 'lucide-react'

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
    description: 'A gente ouve, analisa e mostra o que você precisa, sem enrolação.'
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
    icon: Headphones,
    description: 'Você fala com quem resolve. Mesmo aos finais de semana.'
  },
  {
    title: 'Departamento próprio que acompanha parcelas em atraso',
    icon: Clock,
    description: 'Controle dedicado para manter seu seguro sempre em dia'
  },
  {
    title: 'Sistema de multicálculo automático',
    icon: Calculator,
    description: 'Comparação com as principais seguradoras do mercado'
  },
  {
    title: 'Consultoria com foco principal em sinistro',
    icon: UserCheck,
    description: 'Cobertura ideal e custo ajustado para sua realidade'
  },
  {
    title: 'Atendimento em sinistro 24 horas',
    icon: Clock2,
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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/3 rounded-full blur-2xl"></div>
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <motion.span 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white bg-primary hover:bg-primary-dark px-4 sm:px-6 py-2 sm:py-3 rounded-full font-montserrat mb-4 sm:mb-6 shadow-lg transition-all duration-300"
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5" />
            Nossos diferenciais
          </motion.span>
          <motion.h2 
            variants={fadeInUp} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-montserrat text-institutional-black leading-tight"
          >
            O que faz a Dimarzio diferente
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-neutral-600 text-lg sm:text-xl md:text-2xl font-montserrat leading-relaxed max-w-3xl mx-auto"
          >
            Com 20 anos de mercado, a Dimarzio vai além do básico. Corretora tem em toda esquina. Atendimento técnico, quase nenhuma.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {differentials.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }
              }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-primary/20 min-h-[280px] sm:min-h-[320px] flex flex-col group-hover:-translate-y-2">
                
                {/* Ícone principal */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 shadow-md">
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:text-primary-dark transition-colors duration-300" />
                  </div>
                </div>
                
                {/* Conteúdo do card */}
                <div className="flex-1 flex flex-col text-center">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-institutional-black font-montserrat leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-neutral-600 font-montserrat text-sm sm:text-base leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
                
                {/* Decorative bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote Section */}
        <motion.div 
          variants={fadeInUp}
          className="mt-16 sm:mt-20 md:mt-24 max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border border-primary/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-institutional-black font-montserrat leading-tight mb-4">
              Você fala com quem resolve!
            </blockquote>
            <div className="flex justify-center items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
