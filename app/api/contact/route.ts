import { NextResponse } from "next/server"
import { Resend } from "resend"

let resend: Resend | null = null

function getResend(): Resend {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

export async function POST(req: Request) {
  try {
    const { name, email, message, intent } = await req.json()

    // 1️⃣ ADMIN NOTIFICATION
    await getResend().emails.send({
      from: "Felix Consulting Group <hello@felixconsult.co>",
      to: "thefelixconsultinggroup@gmail.com", // your admin email
      subject: "New Ecosystem Inquiry",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Submission</h2>
          <p><strong>Intent:</strong> ${intent}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    })

    // 2️⃣ USER CONFIRMATION EMAIL
    await getResend().emails.send({
      from: "Felix Consulting Group <hello@felixconsult.co>",
      to: email,
      subject: "We Received Your Request",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Message Received</h2>
          <p>Hello ${name},</p>
          <p>
            Thank you for reaching out to Felix Consulting Group.
            Your request regarding "<strong>${intent}</strong>" has been received.
          </p>
          <p>
            Our team will review your message and respond shortly.
          </p>
          <br/>
          <p>
            Structured systems. Clear architecture. Long-term scale.
          </p>
          <p><strong>Felix Consulting Group</strong><br/>
          https://felixconsult.co</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
