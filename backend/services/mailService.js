const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  family: 4 // Force IPv4 to avoid ENETUNREACH (IPv6) issues on Render
});

const sendEmail = (name, email, message) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'singhsuryanshukumar5@gmail.com', // User's email
    subject: `New Portfolio Message from ${name}`,
    text: `You have received a new message from your portfolio website:
    
Name: ${name}
Email: ${email}
Message: ${message}
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
