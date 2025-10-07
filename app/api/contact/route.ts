import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  phone: string
  email: string
  subject?: string
  message: string
  privacy: boolean
  marketing?: boolean
}

export async function POST(request: NextRequest) {
  try {
    // Parse i waliduj dane
    const body: ContactFormData = await request.json()
    
    // Podstawowa walidacja
    if (!body.name || !body.email || !body.message || !body.privacy) {
      return NextResponse.json(
        { error: 'Brakuje wymaganych pól' },
        { status: 400 }
      )
    }
    
    // Tymczasowo wyłączone - Payload CMS integration
    // const payload = await getPayload({ config })
    
    return NextResponse.json({
      success: true,
      message: 'Wiadomość została wysłana (demo)',
      id: 'demo-' + Date.now()
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania wiadomości' },
      { status: 500 }
    )
  }
}