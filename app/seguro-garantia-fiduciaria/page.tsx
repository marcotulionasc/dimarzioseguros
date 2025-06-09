import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { WhyChoose } from "@/components/why-choose";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";

export default function SeguroGarantiaFiduciaria() {
  const heroContent = {
    title: "Em disputas judiciais, tempo é dinheiro — e o seguro certo pode ser o que garante sua liberdade de ação.",
    subtitle: "O Seguro Garantia Fiduciária da Dimarzio Seguros substitui depósitos judiciais e cauções em processos trabalhistas, tributários, cíveis ou contratuais.",
    description: "Você protege seu caixa, evita bloqueio de bens e segue com sua operação com mais fôlego financeiro.",
    buttonText: "Quero minha cotação gratuita",
    buttonLink: "#contact"
  };

  const featuresContent = {
    title: "Pra que serve o Seguro Garantia Fiduciária",
    features: [
      {
        title: "Substituição de depósitos",
        description: "Substitui depósitos judiciais mantendo seu capital disponível"
      },
      {
        title: "Proteção patrimonial",
        description: "Evita bloqueios de contas, bens e ativos"
      },
      {
        title: "Garantia contratual",
        description: "Garante acordos e obrigações contratuais"
      },
      {
        title: "Fluxo de caixa",
        description: "Proporciona mais fôlego ao fluxo de caixa da empresa"
      },
      {
        title: "Conformidade processual",
        description: "Atende exigências em processos sem comprometer o patrimônio"
      }
    ]
  };

  const whyChooseContent = {
    title: "Quem pode contratar",
    benefits: [
      {
        title: "Empresas em processos",
        description: "Empresas envolvidas em processos judiciais"
      },
      {
        title: "Pessoas físicas",
        description: "Envolvidas em disputas com exigência de garantia"
      },
      {
        title: "Profissionais jurídicos",
        description: "Advogados e contadores que intermediam causas"
      },
      {
        title: "Empresas contratantes",
        description: "Com contratos públicos ou privados que exigem garantias"
      }
    ],
    highlight: "Proteja seu patrimônio e mantenha sua operação em andamento."
  };

  const howItWorksContent = {
    title: "Como funciona",
    steps: [
      {
        title: "Envie os dados",
        description: "Você preenche o formulário com os dados do processo ou obrigação"
      },
      {
        title: "Análise técnica",
        description: "A equipe da Dimarzio Seguros analisa seu perfil e monta a proposta"
      },
      {
        title: "Receba a cotação",
        description: "Você recebe uma cotação personalizada com todas as condições"
      },
      {
        title: "Decisão livre",
        description: "Decide se quer seguir. Sem compromisso"
      }
    ]
  };

  const testimonialsContent = {
    title: "Depoimentos de quem usou na hora certa",
    testimonials: [
      {
        name: "Ricardo Mendes",
        role: "Empresário",
        content: "O seguro garantia foi fundamental para não comprometer nosso capital de giro durante um processo trabalhista.",
        image: "/testimonials/person1.jpg"
      },
      {
        name: "Dra. Patricia Santos",
        role: "Advogada",
        content: "Recomendo para meus clientes. É uma solução que facilita muito a gestão financeira durante processos.",
        image: "/testimonials/person2.jpg"
      },
      {
        name: "Carlos Eduardo",
        role: "Diretor Financeiro",
        content: "Excelente alternativa ao depósito judicial. O atendimento da Dimarzio foi muito profissional.",
        image: "/testimonials/person3.jpg"
      }
    ]
  };

  const faqContent = {
    title: "Perguntas Frequentes",
    questions: [
      {
        question: "Quanto tempo leva para obter o seguro garantia?",
        answer: "O processo geralmente leva de 2 a 5 dias úteis, dependendo da complexidade do caso e da documentação necessária."
      },
      {
        question: "O seguro é aceito em todos os tipos de processo?",
        answer: "O seguro garantia é aceito na maioria dos processos judiciais e administrativos, mas é importante verificar as especificidades de cada caso."
      },
      {
        question: "Qual o custo em comparação ao depósito judicial?",
        answer: "O custo do seguro geralmente varia entre 1% a 3% do valor da garantia ao ano, muito menor que ter o capital retido em juízo."
      },
      {
        question: "Quais documentos são necessários?",
        answer: "Basicamente, documentos da empresa/pessoa física, informações do processo e últimos balanços/declarações de IR. A lista completa será enviada após o primeiro contato."
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
        title="Antes de travar dinheiro em processo, veja se o seguro não resolve"
        subtitle="Peça sua cotação gratuita agora"
        description="É simples, direto e pode ser o que falta pra sua empresa respirar melhor."
      />
    </main>
  );
} 