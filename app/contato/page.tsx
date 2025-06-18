'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { mapFormFieldsToApi, submitForm } from '@/lib/api'

export default function ContatoPage() {
  return (
    <main className="container header-spacing py-8 space-y-8">
      <h1 className="text-3xl font-bold">Fale Conosco</h1>
      <form 
        className="space-y-4" 
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const data = Object.fromEntries(formData.entries());
          
          try {
            const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'contato');
            await submitForm(mappedData);
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            (e.target as HTMLFormElement).reset();
          } catch (error) {
            console.error('Error:', error);
            alert('Erro ao enviar mensagem. Por favor, tente novamente.');
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
  )
}

