'use client'

import { Mail, MapPin, Phone, Instagram, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { mapFormFieldsToApi, submitForm } from '@/lib/api'
import { useFeedbackModal } from '@/hooks/use-feedback-modal'
import { FeedbackModal } from '@/components/ui/feedback-modal'
import { generateWhatsAppURL } from '@/lib/utils'

interface ContactInfo {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Rua Cumaru 219 - sala 16, Edifício Laser, Alphaville, Campinas - SP 13098-324',
    href: 'https://goo.gl/maps/your-address'
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(19) 3294-0655',
    href: 'tel:+551932940655'
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@dimarzioseguros.com.br',
    href: 'mailto:contato@dimarzioseguros.com.br'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@dimarzioseguros',
    href: 'https://www.instagram.com/dimarzioseguros/'
  }
]

export function ContactSection() {
  const { feedback, showSuccess, showError, closeFeedback } = useFeedbackModal()

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 text-left md:text-center">
              Fale Conosco
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl md:mx-auto text-left md:text-center">
              Estamos aqui para esclarecer suas dúvidas e ajudar você a encontrar a proteção ideal.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-dimarzio border border-neutral-100"
            >
              <form 
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = Object.fromEntries(formData.entries());
                  
                  try {
                    // 1. PRIMEIRO: Salvar lead na base através da API
                    const mappedData = mapFormFieldsToApi(data as Record<string, string>, 'contato');
                    await submitForm(mappedData);
                    console.log('✅ Lead salvo com sucesso na base');
                    
                    // 2. SEGUNDO: Só após salvar com sucesso, mostrar mensagem e preparar redirecionamento
                    showSuccess(
                      'Obrigado pela mensagem!',
                                             'Lead salvo com sucesso! Em 1,5 segundos você será redirecionado para o WhatsApp.'
                    );
                    (e.target as HTMLFormElement).reset();
                    
                                         // 3. TERCEIRO: Redirecionar FORÇADO para WhatsApp imediatamente após salvar
                     setTimeout(() => {
                       const whatsappURL = generateWhatsAppURL(data as Record<string, string>, 'contato');
                       window.location.href = whatsappURL; // Redirecionamento forçado na mesma aba
                       console.log('🚀 REDIRECIONAMENTO FORÇADO para WhatsApp após salvar lead');
                     }, 1500);
                  } catch (error) {
                    console.error('Error:', error);
                    showError(
                      'Ops! Algo deu errado',
                      'Não conseguimos enviar sua mensagem no momento. Por favor, tente novamente ou entre em contato pelo telefone (19) 3294-0655.'
                    );
                  }
                }}
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="nome"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="telefone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="insurance" className="block text-sm font-medium text-gray-900 mb-2">
                      Tipo de Seguro
                    </label>
                    <select
                      id="insurance"
                      name="tipo"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecione um tipo</option>
                      <option value="auto">Seguro Auto</option>
                      <option value="vida">Seguro de Vida</option>
                      <option value="residencial">Seguro Residencial</option>
                      <option value="empresarial">Seguro Empresarial</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="mensagem"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  Enviar Mensagem
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  * Após salvar o lead em nossa base, você será redirecionado para o WhatsApp em 3 segundos para dar continuidade ao atendimento personalizado.
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:sticky lg:top-8 space-y-6"
            >
              <div className="bg-white rounded-lg p-8 shadow-dimarzio border border-neutral-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.icon === Instagram ? "_blank" : undefined}
                      rel={item.icon === Instagram ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-gray-700 group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-lg p-8 text-white">
                <h3 className="text-2xl font-semibold text-white mb-4">Horário de Atendimento</h3>
                <div className="space-y-2">
                  <p className="text-white/90">Segunda a Sexta</p>
                  <p className="text-xl font-semibold text-white">08:00 - 17:00</p>
                  <p className="text-sm text-white/80 mt-4">
                    Atendimento 24h para emergências através do nosso telefone.
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/90">
                    <strong>CNPJ:</strong> 10.894.914/0001-05
                  </p>
                  <p className="text-sm text-white/90 mt-2">
                    Dimarzio Seguros, 20 anos protegendo com clareza.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
  )
}
