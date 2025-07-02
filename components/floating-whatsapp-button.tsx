'use client'
import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Ensure button appears after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="whatsapp-floating-button animate-fade-in">
      <a
        href="https://wa.me/5519932940655?text=Olá! Gostaria de saber mais sobre os seguros da Dimarzio."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative inline-flex items-center justify-center"
      >
        {/* Main button */}
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 hover:scale-110 transition-all duration-300 z-10">
          <MessageCircle className="w-6 h-6" />
        </div>
        
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping scale-110"></div>
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-10 animate-ping scale-125 animation-delay-1000"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
          Falar no WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-white"></div>
        </div>
      </a>
    </div>
  )
}
