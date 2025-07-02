'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { generateWhatsAppURL } from '@/lib/utils'
import { AlertTriangle, CheckCircle2, ArrowRight, Shield, Scale, Building, Users, FileText } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Substituição de depósitos',
    description: 'Substitui depósitos judiciais mantendo seu capital disponível'
  },
  {
    icon: Shield,
    title: 'Proteção patrimonial',
    description: 'Evita bloqueios de contas, bens e ativos'
  },
  {
    icon: Scale,
    title: 'Garantia contratual',
    description: 'Garante acordos e obrigações contratuais'
  },
  {
    icon: Building,
    title: 'Fluxo de caixa',
    description: 'Proporciona mais fôlego ao fluxo de caixa da empresa'
  },
  {
    icon: Users,
    title: 'Conformidade processual',
    description: 'Atende exigências em processos sem comprometer o patrimônio'
  }
]

const whoCanContract = [
  'Empresas envolvidas em processos judiciais',
  'Envolvidas em disputas com exigência de garantia',
  'Advogados e contadores que intermediam causas',
  'Com contratos públicos ou privados que exigem garantias'
]

const steps = [
  'Você preenche o formulário com os dados do processo ou obrigação',
  'A equipe da Dimarzio Seguros analisa seu perfil e monta a proposta',
  'Você recebe uma cotação personalizada com todas as condições',
  'Decide se quer seguir. Sem compromisso'
]

const advantages = [
  'Análise técnica especializada em garantias judiciais',
  'Processo ágil de 2 a 5 dias úteis',
  'Custo muito menor que ter capital retido em juízo',
  'Atendimento técnico especializado antes e depois'
]

export default function SeguroGarantiaFiduciaria() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section flex items-center bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-sm font-medium rounded-lg backdrop-blur-sm border border-white/10">
              <Scale className="mr-2 h-4 w-4" />
              <span>Cotação gratuita</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Em disputas judiciais, tempo é dinheiro, e o seguro certo pode ser o que garante sua liberdade de ação.
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              O Seguro Garantia Fiduciária da Dimarzio Seguros substitui depósitos judiciais e cauções em processos trabalhistas, tributários, cíveis ou contratuais.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl text-blue-600">
                Você protege seu caixa, evita bloqueio de bens e segue com sua operação com mais fôlego financeiro.
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

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Pra que serve o Seguro Garantia Fiduciária</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white rounded-lg shadow-lg"
                >
                  <feature.icon className="text-[#0E71B8] mb-4 h-8 w-8" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Contract Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Quem pode contratar</h2>
            <div className="space-y-4">
              {whoCanContract.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-[#0E71B8]/5 rounded-lg"
                >
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
            <blockquote className="mt-8 p-6 bg-neutral-50 rounded-lg text-center">
              <p className="text-lg font-medium">
                Proteja seu patrimônio e mantenha sua operação em andamento.
              </p>
            </blockquote>
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
                  className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-8 h-8 bg-[#0E71B8] text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    {i + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-[#0E71B8] hover:bg-[#2B2E83] text-white text-lg px-8 py-6">
                Quero minha cotação gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Vantagens do Seguro Garantia Fiduciária com a Dimarzio Seguros</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5 rounded-lg"
                >
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-12 text-center">Depoimentos de quem usou na hora certa</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <p className="text-gray-600 mb-4 italic">
                  "O seguro garantia foi fundamental para não comprometer nosso capital de giro durante um processo trabalhista."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0E71B8] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">R</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ricardo Mendes</p>
                    <p className="text-sm text-gray-500">Empresário</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <p className="text-gray-600 mb-4 italic">
                  "Recomendo para meus clientes. É uma solução que facilita muito a gestão financeira durante processos."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0E71B8] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">P</span>
                  </div>
                  <div>
                    <p className="font-semibold">Dra. Patricia Santos</p>
                    <p className="text-sm text-gray-500">Advogada</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <p className="text-gray-600 mb-4 italic">
                  "Excelente alternativa ao depósito judicial. O atendimento da Dimarzio foi muito profissional."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0E71B8] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">C</span>
                  </div>
                  <div>
                    <p className="font-semibold">Carlos Eduardo</p>
                    <p className="text-sm text-gray-500">Diretor Financeiro</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-12 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="border border-gray-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-3">Quanto tempo leva para obter o seguro garantia?</h3>
                <p className="text-gray-600">O processo geralmente leva de 2 a 5 dias úteis, dependendo da complexidade do caso e da documentação necessária.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="border border-gray-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-3">O seguro é aceito em todos os tipos de processo?</h3>
                <p className="text-gray-600">O seguro garantia é aceito na maioria dos processos judiciais e administrativos, mas é importante verificar as especificidades de cada caso.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="border border-gray-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-3">Qual o custo em comparação ao depósito judicial?</h3>
                <p className="text-gray-600">O custo do seguro geralmente varia entre 1% a 3% do valor da garantia ao ano, muito menor que ter o capital retido em juízo.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="border border-gray-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-3">Quais documentos são necessários?</h3>
                <p className="text-gray-600">Basicamente, documentos da empresa/pessoa física, informações do processo e últimos balanços/declarações de IR. A lista completa será enviada após o primeiro contato.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl">Antes de travar dinheiro em processo, veja se o seguro não resolve.</h2>
            <p className="text-xl text-white/90">
              Peça sua <strong className="text-white">cotação gratuita agora</strong>.<br />
              É simples, direto e pode ser o que falta pra sua empresa respirar melhor.
            </p>
            <form 
              className="mt-8 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                              try {
                // 1. PRIMEIRO: Salvar lead na base através da API
                const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'fiduciario');
                await submitForm(mappedData);
                console.log('✅ Lead salvo com sucesso na base');
                
                // 2. SEGUNDO: Só após salvar com sucesso, mostrar mensagem e preparar redirecionamento
                alert('✅ Lead salvo com sucesso! Em 3 segundos você será redirecionado para o WhatsApp.');
                (e.target as HTMLFormElement).reset();
                
                // 3. TERCEIRO: Redirecionar para WhatsApp apenas após confirmação que salvou na base
                setTimeout(() => {
                  const whatsappURL = generateWhatsAppURL(data as Record<string, string>, 'fiduciario');
                  window.open(whatsappURL, '_blank');
                  console.log('✅ Redirecionando para WhatsApp após salvar lead');
                }, 3000);
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
                className="w-full p-4 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <input
                type="text"
                name="nomeEmpresa"
                placeholder="Nome da empresa"
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
              <textarea
                name="mensagem"
                placeholder="Descreva brevemente seu caso e o tipo de garantia necessária"
                rows={4}
                className="w-full p-4 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                variant="outline"
                className="w-full bg-white hover:bg-white/90 text-[#0E71B8] hover:text-[#2B2E83] border-0 font-medium text-lg py-4"
              >
                Solicitar cotação gratuita
                <Scale className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-white/60 mt-2 text-center">
                * Após salvar o lead em nossa base, você será redirecionado para o WhatsApp em 3 segundos para dar continuidade ao atendimento personalizado.
              </p>
            </form>
            <p className="text-sm text-white/70 mt-4">
              Seus dados estão protegidos. Não fazemos spam.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}