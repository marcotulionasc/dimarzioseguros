'use client'

import { useState, useCallback } from 'react'

interface FeedbackState {
  isOpen: boolean
  type: 'success' | 'error'
  title: string
  message: string
}

export function useFeedbackModal() {
  const [feedback, setFeedback] = useState<FeedbackState>({
    isOpen: false,
    type: 'success',
    title: '',
    message: ''
  })

  const showSuccess = useCallback((title: string, message: string) => {
    setFeedback({
      isOpen: true,
      type: 'success',
      title,
      message
    })
  }, [])

  const showError = useCallback((title: string, message: string) => {
    setFeedback({
      isOpen: true,
      type: 'error',
      title,
      message
    })
  }, [])

  const closeFeedback = useCallback(() => {
    setFeedback(prev => ({ ...prev, isOpen: false }))
  }, [])

  return {
    feedback,
    showSuccess,
    showError,
    closeFeedback
  }
} 