'use client'

import dynamic from 'next/dynamic'
import { Hero } from '@/components/hero'
import { ClientLogos } from '@/components/client-logos'
import { HowItWorks, Differentials } from '@/components/features'
import { StatsSection } from '@/components/stats-section'
import { WhyWrong } from '@/components/why-wrong'
import { ConsultoriaBenefits } from '@/components/consultoria-benefits'
import { Consultoria } from '@/components/consultoria'
import { ProductGrid } from '@/components/product-grid'
import { WhyChoose } from '@/components/why-choose'
import { FinalCTA } from '@/components/final-cta'
import { PaperQuestion } from '@/components/paper-question'
import { ContactSection } from '@/components/contact-section'
import { AnniversaryBanner } from '@/components/anniversary-banner'

// Dynamic imports for performance
const VideoTestimonials = dynamic(() => import('@/components/video-testimonials').then(mod => ({ default: mod.VideoTestimonials })), { 
  ssr: false,
  loading: () => <div className="py-16 animate-pulse bg-neutral-100 rounded-lg" />
})

const Faq = dynamic(() => import('@/components/faq').then(mod => ({ default: mod.Faq })), { 
  ssr: false,
  loading: () => <div className="py-16 animate-pulse bg-neutral-100 rounded-lg" />
})

export default function Home() {
  const heroContent = {
    title: "Imagina descobrir que não receberá a indenização do seu seguro?",
    description: "A Dimarzio Seguros oferece uma consultoria gratuita para revisar ou montar o seu seguro do jeito certo. Com cobertura que realmente protege, sem pagar a mais, sem letras miúdas.",
    buttonText: "Quero minha análise gratuita",
    buttonLink: "#contato"
  };

  const videoTestimonialContent = {
    title: "O que nossos clientes dizem",
    videos: [
      {
        id: "video1",
        title: "Marta Nascimento",
        embedUrl: "https://pub-41df0a2680d8451cb73e844f0d72cc9b.r2.dev/video03.mp4"
      },
      {
        id: "video2", 
        title: "Aaron Engel",
        embedUrl: "https://pub-41df0a2680d8451cb73e844f0d72cc9b.r2.dev/video02.mp4"
      },
      {
        id: "video3",
        title: "Rafael Rosseto", 
        embedUrl: "https://pub-41df0a2680d8451cb73e844f0d72cc9b.r2.dev/video01.mp4"
      }
    ]
  };

  const whyChooseContent = {
    title: "Por que escolher a Dimarzio?",
    benefits: [
      {
        title: "Te explicamos o que a seguradora não te conta",
      },
      {
        title: "Você economiza onde dá sem abrir mão do essencial",
      },
      {
        title: "Seu seguro passa a falar a sua língua",
      },
      {
        title: "Comparação em 17 seguradoras",
      },
      {
        title: "Atendimento técnico de verdade",
      },
      {
        title: "Suporte completo, inclusive em sinistro",
      }
    ],
  };

  const faqContent = {
    title: "Perguntas que a gente responde todo dia",
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
        answer: "Nenhum. A gente prefere mostrar que entende, ao invés de tentar convencer."
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
    <main>
      <Hero {...heroContent} />
      <ClientLogos />
      <HowItWorks />
      <Differentials />
      <StatsSection />
      
      {/* Banner Comemorativo 20 Anos */}
      <section className="py-8 bg-gradient-to-br from-amber-50/30 via-white to-orange-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnniversaryBanner />
        </div>
      </section>
      
      <VideoTestimonials {...videoTestimonialContent} />
      <WhyWrong />
      <ConsultoriaBenefits />
      <Consultoria />
      <ProductGrid />
      <WhyChoose {...whyChooseContent} />
      <FinalCTA />
      <Faq {...faqContent} />
      <ContactSection />
    </main>
  )
}
