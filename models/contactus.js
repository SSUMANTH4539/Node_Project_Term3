const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date,  default: Date.now }
});

const contact = mongoose.model('contact', contactSchema);
module.exports = contact;
