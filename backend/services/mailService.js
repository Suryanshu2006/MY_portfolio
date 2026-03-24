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

  const responseText = await response.text();
  let result;
  try {
    result = JSON.parse(responseText);
  } catch (e) {
    console.error('Non-JSON Response:', responseText);
    throw new Error(`Server returned HTML instead of JSON. Status: ${response.status}. Body: ${responseText.substring(0, 100)}...`);
  }

  if (!result.success) {
    throw new Error(result.message || 'Web3Forms API Error');
  }
  return result;
};

module.exports = { sendEmail };
