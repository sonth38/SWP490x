const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  objectives: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Charity',charitySchema)