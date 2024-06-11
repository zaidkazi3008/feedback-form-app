const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
});

module.exports = mongoose.model('Feedback', feedbackSchema);
