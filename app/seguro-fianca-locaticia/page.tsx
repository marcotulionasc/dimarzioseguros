'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Home, CheckCircle2, ArrowRight, Shield, Building } from 'lucide-react'
import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { generateWhatsAppURL } from '@/lib/utils'

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
      <section className="hero-section flex items-center bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Alugar sem fiador, sem cheque caução e sem dor de cabeça. Sim, é possível.
            </h1>
            
            <div className="rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-xl leading-relaxed text-white">
                O <strong className="text-white">Seguro Fiança Locatícia</strong> da <strong className="text-white">Dimarzio Seguros</strong> substitui o fiador e traz mais segurança<br />
                para quem aluga e para quem recebe.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl text-blue-600">
                Você garante o contrato com uma <strong className="text-blue-600">apólice simples, justa</strong> e aceita pelas principais imobiliárias.
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="group bg-white hover:bg-white/90 text-[#0E71B8] hover:text-[#2B2E83] border-0 font-medium text-lg px-8 py-6"
                onClick={() => {
                  const element = document.querySelector('form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
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
            <h2 className="text-3xl mb-8 text-center">Pra quem é o Seguro Fiança</h2>
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
            <h2 className="text-3xl mb-8 text-center">O que o seguro cobre</h2>
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
            <h2 className="text-3xl mb-8 text-center">Por que contratar com a Dimarzio Seguros</h2>
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
            <h2 className="text-3xl mb-8 text-center">Como funciona</h2>
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
              <Button 
                size="lg" 
                className="bg-[#0E71B8] hover:bg-[#2B2E83] text-white"
                onClick={() => {
                  const element = document.querySelector('form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
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
            <h2 className="text-3xl">Antes de travar um contrato por burocracia, veja se o seguro fiança resolve.</h2>
            <p className="text-xl">
              Peça sua <strong>cotação gratuita agora</strong>.<br />
              É simples, direto e pode destravar sua locação.
            </p>
            <form 
              className="mt-8 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                              try {
                // 1. PRIMEIRO: Salvar lead na base através da API
                const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'fianca-locaticia');
                await submitForm(mappedData);
                console.log('✅ Lead salvo com sucesso na base');
                
                // 2. SEGUNDO: Só após salvar com sucesso, mostrar mensagem e preparar redirecionamento
                alert('✅ Lead salvo com sucesso! Em 1,5 segundos você será redirecionado para o WhatsApp.');
                (e.target as HTMLFormElement).reset();
                
                // 3. TERCEIRO: Redirecionar FORÇADO para WhatsApp imediatamente após salvar
                setTimeout(() => {
                  const whatsappURL = generateWhatsAppURL(data as Record<string, string>, 'fianca-locaticia');
                  window.location.href = whatsappURL; // Redirecionamento forçado na mesma aba
                  console.log('🚀 REDIRECIONAMENTO FORÇADO para WhatsApp após salvar lead');
                }, 1500);
              } catch (error) {
                console.error('❌ Erro ao salvar lead:', error);
                alert('❌ Erro ao salvar lead. Por favor, tente novamente.');
              }
              }}
            >
              <input
                type="text"
                name="nome"
                placeholder="Nome completo"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              />
              <input
                type="tel"
                name="telefone"
                placeholder="WhatsApp"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              />
              <select
                name="tipoImovel"
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
                  name="cidade"
                  placeholder="Cidade"
                  className="w-full p-3 border border-neutral-200 rounded-lg"
                  required
                />
                <input
                  type="number"
                  name="valorLocacao"
                  placeholder="Valor da locação"
                  className="w-full p-3 border border-neutral-200 rounded-lg"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-[#0E71B8] hover:bg-[#2B2E83] text-white">
                Enviar
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                * Após salvar o lead em nossa base, você será redirecionado para o WhatsApp em 1,5 segundos para dar continuidade ao atendimento personalizado.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
} 