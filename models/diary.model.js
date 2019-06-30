const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  daycontent: {
    type: [String],
    required: 'Content is required',
    unique: true,
    minlength: [50, 'More info, please']
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

const Diary = mongoose.model('Diary', diarySchema);
module.exports = Diary;
