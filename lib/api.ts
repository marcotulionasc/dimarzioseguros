import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  cellPhone: string;
  product: string;
  interessePrincipal: string;
  tenantId: number;
  createdAt: string;
  updatedAt: string;
  [key: string]: string | number;
}

const API_URL = 'https://backend-ingressar.onrender.com/metropole/v1/send';

export async function submitForm(data: Partial<FormData>) {
  try {
    const formData: FormData = {
      ...data,
      product: 'dimarzioseguros',
      tenantId: 6,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      name: data.name || '',
      email: data.email || '',
      cellPhone: data.cellPhone || '',
      interessePrincipal: data.interessePrincipal || '',
    };

    // Fill any missing fields with empty strings
    for (let i = 1; i <= 20; i++) {
      const fieldName = `field${i.toString().padStart(2, '0')}`;
      formData[fieldName] = formData[fieldName] || '';
    }

    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}

// Helper function to map form fields to API fields based on insurance type
export function mapFormFieldsToApi(formData: Record<string, string>, insuranceType: string) {
  const baseData = {
    name: formData.nome || '',
    email: formData.email || '',
    cellPhone: formData.telefone || formData.whatsapp || '',
    interessePrincipal: insuranceType,
  };

  // Map specific fields based on insurance type
  switch (insuranceType) {
    case 'auto':
      return {
        ...baseData,
        field01: formData.tipo || '', // carro/moto
        field02: formData.ano || '',
        field03: formData.cidade || '',
      };

    case 'vida':
      return {
        ...baseData,
        field01: formData.idade || '',
        field02: formData.estadoCivil || '',
      };

    case 'residencial':
      return {
        ...baseData,
        field01: formData.tipoImovel || '', // casa/apartamento
        field02: formData.cidade || '',
      };

    case 'saude':
      return {
        ...baseData,
        field01: formData.cidade || '',
      };

    case 'portateis':
      return {
        ...baseData,
        field01: formData.equipamento || '',
        field02: formData.cidade || '',
      };

    case 'rural':
      return {
        ...baseData,
        field01: formData.atividade || '', // agricola/pecuaria
        field02: formData.cidade || '',
      };

    case 'fianca':
      return {
        ...baseData,
        field01: formData.tipoImovel || '', // residencial/comercial
        field02: formData.cidade || '',
        field03: formData.valorLocacao || '',
      };

    case 'rc-profissional':
      return {
        ...baseData,
        field01: formData.profissao || '',
        field02: formData.cidade || '',
      };

    case 'consorcios':
      return {
        ...baseData,
        field01: formData.interesse || '', // imovel/terreno/automovel/moto
      };

    default:
      return baseData;
  }
} 