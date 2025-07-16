import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build')

export async function POST(request: Request) {
  try {
    const body = await request.formData()
    const name = body.get("name") as string
    const email = body.get("email") as string
    const phone = body.get("phone") as string
    const company = body.get("company") as string
    const consumption = body.get("consumption") as string

    // Enviar email para a equipe
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["josueleit.dev@gmail.com"],
      subject: "Novo Lead - Mercado Livre de Energia",
      html: `
        <h2>Novo Lead Capturado</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Consumo:</strong> ${consumption}</p>
      `,
    })

    // Enviar email de confirmação para o lead
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "Recebemos seu contato - Neoenergia",
      html: `
        <h2>Olá ${name}!</h2>
        <p>Obrigado por se interessar pelo Mercado Livre de Energia da Neoenergia.</p>
        <p>Nossa equipe entrará em contato em breve para apresentar as melhores soluções para sua empresa.</p>
        <p>Atenciosamente,<br>Equipe Neoenergia</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao processar lead:", error)
    return NextResponse.json(
      { error: "Erro ao processar sua solicitação" },
      { status: 500 }
    )
  }
} 