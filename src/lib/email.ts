// src/app/actions/email.ts
'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Neue Nachricht von ${name}: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Betreff: ${subject}
        
        Nachricht:
        ${message}
      `,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false };
  }
}