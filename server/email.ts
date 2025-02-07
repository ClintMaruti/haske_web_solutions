import nodemailer from 'nodemailer';

const emailConfig = {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS
};

interface EmailMessage {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: EmailMessage): Promise<boolean> {
  if (!emailConfig.user || !emailConfig.pass) {
    console.error("Email credentials not found. Please ensure EMAIL_USER and EMAIL_PASS are set.");
    return false;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailConfig.user,
      pass: emailConfig.pass
    }
  });

  try {
    await transporter.sendMail({
      from: emailConfig.user,
      to: emailConfig.user,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}