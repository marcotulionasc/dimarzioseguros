'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle2, ArrowRight, Car, Shield } from 'lucide-react'
import { useState } from 'react'
import { submitForm, mapFormFieldsToApi } from '@/lib/api'
import { useFeedbackModal } from '@/hooks/use-feedback-modal'
import { FeedbackModal } from '@/components/ui/feedback-modal'
import { generateWhatsAppURL } from '@/lib/utils'

const coverages = [
  'Danos materiais e corporais a terceiros',
  'Despesas extraordinárias',
  'Assistência 24h (guincho, chaveiro e socorro mecânico)',
  'Carro reserva*',
  'Proteção contra roubo, colisão, incêndio e alagamento',
  'Cobertura para acessórios, vidros e faróis',
  'Extensão para reboque em longa distância',
  'Seguro para moto com coberturas ajustadas por tipo de uso'
]

const disappointments = [
  'Franquia mais alta do que o esperado',
  'Cobertura incompleta ou com limite baixo',
  'Falta de orientação na hora da contratação',
  'Demora no atendimento quando o problema acontece'
]

const differentials = [
  'Analisa o seu perfil de uso (pessoal, comercial, urbano ou viagem)',
  'Compara opções de administradoras autorizadas pelo Banco Central',
  'Mostra o que cada plano cobre e o que pode ser ajustado',
  'Entrega uma proposta clara, sem pressão e sem empurro'
]

const steps = [
  'Você preenche o formulário',
  'A equipe da Dimarzio Seguros analisa seu perfil e necessidade',
  'Você recebe uma simulação clara e personalizada',
  'Decide se quer seguir, sem compromisso'
]

const advantages = [
  'Carro reserva da frota própria (quando incluso no seguro)',
  'Cobertura ajustada pro seu tipo de uso e veículo',
  'Simulação feita com base no seu perfil, sem enrolação',
  'Atendimento técnico antes e depois da contratação',
  'Ajuda real na hora do sinistro'
]

