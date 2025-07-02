'use client'

import { 
  Check, Shield, Users, Clock, Star, Award, Zap, Heart,
  Target, Briefcase, Phone, Mail, MapPin, Globe,
  TrendingUp, Settings, Lightbulb, Rocket, Gem, Crown,
  ShieldCheck, UserCheck, BadgeCheck, CheckCheck,
  Handshake, Eye, Lock, Headphones, Calculator, FileText
} from 'lucide-react'
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
    <section className="relative py-16 md:py-12 lg:py-16 xl:py-24 bg-blue-600 w-full">
      {/* Background simples e sólido */}
      <div className="absolute inset-0 bg-blue-700" />
      
      {/* Elementos decorativos minimalistas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 md:px-8 z-10">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header section */}
          <div className="text-center mb-12 md:mb-8 lg:mb-12 xl:mb-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm rounded-full px-4 md:px-4 lg:px-6 py-2 md:py-2 mb-6 md:mb-4 lg:mb-6 border border-blue-700/50"
            >
              <Star className="w-4 h-4 md:w-4 md:h-4 text-white" />
              <span className="text-sm md:text-sm font-medium text-white">Por que nos escolher</span>
            </motion.div>
            
            <motion.h2 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 text-left text-white"
            >
              {title}
            </motion.h2>
          </div>

          {/* Benefits grid - Design limpo e espaçoso para mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6 w-full max-w-2xl md:max-w-none mx-auto">
            {benefits.map((benefit, i) => {
              const IconComponent = getIcon(benefit.icon || '', i)
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: i * 0.1,
                      duration: 0.6
                    }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative w-full"
                >
                  {/* Card com design atrativo */}
                  <div className="w-full bg-white/15 backdrop-blur-lg rounded-2xl md:rounded-2xl border border-white/30 hover:bg-white/25 hover:border-white/40 transition-all duration-300 shadow-xl hover:shadow-2xl p-6 md:p-4 lg:p-5 xl:p-6 min-h-[140px] md:min-h-[160px] lg:min-h-[200px] xl:min-h-[220px] flex flex-col justify-center hover:scale-[1.02] md:hover:scale-105">
                    
                    {/* Layout sempre vertical, mais espaçoso no mobile */}
                    <div className="flex flex-col items-center justify-center text-center h-full">
                      {/* Icon container com mais destaque */}
                      <div className="mb-4 md:mb-3 lg:mb-4 xl:mb-5">
                        <div className="bg-white/25 text-white rounded-xl p-3 md:p-3 lg:p-4 group-hover:bg-white/35 group-hover:scale-110 transition-all duration-300 shadow-lg">
                          <IconComponent className="w-7 h-7 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-lg md:text-base lg:text-lg xl:text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300 leading-tight">
                          {benefit.title}
                        </h3>
                        {benefit.description && (
                          <p className="text-sm md:text-sm lg:text-base text-blue-100/80 group-hover:text-blue-100 transition-colors duration-300 leading-relaxed mt-2 hidden md:block">
                            {benefit.description}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Bottom accent elegante */}
                    <div className="mt-4 md:mt-4 flex items-end">
                      <div className="w-full h-0.5 md:h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* Bottom section elegante */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.6, duration: 0.6 } }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center mt-12 md:mt-8 lg:mt-12 xl:mt-16"
          >
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-lg rounded-full px-6 md:px-6 lg:px-8 py-3 md:py-3 border border-white/30 shadow-lg">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-4 md:h-4 text-yellow-300 fill-current" />
                ))}
              </div>
              <span className="text-white font-medium ml-1 text-sm md:text-sm lg:text-base">Excelência comprovada</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
