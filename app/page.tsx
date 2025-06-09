'use client'

import { Hero } from '@/components/hero'
import { AlreadyInsured } from '@/components/already-insured'
import { HowItWorks, Differentials } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { WhyWrong } from '@/components/why-wrong'
import { Consultoria } from '@/components/consultoria'
import { ProductGrid } from '@/components/product-grid'
import { WhyChoose } from '@/components/why-choose'
import { PaperQuestion } from '@/components/paper-question'
import { Faq } from '@/components/faq'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  const heroContent = {
    title: "Dimarzio Seguros — 20 anos protegendo com clareza",
    subtitle: "Seguros pensados para você e sua família",
    description: "Atendimento personalizado e coberturas que realmente fazem sentido para você",
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
        content: "Profissionais extremamente competentes e atenciosos. Resolveram meu sinistro com agilidade impressionante.",
        image: "/testimonials/person3.jpg"
      }
    ]
  };

  const whyChooseContent = {
    title: "Por que escolher a Dimarzio?",
    benefits: [
      {
        title: "Atendimento humanizado",
        description: "Suporte personalizado e ágil para todas as suas necessidades"
      },
      {
        title: "Melhores seguradoras",
        description: "Parceria com as principais seguradoras do mercado"
      },
      {
        title: "Experiência comprovada",
        description: "20 anos de experiência no mercado de seguros"
      },
      {
        title: "Suporte completo",
        description: "Acompanhamento em todas as etapas do processo"
      }
    ],
    highlight: "Sua tranquilidade é nossa prioridade"
  };

  const faqContent = {
    title: "Perguntas Frequentes",
    questions: [
      {
        question: "Como funciona o processo de contratação?",
        answer: "O processo é simples e rápido. Você nos envia suas informações, analisamos seu perfil e apresentamos as melhores opções para você."
      },
      {
        question: "Quanto tempo leva para contratar um seguro?",
        answer: "Na maioria dos casos, conseguimos finalizar todo o processo em até 48 horas após o envio da documentação necessária."
      },
      {
        question: "Como funciona o suporte pós-venda?",
        answer: "Oferecemos suporte completo 24/7. Em caso de sinistro ou dúvidas, nossa equipe está sempre pronta para ajudar."
      },
      {
        question: "Vocês trabalham com todas as seguradoras?",
        answer: "Trabalhamos com as principais seguradoras do mercado, o que nos permite encontrar sempre a melhor opção para cada perfil."
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
