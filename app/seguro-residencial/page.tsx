'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { Home, CheckCircle2, ArrowRight, Shield, Wrench } from 'lucide-react'

const coverages = [
  'Incêndio',
  'Danos elétricos',
  'Roubo e furto de bens',
  'Quebra de vidros',
  'Impacto de veículos na residência',
  'Responsabilidade civil e familiar',
  'E outros riscos que podem afetar o seu imóvel'
]

const services = [
  'Contenção de vazamentos',
  'Serviços de eletricista, chaveiro e encanador',
  'Desentupimento e limpeza emergencial',
  'Substituição de telhas',
  'Conserto de geladeira, máquina de lavar e telefone',
  'Tudo isso com atendimento rápido e sem dor de cabeça'
]

const differentials = [
  'Você entende exatamente o que está contratando',
  'Compara opções de administradoras autorizadas pelo Banco Central',
  'Simulação feita com base no valor e no tipo da sua residência',
  'Atendimento humano, técnico e sem empurrar nada'
]

const steps = [
  'Você preenche o formulário',
  'A equipe da Dimarzio Seguros analisa o perfil do seu imóvel',
  'Você recebe uma cotação sob medida, com explicação simples',
  'Decide se quer seguir, sem compromisso'
]

export default function SeguroResidencialPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section flex items-center bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Você trabalha a vida inteira pra ter sua casa, por que deixá-la desprotegida?
            </h1>
            
            <div className="p-6 max-w-2xl mx-auto text-white">
              <p className="text-xl leading-relaxed text-white">
                Ninguém espera ter um incêndio, vazamento, roubo ou uma descarga elétrica.<br />
                Mas quando acontece, o prejuízo pode ser alto, e muitas vezes, irreparável.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl text-blue-600">
                O <strong className="text-blue-600">seguro residencial</strong> é o jeito mais simples de proteger seu patrimônio.<br />
                Na <strong className="text-blue-600">Dimarzio Seguros</strong>, a gente monta a proposta certa pra sua casa com base na sua realidade.
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
            <h2 className="text-3xl font-bold mb-8 text-center">O que o seguro residencial pode cobrir</h2>
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

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">E você ainda pode ter serviços que resolvem no dia a dia</h2>
            <div className="grid gap-4">
              {services.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-white rounded-lg shadow-lg"
                >
                  <Wrench className="text-[#0E71B8] flex-shrink-0 mt-1" />
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
              <Button size="lg" className="bg-[#0E71B8] hover:bg-[#2B2E83] text-white">
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
            <h2 className="text-3xl font-bold">Antes de confiar que está tudo certo, veja se seu seguro realmente protege sua casa.</h2>
            <p className="text-xl">
              Peça sua <strong>cotação gratuita com orientação técnica</strong>.<br />
              É simples, direto e pode fazer diferença quando você mais precisa.
            </p>
            <form 
              className="mt-8 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                try {
                  const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'residencial');
                  await submitForm(mappedData);
                  alert('Formulário enviado com sucesso! Em breve entraremos em contato.');
                  (e.target as HTMLFormElement).reset();
                } catch (error) {
                  console.error('Error:', error);
                  alert('Erro ao enviar formulário. Por favor, tente novamente.');
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
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
              </select>
              <input
                type="text"
                name="cidade"
                placeholder="Cidade e Estado"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              />
              <Button type="submit" size="lg" className="w-full bg-[#0E71B8] hover:bg-[#2B2E83] text-white">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
} 