// /app/api/send-contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const formData = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: formData.email,
    to: 'your-email@example.com',
    subject: 'New Contact Request',
    text: JSON.stringify(formData, null, 2),
  })

  return NextResponse.json({ success: true })
}
