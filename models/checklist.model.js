const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
  checkstate: {
    type: Boolean,
    required: true,
    default: true
  },
  checkcontent: {
    type: String,
    required: 'Content is required',
    unique: true,
    minlength: 50
  }
}, {
  timestamps: true
})

const Checklist = mongoose.model('Checklist', checklistSchema);
module.exports = Checklist;
