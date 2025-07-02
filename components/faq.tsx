'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Question {
  question: string;
  answer: string;
}

interface FaqProps {
  title: string;
  questions: Question[];
}

interface FaqCardProps {
  question: Question;
}

const FaqCard = ({ question }: FaqCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="overflow-hidden border border-neutral-200 rounded-sm mb-4 transition-all duration-300 hover:shadow-sm bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left cursor-pointer focus:outline-none"
      >
        <span className="text-lg font-semibold text-neutral-800">{question.question}</span>
        <motion.svg
          className="w-5 h-5 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <motion.div
        className="px-5 overflow-hidden"
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          paddingTop: isOpen ? "1rem" : 0,
          paddingBottom: isOpen ? "1rem" : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className="text-neutral-700 text-base">{question.answer}</p>
      </motion.div>
    </div>
  )
}

export function Faq({ title, questions }: FaqProps) {
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6">{title}</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {questions.map((question, idx) => (
            <FaqCard key={idx} question={question} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
