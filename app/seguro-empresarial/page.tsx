'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle2, ArrowRight, Shield, Building2, Users, Zap, Eye } from 'lucide-react'

const problemsWithInsurance = [
  'Contrata sem entender exatamente o que está coberto',
  'Descobre que falta cobertura importante na hora do sinistro',
  'Paga por proteções que não fazem sentido para o negócio',
  'Recebe proposta genérica que não atende as necessidades reais'
]

const differentials = [
  'Analisa sua operação e os riscos específicos do seu negócio',
  'Compara opções de seguradoras e coberturas no mercado',
  'Explica cada cobertura de forma clara e simples',
  'Monta proposta personalizada com foco na proteção real'
]

const steps = [
  'Você preenche o formulário com dados da empresa',
  'A equipe da Dimarzio Seguros analisa sua operação e riscos',
  'Você recebe uma proposta clara e personalizada',
  'Decide se quer seguir, sem compromisso'
]

const coverages = [
  {
    icon: Shield,
    title: 'Proteção básica',
    description: 'Incêndio, queda de raio, explosão e danos elétricos'
  },
  {
    icon: Building2,
    title: 'Estrutura e patrimônio',
    description: 'Vendaval, desmoronamento e danos ao prédio'
  },
  {
    icon: Users,
    title: 'Responsabilidade civil',
    description: 'Operações, empregador e danos a terceiros'
  },
  {
    icon: Zap,
    title: 'Continuidade do negócio',
    description: 'Despesas fixas em caso de sinistro'
  }
]

const advantages = [
  'Análise técnica detalhada da sua operação',
  'Coberturas ideais para o seu tipo de negócio',
  'Valores segurados adequados à realidade',
  'Acompanhamento completo até a contratação'
]

export default function SeguroEmpresarialPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-sm font-medium rounded-lg backdrop-blur-sm border border-white/10">
              <Shield className="mr-2 h-4 w-4" />
              <span>Análise técnica e gratuita</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Seu negócio parece protegido. Mas será que está mesmo?
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Muita gente contrata seguro empresarial sem entender direito as coberturas, depois descobre que falta proteção importante na hora que mais precisa.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl text-blue-600">
                Na <strong className="text-blue-600">Dimarzio Seguros</strong>, a análise é <strong className="text-blue-600">técnica e gratuita</strong>, você entende exatamente o que está contratando, com foco na cobertura que protege sua empresa de verdade.
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="group bg-white hover:bg-white/90 text-white hover:text-[#2B2E83] border-0 font-medium text-lg px-8 py-6"
              >
                Quero minha análise gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Companies Get Wrong Insurance Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Por que tantas empresas contratam o seguro errado</h2>
            <div className="space-y-4">
              {problemsWithInsurance.map((item, i) => (
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
              <p className="text-lg">Isso não é problema do seguro, é falta de orientação técnica.</p>
              <p className="text-lg mt-2">A <strong>Dimarzio Seguros</strong> analisa tudo com cuidado técnico, pra garantir que você esteja protegido, e não só com um papel na gaveta.</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Coverage Options Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">O que o seguro pode cobrir</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {coverages.map((coverage, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white rounded-lg shadow-lg"
                >
                  <coverage.icon className="text-[#0E71B8] mb-4 h-8 w-8" />
                  <h3 className="text-xl font-semiBold mb-2">{coverage.title}</h3>
                  <p className="text-gray-600">{coverage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Dimarzio Does Different Section */}
      <section className="py-24 bg-white">
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
                  className="relative p-6 bg-white rounded-lg shadow-lg border border-gray-100"
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
            <blockquote className="mt-8 text-center text-xl font-medium">
              Aqui, você contrata com segurança, entendendo exatamente o que está protegido.
            </blockquote>
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
                Quero minha análise gratuita
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
            <h2 className="text-3xl font-bold mb-8 text-center">Vantagens do seguro empresarial com a Dimarzio Seguros</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5 rounded-lg"
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
      <section className="py-24 bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Antes de renovar ou contratar, veja se seu seguro realmente protege o que importa.</h2>
            <p className="text-xl text-white/90">
              Peça sua <strong className="text-white">análise gratuita</strong> com quem entende do assunto.<br />
              É simples, direto e pode evitar prejuízo sério.
            </p>
            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Nome do responsável"
                className="w-full p-4 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <input
                type="text"
                placeholder="Nome da empresa"
                className="w-full p-4 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                className="w-full p-4 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-4 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <textarea
                placeholder="Conte um pouco sobre sua empresa e qual tipo de proteção precisa"
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
                Solicitar análise gratuita
                <Eye className="ml-2 h-5 w-5" />
              </Button>
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