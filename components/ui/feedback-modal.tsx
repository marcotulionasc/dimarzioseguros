'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'
import { Button } from './button'

interface FeedbackModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'success' | 'error'
  title: string
  message: string
}

export function FeedbackModal({ isOpen, onClose, type, title, message }: FeedbackModalProps) {
  const isSuccess = type === 'success'
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className={`relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden ${
                isSuccess ? 'border-t-4 border-green-500' : 'border-t-4 border-red-500'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Content */}
              <div className="p-8 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isSuccess ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {isSuccess ? (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-600" />
                  )}
                </div>
                
                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 ${
                  isSuccess ? 'text-green-700' : 'text-red-700'
                }`}>
                  {title}
                </h3>
                
                {/* Message */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {message}
                </p>
                
                {/* Success specific content */}
                {isSuccess && (
                  <div className="space-y-4 mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <p className="text-blue-800 font-medium">
                        🎯 Nossa equipe entrará em contato em breve
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <p className="text-green-800 font-medium">
                        📞 Atendimento: (19) 3294-0655
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Action Button */}
                <Button
                  onClick={onClose}
                  className={`w-full py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    isSuccess 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {isSuccess ? '✨ Perfeito!' : '🔄 Tentar Novamente'}
                </Button>
              </div>
              
              {/* Decorative Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className={`w-full h-full rounded-full ${
                  isSuccess ? 'bg-green-500' : 'bg-red-500'
                }`} />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
} 