'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { generateWhatsAppURL } from '@/lib/utils'
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react'

const frustrations = [
  'Entra sem saber como funciona a contemplação',
  'Recebe crédito que não atende seu objetivo (imóvel, carro ou moto)',
  'Paga taxas sem entender o que está incluso',
  'Descobre restrições depois de assinar'
]

const differentials = [
  'Analisa o que você quer',
  'Compara opções de administradoras autorizadas pelo Banco Central',
  'Explica como funciona a contemplação',
  'Monta uma simulação de acordo com o seu perfil e o que você pode investir'
]

const steps = [
  'Você preenche o formulário',
  'A equipe da Dimarzio Seguros analisa seu perfil e objetivo',
  'Você recebe uma simulação clara e personalizada',
  'Decide se quer seguir, sem compromisso'
]

const advantages = [
  'Simulação clara e feita com base no seu perfil',
  'Opções ideais para sua compra ou investimento',
  'Grupo ideal para o que você precisa',
  'Acompanhamento técnico até a contemplação, e depois também'
]

export default function ConsorciosPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section flex items-center bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-sm font-medium rounded-lg backdrop-blur-sm border border-white/10">
              <span className="mr-2">✨</span>
              <span>Análise técnica e gratuita</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              O consórcio certo é aquele que atende seu objetivo, não o interesse de quem está vendendo.
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Muita gente assina sem entender como o consórcio realmente funciona, depois descobre que o grupo não era o ideal ou que o crédito não serve para o que queria comprar.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl text-blue-600">
                Na <strong className="text-blue-600">Dimarzio Seguros</strong>, a análise é <strong className="text-blue-600">técnica e gratuita</strong>,você recebe uma simulação clara e uma explicação simples antes de tomar qualquer decisão.
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="group bg-white hover:bg-white/90 text-[#0E71B8] hover:text-[#2B2E83] border-0 font-medium text-lg px-8 py-6"
              >
                Quero minha simulação gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Get Frustrated Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Por que tanta gente se frustra com consórcio</h2>
            <div className="space-y-4">
              {frustrations.map((item, i) => (
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
              <p className="text-lg">Isso não é culpa do consórcio, é falta de orientação.</p>
              <p className="text-lg mt-2">A <strong>Dimarzio Seguros</strong> explica tudo antes, com clareza e sem pressão.</p>
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
              Aqui, você escolhe com segurança, sem pressa e com a verdade.
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
                  <div className="w-8 h-8 bg-[#0E71B8] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-[#0E71B8] hover:bg-[#2B2E83] text-white">
                Quero minha simulação gratuita
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
            <h2 className="text-3xl mb-8 text-center">Vantagens de fazer consórcio com a Dimarzio Seguros</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white rounded-lg shadow-lg"
                >
                  <CheckCircle2 className="text-[#0E71B8] mb-4 h-6 w-6" />
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl">Antes de assinar, veja se o consórcio realmente faz sentido pra você.</h2>
            <p className="text-xl">
              Peça sua <strong>simulação gratuita</strong> com análise técnica.<br />
              É simples, direto e pode evitar frustração no futuro.
            </p>
            <form 
              className="mt-8 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                              try {
                // 1. PRIMEIRO: Salvar lead na base através da API
                const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'consorcio');
                await submitForm(mappedData);
                console.log('✅ Lead salvo com sucesso na base');
                
                // 2. SEGUNDO: Só após salvar com sucesso, mostrar mensagem e preparar redirecionamento
                alert('✅ Lead salvo com sucesso! Em 3 segundos você será redirecionado para o WhatsApp.');
                (e.target as HTMLFormElement).reset();
                
                // 3. TERCEIRO: Redirecionar para WhatsApp apenas após confirmação que salvou na base
                setTimeout(() => {
                  const whatsappURL = generateWhatsAppURL(data as Record<string, string>, 'consorcio');
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
                name="interesse"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              >
                <option value="">Selecione seu interesse</option>
                <option value="imovel">Imóvel</option>
                <option value="terreno">Terreno</option>
                <option value="automovel">Automóvel</option>
                <option value="moto">Moto</option>
              </select>
              <Button type="submit" size="lg" className="w-full bg-[#0E71B8] hover:bg-[#2B2E83] text-white">
                Enviar
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                * Após salvar o lead em nossa base, você será redirecionado para o WhatsApp em 3 segundos para dar continuidade ao atendimento personalizado.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
} 