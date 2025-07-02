'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { generateWhatsAppURL } from '@/lib/utils'
import { Briefcase, CheckCircle2, ArrowRight, Shield, Users } from 'lucide-react'

const coverages = [
  'Prejuízos financeiros causados a terceiros',
  'Custos com defesa em ações judiciais',
  'Danos morais e materiais',
  'Restituição de imagem',
  'Atos, erros ou omissões profissionais',
  'Cobertura retroativa (em alguns casos)',
  'Coberturas ajustadas conforme a área de atuação'
]

const whoNeeds = [
  'Advogados, médicos, dentistas e psicólogos',
  'Engenheiros, arquitetos e profissionais da construção',
  'Consultores, contadores e auditores',
  'Corretores, designers, publicitários, professores e outros prestadores de serviço'
]

const differentials = [
  'Análise técnica feita com base na sua profissão e risco real',
  'Compara opções de administradoras autorizadas pelo Banco Central',
  'Simulação clara, com explicação simples e sem empurro',
  'Atendimento humano antes e depois da contratação'
]

const steps = [
  'Você preenche o formulário com seus dados e área de atuação',
  'A equipe da Dimarzio Seguros analisa seu perfil profissional',
  'Você recebe uma proposta personalizada com as coberturas certas',
  'Decide se quer seguir, sem compromisso'
]

export default function SeguroRCProfissionalPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section flex items-center bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Erro profissional pode acontecer, o que não pode é deixar isso virar prejuízo.
            </h1>
            
            <div className="rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-xl leading-relaxed text-white">
                Quem trabalha com responsabilidade técnica sabe que uma falha, mesmo sem intenção,<br />
                pode gerar processo, dano à imagem e dor de cabeça financeira.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl text-blue-600">
                Por isso, o <strong className="text-blue-600">Seguro de Responsabilidade Civil Profissional</strong> existe: pra proteger você e o seu patrimônio contra esse tipo de risco.<br /><br />
                Na <strong className="text-blue-600">Dimarzio Seguros</strong>, a gente monta a proposta certa pra sua profissão, com clareza, cobertura técnica e orientação real.
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

      {/* What is RC Professional Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">O que é o Seguro RC Profissional</h2>
            <div className="bg-[#0E71B8]/5 rounded-xl p-8 space-y-6">
              <p className="text-xl leading-relaxed">
                É um seguro que cobre <strong>prejuízos causados a terceiros por atos, erros ou omissões ligados à sua atividade profissional</strong>.<br />
                Também cobre <strong>custos com defesa judicial, danos morais</strong> e ajuda a <strong>preservar a sua imagem</strong>.
              </p>
              <p className="text-xl">
                Ideal para quem presta serviço técnico, jurídico, médico, consultivo, financeiro, criativo ou educacional.
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
            <div className="grid gap-4">
              {coverages.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
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

      {/* Who Should Contract Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Quem deve contratar esse seguro</h2>
            <div className="grid gap-4">
              {whoNeeds.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-[#0E71B8]/5 rounded-lg"
                >
                  <Users className="text-[#0E71B8] flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
            <blockquote className="mt-8 p-6 bg-[#0E71B8]/5 rounded-lg text-center">
              <p className="text-lg">
                Cada profissão tem riscos diferentes, a <strong>Dimarzio Seguros</strong> ajusta a cobertura para sua realidade.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Why Dimarzio Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
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
            <h2 className="text-3xl">Antes de um erro virar prejuízo, veja se seu seguro cobre você de verdade.</h2>
            <p className="text-xl">
              Peça agora sua <strong>cotação gratuita</strong>, é simples, direto e pode proteger sua carreira de um problema maior.
            </p>
            <form 
              className="mt-8 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                              try {
                const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'rc-profissional');
                await submitForm(mappedData);
                alert('Formulário enviado com sucesso! Agora você será redirecionado para o WhatsApp.');
                (e.target as HTMLFormElement).reset();
                
                // Redirecionar para WhatsApp após 2 segundos
                setTimeout(() => {
                  const whatsappURL = generateWhatsAppURL(data as Record<string, string>, 'rc-profissional');
                  window.open(whatsappURL, '_blank');
                }, 2000);
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
              <input
                type="text"
                name="profissao"
                placeholder="Profissão"
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
              <Button type="submit" size="lg" className="w-full bg-[#0E71B8] hover:bg-[#2B2E83] text-white">
                Enviar
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                * Após o envio, você será redirecionado para o WhatsApp para dar continuidade ao atendimento personalizado.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
} 