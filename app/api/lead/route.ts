import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { Resend } from 'resend'
import { z } from 'zod'

const prisma = new PrismaClient()
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const leadSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  whatsapp: z.string().optional(),
  interest: z.string().min(1, 'Debe seleccionar un servicio de interés'),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = leadSchema.parse(body)
    
    // Save to database
    const lead = await prisma.lead.create({
      data: validatedData
    })

    // Send notification email to admin
    if (resend && process.env.ADMIN_EMAIL) {
      try {
        await resend.emails.send({
          from: process.env.FROM_EMAIL || 'noreply@flujopy.com',
          to: process.env.ADMIN_EMAIL,
          subject: `Nuevo lead: ${validatedData.name}`,
          html: `
            <h2>Nuevo Lead Recibido</h2>
            <p><strong>Nombre:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>WhatsApp:</strong> ${validatedData.whatsapp || 'No proporcionado'}</p>
            <p><strong>Interés:</strong> ${validatedData.interest}</p>
            <p><strong>Mensaje:</strong> ${validatedData.message || 'Sin mensaje'}</p>
            <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-PY')}</p>
          `
        })
      } catch (emailError) {
        console.error('Error sending admin notification:', emailError)
      }
    }

    // Send confirmation email to user
    if (resend) {
      try {
        await resend.emails.send({
          from: process.env.FROM_EMAIL || 'noreply@flujopy.com',
          to: validatedData.email,
          subject: 'Gracias por contactar FlujoPy Consultor',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #0ea5e9;">¡Gracias por contactarnos!</h1>
              <p>Hola ${validatedData.name},</p>
              <p>Hemos recibido tu consulta sobre <strong>${validatedData.interest}</strong> y nos pondremos en contacto contigo en las próximas 24 horas.</p>
              <p>Mientras tanto, puedes:</p>
              <ul>
                <li>Visitar nuestro <a href="https://flujopy.com/blog">blog</a> para conocer más sobre nuestros servicios</li>
                <li>Seguirnos en nuestras redes sociales</li>
                <li>Contactarnos directamente por WhatsApp: <a href="https://wa.me/${process.env.WHATSAPP_NUMBER}">+${process.env.WHATSAPP_NUMBER}</a></li>
              </ul>
              <p>¡Esperamos poder ayudarte a transformar tu negocio!</p>
              <p>Saludos,<br>El equipo de FlujoPy Consultor</p>
            </div>
          `
        })
      } catch (emailError) {
        console.error('Error sending confirmation email:', emailError)
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Lead creado exitosamente',
      leadId: lead.id 
    })

  } catch (error) {
    console.error('Error creating lead:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Datos inválidos', errors: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, message: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}