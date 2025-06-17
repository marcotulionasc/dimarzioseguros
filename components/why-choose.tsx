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
    <section className="relative py-12 sm:py-16 md:py-24 bg-blue-600 w-full">
      {/* Background simples e sólido */}
      <div className="absolute inset-0 bg-blue-700" />
      
      {/* Elementos decorativos minimalistas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 md:px-8 z-10">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header section - Simples */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-blue-800 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-blue-700"
            >
              <Star className="w-4 h-4 text-white" />
              <span className="text-xs sm:text-sm font-medium text-white">Por que nos escolher</span>
            </motion.div>
            
            <motion.h2 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight"
            >
              {title}
            </motion.h2>
          </div>

          {/* Benefits grid - Design responsivo melhorado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
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
                  {/* Card background - Sólido azul */}
                  <div className="w-full bg-blue-800 rounded-xl sm:rounded-2xl border border-blue-700 hover:bg-blue-700 hover:border-blue-600 transition-all duration-300 shadow-lg p-4 sm:p-5 md:p-6 min-h-[200px] sm:min-h-[220px] flex flex-col justify-center" />
                  
                  {/* Card content */}
                  <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-center z-10">
                    {/* Icon container - Azul sólido */}
                    <div className="flex items-center justify-center mb-4 sm:mb-5">
                      <div className="bg-blue-600 text-white rounded-lg p-3 sm:p-4 group-hover:bg-blue-500 transition-all duration-300 shadow-md">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center text-center">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-blue-100 transition-colors duration-300 leading-tight px-2">
                        {benefit.title}
                      </h3>
                      {benefit.description && (
                        <p className="text-sm sm:text-base text-blue-200 group-hover:text-blue-100 transition-colors duration-300 leading-relaxed px-2">
                          {benefit.description}
                        </p>
                      )}
                    </div>
                    
                    {/* Bottom accent - Azul sólido */}
                    <div className="mt-4 flex items-end">
                      <div className="w-full h-1 bg-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* Bottom section - Simples */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.6, duration: 0.6 } }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center mt-8 sm:mt-12 md:mt-16"
          >
            <div className="flex items-center gap-2 bg-blue-800 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 border border-blue-700">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-current" />
                ))}
              </div>
              <span className="text-white font-medium ml-2 text-sm sm:text-base">Excelência comprovada</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
