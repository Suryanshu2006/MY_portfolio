const sendEmail = async (name, email, message) => {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
      name: name,
      email: email,
      message: message,
      subject: `New Portfolio Message from ${name}`,
      from_name: 'Portfolio Contact'
    })
  });

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || 'Web3Forms API Error');
  }
  return result;
};

module.exports = { sendEmail };
