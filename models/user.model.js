const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');
const SALT_FACTOR   = 10;
const EMAIL_PATTERN    = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const PASSWORD_PATTERN = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
// const URL_PATTERN      = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'UserName is required',
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: 'Email is required',
    unique: true,
    trim: true,
    match: [EMAIL_PATTERN, 'Invalid email pattern']
  },
  password: {
    type: String,
    required: 'Password is required',
    minlength: 8,
    match: [PASSWORD_PATTERN, 'Invalid password pattern (at least 8 characters with any uppercase, lowercase and digit)']
  },
  avatarURL: {
    type: String,
    default: 'http://gravatar.com/avatar/?s=80&d=mm',
    // TODO: Mejorar la validación
    // match: [URL_PATTERN, 'Invalid url pattern']
  } 
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      // ret.id = ret._id; 
      ret.id = doc._id //???
      delete ret._id,
      delete ret.__v;
      delete ret.password;
      return ret;
    }
  }
})

userSchema.pre('save', function(next) {
  const user = this;
  if ( !user.isModified('password') ) { next(); }
  else {
    bcrypt.genSalt(SALT_FACTOR)
      .then( salt => {
        return bcrypt.hash(user.password, salt)
          .then( hash => {
            user.password = hash;
            next();
          })
      })
      .catch(next)
  }
});

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);
module.exports = User;
