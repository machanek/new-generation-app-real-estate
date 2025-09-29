import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

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

    // Zapisz do Payload CMS
    const payload = await getPayload({ config })
    const contactMessage = await payload.create({
      collection: 'contact-messages',
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email,
        subject: body.subject || 'Inne',
        message: body.message,
        privacy: body.privacy,
        marketing: body.marketing || false,
        status: 'new',
      },
    })

    // Wyślij email (Resend przez Payload) - tylko jeśli API key jest prawidłowy
    try {
      await payload.sendEmail({
        to: 'data.grzegorz@gmail.com',
        subject: `Nowe zapytanie: ${body.subject || 'Formularz kontaktowy'}`,
        html: `
          <h3>Nowe zapytanie z formularza kontaktowego</h3>
          <p><strong>Imię:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Telefon:</strong> ${body.phone || 'Nie podano'}</p>
          <p><strong>Temat:</strong> ${body.subject || 'Nie podano'}</p>
          <p><strong>Wiadomość:</strong></p>
          <p>${body.message}</p>
          <hr>
          <p><small>ID: ${contactMessage.id}</small></p>
        `,
      })
    } catch (emailError) {
      console.warn('Email sending failed:', emailError)
      // Kontynuuj bez wysyłania emaila - dane zostały zapisane
    }

    return NextResponse.json({
      success: true,
      message: 'Wiadomość została wysłana',
      id: contactMessage.id
    })

  } catch (error) {
    console.error('Contact form error:', error)
    console.error('Error details:', JSON.stringify(error, null, 2))
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania wiadomości', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
