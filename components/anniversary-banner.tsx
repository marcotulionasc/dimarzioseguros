'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, Calendar, Trophy } from 'lucide-react'

interface AnniversaryBannerProps {
  variant?: 'default' | 'minimal' | 'floating'
  className?: string
}

export function AnniversaryBanner({ variant = 'default', className = '' }: AnniversaryBannerProps) {
  if (variant === 'minimal') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={`inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full px-4 py-2 ${className}`}
      >
        <Award className="w-4 h-4 text-amber-600" />
        <span className="text-sm font-bold text-amber-700">20 Anos</span>
      </motion.div>
    )
  }

  if (variant === 'floating') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className={`fixed bottom-20 right-4 z-40 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer ${className}`}
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <Trophy className="w-5 h-5" />
            <Sparkles className="w-2 h-2 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="text-sm font-bold">20</span>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`relative overflow-hidden bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Efeitos de fundo */}
      <div className="absolute top-2 left-2 w-20 h-20 bg-amber-300/20 rounded-full blur-xl" />
      <div className="absolute bottom-2 right-2 w-16 h-16 bg-orange-300/20 rounded-full blur-xl" />
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl">
            <Award className="w-8 h-8 text-amber-600" />
            <div className="absolute -top-1 -right-1 flex">
              <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" />
              <Sparkles className="w-2 h-2 text-orange-500 animate-bounce delay-150" />
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                20 ANOS
              </span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
              </motion.div>
            </div>
            <p className="text-amber-700 font-medium">
              Celebrando duas décadas de confiança e proteção
            </p>
          </div>
        </div>
        
        <div className="hidden sm:flex items-center gap-2 text-amber-600">
          <Calendar className="w-5 h-5" />
          <div className="text-right">
            <div className="text-sm font-bold">2004 - 2024</div>
            <div className="text-xs">Desde sempre com você</div>
          </div>
        </div>
      </div>
      
      {/* Brilho animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        animate={{ x: [-200, 400] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      />
    </motion.div>
  )
} 