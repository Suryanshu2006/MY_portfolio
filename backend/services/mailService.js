const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: '74.125.136.108', // smtp.gmail.com IPv4 address
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  servername: 'smtp.gmail.com' // Ensures SSL certificate still matches
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
