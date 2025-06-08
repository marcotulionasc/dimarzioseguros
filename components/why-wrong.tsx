'use client'

import { AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'

export function WhyWrong() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 md:px-8 bg-primary text-white text-center mx-auto max-w-screen-xl space-y-6"
    >
      <h2 className="text-3xl font-bold text-white">Por que tanta gente contrata errado?</h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-white/90 flex justify-center items-center gap-3">
          <span className="p-2 rounded-sm bg-white/10 backdrop-blur-sm">
            <AlertTriangle className="text-white w-5 h-5" />
          </span>
          Muitos sinistros são negados por falta de orientação adequada.
        </p>
      </div>
    </motion.section>
  )
}
