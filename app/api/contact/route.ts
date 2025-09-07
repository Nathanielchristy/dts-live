// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstname,lastname, email, phone, message } = body;

  if (!firstname || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
        from: 'Dates Technical Services <onboarding@resend.dev>', // can change once domain is verified
      to: ['datestechnicalservices@gmail.com'],
      subject: `New Customer Enquiry: ${firstname}`,
      text: `
First Name: ${firstname}
Last Name: ${lastname}   
Email: ${email}
Phone: ${phone || 'Not provided'}
Message: ${message}
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
