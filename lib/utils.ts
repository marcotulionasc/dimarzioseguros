import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// WhatsApp helper function
export function generateWhatsAppURL(data: Record<string, string>, formType: string): string {
  const baseURL = 'https://wa.me/551932940655'
  const nome = data.nome || 'Cliente'
  
  let message = `Olá! Sou ${nome} e acabei de preencher o formulário no site da Dimarzio Seguros.`
  
  switch (formType) {
    case 'auto':
      message += `\n\nEstou interessado em seguro automotivo:\n• Veículo: ${data.veiculo || 'Não informado'}\n• Ano: ${data.ano || 'Não informado'}\n• Cidade: ${data.cidade || 'Não informado'}`
      break
    case 'vida':
      message += `\n\nEstou interessado em seguro de vida:\n• Idade: ${data.idade || 'Não informado'}\n• Estado civil: ${data.estadoCivil || 'Não informado'}\n• Dependentes: ${data.dependentes || 'Não informado'}`
      break
    case 'residencial':
      message += `\n\nEstou interessado em seguro residencial:\n• Tipo: ${data.tipoImovel || 'Não informado'}\n• Cidade: ${data.cidade || 'Não informado'}`
      break
    case 'empresarial':
      message += `\n\nEstou interessado em seguro empresarial:\n• Empresa: ${data.nomeEmpresa || 'Não informado'}\n• Segmento: ${data.segmento || 'Não informado'}\n• Cidade: ${data.cidade || 'Não informado'}`
      break
    case 'viagem':
      message += `\n\nEstou interessado em seguro viagem:\n• Destino: ${data.destino || 'Não informado'}\n• Data ida: ${data.dataIda || 'Não informado'}\n• Data volta: ${data.dataVolta || 'Não informado'}`
      break
    case 'saude':
      message += `\n\nEstou interessado em seguro saúde:\n• Cidade: ${data.cidade || 'Não informado'}`
      break
    case 'rc-profissional':
      message += `\n\nEstou interessado em seguro RC profissional:\n• Profissão: ${data.profissao || 'Não informado'}\n• Cidade: ${data.cidade || 'Não informado'}`
      break
    case 'fiduciario':
      message += `\n\nEstou interessado em seguro fiduciário:\n• Empresa: ${data.nomeEmpresa || 'Não informado'}\n• Valor: ${data.valor || 'Não informado'}`
      break
    case 'rural':
      message += `\n\nEstou interessado em seguro rural:\n• Propriedade: ${data.propriedade || 'Não informado'}\n• Cidade: ${data.cidade || 'Não informado'}`
      break
    case 'portateis':
      message += `\n\nEstou interessado em seguro para equipamentos portáteis:\n• Equipamento: ${data.equipamento || 'Não informado'}\n• Cidade: ${data.cidade || 'Não informado'}`
      break
    case 'fianca-locaticia':
      message += `\n\nEstou interessado em seguro fiança locatícia:\n• Valor aluguel: ${data.valorAluguel || 'Não informado'}\n• Cidade: ${data.cidade || 'Não informado'}`
      break
    case 'consorcio':
      message += `\n\nEstou interessado em consórcio:\n• Bem: ${data.bem || 'Não informado'}\n• Valor: ${data.valor || 'Não informado'}`
      break
    case 'contato':
    default:
      if (data.tipo) message += `\n\nTipo de interesse: ${data.tipo}`
      if (data.mensagem) message += `\n\nMensagem: ${data.mensagem}`
      break
  }
  
  if (data.telefone) {
    message += `\n\nMeu WhatsApp: ${data.telefone}`
  }
  
  message += `\n\nPor favor, entrem em contato para conversarmos sobre as opções disponíveis.`
  
  return `${baseURL}?text=${encodeURIComponent(message)}`
}

// Toast helper functions for form feedback
export const showToast = {
  success: (toast: any, title: string, description?: string) => {
    toast({
      variant: "success",
      title,
      description,
      duration: 4000,
    })
  },
  error: (toast: any, title: string, description?: string) => {
    toast({
      variant: "destructive", 
      title,
      description,
      duration: 5000,
    })
  },
  info: (toast: any, title: string, description?: string) => {
    toast({
      variant: "info",
      title,
      description,
      duration: 4000,
    })
  },
  warning: (toast: any, title: string, description?: string) => {
    toast({
      variant: "warning",
      title,
      description,
      duration: 4000,
    })
  }
}
