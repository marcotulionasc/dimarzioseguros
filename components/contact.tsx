'use client'

import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { useFeedbackModal } from '@/hooks/use-feedback-modal'
import { FeedbackModal } from '@/components/ui/feedback-modal'

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
                const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'portateis');
                await submitForm(mappedData);
                showSuccess(
                  'Obrigado! Sua solicitação foi enviada!',
                  'Recebemos sua solicitação de cotação para equipamentos portáteis. Nossa equipe entrará em contato em breve com uma proposta personalizada!'
                );
                (e.target as HTMLFormElement).reset();
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