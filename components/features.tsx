'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Clock, Award, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ShieldCheck, ArrowRight, CheckCircle2, Wallet, Phone, Headphones, Calculator, UserCheck, Clock2 } from 'lucide-react'

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
    description: 'Suporte técnico especializado quando você mais precisa'
  },
  {
    title: 'Departamento próprio que acompanha parcelas em atraso',
    icon: Clock,
    description: 'Controle dedicado para manter seu seguro sempre em dia'
  },
  {
    title: 'Sistema de multicálculo automático com as principais seguradoras do mercado',
    icon: Calculator,
    description: 'Comparação automática para encontrar a melhor opção'
  },
  {
    title: 'Consultoria com foco principal em sinistro, cobertura ideal e custo ajustado',
    icon: UserCheck,
    description: 'Orientação técnica para a proteção que você realmente precisa'
  },
  {
    title: 'Atendimento em sinistro 24 horas',
    icon: Clock2,
    description: 'Você fala com quem resolve. Mesmo aos finais de semana.'
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
    <section className="py-16 md:py-24 bg-white">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <motion.h2 
            variants={fadeInUp} 
            className="text-2xl md:text-4xl mb-2 md:mb-4"
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
              }}
              className="group bg-white rounded-lg p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-primary/10 text-primary rounded-lg p-2 md:p-3 group-hover:scale-110 transition-transform flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl mb-1 md:mb-2 leading-tight">{feature.title}</h3>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed">{feature.description}</p>
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
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 text-left">
            Como funciona na prática
          </h2>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl px-4 text-left">
            4 passos simples para sua segurança
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-primary/20 h-auto md:h-96 flex flex-col">
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-primary text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-bold text-xs md:text-sm shadow-lg">
                  {i + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-2 md:space-y-4 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl text-gray-900 leading-tight">
                    {step.text}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Differentials() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 text-left">
            O que faz a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dimarzio Seguros</span> diferente
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {differentials.slice(0, 3).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 min-h-[140px] group-hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    {/* Icon Column */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                        <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Text Column */}
                    <div className="flex-1 text-left">
                      <h3 className="text-lg md:text-xl text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {differentials.slice(3, 5).map((item, i) => (
              <motion.div
                key={i + 3}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i + 3) * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 min-h-[140px] group-hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    {/* Icon Column */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                        <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Text Column */}
                    <div className="flex-1 text-left">
                      <h3 className="text-lg md:text-xl text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Quote Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-24 max-w-4xl mx-auto text-center"
        >
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10 mt-4">
              <blockquote className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 text-white">
                "Você fala com quem resolve."
              </blockquote>
              <p className="text-xl text-blue-100 font-medium">
                Mesmo aos finais de semana.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