export default function SeguroAutomovelPage() {
  const { feedback, showSuccess, showError, closeFeedback } = useFeedbackModal()

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="hero-section flex items-center bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="container mx-auto px-4 relative py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="hero-badge inline-flex items-center px-4 py-2 bg-white/10 text-sm font-medium rounded-lg backdrop-blur-sm border border-white/10">
                <Car className="mr-2 h-4 w-4" />
                <span>Cotação com análise técnica gratuita</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                Seguro de carro e moto não é tudo igual, e só na hora do sinistro você descobre isso.
              </h1>
              
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Muita gente contrata o seguro mais barato sem saber o que está incluído. Na hora do aperto, descobre que não tem carro reserva, a assistência é limitada ou a franquia é mais alta do que esperava.
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
                <p className="text-xl text-blue-600">
                  Na <strong className="text-blue-600">Dimarzio Seguros</strong>, a gente mostra as opções com clareza, explica cada detalhe e ajuda você a evitar essas surpresas.
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
                  Quero minha cotação agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Differential Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl mb-8 text-center">Diferencial da Dimarzio Seguros</h2>
              <div className="bg-[#0E71B8]/5 rounded-xl p-8 space-y-6">
                <p className="text-xl leading-relaxed">
                  Pensando no conforto dos nossos clientes, disponibilizamos <strong>carro reserva da nossa própria frota</strong> (quando o seguro contratado permite).
                </p>
                <p className="text-xl">
                  É mais rapidez, menos dor de cabeça e zero enrolação com locadora.
                </p>
                <p className="text-xl">
                  Esse é só um dos detalhes que fazem diferença.
                </p>
                <p className="text-xl">
                  Também orientamos sobre <strong>coberturas adicionais</strong>, <strong>assistência 24h</strong> e os <strong>benefícios reais</strong> de cada seguradora.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverages Section */}
        <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl mb-8 text-center">Coberturas que você pode contratar</h2>
              <div className="space-y-4">
                {coverages.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-6 bg-white rounded-lg shadow-lg"
                  >
                    <Shield className="text-[#0E71B8] flex-shrink-0 mt-1 h-6 w-6" />
                    <p className="text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-neutral-600 mt-4 text-center">
                *Desde que a cobertura seja contratada junto com o seguro
              </p>
            </div>
          </div>
        </section>

        {/* Disappointments Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl mb-8 text-center">Por que tanta gente se decepciona com o seguro depois que precisa usar</h2>
              <div className="space-y-4">
                {disappointments.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 border-l-4 border-red-500 bg-red-50 rounded-lg"
                  >
                    <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" />
                    <p>{item}</p>
                  </motion.div>
                ))}
              </div>
              <blockquote className="mt-8 p-6 bg-neutral-50 rounded-lg text-center">
                <p className="text-lg">
                  A <strong>Dimarzio Seguros</strong> evita tudo isso.<br />
                  Você entende o que está contratando e sabe o que esperar.
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* How Dimarzio Does Different Section */}
        <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl mb-8 text-center">Como a Dimarzio Seguros faz diferente</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {differentials.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative p-6 bg-white rounded-lg shadow-lg"
                  >
                    {/* Número do card */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0E71B8] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {i + 1}
                    </div>
                    <p className="text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
              <blockquote className="mt-8 text-center text-xl font-medium">
                Aqui, você contrata com transparência e confiança.
              </blockquote>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-white">
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
                    className="flex items-center gap-4 p-6 bg-[#0E71B8]/5 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-[#0E71B8] text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      {i + 1}
                    </div>
                    <p className="text-lg">{step}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button 
                  size="lg" 
                  className="bg-[#0E71B8] hover:bg-[#2B2E83] text-white text-lg px-8 py-6"
                  onClick={() => {
                    const element = document.querySelector('form');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Quero minha cotação agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl mb-8 text-center">Vantagens de contratar com a Dimarzio Seguros</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {advantages.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-white rounded-lg shadow-lg"
                  >
                    <Car className="text-[#0E71B8] mb-4 h-6 w-6" />
                    <p className="text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl">Antes de contratar, veja o que está, e o que não está, no seu seguro.</h2>
              <p className="text-xl text-white/90">
                Peça sua <strong className="text-white">cotação com análise técnica gratuita</strong>.<br />
                É simples, direto e pode evitar dor de cabeça.
              </p>
              <form 
                className="mt-8 space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = Object.fromEntries(formData.entries());
                  
                  try {
                    // 1. PRIMEIRO: Salvar lead na base através da API
                    const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'auto');
                    await submitForm(mappedData);
                    console.log('✅ Lead salvo com sucesso na base');
                    
                    // 2. SEGUNDO: Só após salvar com sucesso, mostrar mensagem e preparar redirecionamento
                    showSuccess(
                      'Obrigado! Sua cotação foi solicitada!',
                                             'Lead salvo com sucesso! Em 1,5 segundos você será redirecionado para o WhatsApp.'
                    );
                    (e.target as HTMLFormElement).reset();
                    
                                         // 3. TERCEIRO: Redirecionar FORÇADO para WhatsApp imediatamente após salvar
                     setTimeout(() => {
                       const whatsappURL = generateWhatsAppURL(data as Record<string, string>, 'auto');
                       window.location.href = whatsappURL; // Redirecionamento forçado na mesma aba
                       console.log('🚀 REDIRECIONAMENTO FORÇADO para WhatsApp após salvar lead');
                     }, 1500);
                  } catch (error) {
                    console.error('Error:', error);
                    showError(
                      'Ops! Não conseguimos processar sua solicitação',
                      'Ocorreu um erro ao enviar sua cotação. Por favor, tente novamente ou entre em contato conosco pelo telefone (19) 3294-0655.'
                    );
                  }
                }}
              >
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome completo"
                  className="w-full p-4 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="WhatsApp"
                  className="w-full p-4 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="w-full p-4 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <select
                  name="tipo"
                  className="w-full p-4 border-0 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                >
                  <option value="">Tipo de veículo</option>
                  <option value="carro">Carro</option>
                  <option value="moto">Moto</option>
                </select>
                <input
                  type="number"
                  name="ano"
                  placeholder="Ano do veículo"
                  className="w-full p-4 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <input
                  type="text"
                  name="cidade"
                  placeholder="Cidade e Estado"
                  className="w-full p-4 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="outline"
                  className="w-full bg-white hover:bg-white/90 text-[#0E71B8] hover:text-[#2B2E83] border-0 font-medium text-lg py-4"
                >
                  Enviar
                  <Car className="ml-2 h-5 w-5" />
                </Button>
              </form>
              <p className="text-sm text-white/70 mt-4">
                Seus dados estão protegidos. Não fazemos spam.
              </p>
              <p className="text-xs text-white/60 mt-2">
                * Após salvar o lead em nossa base, você será redirecionado para o WhatsApp em 3 segundos para dar continuidade ao atendimento personalizado.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={feedback.isOpen}
        onClose={closeFeedback}
        type={feedback.type}
        title={feedback.title}
        message={feedback.message}
      />
    </>
  )
} 