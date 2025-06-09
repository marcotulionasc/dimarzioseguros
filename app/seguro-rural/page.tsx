'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Sprout, CheckCircle2, ArrowRight, Shield, Tractor } from 'lucide-react'

const coverages = [
  'Prejuízos na lavoura causados por fenômenos da natureza',
  'Mortes de animais por acidente ou doença (pecuária)',
  'Benfeitorias, galpões, equipamentos e estrutura da fazenda',
  'Dívidas ou financiamentos em caso de morte natural ou acidental do produtor',
  'Atividades agrícolas e pecuárias com cobertura sob medida',
  'Seguro com uma das menores taxas do mercado, sem abrir mão da proteção'
]

const differentials = [
  'Análise técnica feita por quem entende do campo',
  'Simulação sob medida, com explicação simples',
  'Compara opções de administradoras autorizadas pelo Banco Central',
  'Atendimento humano do início até depois da contratação',
  'Proteção real sem empurrar o que você não precisa'
]

const steps = [
  'Você preenche o formulário com os dados da propriedade',
  'A equipe da Dimarzio Seguros analisa o perfil da atividade rural',
  'Você recebe uma cotação personalizada e transparente',
  'Decide se quer seguir. Sem compromisso'
]

export default function SeguroRuralPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              A lavoura cresce com trabalho — mas pode se perder por um detalhe fora do seu controle.
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl leading-relaxed">
                Clima, pragas, acidentes… quem vive no campo sabe que o risco é real.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl">
                O <strong>Seguro Rural</strong> da <strong>Dimarzio Seguros</strong> protege o que você planta, cria e constrói com tanto esforço.<br />
                Você garante sua produção, sua renda e a segurança da sua família — mesmo diante do inesperado.
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="group bg-white hover:bg-white/90 text-[#0E71B8] hover:text-[#2B2E83] border-0 font-medium text-lg px-8 py-6"
              >
                Quero minha cotação gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">O que o Seguro Rural pode proteger</h2>
            <div className="grid gap-4">
              {coverages.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-[#0E71B8]/5 rounded-lg"
                >
                  <Shield className="text-[#0E71B8] flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Dimarzio Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que contratar com a Dimarzio Seguros</h2>
            <div className="grid gap-4">
              {differentials.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-white rounded-lg shadow-lg"
                >
                  <Tractor className="text-[#0E71B8] flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Como funciona</h2>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-[#0E71B8]/5 rounded-lg"
                >
                  <div className="w-8 h-8 bg-[#0E71B8] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-[#0E71B8] hover:bg-[#2B2E83]">
                Quero minha cotação gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Antes da próxima colheita, veja se sua produção está realmente protegida.</h2>
            <p className="text-xl">
              Peça sua <strong>cotação gratuita agora</strong>.<br />
              É simples, direto e pode evitar prejuízos que não dependem só de você.
            </p>
            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              />
              <select
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              >
                <option value="">Atividade principal</option>
                <option value="agricola">Agrícola</option>
                <option value="pecuaria">Pecuária</option>
              </select>
              <input
                type="text"
                placeholder="Cidade e Estado"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              />
              <Button type="submit" size="lg" className="w-full bg-[#0E71B8] hover:bg-[#2B2E83]">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
} 