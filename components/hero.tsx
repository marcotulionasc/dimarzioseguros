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
    <section className="relative w-full py-24 text-white rounded-lg" style={{ background: 'linear-gradient(135deg, #0E71B8 0%, #2B2E83 100%)' }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{opacity: 0, y: 40}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{duration: 0.6}} 
            viewport={{once: true}}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-sm font-medium rounded-lg backdrop-blur-sm">
              <span className="mr-2">🎉</span>
              <span>20 anos de excelência</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              {title}
            </h1>

            <p className="text-2xl font-semibold text-white/90">
              {subtitle}
            </p>

            <p className="text-xl text-white/90">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="outline" 
                size="lg" 
                className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 rounded-lg"
                asChild
              >
                <a href={buttonLink}>
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <BadgeCheck className="text-white h-5 w-5" />
                Atendimento 24h
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <BadgeCheck className="text-white h-5 w-5" />
                +10k clientes
              </span>
            </div>
          </motion.div>

          <div className="hidden lg:block relative">
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <Image 
                src="/images/hero-dimarzio-white.png" 
                alt="Família protegida" 
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E71B8]/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
