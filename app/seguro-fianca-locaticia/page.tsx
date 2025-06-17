'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Home, CheckCircle2, ArrowRight, Shield, Building } from 'lucide-react'

const targetAudience = [
  'Inquilinos que não têm fiador ou não querem depender de terceiros',
  'Proprietários ou imobiliárias que querem receber com mais segurança',
  'Empresas que precisam alugar espaços comerciais sem burocracia',
  'Pessoas físicas que buscam rapidez pra fechar um contrato de aluguel'
]

const coverages = [
  'Aluguel em caso de inadimplência',
  'Condomínio e IPTU (se contratados na apólice)',
  'Multas e encargos contratuais',
  'Danos ao imóvel',
  'Despesas jurídicas e honorários'
]

const differentials = [
  'Análise rápida com base no seu perfil',
  'Simulação clara, com explicação simples',
  'Compara opções de administradoras autorizadas pelo Banco Central',
  'Atendimento direto com especialista, sem empurro e sem enrolação'
]

const steps = [
  'Você preenche o formulário com os dados do imóvel e da locação',
  'A equipe da Dimarzio Seguros analisa seu perfil e monta a proposta',
  'Você recebe a cotação com tudo que precisa saber',
  'Decide se quer seguir. Sem compromisso'
]

export default function SeguroFiancaLocaticiaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Alugar sem fiador, sem cheque caução e sem dor de cabeça. Sim, é possível.
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl leading-relaxed">
                O <strong>Seguro Fiança Locatícia</strong> da <strong>Dimarzio Seguros</strong> substitui o fiador e traz mais segurança<br />
                para quem aluga e para quem recebe.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl">
                Você garante o contrato com uma <strong>apólice simples, justa</strong> e aceita pelas principais imobiliárias.
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

      {/* Target Audience Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Pra quem é o Seguro Fiança</h2>
            <div className="grid gap-4">
              {targetAudience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-[#0E71B8]/5 rounded-lg"
                >
                  <Building className="text-[#0E71B8] flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverages Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">O que o seguro cobre</h2>
            <div className="grid gap-4">
              {coverages.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-white rounded-lg shadow-lg"
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que contratar com a Dimarzio Seguros</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {differentials.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-6 bg-[#0E71B8]/5 rounded-lg"
                >
                  {/* Número do card */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0E71B8] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {i + 1}
                  </div>
                  <CheckCircle2 className="text-[#0E71B8] mb-4 h-6 w-6" />
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
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
                  className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-lg"
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Antes de travar um contrato por burocracia, veja se o seguro fiança resolve.</h2>
            <p className="text-xl">
              Peça sua <strong>cotação gratuita agora</strong>.<br />
              É simples, direto e pode destravar sua locação.
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
                <option value="">Tipo de imóvel</option>
                <option value="residencial">Residencial</option>
                <option value="comercial">Comercial</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="w-full p-3 border border-neutral-200 rounded-lg"
                  required
                />
                <input
                  type="number"
                  placeholder="Valor da locação"
                  className="w-full p-3 border border-neutral-200 rounded-lg"
                  required
                />
              </div>
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