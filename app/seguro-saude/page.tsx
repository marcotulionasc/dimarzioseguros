'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { generateWhatsAppURL } from '@/lib/utils'
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react'

const frustrations = [
  'Rede fraca na sua região',
  'Reembolso simbólico, que não cobre o valor do atendimento',
  'Carência que você só descobre quando precisa usar',
  'Cobertura que não inclui os médicos ou exames que você usa'
]

const differentials = [
  'Entende seu perfil e sua rotina',
  'Compara opções de administradoras autorizadas pelo Banco Central',
  'Mostra a diferença entre coberturas, carências e valores',
  'Entrega uma proposta que cabe no seu bolso e atende sua realidade'
]

const steps = [
  'Você preenche o formulário',
  'A equipe da Dimarzio Seguros analisa seu perfil e o que você precisa',
  'Você recebe opções com explicação simples e sem termos complicados',
  'Você decide se quer seguir, sem compromisso'
]

export default function SeguroSaudePage() {
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
              O plano de saúde parece bom, até o dia em que você precisa usar e descobre que ele não cobre o essencial.
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Muita gente só percebe que fez a escolha errada quando já está diante de uma emergência.
              Não sabe como funciona a <strong className="text-white">carência</strong>, não entende o <strong className="text-white">reembolso</strong>, ou descobre que a <strong className="text-white">rede credenciada</strong> não atende na cidade.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl mb-4">
                Na <strong className="text-blue-600">Dimarzio Seguros</strong>, você recebe uma <strong className="text-blue-600">análise técnica gratuita</strong>.
                A gente te mostra as opções que fazem sentido para sua realidade, <strong className="text-blue-600">sem empurrar nada</strong>.
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
                Quero minha análise gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Get Disappointed Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Por que tanta gente se decepciona com o plano de saúde</h2>
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
              <p className="text-lg">Isso não é culpa do plano, é <strong>falta de orientação</strong>.</p>
              <p className="text-lg mt-2">A <strong>Dimarzio Seguros</strong> te ajuda a entender tudo antes de contratar.</p>
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
              Aqui você escolhe com <strong>segurança e informação</strong>.
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
                Quero minha análise gratuita
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
            <h2 className="text-3xl">Antes de contratar, veja se o plano realmente protege o que você precisa.</h2>
            <p className="text-xl">
              Peça sua <strong>análise gratuita</strong> com quem entende do assunto.<br />
              É simples, direto e pode evitar dor de cabeça na hora que você mais precisa.
            </p>
            <form 
              className="mt-8 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                              try {
                // 1. PRIMEIRO: Salvar lead na base através da API
                const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'saude');
                await submitForm(mappedData);
                console.log('✅ Lead salvo com sucesso na base');
                
                // 2. SEGUNDO: Só após salvar com sucesso, mostrar mensagem e preparar redirecionamento
                alert('✅ Lead salvo com sucesso! Em 1,5 segundos você será redirecionado para o WhatsApp.');
                (e.target as HTMLFormElement).reset();
                
                // 3. TERCEIRO: Redirecionar FORÇADO para WhatsApp imediatamente após salvar
                setTimeout(() => {
                  const whatsappURL = generateWhatsAppURL(data as Record<string, string>, 'saude');
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
              <input
                type="text"
                name="cidade"
                placeholder="Cidade e Estado"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              />
              <Button type="submit" size="lg" className="w-full bg-[#0E71B8] hover:bg-[#2B2E83]">
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