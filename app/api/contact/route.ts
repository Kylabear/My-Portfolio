import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail app password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER, // Your Gmail address
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    let errorMsg = 'Unknown error';
    if (error instanceof Error) {
      errorMsg = error.message;
    }
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
