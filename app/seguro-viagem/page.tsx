'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { generateWhatsAppURL } from '@/lib/utils'
import { Plane, CheckCircle2, ArrowRight, Shield, Users } from 'lucide-react'

const reasons = [
  'Garante atendimento médico ou hospitalar em qualquer lugar do mundo',
  'Cobre despesas com odontologia, medicamentos e exames',
  'Ajuda no caso de extravio, roubo ou atraso de bagagem',
  'Pode incluir repatriação médica e traslado em caso de falecimento',
  'Atende às exigências da União Europeia e outros países',
  'Você viaja mais leve, sabendo que se algo sair do controle, tem pra onde correr'
]

const whoNeeds = [
  'Pessoas em viagem de lazer ou turismo',
  'Intercambistas e estudantes fora do país',
  'Profissionais em viagem de trabalho ou evento',
  'Famílias em férias dentro ou fora do Brasil',
  'Atletas e praticantes de esportes em roteiros ativos'
]

const differentials = [
  'Analisa seu destino, roteiro e perfil de viagem',
  'Compara opções de administradoras autorizadas pelo Banco Central',
  'Mostra as coberturas que fazem sentido e evita o que não precisa',
  'Entrega uma cotação justa, sem prometer o que não existe'
]

const steps = [
  'Você preenche o formulário com os dados da viagem',
  'A equipe da Dimarzio Seguros analisa seu perfil e objetivo',
  'Você recebe uma simulação clara e sob medida',
  'Decide se quer seguir, sem compromisso'
]

const advantages = [
  'Cobertura para saúde, bagagem e imprevistos no exterior',
  'Orientação técnica para escolher o plano certo para sua viagem',
  'Atende às regras exigidas em países da Europa e outros destinos',
  'Simulação feita com base no seu perfil e roteiro',
  'Atendimento humano antes, durante e depois da viagem'
]

export default function SeguroViagemPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section flex items-center bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Viajar é bom, mas só aproveita mesmo quem está tranquilo com o que pode dar errado.
            </h1>
            
            <div className="rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-xl leading-relaxed text-white">
                Ninguém planeja uma viagem esperando ter dor de dente, intoxicação alimentar ou perder a mala, mas acontece.<br />
                E quando acontece fora da sua cidade ou fora do país, tudo fica mais caro e complicado.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl text-blue-600">
                Na <strong className="text-blue-600">Dimarzio Seguros</strong>, você recebe <strong className="text-blue-600">orientação técnica</strong> para escolher a cobertura certa para seu destino, tempo de viagem e tipo de roteiro.<br />
                <strong className="text-blue-600">Sem empurrar nada</strong>, só o que faz sentido pra você.
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

      {/* Why Travel Insurance Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Por que fazer um seguro viagem</h2>
            <div className="grid gap-4">
              {reasons.map((item, i) => (
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

      {/* Who Needs Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Quem precisa de seguro viagem</h2>
            <div className="grid gap-4">
              {whoNeeds.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-white rounded-lg shadow-lg"
                >
                  <Users className="text-[#0E71B8] flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
            <blockquote className="mt-8 p-6 bg-white rounded-lg text-center shadow-lg">
              <p className="text-lg">
                Para cada perfil, existe uma cobertura certa, e a <strong>Dimarzio Seguros</strong> ajuda você a encontrar.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* How Dimarzio Does Different Section */}
      <section className="py-24 bg-white">
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

      {/* Advantages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Vantagens de contratar com a Dimarzio Seguros</h2>
            <div className="grid gap-4">
              {advantages.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-[#0E71B8]/5 rounded-lg"
                >
                  <Plane className="text-[#0E71B8] flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl">Antes de embarcar, veja se o seu seguro protege de verdade.</h2>
            <p className="text-xl">
              Peça sua <strong>cotação gratuita agora</strong>.<br />
              É simples, direto e pode evitar prejuízo longe de casa.
            </p>
            <form 
              className="mt-8 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                              try {
                // 1. PRIMEIRO: Salvar lead na base através da API
                const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'viagem');
                await submitForm(mappedData);
                console.log('✅ Lead salvo com sucesso na base');
                
                // 2. SEGUNDO: Só após salvar com sucesso, mostrar mensagem e preparar redirecionamento
                alert('✅ Lead salvo com sucesso! Em 1,5 segundos você será redirecionado para o WhatsApp.');
                (e.target as HTMLFormElement).reset();
                
                // 3. TERCEIRO: Redirecionar FORÇADO para WhatsApp imediatamente após salvar
                setTimeout(() => {
                  const whatsappURL = generateWhatsAppURL(data as Record<string, string>, 'viagem');
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
                name="destino"
                placeholder="Destino da viagem"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="dataIda"
                  placeholder="Data de ida"
                  className="w-full p-3 border border-neutral-200 rounded-lg"
                  required
                />
                <input
                  type="date"
                  name="dataVolta"
                  placeholder="Data de volta"
                  className="w-full p-3 border border-neutral-200 rounded-lg"
                  required
                />
              </div>
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