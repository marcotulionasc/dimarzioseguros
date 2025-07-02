'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { useFeedbackModal } from '@/hooks/use-feedback-modal'
import { FeedbackModal } from '@/components/ui/feedback-modal'
import { generateWhatsAppURL } from '@/lib/utils'

export default function ContatoPage() {
  const { feedback, showSuccess, showError, closeFeedback } = useFeedbackModal()

  return (
    <>
      <main className="container header-spacing py-8 space-y-8">
        <h1 className="text-3xl">Fale Conosco</h1>
        <form 
          className="space-y-4" 
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            
            try {
              const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'contato');
              await submitForm(mappedData);
              showSuccess(
                'Obrigado pelo seu contato!',
                'Recebemos sua mensagem e agora você será redirecionado para o WhatsApp para dar continuidade ao atendimento.'
              );
              (e.target as HTMLFormElement).reset();
              
              // Redirecionar para WhatsApp após 2 segundos
              setTimeout(() => {
                const whatsappURL = generateWhatsAppURL(data as Record<string, string>, 'contato');
                window.open(whatsappURL, '_blank');
              }, 2000);
            } catch (error) {
              console.error('Error:', error);
              showError(
                'Ops! Algo deu errado',
                'Não conseguimos enviar sua mensagem no momento. Por favor, tente novamente ou entre em contato pelo telefone (19) 3294-0655.'
              );
            }
          }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <input name="nome" required placeholder="Nome" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <input type="email" name="email" required placeholder="E-mail" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <input name="telefone" placeholder="Telefone" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <input name="tipo" placeholder="Tipo de seguro" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <textarea name="mensagem" rows={4} placeholder="Mensagem" className="w-full border rounded-md p-2" />
          </div>
          <Button type="submit" className="primary-button">Enviar</Button>
          <p className="text-xs text-gray-500 mt-2">
            * Após o envio, você será redirecionado para o WhatsApp para dar continuidade ao atendimento personalizado.
          </p>
        </form>
        <div className="space-y-1 text-sm">
          <div>Rua Cumaru, 219 - sala 16, Edifício Laser, Alphaville, Campinas - SP, 13098-324</div>
          <div>(19) 3294-0655</div>
          <div>
            <a href="mailto:contato@dimarzioseguros.com.br" className="underline">contato@dimarzioseguros.com.br</a>
          </div>
          <div>
            <a href="https://www.instagram.com/dimarzioseguros/" className="underline" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </main>

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={feedback.isOpen}
        onClose={closeFeedback}
        type={feedback.type}
        title={feedback.title}
        message={feedback.message}
      />
    </>
  )
}

