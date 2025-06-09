'use client'

import { motion } from 'framer-motion'
import { TestimonialSlider } from './testimonial-slider'
import { Quote } from 'lucide-react'

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export function Testimonials({ title, testimonials }: TestimonialsProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
          >
            <Quote className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-neutral-600"
          >
            Histórias reais de clientes que confiam em nosso trabalho
          </motion.p>
        </div>

        <motion.div
          variants={fadeInUp}
          className="relative"
        >
          {/* Background Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl" />

          {/* Testimonial Slider */}
          <div className="relative z-10">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
