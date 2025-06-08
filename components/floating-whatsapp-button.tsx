'use client'
import { MessageCircle } from 'lucide-react'

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/551932940655"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-4 right-4 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
