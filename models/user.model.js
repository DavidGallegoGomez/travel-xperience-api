const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');
const EMAIL_PATTERN = '';
const SALT_FACTOR   = 10;


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: EMAIL_PATTERN
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    // uppercase: true,
    // lowercase: true
  } 
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      ret.id = ret._id;
      delete ret._id,
      delete ret.__v;
      return ret;
    }
  }
})

// TODO: Validaciones

userSchema.pre('save', function(next){
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(SALT_FACTOR)
      .then(salt => {
        return bcrypt.hash(user.password, salt)
          .then(hash => {
            user.password = hash;
            next();
          })
      })
      .catch(next)
  }
  else {
    next()
  }
});

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);
module.exports = User;
