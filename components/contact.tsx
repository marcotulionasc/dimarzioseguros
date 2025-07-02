'use client'

import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { useFeedbackModal } from '@/hooks/use-feedback-modal'
import { FeedbackModal } from '@/components/ui/feedback-modal'
import { generateWhatsAppURL } from '@/lib/utils'

interface ContactProps {
  title: string;
  subtitle: string;
  description: string;
}

export function Contact({ title, subtitle, description }: ContactProps) {
  const { feedback, showSuccess, showError, closeFeedback } = useFeedbackModal()

  return (
    <>
      <section id="contact" className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <h3 className="text-2xl font-semibold mb-4 text-primary">{subtitle}</h3>
            <p className="text-gray-600 mb-8">{description}</p>
          </div>

          <form 
            className="max-w-lg mx-auto"
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData.entries());
              
              try {
                // 1. PRIMEIRO: Salvar lead na base através da API
                const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'portateis');
                await submitForm(mappedData);
                console.log('✅ Lead salvo com sucesso na base');
                
                // 2. SEGUNDO: Só após salvar com sucesso, mostrar mensagem e preparar redirecionamento
                showSuccess(
                  'Obrigado! Sua solicitação foi enviada!',
                  'Lead salvo com sucesso! Em 3 segundos você será redirecionado para o WhatsApp.'
                );
                (e.target as HTMLFormElement).reset();
                
                // 3. TERCEIRO: Redirecionar para WhatsApp apenas após confirmação que salvou na base
                setTimeout(() => {
                  const whatsappURL = generateWhatsAppURL(data as Record<string, string>, 'portateis');
                  window.open(whatsappURL, '_blank');
                  console.log('✅ Redirecionando para WhatsApp após salvar lead');
                }, 3000);
              } catch (error) {
                console.error('Error:', error);
                showError(
                  'Ops! Algo deu errado',
                  'Não conseguimos processar sua solicitação no momento. Por favor, tente novamente ou entre em contato pelo telefone (19) 3294-0655.'
                );
              }
            }}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                name="nome"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="telefone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="equipment" className="block text-gray-700 font-medium mb-2">
                Equipamento
              </label>
              <select
                id="equipment"
                name="equipamento"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Selecione o tipo de equipamento</option>
                <option value="celular">Celular</option>
                <option value="notebook">Notebook</option>
                <option value="camera">Câmera</option>
                <option value="tablet">Tablet</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                Cidade e Estado
              </label>
              <input
                type="text"
                id="location"
                name="cidade"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Enviar
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              * Após salvar o lead em nossa base, você será redirecionado para o WhatsApp em 3 segundos para dar continuidade ao atendimento personalizado.
            </p>
          </form>
        </div>
      </section>

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={feedback.isOpen}
        onClose={closeFeedback}
        type={feedback.type}
        title={feedback.title}
        message={feedback.message}
      />
    </>
  );
} 