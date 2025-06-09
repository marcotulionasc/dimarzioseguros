import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { WhyChoose } from "@/components/why-choose";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";

export default function SeguroEmpresarial() {
  const heroContent = {
    title: "Seu negócio parece protegido. Mas será que está mesmo?",
    subtitle: "Com 20 anos de experiência, a Dimarzio Seguros analisa seu seguro atual — ou monta uma proposta nova do jeito certo.",
    description: "Você entende exatamente o que está contratando, com foco na cobertura que protege sua empresa de verdade.",
    buttonText: "Quero minha análise gratuita",
    buttonLink: "#contact"
  };

  const featuresContent = {
    title: "O que o seguro pode cobrir",
    features: [
      {
        title: "Proteção básica",
        description: "Incêndio, queda de raio, explosão e danos elétricos"
      },
      {
        title: "Eventos naturais",
        description: "Vendaval, desmoronamento e queda de vidros"
      },
      {
        title: "Responsabilidade civil",
        description: "Operações, empregador e danos a terceiros"
      },
      {
        title: "Continuidade",
        description: "Despesas fixas em caso de sinistro"
      },
      {
        title: "Proteção adicional",
        description: "Tumultos, greves e equipamentos eletrônicos"
      }
    ]
  };

  const whyChooseContent = {
    title: "Por que tantas empresas contratam o seguro errado",
    benefits: [
      {
        title: "Coberturas incompletas",
        description: "Coberturas importantes ficam de fora do contrato"
      },
      {
        title: "Dados incorretos",
        description: "Apólice montada com dados genéricos ou errados"
      },
      {
        title: "Valor inadequado",
        description: "Valor segurado muito abaixo do necessário"
      },
      {
        title: "Falta de clareza",
        description: "Cláusulas que dificultam o pagamento da indenização"
      }
    ],
    highlight: "Na Dimarzio Seguros, a gente analisa tudo com cuidado técnico, pra garantir que você esteja protegido — e não só com um papel na gaveta."
  };

  const howItWorksContent = {
    title: "Como funciona",
    steps: [
      {
        title: "Envie seus dados",
        description: "Você preenche o formulário com as informações básicas"
      },
      {
        title: "Análise técnica",
        description: "A equipe da Dimarzio Seguros analisa sua operação"
      },
      {
        title: "Proposta personalizada",
        description: "Você recebe uma simulação clara e ajustada pro seu caso"
      },
      {
        title: "Decisão livre",
        description: "Decide se quer seguir. Sem compromisso"
      }
    ]
  };

  const testimonialsContent = {
    title: "O que dizem nossos clientes",
    testimonials: [
      {
        name: "João Silva",
        role: "Proprietário de Indústria",
        content: "A análise detalhada da Dimarzio revelou várias lacunas no nosso seguro anterior. Agora sim me sinto seguro.",
        image: "/testimonials/person1.jpg"
      },
      {
        name: "Maria Santos",
        role: "Gestora Comercial",
        content: "Excelente atendimento técnico. Explicaram tudo com clareza e encontraram a melhor solução para nossa empresa.",
        image: "/testimonials/person2.jpg"
      },
      {
        name: "Pedro Costa",
        role: "Empresário",
        content: "Profissionalismo e conhecimento técnico impressionantes. Recomendo para qualquer empresa que busca segurança real.",
        image: "/testimonials/person3.jpg"
      }
    ]
  };

  const faqContent = {
    title: "Perguntas Frequentes",
    questions: [
      {
        question: "Como é calculado o valor do seguro empresarial?",
        answer: "O valor varia de acordo com a atividade da empresa, localização, tipo de construção e coberturas escolhidas. Fazemos uma análise personalizada para encontrar o melhor custo-benefício."
      },
      {
        question: "Quais são as coberturas mais importantes?",
        answer: "Depende do seu tipo de negócio, mas geralmente incluem incêndio, danos elétricos, responsabilidade civil e cobertura para equipamentos. Analisamos seu caso específico para recomendar as proteções mais relevantes."
      },
      {
        question: "O seguro cobre prejuízos causados por funcionários?",
        answer: "Sim, é possível incluir coberturas específicas para isso, como infidelidade de funcionários e responsabilidade civil do empregador. Detalhamos todas as opções na sua proposta."
      },
      {
        question: "Como funciona a assistência 24 horas?",
        answer: "Oferecemos suporte emergencial 24/7 para situações como problemas elétricos, hidráulicos, chaveiro e outros serviços essenciais para manter seu negócio funcionando."
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero {...heroContent} />
      <Features {...featuresContent} />
      <WhyChoose {...whyChooseContent} />
      <HowItWorks {...howItWorksContent} />
      <Testimonials {...testimonialsContent} />
      <Faq {...faqContent} />
      <Contact 
        title="Antes de renovar ou contratar, veja se seu seguro realmente protege o que importa"
        subtitle="Peça sua análise gratuita com quem entende do assunto"
        description="É simples, direto e pode evitar prejuízo sério."
      />
    </main>
  );
} 