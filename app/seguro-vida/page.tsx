'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react'

const mistakes = [
  'A cobertura não inclui doença grave ou invalidez',
  'O valor contratado não cobre nem três meses de contas da família',
  'A cláusula de pagamento exige condições que ninguém explicou',
  'A indenização só cobre morte acidental, não natural'
]

const differentials = [
  'Entende sua realidade, renda e quem depende de você',
  'Compara opções de administradoras autorizadas pelo Banco Central',
  'Mostra o que realmente importa em cada cobertura',
  'Entrega uma proposta feita com base no seu perfil'
]

const steps = [
  'Você preenche o formulário',
  'A equipe técnica da Dimarzio Seguros analisa seu perfil',
  'Você recebe uma proposta clara e sem enrolação',
  'Decide se quer seguir, sem compromisso'
]

const advantages = [
  'Cobertura em vida e após falecimento',
  'Análise feita com base no que você precisa',
  'Simulação clara e sem empurrar nada',
  'Atendimento técnico desde a escolha até a contratação',
  'Suporte humano, direto e sem enrolação'
]

export default function SeguroVidaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-sm font-medium rounded-lg backdrop-blur-sm border border-white/10">
              <span className="mr-2">✨</span>
              <span>Análise técnica e gratuita</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Seguro de vida é pra agora, não só pro depois.
            </h1>
            
            <div className="rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-xl leading-relaxed text-white">
                Tem quem pense que seguro de vida é só pra quando acontece o pior.
                Mas a verdade é que ele pode ajudar <strong className="text-white">ainda em vida</strong>, em caso de <strong className="text-white">doença grave, invalidez ou afastamento</strong>.
                O problema é que muita gente só descobre isso quando já é tarde.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl text-blue-600">
                Na <strong className="text-blue-600">Dimarzio Seguros</strong>, você entende tudo antes de contratar, <strong className="text-blue-600">sem cláusulas escondidas</strong>.
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="group bg-white hover:bg-white/90 text-[#0E71B8] hover:text-[#2B2E83] border-0 font-medium text-lg px-8 py-6"
              >
                Quero minha análise gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Erros que muita gente só descobre na hora errada</h2>
            <div className="space-y-4">
              {mistakes.map((item, i) => (
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
                Na <strong>Dimarzio Seguros</strong>, a gente evita esse tipo de surpresa: mostramos o que faz sentido no seu caso, com clareza.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* How Dimarzio Does Different Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Como a Dimarzio Seguros faz diferente</h2>
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
              Aqui, você entende tudo antes de tomar qualquer decisão.
            </blockquote>
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
              <Button size="lg" className="bg-[#0E71B8] hover:bg-[#2B2E83] text-white">
                Quero minha análise gratuita
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
            <h2 className="text-3xl font-bold mb-8 text-center">Por que contratar com a Dimarzio Seguros</h2>
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
            <h2 className="text-3xl font-bold">Você já cuida da sua família todos os dias. Agora pode garantir que eles não fiquem desprotegidos se algo acontecer.</h2>
            <p className="text-xl">
              Peça sua <strong>análise gratuita</strong>.<br />
              É simples, direto e feito com responsabilidade.
            </p>
            <form 
              className="mt-8 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                try {
                  const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'vida');
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
              <input
                type="number"
                name="idade"
                placeholder="Idade"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              />
              <select
                name="estadoCivil"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              >
                <option value="">Estado civil</option>
                <option value="solteiro">Solteiro(a)</option>
                <option value="casado">Casado(a)</option>
                <option value="divorciado">Divorciado(a)</option>
                <option value="viuvo">Viúvo(a)</option>
              </select>
              <select
                name="dependentes"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              >
                <option value="">Você possui dependentes?</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
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