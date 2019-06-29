const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  daycontent: {
    type: String,
    required: 'Content is required',
    unique: true,
    minlength: 50
  }
}, {
  timestamps: true
})

const Diary = mongoose.model('Diary', diarySchema);
module.exports = Diary;
