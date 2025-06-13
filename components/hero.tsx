'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { BadgeCheck, ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function Hero({ title, subtitle, description, buttonText, buttonLink }: HeroProps) {
  return (
    <section className="relative w-full py-16 md:py-24 text-white rounded-lg overflow-hidden bg-dimarzio-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
          <motion.div 
            className="text-center lg:text-left space-y-6 lg:space-y-8"
            initial={{opacity: 0, y: 40}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{duration: 0.6}} 
            viewport={{once: true}}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-sm font-medium rounded-lg backdrop-blur-sm border border-white/20">
              <span className="mr-2">🎉</span>
              <span>20 anos de excelência</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white font-playfair">
              {title}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white/90 font-montserrat">
              {subtitle}
            </p>

            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-montserrat">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="outline" 
                size="lg" 
                className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:scale-105 rounded-lg transition-all duration-300 font-montserrat font-medium"
                asChild
              >
                <a href={buttonLink}>
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-sm">
              <span className="flex items-center gap-2 bg-white/10 px-3 lg:px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 font-montserrat">
                <BadgeCheck className="text-white h-4 w-4 lg:h-5 lg:w-5" />
                Atendimento 24h
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-3 lg:px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 font-montserrat">
                <BadgeCheck className="text-white h-4 w-4 lg:h-5 lg:w-5" />
                +10k clientes
              </span>
            </div>
          </motion.div>

          <motion.div 
            className="relative order-first lg:order-last"
            initial={{opacity: 0, scale: 0.8}} 
            whileInView={{opacity: 1, scale: 1}} 
            transition={{duration: 1, delay: 0.3}} 
            viewport={{once: true}}
          >
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[520px] rounded-lg">
              <Image 
                src="/images/hero-dimarzioseguros.jpg" 
                alt="Família protegida" 
                fill
                className="rounded-lg object-contain"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 50vw"
                priority
              />
              
              {/* Bubbles com cores da identidade visual */}
              <motion.div 
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full backdrop-blur-sm border border-white/20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/20 rounded-full backdrop-blur-sm border border-primary/30"
                animate={{
                  x: [0, 8, 0],
                  y: [0, -8, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              <motion.div 
                className="absolute top-1/3 -left-4 w-8 h-8 bg-gradient-to-br from-secondary/40 to-secondary/20 rounded-full backdrop-blur-sm border border-secondary/40"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
              <motion.div 
                className="absolute top-1/4 -right-2 w-6 h-6 bg-gradient-to-br from-primary-light/50 to-primary/30 rounded-full backdrop-blur-sm border border-primary-light/50"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 0.8, 1]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
              />
              
              {/* Bubble adicional com cor secundária */}
              <motion.div 
                className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-gradient-to-br from-secondary/30 to-secondary/20 rounded-full backdrop-blur-sm border border-secondary/30"
                animate={{
                  y: [0, -12, 0],
                  x: [0, 6, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
              />
              
              {/* Premium glow effect with animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent rounded-lg pointer-events-none"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
