import { useState } from 'react'
import type { ContactFormData, ContactApiResponse, FormState } from '@/types/contact'

export function useContactForm() {
  const [state, setState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  })

  const submitForm = async (data: ContactFormData): Promise<boolean> => {
    setState({ isSubmitting: true, isSuccess: false, error: null })
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      const result: ContactApiResponse = await response.json()
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Wystąpił błąd')
      }
      
      setState({ isSubmitting: false, isSuccess: true, error: null })
      return true
      
    } catch (error) {
      setState({ 
        isSubmitting: false, 
        isSuccess: false, 
        error: error instanceof Error ? error.message : 'Wystąpił błąd' 
      })
      return false
    }
  }

  const reset = () => {
    setState({ isSubmitting: false, isSuccess: false, error: null })
  }

  return { ...state, submitForm, reset }
}
