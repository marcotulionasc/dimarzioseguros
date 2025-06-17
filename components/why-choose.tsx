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
  description: string;
  icon?: string;
}

interface WhyChooseProps {
  title: string;
  benefits: Benefit[];
  highlight: string;
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
    <section className="relative py-32 overflow-hidden">
      {/* Background with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="relative container mx-auto px-4 z-10"
      >
        {/* Header section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/20"
          >
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white/90">Por que nos escolher</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp} 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight"
          >
            {title}
          </motion.h2>
          
          {highlight && (
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {highlight}
            </motion.p>
          )}
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, i) => {
            const IconComponent = getIcon(benefit.icon || '', i)
            
            return (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 30, scale: 0.9 },
                  animate: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      delay: i * 0.15,
                      duration: 0.7,
                      ease: "easeOut"
                    }
                  }
                }}
                className="group relative h-96"
              >
                {/* Card background with enhanced glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 group-hover:border-white/30 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Card content */}
                <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                  {/* Icon container */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500" />
                      <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-3 md:p-4 group-hover:scale-110 transition-all duration-500 shadow-lg">
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center text-center px-2">
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Decorative bottom accent */}
                  <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Bottom decorative element */}
        <motion.div
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.8 } }
          }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-8 py-3 border border-white/20">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white/90 font-medium ml-2">Excelência comprovada</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
