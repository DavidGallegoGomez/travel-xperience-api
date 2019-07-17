const mongoose  = require('mongoose');
const constants = require('../constants');

const travelSchema = new mongoose.Schema({
  cityOrigin: {
    type: String,
    required: true
  },
  cityDestination: {
    type: String,
    required: true
  },
  date_from: {
    type: Date,
    required: true
  },
  date_to: {
    type: Date,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;      
      return ret;
    }
  }
});

const Travel = mongoose.model('Travel', travelSchema);
module.exports = Travel;
