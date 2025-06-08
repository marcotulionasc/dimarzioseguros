'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FAQ {
  q: string
  a: string
}

interface FaqCardProps {
  faq: FAQ
}

const FaqCard = ({ faq }: FaqCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="overflow-hidden border border-neutral-200 rounded-sm mb-4 transition-all duration-300 hover:shadow-sm bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left cursor-pointer focus:outline-none"
      >
        <span className="text-lg font-semibold text-neutral-800">{faq.q}</span>
        <svg
          className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
          isOpen ? "max-h-40 py-4" : "max-h-0 py-0"
        }`}
      >
        <p className="text-neutral-700 text-base">{faq.a}</p>
      </div>
    </div>
  )
}

const faqs: FAQ[] = [
  { 
    q: "Preciso pedir muito?", 
    a: "Não. Comece com 10 peças." 
  },
  { 
    q: "E se eu não gostar?", 
    a: "Você só fecha se gostar." 
  },
  { 
    q: "Quanto tempo pra produzir?", 
    a: "A gente alinha e entrega rápido." 
  },
  { 
    q: "Qualidade garantida?", 
    a: "Sim. Se tiver problema, a gente resolve." 
  }
]

export function Faq() {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Direto ao ponto, sem enrolação.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {faqs.map((faq, idx) => (
            <FaqCard key={idx} faq={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
