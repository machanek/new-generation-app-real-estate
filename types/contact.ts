export interface ContactFormData {
  name: string
  phone: string
  email: string
  subject?: string
  message: string
  privacy: boolean
  marketing?: boolean
}

export interface ContactApiResponse {
  success: boolean
  message: string
  id?: string
  error?: string
}

export interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}
