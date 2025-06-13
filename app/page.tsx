'use client'

import dynamic from 'next/dynamic'
import { Hero } from '@/components/hero'
import { AlreadyInsured } from '@/components/already-insured'
import { HowItWorks, Differentials } from '@/components/features'
import { WhyWrong } from '@/components/why-wrong'
import { Consultoria } from '@/components/consultoria'
import { ProductGrid } from '@/components/product-grid'
import { WhyChoose } from '@/components/why-choose'
import { PaperQuestion } from '@/components/paper-question'
import { ContactSection } from '@/components/contact-section'

// Dynamic imports for performance
const Testimonials = dynamic(() => import('@/components/testimonials').then(mod => ({ default: mod.Testimonials })), { 
  ssr: false,
  loading: () => <div className="py-16 animate-pulse bg-neutral-100 rounded-lg" />
})

const Faq = dynamic(() => import('@/components/faq').then(mod => ({ default: mod.Faq })), { 
  ssr: false,
  loading: () => <div className="py-16 animate-pulse bg-neutral-100 rounded-lg" />
})

export default function Home() {
  const heroContent = {
    title: "Já imaginou descobrir que seu seguro não garante que você irá receber sua indenização?",
    subtitle: "3 em cada 5 pessoas só percebem que contrataram errado quando já é tarde.",
    description: "A Dimarzio Seguros oferece uma consultoria gratuita para revisar ou montar o seu seguro do jeito certo. Com cobertura que realmente protege, sem pagar a mais, sem letras miúdas.",
    buttonText: "Quero minha análise gratuita",
    buttonLink: "#contact"
  };

  const testimonialContent = {
    title: "O que nossos clientes dizem",
    testimonials: [
      {
        name: "Luciana M.",
        role: "Empresária",
        content: "Antes da Dimarzio, eu achava que estava protegido. Eles revisaram meu seguro e corrigiram várias brechas que poderiam me deixar na mão.",
        image: "/testimonials/person1.jpg"
      },
      {
        name: "Carlos T.",
        role: "Engenheiro",
        content: "Recebi um atendimento técnico, claro e sem empurroterapia. E paguei menos do que antes.",
        image: "/testimonials/person2.jpg"
      },
      {
        name: "Roberto S.",
        role: "Médico",
        content: "Com mais de 20 anos de experiência e mais de 10.000 clientes atendidos, a Dimarzio entrega um plano ajustado à realidade — sem empurrar nada.",
        image: "/testimonials/person3.jpg"
      }
    ]
  };

  const whyChooseContent = {
    title: "O que faz a Dimarzio diferente",
    benefits: [
      {
        title: "Atendimento completo, inclusive em casos de sinistro",
        description: "Você fala com quem resolve. Mesmo aos finais de semana."
      },
      {
        title: "Departamento próprio que acompanha parcelas em atraso",
        description: "Sistema de multicálculo automático com as principais seguradoras do mercado"
      },
      {
        title: "Consultoria com foco principal em sinistro",
        description: "Cobertura ideal e custo ajustado para sua realidade"
      },
      {
        title: "Atendimento em sinistro 24 horas",
        description: "Suporte completo quando você mais precisa"
      }
    ],
    highlight: "Com 20 anos de mercado, a Dimarzio vai além do básico. Corretora tem em toda esquina. Atendimento técnico, quase nenhuma."
  };

  const faqContent = {
    title: "Perguntas Frequentes",
    questions: [
      {
        question: "E se eu não quiser contratar?",
        answer: "Sem problema. A consultoria é gratuita e sem pressão."
      },
      {
        question: "É mesmo gratuita?",
        answer: "Sim. Fazemos isso pra mostrar nosso trabalho. Você só contrata se quiser."
      },
      {
        question: "Parece bom demais. Qual o truque?",
        answer: "Nenhum. A gente prefere mostrar que entende — ao invés de tentar convencer."
      },
      {
        question: "O que preciso pra fazer a análise?",
        answer: "Só clicar no botão e responder algumas perguntas rápidas."
      },
      {
        question: "Preciso contratar depois?",
        answer: "Não. Você decide com base no que achou."
      },
      {
        question: "Vocês atendem fora de Campinas?",
        answer: "Sim. Atuamos com clientes em todo o Brasil."
      },
      {
        question: "Vocês fazem seguro empresarial também?",
        answer: "Sim. Temos especialistas e damos toda consultoria gratuita pra empresas e pessoas físicas."
      }
    ]
  };

  return (
    <main className="space-y-16">
      <Hero {...heroContent} />
      <AlreadyInsured />
      <HowItWorks />
      <Differentials />
      <Testimonials {...testimonialContent} />
      <WhyWrong />
      <Consultoria />
      <ProductGrid />
      <WhyChoose {...whyChooseContent} />
      <PaperQuestion />
      <Faq {...faqContent} />
      <ContactSection />
    </main>
  )
}
