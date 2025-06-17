'use client'

import { 
  Check, Shield, Users, Clock, Star, Award, Zap, Heart,
  Target, Briefcase, Phone, Mail, MapPin, Globe,
  TrendingUp, Settings, Lightbulb, Rocket, Gem, Crown,
  ShieldCheck, UserCheck, BadgeCheck, CheckCheck,
  Handshake, Eye, Lock, Headphones, Calculator, FileText
} from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Benefit {
  title: string;
  description?: string;
  icon?: string;
}

interface WhyChooseProps {
  title: string;
  benefits: Benefit[];
  highlight?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const getIcon = (iconName: string, index: number) => {
  const icons = {
    // Proteção e Segurança
    shield: Shield,
    shieldcheck: ShieldCheck,
    lock: Lock,
    eye: Eye,
    
    // Pessoas e Atendimento
    users: Users,
    usercheck: UserCheck,
    handshake: Handshake,
    headphones: Headphones,
    heart: Heart,
    
    // Tempo e Velocidade
    clock: Clock,
    checkcheck: CheckCheck,
    zap: Zap,
    rocket: Rocket,
    
    // Sucesso e Qualidade
    check: Check,
    badgecheck: BadgeCheck,
    star: Star,
    award: Award,
    crown: Crown,
    gem: Gem,
    
    // Negócios e Crescimento
    briefcase: Briefcase,
    target: Target,
    trendingup: TrendingUp,
    lightbulb: Lightbulb,
    calculator: Calculator,
    filetext: FileText,
    
    // Contato e Comunicação
    phone: Phone,
    mail: Mail,
    mappin: MapPin,
    globe: Globe,
    settings: Settings,
  }
  
  const IconComponent = icons[iconName?.toLowerCase() as keyof typeof icons]
  
  // Ícones padrão mais variados para quando não especificado
  const defaultIcons = [
    ShieldCheck, UserCheck, Zap, Award, 
    Target, Lightbulb, Crown, Handshake,
    TrendingUp, Gem, Rocket, BadgeCheck,
    Eye, Heart, Globe, Settings
  ]
  const DefaultIcon = defaultIcons[index % defaultIcons.length]
  
  return IconComponent || DefaultIcon
}

export function WhyChoose({ title, benefits, highlight }: WhyChooseProps) {
  return (
    <section className="relative py-32 overflow-hidden bg-blue-600">
      {/* Background simples e sólido */}
      <div className="absolute inset-0 bg-blue-900" />
      
      {/* Elementos decorativos minimalistas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="relative container mx-auto px-4 z-10"
      >
        {/* Header section - Simples */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-blue-800 rounded-full px-6 py-2 mb-8 border border-blue-700"
          >
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">Por que nos escolher</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp} 
            className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
          >
            {title}
          </motion.h2>
        </div>

        {/* Benefits grid - Design limpo */}
        <div className="grid grid-cols-5 gap-6 max-w-full mx-auto">
          {benefits.map((benefit, i) => {
            const IconComponent = getIcon(benefit.icon || '', i)
            
            return (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: i * 0.15,
                      duration: 0.6
                    }
                  }
                }}
                className="group relative h-96"
              >
                {/* Card background - Sólido azul */}
                <div className="absolute inset-0 bg-blue-800 rounded-2xl border border-blue-700 hover:bg-blue-700 hover:border-blue-600 transition-all duration-300 shadow-lg" />
                
                {/* Card content */}
                <div className="relative h-96 p-8 flex flex-col z-10">
                  {/* Icon container - Azul sólido */}
                  <div className="h-20 flex items-center justify-center mb-6">
                    <div className="bg-blue-600 text-white rounded-xl p-4 group-hover:bg-blue-500 transition-all duration-300 shadow-md">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center text-center min-h-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300 leading-tight">
                      {benefit.title}
                    </h3>
                    {benefit.description && (
                      <p className="text-blue-200 group-hover:text-blue-100 transition-colors duration-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    )}
                  </div>
                  
                  {/* Bottom accent - Azul sólido */}
                  <div className="h-4 flex items-end">
                    <div className="w-full h-1 bg-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Bottom section - Simples */}
        <motion.div
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { delay: 0.8, duration: 0.6 } }
          }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-2 bg-blue-800 rounded-full px-8 py-3 border border-blue-700">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-medium ml-2">Excelência comprovada</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
