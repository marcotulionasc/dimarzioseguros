'use client'

import { Check, Shield, Users, Clock } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

interface Benefit {
  title: string;
  description: string;
}

interface WhyChooseProps {
  title: string;
  benefits: Benefit[];
  highlight: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export function WhyChoose({ title, benefits, highlight }: WhyChooseProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
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
          {highlight && (
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/90 mt-8 italic"
            >
              {highlight}
            </motion.p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
              }}
              className="group bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white/10 text-white rounded-lg p-3 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
