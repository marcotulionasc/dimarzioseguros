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

// API Integration for Metropole
interface MetropoleApiData {
  name: string;
  email: string;
  cellPhone: string;
  product: string;
  interessePrincipal: string;
  field01?: string;
  field02?: string;
  field03: string; // Always "NOVO"
  field04?: string;
  field05?: string;
  field06?: string;
  field07?: string;
  field08?: string;
  field09?: string;
  field10?: string;
  field11?: string;
  field12?: string;
  field13?: string;
  field14?: string;
  field15?: string;
  field16?: string;
  field17?: string;
  field18?: string;
  field19?: string;
  field20?: string;
  createdAt: string;
  updatedAt: string;
  tenantId: number;
}

export function mapFormFieldsToApi(formData: Record<string, string>, productType: string): MetropoleApiData {
  const now = new Date().toISOString();
  
  return {
    name: formData.nome || formData.name || '',
    email: formData.email || '',
    cellPhone: formData.telefone || formData.whatsapp || formData.phone || '',
    product: 'dimarzioseguros',
    interessePrincipal: productType,
    field01: formData.idade || '',
    field02: formData.cidade || formData.location || '',
    field03: 'NOVO',
    field04: formData.estadoCivil || formData.civilStatus || '',
    field05: formData.dependentes || formData.dependents || '',
    field06: formData.tipoImovel || formData.propertyType || '',
    field07: formData.valorLocacao || formData.rentValue || '',
    field08: formData.tipoVeiculo || formData.vehicleType || '',
    field09: formData.anoVeiculo || formData.vehicleYear || '',
    field10: formData.profissao || formData.profession || '',
    field11: formData.equipamento || formData.equipment || '',
    field12: formData.destino || formData.destination || '',
    field13: formData.dataIda || formData.departureDate || '',
    field14: formData.dataVolta || formData.returnDate || '',
    field15: formData.atividade || formData.activity || '',
    field16: formData.nomeEmpresa || formData.companyName || '',
    field17: formData.mensagem || formData.message || '',
    field18: formData.tipo || formData.type || '',
    field19: formData.extra1 || '',
    field20: formData.extra2 || '',
    createdAt: now,
    updatedAt: now,
    tenantId: 6
  };
}

export async function submitForm(data: MetropoleApiData): Promise<void> {
  try {
    const response = await fetch('https://backend-ingressar.onrender.com/metropole/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Form submitted successfully:', result);
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
} 