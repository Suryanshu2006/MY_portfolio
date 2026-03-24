const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g., 'Frontend', 'Backend', 'Tools'
  logo: { type: String }, // optional logo url or icon name
});

module.exports = mongoose.model('Skill', skillSchema);
