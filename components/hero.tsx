'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CheckCircle, Shield, Users, Award, ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.2 }
}

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.4 }
}

export function Hero({ title, description, buttonText, buttonLink }: HeroProps) {
  return (
    <section className="relative bg-white overflow-hidden pt-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="initial"
              animate="animate"
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="inline-flex">
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <Award className="w-4 h-4" />
                  20 anos de excelência no mercado
                </div>
              </motion.div>
              
              {/* Title */}
              <motion.h1 
                variants={fadeInLeft}
                className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-gray-900"
              >
                {title}
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                variants={fadeInLeft}
                className="text-lg lg:text-xl leading-relaxed text-gray-600 max-w-2xl"
              >
                {description}
              </motion.p>
              
              {/* CTAs */}
              <motion.div 
                variants={fadeInLeft}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
                  onClick={() => {
                    const element = document.querySelector(buttonLink);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {buttonText}
                  <ArrowRight className="w-5 h-5" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Ver depoimentos
                </Button>
              </motion.div>
              
              {/* Stats */}
              <motion.div 
                variants={fadeInLeft}
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200"
              >
                <div className="text-center sm:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-gray-600">Anos de mercado</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">20K+</div>
                  <div className="text-sm text-gray-600">Clientes atendidos</div>
                </div>
                <div className="text-center sm:text-left col-span-2 sm:col-span-1">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">17</div>
                  <div className="text-sm text-gray-600">Seguradoras parceiras</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Image */}
            <motion.div 
              variants={fadeInRight}
              initial="initial"
              animate="animate"
              className="relative lg:order-last"
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl lg:rounded-3xl p-8 lg:p-12">
                  <div className="aspect-[4/3] relative bg-white rounded-xl shadow-xl overflow-hidden">
                    {/* Placeholder for hero image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Shield className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <p className="text-lg font-medium">Proteção e Confiança</p>
                        <p className="text-sm opacity-90">600x500px</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Cards */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Online</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">Verificado</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
