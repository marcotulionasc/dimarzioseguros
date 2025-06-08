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
      className="py-16 px-4 md:px-8 bg-blue-700 text-white text-center mx-auto max-w-screen-xl space-y-4"
    >
      <h2 className="text-3xl font-bold">Por que tanta gente contrata errado?</h2>
      <p className="text-lg max-w-2xl mx-auto flex justify-center items-center gap-2">
        <span className="bg-blue-600 p-2 rounded-full"><AlertTriangle className="text-white w-5 h-5" /></span>
        Muitos sinistros são negados por falta de orientação adequada.
      </p>
    </motion.section>
  )
}
