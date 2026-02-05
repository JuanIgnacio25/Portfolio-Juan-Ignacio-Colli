import { Resend } from "resend"
import { NextResponse } from "next/server"
import { getContactSchema } from "@/lib/validations/contactSchema"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validación server-side (IMPORTANTÍSIMO)
    const schema = getContactSchema("es") // el idioma acá no importa tanto
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid data" },
        { status: 400 }
      )
    }

    const { fullName, email, message } = parsed.data

   await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Nuevo mensaje de ${fullName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6">
          <h2>Nuevo mensaje desde tu portfolio</h2>
          <p><strong>Nombre:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        </div>
      `,
    })

    return NextResponse.json({success: true});
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Error sending email" },
      { status: 500 }
    )
  }
}