import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { WhyChoose } from "@/components/why-choose";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";

export default function SeguroPortateis() {
  const heroContent = {
    title: "Seu celular, notebook ou câmera vai com você pra todo lado — mas se quebrar, for roubado ou parar de funcionar?",
    subtitle: "O Seguro de Portáteis da Dimarzio Seguros é para quem não quer transformar imprevisto em prejuízo.",
    description: "Você protege seu eletrônico contra roubo, furto qualificado, quebra acidental, dano elétrico — com atendimento claro e sem letras miúdas.",
    buttonText: "Quero minha cotação gratuita",
    buttonLink: "#contact"
  };

  const featuresContent = {
    title: "O que o seguro cobre",
    features: [
      {
        title: "Roubo ou furto qualificado",
        description: "Cobertura em casos de roubo ou furto qualificado com arrombamento"
      },
      {
        title: "Danos acidentais",
        description: "Queda acidental, derramamento de líquidos e trincas na tela"
      },
      {
        title: "Danos elétricos",
        description: "Proteção contra curto-circuito e oscilação de energia"
      },
      {
        title: "Cobertura em viagens",
        description: "Danos em viagem nacional ou internacional"
      },
      {
        title: "Equipamentos diversos",
        description: "Equipamentos novos ou usados (com nota fiscal)"
      }
    ]
  };

  const whyChooseContent = {
    title: "O que pode ser segurado",
    benefits: [
      {
        title: "Celulares e smartphones",
        description: "Proteção para seus dispositivos móveis"
      },
      {
        title: "Notebooks e tablets",
        description: "Segurança para seus computadores portáteis"
      },
      {
        title: "Câmeras fotográficas",
        description: "Cobertura para equipamentos fotográficos"
      },
      {
        title: "Acessórios eletrônicos",
        description: "Smartwatches, fones e outros eletrônicos pessoais"
      }
    ],
    highlight: "Se carrega com você e tem valor, pode — e deve — ser protegido."
  };

  const howItWorksContent = {
    title: "Como funciona",
    steps: [
      {
        title: "Preencha o formulário",
        description: "Você preenche o formulário com os dados do equipamento"
      },
      {
        title: "Análise personalizada",
        description: "A equipe da Dimarzio Seguros analisa e monta a proposta"
      },
      {
        title: "Receba sua cotação",
        description: "Você recebe uma cotação personalizada"
      },
      {
        title: "Decisão sem compromisso",
        description: "Decide se quer seguir. Sem compromisso"
      }
    ]
  };

  const testimonialsContent = {
    title: "Depoimentos de quem protegeu seu eletrônico",
    testimonials: [
      {
        name: "Carlos Silva",
        role: "Cliente desde 2022",
        content: "O processo foi super tranquilo e quando precisei acionar o seguro, fui muito bem atendido.",
        image: "/testimonials/person1.jpg"
      },
      {
        name: "Ana Paula",
        role: "Cliente desde 2023",
        content: "Meu notebook foi roubado e em menos de 15 dias já estava com um novo. Superou minhas expectativas!",
        image: "/testimonials/person2.jpg"
      },
      {
        name: "Roberto Santos",
        role: "Cliente desde 2021",
        content: "Recomendo muito! Quebrei a tela do celular e o atendimento foi rápido e eficiente.",
        image: "/testimonials/person3.jpg"
      }
    ]
  };

  const faqContent = {
    title: "Perguntas Frequentes",
    questions: [
      {
        question: "Qual o prazo para acionar o seguro?",
        answer: "O prazo para acionar o seguro é de até 24 horas após o ocorrido. Quanto mais rápido você nos comunicar, mais ágil será o processo."
      },
      {
        question: "Como funciona a cobertura internacional?",
        answer: "A cobertura internacional é válida para viagens de até 30 dias consecutivos. O seguro cobre os mesmos eventos que no Brasil."
      },
      {
        question: "Posso segurar um aparelho usado?",
        answer: "Sim, desde que você tenha a nota fiscal do aparelho e ele esteja em bom estado de conservação."
      },
      {
        question: "Qual o prazo para receber o reembolso ou substituição?",
        answer: "Após a aprovação da documentação, o prazo é de até 10 dias úteis para reembolso ou substituição do equipamento."
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
        title="Não espere perder pra pensar em proteger"
        subtitle="Peça sua cotação gratuita agora"
        description="É simples, direto e pode evitar prejuízo com o que você mais usa no dia a dia."
      />
    </main>
  );
} 