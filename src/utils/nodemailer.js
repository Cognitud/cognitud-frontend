import nodemailer from 'nodemailer';

// Create a nodemailer transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sandeeps@cognitud.com',  // Your Gmail email address
    pass: 'tifpocmllhjcqtfx',     // Your App Password generated for Gmail
  },
});

// Function to send email
export async function sendEmail({ to, subject, html }) {
  try {
    const info = await transporter.sendMail({
      from: 'sandeeps@cognitud.com',
      to: 'sandeeps@cognitud.com',
      subject,
      html,
    });

    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export default transporter;
