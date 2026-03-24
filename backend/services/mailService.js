const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
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
