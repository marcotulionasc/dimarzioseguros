'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { generateWhatsAppURL } from '@/lib/utils'

export default function SeguroPortateis() {
  const features = [
    {
      title: "Roubo e furto",
      description: "Cobertura em casos de roubo ou furto qualificado com arrombamento"
    },
    {
      title: "Danos acidentais",
      description: "Queda acidental, derramamento de líquidos e quebra de tela"
    },
    {
      title: "Danos elétricos",
      description: "Proteção contra curto-circuito e oscilação de energia"
    },
    {
      title: "Cobertura ampla",
      description: "Proteção nacional e internacional em viagens"
    },
    {
      title: "Reposição garantida",
      description: "Substituição ou reembolso em até 10 dias úteis"
    }
  ];

  const benefits = [
    {
      title: "Profissionais móveis",
      description: "Que dependem de seus equipamentos para trabalhar"
    },
    {
      title: "Estudantes",
      description: "Com notebooks e tablets para estudo"
    },
    {
      title: "Fotógrafos",
      description: "Com equipamentos fotográficos valiosos"
    },
    {
      title: "Usuários exigentes",
      description: "Com dispositivos de última geração"
    }
  ];

  const steps = [
    'Envie os dados do equipamento',
    'Nossa equipe avalia e prepara a melhor proposta',
    'Você recebe uma proposta clara e personalizada',
    'Decide se quer seguir, sem compromisso'
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Desenvolvedor",
      content: "Quando meu notebook teve um problema, o processo foi super rápido. Em poucos dias estava com um novo equipamento."
    },
    {
      name: "Ana Paula",
      role: "Fotógrafa",
      content: "Proteção que realmente funciona. Precisei acionar o seguro e fui muito bem atendida, sem burocracia."
    },
    {
      name: "Roberto Santos",
      role: "Empresário",
      content: "Excelente custo-benefício. O atendimento é rápido e a cobertura é completa, como prometido."
    }
  ];

  const faqs = [
    {
      question: "Quais equipamentos podem ser segurados?",
      answer: "Smartphones, notebooks, tablets, câmeras fotográficas, smartwatches e outros eletrônicos portáteis, tanto novos quanto usados (com nota fiscal)."
    },
    {
      question: "Como funciona em caso de sinistro?",
      answer: "Você deve comunicar em até 24 horas. Após enviar a documentação necessária, o processo de reembolso ou substituição é concluído em até 10 dias úteis."
    },
    {
      question: "O seguro cobre danos no exterior?",
      answer: "Sim, oferecemos cobertura internacional para viagens de até 30 dias consecutivos, mantendo as mesmas proteções que você tem no Brasil."
    },
    {
      question: "Qual a documentação necessária?",
      answer: "Basicamente a nota fiscal do equipamento e seus dados pessoais. Em caso de sinistro, o boletim de ocorrência (em casos de roubo) ou laudo técnico (em casos de dano)."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section flex items-center bg-gradient-to-br from-[#0E71B8] to-[#2B2E83] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-sm font-medium rounded-lg backdrop-blur-sm border border-white/10">
              <span className="mr-2">✨</span>
              <span>Proteção completa para seus dispositivos</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Proteja seus equipamentos portáteis contra imprevistos do dia a dia
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              O Seguro de Portáteis da Dimarzio Seguros garante proteção completa para seus dispositivos eletrônicos onde quer que você esteja.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-xl text-blue-600">
                Cobertura contra roubo, furto qualificado, quebra acidental e danos elétricos, com atendimento rápido e sem letras miúdas.
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

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">O que o seguro cobre</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white rounded-lg shadow-lg"
                >
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Quem precisa deste seguro</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white rounded-lg shadow-lg"
                >
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
            <blockquote className="mt-8 text-center text-xl font-medium">
              Proteja o que é importante: seus dispositivos são mais que aparelhos, são ferramentas essenciais do seu dia a dia.
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
                Quero minha cotação gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E71B8]/5 to-[#2B2E83]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">O que dizem nossos clientes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white rounded-lg shadow-lg"
                >
                  <p className="text-lg mb-4">{item.content}</p>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-[#0E71B8]/5 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p>{faq.answer}</p>
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
            <h2 className="text-3xl">Proteja seus equipamentos antes que seja tarde</h2>
            <p className="text-xl">
              Peça sua <strong>cotação gratuita</strong> agora.<br />
              É rápido, simples e pode evitar dor de cabeça com seus dispositivos mais importantes.
            </p>
            <form 
              className="mt-8 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                              try {
                // 1. PRIMEIRO: Salvar lead na base através da API
                const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'portateis');
                await submitForm(mappedData);
                console.log('✅ Lead salvo com sucesso na base');
                
                // 2. SEGUNDO: Só após salvar com sucesso, mostrar mensagem e preparar redirecionamento
                alert('✅ Lead salvo com sucesso! Em 1,5 segundos você será redirecionado para o WhatsApp.');
                (e.target as HTMLFormElement).reset();
                
                // 3. TERCEIRO: Redirecionar FORÇADO para WhatsApp imediatamente após salvar
                setTimeout(() => {
                  const whatsappURL = generateWhatsAppURL(data as Record<string, string>, 'portateis');
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
                name="equipamento"
                placeholder="Qual equipamento você quer proteger?"
                className="w-full p-3 border border-neutral-200 rounded-lg"
                required
              />
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
  );
} 