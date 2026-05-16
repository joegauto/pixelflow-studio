import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  whatsapp: z.string().optional(),
  interest: z.string().min(1),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = leadSchema.parse(body)

    if (resend && process.env.ADMIN_EMAIL) {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'noreply@pixelflowstudio.com',
        to: process.env.ADMIN_EMAIL,
        subject: `Nuevo contacto: ${validatedData.name}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>WhatsApp:</strong> ${validatedData.whatsapp || 'No proporcionado'}</p>
          <p><strong>Interés:</strong> ${validatedData.interest}</p>
          <p><strong>Mensaje:</strong> ${validatedData.message || 'Sin mensaje'}</p>
        `
      }).catch(console.error)
    }

    return NextResponse.json({ success: true, message: 'Mensaje enviado correctamente' })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: 'Datos inválidos' }, { status: 400 })
    }
    return NextResponse.json({ success: false, message: 'Error interno' }, { status: 500 })
  }
}
