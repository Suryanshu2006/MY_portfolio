const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  duration: { type: String, required: true },
  responsibilities: [{ type: String }],
  achievements: [{ type: String }],
  logo: { type: String }
});

module.exports = mongoose.model('Internship', internshipSchema);
