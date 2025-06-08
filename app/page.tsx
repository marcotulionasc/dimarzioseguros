import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, CheckCircle, Star, ChevronDown, Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { FallbackImage } from "@/components/ui/fallback-image"
import { MobileMenu } from "@/components/mobile-menu"

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  initials: string;
}

interface Plan {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const stats: Stat[] = [
  { value: "5000+", label: "Clientes Protegidos" },
  { value: "98%", label: "Satisfação" },
  { value: "24/7", label: "Suporte" },
  { value: "15+", label: "Anos de Experiência" },
];

const features: Feature[] = [
  {
    icon: "🛡️",
    title: "Proteção Completa",
    description: "Oferecemos uma ampla gama de seguros para proteger você e sua família em todas as situações.",
  },
  {
    icon: "💼",
    title: "Atendimento Personalizado",
    description: "Nossa equipe está sempre pronta para encontrar a melhor solução para suas necessidades.",
  },
  {
    icon: "⚡",
    title: "Processo Ágil",
    description: "Cotação e contratação rápida, sem burocracia e com o melhor preço do mercado.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Carlos Silva",
    role: "Cliente desde 2020",
    content: "Excelente atendimento e preços competitivos. Recomendo a todos!",
    initials: "CS",
  },
  {
    name: "Maria Santos",
    role: "Cliente desde 2019",
    content: "Profissionais muito atenciosos e processo super tranquilo.",
    initials: "MS",
  },
  {
    name: "Pedro Lima",
    role: "Cliente desde 2021",
    content: "Melhor corretora que já utilizei. Muito satisfeito com o serviço!",
    initials: "PL",
  },
];

const plans: Plan[] = [
  {
    name: "Básico",
    description: "Proteção essencial para você",
    price: "99,90",
    features: [
      "Seguro de vida",
      "Assistência 24h",
      "Cobertura básica",
      "Atendimento online",
    ],
  },
  {
    name: "Premium",
    description: "Proteção completa para família",
    price: "199,90",
    features: [
      "Todas as coberturas do Básico",
      "Seguro residencial",
      "Seguro auto",
      "Atendimento prioritário",
      "Descontos exclusivos",
    ],
    highlighted: true,
  },
  {
    name: "Empresarial",
    description: "Soluções para sua empresa",
    price: "499,90",
    features: [
      "Todas as coberturas do Premium",
      "Seguro empresarial",
      "Gestão de riscos",
      "Gerente de conta dedicado",
      "Consultoria especializada",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-gray-100 shadow-sm">
        <div className="container flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative h-8 w-8 md:h-11 md:w-11 overflow-hidden">
              <Image 
                src="/logo.svg" 
                alt="Dimarzio Seguros Logo" 
                width={42} 
                height={42} 
                className="h-full w-full" 
              />
            </div>
            <span className="text-lg md:text-2xl font-bold gradient-text">Dimarzio Seguros</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#produtos" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-all-300">
              Produtos
            </Link>
            <Link href="#beneficios" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-all-300">
              Benefícios
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-all-300">
              Depoimentos
            </Link>
            <Link href="#precos" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-all-300">
              Planos
            </Link>
          </nav>
          <div className="flex items-center gap-3 md:gap-5">
            <Link 
              href="/contato" 
              className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-all-300 hidden md:block"
            >
              Contato
            </Link>
            <Button className="primary-button hidden md:flex px-6">
              Solicitar Cotação
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-8 md:py-16 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-5 mb-8 md:mb-12 animate-fadeIn">
              <div className="flex -space-x-2 md:-space-x-3 overflow-hidden mb-4 md:mb-6">
                <Avatar className="border-2 border-white h-10 w-10 md:h-12 md:w-12 shadow-sm hover:z-10 transition-all-300 bg-white">
                  <AvatarImage src="/seguradoras/porto-seguro.png" alt="Porto Seguro" />
                  <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold text-xs md:text-sm">PS</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white h-10 w-10 md:h-12 md:w-12 shadow-sm hover:z-10 transition-all-300 bg-white">
                  <AvatarImage src="/seguradoras/bradesco.png" alt="Bradesco Seguros" />
                  <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold text-xs md:text-sm">BS</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white h-10 w-10 md:h-12 md:w-12 shadow-sm hover:z-10 transition-all-300 bg-white">
                  <AvatarImage src="/seguradoras/liberty.png" alt="Liberty Seguros" />
                  <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold text-xs md:text-sm">LS</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white h-10 w-10 md:h-12 md:w-12 shadow-sm hover:z-10 transition-all-300 bg-white">
                  <AvatarImage src="/seguradoras/allianz.png" alt="Allianz" />
                  <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold text-xs md:text-sm">AL</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white h-10 w-10 md:h-12 md:w-12 shadow-sm hover:z-10 transition-all-300 bg-white">
                  <AvatarImage src="/seguradoras/tokio-marine.png" alt="Tokio Marine" />
                  <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold text-xs md:text-sm">TM</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white h-10 w-10 md:h-12 md:w-12 shadow-sm hover:z-10 transition-all-300 bg-white">
                  <AvatarImage src="/seguradoras/hdi.png" alt="HDI Seguros" />
                  <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold text-xs md:text-sm">HD</AvatarFallback>
                </Avatar>
              </div>
              <span className="px-3 py-1 md:px-4 md:py-1.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                Seguros para você e sua família
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 text-center max-w-4xl mx-auto mt-2 md:mt-4">
                Proteja seu futuro com a <span className="gradient-text">Dimarzio Seguros</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mt-4 md:mt-6">
                Oferecemos as melhores soluções em seguros, com atendimento personalizado e coberturas que se adaptam às suas necessidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-10 w-full sm:w-auto">
                <Button size="lg" className="primary-button h-12 md:h-14 px-4 md:px-6 rounded-full text-base w-full sm:w-auto">
                  Solicitar Cotação <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 h-12 md:h-14 px-4 md:px-6 rounded-full text-base w-full sm:w-auto">
                  Conheça nossos planos
                </Button>
              </div>
            </div>
            <div className="relative mx-auto max-w-5xl mt-8 md:mt-16">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-blue-500/20 blur-3xl -z-10 rounded-[40px] transform rotate-2"></div>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl card-hover">
                <Image
                  src="/hero-image.jpg"
                  alt="Dimarzio Seguros"
                  width={1200}
                  height={800}
                  className="w-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-2 md:py-3 px-4 md:px-6 shadow-lg">
                <div className="flex items-center gap-1 md:gap-2">
                  <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold text-gray-900 text-xs md:text-sm">5.0/5.0</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12 md:mt-20">
              <a href="#produtos" className="flex flex-col items-center animate-bounce text-blue-700">
                <span className="text-sm font-medium mb-2">Saiba mais</span>
                <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </section>
        <section id="produtos" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="px-3 py-1 md:px-4 md:py-1.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                Nossos Produtos
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">Soluções completas em seguros</h2>
              <p className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Proteja o que é mais importante para você com nossas soluções personalizadas em seguros
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-3xl md:text-4xl mb-4">🚗</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Seguro Auto</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  Proteção completa para seu veículo com as melhores coberturas e assistência 24h.
                </p>
                <Button variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 h-10 md:h-11">
                  Saiba mais
                </Button>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-3xl md:text-4xl mb-4">🏠</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Seguro Residencial</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  Tranquilidade para sua casa com coberturas contra incêndio, roubo e muito mais.
                </p>
                <Button variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 h-10 md:h-11">
                  Saiba mais
                </Button>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-3xl md:text-4xl mb-4">❤️</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Seguro de Vida</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  Garanta o futuro de quem você ama com as melhores coberturas do mercado.
                </p>
                <Button variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 h-10 md:h-11">
                  Saiba mais
                </Button>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-3xl md:text-4xl mb-4">🏢</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Seguro Empresarial</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  Proteção completa para seu negócio, incluindo patrimônio e responsabilidade civil.
                </p>
                <Button variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 h-10 md:h-11">
                  Saiba mais
                </Button>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-3xl md:text-4xl mb-4">✈️</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Seguro Viagem</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  Viaje com tranquilidade com cobertura médica internacional e assistência 24h.
                </p>
                <Button variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 h-10 md:h-11">
                  Saiba mais
                </Button>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-3xl md:text-4xl mb-4">🏥</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Seguro Saúde</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  Cuide da sua saúde com os melhores planos e rede credenciada de qualidade.
                </p>
                <Button variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 h-10 md:h-11">
                  Saiba mais
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="beneficios" className="py-16 md:py-24 bg-gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="px-3 py-1 md:px-4 md:py-1.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                Benefícios Exclusivos
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">Por que escolher a Dimarzio Seguros?</h2>
              <p className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Descubra as vantagens de ter a Dimarzio Seguros como sua parceira na proteção do seu patrimônio
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 md:p-8 bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-blue-100 text-xl md:text-2xl mb-4 md:mb-5 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-600">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white text-center">Resultados Comprovados</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-center">
              Nossa corretora ajuda clientes a encontrar a melhor proteção para seu patrimônio
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="depoimentos" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="px-3 py-1 md:px-4 md:py-1.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                Clientes Satisfeitos
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">O que dizem nossos clientes</h2>
              <p className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Veja o que nossos clientes falam sobre a experiência com a Dimarzio Seguros
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4 md:mb-6">
                    <Avatar className="h-12 w-12 md:h-14 md:w-14 mr-3 md:mr-4 border-2 border-blue-100">
                      <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold text-sm md:text-base">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
                      <div className="flex mt-1 md:mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3.5 w-3.5 md:h-4 md:w-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 italic">{testimonial.content}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 md:mt-12">
              <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 rounded-full h-10 md:h-11 px-4 md:px-6">
                Ver mais depoimentos
              </Button>
            </div>
          </div>
        </section>
        <section id="precos" className="py-16 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="px-3 py-1 md:px-4 md:py-1.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                Planos e Preços
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">Escolha o plano ideal para você</h2>
              <p className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Oferecemos diferentes opções de planos para atender às suas necessidades
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl ${
                    plan.highlighted ? "border-2 border-blue-600 relative transform -translate-y-0 lg:-translate-y-4" : ""
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-700 to-blue-600 text-white text-xs font-semibold px-4 md:px-5 py-1 md:py-2 rounded-full inline-block shadow-lg">
                      Mais Popular
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{plan.description}</p>
                  <div className="mb-4 md:mb-6">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                    <span className="text-sm md:text-base text-gray-500">/mês</span>
                  </div>
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-700 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full rounded-full h-10 md:h-12 text-sm md:text-base ${
                      plan.highlighted ? "primary-button" : "bg-gray-800 hover:bg-gray-900 text-white"
                    }`}
                  >
                    Contratar Agora
                  </Button>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 md:mt-16 bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md max-w-3xl mx-auto">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Precisa de um plano personalizado?</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                Entre em contato com nossa equipe para criarmos uma solução sob medida para você.
              </p>
              <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 rounded-full h-10 md:h-11 px-4 md:px-6">
                Solicitar proposta personalizada
              </Button>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Pronto para proteger o que é mais importante?</h2>
              <p className="text-base md:text-lg text-blue-100 mb-8 md:mb-10">
                Fale com nossos especialistas e descubra como podemos ajudar você a encontrar o seguro perfeito para suas necessidades.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 h-10 md:h-12 px-4 md:px-6 rounded-full w-full sm:w-auto">
                  Solicitar Cotação
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-10 md:h-12 px-4 md:px-6 rounded-full w-full sm:w-auto">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 md:py-12 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="relative h-8 w-8 md:h-10 md:w-10 overflow-hidden">
                  <Image 
                    src="/logo.svg" 
                    alt="Dimarzio Seguros Logo" 
                    width={40} 
                    height={40} 
                    className="h-full w-full brightness-0 invert" 
                  />
                </div>
                <span className="text-lg md:text-xl font-bold">Dimarzio Seguros</span>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Sua segurança é nossa prioridade. Conte com a Dimarzio Seguros para proteger o que é mais importante para você.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5 md:h-6 md:w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5 md:h-6 md:w-6" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Produtos</h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Seguro Auto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Seguro Residencial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Seguro de Vida
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Seguro Empresarial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Seguro Viagem
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Seguro Saúde
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Empresa</h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Nossos Valores
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Trabalhe Conosco
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Imprensa
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Contato</h4>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-gray-400 mr-2 md:mr-3 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-400">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-gray-400 mr-2 md:mr-3" />
                  <span className="text-sm md:text-base text-gray-400">(11) 3000-0000</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-gray-400 mr-2 md:mr-3" />
                  <span className="text-sm md:text-base text-gray-400">contato@dimarzio.com.br</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-8 md:pt-12 text-center">
            <p className="text-sm md:text-base text-gray-400">
              © {new Date().getFullYear()} Dimarzio Seguros. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
