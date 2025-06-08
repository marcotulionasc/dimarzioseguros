export type Product = {
  slug: string
  title: string
  description: string
  who: string
  benefits: string[]
  category: 'Empresariais' | 'Pessoais'
}

export const products: Product[] = [
  { 
    slug: 'consorcio',
    title: 'Consórcio',
    description: 'Compra planejada de bens sem pagamento de juros.',
    who: 'Quem deseja adquirir imóvel ou veículo de forma programada.',
    benefits: [
      'Sem juros, apenas taxa de administração',
      'Planejamento financeiro de longo prazo',
      'Diversas opções de carta de crédito'
    ],
    category: 'Pessoais'
  },
  {
    slug: 'saude',
    title: 'Seguro Saúde',
    description: 'Proteção para despesas médicas e hospitalares.',
    who: 'Indicado para famílias e empresas que buscam atendimento rápido e de qualidade.',
    benefits: [
      'Cobertura nacional',
      'Rede credenciada ampla',
      'Planos personalizados'
    ],
    category: 'Pessoais'
  },
  {
    slug: 'vida',
    title: 'Seguro de Vida',
    description: 'Garantia financeira para familiares em caso de falecimento ou invalidez.',
    who: 'Recomendado para quem deseja proteger quem ama.',
    benefits: [
      'Tranquilidade para a família',
      'Coberturas adicionais de invalidez e doenças graves',
      'Indenização sem burocracia'
    ],
    category: 'Pessoais'
  },
  {
    slug: 'empresarial',
    title: 'Seguro Empresarial',
    description: 'Proteção completa para o patrimônio da empresa.',
    who: 'Empresas de todos os portes que buscam segurança contra imprevistos.',
    benefits: [
      'Coberturas flexíveis conforme o ramo',
      'Proteção contra incêndio, roubo e responsabilidade civil',
      'Assistência 24 horas'
    ],
    category: 'Empresariais'
  },
  {
    slug: 'automovel',
    title: 'Seguro Automóvel',
    description: 'Proteção contra danos, roubo e assistência para seu veículo.',
    who: 'Motoristas que querem dirigir com tranquilidade.',
    benefits: [
      'Cobertura para colisão, roubo e furto',
      'Carro reserva e assistência 24h',
      'Opções com franquia reduzida'
    ],
    category: 'Pessoais'
  },
  {
    slug: 'residencial',
    title: 'Seguro Residencial',
    description: 'Protege sua casa ou apartamento contra diversos riscos.',
    who: 'Proprietários ou inquilinos que desejam tranquilidade.',
    benefits: [
      'Cobertura para incêndio, roubo e danos elétricos',
      'Assistência para pequenos reparos',
      'Planos sob medida'
    ],
    category: 'Pessoais'
  },
  {
    slug: 'viagem',
    title: 'Seguro Viagem',
    description: 'Assistência médica e cobertura de imprevistos em viagens.',
    who: 'Viajantes a lazer ou trabalho, no Brasil e exterior.',
    benefits: [
      'Atendimento 24h em português',
      'Cobertura para extravio de bagagem',
      'Despesas médicas e odontológicas'
    ],
    category: 'Pessoais'
  },
  {
    slug: 'rc-profissional',
    title: 'Seguro RC Profissional',
    description: 'Protege profissionais contra danos causados a terceiros.',
    who: 'Indispensável para profissionais liberais e empresas de serviços.',
    benefits: [
      'Ampara processos por erro ou omissão',
      'Resguarda o patrimônio pessoal',
      'Planos específicos por profissão'
    ],
    category: 'Empresariais'
  },
  {
    slug: 'rural',
    title: 'Seguro Rural',
    description: 'Cobertura para lavouras, rebanhos e equipamentos agrícolas.',
    who: 'Produtores rurais que buscam proteger sua produção.',
    benefits: [
      'Ampara perdas por eventos climáticos',
      'Cobertura para máquinas e equipamentos',
      'Auxílio na continuidade da produção'
    ],
    category: 'Empresariais'
  },
  {
    slug: 'fianca-locaticia',
    title: 'Seguro Fiança Locatícia',
    description: 'Substitui o fiador e garante o pagamento do aluguel.',
    who: 'Locatários que não possuem fiador ou caução.',
    benefits: [
      'Facilidade na aprovação do aluguel',
      'Garante pagamento ao proprietário',
      'Parcelamento do prêmio'
    ],
    category: 'Pessoais'
  },
  {
    slug: 'portateis',
    title: 'Seguro Portáteis',
    description: 'Proteção para celulares, notebooks e eletrônicos em geral.',
    who: 'Usuários que dependem de equipamentos portáteis.',
    benefits: [
      'Cobertura contra roubo e danos acidentais',
      'Assistência para reparos',
      'Vigência nacional e internacional'
    ],
    category: 'Pessoais'
  },
  {
    slug: 'fiduciario',
    title: 'Seguro Fiduciário',
    description: 'Garante o cumprimento de obrigações contratuais e financeiras.',
    who: 'Empresas que participam de licitações e contratos públicos.',
    benefits: [
      'Segurança em contratos de grande valor',
      'Reduz custos de garantias bancárias',
      'Agilidade na emissão da apólice'
    ],
    category: 'Empresariais'
  }
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

