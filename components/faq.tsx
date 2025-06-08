'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'

const faqs = [
  { q: 'E se eu não quiser contratar?', a: 'Sem problema. A consultoria é gratuita e sem pressão.' },
  { q: 'É mesmo gratuita?', a: 'Sim. Fazemos isso pra mostrar nosso trabalho. Você só contrata se quiser.' },
  { q: 'Parece bom demais. Qual o truque?', a: 'Nenhum. Preferimos mostrar que entendemos ao invés de convencer.' },
  { q: 'O que preciso pra fazer a análise?', a: 'Só clicar no botão e responder algumas perguntas rápidas.' },
  { q: 'Vocês atendem fora de Campinas?', a: 'Sim, atendemos clientes em todo o Brasil.' },
  { q: 'Vocês fazem seguro empresarial também?', a: 'Sim, damos toda consultoria gratuita para empresas e pessoas físicas.' },
]

export function Faq() {
  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-screen-xl px-4 md:px-8 py-16 space-y-8"
    >
      <h2 className="text-3xl font-bold text-center">Perguntas Frequentes</h2>
      <Accordion type="single" collapsible className="mx-auto max-w-2xl">
        {faqs.map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  )
}
