const mongoose  = require('mongoose');
const constants = require('../constants');

const travelSchema = new mongoose.Schema({
  city: { // From API
    type: String,
    required: true
  },
  country: { // From API
    type: String,
    required: true
  },
  // TODO
  /*
  tourismType: {
    type: String,
    enum: constants.tourismType,
    required: true
  },
  economy: {
    type: String,
    enum: constants.economy,
    required: true
  },
  */
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
